import { Product } from '../components/Product';
import { Space } from '../components/Space';

export const render = (
  products,
  showPrices,
  showNames,
  queries,
  insideContainer = true,
  color = '#000000',
  background = '#FFFFFF',
  id = 1,
  imageSide,
) => {
  if (
    !Array.isArray(products) ||
    products.length === 0
  ) {
    return '';
  }

  const cols = 2;
  const totalRows = Math.ceil(
    products.length / cols
  );

  /*
   * id is expected to be the one-based category number:
   * 1, 2, 3 or 4.
   */
  const categoryNumber = (Number(id) + 1) || 1;

  const isReversedCategory =
    categoryNumber % 2 === 0;

  const topSpace = 'newsletterBottom30px';

  let productsInnerHtml = `
    <tr>
      <td
        ${
          insideContainer
            ? 'class="newsletterContainer"'
            : ''
        }
        bgcolor="${background}"
        style="
          color:${color};
          background-color:${background};
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          bgcolor="${background}"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
            background-color:${background};
          "
        >
  `;

  for (let row = 0; row < totalRows; row++) {
    const isLastRow = row === totalRows - 1;

    productsInnerHtml += '<tr>';

    for (let col = 0; col < cols; col++) {
      const productIndex = row * cols + col;
      const product = products[productIndex];

      const isLeftProduct = col === 0;

      /*
       * Categories 1 and 3:
       *     right products receive the space.
       *
       * Categories 2 and 4:
       *     left products receive the space.
       *
       * The left products are product indexes 0 and 2,
       * corresponding to products 1 and 3.
       */
      const shouldAddTopSpace =
        isReversedCategory
          ? isLeftProduct
          : !isLeftProduct;

      const cellClass = isLeftProduct
        ? 'newsletterRight10px'
        : 'newsletterLeft10px';

      productsInnerHtml += `
        <td
          width="50%"
          valign="top"
          class="${cellClass}"
          bgcolor="${background}"
          style="
            width:50%;
            color:${color};
            background-color:${background};
            vertical-align:top;
          "
        >
          <table
            role="presentation"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            bgcolor="${background}"
            style="
              width:100%;
              border-collapse:collapse;
              background-color:${background};
            "
          >
      `;

      if (product && shouldAddTopSpace) {
        productsInnerHtml += Space({
          insideTr: true,
          className: topSpace,
          backgroundColor: background,
        });
      }

      productsInnerHtml += `
        <tr>
          <td
            valign="top"
            bgcolor="${background}"
            style="
              padding:0;
              vertical-align:top;
              background-color:${background};
            "
          >
      `;

      if (product) {
        productsInnerHtml += Product(
          product,
          showPrices,
          showNames,
          color,
          productIndex,
          !isLastRow,
          !insideContainer,
        );
      } else {
        productsInnerHtml += '&nbsp;';
      }

      productsInnerHtml += `
          </td>
        </tr>
      </table>
    </td>
      `;
    }

    productsInnerHtml += '</tr>';
  }

  productsInnerHtml += `
        </table>
      </td>
    </tr>
  `;

  return productsInnerHtml;
};