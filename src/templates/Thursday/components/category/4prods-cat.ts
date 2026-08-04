import { ImageWithLink } from '../ImageWithLink.js';
import { Product } from '../Product.js';
import type { CategoryRenderProps, ProductEntry } from '@/types/thursday';

/**
 * A `ProductEntry` optionally carrying its own per-product "category" lifestyle image,
 * used only by the `4prods-cat` renderer's `getCategoryVisual` lookup.
 */
type ProductWithCategoryVisual = ProductEntry & {
  categorySrc?: string;
  categoryImage?: { src?: string; href?: string };
  category?: { src?: string; href?: string };
  catSrc?: string;
  categoryHref?: string;
};

const getCategoryVisual = (product: ProductWithCategoryVisual | undefined, categoryHref?: string): { src?: string; href: string } => {
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

/**
 * `type: '4prods-cat'` — up to 4 rows, each pairing a per-product lifestyle image
 * (see `getCategoryVisual`) with the product itself. Dispatch in `Categories.ts` is a
 * dynamic `import('./category/${category.type.toLowerCase()}.ts')`, so `category.type`
 * must match this file's basename exactly — NOT the `'image_with_2_product'` label from
 * the MCP `list_components` tool, which doesn't correspond to a file in this folder.
 */
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
}: CategoryRenderProps): string => {
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
				${Product(productWithCategoryHref, showPrices ?? true, showNames ?? true, color ?? '#000000', align, gapBetweenVertical, product?.useCategoryLink)}
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
