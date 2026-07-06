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
  color,
  id,
  imageSide,
  categoryHref,
}) => {
  let productsInnerHtml = '';

  if (!Array.isArray(products) || products.length === 0) return productsInnerHtml;

  const columns = 3;

  // ${insideContainer ? 'class="newsletterContainer"' : ''}

  productsInnerHtml += `
    <tr>
      <td style="color: ${color}" >
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

  for (let prodId = 0; prodId < products.length; prodId += columns) {
    productsInnerHtml += '<tr>';

    for (let columnId = 0; columnId < columns; columnId++) {
      const product = products[prodId + columnId];
      // logic looks inverted but it's correct and stops layout from breaking
      const productImageAlign = columnId === 0 ? 'right' : columnId === columns - 1 ? 'left' : 'center';

      const horizontalGapClass = !gapBetweenHorizontal
        ? ''
        : columnId === 0
          ? 'newsletter3ProductsLeft'
          : columnId === columns - 1
            ? 'newsletter3ProductsRight'
            : 'newsletter3ProductsCenter';

      productsInnerHtml += `<td style="color: ${color}; width:33.333333333333336%;vertical-align:top;" width="33.333333333333336%" ${horizontalGapClass ? `class="${horizontalGapClass}"` : ''}>`;

      if (product) {
        const productWithCategoryHref =
          product?.useCategoryLink && categoryHref ? { ...product, categoryLink: categoryHref } : product;

        productsInnerHtml += Product(
          productWithCategoryHref,
          showPrices,
          showNames,
          color,
          align,
          gapBetweenVertical,
          product?.useCategoryLink,
          productImageAlign
        );
      }

      productsInnerHtml += '</td>';
    }

    productsInnerHtml += '</tr>';
  }

  productsInnerHtml += '</td></tr></table>';

  return productsInnerHtml;
};
