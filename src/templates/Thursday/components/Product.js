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
  showBottomGap = true,
  productStyle = null
) => {
  if (!product || typeof product !== 'object') return '';

  const resolveGapClass = (gap, fallback) => {
    if (gap === false || gap === 0) return '';
    if (typeof gap === 'string' && gap.trim()) return gap;
    return fallback;
  };

  const nameGapClass = resolveGapClass(gapBetweenVertical, 'newsletterBottom20px');
  const bottomGapClass = showBottomGap
    ? (typeof gapBetweenVertical === 'string'
        ? gapBetweenVertical
        : resolveGapClass(gapBetweenVertical, product.spaceAfter ?? 'newsletterBottom35px'))
    : '';

  const box = productStyle ?? {};
  const boxed = Boolean(box.background || box.border);

  const titleStyle = box.title ?? {};
  const priceStyle = box.prices ?? {};

  const ImageCell = product.src && product.href
    ? ImageWithLink({
        href: useCategoryLink ? product?.categoryLink : product.href,
        src: typeof product.src === 'object' ? product.src.src : product.src,
        insideTr: false,
        align: imageAlign,
        targetBlank: true,
        width: box.imageWidth ?? null,
      })
    : '';

  const NameCell = showName && product.name ? product.name : '';

  const PricesTable = showPrices && (product.lowPrice || product.highPrice)
    ? Prices({
        high: product.highPrice || '',
        low: product.lowPrice || '',
        color: priceStyle.color ?? color,
        align,
        lowColor: priceStyle.lowColor,
        highColor: priceStyle.highColor,
        lowStyles: priceStyle.lowStyles,
        highStyles: priceStyle.highStyles,
        lowClassName: priceStyle.lowClassName,
        highClassName: priceStyle.highClassName,
        layout: priceStyle.layout,
        reserveHighPrice: priceStyle.reserveHighPrice,
      })
    : '';

  const nameTdAttrs = `align="${align}" style="text-align: ${align}; color: ${titleStyle.color ?? color}; ${titleStyle.styles ?? ''}" class="${titleStyle.className ?? 'newsletterProductTitle'}"`;

  if (!boxed) {
    let inner = '';

    if (ImageCell) inner += `<tr><td align="${imageAlign}" valign="top">${ImageCell}</td></tr>`;
    if (NameCell) {
      inner += `
      ${nameGapClass ? Space({ insideTr: true, className: nameGapClass }) : ''}

      <tr>
        <td ${nameTdAttrs}>${NameCell}</td>
      </tr>
    `;
    }
    if (PricesTable) inner += `<tr><td>${PricesTable}</td></tr>`;

    return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${inner}
    ${bottomGapClass ? Space({ insideTr: true, className: bottomGapClass }) : ''}
  </table>`;
  }

  const insetX = box.insetX ?? 15;
  const insetClass = box.insetClass ?? '';
  const spaceClass = box.spaceClass ?? 'newsletterBottom15px';
  const boxBackground = box.background ?? '';

  const inset = `<td ${insetClass ? `class="${insetClass}" ` : ''}width="${insetX}" style="width: ${insetX}px; font-size: 0; line-height: 0;"></td>`;
  const row = (cell) => `<tr>${inset}${cell}${inset}</tr>`;
  const fullRow = (className) => `<tr><td colspan="3" class="${className}"></td></tr>`;

  const equalHeight = box.equalHeight !== false;

  const boxStyles = [
    box.border ? `border: ${box.border};` : '',
    boxBackground ? `background-color: ${boxBackground};` : '',
    box.borderRadius ? `border-radius: ${box.borderRadius};` : '',
    equalHeight ? 'height: 100%;' : '',
    'border-collapse: collapse;',
  ]
    .filter(Boolean)
    .join(' ');

  let rows = fullRow(spaceClass);

  if (ImageCell) rows += row(`<td align="${imageAlign}" valign="top">${ImageCell}</td>`);
  if (NameCell) {
    if (nameGapClass) rows += fullRow(nameGapClass);
    rows += row(`<td ${nameTdAttrs}>${NameCell}</td>`);
  }
  if (PricesTable) rows += row(`<td>${PricesTable}</td>`);

  rows += fullRow(spaceClass);

  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%" ${equalHeight ? 'style="height: 100%;"' : ''}>
    <tr>
      <td ${equalHeight ? 'style="height: 100%;"' : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${boxStyles}" ${boxBackground ? `bgcolor="${boxBackground}"` : ''}>
          ${rows}
        </table>
      </td>
    </tr>

    ${bottomGapClass ? Space({ insideTr: true, className: bottomGapClass }) : ''}
  </table>`;
};

export { Product };
