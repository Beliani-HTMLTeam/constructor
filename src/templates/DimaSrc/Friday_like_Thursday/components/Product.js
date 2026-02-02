import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from './Prices.js';
import { Space } from './Space.js';

const Product = (product, showPrices, showName, color) => {
  if (!product || typeof product !== 'object') return '';

  let html = `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

  if (product.src && product.href) {
    html += ImageWithLink({
      href: product.href,
      src: product.src,
      insideTr: true,
    });
  }

  if (showName && product.name) {
    html += `
      ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
      
      <tr>
        <td style="color: ${color}" class="${product.type === 'full_width' ? 'newsletterProductTitleWithPaddingLeft' : 'newsletterProductTitle'}">${product.name}</td>
      </tr>
    `;
  }
// newsletterProductTitleWithPaddingLeft
  if (showPrices && (product.lowPrice || product.highPrice)) {
    html += `
      <tr>
        <td class="${product.type === 'full_width' ? 'newsletterContainer' : ''}">
          ${Prices({
            high: product.highPrice || '',
            low: product.lowPrice || '',
            insideTr: true,
            color: color,
          })}
        </td>
      </tr>
    `;
  }

  html += `
    ${Space({ insideTr: true, className: product.spaceAfter ?? 'newsletterBottom35px' })}
  </table>`;

  return html;
};

export { Product };
