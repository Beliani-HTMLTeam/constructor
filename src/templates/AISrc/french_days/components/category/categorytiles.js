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
  country,
  tdClass = 'newsletterContainer',
  displayType = '2col',
  tileBgColor = '',
  tileTextColor,
}) => {
  let productsInnerHtml = '';

  const items = tiles || products;

  if (Array.isArray(items)) {
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}" ${insideContainer ? `class="${tdClass}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    if (displayType === '4col' && tiles) {
      const gap = 5;
      const totalGaps = (items.length - 1) * gap;
      const colWidth = Math.floor((610 - totalGaps) / items.length);

      productsInnerHtml += `<tr>`;
      for (let c = 0; c < items.length; c++) {
        const item = items[c];
        const href = item.resolvedHref ?? (getCategoryLink ? getCategoryLink(item.href) : item.href);
        const name = getCategoryTitle ? getCategoryTitle(item.name) : item.name;
        const nameOverride = item?.nameOverrides?.[country.toLowerCase()] !== undefined ? item.nameOverrides[country.toLowerCase()] : name;

        if (c > 0 && gap > 0) {
          productsInnerHtml += `<td width="${gap}" class="col4tileGap" style="width:${gap}px;line-height:1px;font-size:1px;">&nbsp;</td>`;
        }

        productsInnerHtml += `<td width="${colWidth}" class="col4tile" style="width:${colWidth}px;vertical-align:top;">
          <table width="100%" border="0" cellpadding="0" cellspacing="0">`;

          productsInnerHtml += ImageWithLink({
            src: typeof item.src === 'object' ? item.src.src : item.src,
            href,
            alt: nameOverride ?? '',
            insideTr: true,
            align: 'center',
            width: colWidth,
            height: colWidth,
          });

        productsInnerHtml += `</table>
        </td>`;
      }
      productsInnerHtml += `</tr>`;

    } else {
      const cols = 2;

      for (let i = 0; i < items.length; i += cols) {
        productsInnerHtml += '<tr>';

        for (let c = 0; c < cols; c++) {
          const item = items[i + c];
          const colClass = (c + 1) % 2 !== 0 ? 'class="newsletterRight10px"' : 'class="newsletterLeft10px"';

          // prettier-ignore
          productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${colClass}>`;

          if (item) {
            if (tiles) {
              const href = item.resolvedHref ?? (getCategoryLink ? getCategoryLink(item.href) : item.href);
              const name = getCategoryTitle ? getCategoryTitle(item.name) : item.name;
              const countryCode = queries?.country?.toLowerCase() ?? '';
              let nameOverride = item?.nameOverrides?.[country.toLowerCase()] !== undefined ? item.nameOverrides[country.toLowerCase()] : name;

              productsInnerHtml += `<table width="100%" border="0" cellpadding="0" cellspacing="0">`;

              productsInnerHtml += ImageWithLink({
                src: item.src,
                href: href,
                insideTr: true,
                align: 'center',
              });

              productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom35px' });

              productsInnerHtml += `
              <tr>
                <td align="center" style="text-align: center;">
                  <a class="newsletterAdditionalCategoryTitle" href="${href}" style="color: ${color}; text-decoration: underline;">
                    ${nameOverride}
                  </a>
                </td>
              </tr>
              `;

              productsInnerHtml += Space({ insideTr: true, className: 'newsletterBottom80px' });

              productsInnerHtml += `</table>`;
            } else {
              productsInnerHtml += Product(item, showPrices, showNames, color, align, gapBetweenVertical);
            }
          }

          productsInnerHtml += '</td>';
        }

        productsInnerHtml += '</tr>';
      }
    }

    productsInnerHtml += `</table></td></tr>`;
  }

  return productsInnerHtml;
};