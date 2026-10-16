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
  color,
  id,
  imageSide,
  categoryHref,
  category,
}) => {
  let productsInnerHtml = '';

  if (!Array.isArray(products) || products.length === 0) return productsInnerHtml;

  const columns = 3;

  const layout = category?.layout;
  if (layout) {
    const { gap = 10, padding, bigWidth, bigHeight, smallWidth, smallHeight } = layout;
    const aligned = [bigWidth, bigHeight, smallWidth, smallHeight].every(Number.isFinite);
    const bigRatio = aligned ? bigHeight / bigWidth : 0;
    const denominator = aligned ? (2 * smallHeight) / smallWidth + bigRatio : 1;
    const smallShare = aligned ? bigRatio / denominator : 0;
    const inset = aligned ? (gap * (bigRatio + 1)) / denominator : 0;
    const smallPctValue = (smallShare * 100).toFixed(4);
    const flexPct = ((1 - 3 * smallShare) * 100).toFixed(4);
    const flexFixed = Math.max(0, 3 * inset - gap);
    const bigOnLeft = imageSide === 'left';

    const containerAttrs =
      padding !== undefined
        ? `style="padding-left: ${padding}px; padding-right: ${padding}px; color: ${color};"`
        : insideContainer
          ? `class="newsletterContainer" style="color: ${color};"`
          : `style="color: ${color};"`;
    const fixedCell = (width) =>
      width > 0 ? `<td width="${width.toFixed(4)}" style="width: ${width.toFixed(4)}px; font-size: 0; line-height: 0;">&nbsp;</td>` : '';
    const flexCells = fixedCell(flexFixed) + `<td width="${flexPct}%" style="width: ${flexPct}%; font-size: 0; line-height: 0;">&nbsp;</td>`;

    const spacerRow = `<tr><td colspan="${aligned ? 5 + (flexFixed > 0 ? 1 : 0) : columns * 2 - 1}" height="${gap}" style="height: ${gap}px; font-size: 0; line-height: 0;">&nbsp;</td></tr>`;

    const rows = [];

    for (let prodId = 0; prodId < products.length; prodId += columns) {
      const imageCells = [];

      for (let columnId = 0; columnId < columns; columnId++) {
        const product = products[prodId + columnId];
        const productWithCategoryHref =
          product?.useCategoryLink && categoryHref ? { ...product, categoryLink: categoryHref } : product;

        imageCells.push(
          `<td valign="top" style="color: ${color}; vertical-align: top;">${product ? Product(productWithCategoryHref, showPrices, showNames, color, align, gapBetweenVertical, product?.useCategoryLink, 'center', '', false) : ''
          }</td>`
        );
      }

      const [first, second, third] = imageCells;
      const fixed = fixedCell(gap);

      const sideColumn = (cell, insetFirst) =>
        `<td width="${smallPctValue}%" valign="top" style="width: ${smallPctValue}%; vertical-align: top;"><table cellspacing="0" cellpadding="0" border="0" width="100%"><tr>${insetFirst ? fixedCell(inset) + cell : cell + fixedCell(inset)
        }</tr></table></td>`;

      rows.push(
        `<tr>${!aligned
          ? first + fixed + second + fixed + third
          : bigOnLeft
            ? first + flexCells + second + fixedCell(gap - inset) + sideColumn(third, true)
            : sideColumn(first, false) + fixedCell(gap - inset) + second + flexCells + third
        }</tr>`
      );
    }

    return `
    <tr>
      <td ${containerAttrs}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; table-layout: fixed;">
          ${rows.join(spacerRow)}
        </table>
      </td>
    </tr>`;
  }

  // ${insideContainer ? 'class="newsletterContainer"' : ''}

  productsInnerHtml += `
    <tr>
      <td style="color: ${color}" >
        <table cellspacing="0" cellpadding="0" border="0" width="100%">`;

  for (let prodId = 0; prodId < products.length; prodId += columns) {
    productsInnerHtml += '<tr>';

    for (let columnId = 0; columnId < columns; columnId++) {
      const product = products[prodId + columnId];
      // logic looks inverted but it's correct and stops layout from breaking
      const productImageAlign = columnId === 0 ? 'right' : columnId === columns - 1 ? 'left' : 'center';

      const horizontalGapClass = !gapBetweenHorizontal
        ? ''
        : columnId === 0
          ? 'newsletter3ProductsLeft'
          : columnId === columns - 1
            ? 'newsletter3ProductsRight'
            : 'newsletter3ProductsCenter';

      productsInnerHtml += `<td style="color: ${color}; width:33.333333333333336%;vertical-align:top;" width="33.333333333333336%" ${horizontalGapClass ? `class="${horizontalGapClass}"` : ''}>`;

      if (product) {
        const productWithCategoryHref =
          product?.useCategoryLink && categoryHref ? { ...product, categoryLink: categoryHref } : product;

        productsInnerHtml += Product(
          productWithCategoryHref,
          showPrices,
          showNames,
          color,
          align,
          gapBetweenVertical,
          product?.useCategoryLink,
          productImageAlign
        );
      }

      productsInnerHtml += '</td>';
    }

    productsInnerHtml += '</tr>';
  }

  productsInnerHtml += '</td></tr></table>';

  return productsInnerHtml;
};
