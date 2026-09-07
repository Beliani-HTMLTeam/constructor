import { Product } from '../Product.js';
import { Space } from '../Space.js';

export const render = ({
  products,
  showPrices,
  showNames,
  prodSettings = {},
  gapBetweenVertical = true,
  gapBetweenHorizontal = true,
  country,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
  theme = {},
  tdClass = 'newsletterContainer',
}) => {
  let productsInnerHtml = '';

  const filterProductByCategory = (productsData, country) => {
    if (!Array.isArray(productsData)) return productsData;

    const isVisible = (product) => {
      if (Array.isArray(product.exclude) && product.exclude.includes(country)) return false;

      if (Array.isArray(product.visibility) && !product.visibility.includes(country))
        return product.visibility.includes(country);

      return true;
    };

    if (Array.isArray(productsData[0])) {
      return productsData
        .map((row) => row.filter(isVisible))
        .filter((row) => row.length > 0);
    }

    return productsData.filter(isVisible);
  };

  if (Array.isArray(products)) {
    const cols = 2;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color};${prodSettings.background ? ` background: ${prodSettings.background}` : ''}" ${insideContainer ? `class="${prodSettings.tdClass ?? tdClass}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;
    
    if (prodSettings.spaceBefore)
      productsInnerHtml += Space({ insideTr: true, className: prodSettings.spaceBefore })

    let filteredProducts = filterProductByCategory(products, country)

    for (let i = 0; i < filteredProducts.length; i += cols) {
      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        let product = filteredProducts[i + c];

        if (product !== undefined)
          product.settings = prodSettings ?? {};

        let horizontalGapValue = gapBetweenHorizontal ? ((c + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"') : '';
        
        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${horizontalGapValue}>`;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color, theme, align, gapBetweenVertical);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
