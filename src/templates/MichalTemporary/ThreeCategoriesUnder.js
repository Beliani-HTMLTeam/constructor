import { Header } from './Header.js';
import { Footer } from './Footer.js';

import {
  ImageWithLink,
  CTA,
  Intro,
  Line,
  Timer,
  Space,
  TopImageTitle,
  Category,
} from './components/index.js';

import { getTrackingUrl } from '@utils/getTrackingUrl.js';

export async function ThreeCategoriesUnder({
  TopImageTitle_data,
  intro,
  timer,
  links,
  utm,
  getProductById,
  getImageBySlug,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  showPrices,
  ctaComponent,
  shop,
  country,
  type,
  categories,
  freebies,
  color,
  background,
}) {
  const explore = {
    CHDE: "https://www.beliani.ch/content/weihnachtsgeschenke-ratgeber/?utm_source=newsletter&utm_medium=email&utm_campaign=38984",			
    CHFR: "https://www.beliani.ch/content/guide-des-cadeaux-de-noel/?utm_source=newsletter&utm_medium=email&utm_campaign=38985",			
    AT: "https://www.beliani.at/content/weihnachtsgeschenke-ratgeber/?utm_source=newsletter&utm_medium=email&utm_campaign=38986",			
    BENL: "https://www.beliani.be/content/kerstcadeaugids/?utm_source=newsletter&utm_medium=email&utm_campaign=38987",			
    BEFR: "https://www.beliani.be/content/guide-des-cadeaux-de-noel/?utm_source=newsletter&utm_medium=email&utm_campaign=38988",			
    CZ: "https://www.beliani.cz/content/pruvodce-vanocnimi-darky/?utm_source=newsletter&utm_medium=email&utm_campaign=38989",			
    DE: "https://www.beliani.de/content/weihnachtsgeschenke-ratgeber/?utm_source=newsletter&utm_medium=email&utm_campaign=38990",			
    DK: "https://www.beliani.dk/content/din-julegave-guide/?utm_source=newsletter&utm_medium=email&utm_campaign=38991",			
    FI: "https://www.beliani.fi/content/joulun-lahjaopas/?utm_source=newsletter&utm_medium=email&utm_campaign=38992",			
    FR: "https://www.beliani.fr/content/guide-des-cadeaux-de-noel/?utm_source=newsletter&utm_medium=email&utm_campaign=38993",			
    HU: "https://www.beliani.hu/content/karacsonyi-ajandek-kalauz/?utm_source=newsletter&utm_medium=email&utm_campaign=38994",			
    IT: "https://www.beliani.it/content/guida-ai-regali-di-natale/?utm_source=newsletter&utm_medium=email&utm_campaign=38995",			
    NL: "https://www.beliani.nl/content/kerstcadeaugids/?utm_source=newsletter&utm_medium=email&utm_campaign=38996",			
    NO: "https://www.beliani.no/content/julegave-guide/?utm_source=newsletter&utm_medium=email&utm_campaign=38997",			
    PL: "https://www.beliani.pl/content/swiateczny-poradnik-prezentowy/?utm_source=newsletter&utm_medium=email&utm_campaign=38998",			
    PT: "https://www.beliani.pt/content/guia-de-presentes-para-o-natal/?utm_source=newsletter&utm_medium=email&utm_campaign=38999",			
    RO: "https://www.beliani.ro/content/ghid-cadouri-craciun/?utm_source=newsletter&utm_medium=email&utm_campaign=39000",			
    SE: "https://www.beliani.se/content/julklappsguide/?utm_source=newsletter&utm_medium=email&utm_campaign=39001",			
    SK: "https://www.beliani.sk/content/sprievodca-vianocnymi-darcekmi/?utm_source=newsletter&utm_medium=email&utm_campaign=39002",			
    ES: "https://www.beliani.es/content/guia-de-regalos-de-navidad/?utm_source=newsletter&utm_medium=email&utm_campaign=39003",			
    UK: "https://www.beliani.co.uk/content/christmas-gift-guide/?utm_source=newsletter&utm_medium=email&utm_campaign=39004",			
  };
  
  // prettier-ignore
  const HeaderElement = Header({ getHeader, country, background, type, id });
  // prettier-ignore
  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id });

  const nslt_styles = `background-color: ${background}; color: ${color}; max-width: 650px; width: 100%;`;

  const tit_data = {
    ...TopImageTitle_data,
    href: links['TopImageTitle_href'],
    src: links['TopImageTitle_src'],
    title1: queries['TopImageTitle'][0],
    title2: queries['TopImageTitle'][1],
  };

  const topImageTitle = TopImageTitle({ ...tit_data, renderType: type });

  const topImage = ImageWithLink({
    href: links['TopImageTitle_href'],
    src: links['TopImage'],
    insideRow: true,
  });

  const timerElement = timer
    ? Timer({
        title: queries['Timer'][0] ?? 'timer title not found',
        subtitle: queries['Timer'][1] ?? 'timer subtitle not found',
        href: links['Timer'],
        gif: timer.gif[country],
        image: getImageBySlug(timer.image),
        background: timer.background,
        color: timer.color,
        align: timer.align,
        cta: getPhrase('Shop now'),
      })
    : '';

  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      products: await Promise.all(category.products.map((p) => getProductById(p.id, p.src))),
    }))
  );

  return `
		${HeaderElement}

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
    ${topImageTitle}
				<tr>
					<td align="center" >
						<a href="${links['TopImageTitle_href']}">
							<img src="${
                links['TopImage']
              }" alt="Top Image" style="vertical-align: middle; max-width: 100%;" loading="lazy">
						</a>
					</td>
				</tr>
        <tr>
          <td class="newsletterBottom35px" style="background-color: ${background}">
          </td>
        </tr>
        ${
          intro
            ? `
              <tr>
                <td>	
                  ${Intro({
                    paragraph: queries['intro'],
                    color: intro.color ?? color,
                    background: intro.background ?? background,
                    align: intro.align ?? 'center',
                  })}
                </td>
              </tr>
              
              ${
                !intro.hideCTA
                  ? `
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" align="center">
                    ${CTA({
                      align: 'center',
                      spaceAfter: { class: intro.ctaSpace ?? 'newsletterBottom35px' },
                      text: queries['Explore'][0],
                      href: explore[country],
                    })}
                  </table>
                </td>
              </tr>`
                  : ``
              }
            `
            : ``
        }
        <tr>
          <td class="newsletterBottom35px" style="background-color: ${background}">
          </td>
        </tr>
        <tr>
          <td>
            <table cellspacing="0" cellpadding="0" style="width: 100%; ">
              <tbody>
                <tr>
                  <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                      <a href="${explore[country]}" style="color: #ffffff; text-decoration: underline;">
                          <span class="newsletterCta">${queries['explore'][0]}</span>
                      </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom80px" style="background-color: ${background}">
          </td>
        </tr>
        ${categoriesWithProducts
          .map((category, index) => {
            const prod = category.products;
            const cat_styles = `background-color: ${category.background}; color: ${category.color}; max-width: 650px; width: 100%;`;
    
            return `
            <tr>
              <td align="center">
              <table cellspacing="0" cellpadding="0" border="0" align="center" style="${cat_styles}">
                ${Category({
                  links: links,
                  queries: queries,
                  name: category?.name,
                  href: category.href
                    ? getCategoryLink(category.href)
                    : queries.categoryLinks
                    ? queries.categoryLinks[index]
                      ? `${queries.categoryLinks[index]}${utm}`
                      : undefined
                    : undefined,
                  src: category.src,
                  products: prod,
                  showParagraph: category.showParagraph,
                  title: category.title,
                  background: category.background,
                  color: category.color,
                  productsAlignment: category.productsAlignment,
                  len: categoriesWithProducts.length,
                  idx: index,
                  showRedLine: category.showRedLine,
                  showWhiteLine: category.showWhiteLine,
                  ctaElement: category.ctaElement,
                  showPrices: category.showPrices,
                  type: category.type,
                  getPhrase: getPhrase,
                  utm: utm,
                })}
                </table>
              </td>
            </tr>
            `;
          })
          .join('')}
          </table>
          
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; width: 100%; color: #000000; background-color:#ffffff;" id="newsletter">
      <tbody>
        <tr>
          <td>${Line()}</td>
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
					<td align="left" style="line-height: 0; font-size: 0;">
						<a href=${links['Banner_1']}>
							<img loading="lazy" src=${
                links['Banner_1_Image']
              } style="display: block; width: 100%; max-width: 100%; border: 0;" alt="Soon ending campaign 1">
						</a>
					</td>
				</tr>

				<tr>
					<td class="newsletterBottom20px">
					</td>
				</tr>

				<tr>
					<td align="left" class="newsletterBottom35px" style="line-height: 0; font-size: 0;">
						<a href=${links['Banner_2']}>
							<img loading="lazy" src=${
                links['Banner_2_Image']
              } style="display: block; width: 100%; max-width: 100%; border: 0;" alt="Soon ending campaign 2">
						</a>
					</td>
				</tr>

			</tbody>
		</table>
    
    ${FooterElement}

	`;
}
