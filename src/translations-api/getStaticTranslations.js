import { appConfig as c } from '@utils/config.js';

export let staticTranslations = {
  header: {},
  footer: {},
  templates: {},
  category_links: {},
  category_titles: {},
};

export default function initStaticTranslations() {
  Object.keys(staticTranslations).forEach(async (key) => {
    const translations = await getStaticTranslation({ sheet: key });
    staticTranslations[key] = translations.data;
  });
}

initStaticTranslations();

async function getStaticTranslation({ sheet }) {
  const url = `${c.api_url}static/${sheet}/`;
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

export async function getDynamicTranslation({ tab, range }) {
  const url = `${c.api_url}dynamic/${tab}/${range}/`;
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