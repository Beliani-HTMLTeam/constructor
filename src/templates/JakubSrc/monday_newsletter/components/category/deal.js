import { renderFreebieGrid } from './deal/grid.js';
import { renderOfferSection } from './deal/offer.js';

export const render = ({
  freebies,
  products,
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
}) => {
  const countrySlug = String(country ?? '').toLowerCase();
  const offerTextOverrideRaw = offerTextOverrides?.[countrySlug];
  const resolved = typeof offerTextOverrideRaw === 'object' && !Array.isArray(offerTextOverrideRaw)
    ? offerTextOverrideRaw[renderType === 'newsletter' ? 'ns' : 'lp']
    : offerTextOverrideRaw;
  const offerTexts = typeof resolved === 'string' ? [resolved] : (resolved ?? null);
  const hasProducts = Array.isArray(products) && products.length > 0;
  const hasFreebiesRows =
    (Array.isArray(freebies) && freebies.length > 0) ||
    (Array.isArray(freebies?.rows) && freebies.rows.length > 0);
  const hasDealProducts = hasProducts || hasFreebiesRows;

  const copyCodeColor = typeof copyCode === 'object' ? copyCode.color : undefined;
  const copyCodeWebColor = typeof copyCodeWeb === 'object' ? copyCodeWeb.color : undefined;

  let html = '';

  html += renderOfferSection({
    queries,
    renderType,
    links,
    getPhrase,
    showChooseFrom: hasDealProducts,
    showCopyCode: !!copyCode,
    showCopyCodeWeb: !!copyCodeWeb,
    copyCodeColor: copyCodeWebColor ?? copyCodeColor,
    offerTexts,
  });

  if (hasDealProducts) {
    html += renderFreebieGrid({
      freebies,
      products,
      color,
      freeText: getPhrase('Free'),
      categoryHref,
      freebiesPerRow,
    });
  }

  return html;
};
