import { ImageWithLink } from '../../ImageWithLink.js';
import { Space } from '../../Space.js';
import type { ProductEntry } from '@/types/thursday';

const FREEBIE_CARD_MAX_WIDTH = 190;

type Columns = 1 | 2 | 3;

const getProductSrc = (product?: ProductEntry): string => {
  if (!product?.src) return '';
  return typeof product.src === 'object' ? product.src.src : product.src;
};

const normalizeColumns = (value: unknown): Columns => {
  if (value === 1 || value === 3) return value;
  return 2;
};

const getCellWidth = (columns: Columns): string => {
  if (columns === 1) return '100%';
  if (columns === 3) return '33.333333333333336%';
  return '50%';
};

const getCellPadding = (columns: Columns): string => {
  if (columns === 1) return 'padding-left: 100px; padding-right: 100px;';
  // 2-column gutters are explicit spacer <td>s now (see renderFreebieGrid) rather than
  // CSS padding, so the gap stays visible against a white grid background instead of being
  // absorbed into it — stacking both would double the gap.
  return '';
};

const getInnerTablePadding = (columns: Columns): string => {
  if (columns === 3) return 'padding-right: 6px; padding-left: 6px;';
  return '';
};

const getAlignConfig = (columns: Columns, columnId: number) => {
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

const getRowsFromFreebiesConfig = (freebies: ProductEntry[][] | { rows: ProductEntry[][] } | undefined): ProductEntry[][] => {
  const configuredRows = !Array.isArray(freebies) && Array.isArray(freebies?.rows) ? freebies.rows : Array.isArray(freebies) ? freebies : [];
  const rows: ProductEntry[][] = [];

  for (const row of configuredRows) {
    if (!Array.isArray(row) || row.length === 0) continue;

    for (let i = 0; i < row.length; i += 3) {
      rows.push(row.slice(i, i + 3));
    }
  }

  return rows;
};

const getRowsFromProductsList = (products: ProductEntry[] | undefined, freebiesPerRow: number | undefined): ProductEntry[][] => {
  const productList = Array.isArray(products) ? products : [];
  const columns = normalizeColumns(freebiesPerRow);
  const rows: ProductEntry[][] = [];

  for (let i = 0; i < productList.length; i += columns) {
    rows.push(productList.slice(i, i + columns));
  }

  return rows;
};

interface ResolveFreebieRowsProps {
  freebies?: ProductEntry[][] | { rows: ProductEntry[][] };
  products?: ProductEntry[];
  freebiesPerRow?: number;
}

const resolveFreebieRows = ({ freebies, products, freebiesPerRow }: ResolveFreebieRowsProps): ProductEntry[][] => {
  const rowsFromConfig = getRowsFromFreebiesConfig(freebies);
  if (rowsFromConfig.length > 0) return rowsFromConfig;

  return getRowsFromProductsList(products, freebiesPerRow);
};

interface RenderFreebieCardProps {
  product?: ProductEntry;
  color?: string;
  freeText: string;
  fallbackHref?: string;
  columns: Columns;
  columnId: number;
  /** Drop the fixed card width cap so cards fill their 50% column like regular grid products. */
  freebiesLikeProducts?: boolean;
}

const renderFreebieCard = ({ product, color, freeText, fallbackHref, columns, columnId, freebiesLikeProducts }: RenderFreebieCardProps): string => {
  const width = getCellWidth(columns);
  const cellPadding = getCellPadding(columns);
  const innerPadding = getInnerTablePadding(columns);
  const alignConfig = getAlignConfig(columns, columnId);

  if (!product) {
    return `<td style="vertical-align: top; width: ${width};" width="${width}"></td>`;
  }

  const productName = product.name ?? '';
  const productDescription = product.description ?? '';
  const productHref = product.href ?? fallbackHref ?? '#';
  const productSrc = getProductSrc(product);
  const oldPrice = product.lowPrice ?? product.highPrice ?? '';

  return `
    <td style="vertical-align: top; width: ${width}; ${cellPadding}" width="${width}">
      <table cellspacing="0" cellpadding="0" style="width: 100%; ${innerPadding}" align="${alignConfig.outerTableAlign}">
        <tbody>
          <tr>
            <td align="${alignConfig.contentTdAlign}">
              <table cellspacing="0" cellpadding="0" align="${alignConfig.innerCardAlign}" style="width: 100%; ${freebiesLikeProducts ? '' : `max-width: ${FREEBIE_CARD_MAX_WIDTH}px;`} background-color: #ffffff;">
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
                                targetBlank: true,
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
                            <td align="center" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px; color: #242222;">
                              <span class="newsletterProductTitleFreebie">${productName}</span>
                            </td>
                          </tr>
                          ${
                            productDescription
                              ? `<tr>
                            <td align="center" class="newsletterProductDescription">${productDescription}</td>
                          </tr>`
                              : ''
                          }
                          <tr>
                            <td align="center">
                              <span class="newsletterProductPriceFree">${freeText} </span>
                              <span class="newsletterProductHighPrice" style="color: #242222;">${oldPrice}</span>
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

export interface RenderFreebieGridProps {
  /** Freebie rows config; used verbatim if it resolves to at least one row. */
  freebies?: ProductEntry[][] | { rows: ProductEntry[][] };
  /** Flat product list, auto-chunked by `freebiesPerRow` when `freebies` yields no rows. */
  products?: ProductEntry[];
  /** Text colour for name/price. */
  color?: string;
  /** Translated "Free" price label. */
  freeText: string;
  /** Fallback product link when an entry has no `href` of its own. */
  categoryHref?: string;
  /** Columns per row (1, 2, or 3) when chunking a flat `products` list. Defaults to 2. */
  freebiesPerRow?: number;
  /** Let cards fill their column like regular grid products instead of the narrow default card. */
  freebiesLikeProducts?: boolean;
}

/** Renders the "choose from" freebie/product grid for `type: 'deal'` categories. */
export const renderFreebieGrid = ({ freebies, products, color, freeText, categoryHref, freebiesPerRow = 2, freebiesLikeProducts }: RenderFreebieGridProps): string => {
  const rows = resolveFreebieRows({ freebies, products, freebiesPerRow });
  if (!Array.isArray(rows) || rows.length === 0) return '';

  let rowsHtml = '';
  for (let rowId = 0; rowId < rows.length; rowId++) {
    const row = rows[rowId];
    const columns = normalizeColumns(row.length);
    const isLastRow = rowId === rows.length - 1;
    let rowCells = '';

    // Explicit spacer <td>s for the (default, most common) 2-column layout — keeps the
    // gutter an actual visible gap against a white grid background rather than CSS padding,
    // which can get collapsed/stripped by some email clients.
    if (columns === 2) rowCells += '<td width="20"></td>';

    for (let columnId = 0; columnId < columns; columnId++) {
      rowCells += renderFreebieCard({
        product: row[columnId],
        color,
        freeText,
        fallbackHref: categoryHref,
        columns,
        columnId,
        freebiesLikeProducts,
      });

      if (columns === 2 && columnId < columns - 1) rowCells += '<td width="10"></td>';
    }

    if (columns === 2) rowCells += '<td width="20"></td>';

    // Without an explicit width the row table shrinks to its content, which is fine for the
    // narrow default card but would defeat `freebiesLikeProducts` (cards are sized by their
    // 50% columns, so the table itself has to span the full width for them to stretch).
    rowsHtml += `
      <table cellspacing="0" cellpadding="0" border="0" align="center" ${freebiesLikeProducts ? 'width="100%"' : ''}>
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
