import { Product } from '../Product.js';

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  gapBetweenHorizontal = true,
  align = 'center',
  color = '#000000',
  prodSettings = {},
  categoryHref,
}) => {
  if (!Array.isArray(products) || products.length === 0) return '';

  const columns = 3;

  let productsInnerHtml = `
    <tr>
      <td style="color: ${color};">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; table-layout: fixed;">`;

  for (let prodId = 0; prodId < products.length; prodId += columns) {
    productsInnerHtml += '<tr>';

    for (let columnId = 0; columnId < columns; columnId++) {
      const product = products[prodId + columnId];

      if (product !== undefined) {
        product.settings = {
          ...prodSettings,
        };
      }

      const productImageAlign = 'center';

      const horizontalGapClass = !gapBetweenHorizontal
        ? ''
        : columnId === 0
          ? 'newsletter3ProdsPeakLeft'
          : columnId === columns - 1
            ? 'newsletter3ProdsPeakRight'
            : 'newsletter3ProdsPeakCenter';

      productsInnerHtml += `<td style="color: ${color}; width: 33.333333333333336%; vertical-align: top;" width="33.333333333333336%" ${
        horizontalGapClass ? `class="${horizontalGapClass}"` : ''
      }>`;

      if (product) {
        const productWithCategoryHref =
          product?.useCategoryLink && categoryHref
            ? { ...product, categoryLink: categoryHref }
            : product;

        productsInnerHtml += Product(
          productWithCategoryHref,
          showPrices,
          showNames,
          color,
          prodSettings?.align ?? align,
          gapBetweenVertical,
          product?.useCategoryLink,
          productImageAlign
        );
      }

      productsInnerHtml += '</td>';
    }

    productsInnerHtml += '</tr>';
  }

  productsInnerHtml += `
        </table>
      </td>
    </tr>`;

  return productsInnerHtml;
};




