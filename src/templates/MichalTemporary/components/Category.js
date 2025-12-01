import { isAllowToRender } from '@helpers/optimizeImage.js';
import {
  ImageWithLink,
  Line,
  Paragraph,
  Space,
  Title,
  CTA,
} from './index.js';
import {translateImage} from '@helpers/translateImage.js';

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

    console.log(showPrices)
    src = typeof src == 'object' ? src.src ?? src.value : src;

    // console.log(idx, queries.paragraphs[idx])
    // console.log(title);

    if (!type) {
      return 'Please specify type category.';
    }

    
    // <!-- ${ImageWithLink({ align: 'left', href: href, src: prods[0].src })} -->
    // <!-- ${ImageWithLink({ align: 'right', href: href, src: prods[0].src })} -->

    switch (type) {
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
              
              ${
                !products || products.length === 0
                  ? ``
                  : Space({ className: 'newsletterBottom35px' })
              }
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
              ? `<tr>
                <td class="newsletterContainer">
                    <img src="https://pictureserver.net/static/2024/white_line.jpg?ver=264" style="display:block" width="100%" alt="Line Separator">
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
              
              ${
                !products || products.length === 0 ? `` : Space({ className: 'newsletterBottom35px' })
              }
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
              <td class="newsletterContainer">${Line(
                'https://pictureserver.net/static/2024/white_line.jpg?ver=264'
              )}</td>
            </tr>
            `
              : ''
          }`;
  
      default:
        break;
    }

  }
);
