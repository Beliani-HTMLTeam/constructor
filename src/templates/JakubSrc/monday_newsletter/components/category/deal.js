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
  const resolved =
    typeof offerTextOverrideRaw === 'object' && !Array.isArray(offerTextOverrideRaw)
      ? offerTextOverrideRaw[renderType === 'newsletter' ? 'ns' : 'lp']
      : offerTextOverrideRaw;

  const filterFreebiesByCountry = (freebiesData, country) => {
    if (!Array.isArray(freebiesData)) return freebiesData;

    const isVisible = (freebie) => {
      if (Array.isArray(freebie.exclude) && freebie.exclude.includes(country)) return false;

      if (Array.isArray(freebie.visibility) && !freebie.visibility.includes(country))
        return freebie.visibility.includes(country);

      return true;
    };

    if (Array.isArray(freebiesData[0])) {
      return freebiesData
        .map((row) => row.filter(isVisible))
        .filter((row) => row.length > 0);
    }

    return freebiesData.filter(isVisible);
  };
  const filteredFreebies = filterFreebiesByCountry(freebies, country);
  const offerTexts = typeof resolved === 'string' ? [resolved] : (resolved ?? null);
  const hasProducts = Array.isArray(products) && products.length > 0;
  const hasFreebiesRows =
    (Array.isArray(freebies) && freebies.length > 0) || (Array.isArray(freebies?.rows) && freebies.rows.length > 0);
  const hasDealProducts = hasProducts || hasFreebiesRows;

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
    showChooseFrom: hasDealProducts,
    showCopyCode: !!effectiveCopyCode,
    showCopyCodeWeb: !!effectiveCopyCodeWeb,
    copyCodeColor: copyCodeWebColor ?? copyCodeColor,
    offerTexts,
  });

  if (hasDealProducts) {
    html += renderFreebieGrid({
      freebies: filteredFreebies,
      products,
      color,
      freeText: getPhrase('Free'),
      categoryHref,
      freebiesPerRow,
    });
  }

  return html;
};
