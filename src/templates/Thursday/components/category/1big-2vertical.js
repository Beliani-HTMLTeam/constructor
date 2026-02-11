import { Product } from '../Product.js';

export const render = ({ products, showPrices, showNames, queries, insideContainer = true, color, id, imageSide }) => {

  console.log(`renderowanie kategorii ${id}, ${showPrices}, ${showNames}`);

  let imgSide = imageSide || id % 2 === 0 ? 'left' : 'right';

  let productsInnerHtml = '';

  if (Array.isArray(products)) {
    productsInnerHtml += `<tr><td><table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;" ${
      insideContainer ? 'class="newsletterContainer"' : ''
    }><tr>`;

    // Big image on the left
    if (imgSide === 'left') {
      productsInnerHtml += `<td>${Product(
        products[0],
        showPrices,
        showNames,
        '#000'
      )}</td>`;
      productsInnerHtml += `<td class="newsletterLeft20px"></td>`;
    }

    productsInnerHtml += `<td><table cellspacing="0" cellpadding="0" style="width: 100%;">`;

    productsInnerHtml += `<tr><td>${Product(products[1], showPrices, showNames, color)}</td></tr>`;
    productsInnerHtml += `<tr><td>${Product(products[2], showPrices, showNames, color)}</td></tr>`;

    productsInnerHtml += `</table></td>`;

    // Big image on the right
    if (imgSide === 'right') {
      productsInnerHtml += `<td class="newsletterRight20px"></td>`;
      productsInnerHtml += `<td>${Product(
        products[0],
        showPrices,
        showNames,
        '#000'
      )}</td>`;
    }
    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
