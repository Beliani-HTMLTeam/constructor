import { getImageUrl } from '../../../../utils/ImageManager.js';
import type { CategoryRenderProps, TilesConfig } from '@/types/thursday';

const toSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

interface BuildTileSrcProps {
  tiles: TilesConfig;
  itemName: string;
  country?: string;
}

const buildTileSrc = ({ tiles, itemName, country }: BuildTileSrcProps): string => {
  const bg = tiles.background ?? '';
  const text = tiles.text ?? '';
  const slug = (country ?? '').toLowerCase();
  const name = toSlug(itemName);
  const dimensions = tiles.dimensions ? `${tiles.dimensions}/` : '';
  // formula: /category_tiles/${bg}/${text}/[${dimensions}]/${slug}_${name}.jpg
  return getImageUrl(`category_tiles/${bg}/${text}/${dimensions}${slug}_${name}.png`, true);
};

interface RenderTileCardProps {
  item?: TilesConfig['items'][number];
  tiles: TilesConfig;
  color?: string;
  getCategoryLink?: (href: string) => string;
  getCategoryTitle?: (name: string) => string;
  country?: string;
  side: 'left' | 'right';
}

const renderTileCard = ({ item, tiles, color, getCategoryLink, getCategoryTitle, country, side }: RenderTileCardProps): string => {
  if (!item) return '<td width="50%"></td>';

  const href = item.href && getCategoryLink ? getCategoryLink(item.href) : '#';
  let src: string | { src: string } | undefined = item.src ?? buildTileSrc({ tiles, itemName: item.name, country });

  if (src && typeof src === 'object') { src = (src as { src: string }).src }

  // const tileClass = side === 'left' ? 'smallCategoryTilesLEFT' : 'smallCategoryTilesRIGHT';
  // const tileClass = `smallCategoryTiles${side === 'left' ? 'LEFT' : 'RIGHT'}`;
  let tileClass: string | undefined;
  const padding = tiles.padding;
  let tileStyle = '';

  if (padding) {
    tileClass = side === 'left' ? `newsletterRight${padding}px` : `newsletterLeft${padding}px`;
  } else {
    tileStyle = `${side === 'left' ? 'padding-right: 4px;' : 'padding-left: 4px;'}`;
  }

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

/** `type: 'small-tiles'` — 2-per-row image tiles with custom dimensions (e.g. category jump-off grid). */
export const render = ({ tiles, color, getCategoryLink, getCategoryTitle, country }: CategoryRenderProps): string => {
  const items = tiles?.items ?? [];
  if (items.length === 0) return '';

  let html = '';
  for (let i = 0; i < items.length; i += 2) {
    const isLastPair = i + 2 >= items.length;
    const padding = tiles!.padding;
    const paddingBottomClass = padding && !isLastPair ? `newsletterBottom${padding * 2}px` : '';
    const styleStr = !padding ? `padding-bottom: ${isLastPair ? '0' : '8px'};` : '';

    const tilesContent = `
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                ${renderTileCard({ item: items[i], tiles, color, getCategoryLink, getCategoryTitle, country, side: 'left' })}
                ${renderTileCard({ item: items[i + 1], tiles, color, getCategoryLink, getCategoryTitle, country, side: 'right' })}
              </tr>
            </tbody>
          </table>
    `;

    html += `
      <tr>
        <td class="newsletterContainer"${styleStr ? ` style="${styleStr}"` : ''}>
          ${paddingBottomClass 
            ? `<table cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr><td class="${paddingBottomClass}">${tilesContent}</td></tr></tbody></table>` 
            : tilesContent}
        </td>
      </tr>
    `;
  }

  return html;
};
