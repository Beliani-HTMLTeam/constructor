import { isAllowToRender } from '@helpers/optimizeImage.js';
import {
  ImageWithLink_new as ImageWithLink,
  ImageWithVProducts,
  Line,
  Paragraph,
  Product,
  ProductsRow,
  Space,
  Title,
  CTA,
  ImageWithLink_new,
  AlternativeProduct,
} from '@templates/AlexSrc/components/components_remake/_index.js';
// import translateImage from '@helpers/translateImage.js';
// import { Freebies } from '@freebies.js';

export const Category = isAllowToRender(
  ({
    ctaElement = { show: true, spaceAfterClass: 'newsletterBottom80px' },
    showPrices = true,
    showParagraph = true,
    showRedLine = false,
    showWhiteLine = false,
    links,
    queries,
    name,
    href,
    src,
    products,
    ctaComponent,
    productsAlignment = 'left',
    color,
    getPhrase,
    line,
    len,
    title,
    idx,
    cta = 'CTA',
    type = 'monday',
    utm,
  }) => {
    src = typeof src == 'object' ? src.src ?? src.value : src;

    // console.log(idx, queries.paragraphs[idx])
    // console.log(title);
    console.log(queries);

    if (!type) {
      return 'Please specify type category.';
    }

    // <!-- ${ImageWithLink({ align: 'left', href: href, src: prods[0].src })} -->
    // <!-- ${ImageWithLink({ align: 'right', href: href, src: prods[0].src })} -->

    switch (type) {
      case 'test-cat':
        function productsContainer(imageSide = 'left', prods = products.slice(0, 3)) {
          return `
          <tr>
            <td class="newsletterContainer" align="center">
              <table cellspacing="0" cellpadding="0" style="max-width: 610px; width: 100%;" >
                <tr>

                  ${
                    imageSide === 'left'
                      ? `
                    <td class="newsletterRight10pxTEST_BIGIMG_A">
                      ${AlternativeProduct(prods[0], 'left', `color: ${color || '#000000'}`, showPrices, false)}
                    </td><td style="width: 1.81%" class='newsletterProductSeparator'></td>
                    `
                      : ''
                  }

                  <td class="${
                    imageSide === 'left' ? 'newsletterLeft10pxTESTPRODS_A' : 'newsletterRight10pxTESTPRODS_A'
                  }">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                      <tr>
                        <td align="center">
                          ${Product(prods[1], 'center', `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                      
                      <tr>
                        <td align="center">
                          ${Product(prods[2], 'center', `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                    </table>
                  </td>

                  ${
                    imageSide === 'right'
                      ? `<td style="width: 1.81%" class='newsletterProductSeparator'></td>
                    <td class="newsletterLeft10pxTEST_BIGIMG_A">
                      ${AlternativeProduct(prods[0], 'right', `color: ${color || '#000000'}`, showPrices, false)}
                    </td>
                    `
                      : ''
                  }
                </tr>
              </table>
            </td>
          </tr>
          `;
        }

        return `
        
          ${
            title?.show
              ? `
            ${
              idx !== 0
                ? Space({ className: 'newsletterBottom35px' })
                : title?.spaceBeforeClassName
                ? Space({ className: title.spaceBeforeClassName })
                : ''
            }
            ${Title({
              color: color,
              title: queries.categories[idx],
              align: title.align ?? 'center',
              insideContainer: true,
            })}
            ${Space({ className: 'newsletterBottom35px' })}
            `
              : ''
          }

          ${
            src
              ? `
            ${title?.show ? `` : Space({ className: 'newsletterBottom35px' })}
  
            ${ImageWithLink({
              href: href,
              src: src,
              alt: queries['categories'][idx] || name || 'Category Image',
              insideRow: true,
            })}
  
            ${Space({ className: 'newsletterBottom35px' })}`
              : ``
          }

          ${
            showParagraph
              ? `  
              ${src ? `` : Space({ className: 'newsletterBottom35px' })}
              ${Paragraph(queries.paragraphs ? queries.paragraphs[idx] : queries.paragraph, 'left', color)}
              ${Space({ className: 'newsletterBottom35px' })}
            `
              : `${Space({ className: 'newsletterBottom20px' })}`
          }

          ${productsContainer(
            productsAlignment === 'left'
              ? 'left'
              : productsAlignment === 'right'
              ? 'right'
              : idx % 2 === 0
              ? 'left'
              : 'right',
            [products[0], products[1], products[2]]
          )}


					${ProductsRow({ align: 'center', products: [products[3], products[4], products[5]], showPrices: false })}

					

          ${
            ctaElement?.show
              ? `
            ${Space({ className: 'newsletterBottom35px' })}
            ${CTA({
              align: 'center',
              color: color,
              spaceAfter: { class: ctaElement?.spaceAfterClass },
              text: getPhrase('Shop now'),
              href: href,
            })}
            `
              : `${Space({ className: 'newsletterBottom20px' })}`
          }

          ${Space({ className: 'newsletterBottom35px' })}
          ${
            idx !== len
              ? `
              <tr>
                <td class="newsletterContainer">
                  <img src="https://pictureserver.net/static/2026/footer/line.jpg" style="display:block" width="100%" alt="Line Separator">
                </td>
              </tr>
              `
              : ''
          } 
        `;

      case 'xmas-gift-buttons':
        return `
        ${
          title?.show
            ? `
            ${
              idx !== 0
                ? Space({ className: 'newsletterBottom35px' })
                : title?.spaceBeforeClassName
                ? Space({ className: title.spaceBeforeClassName })
                : ''
            }
            ${Title({
              color: color,
              title: queries.categories[idx],
              align: title.align ?? 'left',
              insideContainer: true,
            })}
            ${Space({ className: 'newsletterBottom35px' })}
            `
            : ''
        }

        ${
          src
            ? `
            ${ImageWithLink({
              href: href || queries['linkWithFilter'],
              src: src,
              alt: queries['categories']?.idx || name || 'Category Image',
              insideRow: true,
            })}
            
            ${!products || products.length === 0 ? `` : Space({ className: 'newsletterBottom35px' })}
            `
            : ``
        }

        

        ${
          showParagraph
            ? queries.paragraphs
              ? queries.paragraphs[idx]
                ? `${Paragraph(queries.paragraphs[idx], 'left')} ${Space({
                    className: 'newsletterBottom35px',
                  })}`
                : ``
              : queries.paragraph
              ? `${Paragraph(queries.paragraph, 'left')} ${Space({
                  className: 'newsletterBottom35px',
                })}`
              : ``
            : ``
        }

        <tr>
          <td class="newsletterContainer">
            <table cellspacing="0" cellpadding="0" style="width: 100%;">
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" style="width: 100%;">
                    <tr>
                      <td>
                        ${ImageWithLink({
                          href: queries['gift_btn_href'][0] + utm,
                          src: links['gift_btn_1_src'],
                          alt: 'Newsletter Image',
                        })}
                      </td>

                      <td>
                        ${ImageWithLink({
                          href: queries['gift_btn_href'][1] + utm,
                          src: links['gift_btn_2_src'],
                          alt: 'Newsletter Image',
                        })}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" style="width: 100%;">
                    <tr>
                      <td>
                        ${ImageWithLink({
                          href: queries['gift_btn_href'][2] + utm,
                          src: links['gift_btn_3_src'],
                          alt: 'Newsletter Image',
                        })}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        ${Space({ className: 'newsletterBottom35px' })}

        ${
          ctaElement?.show
            ? CTA({
                align: 'center',
                spaceAfter: { class: 'newsletterBottom80px' },
                text: getPhrase('Shop now'),
                href: href || queries['linkWithFilter'],
                color: color,
              })
            : ''
        }

        ${
          showRedLine
            ? `<tr>
              <td class="newsletterContainer">
                  <img src="https://pictureserver.net/static/2025/redline.png?ver=264" style="display:block" width="100%" alt="Line Separator">
              </td>
          </tr>
          `
            : ''
        }

        ${
          showWhiteLine
            ? `
          <tr>
            <td class="newsletterContainer">${Line('https://pictureserver.net/static/2024/white_line.jpg?ver=264')}</td>
          </tr>
          `
            : ''
        }`;

      case 'imagewithv-2-1-products':
        function generateProductsContainer(imageSide = 'left', prods = products.slice(0, 3)) {
          return `
          <tr>
            <td>
              <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;" class="newsletterContainer">
                <tr>

                  ${
                    imageSide === 'left'
                      ? `
                    <!-- <td class="newsletterRight10pxTEST_BIGIMG"> -->
                    <td style="width: 66.88%; padding-right: 10px;">
                      <!-- ${ImageWithLink({ align: 'left', href: href, src: prods[0].src })} -->
                      ${Product(prods[0], 'center', `color: ${color || '#000000'}`, showPrices)}
                    </td>
                    `
                      : ''
                  }
                  <!-- <td class="${
                    imageSide === 'left' ? 'newsletterLeft10pxTESTPRODS' : 'newsletterRight10pxTESTPRODS'
                  }"> -->
                  <td style="width: 33.12%; padding-left: 10px;">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                      <tr>
                        <td>
                          ${Product(prods[1], 'center', `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                      
                      <tr>
                        <td>
                          ${Product(prods[2], 'center', `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                    </table>
                  </td>
                  ${
                    imageSide === 'right'
                      ? `
                    <td class="newsletterLeft10pxTEST_BIGIMG">
                      ${ImageWithLink({ align: 'right', href: href, src: prods[0].src })}
                    </td>
                    `
                      : ''
                  }
                </tr>
              </table>
            </td>
          </tr>
          `;
        }

        return `
        
          ${
            title?.show
              ? `
            ${
              idx !== 0
                ? Space({ className: 'newsletterBottom35px' })
                : title?.spaceBeforeClassName
                ? Space({ className: title.spaceBeforeClassName })
                : ''
            }
            ${Title({
              color: color,
              title: queries.categories[idx],
              align: title.align ?? 'left',
              insideContainer: true,
            })}
            ${Space({ className: 'newsletterBottom35px' })}
            `
              : ''
          }

          ${
            src
              ? `
            ${title?.show ? `` : Space({ className: 'newsletterBottom35px' })}
  
            ${ImageWithLink({
              href: href,
              src: src,
              alt: queries['categories'][idx] || name || 'Category Image',
              insideRow: true,
            })}
  
            ${Space({ className: 'newsletterBottom35px' })}`
              : ``
          }

          ${
            showParagraph
              ? `  
              ${src ? `` : Space({ className: 'newsletterBottom35px' })}
              ${Paragraph(queries.paragraphs ? queries.paragraphs[idx] : queries.paragraph, 'left', color)}
              ${Space({ className: 'newsletterBottom35px' })}
            `
              : `${Space({ className: 'newsletterBottom20px' })}`
          }

          ${generateProductsContainer(
            productsAlignment === 'left'
              ? 'left'
              : productsAlignment === 'right'
              ? 'right'
              : idx % 2 === 0
              ? 'left'
              : 'right',
            [products[0], products[1], products[2]]
          )}

          ${
            products.length === 6
              ? `
            ${Space({})}
            ${generateProductsContainer(
              productsAlignment === 'left'
                ? 'right'
                : productsAlignment === 'right'
                ? 'left'
                : idx % 2 === 0
                ? 'right'
                : 'left',
              [products[3], products[4], products[5]]
            )}`
              : ``
          }

					

          ${
            ctaElement?.show
              ? `
            ${Space({ className: 'newsletterBottom35px' })}
            ${CTA({
              align: 'center',
              color: color,
              spaceAfter: { class: ctaElement?.spaceAfterClass },
              text: getPhrase('Shop now'),
              href: href,
            })}`
              : `${Space({ className: 'newsletterBottom20px' })}`
          }
        `;

      case 'image-3productsrow-imagewithvproducts':
        const firstParagraphIdx = idx * 2;
        const secondParagraphIdx = idx * 2 + 1;

        return `
					${idx > 0 ? Space({ className: 'newsletterBottom35px' }) : ''}

					${Title({ title: queries.categories[idx], insideContainer: true })}

					${Space({ className: 'newsletterBottom35px' })}

					${ImageWithLink({
            href: href,
            src: src,
            alt: queries['categories'][idx] || name || 'Category Image',
            insideRow: true,
          })}

					${Space({ className: 'newsletterBottom35px' })}

					${Paragraph(queries.paragraphs[firstParagraphIdx], 'left')}

					${Space({ className: 'newsletterBottom35px' })}

					${ProductsRow({ products: [products[0], products[1], products[2]] })}


					${Space({ className: 'newsletterBottom80px' })}

					${Paragraph(queries.paragraphs[secondParagraphIdx], 'left')}

					${Space({ className: 'newsletterBottom35px' })}

					${ImageWithVProducts({
            category: { name: name, href: href },
            image: links[`cat${idx + 1}a_src`],
            products: products.slice(3, 5),
            imageSide: idx % 2 === 0 ? 'left' : 'right',
          })}

					${Space({ className: 'newsletterBottom35px' })}

					${CTA({
            align: 'center',
            spaceAfter: { class: 'newsletterBottom80px' },
            text: getPhrase('Shop now'),
            href: href,
          })}
				`;

      case 'image-4productsgrid':
        return `
					${
            title?.show
              ? `
              ${
                idx !== 0
                  ? Space({ className: 'newsletterBottom35px' })
                  : title?.spaceBeforeClassName
                  ? Space({ className: title.spaceBeforeClassName })
                  : ''
              }
              ${Title({
                color: color,
                title: queries?.gift[0] || queries.categories[idx],
                align: title.align ?? 'left',
                insideContainer: true,
              })}
              ${Space({ className: 'newsletterBottom35px' })}
              `
              : ''
          }

					${
            src
              ? `
              ${ImageWithLink({
                href: href || queries['linkWithFilter'],
                src: src,
                alt: queries['categories']?.idx || name || 'Category Image',
                insideRow: true,
              })}
              
              ${!products || products.length === 0 ? `` : Space({ className: 'newsletterBottom35px' })}
              `
              : ``
          }

					${
            showParagraph
              ? `${Space({
                  className: 'newsletterBottom35px',
                })}
              ${Paragraph(queries?.gift[1] || queries.paragraphs[idx], 'center')}`
              : ``
          }

          ${
            products && products.length > 0
              ? ` 
					<tr>
						<td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
							<table cellspacing="0" cellpadding="0" style="width: 100%;">
								<tr>
									<td class="${products[2] && products[3] ? 'newsletterBottom20px' : ``}">
										<!-- 1-2 Products table -->
										<table cellspacing="0" cellpadding="0" style="width: 100%; ">
											<tr>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
													${Product(products[0], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
													${Product(products[1], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
											</tr>
										</table>
									</td>
								</tr>

                ${
                  products[2] && products[3]
                    ? `
                <tr>
									<td>
										<!-- 3-4 Products table -->
										<table cellspacing="0" cellpadding="0" style="width: 100%; ">
											<tr>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
													${Product(products[2], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
													${Product(products[3], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
											</tr>
										</table>
									</td>
								</tr>
                  `
                    : ``
                }
								
							</table>
						</td>
					</tr>
          `
              : ``
          }

					
					${Space({ className: 'newsletterBottom35px' })}

					${
            ctaElement?.show
              ? CTA({
                  align: 'center',
                  spaceAfter: { class: 'newsletterBottom70px' },
                  text: queries?.gift[2] || getPhrase('Shop Gift Card now'),
                  href: href || queries['linkWithFilter'],
                  color: color,
                })
              : ''
          }

          ${
            showRedLine
              ? `<tr>
                <td class="newsletterContainer">
                    <img src="https://pictureserver.net/static/2025/redline.png?ver=264" style="display:block" width="100%" alt="Line Separator">
                </td>
            </tr>
            `
              : ''
          }

          ${
            showWhiteLine
              ? `<tr>
                <td class="newsletterContainer">
                    <img src="https://pictureserver.net/static/2024/white_line.jpg?ver=264" style="display:block" width="100%" alt="Line Separator">
                </td>
            </tr>
            `
              : ''
          }
				`;

      case 'image-3productsrow':
        return `
					${title?.show ? (idx !== 0 ? Space({ className: 'newsletterBottom35px' }) : '') : ''}

					${
            title?.show
              ? Title({
                  title: queries.categories[idx],
                  align: title.align ?? 'left',
                  insideContainer: true,
                })
              : ''
          }

					${title?.show ? Space({ className: 'newsletterBottom35px' }) : ''}

					${ImageWithLink({
            href: products[0].href,
            src: products[0].src,
            alt: queries['categories']?.idx || name || 'Category Image',
            insideRow: true,
          })}

					${Space({ className: 'newsletterBottom35px' })}

					${ProductsRow({
            products: [products[1], products[2], products[3]],
            showName: 'false',
            showPrices: 'false',
          })}
          
					${Space({ className: 'newsletterBottom35px' })}

          ${CTA({
            align: 'center',
            spaceAfter: { class: 'newsletterBottom80px' },
            text: getPhrase('Shop now'),
            href: href,
          })}

          <tr><td>${idx !== len - 1 ? Line(undefined, true) : ''}</td></tr>
        `;

      case 'chujWie':
        function generateCategoryIntro({ href1, href2, src1, src2, paragraphId, imageSide = 'left' }) {
          switch (imageSide) {
            case 'right':
              return `
              <tr>
                <td class="newsletterContainer">
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                      <td width="43.45%" style="vertical-align: middle !important; width: 43.45%;" class="newsletterRight20px">
                        <span class="newsletterParagraph">
                          ${queries['paragraphs'][paragraphId]}
                        </span>
                      </td>

                      <td width="56.55%" valign="bottom" align="right" style="vertical-align: bottom !important; width: 56.55%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'bottom',
                          imgValign: 'bottom',
                          href: href1,
                          src: src1,
                          insideRow: false,
                        })}
                      </td>
                    </tr>
                  </table>

                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    ${ImageWithLink_new({
                      TdAvalign: 'top',
                      imgValign: 'top',
                      href: href2,
                      src: src2,
                      insideRow: true,
                    })}
                  </table>
                </td>
              </tr>
              `;
            default:
              return `
              <tr>
                <td class="newsletterContainer">
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                      <td width="56.55%" valign="bottom" align="left" style="vertical-align: bottom !important; width: 56.55%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'bottom',
                          imgValign: 'bottom',
                          href: href1,
                          src: src1,
                          insideRow: false,
                        })}
                      </td>

                      <td width="43.45%" style="vertical-align: middle !important; width: 43.45%;" class="newsletterLeft20px">
                        <span class="newsletterParagraph">
                          ${queries['paragraphs'][paragraphId]}
                        </span>
                      </td>
                    </tr>
                  </table>

                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    ${ImageWithLink_new({
                      TdAvalign: 'top',
                      imgValign: 'top',
                      href: href2,
                      src: src2,
                      insideRow: true,
                    })}
                  </table>
                </td>
              </tr>
              `;
          }
        }

        function generateProduct({ product, imageSide = 'left' }) {
          const imageSideWidthPercentage = 60;
          const productInfoSideWidthPercentage = 100 - imageSideWidthPercentage;

          switch (imageSide) {
            case 'right':
              return `
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                      <td width="${productInfoSideWidthPercentage}%" valign="center" align="center" style="vertical-align: middle !important; background: white; text-align: center; width: ${productInfoSideWidthPercentage}%;">
                        ${Product({ ...product, src: null }, 'center', null, true)}
                      </td>

                      <td width="${imageSideWidthPercentage}%" valign="bottom" align="left" style="vertical-align: bottom; width: ${imageSideWidthPercentage}%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'center',
                          imgValign: 'middle',
                          href: product.href,
                          src: product.src,
                          insideRow: false,
                        })}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              `;
            default:
              return `
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                    <td width="${imageSideWidthPercentage}%" valign="bottom" align="right" style="vertical-align: bottom; width: ${imageSideWidthPercentage}%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'center',
                          imgValign: 'middle',
                          href: product.href,
                          src: product.src,
                          insideRow: false,
                        })}
                      </td>

                      <td width="${productInfoSideWidthPercentage}%" valign="center" align="center" style="vertical-align: middle !important; background: white; text-align: center; width: ${productInfoSideWidthPercentage}%;">
                        ${Product({ ...product, src: null }, 'center', null, true)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              `;
          }
        }

        return `

          ${generateCategoryIntro({
            href1: products[0].href,
            href2: products[1].href,
            src1: products[0].src,
            src2: products[1].src,
            paragraphId: idx,
            imageSide: idx % 2 === 0 ? 'left' : 'right',
          })}
          
          ${Space({})}
          
          ${generateProduct({
            product: products[2],
            imageSide: idx % 2 === 0 ? 'right' : 'left',
          })}
          
          ${Space({})}
          
          ${generateProduct({
            product: products[3],
            imageSide: idx % 2 === 0 ? 'left' : 'right',
          })}

          ${Space({})}

          ${generateProduct({
            product: products[4],
            imageSide: idx % 2 === 0 ? 'right' : 'left',
          })}

          ${Space({})}

          ${CTA({
            align: 'center',
            spaceAfter: { class: 'newsletterBottom80px' },
            text: getPhrase('Shop now'),
            href: queries[`linkWithFilter_${idx + 1}`],
          })}
        
        `;

      default:
        break;
    }
  }
);
