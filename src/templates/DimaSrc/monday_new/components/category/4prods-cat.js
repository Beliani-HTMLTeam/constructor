import { ImageWithLink } from '../ImageWithLink.js';
import { Product } from '../Product.js';

const getCategoryVisual = (product, categoryHref) => {
  const src = product?.categorySrc ?? product?.categoryImage?.src ?? product?.category?.src ?? product?.catSrc;
  const href =
    product?.categoryHref ??
    product?.categoryImage?.href ??
    product?.category?.href ??
    categoryHref ??
    product?.href ??
    '#';

  return { src, href };
};

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenVertical = false,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide = 'left',
  categoryHref,
}) => {
  let productsInnerHtml = '';

  if (!Array.isArray(products) || products.length === 0) return productsInnerHtml;

  const rowsCount = 4;
  const productsForRows = products.slice(0, rowsCount);
  const imageFirst = imageSide !== 'right';

  productsInnerHtml += `
		<tr>
			<td style="color: ${color}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
				<table cellspacing="0" cellpadding="0" border="0" width="100%">`;

  for (const product of productsForRows) {
    if (!product) continue;

    const { src: categorySrc, href: categoryImageHref } = getCategoryVisual(product, categoryHref);
    const productWithCategoryHref =
      product?.useCategoryLink && categoryHref ? { ...product, categoryLink: categoryHref } : product;

    const imageCell = `
			<td style="vertical-align: top; padding: 0; margin: 0;">
				<table cellspacing="0" cellpadding="0" border="0" width="100%">
					${
            categorySrc
              ? ImageWithLink({
                  href: categoryImageHref,
                  src: categorySrc,
                  insideTr: true,
                  align: 'center',
                })
              : ''
          }
				</table>
			</td>
		`;

    const productCell = `
			<td style="vertical-align: top; padding: 0; margin: 0;">
				${Product(productWithCategoryHref, showPrices, showNames, color, align, gapBetweenVertical, product?.useCategoryLink)}
			</td>
		`;

    productsInnerHtml += `<tr>${imageFirst ? imageCell + productCell : productCell + imageCell}</tr>`;
  }

  productsInnerHtml += `
				</table>
			</td>
		</tr>`;

  return productsInnerHtml;
};
