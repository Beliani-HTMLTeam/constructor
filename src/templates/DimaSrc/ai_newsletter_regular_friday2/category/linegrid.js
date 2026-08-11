import { Product } from '../components/Product';

export const render = (
  products,
  showPrices,
  showNames,
  queries,
  insideContainer = true,
  color = '#000000',
  background = '#FFFFFF',
  category = {}
) => {
  if (!Array.isArray(products) || products.length === 0) {
    return '';
  }

  let productCells = '';

  for (let index = 0; index < 4; index++) {
    const product = products[index];

    productCells += `
      <td
        width="25%"
        align="center"
        valign="top"
        bgcolor="${background}"
        style="
          width:25%;
          padding:0;
          color:${color};
          vertical-align:top;
          background-color:${background};
        "
      >
        ${
          product
            ? Product(
               { product,
                showPrices,
                showName: showNames,
                color,
                index,
                isSpaceAfter: false,
                priceAdditionalPadding: false,
                category}
              )
            : '&nbsp;'
        }
      </td>
    `;
  }

  return `
    <tr>
      <td
        bgcolor="${background}"
        style="
          color:${color};
          background-color:${background};
        "
        ${insideContainer ? 'class="newsletterContainer40px"' : ''}
      >
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          align="center"
          role="presentation"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
            background-color:${background};
          "
        >
          <tr>
            ${productCells}
          </tr>
        </table>
      </td>
    </tr>
  `;
};