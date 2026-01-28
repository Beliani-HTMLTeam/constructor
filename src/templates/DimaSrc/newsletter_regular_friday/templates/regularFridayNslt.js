import { getState } from '@/main/state/appState';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TopImageTitle } from '../components/TopImageTitle';
import { ImageWithLink } from '../components/ImageWithLink';
import { OfferPartCode } from '../components/OfferPartCode';
import { Timer } from '../components/Timer';
import { Categories } from '../components/Categories';
import { Line } from '../../components/components/Line';
import { Space } from '../components/Space';
import { SoonEndingBanner } from '../components/SoonEndingBanner';
import { shopNow } from '../components/shopNow';
import { Create2Columns_Grid } from '../components/Create2Columns_Grid';
import { render as category2Columns_Grid } from '../category/category2Columns_Grid';
import { Intro } from '../components/Intro';
import { CTA } from '../components/CTA';

const RegularFridayNslt = async ({
  links,
  queries,
  shop,
  country,
  type,
  id,
  categories,
  categories_type,
  categories_line,
  background,
  color,

  // campaign elements
  Inside,
  OfferPart,
  intro,
  timer,
  TopImageTitle_data,
  shopCTA,

  // functions passed:
  getHeader,
  getFooter,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getProductById,
  add_utm,
}) => {
  // ogólne części kampanii
  const selectCampaign = getState('selectedCampaign');

  // prettier-ignore
  const HeaderElement = Header({ getHeader, country, background, type, id });
  // prettier-ignore
  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id });

  const seeMore = getPhrase('See more');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');
  const shopNowPhrase = getPhrase('Shop now');

  const TopImageTitleElement =
    // are both href and src available?
    links?.TopImageTitle_href && links?.TopImageTitle_src
      ? TopImageTitle({
          href: links.TopImageTitle_href,
          src: links.TopImageTitle_src,
          title1: queries.TopImageTitle[0] || 'Translation not found',
          title2: queries.TopImageTitle[1] || 'Translation not found',

          // placeholder
          // title1: 'Living-room trends 2026',
          // title2: 'Comfort and style for every home',
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

  console.log('links in template', links);
  const OfferPartElement =
    OfferPart && OfferPart.type === 'code'
      ? OfferPartCode({
          color: OfferPart.color,
          data: queries.offerPart,
          href: links.code_href,
          getPhrase,
          type,
          queries,
          selectCampaign: selectCampaign,
          add_utm,
          shop,
          backgroundColor: OfferPart.backgroundColor,
          paragraph1: 'Enjoy €100 cashback for your next order.',
          paragraph2:
            'Spend min. €300 on your purchase and we will give you a €100 cashback to use in your next order. Insert a code at the check out to receive a voucher with cashback.',
          paragraph3: 'This is a time limited offer. Valid until 04/01/2026',
          paragraphAlign: OfferPart.alignment,
          germanSeparatingLine: OfferPart.germanSeparatingLine,
        })
      : '';

  const IntroElement =
    intro && intro.type === 'paragraph'
      ? `
          ${Intro({
            text: queries.intro || 'Translation not found',
            paragraphAlign: intro.alignment,
            color: intro.color,
            spaceBottom: intro.spaceBottom || 'newsletterBottom35px'
          })}
          ${
            intro.cta
              ? `
              ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore }) : ''}
              ${CTA({
                href: links.Intro_cta_href ? add_utm(links.Intro_cta_href) : getCategoryLink(categories[0]?.href),
                text: shopNow,
                color: '#000000',
                align: 'center',
                insideTr: true,
              })}
              ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter }) : ''}
                `
              : ''
          }
              ${intro.additionalSpace ? Space({ insideTr: true, className: intro.additionalSpace }) : ''}
          `
      : '';

  const TimerElement =
    Inside && Inside.type === 'timer'
      ? Timer({
          title: Inside.isWithTitles ? queries.timer[0] || 'Translation not found' : '',
          // title: 'Free scatter cushions set',
          subtitle: Inside.isWithTitles ? queries.timer[1] || 'Translation not found' : '',
          // subtitle: 'deal ends in:',
          href: links.Timer_href,
          src: timer.image[country],
          color: Inside.color,
          background: Inside.backgroundColor,
          freebies: timer.freebies,
          isCtaVisible: timer.isCtaVisible,
          ctaText: shopNowPhrase,
          spaceAfter: Inside.spaceAfter,
        })
      : '';
  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => {
      if (category.type !== 'tilesWithoutProducts') {
        return {
          ...category,
          products: await Promise.all(category.products.map((p) => getProductById(p.id, p.src))),
        };
      }
      return { ...category };
    })
  );

  const CategoriesElement =
    categories && categories_type !== 'twoColumnsGrid'
      ? await Categories({
          getPhrase: getPhrase,
          getCategoryLink: getCategoryLink,
          getCategoryTitle: getCategoryTitle,
          categories:
            categoriesWithProducts.length > 0
              ? categoriesWithProducts.map((category, idx) => {
                  const href =
                    category.hrefSource && category.hrefSource === 'queries'
                      ? add_utm(queries.categoryLinks[idx])
                      : category.href
                      ? getCategoryLink(category.href)
                      : category.href;
                  const name =
                    category.title && category.title.source === 'queries'
                      ? queries.categories[idx]
                      : getCategoryTitle
                      ? getCategoryTitle(category.name)
                      : category.name;

                  return {
                    ...category,
                    href,
                    name,
                  };
                })
              : categories.map((category, idx) => {
                  const href =
                    category.hrefSource && category.hrefSource === 'queries'
                      ? add_utm(queries.categoryLinks[idx])
                      : category.href
                      ? getCategoryLink(category.href)
                      : category.href;
                  const name =
                    category.title.source === 'queries'
                      ? queries.categories[idx]
                      : getCategoryTitle
                      ? getCategoryTitle(category.name)
                      : category.name;

                  return {
                    ...category,
                    href,
                    name,
                  };
                }),
          categories_line,
          queries,
          add_utm,
        })
      : categories && categories_type === 'twoColumnsGrid'
      ? `

      <tr>
                <td style="background-color: ${background};" class="newsletterContainer">
                  ${Create2Columns_Grid({
                    shuffle: false,
                    iter: categories,
                    left: (categories) =>
                      category2Columns_Grid({
                        getCategoryLink,
                        getCategoryTitle,
                        categories,
                        paddingStyle: 'padding-right:6px',
                      }),
                    right: (categories) =>
                      category2Columns_Grid({
                        getCategoryLink,
                        getCategoryTitle,
                        categories,
                        paddingStyle: 'padding-left:6px',
                      }),
                  })}
                </td>
              </tr>
              `
      : '';

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; width: 100%; max-width: 650px; background-color: ${background}; color: #000;" id="newsletter">
      ${TopImageTitleElement}

      ${timer && timer.position === 'insideTopImageTitle' ? TimerElement : ''}

      ${TopImageElement}

      ${IntroElement}

      ${OfferPartElement}

      ${timer && timer.position === 'outsideTopImageTitle' ? TimerElement : ''}
      
      ${CategoriesElement}
              
      ${
        links['ShopCTA']
          ? shopNow({
              href: links['ShopCTA'],
              cta: queries['shopall'][0],
              textColor: shopCTA?.color || color,
              backgorund: shopCTA?.backgroundColor || background,
              space: shopCTA?.space || '35',
            })
          : ''
      }

      ${timer && timer.position === 'afterTilesCategories' ? TimerElement : ''}
    
    </table>


    <!-- 🎈 Soon Ending Banners -->
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
      ${Line({ insideTr: true })}
      
      ${Space({ className: 'newsletterBottom35px', insideTr: true })}

      <tr>
        <td align="left">
          <span class="newsletterFooterTitle">${shopLimitedTimeDeals}</span>
        </td>
      </tr>
      
      ${Space({ className: 'newsletterBottom35px', insideTr: true })}
      
      ${SoonEndingBanner({
        href: links.Banner_1,
        src: links.Banner_1_Image,
        orderingId: '1',
      })}

      ${Space({ className: 'newsletterBottom20px', insideTr: true })}

      ${SoonEndingBanner({
        href: links.Banner_2,
        src: links.Banner_2_Image,
        orderingId: '2',
      })}

      ${Space({ className: 'newsletterBottom35px', insideTr: true })}
    </table>
      
    ${FooterElement}
  `;
};

export { RegularFridayNslt };
