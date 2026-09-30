import { getState, subscribeState } from '@/main/state/appState.js';
import { PREVIEW_MODE } from '@/main/rendering/preview.js';
import { templateToParam, languageToParam } from '@/utils/selectionParams.js';

const URL_PARAMS = ['scope', 'campaign', 'template', 'shop', 'lang', 'view'];
const SYNCED_STATE_KEYS = new Set(['scope', 'selectedCampaign', 'template', 'shop', 'selectedLanguage', 'previewMode']);

// read at import time, before the first state change rewrites the URL
export const initialUrlParams = (() => {
  const searchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(URL_PARAMS.map((name) => [name, searchParams.get(name)]));
})();

let isSyncEnabled = false;

function buildSearchParams() {
  const params = new URLSearchParams();
  const scope = getState('scope');
  const campaignId = getState('selectedCampaign')?.startId;
  const template = getState('template');
  const shop = getState('shop');
  const language = getState('selectedLanguage');

  if (scope) params.set('scope', scope);
  if (scope && campaignId) params.set('campaign', campaignId);
  if (campaignId && template) params.set('template', templateToParam(template));
  if (campaignId && shop) params.set('shop', shop.slug);

  const languageParam = campaignId && shop && language ? languageToParam(language, shop) : null;
  if (languageParam) params.set('lang', languageParam);

  if (getState('previewMode') === PREVIEW_MODE.MOBILE) params.set('view', PREVIEW_MODE.MOBILE);

  return params;
}

function writeUrl() {
  const query = buildSearchParams().toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextUrl !== currentUrl) window.history.replaceState(null, '', nextUrl);
}

// enabled only after the initial selection is restored, otherwise the URL would be wiped half-way through
export function enableUrlSync() {
  isSyncEnabled = true;
  writeUrl();
}

subscribeState((key) => {
  if (isSyncEnabled && SYNCED_STATE_KEYS.has(key)) writeUrl();
});
