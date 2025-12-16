import { appConfig as c } from '@utils/config.js';
import { toast } from 'sonner';

export let staticTranslations = {
  header: {},
  footer: {},
  templates: {},
  category_links: {},
  category_titles: {},
};

export let queries = {}; // campaignId -> slug -> { name: data, ... }

export function setQueries(campaignId, slug, queryData) {
  if (!queries[campaignId]) {
    queries[campaignId] = {};
  }
  queries[campaignId][slug] = queryData;
}

export function getQueries(campaignId, slug) {
  return queries[campaignId]?.[slug] || {};
}

export default async function initStaticTranslations() {
  // Check if static translations are already loaded
  const isAlreadyLoaded = Object.values(staticTranslations).some(sheet => Object.keys(sheet).length > 0);
  
  console.log('Checking if static translations are loaded:', isAlreadyLoaded);
  console.log('Current staticTranslations state:', Object.keys(staticTranslations).map(key => ({ key, length: Object.keys(staticTranslations[key]).length })));
  
  if (isAlreadyLoaded) {
    console.log('Static translations already loaded, skipping initialization');
    return;
  }

  console.log('Initializing static translations...');
  
  const loadPromise = Promise.all(
    Object.keys(staticTranslations).map(async (key, index) => {
      // Add delay between requests to avoid Google Sheets API quota limits
      if (index > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      }
      const translations = await getStaticTranslation({ sheet: key });
      // console.log(`Translations for ${key} loaded from ${translations.source || 'unknown'}:`, translations.data);
      staticTranslations[key] = translations.data;
    })
  );

  // Add minimum delay to show loading toast
  const delayedPromise = Promise.all([
    loadPromise,
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]);

  await toast.promise(delayedPromise, {
    loading: 'Initializing translations...',
    success: () => {
      console.log('Static translations initialized.');
      console.log('Complete staticTranslations object:', staticTranslations);
      return 'Translations successfully loaded';
    },
    error: 'Failed to load translations',
  });

  // check if translations are present:
  // console.log(staticTranslations);
}

await initStaticTranslations();

// todo: make alternative functions to get translations directly from Google Sheets API

async function getStaticTranslation({ sheet }) {
  const url = `${c.api_url}static/${sheet}/`;

  try {
    const headers = {
      Accept: 'application/json',
      skip_zrok_interstitial: 'true',
    };
  
    const res = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    if (!res.ok) {
      console.warn(`Failed to fetch static translations for '${sheet}': ${res.status} ${res.statusText}`);
      return { data: {} }; // return empty data to prevent undefined in handlers
    }

    const translations = await res.json();
    return translations;
  } catch (err) {
    console.error(`Error fetching static translations for '${sheet}':`, err);
    return { data: {} }; // return empty data on network error
  }
}

export async function getDynamicTranslation({ year, tab, range }) {
  // encode tab so spaces and special characters are safe in the URL
  const encodedTab = encodeURIComponent(String(tab));
  
  // Always fetch entire sheet, range will be extracted locally
  const url = `${c.api_url}dynamic/${year}/${encodedTab}`;
  
  const headers = {
    Accept: 'application/json',
    // Removed 'Content-Type' for GET to avoid CORS preflight
    skip_zrok_interstitial: 'true',
  };

  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  // parse body depending on content type
  const ct = (res.headers.get('content-type') || '').toLowerCase();
  
  let body = null;

  try {
    if (ct.includes('application/json')) {
      body = await res.json();
    } else {
      body = await res.text();
    }
  } catch (err) {
    body = await res.text().catch(() => null);
  }

  if (!res.ok) {
    return { error: true, status: res.status, statusText: res.statusText, body };
  }

  return body;
}
