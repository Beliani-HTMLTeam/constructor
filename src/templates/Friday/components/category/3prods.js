import { Product } from '../Product.js';

// Row width inside each container on desktop (650px template minus the container's left + right padding)
const INNER_WIDTH = {
  newsletterContainer: 610,
  newsletterContainer10px: 630,
  newsletterContainer30px: 590,
  newsletterContainer40px: 570,
  newsletterContainer55px: 540,
  newsletterContainer60px: 530,
};

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
  categoryHref,
  category
}) => {
  let productsInnerHtml = '';

  if (!Array.isArray(products) || products.length === 0) return productsInnerHtml;

  const columns = 3;
  const productStyle = category?.product ?? null;

  const containerClass = container || 'newsletterContainer';
  const innerWidth = insideContainer ? (INNER_WIDTH[containerClass] ?? 610) : 650;

  const GAP_PX = 20;
  const gapCount = gapBetweenHorizontal ? columns - 1 : 0;
  const gapPct = gapCount ? +((GAP_PX / innerWidth) * 100).toFixed(2) : 0;
  const colPct = +((100 - gapPct * gapCount) / columns).toFixed(2);

  productsInnerHtml += `
    <tr>
      <td style="color: ${color};" ${insideContainer ? `class="${containerClass}"` : ''}>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width:100%;table-layout:fixed;">`;

  for (let prodId = 0; prodId < products.length; prodId += columns) {
    productsInnerHtml += '<tr>';

    for (let columnId = 0; columnId < columns; columnId++) {
      const product = products[prodId + columnId];

      if (columnId > 0 && gapCount) {
        productsInnerHtml += `<td width="${gapPct}%" style="width:${gapPct}%;font-size:0;line-height:0;">&nbsp;</td>`;
      }

      productsInnerHtml += `<td width="${colPct}%" valign="top" style="color: ${color}; width:${colPct}%; vertical-align:top;">`;

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
          'center',
          container, false, productStyle
        );
      }

      productsInnerHtml += '</td>';
    }

    productsInnerHtml += '</tr>';
  }

  productsInnerHtml += '</table></td></tr>';

  return productsInnerHtml;
};