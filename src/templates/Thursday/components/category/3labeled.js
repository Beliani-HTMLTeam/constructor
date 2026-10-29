import { Space } from '../Space.js';

export const render = ({
  category,
  gapBetweenHorizontal = true,
  color,
  container,
  insideContainer = true,
  getCategoryLink,
  getCategoryTitle,
}) => {
  const tiles = Array.isArray(category?.tiles) ? category.tiles : [];
  if (tiles.length === 0) return '';

  const containerClass = insideContainer ? (container ?? 'newsletterContainer') : '';
  const columns = 3;
  const gap = typeof gapBetweenHorizontal === 'number' ? gapBetweenHorizontal : 10;
  const containerPadding = category?.containerPadding ?? Number(containerClass.match(/(\d+)px$/)?.[1] ?? (containerClass ? 20 : 0));
  const inner = (category?.totalWidth ?? 650) - containerPadding * 2;
  const tileWidth = Math.floor((inner - gap * (columns - 1)) / columns);
  const gapPercent = ((gap / inner) * 100).toFixed(2);
  const tilePercent = ((100 - gapPercent * (columns - 1)) / columns).toFixed(2);

  const labelStyle = category?.label ?? {};
  const labelGapClass = labelStyle.spaceBefore ?? 'newsletterBottom10px';

  const spacer = `<td width="${gapPercent}%" style="width: ${gapPercent}%; font-size: 0; line-height: 0;"></td>`;

  let html = `
    <tr>
      <td style="color: ${color}" ${containerClass ? `class="${containerClass}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="table-layout: fixed;">`;

  for (let i = 0; i < tiles.length; i += columns) {
    html += '<tr>';

    for (let columnId = 0; columnId < columns; columnId++) {
      const tile = tiles[i + columnId];

      if (columnId > 0) html += spacer;

      html += `<td width="${tilePercent}%" style="width: ${tilePercent}%; color: ${color}; vertical-align: top;" valign="top">`;

      if (tile) {
        const href = getCategoryLink(tile.href);
        const label = getCategoryTitle(tile.name);
        const src = typeof tile.src === 'object' ? tile.src.src : tile.src;

        html += `
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr><td valign="top"><a target="_blank" href="${href}"><img src="${src}" alt="${label ?? 'Newsletter Image'}" width="${tileWidth}" style="display: block; width: 100%; max-width: 100%; height: auto;" loading="lazy"></a></td></tr>
            ${Space({ insideTr: true, className: labelGapClass })}
            <tr>
              <td align="center" valign="top" style="text-align: center; color: ${labelStyle.color ?? color}; ${labelStyle.styles ?? ''}" class="${labelStyle.className ?? 'newsletterProductTitle'}">
                <a href="${href}" style="color: ${labelStyle.color ?? color}; text-decoration: none;">${label}</a>
              </td>
            </tr>
          </table>`;
      }

      html += '</td>';
    }

    html += '</tr>';
  }

  html += '</table></td></tr>';

  return html;
};
