import { ImageWithLink } from '../ImageWithLink.js';
import { Paragraph } from '../Paragraph.js';
import { CTA } from '../CTA.js';
import { Space } from '../Space.js';

const getProductSrc = (product) => {
  if (!product?.src) return '';
  return typeof product.src === 'object' ? product.src.src : product.src;
};

const renderFreebieCard = ({ id, product, color, freeText, fallbackHref }) => {
  if (!product) {
    return '<td style="vertical-align: top; width: 50%;"></td>';
  }

  const productName = product.name ?? '';
  const productHref = product.href ?? fallbackHref ?? '#';
  const productSrc = getProductSrc(product);
  const oldPrice = product.lowPrice ?? product.highPrice ?? '';

  return `
    <td style="vertical-align: top; width: 50%; ${id % 2 === 0 ? 'padding-right: 60px;' : 'padding-left: 60px;'}">
      <table cellspacing="0" cellpadding="0" style="width: 100%; ${id % 2 === 0 ? 'padding-left: 5px;' : 'padding-right: 5px;'}" align="center">
        <tbody>
          <tr>
            <td align="center">
              <table cellspacing="0" cellpadding="0" align="center">
                <tbody>
                  <tr>
                    <td align="center">
                      ${
                        productSrc
                          ? `
                      <table border="0" cellspacing="0" cellpadding="0" width="100%">
                        <tbody>
                          <tr>
                            <td>
                              ${ImageWithLink({
                                href: productHref,
                                src: productSrc,
                                alt: productName || 'Freebie product',
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      `
                          : ''
                      }
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table cellspacing="0" cellpadding="0" style="width: 100%;">
                        <tbody>
                          <tr>
                            <td class="newsletterBottom20px"></td>
                          </tr>
                          <tr>
                            <td align="center" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px; color: ${color}">
                              <span class="newsletterProductTitleFreebie">${productName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="color: ${color}">
                              <span class="newsletterProductLowPrice">${freeText} </span>
                              <span class="newsletterProductHighPrice">${oldPrice}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  `;
};

const renderFreebieGrid = ({ products, color, freeText, categoryHref }) => {
  if (!Array.isArray(products) || products.length === 0) return '';

  let rowsHtml = '';
  for (let i = 0; i < products.length; i += 2) {
    const isLastRow = i + 2 >= products.length;
    rowsHtml += `
      <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
          <tr>
            ${renderFreebieCard({ id: 1, product: products[i], color, freeText, fallbackHref: categoryHref })}
            ${renderFreebieCard({ id: 2, product: products[i + 1], color, freeText, fallbackHref: categoryHref })}
          </tr>
        </tbody>
      </table>
      ${Space({ insideTable: true, className: isLastRow ? 'newsletterBottom35px' : 'newsletterBottom20px' })}
    `;
  }

  return `
    <tr>
      <td>
        ${rowsHtml}
      </td>
    </tr>
  `;
};

export const render = ({ products, queries, color, links, getPhrase, renderType, categoryHref }) => {
  const t = getPhrase;
  let html = '';

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });

  html += `<tr><td>${Paragraph({
    text: queries?.offer?.[0] ?? 'Offer Part 1',
    insideTable: true,
    tableContainer: true,
    className: 'newsletterParagraph',
    align: 'center',
  })}</td></tr>`;

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });

  html += `<tr><td>${Paragraph({
    text: queries?.offer?.[1] ?? 'Offer Part 2',
    insideTable: true,
    tableContainer: true,
    className: 'newsletterParagraph',
    align: 'center',
  })}</td></tr>`;

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });

  if (renderType === 'newsletter') {
    html += CTA({
      href: links?.TopImageTitle_href,
      text: t('Get code'),
      color: '#000000',
      align: 'center',
      insideTr: true,
    });
  } else {
    html += `<tr><td>${Paragraph({
      text: queries?.offer?.[2] ?? 'Code: xxxxx',
      insideTable: true,
      tableContainer: true,
      className: 'newsletterParagraph',
      align: 'center',
    })}</td></tr>`;
  }

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });

  html += `<tr><td>${Paragraph({
    text: queries?.offer_date?.[0] ?? 'Offer Date',
    insideTable: true,
    tableContainer: true,
    className: 'newsletterParagraph',
    align: 'center',
  })}</td></tr>`;

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });

  html += `<tr><td>${Paragraph({
    text: t('Choose from:'),
    insideTable: true,
    tableContainer: true,
    className: 'newsletterParagraph',
    align: 'center',
  })}</td></tr>`;

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });

  html += renderFreebieGrid({
    products,
    color,
    freeText: t('Free'),
    categoryHref,
  });

  return html;
};
