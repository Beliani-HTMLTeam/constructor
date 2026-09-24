import { Space } from '../Space.js';
import { CTA } from '../CTA.js';

export const render = ({
  tiles = [],
  queries = {},
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  country,
  renderType,
  cta = {},
  options = {},
  theme = {},
}) => {
  const slug = String(country ?? '').toLowerCase();
  const background = theme.primary ?? '#FFFFFF';
  const title = getPhrase('Shop by category') ?? queries?.shop_by_category_title ?? 'TRANSLATION NOT FOUND';

  let rows = '';
  for (let i = 0; i < tiles.length; i += 2) {
    const cells = Array.from({ length: 2 }, (_, column) => {
      const tile = tiles[i + column];
      if (!tile) return '<td width="50%"></td>';

      const name = tile.nameOverride?.[slug] ?? getCategoryTitle(tile.name);
      let discount = String(queries?.tile_discount ?? 'TRANSLATION NOT FOUND');
      const href = tile.resolvedHref ?? getCategoryLink(tile.href);
      const src = typeof tile.src === 'object' ? tile.src.src : tile.src;
      discount = discount.replace(/(?:\r?\n|<br\s*\/?>)/, ' ');

      return `
        <td width="50%" align="left" valign="top" bgcolor="${background}" style="vertical-align:top;background-color:${background};padding:${column === 0 ? '0px 5px 0px 0px;' : '0px 0px 0px 5px;'}">
          <table role="presentation" width="295" align="left" cellspacing="0" cellpadding="0" border="0" gcolor="${background}" style="width:100%;max-width:295px;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:${background};">
            <tr>
              <td align="left" bgcolor="${background}" style="padding:0;font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:${background};">
                <a href="${href}" style="display:block;border:0;text-decoration:none;line-height:0;background-color:${background};">
                  <img src="${src}" alt="${name}" width="295" border="0" bgcolor="${background}" style="display:block;width:295px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;background-color:${background};-ms-interpolation-mode:bicubic;">
                </a>
              </td>
            </tr>
            ${
              options?.showName
                ? `
              ${Space({ insideTr: true, className: 'newsletterBottom10px', bg: background })}
              <tr>
                <td class="shopByCategoryPeakName" style="color:${options?.nameColor ?? '#000000'};${options?.nameWeight ? `font-weight:${options.nameWeight};` : ''}" align="left">
                ${name}
                </td>
              </tr>`
                : ''
            }
            ${
              options?.showDiscount
                ? `
              ${Space({ insideTr: true, className: 'newsletterBottom10px', bg: background })}
              <tr>
                <td class="shopByCategoryPeakName" style="color:${options?.discountColor ?? '#000000'};${options?.discountWeight ? `font-weight:${options.discountWeight};` : ''}" align="left">
                ${discount}
                </td>
              </tr>`
                : ''
            }
            ${
              options?.showCta
                ? Space({ insideTr: true, className: 'newsletterBottom10px', bg: background }) +
                  CTA({
                    color: options?.ctaColor ?? '#000000',
                    href: href,
                    text: getPhrase('Shop now'),
                    insideTr: true,
                    align: 'left',
                    elemClass: 'shopByCategoryCta',
                  })
                : ''
            }
          </table>
        </td>
      `;
    }).join('');
    rows += `
    <tr>${cells}</tr>
    ${Space({ insideTr: true, className: 'newsletterBottom20px', bg: background })}
    `;
  }
  return `
  <tr>
    <td class="newsletterContainer" style="background-color:${background};" align="center">
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <td align="center">
          <span class="newsletterTitle">${title}</span>
        </td>
      </table>
    </td>
  </tr>
  ${Space({ insideTr: true, className: 'newsletterBottom20px', bg: background })}
  <tr>
    <td class="newsletterContainer" bgcolor="${background}" style="background-color:${background};">
      <table role="presentation" width="100%" cellspacing="0" cellpading="0" border="0" bgcolor="${background}" style="table-layout:fixed;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:${background};">
        ${rows}
      </table>
    </td>
  </tr>
  `;
};
