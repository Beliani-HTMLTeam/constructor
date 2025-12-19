import { Header } from './Header.js';
import { Footer } from './Footer.js';

import {
  ImageWithLink,
  CTA,
  Line,
  Timer,
  Space,
  TopImageTitle,
  Category,
  shopNow,
} from './components/index.js';

import { Intro } from './components/Intro.js';

import {
  Paragraph,
  Create2Columns_Grid,
} from './components/index.js';

import { getTrackingUrl } from '@utils/getTrackingUrl.js';

export async function Categories2Columns({
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

  const TopImageTitleElement =
    // are both href and src available?
    links?.TopImageTitle_href && links?.TopImageTitle_src
      ? TopImageTitle({
          href: links.TopImageTitle_href,
          src: links.TopImageTitle_src,
          title1: queries.TopImageTitle[0] || 'Translation not found',
          title2: queries.TopImageTitle[1] || 'Translation not found',
          color: TopImageTitle_data.color,
          background: TopImageTitle_data.background,
          type: TopImageTitle_data.type,
          renderType: type,
        })
      : '';

  const TopImageElement =
    // are both href and src available?
    links?.TopImage_href && links?.TopImage_src
      ? ImageWithLink({
          href: links.TopImage_href,
          src: links.TopImage_src,
          insideTr: true,
          alt: 'Top Image',
        })
      : '';

  const IntroElement =
  intro && intro.type === 'paragraph'
    ? Intro({ text: queries.intro || 'Translation not found', paragraphAlign: intro.alignment, paragraphColor: intro.color, })
    : '';

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

  return `
		${HeaderElement}

		<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
        ${TopImageTitleElement}
    
        ${TopImageElement}

        ${IntroElement}

        <tr>
          <td style="background-color: ${background}" class="newsletterContainer">
            ${Create2Columns_Grid({
              shuffle: false,
              iter: categories,
              left: (categories) => `
              <td width="50%" valign="top">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                        <td style="padding-right:4px">
                          <a href="${getCategoryLink(categories.href)}">
                              <img alt="${getCategoryTitle(categories.name)}" src="${
                                  categories.src
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
                          <td style="padding-left:4px">
                            <a href="${getCategoryLink(categories.href)}">
                                <img alt="${getCategoryTitle(categories.name)}" src="${
                                    categories.src
                                }" style="width:100%; max-width: 100%; display:block;" loading="lazy">
                            </a>
                          </td>
                      </tr>
                  </table>
              </td>
              `,
              })}
          </td>
        </tr>
        ${shopNow({
          href: links['ShopCTA'],
          cta: queries['shopall'][0],
          textColor: color,
          backgorund: background,
        })}
        <tr>
            ${Space({})}
        </tr>
    </table>
          
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; width: 100%; color: #000000; background-color:#ffffff;" id="newsletter">
      <tbody>
        <tr>
          <td>${Line()}</td>
        </tr>
				<tr>
          ${Space({})}
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
