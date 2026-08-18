import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from './Prices.js';
import { Space } from './Space.js';

const Product = (
  product,
  showPrices,
  showName,
  color,
  theme = {},
  productSettings = {},
  align = 'left',
  gapBetweenVertical = true,
  useCategoryLink = false,
  imageAlign = 'center'
) => {
  if (!product || typeof product !== 'object') return '';

  const resolveGapClass = (gap, fallback) => {
    if (gap === false || gap === 0) return '';
    if (typeof gap === 'string' && gap.trim()) return gap;
    return fallback;
  };

  const nameGapClass = resolveGapClass(gapBetweenVertical, 'newsletterBottom10px');
  const bottomGapClass =
    typeof gapBetweenVertical === 'string'
      ? gapBetweenVertical
      : resolveGapClass(gapBetweenVertical, product.spaceAfter ?? productSettings?.spaceAfter ?? 'newsletterBottom35px');

  let styleBg = '';
  if (productSettings?.bg) {
    styleBg = `background: ${productSettings.bg};`;
  }

  let html = `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

  if (product.src && product.href) {
    html += ImageWithLink({
      href: useCategoryLink ? product?.categoryLink : product.href,
      src: typeof product.src === 'object' ? product.src.src : product.src,
      insideTr: true,
      align: imageAlign,
      style: productSettings,
    });
  }

  if (showName && product.name) {
    let productDescription = '';
    if (product.useDescription)
      productDescription = product?.description?.trim() ?? 'empty product description';


    html += `
      
      <tr>
        <td align="${align}" style="padding: 0; text-align: ${align}; color: ${color}; ${styleBg}">
          <span class="newsletterProductTitle" style="font-weight: 600; color: ${productSettings?.nameColor ?? color};">${product.name}</span><br>
          ${productDescription ? `<span class="newsletterProductDescription">${productDescription}</span>` : ''}
        </td>
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
            theme,
            style: productSettings,
            gapClass: nameGapClass,
          })}
        </td>
      </tr>
    `;
  }

  html += `
    ${productSettings?.spaceBottom
      ? Space({ insideTr: true, className: productSettings.spaceBottom })
      : bottomGapClass
        ? Space({ insideTr: true, className: bottomGapClass })
        : ''}
  </table>`;

  return html;
};

export { Product };
