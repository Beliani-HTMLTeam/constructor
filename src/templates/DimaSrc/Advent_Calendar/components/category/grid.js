import { Product } from '../Product.js';

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  gapBetweenHorizontal = true,
  align = 'left',
  queries,
  insideContainer = true,
  container,
  color,
  id,
  imageSide,
  alignToSide = false,
}) => {
  let productsInnerHtml = '';
  const containerClass = insideContainer ? (container ?? 'newsletterContainer') : '';

  if (Array.isArray(products)) {
    const cols = 2;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}" ${containerClass ? `class="${containerClass}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < products.length; i += cols) {
      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const product = products[i + c];

        const gapSize = typeof gapBetweenHorizontal === 'number' || (typeof gapBetweenHorizontal === 'string' && gapBetweenHorizontal !== 'true') ? String(gapBetweenHorizontal).replace('px', '') : 10;
        let horizontalGapValue = gapBetweenHorizontal ? ((c + 1) % 2 !== 0 ? `class="newsletterRight${gapSize}px"` : `class="newsletterLeft${gapSize}px"`) : '';

        const imageAlign = alignToSide ? (c === 0 ? 'right' : 'left') : 'center';

        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${horizontalGapValue} align="${imageAlign}">`;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color, align, gapBetweenVertical, false, imageAlign, container);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
