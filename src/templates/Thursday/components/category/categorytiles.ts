import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';
import type { CategoryRenderProps } from '@/types/thursday';

/** `type: 'categorytiles'` — "This may also interest you" style link grid; `tiles` (name+image+link, no prices) if set, else falls back to `products`. */
export const render = ({
  products,
  tiles,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
  getCategoryLink,
  getCategoryTitle,
}: CategoryRenderProps): string => {
  let productsInnerHtml = '';

  // NOTE: unlike `small-tiles.ts` (which expects `tiles.items`), this renderer expects
  // `category.tiles` itself to be an array — pre-existing inconsistency, left as-is.
  // `any[]` because each entry is either a tile shape {href,name,src} or a full
  // ProductEntry, discriminated at runtime below by `if (tiles)`, not by static type.
  const items: any[] = (tiles as unknown as any[]) || products || [];

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

            productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom35px' });

            productsInnerHtml += `
            <tr>
              <td align="center" style="text-align: center;">
                <a class="newsletterAdditionalCategoryTitle" href="${href}" style="color: ${color}; text-decoration: underline;">
                  ${name}
                </a>
              </td>
            </tr>
            `;

            productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom80px' });

            productsInnerHtml += `</table>`;
          } else {
            productsInnerHtml += Product(item, showPrices ?? true, showNames ?? true, color ?? '#000000', align, gapBetweenVertical);
          }
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
