import { Product } from '../Product.js';

export const render = ({
  products,
  showPrices,
  showNames,
  gapBetweenHorizontal = true,
  gapBetweenVertical = true,
  align = 'left',
  queries,
  insideContainer = true,
  color,
  id,
  imageSide,
  categoryHref,
  category,
}) => {
  // console.log(`renderowanie kategorii ${id}, ${showPrices}, ${showNames}`);

  const layout = category?.layout;
  if (layout) {
    const { gap = 10, padding, bigWidth, bigHeight, smallWidth, smallHeight } = layout;
    const bigRatio = bigHeight / bigWidth;
    const smallRatio = smallHeight / smallWidth;
    const denominator = 2 * smallRatio + bigRatio;
    const smallPct = ((bigRatio / denominator) * 100).toFixed(4);
    const inset = Math.min(gap, (gap * (bigRatio + 1)) / denominator);
    const outerGap = gap - inset;

    const fixedCell = (width) =>
      width > 0 ? `<td width="${width.toFixed(4)}" style="width: ${width.toFixed(4)}px; font-size: 0; line-height: 0;">&nbsp;</td>` : '';
    const spacerRow = `<tr><td height="${gap}" style="height: ${gap}px; font-size: 0; line-height: 0;">&nbsp;</td></tr>`;
    const containerAttrs =
      padding !== undefined
        ? `style="padding-left: ${padding}px; padding-right: ${padding}px;"`
        : insideContainer
          ? 'class="newsletterContainer"'
          : '';

    let layoutHtml = '';
    let layoutSide = imageSide ?? (id % 2 === 0 ? 'left' : 'right');

    if (Array.isArray(products)) {
      for (let i = 0; i + 2 < products.length; i += 3) {
        const withCategoryLink = products[i]?.useCategoryLink ? { ...products[i], categoryLink: categoryHref } : products[i];
        const big = `<td valign="top" style="vertical-align: top;">${Product(withCategoryLink, showPrices, showNames, '#000', align, gapBetweenVertical, products[i]?.useCategoryLink, 'center', '', false)}</td>`;

        const smallImages = `<td valign="top">
          ${Product(products[i + 1], showPrices, showNames, color, align, gapBetweenVertical, products[i + 1]?.useCategoryLink, 'center', '', false)}
          <table cellspacing="0" cellpadding="0" width="100%"><tr><td height="${gap}" style="height: ${gap}px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
          ${Product(products[i + 2], showPrices, showNames, color, align, gapBetweenVertical, products[i + 2]?.useCategoryLink, 'center', '', false)}
        </td>`;

        // inset sits next to the gap, inside the % column
        const smallInner = layoutSide === 'left' ? fixedCell(inset) + smallImages : smallImages + fixedCell(inset);
        const small = `<td width="${smallPct}%" valign="top" style="width: ${smallPct}%; vertical-align: top;"><table cellspacing="0" cellpadding="0" width="100%" style="table-layout: auto;"><tr>${smallInner}</tr></table></td>`;

        layoutHtml += `<tr><td ${containerAttrs}><table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;"><tr>${layoutSide === 'left' ? big + fixedCell(outerGap) + small : small + fixedCell(outerGap) + big
          }</tr></table></td></tr>${spacerRow}`;

        layoutSide = layoutSide === 'left' ? 'right' : 'left';
      }
    }

    return layoutHtml;
  }

  const renderGapTd = (side) => {
    if (gapBetweenHorizontal === false || gapBetweenHorizontal === 0) return '';
    const className =
      typeof gapBetweenHorizontal === 'string'
        ? gapBetweenHorizontal
        : side === 'left'
          ? 'newsletterLeft20px'
          : 'newsletterRight20px';
    return `<td class="${className}"></td>`;
  };

  // console.log('imageSide ', imageSide, 'id ', id);
  let imgSide = imageSide ?? (id % 2 === 0 ? 'left' : 'right');
  // console.log('imageSide ', imgSide, 'id ', id);

  let productsInnerHtml = '';

  if (Array.isArray(products)) {
    let currentSide = imgSide;

    for (let i = 0; i + 2 < products.length; i += 3) {
      productsInnerHtml += `<tr><td ${insideContainer ? 'class="newsletterContainer"' : ''
        }><table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;"><tr>`;

      const bigProduct = (p) => {
        const withCategoryLink = p?.useCategoryLink ? { ...p, categoryLink: categoryHref } : p;
        return Product(withCategoryLink, showPrices, showNames, '#000', align, gapBetweenVertical, p?.useCategoryLink);
      };

      // Big image on the left
      if (currentSide === 'left') {
        productsInnerHtml += `<td>${bigProduct(products[i])}</td>`;
        productsInnerHtml += renderGapTd('left');
      }

      productsInnerHtml += `<td><table cellspacing="0" cellpadding="0" style="width: 100%;">`;
      productsInnerHtml += `<tr><td>${Product(products[i + 1], showPrices, showNames, color, align, gapBetweenVertical, products[i + 1]?.useCategoryLink)}</td></tr>`;
      productsInnerHtml += `<tr><td>${Product(products[i + 2], showPrices, showNames, color, align, gapBetweenVertical, products[i + 2]?.useCategoryLink)}</td></tr>`;
      productsInnerHtml += `</table></td>`;

      // Big image on the right
      if (currentSide === 'right') {
        productsInnerHtml += renderGapTd('right');
        productsInnerHtml += `<td>${bigProduct(products[i])}</td>`;
      }

      productsInnerHtml += '</tr></table></td></tr>';

      // Flip side for next group
      currentSide = currentSide === 'left' ? 'right' : 'left';
    }
  }

  return productsInnerHtml;
};
