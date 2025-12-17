import { Footer } from '../components/Footer.js';
import { Header } from '../components/Header.js';
import { Space } from '../components/Space.js';
import { SoonEndingBanner } from '../components/SoonEndingBanner.js';
import { Intro } from '../../components/components/Intro.js';
import { Timer } from '../components/Timer.js';
import { TopImageTitle } from '../components/TopImageTitle.js';
import { ImageWithLink } from '../components/ImageWithLink.js';
import { Line } from '../../components/components/Line.js';
import { Categories } from '../components/Categories.js';
import { OfferPartCode } from '../components/OfferPartCode.js';
import { getState } from '@/main/state/appState.js';

const Friday = async ({
  links,
  queries,
  shop,
  country,
  type,
  id,
  categories,
  background,
  color,
  titlesSource = 'translations',

  // campaign elements
  Inside,
  OfferPart,
  timer,
  TopImageTitle_data,

  // functions passed:
  getHeader,
  getFooter,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getProductById,
  add_utm,
}) => {
  const selectCampaign = getState('selectedCampaign');

  // prettier-ignore
  const HeaderElement = Header({ getHeader, country, background, type, id });
  // prettier-ignore
  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id });

  const seeMore = getPhrase('See more');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');
  const shopNow = getPhrase('Shop now');

  const TopImageTitleElement =
    // are both href and src available?
    links?.TopImageTitle_href && links?.TopImageTitle_src
      ? TopImageTitle({
          href: links.TopImageTitle_href,
          src: links.TopImageTitle_src,
          title1: queries.TopImageTitle[0] || 'Translation not found',
          // title1: 'Translation not found',
          title2: queries.TopImageTitle[1] || 'Translation not found',
          // title2: 'Translation not found',
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
        })
      : '';

  console.log('timer', queries);
  const TimerElement =
    Inside && Inside.type === 'timer'
      ? Timer({
          title: queries.timer[0] || 'Translation not found',
          // title: 'Free mirrors',
          subtitle: queries.timer[1] || 'Translation not found',
          // subtitle: 'deal ends in:',
          href: links.Timer_href,
          src: timer.image[country],
          color: Inside.color,
          background: Inside.backgroundColor,
          freebies: timer.freebies,
          ctaText: shopNow,
        })
      : '';

  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      products: await Promise.all(category.products.map((p) => getProductById(p.id, p.src))),
    }))
  );

  const CategoriesElement = categories
    ? await Categories({
        getPhrase: getPhrase,
        getCategoryLink: getCategoryLink,
        getCategoryTitle: getCategoryTitle,
        categories:
          categoriesWithProducts.length > 0
            ? categoriesWithProducts.map((category, idx) => {
                const href = category.href ? getCategoryLink(category.href) : category.href;
                // const name = getCategoryTitle ? getCategoryTitle(category.name) : category.name;
                const name =
                  titlesSource === 'queries'
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
            : categories.map((category) => {
                const href = category.href ? getCategoryLink(category.href) : category.href;
                const name =
                  titlesSource === 'queries'
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
        queries,
        add_utm,
      })
    : '';

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; background-color: ${background}; color: #000;" id="newsletter">
      ${TopImageTitleElement}

      ${TopImageElement}

      ${OfferPartElement}

      ${TimerElement}

      ${CategoriesElement}
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

export { Friday };
