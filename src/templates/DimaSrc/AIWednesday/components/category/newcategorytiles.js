import { Product } from '../Product.js';
import { ImageWithLink } from '../ImageWithLink.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';

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
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${(c + 1) % 2 !== 0 ? 'class="newsletterRight7_5px"' : 'class="newsletterLeft7_5px"'}>`;

        if (item) {
          if (tiles) {
            const href = getCategoryLink ? getCategoryLink(item.href) : item.href;
            const name = getCategoryTitle ? getCategoryTitle(item.name) : item.name;

            productsInnerHtml += `<table width="100%" border="0" cellpadding="0" cellspacing="0">`;

            productsInnerHtml += ImageWithLink({
              src: item.src,
              href: href,
              insideTr: true,
              align: 'center',
            });

            productsInnerHtml += `
            <tr>
              <td align="center" style="text-align: center; width: 100%;">
                <a class="newsletterWednesdayAdditionalTitle" href="${href}" style="color: ${color}; text-decoration: underline; background: ${category.product.background || 'transparent'}; display: inline-block;">
                  ${name}
                </a>
              </td>
            </tr>
            `;

            if (!isLastRow) {
            productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom15px' });
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
        productsInnerHtml += `
        ${Space({ insideTr: true, className: 'newsletterBottom80px' })}
        `;
      }
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
