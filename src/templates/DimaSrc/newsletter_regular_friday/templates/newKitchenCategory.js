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
import { getCategoryName, getHrefWithOverride } from '../utils/categories';
import { getProductHrefWithOverride } from '../utils/products';
import { newKitchenGrid } from '../category/newKitchenGrind';
import { renderCategory } from '../components/category/renderCategory';
import { TopImageWithTitle } from '../components/TopImageWithTitle';

const whiteLineSrc = 'https://pictureserver.net/static/2026/footer/white_line.jpg';
const blackLineSrc = 'https://pictureserver.net/static/2026/footer/line.jpg';

const NewKitchenCategory = async ({
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

  lineType = 'black' 
}) => {
  const shopNowPhrase = getPhrase('Shop now');

  const HeaderElement = Header({ getHeader, country, background, type: 'landing' });
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');

  // Hero

  const TopImageWithTopImageTitleElement = links?.TopImageTitle_href && links?.TopImageTitle_src && links?.TopImage_href && links?.TopImage_lp_src
    ? TopImageWithTitle({
      href: links.TopImage_href,
      imgSrc: links.TopImage_lp_src,
      title1: queries.TopImageTitle[0] || 'Translation not found',
      title2: queries.TopImageTitle[1] || 'Translation not found',
      title3: queries.TopImageTitle[2] || null,
      type: TopImageTitle_data.type,
      color: TopImageTitle_data.color,
      backgroundColor: TopImageTitle_data.backgroundColor,
      className: TopImageTitle_data.className,
    })
    : ''

  const TopImageTitleElement = links?.TopImageTitle_href && links?.TopImageTitle_src
    ? TopImageTitle({
      href: links.TopImageTitle_href,
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

  const TopImageElement = links?.TopImage_href && links?.TopImage_src
    ? ImageWithLink({
      href: links.TopImage_href,
      src: links.TopImage_lp_src,
      insideTr: true,
      alt: 'Top Image',
    })
    : ''

    let IntroElement = '';

    if (intro && intro.type === 'paragraph') {
      IntroElement = `
        ${Intro({
          text: intro.text || queries.intro || 'Translation not found',
          paragraphAlign: intro.alignment,
          color: intro.color,
          spaceTop: intro.spaceTop || 'newsletterBottom35px',
          spaceBottom: intro.spaceBottom || 'newsletterBottom35px',
          backgroundColor: intro.backgroundColor,
        })}
    
        ${intro.cta ? `
          ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore, backgroundColor: intro.backgroundColor }) : ''}
          
          ${CTA({
            href: intro.cta.hrefSource === 'queries'
              ? add_utm(queries.introCTAhref)
              : links.Intro_cta_href
                ? getCategoryLink(links.Intro_cta_href)
                : getCategoryLink(categories[0]?.href),
            text: intro.cta.overrides?.[country] || queries.introCTA || shopNowPhrase,
            background: intro.backgroundColor,
            color: intro.color,
            align: 'center',
            insideTr: true,
          })}
    
          ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter, backgroundColor: intro.backgroundColor }) : ''}
        ` : ''}
    
        ${intro.line?.show 
          ? `<tr><td class="newsletterContainer"'>${Line({
            insideTr: false,
            src: lineType === 'white' ? whiteLineSrc : blackLineSrc,
            tableContainer: true,
          })}</td></tr>`
          : ''
        }
    
        ${intro.additionalSpace ? Space({ insideTr: true, className: intro.additionalSpace, backgroundColor: intro.backgroundColor }) : ''}
      `;
    }

  // Fetch products for all categories
  const categoriesWithProducts = await Promise.all(
    categories.map(async (cat) => ({
      ...cat,
      products: cat.products
        ? await Promise.all(cat.products.map((p) => getProductById(p.id, p.src)))
        : [],
    }))
  );

  let CategoriesHTML = '';

  for (let i = 0; i < categoriesWithProducts.length; i++) {
    const category = categoriesWithProducts[i];

    if (category.view === 'newsletterOnly') continue;

    CategoriesHTML += await renderCategory(
      category,
      i,
      categoriesWithProducts.length,
      queries,
      getPhrase,
      getCategoryLink,
      getCategoryTitle,
      add_utm,
      categories_line === 'black' ? 'black' : 'white',
      country,
      type
    );
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

    const conditionsTitle = getFooter('Conditions title')
    const conditionsText = 
      queries.condition ||
      'all items are subject to availability. All prices are subject to change without notification'

  return `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 1056px; background-color: ${background};" id="newsletter">
   ${TopImageWithTopImageTitleElement}
      ${IntroElement}

      ${CategoriesHTML}
    </table>

         <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" width="1056" style="max-width: 1056px; width: 100%" id="newsletter">
             <tbody>
                 <tr>
                     <td>
                     ${Line({
                      insideTr: false,
                      src: lineType === 'white' ? whiteLineSrc : blackLineSrc,
                      tableContainer: true,
                    })}
                     </td>
                 </tr>
                 <tr>
                     <td class="newsletterTopBottomContainer" align="left">
                         <span class="newsletterConditions" style="color: #000000;">${conditionsTitle} ${
           conditionsText.length === 5
             ? conditionsText[4] + ' ' + conditionsText[1]
             : conditionsText.length === 4
             ? conditionsText[3] + ' ' + conditionsText[1]
             : conditionsText.length === 3
             ? conditionsText[0] + ' ' + conditionsText[1]
             : conditionsText.length === 2
             ? conditionsText[0]
             : conditionsText[0]
         }</span>
                     </td>
                 </tr>
             </tbody>
         </table>
  `;
};

export { NewKitchenCategory };