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
  ctaSrc = null,
  theme,
  disableHighPrice = false,
  type = 'newsletter',
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

  // Prefer row 31 (freebies_subtitle) over the generic phrase
  let chooseFromHeader = queries?.freebies_title?.[0] ?? getPhrase?.('Choose from:') ?? 'TRANSLATION NOT FOUND';
  chooseFromHeader = chooseFromHeader.toUpperCase();

  const freebiesSubtitle = queries?.freebies_subtitle?.[0] ?? 'TRANSLATION NOT FOUND';
  let html = '';

  // 1. Dark Red Offer Top Section (#750000)
  // Renders: Row 25 (Offer title) -> Row 26 (Offer part 1) -> Row 27 (Offer part 2) -> Row 30 (Get Code Button) -> Row 29 (Offer date)
  html += renderOfferSection({
    queries,
    renderType,
    links,
    getPhrase,
    offerTexts,
    ctaSrc,
    theme
  });

  // 2. White Section (#ffffff) with Choose from: header line & freebie products grid
  if (hasDealProducts) {

    const dealColorBg = theme?.white ?? '#ffffff';
    const dealColorText = theme?.black ?? '#000000';

    html += `
      <tr>
        <td style="background-color: ${dealColorBg}; color: ${dealColorText}; padding: 25px 20px 15px 20px;" align="center">
          <span style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 15px; color: ${dealColorText}; display: block; text-align: center;">
            ${chooseFromHeader}
          </span>
        </td>
      </tr>
    `;

    html += renderFreebieGrid({
      freebies: filteredFreebies,
      products,
      color: '#000000',
      freeText: typeof getPhrase === 'function' ? getPhrase('Free') : 'FREE',
      categoryHref,
      freebiesPerRow,
      theme,
      disableHighPrice,
    });

    const colorBg = theme?.white ?? '#ffffff';
    const colorText = theme?.black ?? '#000000';
    const colorGray = theme?.gray ?? '#555555';

    html += `
      <tr>
        <td class="freebieSubtitle" style="background-color: ${colorBg}; color: ${colorText}; padding: 0 20px 25px 20px;" align="left">
          <span style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 16px; color: ${colorText}; display: block;">
            ${freebiesSubtitle}
          </span>
        </td>
      </tr>
    `;
  }

  return html;
};
