import { Product } from "../components/Product";

export const newKitchenGrid = ({
  products = [],
  categoryKey = '',
  showPrices = false,
  showNames = false,
  color = "#333",
}) => {
  if (!products || products.length === 0) return '';

  const categoryConfig = {
    tableware: { mobileOrder: [1, 2, 3, 4, 5, 6, 8, 10, 9], hideOnMobile: [7] },
    kitchenstorage:   { mobileOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9], hideOnMobile: [10] },
    outdoorkitchen:   { mobileOrder: [1, 2, 3, 4, 5, 7, 9, 10, 8], hideOnMobile: [6] },
    lighting:  { mobileOrder: [1, 3, 4, 6, 8, 7, 2, 9, 10], hideOnMobile: [5] },
  };

  const config = categoryConfig[categoryKey] || {
    mobileOrder: Array.from({ length: 10 }, (_, i) => i + 1),
    hideOnMobile: []
  };

  let html = `
  <tr>
  <td><table width="100%" border="0" cellpadding="0" cellspacing="0" class="products-grid ${categoryKey}-section newsletterContainer" style="table-layout: fixed;">
    
  `;

  // Desktop: 2 rows x 5 columns
  for (let row = 0; row < 2; row++) {
    html += `<tr>`;

    for (let col = 0; col < 5; col++) {
      const index = row * 5 + col;
      const product = products[index];
      const desktopIndex = index + 1;
      const isHiddenOnMobile = config.hideOnMobile.includes(desktopIndex);

      html += `
        <td class="product-item item-${desktopIndex}" 
            style="vertical-align: top; width: 20%;
                   ${isHiddenOnMobile ? 'display: none;' : ''}"
            data-desktop-index="${desktopIndex}">
          ${product ? Product(product, showPrices, showNames, color, index, false, false) : ''}
        </td>
      `;
    }

    html += `</tr>`;
  }

  html += `</td>
  </tr></table>`;

  return html;
};