import { appConfig as c } from '@utils/config.js';
import { toast } from 'sonner';

export let staticTranslations = {
  header: {},
  footer: {},
  templates: {},
  category_links: {},
  category_titles: {},
};

export default async function initStaticTranslations() {
  const loadPromise = Promise.all(
    Object.keys(staticTranslations).map(async (key) => {
      const translations = await getStaticTranslation({ sheet: key });
      // console.log(`Translations for ${key}:`, translations.data);
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
    success: 'Translations successfully loaded',
    error: 'Failed to load translations',
  });

  console.log('Static translations initialized.');

  // check if translations are present:
  // console.log(staticTranslations);
}

await initStaticTranslations();

// todo: make alternative functions to get translations directly from Google Sheets API

async function getStaticTranslation({ sheet }) {
  const url = `${c.api_url}static/${sheet}`;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Origin: 'https://kznlabs.com',
    skip_zrok_interstitial: 'true',
    'User-Agent': 'skibidi-sigma-client',
  };

  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  const translations = await res.json();

  // console.log('Result for', sheet, translations);
  return translations;
}

export async function getDynamicTranslation({ year, tab, range }) {
  const url = `${c.api_url}dynamic/${year}/${tab}/${range}/`;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Origin: 'https://kznlabs.com',
    skip_zrok_interstitial: 'true',
    'User-Agent': 'skibidi-sigma-client',
  };

  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  const translations = await res.json();

  return translations;
}
