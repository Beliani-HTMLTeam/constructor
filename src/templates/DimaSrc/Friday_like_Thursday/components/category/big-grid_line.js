import { Product } from '../Product.js';

export const render = (products, showPrices, showNames, queries, insideContainer = true, color, id, imageSide) => {
  if (!Array.isArray(products) || products.length === 0) {
    return '';
  }

  let productsInnerHtml = '';

  // Full-width products before the grid
  const before = products.filter(p =>  p.type === 'full_width');

  if (before.length > 0) {
    productsInnerHtml += '<tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%">';

    before.forEach((product) => {
      productsInnerHtml += `
        <tr>
          <td>
            ${Product(product, showPrices, showNames, color)}  
          </td>
        </tr>
      `;
    })

    productsInnerHtml += '</table></td></tr>';
  }

  // Regular grid products
  const gridProducts = products.filter(p => !p.type || p.type !== 'full_width');


  if (gridProducts.length > 0) {
    const cols = 3;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}; padding: 0 5px;"}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < gridProducts.length; i += cols) {
      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const product = gridProducts[i + c];
        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:33.33%; vertical-align:top; padding: 0 5px" width="33.33%"'}>`;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
