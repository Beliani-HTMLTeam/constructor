import { renderOfferSection } from './deal/offer.js';

export const render = ({
  queries,
  color,
  links,
  getPhrase,
  renderType,
  categoryHref,
  freebiesPerRow = 2,
  copyCode = false,
  copyCodeWeb = false,
  country,
  offerTextOverrides,
  ctaColor = '',
  ctaSettings = {},
}) => {
  const countrySlug = String(country ?? '').toLowerCase();
  const offerTextOverrideRaw = offerTextOverrides?.[countrySlug];
  const resolved =
    typeof offerTextOverrideRaw === 'object' && !Array.isArray(offerTextOverrideRaw)
      ? offerTextOverrideRaw[renderType === 'newsletter' ? 'ns' : 'lp']
      : offerTextOverrideRaw;

  const offerTexts = typeof resolved === 'string' ? [resolved] : (resolved ?? null);

  const copyCodeColor = typeof copyCode === 'object' ? copyCode.color : undefined;
  const copyCodeWebColor = typeof copyCodeWeb === 'object' ? copyCodeWeb.color : undefined;

  const useBubbleForCountry = countrySlug === 'chfr';
  const effectiveCopyCode = useBubbleForCountry && copyCodeWeb ? copyCodeWeb : copyCode;
  const effectiveCopyCodeWeb = useBubbleForCountry ? false : copyCodeWeb;

  let html = '';

  html += renderOfferSection({
    queries,
    renderType,
    links,
    getPhrase,
    showChooseFrom: false,
    showCopyCode: !!effectiveCopyCode,
    showCopyCodeWeb: !!effectiveCopyCodeWeb,
    toastOptions: copyCodeWeb,
    copyCodeColor: copyCodeWebColor ?? copyCodeColor,
    offerTexts,
    ctaColor,
    ctaSettings,
  });

  return html;
};
