import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';
import { AdditionalImageWithLink } from '../AdditionalImageWithLink.js';

const renderTilesGrid = ({
  tiles,
  color,
  insideContainer,
  getCategoryLink,
  getCategoryTitle,
  category,
}) => {
  if (!Array.isArray(tiles) || tiles.length === 0) {
    return '';
  }

  const background =
    category?.product?.background || 'transparent';

  const renderImageCell = (item) => {
    if (!item) {
      return `
        <td
          width="48.36%"
          valign="top"
          style="
            width:48.36%;
            vertical-align:top;
          "
        >
          &nbsp;
        </td>
      `;
    }

    const href = getCategoryLink
      ? getCategoryLink(item.href)
      : item.href;

    return `
      <td
        width="48.36%"
        valign="top"
        style="
          width:48.36%;
          vertical-align:top;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
        >
          ${AdditionalImageWithLink({
            src: item.src,
            href,
            insideTr: true,
            align: 'center',
            width: 295,
          })}
        </table>
      </td>
    `;
  };

  const renderTitleCell = (item) => {
    if (!item) {
      return `
        <td
          width="48.36%"
          valign="top"
          style="
            width:48.36%;
            vertical-align:top;
          "
        >
          &nbsp;
        </td>
      `;
    }
  
    const href = getCategoryLink
      ? getCategoryLink(item.href)
      : item.href;
  
    const name = getCategoryTitle
      ? getCategoryTitle(item.name)
      : item.name;
  
    return `
      <td
        width="48.36%"
        valign="top"
        bgcolor="${background}"
        style="
          width:48.36%;
          padding:0;
          color:${color};
          background-color:${background};
          vertical-align:top;
          text-align:left;
        "
      >
        <a
          href="${href}"
          target="_blank"
          class="newsletterWednesdayAdditionalTitle"
          style="
            display:block;
            margin:0;
            border-style:solid;
            border-color:${background};
            border-width:13px 14px;
            background-color:${background};
            color:${color};
            text-align:left;
            text-decoration:none;
            -webkit-text-size-adjust:100%;
          "
        >${name}</a>
      </td>
    `;
  };

  let rows = '';

  for (let i = 0; i < tiles.length; i += 2) {
    const leftItem = tiles[i];
    const rightItem = tiles[i + 1];
    const isLastRow = i + 2 >= tiles.length;

    rows += `
      <!-- Images -->
      <tr>
        ${renderImageCell(leftItem)}

        <td
          width="3.28%"
          style="
            width:3.28%;
            padding:0;
            font-size:0;
            line-height:0;
          "
        >
          &nbsp;
        </td>

        ${renderImageCell(rightItem)}
      </tr>

      <!-- Titles: both cells share this row -->
      <tr>
        ${renderTitleCell(leftItem)}

        <td
          width="3.28%"
          bgcolor="transparent"
          style="
            width:3.28%;
            padding:0;
            font-size:0;
            line-height:0;
            background-color:transparent;
          "
        >
          &nbsp;
        </td>

        ${renderTitleCell(rightItem)}
      </tr>
    `;

    if (!isLastRow) {
      rows += `
        <tr>
          <td
            colspan="3"
            height="20"
            style="
              height:20px;
              padding:0;
              font-size:0;
              line-height:20px;
              mso-line-height-rule:exactly;
            "
          >
            &nbsp;
          </td>
        </tr>
      `;
    }
  }

  return `
    <tr>
      <td
        ${insideContainer
          ? 'class="newsletterContainer"'
          : ''}
        style="color:${color};"
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
          "
        >
          ${rows}
        </table>
      </td>
    </tr>

    ${Space({
      insideTr: true,
      className: 'newsletterBottom80px',
      backgroundColor: background,
    })}
  `;
};

export const render = ({
  products,
  tiles,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  align = 'left',
  queries,
  insideContainer = true,
  color = '#000000',
  id,
  imageSide,
  getCategoryLink,
  getCategoryTitle,
  category,
}) => {
  /*
   * Categories need a shared table structure so the two
   * title cells in each pair always have equal height.
   */
  if (Array.isArray(tiles)) {
    return renderTilesGrid({
      tiles,
      color,
      insideContainer,
      getCategoryLink,
      getCategoryTitle,
      category,
    });
  }

  /*
   * Preserve the existing product-grid rendering.
   */
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

  let productsInnerHtml = `
    <tr>
      <td
        ${insideContainer
          ? 'class="newsletterContainer"'
          : ''}
        style="
          color:${color};
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
          "
        >
  `;

  for (let row = 0; row < totalRows; row++) {
    const isLastRow = row === totalRows - 1;

    productsInnerHtml += '<tr>';

    for (let column = 0; column < cols; column++) {
      const productIndex =
        row * cols + column;

      const product = products[productIndex];

      const cellClass =
        column === 0
          ? 'newsletterRight10px'
          : 'newsletterLeft10px';

      productsInnerHtml += `
        <td
          width="50%"
          valign="top"
          class="${cellClass}"
          style="
            width:50%;
            color:${color};
            vertical-align:top;
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
          !isLastRow && gapBetweenVertical,
          !insideContainer,
          align,
          queries,
          id,
          imageSide,
          category,
        );
      } else {
        productsInnerHtml += '&nbsp;';
      }

      productsInnerHtml += '</td>';
    }

    productsInnerHtml += '</tr>';
  }

  productsInnerHtml += `
        </table>
      </td>
    </tr>

    ${Space({
      insideTr: true,
      className: 'newsletterBottom80px',
      backgroundColor:
        category?.product?.background ||
        'transparent',
    })}
  `;

  return productsInnerHtml;
};