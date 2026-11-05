import { Product } from '../../Product.js';
import { Space } from '../../Space.js';

const tableStyle = 'border:0;border-collapse:collapse;border-spacing:0;' + 'mso-table-lspace:0pt;mso-table-rspace:0pt;';

const chunk = (items, columns) =>
  Array.from({ length: Math.ceil(items.length / columns) }, (_, index) =>
    items.slice(index * columns, (index + 1) * columns)
  );

const resolveRows = (freebies, products, freebiesPerRow) => {
  const configured = Array.isArray(freebies?.rows) ? freebies.rows : Array.isArray(freebies) ? freebies : [];

  const columns = [1, 2, 3].includes(freebiesPerRow) ? freebiesPerRow : 2;

  if (!configured.length) {
    return chunk((products ?? []).filter(Boolean), columns);
  }

  if (!configured.some(Array.isArray)) {
    return chunk(configured.filter(Boolean), columns);
  }

  return configured.flatMap((row) => {
    const items = (Array.isArray(row) ? row : [row]).filter(Boolean);
    return chunk(items, items.length === 4 ? 2 : 3);
  });
};

export const renderFreebieGrid = ({
  queries = {},
  freebies,
  products,
  color = '#000000',
  freeText = 'FREE',
  categoryHref,
  freebiesPerRow = 2,
  theme = {},
  disableHighPrice = false,
  prodSettings = {},
  gridSize = 'normal',
}) => {
  const rows = resolveRows(freebies, products, freebiesPerRow);

  if (!rows.length) return '';

  const background = theme.freebieColor ?? theme.primary ?? '#ffffff';
  const outerBackground = theme.dealBg ?? background;
  const textColor = prodSettings.color ?? theme.black ?? color;
  const cardWidth = gridSize === 'small' ? 190 : 285;
  const gap = 10;
  const availableWidth = 610;

  let productIndex = 0;

  const rowsHtml = rows
    .map((row, rowIndex) => {
      const rowWidth = Math.min(availableWidth, row.length * cardWidth + (row.length - 1) * gap);

      const cellWidth = `${100 / row.length}%`;

      const cells = row
        .map((product, columnIndex) => {
          const settings = {
            ...prodSettings,
            ...product.settings,
          };

          const description = product.useDescription
            ? (queries.freebie_teaser?.[productIndex] ?? product.description ?? 'product description not found')
            : '';

          productIndex++;

          const name = settings.freebieBold
            ? `<span style="font-weight:${settings.freebieBold};">${product.name ?? ''}</span>`
            : (product.name ?? '');

          const descriptionParts = [
            description,
            product.size ? `<span style="font-size:14px;">${product.size}</span>` : '',
          ].filter(Boolean);

          const freebie = {
            ...product,
            name,
            href: product.href ?? categoryHref ?? '#',
            description: descriptionParts.join('<br>'),
            useDescription: descriptionParts.length > 0,
            lowPrice: freeText,
            highPrice: disableHighPrice ? '' : (product.lowPrice ?? product.highPrice ?? ''),
            settings: {
              ...settings,
              color: settings.color ?? textColor,
              insideColor: settings.insideColor ?? background,
              prodSize: settings.freebieSize ?? settings.prodSize,
              prodTitleClass: settings.prodTitleClass ?? 'newsletterProductTitleFreebie',
              prodDescClass: settings.prodDescClass ?? 'newsletterProductTitleFreebie',
              prodLowClass: settings.prodLowPriceClass ?? settings.prodLowClass ?? 'newsletterProductLowPrice',
              prodHighClass: settings.prodHighPriceClass ?? settings.prodHighClass ?? 'newsletterProductHighPrice',
              lowPriceColor: settings.lowPriceColor ?? theme.primary ?? textColor,
              highPriceColor: settings.highPriceColor ?? textColor,
              spaceAfter: false,
              priceAlign: settings.priceAlign ?? 'center',
            },
          };

          return `
  <td width="${cellWidth}" valign="top" bgcolor="${background}"
      style="width:${cellWidth};
             vertical-align:top;
             background-color:${background};
             border:0;
             mso-border-alt:none;
             padding:0;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
           bgcolor="${background}" style="${tableStyle}width:100%;table-layout:fixed;background-color:${background};">
      <tr><td style="padding:0 ${columnIndex < row.length - 1 ? gap / 2 : 0}px 0 ${columnIndex > 0 ? gap / 2 : 0}px;background-color:${background};" bgcolor="${background}">
        ${Product(freebie, true, true, textColor, theme, settings.align ?? 'center', true, false, 'center')}
      </td></tr>
    </table>
  </td>
`;
        })
        .join('');

      return `
      <tr>
        <td align="center" bgcolor="${background}">
          <!--[if mso]><table role="presentation" width="${rowWidth}" align="center" cellspacing="0" cellpadding="0" border="0"><tr><td><![endif]-->
          <table role="presentation" width="100%" align="center" bgcolor="${background}"
                 cellspacing="0" cellpadding="0" border="0"
                 style="${tableStyle}width:100%;max-width:${rowWidth}px;table-layout:fixed;">
            <tr>${cells}</tr>
          </table>
          <!--[if mso]></td></tr></table><![endif]-->
        </td>
      </tr>
      ${Space({
        insideTr: true,
        className: rowIndex === rows.length - 1 ? 'newsletterBottom35px' : 'newsletterBottom20px',
        bg: background,
      })}
    `;
    })
    .join('');

  return `
    <tr>
      <td class="${prodSettings.tdClass ?? 'newsletterContainer'}"
          bgcolor="${outerBackground}"
          style="background-color:${outerBackground};">
        <table role="presentation" width="100%"
               cellspacing="0" cellpadding="0" border="0"
               style="${tableStyle}">
          ${rowsHtml}
        </table>
      </td>
    </tr>
  `;
};
