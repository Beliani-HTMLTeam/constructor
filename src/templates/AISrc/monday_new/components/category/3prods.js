import { Product } from '../Product.js';
import { Space } from '../Space.js';

export const render = ({
  products,
  showPrices,
  showNames,
  prodSettings = {},
  gapBetweenVertical = true,
  gapBetweenHorizontal = true,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  theme = {},
  tdClass = 'newsletterContainer',
  containerWidth = 600,
  id,
  imageSide,
  categoryHref,
}) => {
  let productsInnerHtml = '';

  if (!Array.isArray(products) || products.length === 0) return productsInnerHtml;

  const columns = 3;

  const productBackground = prodSettings.background ?? '';

  // ${insideContainer ? 'class="newsletterContainer"' : ''}

  productsInnerHtml += `
    <tr>
    <td style="color: ${color};"
      ${insideContainer ? `class="${prodSettings.tdClass ?? tdClass}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;
  
  if (prodSettings.spaceBefore)
    productsInnerHtml += Space({ insideTr: true, className: prodSettings.spaceBefore, bg: productBackground })

  for (let prodId = 0; prodId < products.length; prodId += columns) {
    productsInnerHtml += '<tr>';

    for (let columnId = 0; columnId < columns; columnId++) {
      const product = products[prodId + columnId];
      // logic looks inverted but it's correct and stops layout from breaking
      const productImageAlign = columnId === 0 ? 'right' : columnId === columns - 1 ? 'left' : 'center';

      const horizontalGapClass = !gapBetweenHorizontal
        ? ''
        : Array.isArray(gapBetweenHorizontal)
          ? gapBetweenHorizontal[columnId] ?? ''
          : typeof gapBetweenHorizontal === 'string'
            ? gapBetweenHorizontal
            : columnId === 0
              ? 'newsletter3ProductsLeft'
              : columnId === columns - 1
                ? 'newsletter3ProductsRight'
                : 'newsletter3ProductsCenter';

      productsInnerHtml += `<td style="color: ${color}; width:33.333333333333336%;vertical-align:top;" width="33.333333333333336%" ${horizontalGapClass ? `class="${horizontalGapClass}"` : ''}>`;

      if (product) {
        product.settings = prodSettings ?? {};

        const productWithCategoryHref =
          product?.useCategoryLink && categoryHref ? { ...product, categoryLink: categoryHref } : product;

        productsInnerHtml += Product(
          productWithCategoryHref,
          showPrices,
          showNames,
          color,
          theme,
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

  productsInnerHtml += '</table></td></tr>';

  return productsInnerHtml;
};
