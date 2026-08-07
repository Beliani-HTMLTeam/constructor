import { Product } from '../components/Product';

// export const render = (
//   products,
//   showPrices,
//   showNames,
//   queries,
//   insideContainer = true,
//   color,
//   background,
//   priceColor,
//   ctaText
// ) => {
//   if (!Array.isArray(products) || products.length === 0) {
//     return '';
//   }

//   const cardBg = '#F7EBE6';
//   const totalRows = Math.ceil(products.length / 2);

//   let html = `
//     <tr>
//       <td
//         style="color:${color}; background-color:${background};"
//         ${insideContainer ? 'class="newsletterContainer"' : ''}
//       >
//         <table
//           cellspacing="0"
//           cellpadding="0"
//           border="0"
//           width="100%"
//           role="presentation"
//         >
//   `;

//   for (let row = 0; row < totalRows; row++) {
//     const leftIndex = row * 2;
//     const rightIndex = leftIndex + 1;

//     const leftProduct = products[leftIndex];
//     const rightProduct = products[rightIndex];

//     html += `
//       <tr>
//         <td
//           width="48%"
//           valign="top"
//           bgcolor="${cardBg}"
//           style="
//             width:48%;
//             vertical-align:top;
//             background-color:${cardBg};
//           "
//         >
//           ${
//             leftProduct
//               ? Product(
//                   leftProduct,
//                   showPrices,
//                   showNames,
//                   color,
//                   leftIndex,
//                   false,
//                   !insideContainer,
//                   priceColor,
//                   ctaText
//                 )
//               : '&nbsp;'
//           }
//         </td>

//         <td
//           width="4%"
//           style="
//             width:4%;
//             font-size:0;
//             line-height:0;
//             background-color:${background};
//           "
//         >&nbsp;</td>

//         <td
//           width="48%"
//           valign="top"
//           bgcolor="${rightProduct ? cardBg : background}"
//           style="
//             width:48%;
//             vertical-align:top;
//             background-color:${rightProduct ? cardBg : background};
//           "
//         >
//           ${
//             rightProduct
//               ? Product(
//                   rightProduct,
//                   showPrices,
//                   showNames,
//                   color,
//                   rightIndex,
//                   false,
//                   !insideContainer,
//                   priceColor,
//                   ctaText
//                 )
//               : '&nbsp;'
//           }
//         </td>
//       </tr>
//     `;

//     if (row < totalRows - 1) {
//       html += `
//         <tr>
//           <td
//             colspan="3"
//             height="20"
//             class="newsletterBottom20px"
//             style="
//               height:20px;
//               font-size:0;
//               line-height:0;
//               background-color:${background};
//             "
//           >&nbsp;</td>
//         </tr>
//       `;
//     }
//   }

//   html += `
//         </table>
//       </td>
//     </tr>
//   `;

//   return html;
// };

export const render = (
  products,
  showPrices,
  showNames,
  queries,
  insideContainer = true,
  color,
  background,
  priceColor,
  ctaText
) => {
  if (!Array.isArray(products) || products.length === 0) {
    return '';
  }

  const cardBg = '#F7EBE6';
  const totalRows = Math.ceil(products.length / 2);

  const renderProduct = (product, index) => {
    if (!product) return '&nbsp;';

    return Product(
      product,
      showPrices,
      showNames,
      color,
      index,
      false,
      !insideContainer,
      priceColor,
      ctaText
    );
  };

  let html = `
    <tr>
      <td
        style="
          color:${color};
          background-color:${background};
        "
      >
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          role="presentation"
          style="
            width:100%;
            table-layout:fixed;
            background-color:${background};
          "
        >
  `;

  for (let row = 0; row < totalRows; row++) {
    const leftIndex = row * 2;
    const rightIndex = leftIndex + 1;

    const leftProduct = products[leftIndex];
    const rightProduct = products[rightIndex];

    html += `
      <tr>
        <!-- Left product -->
        <td
          width="49.5%"
          valign="top"
          style="
            width:49.5%;
            padding-left:6px;
            vertical-align:top;
            background-color:${background};
          "
        >
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            role="presentation"
            bgcolor="${leftProduct ? cardBg : background}"
            style="
              width:100%;
              background-color:${leftProduct ? cardBg : background};
            "
          >
            <tr>
              <td valign="top">
                ${renderProduct(leftProduct, leftIndex)}
              </td>
            </tr>
          </table>
        </td>

        <!-- Middle space -->
        <td
          width="1%"
          style="
            width:1%;
            font-size:0;
            line-height:0;
            background-color:${background};
          "
        >&nbsp;</td>

        <!-- Right product -->
        <td
          width="49.5%"
          valign="top"
          style="
            width:49.5%;
            padding-right:6px;
            vertical-align:top;
            background-color:${background};
          "
        >
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            role="presentation"
            bgcolor="${rightProduct ? cardBg : background}"
            style="
              width:100%;
              background-color:${rightProduct ? cardBg : background};
            "
          >
            <tr>
              <td valign="top">
                ${renderProduct(rightProduct, rightIndex)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `;

    if (row < totalRows - 1) {
      html += `
        <tr>
          <td
            colspan="3"
            height="6"
            style="
              height:6px;
              font-size:0;
              line-height:0;
              background-color:${background};
            "
          >&nbsp;</td>
        </tr>
      `;
    }
  }

  html += `
        </table>
      </td>
    </tr>
  `;

  return html;
};