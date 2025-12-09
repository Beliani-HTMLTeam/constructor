import { Product } from '../Product.js';

export const render = (products, showPrices, showNames, queries, insideContainer = true, color) => {
  let productsInnerHtml = '';

  if (Array.isArray(products)) {
    const cols = 2;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < products.length; i += cols) {
      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const product = products[i + c];
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

  return productsInnerHtml;
};
