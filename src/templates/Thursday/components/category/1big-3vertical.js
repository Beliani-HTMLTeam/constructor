import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';

export const render = ({
	products,
	showPrices,
	showNames,
	gapBetweenHorizontal = true,
	gapBetweenVertical = true,
	align = 'left',
	queries,
	insideContainer = true,
	color,
	id,
	imageSide,
	categoryHref,
	category,
}) => {
	let imgSide = imageSide ?? (id % 2 === 0 ? 'left' : 'right');
	let productsInnerHtml = '';

	if (Array.isArray(products)) {
		let currentSide = imgSide;

		for (let i = 0; i + 3 < products.length; i += 4) {
			productsInnerHtml += `<tr><td ${insideContainer ? 'class="newsletterContainer"' : ''
				}><table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;"><tr>`;

			const renderGapTd = (side) => {
				if (gapBetweenHorizontal === false || gapBetweenHorizontal === 0) return '';
				const className =
					typeof gapBetweenHorizontal === 'string'
						? gapBetweenHorizontal
						: side === 'left'
							? 'newsletterLeft20px'
							: 'newsletterRight20px';
				return `<td class="${className}"></td>`;
			};

			const imageOnlyProduct = (p) => {
				const withCategoryLink = p?.useCategoryLink ? { ...p, categoryLink: categoryHref } : p;
				return Product(withCategoryLink, false, false, color, align, gapBetweenVertical, p?.useCategoryLink);
			};

			if (currentSide === 'left') {
				productsInnerHtml += `<td style="vertical-align: top;">${imageOnlyProduct(products[i])}</td>`;
				productsInnerHtml += renderGapTd('left');
			}

			productsInnerHtml += `<td style="vertical-align: top;"><table cellspacing="0" cellpadding="0" style="width: 100%;">`;
			productsInnerHtml += `<tr><td>${imageOnlyProduct(products[i + 1])}</td></tr>`;
			productsInnerHtml += `<tr><td>${imageOnlyProduct(products[i + 2])}</td></tr>`;
			productsInnerHtml += `<tr><td>${imageOnlyProduct(products[i + 3])}</td></tr>`;
			productsInnerHtml += `</table></td>`;

			if (currentSide === 'right') {
				productsInnerHtml += renderGapTd('right');
				productsInnerHtml += `<td style="vertical-align: top;">${imageOnlyProduct(products[i])}</td>`;
			}

			productsInnerHtml += '</tr></table></td></tr>';

			if (showNames || showPrices) {
				productsInnerHtml += `<tr><td class="newsletterBottom20px"></td></tr>`;

				const bigProductTextOnly = { ...products[i], src: null };
				productsInnerHtml += `<tr><td ${insideContainer ? 'class="newsletterContainer"' : ''
					}>`;
				productsInnerHtml += Product(bigProductTextOnly, showPrices, showNames, color, 'center', gapBetweenVertical, products[i]?.useCategoryLink);
				productsInnerHtml += `</td></tr>`;
			}

			currentSide = currentSide === 'left' ? 'right' : 'left';
		}
	}

	return productsInnerHtml;
};
