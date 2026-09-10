import { ImageWithLink } from '../../ImageWithLink.js';
import { Space } from '../../Space.js';

const FREEBIE_CARD_MAX_WIDTH = 285;

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

const getCellPadding = (columns, columnId) => {
  if (columns === 1) return 'padding-left: 100px; padding-right: 100px;';
  if (columns !== 2) return '';
  return columnId === 0 ? 'padding-left: 80px;' : 'padding-right: 80px;';
};

const getInnerTablePadding = (columns, columnId) => {
  if (columns === 3) return 'padding-right: 6px; padding-left: 6px;';
  if (columns !== 2) return '';
  return columnId === 0 ? 'padding-right: 5px;' : 'padding-left: 5px;';
};

const getAlignConfig = (columns, columnId) => {
  if (columns === 3) {
    if (columnId === 0) {
      return {
        outerTableAlign: 'right',
        contentTdAlign: 'right',
        innerCardAlign: 'right',
      };
    }

    if (columnId === 2) {
      return {
        outerTableAlign: 'left',
        contentTdAlign: 'left',
        innerCardAlign: 'left',
      };
    }

    return {
      outerTableAlign: 'center',
      contentTdAlign: 'center',
      innerCardAlign: 'center',
    };
  }

  if (columns !== 2) {
    return {
      outerTableAlign: 'center',
      contentTdAlign: 'center',
      innerCardAlign: 'center',
    };
  }

  if (columnId === 0) {
    return {
      outerTableAlign: 'center',
      contentTdAlign: 'center',
      innerCardAlign: 'right',
    };
  }

  return {
    outerTableAlign: 'left',
    contentTdAlign: 'left',
    innerCardAlign: 'left',
  };
};

const getRowsFromFreebiesConfig = (freebies) => {
  const configuredRows = Array.isArray(freebies?.rows)
    ? freebies.rows
    : Array.isArray(freebies)
      ? freebies
      : [];

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
      rows.push(row.slice(i, i + columnsPerRow));
    }
  }

  return rows;
};

const getRowsFromProductsList = (products, freebiesPerRow) => {
  const productList = Array.isArray(products) ? products : [];
  const columns = normalizeColumns(freebiesPerRow);
  const rows = [];

  for (let i = 0; i < productList.length; i += columns) {
    rows.push(productList.slice(i, i + columns));
  }

  return rows;
};

const resolveFreebieRows = ({ freebies, products, freebiesPerRow }) => {
  const rowsFromConfig = getRowsFromFreebiesConfig(freebies);

  if (rowsFromConfig.length > 0) return rowsFromConfig;

  return getRowsFromProductsList(products, freebiesPerRow);
};

const renderFreebieCard = ({
  product,
  color,
  freeText,
  fallbackHref,
  columns,
  columnId,
  theme,
  disableHighPrice = false,
  prodSettings = {},
}) => {
  const width = getCellWidth(columns);
  const cellPadding = getCellPadding(columns, columnId);
  const innerPadding = getInnerTablePadding(columns, columnId);
  const alignConfig = getAlignConfig(columns, columnId);

  const textColor = theme?.black ?? '#000000';
  const priceColor = theme?.primary ?? '#000000';
  const freebieBackgroundColor =
    theme?.freebieColor ?? theme?.primary;

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
    product?.description?.trim() ?? 'product description not found';

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
                align="${prodSettings?.align ?? alignConfig.innerCardAlign}"
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

                          <tr>
                            <td
                              align="${prodSettings?.align ?? 'left'}"
                              style="padding: 0; color: ${textColor} !important; background-color: ${freebieBackgroundColor};"
                            >
                              <span
                                class="${prodSettings?.prodTitleClass ?? 'newsletterProductTitleFreebie'}"
                                style="color: ${textColor} !important;${freebieSize}${freebieBold}"
                              >${productName}</span><br>

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
  freebies,
  products,
  color,
  freeText,
  categoryHref,
  freebiesPerRow = 2,
  theme = {},
  disableHighPrice = false,
  prodSettings = {},
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
    const row = rows[rowId];
    const columns = normalizeColumns(row.length);
    const isLastRow = rowId === rows.length - 1;
    let rowCells = '';

    for (let columnId = 0; columnId < columns; columnId++) {
      rowCells += renderFreebieCard({
        product: row[columnId],
        color,
        freeText,
        fallbackHref: categoryHref,
        columns,
        columnId,
        theme,
        disableHighPrice,
        prodSettings,
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
