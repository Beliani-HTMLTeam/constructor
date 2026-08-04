import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';
import type { CategoryRenderProps } from '@/types/thursday';

/**
 * `type: 'unique'` — 3 rows alternating a "big" category image (`category.src1`/`src2`/`src3`)
 * with a small product (`products[0..2]`), side flipped every other category (`id % 2`)
 * unless `imageSide` forces a side.
 */
export const render = ({
	products,
	showPrices,
	showNames,
	gapBetweenVertical = true,
	gapBetweenHorizontal = true,
	align = 'left',
	queries,
	insideContainer = true,
	color,
	id,
	imageSide,
	category,
}: CategoryRenderProps): string => {
	// console.log('products', products);
	console.log('render products', products);

	let reverse: boolean;

	if (imageSide === 'left') {
		reverse = true;
	} else {
		reverse = (id ?? 0) % 2 === 1;
	}

	const getBigImage = (idx: number): { href?: string; src?: string } => {
		// Maps bigIdx 3 -> src1, 4 -> src2, 5 -> src3
		const srcKey = `src${idx - 2}`;
		return {
			href: typeof category?.href === 'string' ? category.href : undefined,
			src: category?.[srcKey as `src${number}`],
		};
	};

	const row = (smallIdx: number, bigIdx: number): string => {
		const bigImg = getBigImage(bigIdx);
		const smallImgRaw = products![smallIdx];
		const smallImg = { href: smallImgRaw.href, src: typeof smallImgRaw.src === 'object' ? smallImgRaw.src.src : smallImgRaw.src };

		return `
  <tr style="line-height: 0; font-size: 0;">
      ${reverse
				? `
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: bigImg.href ?? '',
					src: bigImg.src ?? '',
					insideTr: false,
				})}
            </td>
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: smallImg.href ?? '',
					src: smallImg.src ?? '',
					insideTr: false,
				})}
            </td>
          `
				: `
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: smallImg.href ?? '',
					src: smallImg.src ?? '',
					insideTr: false,
				})}
            </td>
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: bigImg.href ?? '',
					src: bigImg.src ?? '',
					insideTr: false,
				})}
            </td>
          `
			}
    </tr>
  `;
	};

	return `
  <tr>
    <td>
      <table width="100%" cellspacing="0" cellpadding="0" border="0">
        ${row(0, 3)}
        ${row(1, 4)}
        ${row(2, 5)}
      </table>
    </td>
  </tr>
  `;
};
