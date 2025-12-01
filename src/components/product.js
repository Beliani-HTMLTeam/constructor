import { ImageWithLink } from './ImageWithLink.js';

export function Product(product, align = 'left', style, prices = true, padding = true) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ${style ?? ''}">
    <tbody>
      <tr>
        <td>
          ${
            'src' in product && product.src !== null
              ? `<table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}" class= ${padding ?? "newsletterBottom20px"}>
                  ${ImageWithLink({
                    href: product.href,
                    src: product.src,
                    alt: product.name,
                  })}
                </td>
              </tr>
            </tbody>
          </table>`
              : ''
          }
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
            ${prices ? `
              <tr>
                <td align="${align}">
                  <span class="newsletterProductTitle" style="${style ?? ''}">${product.name}</span>
                </td>
              </tr>
          
              <tr>
                <td align="${align}" style="padding-bottom: 8px;">
                  <span class="newsletterProductLowPrice" style="${style ?? ''}">${
                    product.lowPrice
                  } </span>
                  <span class="newsletterProductHighPrice" style="${style ?? ''}">${
                    product.highPrice
                  }</span>
                </td>
              </tr>
          ` : ''}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
