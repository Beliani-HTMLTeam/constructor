import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from '../../components/components/Prices.js';
import { Space } from './Space.js';

const Product = (product, showPrices, showName, color, idx, isSpaceAfter = true, priceAdditionalPadding = false, priceColor, ctaText) => {
  if (!product || typeof product !== 'object') return '';

  const textColor = color || '#750000';
  const cardBg = '#F7EBE6'; // Blush card container background matching Image 2

  let html = `
  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${cardBg}; border-radius: 8px;">
    <tr>
      <td style="padding: 9px 9px 20px; background-color: ${cardBg};">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

  if (product.src && product.href) {
    html += `
          <tr>
            <td style="background-color: #FFFFFF; text-align: center; padding: 0px;" align="center">
              <a href="${product.href}" style="display: block; text-decoration: none; border: 0;">
                <img src="${product.src}" alt="${product.name || 'Product Image'}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0;" loading="lazy">
              </a>
            </td>
          </tr>
    `;
  }

  if (showName && product.name) {
    html += `
          ${Space({ insideTr: true, className: 'newsletterBottom35px', backgroundColor: cardBg })}
          
          <tr>
            <td style="color: ${textColor};" class="newsletterProductTitle">
              ${product.name}
            </td>
          </tr>
    `;
  }

  if (showPrices && (product.lowPrice || product.highPrice)) {
    html += `
          <tr>
            <td style="color: ${priceColor || textColor}; padding-top: 3px;">
              ${Prices({
                high: product.highPrice || '',
                low: product.lowPrice || '',
                color: priceColor || textColor,
              })}
            </td>
          </tr>
    `;
  }

  if (product.href) {
    html += `
      <tr>
        <td
          height="100%"
          valign="bottom"
          style="
            height:100%;
            color:${textColor};
            font-family:'Open Sans', Arial, sans-serif;
            vertical-align:bottom;
          "
        >
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            role="presentation"
          >
            ${Space({
              insideTr: true,
              className: 'newsletterBottom10px',
              backgroundColor: cardBg,
            })}
  
            <tr>
              <td
                valign="bottom"
                style="
                  color:${textColor};
                  font-family:'Open Sans', Arial, sans-serif;
                  vertical-align:bottom;
                "
              >
                <a
                  href="${product.href}"
                  style="
                    color:${textColor};
                    text-decoration:underline;
                    font-size:13px;
                    font-weight:700;
                  "
                >
                  <span
                    style="
                      color:${textColor};
                      font-size:13px;
                      font-weight:700;
                    "
                  >
                    ${ctaText || 'Shop now'}
                  </span>
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `;
  }

  html += `
        </table>
      </td>
    </tr>
  </table>`;

  // Must be a complete nested table, not a standalone <tr>.
  if (isSpaceAfter) {
    html += `
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        width="100%"
        role="presentation"
      >
        <tr>
          <td
            height="20"
            class="newsletterBottom20px"
            style="height:20px; font-size:0; line-height:0;"
          >&nbsp;</td>
        </tr>
      </table>
    `;
  }


  return html;
};

export { Product };
