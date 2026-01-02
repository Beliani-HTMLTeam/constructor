import { ImageWithLink, Space, Paragraph, Line, OfferPartCodes } from '@/components/index.js';
import { Footer } from '@/components/footer.js';
import { Header } from '@/components/header.js';
import FreebiesGenerator from '@/components/FreebiesGenerator';
import { FreeCreate2Columns_Grid } from './FreeCreate2Columns_Grid';
import { getCodes } from '@/utils/getCodes';
import { getState } from '@/main/state/appState';
import { PeakOfferPartCode } from './PeakOfferPartCode';
import { CampaignWrapper } from './DimaSrc/utils/UrlModificator';
import { TopImageTitle } from './DimaSrc/newsletter_regular_friday/components/TopImageTitle';

export function PeakFreebieNslt({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  shop,
  utm,
  country,
  type,
  categories,
  freebies,
  background,
  TopImageTitle_data,
  offerPart,
  intro,
  inside,
  name,
  add_utm,
  single_image,
  soon_banners,
  startId,
  white_line,
  under_intro_line,
  category_2_columns,
  full_img_width,
}) {
  const codes = getCodes(queries);
  const selectCampaign = getState('selectedCampaign');
  const colorLine = white_line
    ? 'https://pictureserver.net/static/2024/white_line.jpg'
    : 'https://beliani.info/newsletter/2022/line.jpg';

  console.log(full_img_width, 'tyt');

  categories = categories.map((category) => ({
    ...category,
    src: { src: CampaignWrapper(category.src.src, '20260113') },
  }));

  // const categoriesSectionHTML = generateCategoriesSection(
  //   categories,
  //   queries,
  //   background,
  //   add_utm,
  //   white_line,
  //   full_img_width,
  //   getCategoryTitle,
  //   getProductById,
  //   getPhrase,
  //   getCategoryLink
  // );

  console.log('TopImageTitle_data', TopImageTitle_data, type);

  console.log('queries', type, !queries.TopImageTitle, !single_image);

  return `
  ${Header(
    {
      id,
      advantages: {
        freeDelivery: getHeader('Free Delivery'),
        daysReturn: getHeader('365-Day Return'),
      },
      paragraph: {
        troubleViewing: getHeader('Trouble viewing'),
        troubleViewingHrefText: getHeader('Trouble viewing href text'),
        addBeliani: getHeader('Add Beliani to your'),
        whiteList: getHeader('Whitelist'),
        whitelistHref: getHeader('Whitelist href'),
      },
      topImage: {
        src: getHeader('Top image src'),
        href: getHeader('Top image href'),
      },
      categories: {
        firstCategory: {
          src: getHeader('Header Category 1 src'),
          href: getHeader('Header Category 1 href'),
        },
        secondCategory: {
          src: getHeader('Header Category 2 src'),
          href: getHeader('Header Category 2 href'),
        },
        thirdCategory: {
          src: getHeader('Header Category 3 src'),
          href: getHeader('Header Category 3 href'),
        },
      },
      assembly: {
        src: ['AT', 'PL', 'FR', 'UK'].includes(country)
          ? ['#fd9000'].includes(background)
            ? getHeader('Header delivery_cosy src')
            : getHeader('Header delivery src')
          : ['#750000'].includes(background)
          ? getHeader('Header asembly src')
          : getHeader('Header asembly_cosy src'),
        href: getHeader('Header asembly href'),
        exclude: true,
      },
    },
    { type }
  )}
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
        <tbody>
              <tr>
                <td align="center">
                  ${
                    type === 'newsletter' || !queries.TopImageTitle
                      ? ImageWithLink({
                          href: links.TopImageTitle_href,
                          src: links.TopImageTitle_src,
                          alt: 'Top image title',
                        })
                      : !single_image
                      ? TopImageTitle({
                          href: links.TopImageTitle_href,
                          title1: queries.TopImageTitle[0],
                          title2: queries.TopImageTitle[1],
                          color: TopImageTitle_data?.color || '#000',
                          type: TopImageTitle_data?.type || 'standard',
                          renderType: type,
                        })
                      : ``
                  }
                </td>
              </tr>
              <!-- Sprawdź czy masz dodany parametr single_image w Campaign jeśli się nie wyświetla -->
              ${
                !single_image
                  ? `<tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: links.TopImageTitle_href,
                        src: links.TopImage_src,
                      })}
                    </td>
                </tr>`
                  : ``
              }

              ${
                !inside || inside.type == 'timer'
                  ? `
                <tr>
                  <td style="background-color: ${background};">
                    ${Space()}
                  </td>
                </tr>
              `
                  : `<tr>
                  <td style="background-color: ${inside.background || background}; color: ${inside.color || '#000'};">
                    ${Space()}
                    ${ImageWithLink({
                      href: links[8],
                      src: links[9],
                    })}
                    ${Space({ className: 'newsletterBottom60px' })}
                  </td>
              </tr>`
              }

              ${
                freebies
                  ? `<tr>
                  <td class="newsletterContainer" style="background-color: ${
                    freebies.options.background || background
                  }; color: ${offerPart.color || '#000'};">
                      
                      ${
                        offerPart.type === 'code'
                          ? PeakOfferPartCode({
                              color: offerPart.color,
                              data: queries.offerPart,
                              //data2: queries.ChooseFrom,
                              href: links.code_href,
                              getPhrase,
                              type,
                              queries,
                              selectCampaign: selectCampaign,
                              add_utm,
                              shop,
                              productHref: freebies.items.map((item) =>
                                getProductById(item.products[0].id, item.products[0].src)
                              ),
                              paragraph1: 'Choose a FREE wall decor from 4 options.',
                              paragraph2:
                                'To claim your FREE wall decor, use the code at the checkout when you spend a minimum of €200',
                              paragraph3: 'The offer is valid until 18/01/2026',
                            })
                          : ''
                      }
                      ${
                        offerPart.type === 'codes'
                          ? OfferPartCodes({
                              type,
                              offerParts: [
                                {
                                  paragraph: queries.offerPart[0],
                                  code: codes?.code1,
                                  type: 'landing',
                                },
                                {
                                  paragraph: queries.offerPart[1],
                                  code: codes?.code2,
                                  type: 'landing',
                                },
                                {
                                  paragraph: queries.offerPart[2],
                                  code: codes?.code3,
                                  type: 'landing',
                                },
                                {
                                  code: getPhrase('Get codes'),
                                  href: links[0],
                                  type: 'newsletter',
                                },
                                type === 'newsletter'
                                  ? `{
                                  paragraph: queries.offerPart[3],
                                  class: "newsletterBottom35px",
                                }`
                                  : ``,

                                {
                                  paragraph: getPhrase('Choose from:'),
                                },
                              ],
                            })
                          : ''
                      }

                      ${Space()}
                  </td> 
              </tr>
              
              <tr>
                <td style="background-color: 
                ${freebies.options.background || background}; color: ${freebies.options?.color || '#000'};">
                  ${FreebiesGenerator({
                    background,
                    freebies: freebies.items || [],
                    getProductById,
                    color: freebies.options.color,
                    intro,
                    selectCampaign: selectCampaign,
                  })}
                  </td>
              </tr>
              <tr>
                <td style="background-color: 
                ${freebies.options.background || background}; color: ${freebies.options?.color || '#000'};">
                  ${FreebiesGenerator({
                    background,
                    freebies: freebies.items2 || [],
                    getProductById,
                    color: freebies.options.color,
                    intro,
                    selectCampaign: selectCampaign,
                  })}
                  </td>
              </tr>
              <tr>
                <td>
              ${Space({ className: 'newsletterBottom80px' })}
              </td>
              </tr>
              <tr>
                        <td style="background-color: #750000;" class="newsletterContainer">
                          ${
                            categories[0].type === 'tilesWithoutProducts'
                              ? FreeCreate2Columns_Grid({
                                  shuffle: false,
                                  iter: categories,
                                  left: (categories) => `
                            <td width="50%" valign="top">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                  <tr>
                                      <td style="padding-right:6px">
                                        <a href="${getCategoryLink(categories.href)}">
                                            <img alt="${getCategoryTitle(categories.name)}" src="${
                                    categories.src.src
                                  }" style="width:100%; max-width: 100%; display:block;" loading="lazy">
                                        </a>
                                      </td>
                                  </tr>
                                </table>
                            </td>
                            `,
                                  right: (categories) => `
                            <td width="50%" valign="top">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="padding-left:6px">
                                          <a href="${getCategoryLink(categories.href)}">
                                              <img alt="${getCategoryTitle(categories.name)}" src="${
                                    categories.src.src
                                  }" style="width:100%; max-width: 100%; display:block;" loading="lazy">
                                          </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            `,
                                  pb: 12,
                                })
                              : ''
                          }
                        </td>
                      </tr>
              <tr>
                  <td style="background-color: ${freebies.options.background || background}; color: ${
                      freebies.options?.color || '#000'
                    };">
                    ${
                      intro
                        ? Space({ className: 'newsletterBottom60px' })
                        : Space({ className: 'newsletterBottom35px' })
                    }
                  </td>
              </tr>
                  
                ${
                  !intro
                    ? `<tr>
                        <td class="newsletterContainer" align="center">
                          <a href=${add_utm(shop.origin)} style="color: #000000; text-decoration: underline;">
                            <span class="newsletterCta">${getPhrase('Shop all categories')}</span>
                          </a>
                          ${Space({ className: 'newsletterBottom35px' })}
                        </td>
                      </tr>`
                    : ''
                }

              <tr>
                  ${
                    intro
                      ? `<td style="background-color: ${intro.background || background};">
                      ${Space()}
                    </td>`
                      : ''
                  }
              </tr>`
                  : ''
              }

              ${
                intro && intro.type != 'paragraph'
                  ? `<tr>
                      <td class="newsletterContainer" style="background-color: ${intro.background || background};">
                          ${Intro({
                            introLine: under_intro_line,
                            data: queries.intro,
                            color: intro?.color,
                            add_utm: add_utm,
                            selectCampaign: selectCampaign,

                            type: categories.some(
                              (cat) =>
                                (cat.products && cat.products.length > 0) ||
                                (cat.productImg && cat.productImg.length > 0)
                            )
                              ? undefined
                              : 'paragraph',
                            align: categories.some(
                              (cat) =>
                                (cat.products && cat.products.length > 0) ||
                                (cat.productImg && cat.productImg.length > 0)
                            )
                              ? undefined
                              : 'center',
                            title: {
                              className: 'newsletterIntroTitle',
                            },
                          })}
                      </td>
                    </tr>
                    `
                  : ''
              }

              
              
          <tbody>
      </table>
      
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
      <tbody>
        <tr>
            <td >
                ${Line()}
            </td>
        </tr>
        <tr>
            <td class="newsletterBottom35px" >
            </td>
        </tr>
        <tr>
            <td align="left" class="newsletterBottom35px">
                <span class="newsletterFooterTitle">${getPhrase('Shop limited-time deals')}</span>
            </td>
        </tr>
        <tr>
            <td align="left" class="newsletterBottom20px">
                <a href=${links.Banner_1}>
                    <img alt="Soon Ending Banner 1" loading="lazy" src=${
                      links.Banner_1_Image
                    } style="display: block;" width="100%">
                </a>
            </td>
        </tr>
        <tr>
            <td align="left" class="newsletterBottom35px">
                <a href=${links.Banner_2}>
                    <img alt="Soon Ending Banner 2" loading="lazy" src=${
                      links.Banner_2_Image
                    } style="display: block;" width="100%">
                </a>
            </td>
        </tr>
      </tbody>
  </table>
      ${Footer(
        {
          id,
          assembly: {
            src: ['AT', 'PL', 'FR', 'UK'].includes(country) ? getFooter('Delivery src') : getFooter('Asembly src'),
            href: getFooter('Asembly href'),
            exclude: ['CHIT'].includes(country),
          },
          workBanner: {
            src: getFooter('Job src'),
            href: getFooter('Job href'),
            exclude: !['PL'].includes(country),
          },
          thousandsMore: {
            title: getFooter('Title'),
            firstCategory: {
              src: getFooter('Category src 1'),
              href: getCategoryLink('https://www.beliani.co.uk/sofas/all+products'),
              name: getCategoryTitle('Sofas'), //href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter('Category src 2'),
              href: getCategoryLink('https://www.beliani.co.uk/beds/all+products'),
              name: getCategoryTitle('Beds'), //href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter('Category src 3'),
              href: getCategoryLink('https://www.beliani.co.uk/tables/coffee-tables'),
              name: getCategoryTitle('Coffee Tables'), //href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter('Category src 4'),
              href: getCategoryLink('https://www.beliani.co.uk/chairs/all+products'),
              name: getCategoryTitle('Chairs'), //href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter('Category src 5'),
              href: getCategoryLink('https://www.beliani.co.uk/armchairs/all+products'),
              name: getCategoryTitle('Armchairs'), //href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter('Category src 6'),
              href: getCategoryLink('https://www.beliani.co.uk/storage/sideboards'),
              name: getCategoryTitle('Storage'), //href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter('Category src 7'),
              href: getCategoryLink('https://www.beliani.co.uk/lighting/all+products'),
              name: getCategoryTitle('Lighting'), //href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter('Category src 8'),
              href: getCategoryLink('https://www.beliani.co.uk/rugs/all+products'),
              name: getCategoryTitle('Rugs'), //href: getFooter("Category href 8"),
            },
          },
          klarna: {
            src: getFooter('Klarna src'),
            href: getFooter('Klarna href'),
            //exclude: ["HU"].includes(country),
          },
          socials: {
            title: getFooter('Socials Title'),
            instagram: {
              src: getFooter('Instagram src'),
              href: getFooter('Instagram href'),
            },
            facebook: {
              src: getFooter('Facebook src'),
              href: getFooter('Facebook href'),
            },
            youtube: {
              src: getFooter('Youtube src'),
              href: getFooter('Youtube href'),
            },
            pinterest: {
              src: getFooter('Pinterest src'),
              href: getFooter('Pinterest href'),
            },
            Xsocial: {
              src: getFooter('X src'),
              href: getFooter('X href'),
            },
            Tiktok: {
              src: getFooter('Tiktok src'),
              href: getFooter('Tiktok href'),
            },
          },
          advantages: {
            firstAdvantage: {
              src: getFooter('Advantages src 1'),
              href: getFooter('Advantages href 1'),
            },
            secondAdvantage: {
              src: getFooter('Advantages src 2'),
              href: getFooter('Advantages href 2'),
            },
            thirdAdvantage: {
              src: getFooter('Advantages src 3'),
              href: getFooter('Advantages href 3'),
            },
            fourthAdvantage: {
              src: getFooter('Advantages src 4'),
              href: getFooter('Advantages href 4'),
            },
          },
          conditions: {
            conditionsTitle: getFooter('Conditions title'),
            conditionsText: queries.condition,
          },
          companyDetails: {
            title: getFooter('Company Details'),
            address: getFooter('Address'),
            mobileNumber: getFooter('Mobile number'),
            emailAddress: getFooter('Email address'),
            mailTo: getFooter('Mail to'),
            email: getFooter('Email'),
            commercialRegister: getFooter('Commercial register'),
            vat: getFooter('VAT'),
          },
        },
        { type }
      )}
    `;
}
