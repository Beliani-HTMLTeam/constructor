import { ShopByCategoryHeader } from '../ShopByCategoryHeader.js';

export const render = ({
  tiles = [],
  queries = {},
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  country,
  renderType,
  theme = {},
}) => {
  const slug = String(country ?? '').toLowerCase();
  const background = theme.primary ?? '#F6E7E6';
  const nonEmpty = (value) => (typeof value === 'string' && value.trim() ? value : undefined);
  const headingQuery = queries.shop_by_category_title;
  const title =
    nonEmpty(Array.isArray(headingQuery) ? headingQuery[0] : headingQuery) ??
    nonEmpty(getPhrase?.('Shop by category')) ??
    'Shop by category';
  let rows = '';
  for (let index = 0; index < tiles.length; index += 3) {
    const cells = Array.from({ length: 3 }, (_, column) => {
      const tile = tiles[index + column];
      if (!tile) return '<td width="33.33%"></td>';
      const href = tile.resolvedHref ?? getCategoryLink(tile.href);
      const name =
        nonEmpty(queries.shop_by_category_titles?.[index + column]) ??
        tile.nameOverrides?.[slug] ??
        getCategoryTitle(tile.name);
      const src = typeof tile.src === 'object' ? tile.src.src : tile.src;
      return `<td width="33.33%" align="center" valign="top" bgcolor="${background}" style="vertical-align:top;padding:12px 8px 28px;background-color:${background};">
        <table role="presentation" width="190" align="center" cellspacing="0" cellpadding="0" border="0" bgcolor="${background}" style="width:100%;max-width:190px;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:${background};">
          <tr><td align="center" bgcolor="${background}" style="padding:0;font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:${background};">
            <a href="${href}" style="display:block;border:0;text-decoration:none;line-height:0;background-color:${background};"><img src="${src}" alt="${name}" width="190" border="0" bgcolor="${background}" style="display:block;width:190px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;background-color:${background};-ms-interpolation-mode:bicubic;"></a>
          </td></tr>
          <tr><td class="frenchDaysCategoryName" align="center" style="padding-top:16px;font-size:20px;font-size:clamp(14px, 3.6vw, 20px);line-height:1.25;overflow-wrap:anywhere;color:${theme.offerTitleColor ?? '#750000'};">${name}</td></tr>
          <tr><td align="center" style="font-size:16px;line-height:1.25;"><a class="frenchDaysCategoryCta" href="${href}" style="font-size:16px;font-size:clamp(12px, 3.2vw, 16px);line-height:1.25;overflow-wrap:anywhere;color:${theme.black ?? '#000000'};text-decoration:underline;">${getPhrase('Shop now')}</a></td></tr>
        </table>
      </td>`;
    }).join('');
    rows += `<tr>${cells}</tr>`;
  }
  return `${ShopByCategoryHeader({ title, type: renderType, theme })}
    <tr><td bgcolor="${background}" style="background-color:${background};"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="${background}" style="table-layout:fixed;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:${background};font-family:Arial,sans-serif;">${rows}</table></td></tr>`;
};
