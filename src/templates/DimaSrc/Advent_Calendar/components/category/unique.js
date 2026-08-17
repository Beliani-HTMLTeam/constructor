import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';

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
}) => {
	// console.log('products', products);
	console.log('render products', products);

	let reverse;

	if (imageSide === 'left') {
		reverse = true;
	} else {
		reverse = id % 2 === 1;
	}

	const getBigImage = (idx) => {
		// Maps bigIdx 3 -> src1, 4 -> src2, 5 -> src3
		const srcKey = 'src' + (idx - 2);
		return {
			href: category.href,
			src: category[srcKey],
		};
	};

	const row = (smallIdx, bigIdx) => {
		const bigImg = getBigImage(bigIdx);
		const smallImg = products[smallIdx];

		return `
  <tr style="line-height: 0; font-size: 0;">
      ${reverse
				? `
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: bigImg.href,
					src: bigImg.src,
					insideTr: false,
				})}
            </td>
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: smallImg.href,
					src: smallImg.src,
					insideTr: false,
				})}
            </td>
          `
				: `
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: smallImg.href,
					src: smallImg.src,
					insideTr: false,
				})}
            </td>
            <td style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
					href: bigImg.href,
					src: bigImg.src,
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
