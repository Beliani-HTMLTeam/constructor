import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from './Prices.js';
import { Space } from './Space.js';
import type { ProductEntry } from '@/types/thursday';

/**
 * Renders a single product card: image, name, and prices, each independently toggleable.
 * Used by every `components/category/*.ts` grid renderer.
 *
 * @param product - Product entry (enriched or as-authored). `product.description` (author-supplied
 *   only — not part of the live `getProductById` enrichment) renders as its own muted line between
 *   the name and the prices, e.g. "SENIA" / "Pendant lamp, white" / "CHF 129.99".
 * @param showPrices - Whether to render the prices row (only if `lowPrice`/`highPrice` present).
 * @param showName - Whether to render the name row (only if `product.name` present).
 * @param color - Text colour for name/price.
 * @param align - Text/image alignment.
 * @param gapBetweenVertical - Spacer class between image/name/price rows; `false`/`0` disables it. A string is used verbatim for both the name gap and the bottom gap.
 * @param useCategoryLink - Link the image to `product.categoryLink` instead of `product.href`.
 * @param imageAlign - Alignment passed through to the product image cell.
 * @param container - Unused by this component currently; accepted for call-site symmetry with other renderers.
 * @returns HTML fragment, or `''` when `product` is falsy/not an object.
 */
const Product = (
  product: ProductEntry,
  showPrices: boolean,
  showName: boolean,
  color: string,
  align = 'left',
  gapBetweenVertical: boolean | string | number = true,
  useCategoryLink = false,
  imageAlign = 'center',
  container = ''
): string => {
  if (!product || typeof product !== 'object') return '';

  const resolveGapClass = (gap: boolean | string | number, fallback: string): string => {
    if (gap === false || gap === 0) return '';
    if (typeof gap === 'string' && gap.trim()) return gap;
    return fallback;
  };

  const nameGapClass = resolveGapClass(gapBetweenVertical, 'newsletterBottom20px');
  const bottomGapClass =
    typeof gapBetweenVertical === 'string'
      ? gapBetweenVertical
      : resolveGapClass(gapBetweenVertical, product.spaceAfter ?? 'newsletterBottom35px');

  let html = `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

  if (product.src && product.href) {
    html += ImageWithLink({
      href: useCategoryLink ? product?.categoryLink : product.href,
      src: typeof product.src === 'object' ? product.src.src : product.src,
      insideTr: true,
      align: imageAlign,
      targetBlank: true,
    });
  }

  if (showName && product.name) {
    html += `
      ${nameGapClass ? Space({ insideTr: true, className: nameGapClass }) : ''}

      <tr>
        <td align="${align}" style="text-align: ${align}; color: ${color}" class="newsletterProductNameCaps">${product.name}</td>
      </tr>
    `;

    if (product.description) {
      html += `
        <tr>
          <td align="${align}" style="text-align: ${align};" class="newsletterProductDescription">${product.description}</td>
        </tr>
      `;
    }
  }

  if (showPrices && (product.lowPrice || product.highPrice || product.isFree)) {
    html += `
      <tr>
        <td>
          ${Prices({
            high: product.highPrice || '',
            low: product.lowPrice || '',
            color: color,
            align,
            isFree: product.isFree,
            priceColor: product.priceColor,
          })}
        </td>
      </tr>
    `;
  }

  html += `
    ${bottomGapClass ? Space({ insideTr: true, className: bottomGapClass }) : ''}
  </table>`;

  return html;
};

export { Product };
