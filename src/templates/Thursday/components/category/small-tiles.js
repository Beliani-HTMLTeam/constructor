import { getImageUrl } from '../../../../utils/ImageManager.js';

const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const buildTileSrc = ({ tiles, itemName, country }) => {
  const bg = tiles.background ?? '';
  const text = tiles.text ?? '';
  const slug = (country ?? '').toLowerCase();
  const name = toSlug(itemName);
  const dimensions = tiles.dimensions ? `${tiles.dimensions}/` : '';
  // formula: /category_tiles/${bg}/${text}/[${dimensions}]/${slug}_${name}.jpg
  return getImageUrl(`category_tiles/${bg}/${text}/${dimensions}${slug}_${name}.png`, true);
};

const renderTileCard = ({ item, tiles, color, getCategoryLink, getCategoryTitle, country, side }) => {
  if (!item) return '<td width="50%"></td>';

  const href = item.href ? getCategoryLink(item.href) : '#';
  let src = item.src ?? buildTileSrc({ tiles, itemName: item.name, country });

  if (typeof src === 'object') { src = src.src }

  // const tileClass = side === 'left' ? 'smallCategoryTilesLEFT' : 'smallCategoryTilesRIGHT';
  // const tileClass = `smallCategoryTiles${side === 'left' ? 'LEFT' : 'RIGHT'}`;
  let tileClass;
  const tileStyle = `${side === 'left' ? 'padding-right: 4px;' : 'padding-left: 4px;'}`;

  return `
    <td width="50%" valign="top">
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tbody>
          <tr>
            <td class="${tileClass ?? ''}" style="${tileStyle}">
              <a href="${href}">
                <img alt="${item.name}" src="${src}" style="width:100%; max-width: 100%; display:block;" loading="lazy">
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  `;
};

export const render = ({ tiles, color, getCategoryLink, getCategoryTitle, country }) => {
  const items = tiles?.items ?? [];
  if (items.length === 0) return '';

  let html = '';
  for (let i = 0; i < items.length; i += 2) {
    const isLastPair = i + 2 >= items.length;

    html += `
      <tr>
        <td class="newsletterContainer" style="padding-bottom: ${isLastPair ? '0' : '8px'};">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                ${renderTileCard({ item: items[i], tiles, color, getCategoryLink, getCategoryTitle, country, side: 'left' })}
                ${renderTileCard({ item: items[i + 1], tiles, color, getCategoryLink, getCategoryTitle, country, side: 'right' })}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    `;
  }

  return html;
};
