// served as a debug purpose, planned in future: 1 product = 1 row

import { Product } from '../Product';
import type { CategoryRenderProps } from '@/types/thursday';

/** Fallback renderer used when `category.type` doesn't match a known renderer file; one product per row. */
export const render = ({
  products,
  showPrices,
  showNames,
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
  align = 'left',
  gapBetweenVertical = true,
}: CategoryRenderProps): string => {
  let productsInnerHtml = '';

  if (Array.isArray(products)) {
    productsInnerHtml += '<tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%">';
    products.forEach((product) => {
      productsInnerHtml += `
        <tr>
          <td>
            ${Product(product, showPrices, showNames, color ?? '#000', align, gapBetweenVertical)}  
          </td>
        </tr>
      `;
    });
    productsInnerHtml += '</table></td></tr>';
  }

  return productsInnerHtml;
};
