import { Product } from '../Product.js';

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenVertical = true,
  gapBetweenHorizontal = true,
  align = 'left',
  queries,
  insideContainer = true,
  container,
  color,
  id,
  imageSide,
  alignToSide = false,
  category,
}) => {
  let productsInnerHtml = '';
  const containerClass = insideContainer ? (container ?? 'newsletterContainer') : '';

  const productStyle = category?.product ?? null;

  const boxed = Boolean(productStyle?.background || productStyle?.border);

  const styleForRow = (rowProducts) => {
    if (!productStyle?.prices?.reserveHighPrice) return productStyle;
    if (rowProducts.some((product) => product?.highPrice)) return productStyle;

    return { ...productStyle, prices: { ...productStyle.prices, reserveHighPrice: false } };
  };

  if (Array.isArray(products) && boxed) {
    const cols = 2;

    const outerPct = productStyle.containerInsetPct ?? 3;
    const gapPct = productStyle.gapPct ?? 3;
    const colPct = Math.round(((100 - outerPct * 2 - gapPct * (cols - 1)) / cols) * 100) / 100;

    const spacer = (pct) =>
      `<td width="${pct}%" style="width: ${pct}%; font-size: 0; line-height: 0;"></td>`;

    productsInnerHtml += `
    <tr>
      <td style="color: ${color}">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < products.length; i += cols) {
      const rowStyle = styleForRow(products.slice(i, i + cols));

      productsInnerHtml += `<tr>${spacer(outerPct)}`;

      for (let c = 0; c < cols; c++) {
        const product = products[i + c];
        const imageAlign = alignToSide ? (c === 0 ? 'right' : 'left') : 'center';

        if (c > 0) productsInnerHtml += spacer(gapPct);

        productsInnerHtml += `<td style="color: ${color}; width: ${colPct}%;" width="${colPct}%" valign="top" align="${imageAlign}">`;

        const isLastRow = i + cols >= products.length;
        const showBottomGap = productStyle.hideLastBottomGap ? !isLastRow : true;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color, align, gapBetweenVertical, false, imageAlign, container, showBottomGap, rowStyle);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += `${spacer(outerPct)}</tr>`;
    }

    productsInnerHtml += '</table></td></tr>';

    return productsInnerHtml;
  }

  if (Array.isArray(products)) {
    const cols = 2;
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}" ${containerClass ? `class="${containerClass}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

    for (let i = 0; i < products.length; i += cols) {
      const rowStyle = styleForRow(products.slice(i, i + cols));

      productsInnerHtml += '<tr>';

      for (let c = 0; c < cols; c++) {
        const product = products[i + c];

        const gapSize = typeof gapBetweenHorizontal === 'number' || (typeof gapBetweenHorizontal === 'string' && gapBetweenHorizontal !== 'true') ? String(gapBetweenHorizontal).replace('px', '') : 10;
        let horizontalGapValue = gapBetweenHorizontal ? ((c + 1) % 2 !== 0 ? `class="newsletterRight${gapSize}px"` : `class="newsletterLeft${gapSize}px"`) : '';

        const imageAlign = alignToSide ? (c === 0 ? 'right' : 'left') : 'center';

        // prettier-ignore
        productsInnerHtml += `<td style="color: ${color}; width:50%;vertical-align:top;" width="50%" ${horizontalGapValue} align="${imageAlign}">`;

        const isLastRow = i + cols >= products.length;
        const showBottomGap = category?.product?.hideLastBottomGap ? !isLastRow : true;

        if (product) {
          productsInnerHtml += Product(product, showPrices, showNames, color, align, gapBetweenVertical, false, imageAlign, container, showBottomGap, rowStyle);
        }

        productsInnerHtml += '</td>';
      }

      productsInnerHtml += '</tr>';
    }

    productsInnerHtml += '</td></tr></table>';
  }

  return productsInnerHtml;
};
