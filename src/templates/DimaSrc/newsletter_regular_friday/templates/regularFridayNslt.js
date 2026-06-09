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
import FreebiesGenerator from '@/components/FreebiesGenerator';
import { category4Tiles_Grid } from '../category/grid4tiles';
import { VideoLPWithLink } from '../components/VideoLP';
import { OfferPartCodes } from '../components/OfferPartCodes';
import { FullWidthTiles } from '../category/fullWidthTiles';
import { IntroLiquidator } from '../components/IntroLiquidator';
import { liquidatorConditions } from '../category/liquidatorConditions';
import { liquidatorItems } from '../category/liquidatorItems';
import { liquidatorContact } from '../category/liquidatorContact';
import { FooterLiquidator } from '../components/Footer_Liquidator';
import { ImageWithoutLink } from '../components/ImageWithoutLink';
import { TopImageTitleWithoutLink } from '../components/TopImageTitleWithoutLink';

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
  freebies = null,

  // campaign elements
  Inside,
  OfferPart,
  intro,
  timer,
  TopImageTitle_data,
  shopCTA,
  soonEndingBanners = true,

  // functions passed:
  getHeader,
  getFooter,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getProductById,
  add_utm,
}) => {
  console.log('wszystko', TopImageTitle_data, type, queries);
  // ogólne części kampanii
  const selectCampaign = getState('selectedCampaign');

  // prettier-ignore
  const HeaderElement = Header({ getHeader, country, background, type, id });
  // prettier-ignore
  const FooterElement = categories_type === 'liquidator'
    ? FooterLiquidator({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id })
    : Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id });

  const seeMore = getPhrase('See more');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');
  const shopNowPhrase = getPhrase('Shop now');

  let TopImageTitleElement = ''

  if (categories_type === 'liquidator') {
    TopImageTitleElement = links?.TopImageTitle_src
      ? TopImageTitleWithoutLink({
        src: links.TopImageTitle_src,
        title1: queries.TopImageTitle[0] || 'Translation not found',
        title2: queries.TopImageTitle[1] || 'Translation not found',
        title3: queries.TopImageTitle[2] || null,
        color: TopImageTitle_data.color,
        backgroundColor: TopImageTitle_data.backgroundColor,
        type: TopImageTitle_data.type,
        renderType: type,
        className: TopImageTitle_data.className,
      })
      : ''
  }
  else {
    TopImageTitleElement = links?.TopImageTitle_href && links?.TopImageTitle_src
      ? TopImageTitle({
        href: links.TopImageTitle_href,
        src: links.TopImageTitle_src,
        title1: queries.TopImageTitle[0] || 'Translation not found',
        title2: queries.TopImageTitle[1] || 'Translation not found',
        title3: queries.TopImageTitle[2] || null,

        // placeholder
        // title1: 'Hurry!',
        // title2: 'Spring Sale ends Sunday',
        color: TopImageTitle_data.color,
        backgroundColor: TopImageTitle_data.backgroundColor,
        type: TopImageTitle_data.type,
        renderType: type,
        className: TopImageTitle_data.className,
      })
      : ''
  }

  let TopImageElement = ''

  if (categories_type === 'liquidator') {
    TopImageElement = links?.TopImage_src
      ? ImageWithoutLink({
        src: links.TopImage_src,
        insideTr: true,
        alt: 'Top Image',
      })
      : ''
  } else {
    TopImageElement = links?.TopImage_href && links?.TopImage_src
      ? ImageWithLink({
        href: links.TopImage_href,
        src: links.TopImage_src,
        insideTr: true,
        alt: 'Top Image',
      })
      : ''
  }

  if (type === 'landing' && links?.TopImageVideo_src && links?.TopImageVideo_href) {
    TopImageElement = VideoLPWithLink({
      href: links.TopImageVideo_href,
      src: links.TopImageVideo_src,
      alt: 'Landing Page Video',
      insideTr: true,
    });
  }

  console.log('links in template', links);

  let OfferPartElement = '';

  if (OfferPart && OfferPart.type === 'code') {
    OfferPartElement = OfferPartCode({
      isMonday: OfferPart.isMonday || false,
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
      spaceClass: OfferPart?.spaceClass,
      isSpaceBetweenAllParts: OfferPart?.isSpaceBetweenAllParts,
      spanStyle: OfferPart?.spanStyle,
      copyCodeColor: OfferPart?.copyCodeColor,
      copyCodeLabel: getPhrase('Copy code'),
    });
  } else if (OfferPart && OfferPart.type === 'codes') {
    OfferPartElement = `<tr>
            <td class="newsletterContainer" style="background-color: ${OfferPart.backgroundColor}">
              ${OfferPartCodes({
      color: OfferPart.color,
      data: queries['offerPart'],
      data2: queries['codes'],
      href: links.code_href,
      getPhrase,
      type,
      queries,
    })}
            </td>
          </tr>`;
  }

  const freebiesElement = freebies
    ? `
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
                  <td style="background-color: ${freebies.options.background || background
    }; color: ${freebies.options?.color || '#000'};">
                    ${Space({ className: `${freebies.options?.space || 'newsletterBottom35px'}` })}
                  </td>
              </tr>
            `
    : '';

  const IntroElement =
    intro && intro.type === 'paragraph'
      ? `
          ${Intro({
        text: intro.text || queries.intro || 'Translation not found',
        // text: queries.intro || 'Translation not found',
        paragraphAlign: intro.alignment,
        color: intro.color,
        spaceTop: intro.spaceTop || 'newsletterBottom35px',
        spaceBottom: intro.spaceBottom || 'newsletterBottom35px',
        backgroundColor: intro.backgroundColor,
      })}
          ${intro.cta
        ? `
              ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore, backgroundColor: intro.backgroundColor }) : ''}
              ${CTA({
          href:
            intro.cta.hrefSource === 'queries'
              ? add_utm(queries.introCTAhref)
              : links.Intro_cta_href
                ? getCategoryLink(links.Intro_cta_href)
                : getCategoryLink(categories[0]?.href),
          text: queries.introCTA || shopNowPhrase,
          // text: 'Lean more about outdoor trends',
          background: intro.backgroundColor,
          color: intro.color,
          align: 'center',
          insideTr: true,
        })}
              ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter, backgroundColor: intro.backgroundColor }) : ''}
                `
        : ''
      }
              ${intro.additionalSpace ? Space({ insideTr: true, className: intro.additionalSpace, backgroundColor: intro.backgroundColor }) : ''}
          `
      : intro && intro.type === 'liquidator' ? `
      ${IntroLiquidator({
        title: intro.title || queries.introTitle || 'Translation not found',
        text: intro.text || queries.introParagraph || 'Translation not found',
        // text: queries.intro || 'Translation not found',
        paragraphAlign: intro.alignment,
        titleColor: intro.titleColor,
        color: intro.color,
        spaceTop: intro.spaceTop || 'newsletterBottom35px',
        spaceBottom: intro.spaceBottom || 'newsletterBottom35px',
        backgroundColor: intro.backgroundColor,
        additionalClass: intro.additionalClass ? intro.additionalClass : null
      })}` : '';

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
        spaceWithoutCTA: Inside?.spaceWithoutCTA || 'newsletterBottom35px',
      })
      : '';
  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => {
      if (category.type !== 'tilesWithoutProducts' && category.type !== 'grid4tiles' && category.type !== 'liquidatorConditions' && categories_type !== 'liquidator') {
        return {
          ...category,
          products: await Promise.all(category.products.map((p) => getProductById(p.id, p.src))),
        };
      }
      return { ...category };
    })
  );

  let CategoriesElement = '';

  if (categories &&
    categories_type !== 'twoColumnsGrid' &&
    categories_type !== 'fullWidthTiles' &&
    categories_type !== 'liquidator') {
    CategoriesElement = await Categories({
      getPhrase: getPhrase,
      getCategoryLink: getCategoryLink,
      getCategoryTitle: getCategoryTitle,
      categories:
        categoriesWithProducts.length > 0
          ? categoriesWithProducts.map((category, idx) => {
            const href =
              category.hrefSource && category.hrefSource === 'queries'
                ? add_utm(queries.categoryLinks.length > 1 ? queries.categoryLinks[idx] : queries.categoryLinks[0])
                : category.href
                  ? getCategoryLink(category.hrefDACH ? category.hrefDACH : category.href)
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
                ? add_utm(queries.categoryLinks.length > 1 ? queries.categoryLinks[idx] : queries.categoryLinks[0])
                : category.href
                  ? getCategoryLink(category.hrefDACH ? category.hrefDACH : category.href)
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
    });
  } else if (categories && categories_type === 'twoColumnsGrid') {
    CategoriesElement = `

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
            `;
  } else if (categories && categories_type === 'fullWidthTiles') {
    CategoriesElement = `
    <tr>
              <td style="background-color: ${background};" class="newsletterContainer">
            ${FullWidthTiles({
      tiles: categories,
      getCategoryLink,
      getCategoryTitle,
    })}
            ${Space({ className: 'newsletterBottom80px' })}
              </td>
            </tr>
    `;
  } else if (categories && categories_type === 'liquidator') {

    CategoriesElement = categories
      .map(category => {
        if (category.type === 'liquidatorConditions') {
          return liquidatorConditions({
            category,
            background,
            color
          });
        }

        if (category.type === 'liquidatorItems') {
          return liquidatorItems({
            category,
            background,
            color,
            // insideContainer: true,   // you can enable/disable if needed
          });
        }

        if (category.type === 'liquidatorContact') {
          return liquidatorContact({
            category,
            buttonHref: category.buttonHref,
            buttonText: queries.CTA || 'Translation not found',
            background,
            color,
          })
        }

        // Fallback for unknown types
        return '';
      })
      .join('');
  }
  else {
    CategoriesElement = '';
  }

  let soonEndingBannersElement = '';

  soonEndingBannersElement = soonEndingBanners ?
    `
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
    ` : '';

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; color: #000; background-color: ${background};" id="newsletter">
      ${TopImageTitleElement}

      ${timer && timer.position === 'insideTopImageTitle' ? TimerElement : ''}

      ${TopImageElement}

      ${IntroElement}

      ${OfferPartElement}

      ${freebiesElement}

      ${timer && timer.position === 'outsideTopImageTitle' ? TimerElement : ''}
      
      ${CategoriesElement}
              
      ${links['ShopCTA']
      ? shopNow({
        href: links['ShopCTA'],
        cta: getPhrase('Shop All Categories'),
        textColor: shopCTA?.color || color,
        backgorund: shopCTA?.backgroundColor || background,
        space: shopCTA?.space || '35',
      })
      : ''
    }

      ${timer && timer.position === 'afterTilesCategories' ? TimerElement : ''}
    
    </table>


    ${soonEndingBannersElement}
      
    ${FooterElement}
  `;
};

export { RegularFridayNslt };
