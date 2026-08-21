// served as a debug purpose, planned in future: 1 product = 1 row

export const render = (products, queries) => {
  let productsInnerHtml = '';

  if (Array.isArray(products)) {
    productsInnerHtml += '<tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%">';
    products.forEach((product) => {
      productsInnerHtml += `
        <tr>
          <td>
            <a href="${product.href}" style="color: inherit; text-decoration: none;">
              <img src="${product.src}" alt="${product.name}" style="max-width: 100px; height: auto;" />
              <br />
              ${product.name}
              <br />
              ${product.lowPrice}
            </a>
          </td>
        </tr>
      `;
    });
    productsInnerHtml += '</table></td></tr>';
  }

  return productsInnerHtml;
};