import { Space } from '../components/Space';

export const category4Tiles_Grid = ({
  getCategoryLink,
  getCategoryTitle,
  products,
  insideContainer = true,
  color,
  background,
  add_utm,
  country
}) => {
  let productsInnerHtml = '';

  console.log('grid4tiles', products);

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
          let href;
          if (product.hrefOverride && product.hrefOverride[country]) {
            href = add_utm(product.hrefOverride[country]);
          } else {
            href = getCategoryLink(product.href);
          }

          productsInnerHtml += `
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td>
                  <a href="${href}">
                      <img alt="${getCategoryTitle(product.name)}" src="${
                        product.src.src
                      }" style="width:100%; max-width: 100%; display:block;" loading="lazy">
                  </a>
                </td>
            </tr>
          </table>`;
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
      if (!isLastRow) {
        productsInnerHtml += `<tr><td colspan="2" class="newsletterBottom20px" style="background-color: ${background}; font-size: 0px; line-height: 0px;">&nbsp;</td></tr>`;
      }
    }

    productsInnerHtml += '</table></td></tr>';
  }

  return productsInnerHtml;
};
