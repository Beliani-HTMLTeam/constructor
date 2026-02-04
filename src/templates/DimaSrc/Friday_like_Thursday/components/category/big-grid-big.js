import { Product } from '../Product.js';

export const render = (products, showPrices, showNames, queries, insideContainer = true, color, id, imageSide) => {
  if (!Array.isArray(products) || products.length === 0) {
    return '';
  }

  let productsInnerHtml = '';

  // Full-width products before the grid
  const before = products.filter(p =>  p.type === 'full_width' && p.position === 'before');

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
    const cols = 2;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < gridProducts.length; i += cols) {
      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const product = gridProducts[i + c];
        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${(c + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"'}>`;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  // Full-width products after the grid
  const after = products.filter(p =>  p.type === 'full_width' && p.position === 'after');

  if (after.length > 0) {
    productsInnerHtml += '<tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%">';

    after.forEach((product) => {
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

  return productsInnerHtml;
};
