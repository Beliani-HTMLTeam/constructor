import { getState } from '@/main/state/appState.js';
import { adjustTableRangeToCountry } from '@/utils/fixRange.js';
import { normalizeTranslations } from '@/utils/normalizeTranslations.js';
import { getDynamicTranslation } from '@/api/translations';

import { toast } from 'sonner';
import { getSheet, setSheet, clearSheets, getSheetKeys } from '@/api/cache.js';

export const fetchTranslations = async ({ tableQueries, tableName }) => {
  let slug = getState('country');
  slug = String(slug).toUpperCase();

  const name = getState('name');
  const shop = getState('shop');

  let translations = {};

  // Group queries by tableName to fetch entire spreadsheets once
  const groupedQueries = new Map();

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
    const tableKey = `${yearNum}::${sanitizedTab}`;

    if (!groupedQueries.has(tableKey)) {
      groupedQueries.set(tableKey, {
        year: yearNum,
        tab: sanitizedTab,
        queries: [],
      });
    }

    groupedQueries.get(tableKey).queries.push(query);
  }

  // Now fetch entire spreadsheets for each unique tableName
  for (const [tableKey, group] of groupedQueries) {
    let res;

    const cached = getSheet(tableKey);
    if (cached) {
      console.log(`Using frontend cached sheet for ${tableKey}`);
      res = { data: cached };
    } else {
      try {
        console.log(`Fetching dynamic translation for tab: "${group.tab}", year: ${group.year}`);

        res = await getDynamicTranslation({
          year: group.year,
          tab: group.tab,
        });

        if (res && !res.error && res.data) {
          setSheet(tableKey, res.data);
        }
      } catch (err) {
        console.error('Network or unexpected error fetching dynamic translation', err);
        toast.error('Failed to fetch translations due to a network or unexpected error');
        continue;
      }
    }

    if (res && res.error) {
      switch (res.status) {
        // unauthorized - not yet implemented on the api side
        case 401:
          console.warn('Unauthorized when fetching translations', { tab: group.tab, year: group.year, res });
          toast.error('Unauthorized: refresh credentials');
          break;

        // not found
        case 404:
          toast.error(`Translation tab not found: ${group.tab} (year ${group.year})`);
          console.error(`Translation tab not found: ${group.tab} (year ${group.year})`, res);
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
          toast.error(`Failed to fetch translations for ${group.tab} (${res.status})`);
          console.error('Failed fetching translations', res);
      }
      continue;
    }

    const fullSheetData = res.data;

    // Now extract data for each query in this group based on their ranges
    for (const query of group.queries) {
      if (fullSheetData && fullSheetData[slug]) {
        // Extract specific range from the full sheet data
        const rangeData = extractRangeFromSheet(fullSheetData[slug], query.tableRange);
        translations[query.name] = rangeData;
      }
    }
  }

  // Convert translations object to the expected array format
  const result = Object.entries(translations).map(([name, data]) => ({
    name,
    data,
  }));

  return result;
};

// Helper function to extract specific range from full sheet data
// --- same as in bun translations api (server)
function extractRangeFromSheet(fullSheetData, range) {
  if (!Array.isArray(fullSheetData)) {
    return [];
  }

  const isRangeValid = /^\d+:\d+$|^\d+$/.test(range);
  if (!isRangeValid) {
    console.error(`Invalid range format: ${range}`);
    return [];
  }

  const [startStr, endStr] = range.split(':');
  // Row 1 is header, so row 2 = index 0, row 3 = index 1, etc.
  const start = parseInt(startStr, 10) - 2; // Convert to 0-based index (accounting for header row)
  const end = endStr ? parseInt(endStr, 10) - 1 : start + 1; // End is exclusive in slice

  // Extract the specified range
  const rangeData = fullSheetData.slice(start, end);

  return rangeData;
}

// Expose cache controls for external use
export { clearSheets as clearSheetCache, getSheetKeys };
