import { getState } from '@/main/state/appState';
import { adjustTableRangeToCountry } from '@/utils/fixRange.js';
import { normalizeTranslations } from '@/utils/normalizeTranslations.js';
import { getDynamicTranslation } from '@/translations-api/getStaticTranslations';
import { GoogleAuth } from '@/services/GoogleAuth.js';
import Toastify from 'toastify-js';
export const fetchTranslations = async ({ tableQueries }) => {
  console.log(tableQueries)

  let slug = getState('country');
  slug = String(slug).toUpperCase();

  const name = getState('name');
  const shop = getState('shop');

  let translations = {};

  for (const query of tableQueries) {
    if (!query.tableName || !query.name || !query.tableRange) {
      console.error(`Table Name/Range or field name missing for ${JSON.stringify(query)}`);
      continue;
    }

    const res = await getDynamicTranslation({ tab: String(query.tableName).replace("!", ""), range: query.tableRange });
    const data = res.data;

    if (data && data[slug]) {
      translations[query.name] = Object.values(data[slug]);
    }
  }

  console.log(translations)

  // Convert translations object to the expected array format
  const result = Object.entries(translations).map(([name, data]) => ({
    name,
    data
  }));

  return result;

  // const tableColumn = shop.languages.find((item) => item.language.name === name);

  // if (!tableColumn.tableColumn) {
  //   Toastify({
  //     text: `Table column is empty`,
  //     escapeMarkup: false,
  //     duration: 3000,
  //   }).showToast();
  //   return;
  // }
  // const promises = [];
  // for (const query of tableQueries) {
  //   const queryWithAdjustedRange = adjustTableRangeToCountry(query, tableColumn.tableColumn);
  //   promises.push(queryWithAdjustedRange);
  // }

  // const promisesResult = await Promise.allSettled(
  //   promises.map((queryWithAdjustedRange) => getTranslations(queryWithAdjustedRange))
  // );

  // const computedPromise = [];
  // for (const { value } of promisesResult) {
  //   // example log:
  //   //  {
  //   //   "range": "'25.07.25 - Outdoor rugs'!N24",
  //   //   "majorDimension": "ROWS",
  //   //   "values": [
  //   //       [
  //   //           "Jetzt shoppen"
  //   //       ]
  //   //   ],
  //   //   "name": "cta"
  //   // } 
  //   // console.log(value);

  //   if (value.error) {
  //     let error = value.error;
  //     let code = error.code;
  //     let message = error.message;

  //     switch (code) {
  //       case 400:
  //         throw new Error(message);
  //       case 401:
  //         GoogleAuth.login();
  //         break;
  //       case 429:
  //         throw new Error('Too many request. Please, try again later.');
  //       case 503:
  //         throw new Error('Service currently unavailable');
  //       default:
  //         throw new Error('Unknown error', error);
  //         break;
  //     }
  //   }

  //   if ('values' in value && value.values.length > 0) {
  //     computedPromise.push({
  //       data:
  //         value.majorDimension === 'COLUMNS'
  //           ? value.values
  //           : normalizeTranslations(value.values, value.fallback, value.range),
  //       name: value.name,
  //     });
  //   } else {
  //     computedPromise.push({
  //       data: value.fallback || undefined,
  //       name: value.name,
  //     });
  //   }
  // }

  // return computedPromise;
};

export async function getTranslations({ tableId, tableName, tableRange, fallback, name }) {
  const token = localStorage.getItem('token');
  // includeGridData
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${tableId}/values/${tableName}${tableRange}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const data = await response.json();
    return { ...data, name, fallback };
  } catch (error) {
    console.log(error);
  }
}
