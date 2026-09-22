import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from './Prices.js';
import { Space } from './Space.js';

const Product = (
  product,
  showPrices,
  showName,
  color,
  theme = {},
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

  const nameGapClass = resolveGapClass(gapBetweenVertical, 'newsletterBottom20px');
  const bottomGapClass =
    typeof gapBetweenVertical === 'string'
      ? gapBetweenVertical
      : resolveGapClass(gapBetweenVertical, product?.settings?.spaceAfter ?? product.spaceAfter ?? 'newsletterBottom35px');
  const productBackground = product?.settings?.insideColor ?? product?.settings?.background ?? '';

  let html = `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"${productBackground ? ` bgcolor="${productBackground}"` : ''} style="border:0;mso-border-alt:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;${productBackground ? `background-color:${productBackground};` : ''}">`;

  if (product.src && product.href) {
    html += ImageWithLink({
      href: useCategoryLink ? product?.categoryLink : product.href,
      src: typeof product.src === 'object' ? product.src.src : product.src,
      insideTr: true,
      align: imageAlign,
      background: productBackground,
    });
  }

  if (showName && product.name) {
    let productDescription = '';
    if (product.useDescription)
      productDescription = product?.description?.trim() ?? 'empty product description';
      productDescription = productDescription.replace(/(\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm\s+\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm)/gi, '<span style="display:inline-block;">$1</span>')

    html += `
      ${nameGapClass ? Space({ insideTr: true, className: nameGapClass, bg: productBackground }) : ''}
      
      <tr>
        <td align="${align}"${productBackground ? ` bgcolor="${productBackground}"` : ''} style="padding:0;border:0;mso-border-alt:none;text-align:${align};color:${product?.settings?.color ?? color};${productBackground ? `background-color:${productBackground};` : ''}">
          <span class="${product?.settings?.prodTitleClass ?? 'newsletterProductTitle'}"${product?.settings?.prodSize ? ` style="font-size:${product?.settings?.prodSize}px;"` : ""}>${product.name}</span><br>
        </td>
      </tr>
      ${productDescription
        ? `<tr>
        <td align="${align}"${productBackground ? ` bgcolor="${productBackground}"` : ''} style="padding:0;border:0;mso-border-alt:none;text-align:${align};color:${product?.settings?.color ?? color};${productBackground ? `background-color:${productBackground};` : ''}">
           <span class="${product?.settings?.prodDescClass ?? 'newsletterProductDescription'}"${product?.settings?.descSize ? ` style="font-size:${product?.settings?.descSize}px;"` : ""}>${productDescription}</span>
        </td>
      </tr>`
      : ''}
    `;
  }

  if (showPrices && (product.lowPrice || product.highPrice)) {
    html += `
      <tr>
        <td${productBackground ? ` bgcolor="${productBackground}"` : ''} style="border:0;mso-border-alt:none;${productBackground ? `background-color:${productBackground};` : ''}">
          ${Prices({
            high: product.highPrice || '',
            low: product.lowPrice || '',
            insideTr: true,
            lowColor: product?.settings?.lowPriceColor,
            highColor: product?.settings?.highPriceColor,
            lowSize: product?.settings?.priceLowSize,
            highSize: product?.settings?.priceHighSize,
            settings: product?.settings,
            align,
            theme,
          })}
        </td>
      </tr>
    `;
  }

  html += `
    ${ Space({ insideTr: true, className: "newsletterBottom25px", bg: productBackground })}
  </table>`;

  return html;
};

export { Product };
