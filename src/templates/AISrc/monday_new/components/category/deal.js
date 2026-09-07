import { Space } from '../Space.js';
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
  theme = {},
  disableHighPrice = false,
  type = 'newsletter',
  combineOfferParts = false,
  ctaSettings = {},
  prodSettings = {},
  offerSpaceAfter = '',
  tdClass = 'newsletterContainer'
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

  html += renderOfferSection({
    queries,
    renderType,
    links,
    getPhrase,
    offerTexts,
    ctaSrc,
    theme,
    combineOfferParts,
    ctaSettings,
    prodSettings,
    tdClass,
    offerSpaceAfter,
  });

  if (hasDealProducts) {

    const dealColorBg = theme?.dealBg ?? theme?.primary ?? '#ffffff';
    const dealColorText = theme?.black ?? '#000000';

    html += `
      ${Space({ insideTr: true, className: 'newsletterBottom40px', bg: dealColorBg })}
      <tr>
        <td style="background-color: ${dealColorBg}; color: ${dealColorText};" class=${tdClass} align="center">
          <span style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 16px; color: ${dealColorText}; display: block; text-align: center;">
            ${chooseFromHeader}
          </span>
        </td>
      </tr>
    `;

    const freebieSettings = {...prodSettings}

    html += renderFreebieGrid({
      freebies: filteredFreebies,
      products,
      color: '#000000',
      freeText: typeof getPhrase === 'function' ? getPhrase('Free') : 'FREE',
      categoryHref,
      freebiesPerRow,
      theme,
      disableHighPrice,
      prodSettings: freebieSettings
    });

    const colorBg = theme?.freebieColor ?? theme?.primary ?? '#ffffff';
    const colorText = theme?.black ?? '#000000';
    const colorGray = theme?.gray ?? '#555555';

    html += `
      <tr>
        <td class="${tdClass} freebieSubtitle" style="background-color:${colorBg};color:${colorText};" align="${prodSettings.align ?? 'left'}">
          <span style="${type === 'newsletter' ? 'font-family:\'Open Sans\',Arial,sans-serif;' : ''}font-size:${prodSettings.freebieSize ? prodSettings.freebieSize : 14}px;line-height:1.2;color:${colorText};display:block;">
            ${freebiesSubtitle}
          </span>
        </td>
      </tr>
    `;
  }

  return html;
};
