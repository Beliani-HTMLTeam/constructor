import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
let privateKey = process.env.GOOGLE_PRIVATE_KEY;

if (!clientEmail || !privateKey) {
  console.warn(
    'Google credentials not fully provided via environment variables (GOOGLE_CLIENT_EMAIL / GOOGLE_PRIVATE_KEY).'
  );
}

// fix escaped newlines in the private key (yes, there can be random \n in that key xD)
if (privateKey && privateKey.includes('\\n')) {
  privateKey = privateKey.replace(/\\n/g, '\n');
}

const xlsxAccount = new JWT({
  email: clientEmail,
  key: privateKey,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const STATIC_SHEET_ID = process.env.GOOGLE_STATIC_SHEET_ID;
const DYNAMIC_2025_ID = process.env.GOOGLE_DYNAMIC_2025_ID;
const DYNAMIC_2026_ID = process.env.GOOGLE_DYNAMIC_2026_ID;

const STATIC_TRANSLATIONS = new GoogleSpreadsheet(STATIC_SHEET_ID, xlsxAccount);

const DYNAMIC_SHEETS: Record<number, GoogleSpreadsheet> = {
  2025: new GoogleSpreadsheet(DYNAMIC_2025_ID, xlsxAccount),
  2026: new GoogleSpreadsheet(DYNAMIC_2026_ID, xlsxAccount),
};

export async function getStaticTranslations() {
  await STATIC_TRANSLATIONS.loadInfo();
  return STATIC_TRANSLATIONS;
}

export async function getDynamicTranslations(year?: number) {
  const y = year && DYNAMIC_SHEETS[year] ? year : 2025;
  const doc = DYNAMIC_SHEETS[y];

  await doc.loadInfo();

  return doc;
}
