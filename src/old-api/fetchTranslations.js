import { getState } from '@/main/state/appState';
import { adjustTableRangeToCountry } from '@/utils/fixRange.js';
import { normalizeTranslations } from '@/utils/normalizeTranslations.js';
import { getDynamicTranslation } from '@/old-api/translations-api/getTranslations';
import { GoogleAuth } from '@/old-api/services/GoogleAuth.js';

import { toast } from 'sonner';

export const fetchTranslations = async ({ tableQueries, tableName }) => {
  let slug = getState('country');
  slug = String(slug).toUpperCase();

  const name = getState('name');
  const shop = getState('shop');

  let translations = {};

  for (let query of tableQueries) {
    // don't mutate original query objects - compute year/tab locally
    let year = undefined;
    let tab = undefined;

    // parse tableName/year from query.tableName first, then fallback to provided tableName
    const currentYearStr = String(new Date().getFullYear());
    if (query.tableName) {
      const tableNameTrimmed = String(query.tableName).trim();

      if (tableNameTrimmed.includes('::')) {
        const [tYear, tName] = tableNameTrimmed.split('::');

        year = String(tYear || '').trim() || currentYearStr;
        tab = String(tName || '').trim() || undefined;
      } else {
        year = currentYearStr;
        tab = tableNameTrimmed || undefined;
      }
    } else if (tableName) {
      const tableNameTrimmed = String(tableName).trim();

      if (tableNameTrimmed.includes('::')) {
        const [tYear, tName] = tableNameTrimmed.split('::');

        year = String(tYear || '').trim() || currentYearStr;
        tab = String(tName || '').trim() || undefined;
      } else {
        year = currentYearStr;
        tab = tableNameTrimmed || undefined;
      }
    } else {
      // no table given - use current year but leave tab undefined (will be skipped)
      year = currentYearStr;
      tab = undefined;
    }

    if (!query.name || !query.tableRange) {
      toast.error(`Table Name/Range or field name missing for ${JSON.stringify(query)}`);
      console.error(`Table Name/Range or field name missing for ${JSON.stringify(query)}`);
      continue;
    }

    // validate computed year/tab
    const yearNum = Number(year);
    if (!Number.isFinite(yearNum)) {
      toast.error(`Bad year for translation: ${year} (query: ${JSON.stringify(query)})`);
      console.error(`Bad year for translation: ${year}`, query);
      continue;
    }

    if (!tab) {
      toast.error(`Bad table name for translation: ${tab} (query: ${JSON.stringify(query)})`);
      console.error(`Bad table name for translation: ${tab}`, query);
      continue;
    }

    const sanitizedTab = String(tab).replace('!', '').trim();
    let res;
    try {
      res = await getDynamicTranslation({
      year: yearNum,
      tab: sanitizedTab,
      range: query.tableRange,
      });
    } catch (err) {
      console.error('Network or unexpected error fetching dynamic translation', err);
      toast.error('Failed to fetch translations due to a network or unexpected error');
      continue;
    }

    if (res && res.error) {
      switch (res.status) {

        // unauthorized - not yet implemented on the api side
        case 401:
          console.warn('Unauthorized when fetching translations', { tab: sanitizedTab, year: yearNum, res });
          toast.error('Unauthorized: refresh credentials');
          break;

        // not found
        case 404:
          toast.error(`Translation tab not found: ${sanitizedTab} (year ${yearNum})`);
          console.error(`Translation tab not found: ${sanitizedTab} (year ${yearNum})`, res);
          break;

        // rate limit - not yet implemented on the api side
        case 429:
          toast.error('Too many requests. Please try again later.');
          console.error('Rate limited when fetching translations', res);
          break;

        // service unavailable, pozar 🚒?
        case 503:
        case 500:
          toast.error('Translation service unavailable.');
          console.error('Service unavailable when fetching translations', res);
          break;

        // other errors
        default:
          toast.error(`Failed to fetch translations for ${sanitizedTab} (${res.status})`);
          console.error('Failed fetching translations', res);
      }
      continue;
    }

    const data = res.data;

    if (data && data[slug]) {
      translations[query.name] = Object.values(data[slug]);
    }
  }

  // Convert translations object to the expected array format
  const result = Object.entries(translations).map(([name, data]) => ({
    name,
    data,
  }));

  return result;

  // old implementation @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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

// old implementation using google apis directly @@@@@@@
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
