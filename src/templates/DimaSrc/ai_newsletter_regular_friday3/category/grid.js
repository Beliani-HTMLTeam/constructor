import { Product } from '../components/Product';
export const render = ({
  products,
  showPrices,
  showNames,
  queries,
  insideContainer = true,
  color = '#000000',
  background = '#FFFFFF',
  category = {},
}) => {
  if (!Array.isArray(products) || products.length === 0) {
    return '';
  }

  const cols = 2;
  const gap = 20;
  const totalRows = Math.ceil(products.length / cols);

  const renderProduct = (product, index) => {
    if (!product) return '&nbsp;';

    return Product({
      product,
      showPrices,
      showName: showNames,
      color,
      idx: index,

      // The grid creates the vertical gap.
      isSpaceAfter: true,

      insideContainer: !insideContainer,
      category,
    });
  };

  let html = `
    <tr>
      <td
        ${insideContainer ? 'class="newsletterContainer"' : ''}
        bgcolor="${background}"
        style="
          padding-top:0;
          padding-bottom:0;
          color:${color};
          background-color:${background};
        "
      >
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          align="center"
          role="presentation"
          bgcolor="${background}"
          style="
            width:100%;
            border-collapse:collapse;
            table-layout:fixed;
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
            background-color:${background};
          "
        >
  `;

  for (let row = 0; row < totalRows; row++) {
    const leftIndex = row * cols;
    const rightIndex = leftIndex + 1;

    const leftProduct = products[leftIndex];
    const rightProduct = products[rightIndex];

    const isLastRow = row === totalRows - 1;

    const leftBackground =
      leftProduct?.background ||
      category?.product?.background ||
      background;

    const rightBackground = rightProduct
      ? rightProduct.background ||
      category?.product?.background ||
      background
      : background;

    html += `
      <tr>
        <td
          valign="top"
          bgcolor="${leftBackground}"
          style="
            padding:0;
            color:${color};
            vertical-align:top;
            background-color:${leftBackground};
          "
        >
          ${renderProduct(leftProduct, leftIndex)}
        </td>

        <td
        width="${gap}"
        class="newsletterProductGridHorizontalGap"
        valign="top"
        bgcolor="${background}"
        style="
          width:${gap}px;
          padding:0;
          font-size:0;
          line-height:0;
          vertical-align:top;
          background-color:${background};
          mso-line-height-rule:exactly;
        "
      >&nbsp;</td>

        <td
          valign="top"
          bgcolor="${rightBackground}"
          style="
            padding:0;
            color:${color};
            vertical-align:top;
            background-color:${rightBackground};
          "
        >
          ${renderProduct(rightProduct, rightIndex)}
        </td>
      </tr>
    `;

    if (!isLastRow) {
      html += `
          <tr>
            <td
              height="${gap}"
              class="newsletterProductGridVerticalGap"
              bgcolor="${background}"
              style="
                height:${gap}px;
                padding:0;
                font-size:0;
                line-height:${gap}px;
                background-color:${background};
                mso-line-height-rule:exactly;
              "
            >&nbsp;</td>
      
            <td
              height="${gap}"
              class="newsletterProductGridVerticalGap"
              bgcolor="${background}"
              style="
                height:${gap}px;
                padding:0;
                font-size:0;
                line-height:${gap}px;
                background-color:${background};
                mso-line-height-rule:exactly;
              "
            >&nbsp;</td>
      
            <td
              height="${gap}"
              class="newsletterProductGridVerticalGap"
              bgcolor="${background}"
              style="
                height:${gap}px;
                padding:0;
                font-size:0;
                line-height:${gap}px;
                background-color:${background};
                mso-line-height-rule:exactly;
              "
            >&nbsp;</td>
          </tr>
        `;
    }
  }

  html += `
        </table>
      </td>
    </tr>
  `;

  return html;
};