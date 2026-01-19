import { Footer } from '@/components/footer.js';
import FreebiesGenerator from '@/components/FreebiesGenerator.js';
import { Header } from '@/components/header.js';
import { getState } from '@/main/state/appState';
import { Category } from '@/templates/AlexSrc/components/category.js';
import { Intro } from '@/templates/AlexSrc/components/Intro.js';
import { Line, ImageWithLink, Space, OfferPartCodes, TopImageTitle } from '@/components/index.js';
import { OfferPartCode } from '@/components/OfferPartCode.js';
import { getCodes } from '@/utils/getCodes.js';
import { Create2Columns_Grid } from '@/components/index.js';

/**
 * Funkcja generująca sekcje kategorii dla newslettera/landing page
 * Kolejność parametrów zgodna z wymaganiami
 */
function generateCategoriesSection(
  categories,
  queries,
  background,
  add_utm,
  white_line,
  full_img_width,
  getCategoryTitle,
  getProductById,
  getPhrase,
  getCategoryLink
) {
  let categoriesHTML = '';
  const selectCampaign = getState('selectedCampaign');
  // Sprawdź czy tablica categories istnieje i ma elementy
  if (!categories || !categories.length) {
    return categoriesHTML;
  }

  // Sprawdź czy mamy tablicę queries.filters i określ jej długość
  const filtersLength = queries?.filters?.length || 0;
  let usedFiltersCount = 0; // Licznik użytych filtrów

  // Iteruj przez kategorie i generuj odpowiednie sekcje
  categories.forEach((category, index) => {
    //padding under inro, where first category title
    categoriesHTML += `
      <tr>
        <td style="background-color: ${category?.background || background};">
        ${Space({ className: 'newsletterBottom35px' })}
        </td>
      </tr>
    `;

    // Określ właściwy href na podstawie walidacji
    let categoryHref;

    // Sprawdź czy kategoria ma własny href
    if (category.href && category.href !== '') {
      // Jeśli kategoria ma już określony href, użyj go
      try {
        if (typeof getCategoryLink === 'function') {
          categoryHref = getCategoryLink(category.href);
        } else {
          categoryHref = category.href;
        }
      } catch (e) {
        // Jeśli getCategoryLink nie działa, użyj oryginalnego href
        categoryHref = category.href;
      }
    } else if (categories.href) {
      // Użyj ogólnego href dla wszystkich kategorii jeśli jest dostępny
      try {
        if (typeof getCategoryLink === 'function') {
          categoryHref = getCategoryLink(categories.href);
        } else {
          categoryHref = categories.href;
        }
      } catch (e) {
        // Jeśli getCategoryLink nie działa, użyj oryginalnego href
        categoryHref = categories.href;
      }
    } else if (usedFiltersCount < filtersLength) {
      // Jeśli href jest pusty i mamy dostępne filtry, użyj kolejnego filtra
      categoryHref = add_utm(queries.filters[usedFiltersCount]);
      usedFiltersCount++; // Zwiększ licznik użytych filtrów
    } else {
      // W przeciwnym razie użyj pustego stringa
      categoryHref = '';
    }

    // Przygotuj bezpieczne wywołanie getPhrase
    const safeGetPhrase = (text) => {
      try {
        if (typeof getPhrase === 'function') {
          return getPhrase(text);
        }
        return text;
      } catch (e) {
        return text;
      }
    };

    // Dodaj sekcję kategorii
    categoriesHTML += `
      <tr>
        <td style="background-color: ${category?.background || background}; color: ${category?.color || '#000000'}">
          ${Category({
            href: categoryHref,
            name:
              queries?.categories && queries.categories[index]
                ? queries.categories[index]
                : getCategoryTitle(category.name || ''),
            src: typeof category.src === 'object' && category.src.value ? category.src.value : category.src,
            cta: safeGetPhrase('Shop now'),
            color: category?.color,
            type: 'three_product',
            // img_class: 'newsletterContainer',
            img_class: full_img_width === false ? 'newsletterContainer' : '',
            products: category.products
              ? category.products.map((item) => getProductById(item.id, item.src, item.name))
              : [],
            // Dodaj dodatkowe parametry dla różnych typów
            idx: index,
            len: categories.length - 1, // Ostatni element
            align: 'left', // Ustawione na "left" zamiast "center"
            line:
              white_line === true || white_line === 'true'
                ? 'https://pictureserver.net/static/2024/white_line.jpg'
                : 'https://beliani.info/newsletter/2022/line.jpg',

            selectCampaign: selectCampaign,
            padding: true,
            categoryIntro: queries?.categoryIntro?.[index] || '',
          })}
        </td>
      </tr>
    `;
  });

  return categoriesHTML;
}

export async function ThreeProductCategory({
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
  tit,
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
  TopImageTitle_data,
}) {
  const codes = getCodes(queries);
  console.log('type', type);
  const selectCampaign = getState('selectedCampaign');
  const colorLine = white_line
    ? 'https://pictureserver.net/static/2024/white_line.jpg'
    : 'https://beliani.info/newsletter/2022/line.jpg';

  const categoriesSectionHTML = generateCategoriesSection(
    categories,
    queries,
    background,
    add_utm,
    white_line,
    full_img_width,
    getCategoryTitle,
    getProductById,
    getPhrase,
    getCategoryLink
  );

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
                    type === 'newsletter' || !queries.tit
                      ? ImageWithLink({
                          href: links.TopImageTitle_href,
                          src: links.TopImageTitle_src,
                          alt: 'Top image title',
                        })
                      : !single_image
                      ? TopImageTitle({
                          href: links.TopImageTitle_href,
                          title1: queries.tit[0],
                          title2: queries.tit[1],
                          color: TopImageTitle_data?.color || '#000',
                          type: TopImageTitle_data?.type || 'standard',
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

              <tr>
                  <td style="background-color: ${background};">
                    ${Space()}
                  </td>
                </tr>

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

                            type: 'paragraph',
                            align: 'center',
                            title: {
                              className: 'newsletterIntroTitle',
                            },
                          })}
                      </td>
                    </tr>
                    `
                  : ''
              }

              <!-- Wstawienie wygenerowanych dynamicznie sekcji kategorii -->
              ${categoriesSectionHTML}
          <tbody>
      </table>
      

      ${
        (type === 'landing' && soon_banners) || type === 'newsletter'
          ? `<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
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
        </table>`
          : ''
      }

    
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
