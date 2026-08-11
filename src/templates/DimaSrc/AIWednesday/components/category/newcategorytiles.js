import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';
import { AdditionalImageWithLink } from '../AdditionalImageWithLink.js';

export const render = ({
  products,
  tiles,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
  getCategoryLink,
  getCategoryTitle,
  category
}) => {
  let productsInnerHtml = '';

  const items = tiles || products;

  if (Array.isArray(items)) {
    const cols = 2;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < items.length; i += cols) {
      const isLastRow = i + cols >= items.length;

      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const item = items[i + c];
        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${(c + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"'}>`;

        if (item) {
          if (tiles) {
            const href = getCategoryLink ? getCategoryLink(item.href) : item.href;
            const name = getCategoryTitle ? getCategoryTitle(item.name) : item.name;

            productsInnerHtml += `<table width="100%" border="0" cellpadding="0" cellspacing="0">`;

            productsInnerHtml += AdditionalImageWithLink({
              src: item.src,
              href: href,
              insideTr: true,
              align: 'center',
              width: 295,
            });

            productsInnerHtml += `
            <tr>
            <td align="center" style="background-color:${category?.product?.background || 'transparent'}; text-align: center;">
            <table  width="100%" border="0" cellpadding="0" cellspacing="0">
            ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
            <tr>
              <td
                bgcolor="${category?.product?.background || 'transparent'}"
                width="295"
                style="
                width:295px;
                max-width:100%;
                  background-color:${category?.product?.background || 'transparent'};
                "
              >
                <a
                  class="newsletterWednesdayAdditionalTitle"
                  href="${href}"
                  style="
                  padding: 0 14px;
                    display:block;
                    color:${color};
                    text-decoration:none; 
                  text-align:left;
                  background-color:${category?.product?.background || 'transparent'};
                    "
                >
                  ${name}
                </a>

              </td>
            </tr>
            ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
            </table>
            </td>
            </tr>
           

          `;

            if (!isLastRow) {
            productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom20px' });
            }
            productsInnerHtml += `</table>`;
          } else {
            productsInnerHtml += AdditionalProduct(item, showPrices, showNames, color, align, gapBetweenVertical);
          }
        }

        productsInnerHtml += '</td>';

      }
      
      productsInnerHtml += '</tr>';
      if (isLastRow) {
        productsInnerHtml += '<tr>'
        productsInnerHtml += `
        ${Space({ className: 'newsletterBottom80px' })}
        ${Space({ className: 'newsletterBottom80px' })}
        `;
        productsInnerHtml += '</tr>'

      }
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
