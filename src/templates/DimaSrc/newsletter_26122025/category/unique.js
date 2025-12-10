import { ImageWithLink } from '../components/ImageWithLink';
import { Product } from '../components/Product.js';

export const render = (
  products,
  showPrices,
  showNames,
  queries,
  categoryIndex,
  insideContainer = true
) => {
  console.log('products', products);
  const reverse = categoryIndex % 2 === 1;

  const row = (smallIdx, bigIdx) => `
  <tr style="line-height: 0; font-size: 0;">
      ${
        reverse
          ? `
            <td width="459" style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
                href: products[bigIdx].href,
                src: products[bigIdx].src,
                insideTr: false,
              })}
            </td>
            <td width="191" style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
                href: products[smallIdx].href,
                src: products[smallIdx].src,
                insideTr: false,
              })}
            </td>
          `
          : `
            <td width="191" style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
                href: products[smallIdx].href,
                src: products[smallIdx].src,
                insideTr: false,
              })}
            </td>
            <td width="459" style="padding: 0; margin: 0; vertical-align: top;">
              ${ImageWithLink({
                href: products[bigIdx].href,
                src: products[bigIdx].src,
                insideTr: false,
              })}
            </td>
          `
      }
    </tr>
  `;

  return `
  <tr>
    <td>
      <table width="100%" cellspacing="0" cellpadding="0" border="0">
        ${row(0, 3)}
        ${row(1, 4)}
        ${row(2, 5)}
      </table>
    </td>
  </tr>
  `;
};
