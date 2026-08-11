import { ImageWithLink } from './ImageWithLink.js';
import { Prices } from './Prices.js';
import { Space } from './Space.js';

const Product = (
  product,
  showPrices,
  showName,
  color,
  align = 'left',
  gapBetweenVertical = true,
  useCategoryLink = false,
  imageAlign = 'center',
  container = '',
  category
) => {
  if (!product || typeof product !== 'object') {
    return '';
  }

  const productSettings = category?.product || {};

  const resolveGapClass = (gap, fallback) => {
    if (gap === false || gap === 0) return '';
    if (typeof gap === 'string' && gap.trim()) return gap;

    return fallback;
  };

  const nameGapClass = resolveGapClass(
    gapBetweenVertical,
    'newsletterBottom15px'
  );

  let html = `
    <table
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
      role="presentation"
      style="
        width:100%;
        table-layout:fixed;
        border-collapse:collapse;
        mso-table-lspace:0pt;
        mso-table-rspace:0pt;
      "
    >
  `;

  if (product.src && product.href) {
    html += ImageWithLink({
      href: useCategoryLink
        ? product.categoryLink
        : product.href,
      src:
        typeof product.src === 'object'
          ? product.src.src
          : product.src,
      insideTr: true,
      align: imageAlign,
      targetBlank: true,
    });
  }

  if (showName && product.name) {
    html += `
      ${
        nameGapClass
          ? Space({
              insideTr: true,
              className: nameGapClass,
              backgroundColor:
                productSettings.background,
            })
          : ''
      }

      <tr>
        <td
          align="${align}"
          class="newsletterProductWednesdayTitle"
          style="
            color:${productSettings.nameColor || color};
            text-align:${align};
          "
        >
          ${product.name}
        </td>
      </tr>

      ${Space({
        insideTr: true,
        className: 'newsletterBottom10px',
        backgroundColor: productSettings.background,
      })}
    `;
  }

  if (
    showPrices &&
    (product.lowPrice || product.highPrice)
  ) {
    html += `
      <tr>
        <td align="${align}">
          ${Prices({
            high: product.highPrice || '',
            low: product.lowPrice || '',
            insideTr: true,
            color:
              productSettings.pricesColor || color,
            align,
          })}
        </td>
      </tr>
    `;
  }

  html += '</table>';

  return html;
};

export { Product };