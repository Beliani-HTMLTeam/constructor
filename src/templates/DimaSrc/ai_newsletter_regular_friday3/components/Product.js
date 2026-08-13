import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from '../../components/components/Prices.js';
import { Space } from './Space.js';

const Product = ({product, showPrices, showName, color, idx, isSpaceAfter = true, priceAdditionalPadding = true, category}) => {
  console.log("lmao", product);
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
      ${Space({ insideTr: true, className: 'newsletterBottom60px' })}
      
      <tr>
        <td style="color: ${color || '#000000'};" class="${priceAdditionalPadding ? 'newsletterProductBoldTitleWithPaddingLeft' : 'newsletterProductTitle'}">${
      product.name
    }</td>
      </tr>
      ${Space({ insideTr: true, className: 'newsletterBottom10px' })}
    `;
  }

  if (showPrices && (product.lowPrice || product.highPrice)) {
    html += `
      <tr>
        <td style="color: ${color || '#000000'};" class="${priceAdditionalPadding ? 'newsletterLeft20px' : ''}">
          ${Prices({
            high: product.highPrice || '',
            low: product.lowPrice || '',
            color: category.product.priceColor || '#000000',
          })}
        </td>
      </tr>
    `;
  }

  html += `
    ${isSpaceAfter ? Space({ insideTr: true, className: 'newsletterBottom25px' }) : ''}
  </table>`;

  return html;
};

export { Product };
