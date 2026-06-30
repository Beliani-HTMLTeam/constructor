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
  country,
  offerTextOverrides,
}) => {
  const countrySlug = String(country ?? '').toLowerCase();
  const offerTextOverrideRaw = offerTextOverrides?.[countrySlug];
  const resolved = typeof offerTextOverrideRaw === 'object' && !Array.isArray(offerTextOverrideRaw)
    ? offerTextOverrideRaw[renderType === 'newsletter' ? 'ns' : 'lp']
    : offerTextOverrideRaw;
  const offerTexts = typeof resolved === 'string' ? [resolved] : (resolved ?? null);

  const filterFreebiesByCountry = (freebiesData, country) => {
    if (!Array.isArray(freebiesData)) return freebiesData;
    
    // If freebies is an array of arrays (rows)
    if (Array.isArray(freebiesData[0])) {
      return freebiesData.map(row => 
        row.filter(freebie => {
          // If no visibility defined, show everywhere
          if (!freebie.visibility) return true;
          // Check if country is in visibility array
          return freebie.visibility.includes(country);
        })
      ).filter(row => row.length > 0); // Remove empty rows
    }
    
    // If freebies is a flat array
    return freebiesData.filter(freebie => {
      if (!freebie.visibility) return true;
      return freebie.visibility.includes(country);
    });
  };

  const filteredFreebies = filterFreebiesByCountry(freebies, country);

  const hasProducts = Array.isArray(products) && products.length > 0;
  const hasFreebiesRows =
    (Array.isArray(freebies) && freebies.length > 0) ||
    (Array.isArray(freebies?.rows) && freebies.rows.length > 0);
  const hasDealProducts = hasProducts || hasFreebiesRows;

  let html = '';

  html += renderOfferSection({
    queries,
    renderType,
    links,
    getPhrase,
    showChooseFrom: hasDealProducts,
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
