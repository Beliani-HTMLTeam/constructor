import { Product } from '../Product.js';

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  align = 'left',
  insideContainer = true,
  container,
  color,
  category,
}) => {
  if (!Array.isArray(products) || products.length === 0) {
    return '';
  }

  const containerClass = insideContainer
    ? container ?? 'newsletterContainer'
    : '';

  const productSettings = category?.product || {};
  const cardBackground =
    productSettings.background || 'transparent';

  const borderWidth =
    productSettings.borderWidth || 0;

  const borderColor =
    productSettings.borderColor || 'transparent';

  const rowGapClass =
    productSettings.spaceAfter ||
    'newsletterBottom15px';

  const productWidth = '48.75%';
  const middleGapWidth = '2.5%';
  const totalRows = Math.ceil(products.length / 2);

  const renderProductCell = (product) => {
    if (!product) {
      return `
        <td
          width="${productWidth}"
          valign="top"
          style="
            width:${productWidth};
            vertical-align:top;
          "
        >&nbsp;</td>
      `;
    }

    return `
      <td
        width="${productWidth}"
        valign="top"
        bgcolor="${cardBackground}"
        class="newsletterWednesdayProductPaddings"
        style="
          width:${productWidth};
          color:${color};
          vertical-align:top;
          background-color:${cardBackground};
          border:${borderWidth}px solid ${borderColor};
        "
      >
        ${Product(
          product,
          showPrices,
          showNames,
          color,
          align,
          gapBetweenVertical,
          false,
          'center',
          container,
          category
        )}
      </td>
    `;
  };

  let html = `
    <tr>
      <td
        ${containerClass ? `class="${containerClass}"` : ''}
        style="color:${color};"
      >
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          role="presentation"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
          "
        >
  `;

  for (let row = 0; row < totalRows; row++) {
    const leftProduct = products[row * 2];
    const rightProduct = products[row * 2 + 1];
    const isLastRow = row === totalRows - 1;

    html += `
      <tr>
        ${renderProductCell(leftProduct)}

        <td
          width="${middleGapWidth}"
          style="
            width:${middleGapWidth};
            padding:0;
            font-size:0;
            line-height:0;
          "
        >&nbsp;</td>

        ${renderProductCell(rightProduct)}
      </tr>
    `;

    if (!isLastRow) {
      html += `
        <tr>
          <td
            colspan="3"
            class="${rowGapClass}"
            style="
              padding-top:0;
              padding-right:0;
              padding-left:0;
              font-size:0;
              line-height:0;
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