import { Product } from '../components/Product';
import { Prices } from '../../components/components/Prices.js';

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
  const textColor = color || '#750000';
  const gap = 6;
  const totalRows = Math.ceil(products.length / 2);

  const getBackground = (product) =>
    product ? cardBg : background;

  const renderImage = (product) => {
    if (!product?.src || !product?.href) {
      return '&nbsp;';
    }

    return `
      <a
        href="${product.href}"
        style="
          display:block;
          border:0;
          text-decoration:none;
        "
      >
        <img
          src="${product.src}"
          alt="${product.name || 'Product Image'}"
          style="
            display:block;
            width:100%;
            max-width:100%;
            height:auto;
            border:0;
          "
        >
      </a>
    `;
  };

  const renderName = (product) => {
    if (!showNames || !product?.name) {
      return '&nbsp;';
    }

    return product.name;
  };

  const renderProductPrices = (product) => {
    if (
      !showPrices ||
      !product ||
      (!product.lowPrice && !product.highPrice)
    ) {
      return '&nbsp;';
    }

    return Prices({
      high: product.highPrice || '',
      low: product.lowPrice || '',
      color: priceColor || textColor,
    });
  };

  const renderCTA = (product) => {
    if (!product?.href) {
      return '&nbsp;';
    }

    return `
      <a
        href="${product.href}"
        style="
          color:${textColor};
          font-family:'Open Sans', Arial, sans-serif;
          font-size:13px;
          font-weight:700;
          text-decoration:underline;
        "
      >
        <span
          style="
            color:${textColor};
            font-size:13px;
            font-weight:700;
          "
        >
          ${ctaText || 'Shop now'}
        </span>
      </a>
    `;
  };

  let html = `
    <tr>
      <td
        style="
          padding-left:6px;
          padding-right:6px;
          color:${textColor};
          background-color:${background};
        "
        ${insideContainer ? 'class="newsletterContainer"' : ''}
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

    const leftBg = getBackground(leftProduct);
    const rightBg = getBackground(rightProduct);

    // Image row
    html += `
      <tr>
        <td
          width="49.5%"
          valign="top"
          bgcolor="${leftBg}"
          style="
            width:49.5%;
            padding:15px 9px 0;
            vertical-align:top;
            background-color:${leftBg};
          "
        >
          ${renderImage(leftProduct)}
        </td>

        <td
          rowspan="5"
          width="${gap}"
          bgcolor="${background}"
          style="
            width:${gap}px;
            min-width:${gap}px;
            font-size:0;
            line-height:0;
            background-color:${background};
          "
        >&nbsp;</td>

        <td
          width="49.5%"
          valign="top"
          bgcolor="${rightBg}"
          style="
            width:49.5%;
            padding:15px 9px 0;
            vertical-align:top;
            background-color:${rightBg};
          "
        >
          ${renderImage(rightProduct)}
        </td>
      </tr>

      <!-- Space below both images -->
      <tr>
        <td
          height="35"
          bgcolor="${leftBg}"
          style="
            height:15px;
            font-size:0;
            line-height:0;
            background-color:${leftBg};
          "
        >&nbsp;</td>

        <td
          height="35"
          bgcolor="${rightBg}"
          style="
            height:15px;
            font-size:0;
            line-height:0;
            background-color:${rightBg};
          "
        >&nbsp;</td>
      </tr>

      <!-- Shared name row -->
      <tr>
        <td
          valign="top"
          bgcolor="${leftBg}"
          class="newsletterProductTitle"
          style="
            padding:0 9px;
            color:${textColor};
            vertical-align:top;
            background-color:${leftBg};
          "
        >
          ${renderName(leftProduct)}
        </td>

        <td
          valign="top"
          bgcolor="${rightBg}"
          class="newsletterProductTitle"
          style="
            padding:0 9px;
            color:${textColor};
            vertical-align:top;
            background-color:${rightBg};
          "
        >
          ${renderName(rightProduct)}
        </td>
      </tr>

      <!-- Shared price row -->
      <tr>
        <td
          valign="top"
          bgcolor="${leftBg}"
          style="
            padding:3px 9px 0;
            color:${priceColor || textColor};
            vertical-align:top;
            background-color:${leftBg};
          "
        >
          ${renderProductPrices(leftProduct)}
        </td>

        <td
          valign="top"
          bgcolor="${rightBg}"
          style="
            padding:3px 9px 0;
            color:${priceColor || textColor};
            vertical-align:top;
            background-color:${rightBg};
          "
        >
          ${renderProductPrices(rightProduct)}
        </td>
      </tr>

      <!-- Shared CTA row -->
      <tr>
        <td
          valign="bottom"
          bgcolor="${leftBg}"
          style="
            padding:10px 9px 16px;
            color:${textColor};
            vertical-align:bottom;
            background-color:${leftBg};
          "
        >
          ${renderCTA(leftProduct)}
        </td>

        <td
          valign="bottom"
          bgcolor="${rightBg}"
          style="
            padding:10px 9px 16px;
            color:${textColor};
            vertical-align:bottom;
            background-color:${rightBg};
          "
        >
          ${renderCTA(rightProduct)}
        </td>
      </tr>
    `;

    if (row < totalRows - 1) {
      html += `
        <tr>
          <td
            colspan="3"
            height="${gap}"
            bgcolor="${background}"
            style="
              height:${gap}px;
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