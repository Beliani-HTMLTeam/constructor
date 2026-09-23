import { getState } from '@/main/state/appState.js';
import { toast } from 'sonner';
import { translationCache } from './cache.js';
import { apiClient } from './client.js';

class DynamicTranslationsService {
  constructor(cache = translationCache, client = apiClient) {
    this.cache = cache;
    this.client = client;
  }

  // Helper function to extract specific range from full sheet data
  extractRange(fullSheetData, range) {
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
    const start = parseInt(startStr, 10) - 2;
    const end = endStr ? parseInt(endStr, 10) - 1 : start + 1;

    return fullSheetData.slice(start, end);
  }

  groupQueries(tableQueries, defaultTableName) {
    const currentYearStr = String(new Date().getFullYear());
    const groupedQueries = new Map();

    for (let query of tableQueries) {
      let year;
      let tab;

      const sourceTable = query.tableName || defaultTableName;
      if (sourceTable) {
        const trimmed = String(sourceTable).trim();
        if (trimmed.includes('::')) {
          const [tYear, tName] = trimmed.split('::');
          year = String(tYear || '').trim() || currentYearStr;
          tab = String(tName || '').trim() || undefined;
        } else {
          year = currentYearStr;
          tab = trimmed || undefined;
        }
      } else {
        year = currentYearStr;
        tab = undefined;
      }

      if (!query.name || !query.tableRange) {
        toast.error(`Table Name/Range or field name missing for ${JSON.stringify(query)}`);
        console.error(`Table Name/Range or field name missing for ${JSON.stringify(query)}`);
        continue;
      }

      const yearNum = Number(year);
      if (!Number.isFinite(yearNum) || !tab) {
        toast.error(`Bad translation table: ${year}::${tab}`);
        console.error(`Bad translation table: ${year}::${tab}`, query);
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

    return groupedQueries;
  }

  async fetch({ tableQueries, tableName }) {
    let slug = getState('country');
    slug = String(slug).toUpperCase();

    const translations = {};
    const groupedQueries = this.groupQueries(tableQueries, tableName);

    for (const [tableKey, group] of groupedQueries) {
      let res;
      const cached = this.cache.getSheet(tableKey);

      if (cached) {
        console.log(`Using cached sheet for ${tableKey}`);
        res = { data: cached };
      } else {
        try {
          console.log(`Fetching dynamic translation for tab: "${group.tab}", year: ${group.year}`);

          const fetchPromise = this.client
            .getDynamicSheet({
              year: group.year,
              tab: group.tab,
            })
            .then((response) => {
              if (!response || response.error) {
                throw new Error(response?.statusText || `Status ${response?.status || 'unknown'}`);
              }
              return response;
            });

          toast.promise(fetchPromise, {
            loading: (
              <div data-content="">
                <div data-title="">Loading campaign translations...</div>
                <div data-description="">{`${group.year}::${group.tab}`}</div>
              </div>
            ),
            success: () => ({
              message: 'Campaign translations loaded!',
              description: `${group.year}::${group.tab}`,
            }),
            error: (err) => ({
              message: 'Failed to load campaign translations',
              description: `${group.year}::${group.tab}, error: ${err.message}`,
            }),
          });

          res = await fetchPromise;

          if (res && !res.error && res.data) {
            this.cache.setSheet(tableKey, res.data);
          }
        } catch (err) {
          console.error('Network error fetching dynamic translation', err);
          continue;
        }
      }

      if (res && res.error) {
        toast.error(`Failed to fetch translations for ${group.tab}`);
        continue;
      }

      const fullSheetData = res.data;

      for (const query of group.queries) {
        if (fullSheetData && fullSheetData[slug]) {
          translations[query.name] = this.extractRange(fullSheetData[slug], query.tableRange);
        }
      }
    }

    return Object.entries(translations).map(([name, data]) => ({
      name,
      data,
    }));
  }
}

export const dynamicTranslations = new DynamicTranslationsService();
export { DynamicTranslationsService };
export default dynamicTranslations;

