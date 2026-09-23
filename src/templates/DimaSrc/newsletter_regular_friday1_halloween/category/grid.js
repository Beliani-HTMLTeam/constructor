import { Product } from '../components/Product';

export const render = (products, showPrices, showNames, queries, insideContainer = true, color, background, id, imageSide) => {
  let productsInnerHtml = '';

  if (Array.isArray(products)) {
    const cols = 2;
    const totalProducts = products.length;
    const totalRows = Math.ceil(totalProducts / cols);

    productsInnerHtml += `
    <tr>
      <td style="color: ${color}; background: ${background}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let row = 0; row < totalRows; row++) {
      productsInnerHtml += '<tr>';
      const currentRow = row + 1;
      const isLastRow = currentRow === totalRows;

      for (let col = 0; col < cols; col++) {
        const productIndex = row * cols + col;
        const product = products[productIndex];

        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; background: ${background}; width:50%;vertical-align:top;" width="50%" ${(col + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"'}>`;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color, productIndex, !isLastRow, !insideContainer);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
