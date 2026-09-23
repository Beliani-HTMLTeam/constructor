import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';

const renderLabelledTiles = ({ items, tile, color, getCategoryLink, getCategoryTitle, showTileNames }) => {
  const cols = 2;

  const outerPct = tile.containerPct ?? 3;
  const gapPct = tile.gapPct ?? 3;
  const colPct = Math.round(((100 - outerPct * 2 - gapPct * (cols - 1)) / cols) * 100) / 100;

  const insetX = tile.insetX ?? 14;
  const insetY = tile.insetY ?? insetX;
  const rowSpaceClass = tile.rowSpace ?? 'newsletterBottom20px';
  const band = tile.background ?? '#FFFFFF';
  const label = tile.label ?? {};

  const gutter = (pct) => `<td width="${pct}%" style="width: ${pct}%; font-size: 0; line-height: 0;"></td>`;
  const blank = `<td width="${colPct}%" style="width: ${colPct}%;"></td>`;

  const imageCell = (item) => {
    if (!item) return blank;

    const href = getCategoryLink ? getCategoryLink(item.href) : item.href;

    return `<td width="${colPct}%" style="width: ${colPct}%;" valign="top" align="center">${ImageWithLink({
      href,
      src: typeof item.src === 'object' ? item.src.src : item.src,
      align: 'center',
      targetBlank: true,
      width: tile.imageWidth ?? null,
    })}</td>`;
  };

  const labelCell = (item) => {
    if (!item) return `<td width="${colPct}%" style="width: ${colPct}%;"></td>`;

    const href = getCategoryLink ? getCategoryLink(item.href) : item.href;
    const name = getCategoryTitle ? getCategoryTitle(item.name) : item.name;
    const align = label.align ?? 'left';

    const linkClass = label.className ?? 'newsletterProductTitle';
    const linkStyles = `${label.styles ?? 'font-weight: 700;'} color: ${label.color ?? color}; text-decoration: ${
      label.underline ? 'underline' : 'none'
    };`;

    return `
      <td width="${colPct}%" style="width: ${colPct}%; background-color: ${band};" bgcolor="${band}" valign="top" align="${align}">
        <!--[if mso]>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td align="${align}" style="padding: ${insetY}px ${insetX}px;">
              <a href="${href}" class="${linkClass}" style="${linkStyles}">${name}</a>
            </td>
          </tr>
        </table>
        <![endif]-->
        <!--[if !mso]><!-->
        <a href="${href}" class="${linkClass}" style="display: block; padding: ${insetY}px ${insetX}px; text-align: ${align}; ${linkStyles}">${name}</a>
        <!--<![endif]-->
      </td>
    `;
  };

  let html = '';

  for (let i = 0; i < items.length; i += cols) {
    const pair = [items[i], items[i + 1]];
    const isLastRow = i + cols >= items.length;

    const row = (cellFor) =>
      `<tr>${gutter(outerPct)}${pair
        .map((item, c) => (c > 0 ? gutter(gapPct) : '') + cellFor(item))
        .join('')}${gutter(outerPct)}</tr>`;

    html += `
      <tr>
        <td style="color: ${color};">
          <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse: collapse;">
            ${row(imageCell)}
            ${showTileNames ? row(labelCell) : ''}
            ${isLastRow ? '' : `<tr><td colspan="5" class="${rowSpaceClass}"></td></tr>`}
          </table>
        </td>
      </tr>
    `;
  }

  return html;
};

export const render = ({
  products,
  tiles,
  showPrices,
  showNames,
  showTileNames = true,
  gapBetweenVertical = true,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
  getCategoryLink,
  getCategoryTitle,
  category,
}) => {
  let productsInnerHtml = '';

  const items = tiles || products;

  if (Array.isArray(items) && tiles && category?.tile) {
    return renderLabelledTiles({ items, tile: category.tile, color, getCategoryLink, getCategoryTitle, showTileNames });
  }

  if (Array.isArray(items)) {
    const cols = 2;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < items.length; i += cols) {
      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const item = items[i + c];
        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${(c + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"'}>`;

        if (item) {
          if (tiles) {
            const href = getCategoryLink ? getCategoryLink(item.href) : item.href;
            const name = getCategoryTitle ? getCategoryTitle(item.name) : item.name;

            productsInnerHtml += `<table width="100%" border="0" cellpadding="0" cellspacing="0">`;

            productsInnerHtml += ImageWithLink({
              src: typeof item.src === 'object' ? item.src.src : item.src,
              href: href,
              insideTr: true,
              align: 'center',
            });

            if (showTileNames) {
              productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom35px' });
            }

            if (showTileNames) {
              productsInnerHtml += `
              <tr>
                <td align="center" style="text-align: center;">
                  <a class="newsletterAdditionalCategoryTitle" href="${href}" style="color: ${color}; text-decoration: underline;">
                    ${name}
                  </a>
                </td>
              </tr>
              `;
            }

            if (showTileNames) {
              productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom80px' });
            }

            productsInnerHtml += `</table>`;
          } else {
            productsInnerHtml += Product(item, showPrices, showNames, color, align, gapBetweenVertical);
          }
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';

      if (!showTileNames && i + cols < items.length) {
        productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom20px' });
      }
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
