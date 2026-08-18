import { Product } from '../Product.js';
import { Space } from '../Space.js';

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  gapBetweenHorizontal = true,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
  productsOuterBg = '',
  productsInnerBg = '',
  productsInnerSpace = '',
  priceColors = {},
}) => {
  let productsInnerHtml = '';
  console.log(priceColors, 'priceColors');
  if (Array.isArray(products)) {
    const cols = 2;
    productsInnerHtml += `
    ${Space({ insideTr: true, className: 'newsletterBottom30px', bg: productsOuterBg })}
    <tr>
      <td style="color: ${color}; ${productsOuterBg ? `background-color: ${productsOuterBg};` : ''}" ${insideContainer ? 'class="newsletterContainer30px"' : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < products.length; i += cols) {
      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const product = products[i + c];

        let horizontalGapValue = gapBetweenHorizontal ? ((c + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"') : '';
        
        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${horizontalGapValue}>`;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color, align, priceColors, productsInnerBg, productsInnerSpace, gapBetweenVertical);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
