import { appConfig as c } from '../utils/config.js';

export default async function getHeaderTranslations({ language } = {}) {
  console.log('Fetching header translations...');
  const url = c.api_url + 'static/templates/';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Origin: 'https://figma.com',
    skip_zrok_interstitial: 'true',
    'User-Agent': 'Figma-Plugin',
  };

  console.log("API URL -> ", url);

  console.log('Request sent!');
  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  const translations = await res.json();
  console.log('Json received!');
  console.log('Header translations: ', translations);

  return translations;
}
