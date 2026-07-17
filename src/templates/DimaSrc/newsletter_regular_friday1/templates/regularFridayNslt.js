import { getState } from '@/main/state/appState';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TopImageTitle } from '../components/TopImageTitle';
import { ImageWithLink } from '../components/ImageWithLink';
import { OfferPartCode } from '../components/OfferPartCode';
import { Categories } from '../components/Categories';
import { Line } from '../../components/components/Line';
import { Space } from '../components/Space';
import { SoonEndingBanner } from '../components/SoonEndingBanner';
import { shopNow } from '../components/shopNow';
import { Create2Columns_Grid } from '../components/Create2Columns_Grid';
import { render as category2Columns_Grid } from '../category/category2Columns_Grid';
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
import { getCategoryName, getHrefWithOverride } from '../utils/categories';
import { getProductHrefWithOverride } from '../utils/products';
import { SoonEndingBanners } from '../components/SoonEndingBanners';
import { CategoriesWrapper } from '../components/categories/index.js';
import { OfferPartWrapper } from '../components/offerpart';
import { FreebiesWrapper } from '../components/freebies';
import { IntroWrapper } from '../components/intro/index.js';
import { Timer } from '../components/timer/Timer.js';

const RegularFridayNslt1 = async ({
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
  intro: introData,
  timer: timerData,
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
  console.log("shop and country", shop, country, timerData)
  // ogólne części kampanii
  const selectCampaign = getState('selectedCampaign');

  // prettier-ignore
  const HeaderElement = Header({ getHeader, country, background, type, id });
  // prettier-ignore
  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id });

  const seeMore = getPhrase('See more');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');
  const shopNowPhrase = getPhrase('Shop now');

  const {
    TopImageTitle: [title1, title2, title3], intro: introQueries, offerPart, timer: timerQueries
  } = queries;

  const {
    TopImageTitle_href, TopImageTitle_src, TopImage_src, TopImage_href, Timer_href, Banner_1, Banner_1_Image, Banner_2, Banner_2_Image, code_href, ShopCTA
  } = links;

  const { color: TiT_color, backgroundColor: TiT_bg, type: TiT_type, className: TiT_className } = TopImageTitle_data

  let TopImageTitleElement = TopImageTitle({
    href: TopImageTitle_href,
    src: TopImageTitle_src,
    title1,
    title2,
    title3,
    color: TiT_color,
    backgroundColor: TiT_bg,
    type: TiT_type,
    renderType: type,
    className: TiT_className,
  })

  let TopImageElement = ImageWithLink({
    href: links.TopImage_href,
    src: links.TopImage_src,
    insideTr: true,
    alt: 'Top Image',
  })


  let TopImageVideoElement = (type === 'landing' && links?.TopImageVideo_src && links?.TopImageVideo_href) ? VideoLPWithLink({
    href: links.TopImageVideo_href,
    src: links.TopImageVideo_src,
    alt: 'Landing Page Video',
    insideTr: true,
  }) : '';


  const OfferPartElement = OfferPartWrapper({
    OfferPart,
    country,
    queries,
    links,
    getPhrase,
    type,
  });

  const FreebiesElement = await FreebiesWrapper({
    freebies,
    background,
    color,
    getProductById,
    selectCampaign,
    country,
  });

  const IntroElement = IntroWrapper({
    intro: introData,
    queries,
    links,
    categories,
    country,
    add_utm,
    getCategoryLink,
    shopNowPhrase,
  });

  const TimerElement =
    Inside && Inside.type === 'timer'
      ? await Timer({
        timer: timerData, // Pass the complete timer object
        type: type, // 'newsletter' or 'landing'
        country: country,
        title: timerData?.isWithTitles ? queries.timer?.[0] || '' : '',
        subtitle: timerData?.isWithTitles ? queries.timer?.[1] || '' : '',
        href: links.Timer_href || '#',
        ctaText: shopNowPhrase,
        spaceAfter: Inside?.spaceAfter,
        spaceWithoutCTA: Inside?.spaceWithoutCTA || 'newsletterBottom35px',
        containerId: `prolo-timer-${country?.toLowerCase() || 'default'}`,
        useDynamicLabels: false,
        shop: shop, 
      })
      : '';

  const CategoriesElement = await CategoriesWrapper({
    categories,
    categories_type,
    categories_line,
    country,
    queries,
    getPhrase,
    getCategoryLink,
    getCategoryTitle,
    getProductById,
    add_utm,
    background,
  });

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; color: #000; background-color: ${background};" id="newsletter">
      ${TopImageTitleElement}

      ${timerData && timerData.position === 'insideTopImageTitle' ? TimerElement : ''}

      ${TopImageElement}

      ${IntroElement}

      ${OfferPartElement}

      ${FreebiesElement}

      ${timerData && timerData.position === 'outsideTopImageTitle' ? TimerElement : ''}
      
      ${CategoriesElement}
              
      ${links['ShopCTA']
      ? shopNow({
        href: links['ShopCTA'],
        cta: getPhrase('Shop All Categories'),
        textColor: shopCTA?.color || color,
        background: shopCTA?.backgroundColor || background,
        space: shopCTA?.space || '35',
      })
      : ''
    }

      ${timerData && timerData.position === 'afterTilesCategories' ? TimerElement : ''}
    
    </table>


    ${soonEndingBanners ?
      SoonEndingBanners({ links, getPhrase }) : ''}
      
    ${FooterElement}
  `;
};

export { RegularFridayNslt1 };
