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
  categoryHref,
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
    let currentSide = imgSide;

    for (let i = 0; i + 2 < products.length; i += 3) {
      productsInnerHtml += `<tr><td ${
        insideContainer ? 'class="newsletterContainer"' : ''
      }><table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;"><tr>`;

      const bigProduct = (p) => {
        const withCategoryLink = p?.useCategoryLink ? { ...p, categoryLink: categoryHref } : p;
        return Product(withCategoryLink, showPrices, showNames, '#000', align, gapBetweenVertical, p?.useCategoryLink);
      };

      // Big image on the left
      if (currentSide === 'left') {
        productsInnerHtml += `<td>${bigProduct(products[i])}</td>`;
        productsInnerHtml += renderGapTd('left');
      }

      productsInnerHtml += `<td><table cellspacing="0" cellpadding="0" style="width: 100%;">`;
      productsInnerHtml += `<tr><td>${Product(products[i + 1], showPrices, showNames, color, align, gapBetweenVertical, products[i + 1]?.useCategoryLink)}</td></tr>`;
      productsInnerHtml += `<tr><td>${Product(products[i + 2], showPrices, showNames, color, align, gapBetweenVertical, products[i + 2]?.useCategoryLink)}</td></tr>`;
      productsInnerHtml += `</table></td>`;

      // Big image on the right
      if (currentSide === 'right') {
        productsInnerHtml += renderGapTd('right');
        productsInnerHtml += `<td>${bigProduct(products[i])}</td>`;
      }

      productsInnerHtml += '</tr></table></td></tr>';

      // Flip side for next group
      currentSide = currentSide === 'left' ? 'right' : 'left';
    }
  }

  return productsInnerHtml;
};
