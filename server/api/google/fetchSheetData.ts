import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Result } from '../types/Result.ts';
import { getStaticTranslations, getDynamicTranslations } from './auth';

let messages = {
  CATEGORY_LINKS: 'Category links fetched successfully',
  CATEGORY_TITLES: 'Category titles fetched successfully',
  FOOTER: 'Footer fetched successfully',
  HEADER: 'Header fetched successfully',
  TEMPLATES: 'Templates fetched successfully',
};

export async function fetchSheetData(
  spreadsheet: string,
  sheetName: string,
  year?: number
): Promise<Result<Record<string, any>>> {
  let document: GoogleSpreadsheet;

  let start_time = Date.now();
  let message: string;

  switch (spreadsheet) {
    case 'STATIC':
      document = await getStaticTranslations();
      break;
    case 'DYNAMIC':
      document = await getDynamicTranslations(year);
      break;
    default:
      return {
        code: 500,
        message: 'Error 500! Unexpected error occurred.',
      };
  }

  const sheet = document.sheetsByTitle[sheetName];

  if (!sheet) {
    console.log(
      `Sheet "${sheetName}" not found in spreadsheet "${spreadsheet}". Available sheets:`,
      Object.keys(document.sheetsByTitle)
    );
    return {
      code: 404,
      message: 'No translations found!',
    };
  }

  await sheet.loadHeaderRow();

  const headers = sheet.headerValues;
  const rows = await sheet.getRows();
  const result: { [key: string]: any } = {};

  for (const header of headers) result[header] = rows.map((row) => row.get(header)?.replaceAll('\n', '<br />').trim());

  const responseTime = Number((Date.now() - start_time).toFixed(2));

  if (spreadsheet === 'DYNAMIC') {
    message = 'Dynamic sheet fetched successfully';
  } else {
    message = messages[sheetName];
  }

  return {
    message: message,
    dataOrigin: 'googleAPI',
    executionTime: responseTime,
    code: 200,
    data: result,
  };
}
