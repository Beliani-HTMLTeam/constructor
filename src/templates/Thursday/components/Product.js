import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from './Prices.js';
import { Space } from './Space.js';

const Product = (product, showPrices, showName) => {
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
        <td class="newsletterProductTitle">${product.name}</td>
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
          })}
        </td>
      </tr>
    `;
  }

  html += `
    ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
  </table>`;

  return html;
};

export { Product };
