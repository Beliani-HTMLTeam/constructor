import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from './Prices.js';
import { Space } from './Space.js';

const Product = (
  product,
  showPrices,
  showName,
  color,
  align = 'left',
  gapBetweenVertical = true,
  useCategoryLink = false,
  imageAlign = 'center',
  container = ''
) => {
  if (!product || typeof product !== 'object') return '';

  const resolveGapClass = (gap, fallback) => {
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
        <td align="${align}" style="text-align: ${align}; color: ${color}" class="newsletterProductTitle">${product.name}</td>
      </tr>
    `;
  }

  if (showPrices && (product.lowPrice || product.highPrice)) {
    html += `
      <tr>
        <td>
          ${Prices({
            high: product.highPrice || '',
            low: product.lowPrice || '',
            insideTr: true,
            color: color,
            align,
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
