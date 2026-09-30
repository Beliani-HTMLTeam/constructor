import { ImageWithLink } from '../ImageWithLink.js';
import { Product } from '../Product.js';

export const render = ({
  products,
  showPrices,
  showNames,
  align = 'left',
  insideContainer = true,
  container,
  color,
  id,
  imageSide,
  categoryHref,
  category,
}) => {
  if (!Array.isArray(products) || products.length === 0) return '';

  const bigImage = category?.bigImage ?? {};
  const bigSrc = typeof bigImage === 'string' ? bigImage : bigImage.src;
  const bigHref = bigImage.href ?? categoryHref ?? '#';
  const bigWidth = bigImage.width ?? 326;
  const productWidth = category?.product?.imageWidth ?? 162;

  const rowWidth = 650;
  const bigPct = Math.round((bigWidth / rowWidth) * 10000) / 100;
  const gridPct = Math.round((100 - bigPct) * 100) / 100;

  const side = imageSide ?? (id % 2 === 0 ? 'left' : 'right');
  const containerClass = insideContainer ? (container ?? 'newsletterContainer') : '';

  const bigCell = `
    <td width="${bigWidth}" style="width: ${bigPct}%; vertical-align: top; padding: 0; margin: 0;" valign="top" align="center">
      ${bigSrc ? ImageWithLink({ href: bigHref, src: bigSrc, width: bigWidth, targetBlank: true }) : ''}
    </td>
  `;

  let gridRows = '';

  for (let i = 0; i < 4; i += 2) {
    gridRows += '<tr>';

    for (let c = 0; c < 2; c++) {
      const product = products[i + c];

      gridRows += `<td width="50%" style="width: 50%; vertical-align: top; padding: 0; margin: 0;" valign="top" align="center">`;

      if (product) {
        gridRows += Product(product, showPrices, showNames, color, align, false, false, 'center', container, false, {
          ...(category?.product ?? {}),
          imageWidth: productWidth,
        });
      }

      gridRows += '</td>';
    }

    gridRows += '</tr>';
  }

  const gridCell = `
    <td width="${rowWidth - bigWidth}" style="width: ${gridPct}%; vertical-align: top; padding: 0; margin: 0;" valign="top">
      <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse: collapse;">
        ${gridRows}
      </table>
    </td>
  `;

  return `
    <tr>
      <td style="color: ${color}" ${containerClass ? `class="${containerClass}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
          <tr>
            ${side === 'left' ? bigCell + gridCell : gridCell + bigCell}
          </tr>
        </table>
      </td>
    </tr>
  `;
};
