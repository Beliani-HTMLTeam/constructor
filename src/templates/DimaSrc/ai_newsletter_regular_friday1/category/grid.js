import { Product } from '../components/Product';

export const render = (products, showPrices, showNames, queries, insideContainer = true, color, background, priceColor, ctaText) => {
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
        console.log("cols col row", cols, col, row, "totalRows", totalRows, "totalProducts", totalProducts, "isLastRow", isLastRow);
        const productIndex = row * cols + col;
        const product = products[productIndex];

        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; background: ${background}; width:50%;vertical-align:top;" width="50%" ${(col + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"'}>`;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color, productIndex, !isLastRow, !insideContainer, priceColor, ctaText);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</table></td></tr>';
  }

  return productsInnerHtml;
};
