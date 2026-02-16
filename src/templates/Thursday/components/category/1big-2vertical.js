import { Product } from '../Product.js';

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenHorizontal = true,
  gapBetweenVertical = true,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
}) => {
  console.log(`renderowanie kategorii ${id}, ${showPrices}, ${showNames}`);

  const renderGapTd = (side) => {
    if (gapBetweenHorizontal === false || gapBetweenHorizontal === 0) return '';
    const className =
      typeof gapBetweenHorizontal === 'string'
        ? gapBetweenHorizontal
        : side === 'left'
          ? 'newsletterLeft20px'
          : 'newsletterRight20px';
    return `<td class="${className}"></td>`;
  };

  console.log('imageSide ', imageSide, 'id ', id);
  let imgSide = imageSide ?? (id % 2 === 0 ? 'left' : 'right');
  console.log('imageSide ', imgSide, 'id ', id);

  let productsInnerHtml = '';

  if (Array.isArray(products)) {
    productsInnerHtml += `<tr><td><table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;" ${
      insideContainer ? 'class="newsletterContainer"' : ''
    }><tr>`;

    // Big image on the left
    if (imgSide === 'left') {
      productsInnerHtml += `<td>${Product(products[0], showPrices, showNames, '#000', align, gapBetweenVertical)}</td>`;

      productsInnerHtml += renderGapTd('left');
    }

    productsInnerHtml += `<td><table cellspacing="0" cellpadding="0" style="width: 100%;">`;

    productsInnerHtml += `<tr><td>${Product(products[1], showPrices, showNames, color, align, gapBetweenVertical)}</td></tr>`;
    productsInnerHtml += `<tr><td>${Product(products[2], showPrices, showNames, color, align, gapBetweenVertical)}</td></tr>`;

    productsInnerHtml += `</table></td>`;

    // Big image on the right
    if (imgSide === 'right') {
      productsInnerHtml += renderGapTd('right');

      productsInnerHtml += `<td>${Product(products[0], showPrices, showNames, '#000', align, gapBetweenVertical)}</td>`;
    }
    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
