import { ImageWithLink } from '../../ImageWithLink.js';
import { Space } from '../../Space.js';

const getProductSrc = (product) => {
  if (!product?.src) return '';
  return typeof product.src === 'object' ? product.src.src : product.src;
};

const normalizeColumns = (value) => {
  if (value === 1 || value === 3) return value;
  return 2;
};

const getCellWidth = (columns) => {
  if (columns === 1) return '100%';
  if (columns === 3) return '33.333333333333336%';
  return '50%';
};

const getCellPadding = (columns, columnId, isCentered = false) => {
  if (columns === 1) return 'padding-left: 100px; padding-right: 100px;';
  if (columns !== 2) return '';
  if (isCentered) return columnId === 0 ? 'padding-right: 5px;' : 'padding-left: 5px;';
  return columnId === 0 ? 'padding-left: 80px;' : 'padding-right: 80px;';
};

const getInnerTablePadding = (columns, columnId) => {
  if (columns === 3) return 'padding-right: 6px; padding-left: 6px;';
  if (columns !== 2) return '';
  return columnId === 0 ? 'padding-right: 5px;' : 'padding-left: 5px;';
};

const getAlignConfig = (columns, columnId, isCentered = false) => {
  if (columns === 3) {
    if (columnId === 0) {
      return { outerTableAlign: 'right', contentTdAlign: 'right', innerCardAlign: 'right' };
    }
    if (columnId === 2) {
      return { outerTableAlign: 'left', contentTdAlign: 'left', innerCardAlign: 'left' };
    }
    return { outerTableAlign: 'center', contentTdAlign: 'center', innerCardAlign: 'center' };
  }

  if (columns !== 2) {
    return { outerTableAlign: 'center', contentTdAlign: 'center', innerCardAlign: 'center' };
  }

  // For centered remainder rows (e.g. 2 leftover from a 5-item 3-col grid)
  if (isCentered) {
    return {
      outerTableAlign: columnId === 0 ? 'right' : 'left',
      contentTdAlign: columnId === 0 ? 'right' : 'left',
      innerCardAlign: columnId === 0 ? 'right' : 'left',
    };
  }

  // Normal 2-col full-width row
  if (columnId === 0) {
    return { outerTableAlign: 'center', contentTdAlign: 'center', innerCardAlign: 'right' };
  }
  return { outerTableAlign: 'left', contentTdAlign: 'left', innerCardAlign: 'left' };
};

const getRowsFromFreebiesConfig = (freebies) => {
  const configuredRows = Array.isArray(freebies?.rows)
    ? freebies.rows
    : Array.isArray(freebies)
      ? freebies
      : [];

  // Determine the dominant column count across all rows so we know
  // whether a 2-item row is a "full" 2-col row or a centered remainder.
  const dominantColumns = (() => {
    const counts = configuredRows
      .filter((r) => Array.isArray(r) && r.length > 0)
      .map((r) => (r.length >= 3 ? 3 : r.length === 1 ? 1 : 2));
    if (counts.length === 0) return 2;
    // Use the most common count; if tied, prefer the larger one
    const freq = {};
    for (const c of counts) freq[c] = (freq[c] ?? 0) + 1;
    return Number(Object.entries(freq).sort((a, b) => b[1] - a[1] || b[0] - a[0])[0][0]);
  })();

  const rows = [];

  for (const row of configuredRows) {
    if (!Array.isArray(row) || row.length === 0) continue;

    const totalItems = row.length;
    let columnsPerRow = 3;

    if (totalItems === 4) {
      columnsPerRow = 2;
    } else if (totalItems === 2) {
      columnsPerRow = 2;
    } else if (totalItems === 1) {
      columnsPerRow = 1;
    }

    for (let i = 0; i < totalItems; i += columnsPerRow) {
      const slice = row.slice(i, i + columnsPerRow);
      // Centered when: this slice has 2 items but the dominant grid is 3-col
      const isCentered = slice.length === 2 && dominantColumns === 3;
      rows.push({ items: slice, isCentered });
    }
  }

  return rows;
};

const getRowsFromProductsList = (products, freebiesPerRow) => {
  const productList = Array.isArray(products) ? products : [];
  const columns = normalizeColumns(freebiesPerRow);
  const rows = [];

  for (let i = 0; i < productList.length; i += columns) {
    rows.push({ items: productList.slice(i, i + columns), isCentered: false });
  }

  return rows;
};

const resolveFreebieRows = ({ freebies, products, freebiesPerRow }) => {
  const rowsFromConfig = getRowsFromFreebiesConfig(freebies);

  if (rowsFromConfig.length > 0) return rowsFromConfig;

  return getRowsFromProductsList(products, freebiesPerRow);
};

const renderFreebieCard = ({
  queries,
  product,
  color,
  freeText,
  fallbackHref,
  columns,
  columnId,
  isCentered = false,
  theme,
  disableHighPrice = false,
  prodSettings = {},
  gridSize = 'normal',
}) => {
  const width = getCellWidth(columns);
  const cellPadding = getCellPadding(columns, columnId, isCentered);
  const innerPadding = getInnerTablePadding(columns, columnId);
  const alignConfig = getAlignConfig(columns, columnId, isCentered);

  const textColor = theme?.black ?? '#000000';
  const priceColor = theme?.primary ?? '#000000';
  const freebieBackgroundColor =
    theme?.freebieColor ?? theme?.primary;

    console.log("productDescription", product?.description, queries.freebies_additional[0])

  if (!product) {
    return `
      <td
        style="vertical-align: top; width: ${width}; background-color: ${freebieBackgroundColor};"
        width="${width}"
      ></td>
    `;
  }

  const productName = product.name ?? '';

  let productDescription =
    product?.description?.trim() ?? queries.freebies_additional[0] ?? 'product description not found';

  productDescription = productDescription.replace(
    /(\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm\s+\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm)/gi,
    '<span style="display:inline-block;">$1</span>'
  );

  const productSize = product.size ?? '';
  const productHref = product.href ?? fallbackHref ?? '#';
  const productSrc = getProductSrc(product);
  const oldPrice = product.lowPrice ?? product.highPrice ?? '';

  // Give both prices the same whole-point line box in Word-based Outlook.
  const priceFontSize = Math.max(
    Number.parseFloat(prodSettings.priceLowSize) || 18,
    disableHighPrice ? 0 : Number.parseFloat(prodSettings.priceHighSize) || 14,
  );
  const priceLineHeight = Math.ceil((priceFontSize * 1.2) / 4) * 4;
  const priceLineStyle = `mso-line-height-rule: exactly; line-height: ${priceLineHeight}px;`;

  // sizes
  const freebieSize = prodSettings.freebieSize
    ? `font-size: ${prodSettings.freebieSize}px;`
    : '';

  const freebieBold = prodSettings.freebieBold
    ? `font-weight: ${prodSettings.freebieBold};`
    : '';

  const descSize = prodSettings.descSize
    ? `font-size: ${prodSettings.descSize}px;`
    : '';

  const lowSize = prodSettings.priceLowSize
    ? `font-size: ${prodSettings.priceLowSize}px;`
    : '';

  const highSize = prodSettings.priceHighSize
    ? `font-size: ${prodSettings.priceHighSize}px;`
    : '';

  let FREEBIE_CARD_MAX_WIDTH = 285;
  console.log(gridSize);
  switch (gridSize) {
    case 'small':
      FREEBIE_CARD_MAX_WIDTH = 190;
      break;
    case 'normal':
    default:
      FREEBIE_CARD_MAX_WIDTH = 285;
      break;
  }
  

  return `
    <td
      style="vertical-align: top; width: ${width}; background-color: ${freebieBackgroundColor};"
      width="${width}"
    >
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        align="${alignConfig.outerTableAlign}"
        style="background-color: ${freebieBackgroundColor}; border: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
      >
        <tbody>
          <tr>
            <td
              align="${alignConfig.contentTdAlign}"
              style="background-color: ${freebieBackgroundColor};"
            >
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                align="${alignConfig.innerCardAlign}"
                style="max-width: ${FREEBIE_CARD_MAX_WIDTH}px; background-color: ${freebieBackgroundColor}; border: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
              >
                <tbody>
                  <tr>
                    <td
                      align="center"
                      style="background-color: ${freebieBackgroundColor};"
                    >
                      ${
                        productSrc
                          ? `
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          width="100%"
                          style="background-color: ${freebieBackgroundColor};"
                        >
                          <tbody>
                            <tr>
                              <td style="background-color: ${freebieBackgroundColor};">
                                ${ImageWithLink({
                                  href: productHref,
                                  src: productSrc,
                                  alt: productName || 'Freebie product',
                                })}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      `
                          : ''
                      }
                    </td>

                    <td style="background-color: ${freebieBackgroundColor};"></td>
                  </tr>

                  <tr>
                    <td
                      align="center"
                      class="newsletterRight10px"
                      style="background-color: ${freebieBackgroundColor};"
                    >
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="width: 100%; background-color: ${freebieBackgroundColor}; border: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="newsletterBottom15px"
                              style="background-color: ${freebieBackgroundColor}; font-size: 0; line-height: 0; mso-line-height-rule: exactly;"
                            ></td>
                          </tr>
                          ${Space({ insideTr: true, className: 'newsletterBottom5px' })}
                          <tr>
                          <td class="newsletterContainer40px">
                          ${ImageWithLink({
                            href: productHref,
                            src: product.bottom ?? '',
                            alt: productName || 'Freebie product',
                          })}
                          </td>
                          </tr>
                          ${Space({ insideTr: true, className: 'newsletterBottom5px' })}
                          <tr>
                            <td
                              align="${prodSettings?.align ?? 'left'}"
                              style="padding: 0; color: ${textColor} !important; background-color: ${freebieBackgroundColor};"
                            >
                              <span
                                class="${prodSettings?.prodTitleClass ?? 'newsletterProductTitleFreebie'}"
                                style="color: ${textColor} !important;${freebieSize}${freebieBold}"
                              >${productName}</span><br>
                              <span class="newsletterBottom5px" style="display: block;"></span>
                              ${
                                product?.useDescription
                                  ? `<span
                                      class="${prodSettings?.prodDescClass ?? 'newsletterProductTitleFreebie'}"
                                      style="color: ${textColor} !important;${descSize}"
                                    >${productDescription}</span>`
                                  : ''
                              }
                            </td>
                          </tr>
                          ${Space({ insideTr: true, className: 'newsletterBottom5px' })}

                          ${
                            productSize
                              ? `<tr>
                                  <td
                                    align="center"
                                    style="color: ${textColor} !important; background-color: ${freebieBackgroundColor};"
                                  >
                                    <span
                                      class="${prodSettings?.prodTitleClass ?? 'newsletterProductTitleFreebie'}"
                                      style="color: ${textColor} !important; font-size: 14px;"
                                    >${productSize}</span>
                                  </td>
                                </tr>`
                              : ''
                          }

                          <tr>
                            <td
                              align="${prodSettings?.align ?? 'left'}"
                              style="color: ${textColor} !important; background-color: ${freebieBackgroundColor}; ${priceLineStyle}"
                            >
                              <span
                                class="${prodSettings?.prodLowPriceClass ?? 'newsletterProductLowPrice'}"
                                style="color: ${prodSettings?.lowPriceColor ?? priceColor} !important;${lowSize}${priceLineStyle}"
                              >${freeText} </span>

                              ${
                                disableHighPrice
                                  ? ''
                                  : `<span
                                      class="${prodSettings?.prodHighPriceClass ?? 'newsletterProductHighPrice'}"
                                      style="color: ${prodSettings?.highPriceColor ?? textColor} !important;${highSize}${priceLineStyle}"
                                    >${oldPrice}</span>`
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  `;
};

export const renderFreebieGrid = ({
  queries,
  freebies,
  products,
  color,
  freeText,
  categoryHref,
  freebiesPerRow = 2,
  theme = {},
  disableHighPrice = false,
  prodSettings = {},
  gridSize = 'normal',
}) => {
  console.log(prodSettings);

  const rows = resolveFreebieRows({
    freebies,
    products,
    freebiesPerRow,
  });

  if (!Array.isArray(rows) || rows.length === 0) return '';

  const freebieBackgroundColor =
    theme?.freebieColor ?? theme?.primary;

  let rowsHtml = '';

  for (let rowId = 0; rowId < rows.length; rowId++) {
    const { items: row, isCentered } = rows[rowId];
    const columns = normalizeColumns(row.length);
    const isLastRow = rowId === rows.length - 1;
    let rowCells = '';

    for (let columnId = 0; columnId < columns; columnId++) {
      rowCells += renderFreebieCard({
        queries,
        product: row[columnId],
        color,
        freeText,
        fallbackHref: categoryHref,
        columns,
        columnId,
        isCentered,
        theme,
        disableHighPrice,
        prodSettings,
        gridSize,
      });
    }

    rowsHtml += `
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        align="center"
        width="100%"
        style="background-color: ${freebieBackgroundColor};"
      >
        <tbody>
          <tr>
            ${rowCells}
          </tr>
        </tbody>
      </table>

      ${Space({
        insideTable: true,
        className: isLastRow
          ? 'newsletterBottom25px'
          : 'newsletterBottom20px',
        bg: freebieBackgroundColor,
      })}
    `;
  }

  return `
    <tr>
      <td style="background-color: #ffffff;">
        ${rowsHtml}
      </td>
    </tr>
  `;
};