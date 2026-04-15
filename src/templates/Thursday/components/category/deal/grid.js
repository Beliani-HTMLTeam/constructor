import { ImageWithLink } from '../../ImageWithLink.js';
import { Space } from '../../Space.js';

const FREEBIE_CARD_MAX_WIDTH = 190;

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
  const configuredRows = Array.isArray(freebies?.rows) ? freebies.rows : Array.isArray(freebies) ? freebies : [];
  const rows = [];

  for (const row of configuredRows) {
    if (!Array.isArray(row) || row.length === 0) continue;

    for (let i = 0; i < row.length; i += 3) {
      rows.push(row.slice(i, i + 3));
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

const renderFreebieCard = ({ product, color, freeText, fallbackHref, columns, columnId }) => {
  const width = getCellWidth(columns);
  const cellPadding = getCellPadding(columns, columnId);
  const innerPadding = getInnerTablePadding(columns, columnId);
  const alignConfig = getAlignConfig(columns, columnId);

  if (!product) {
    return `<td style="vertical-align: top; width: ${width};" width="${width}"></td>`;
  }

  const productName = product.name ?? '';
  const productHref = product.href ?? fallbackHref ?? '#';
  const productSrc = getProductSrc(product);
  const oldPrice = product.lowPrice ?? product.highPrice ?? '';

  return `
    <td style="vertical-align: top; width: ${width}; ${cellPadding}" width="${width}">
      <table cellspacing="0" cellpadding="0" style="width: 100%; ${innerPadding}" align="${alignConfig.outerTableAlign}">
        <tbody>
          <tr>
            <td align="${alignConfig.contentTdAlign}">
              <table cellspacing="0" cellpadding="0" align="${alignConfig.innerCardAlign}" style="width: 100%; max-width: ${FREEBIE_CARD_MAX_WIDTH}px;">
                <tbody>
                  <tr>
                    <td align="center">
                      ${
                        productSrc
                          ? `
                      <table border="0" cellspacing="0" cellpadding="0" width="100%">
                        <tbody>
                          <tr>
                            <td>
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
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table cellspacing="0" cellpadding="0" style="width: 100%;">
                        <tbody>
                          <tr>
                            <td class="newsletterBottom20px"></td>
                          </tr>
                          <tr>
                            <td align="center" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px; color: ${color}">
                              <span class="newsletterProductTitleFreebie">${productName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="color: ${color}">
                              <span class="newsletterProductLowPrice">${freeText} </span>
                              <span class="newsletterProductHighPrice">${oldPrice}</span>
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

export const renderFreebieGrid = ({ freebies, products, color, freeText, categoryHref, freebiesPerRow = 2 }) => {
  const rows = resolveFreebieRows({ freebies, products, freebiesPerRow });
  if (!Array.isArray(rows) || rows.length === 0) return '';

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
      });
    }

    rowsHtml += `
      <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
          <tr>
            ${rowCells}
          </tr>
        </tbody>
      </table>
      ${Space({ insideTable: true, className: isLastRow ? 'newsletterBottom35px' : 'newsletterBottom20px' })}
    `;
  }

  return `
    <tr>
      <td>
        ${rowsHtml}
      </td>
    </tr>
  `;
};
