import { Footer } from './Footer.js';
import { Header } from './Header.js';
import { Space } from './components/Space.js';
import { SoonEndingBanner } from './components/SoonEndingBanner.js';
import { Intro } from './components/Intro.js';
import { Timer } from './components/Timer.js';
import { TopImageTitle } from './components/TopImageTitle.js';
import { ImageWithLink } from './components/ImageWithLink.js';
import { Line } from './components/Line.js';
import { Categories } from './components/Categories.js';
import { CTA } from './components/CTA.js';

const FridayLikeThursday = async ({
  links,
  queries,
  shop,
  country,
  type,
  id,
  categories,
  background,
  color,

  // campaign elements
  Inside,
  intro,
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
  console.log(categories);

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
          title1: queries.TopImageTitle[0] ?? 'Translation not found',
          title2: queries.TopImageTitle[1] ?? 'Translation not found',
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
      ? `
      ${Intro({
        text: queries.intro || 'Translation not found',
        paragraphAlign: intro.alignment })}
      ${
        intro.cta
          ? `
          ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore }) : ''}
          ${CTA({
            href: links.Intro_cta_href ? getCategoryLink(links.Intro_cta_href) : getCategoryLink(categories[0]?.href),
            text: shopNow,
            color: '#000000',
            align: 'center',
            insideTr: true,
          })}
          ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter }) : ''}
            `
          : ''
      }
      `
      : '';

  const TimerElement =
    Inside && Inside.type === 'timer'
      ? Timer({
          title: queries.timer[0] ?? 'Translation not found',
          subtitle: queries.timer[1] ?? 'Translation not found',
          href: links.Timer_href,
          src: timer.image[country],
          color: Inside.color,
          background: Inside.backgroundColor,
          freebies: timer.freebies,
          ctaText: shopNow,
        })
      : '';

  // be defensive: ensure `categories` is an array
  const safeCategories = Array.isArray(categories) ? categories : [];

  const categoriesWithProducts = await Promise.all(
    safeCategories.map(async (category) => {
      const productEntries = Array.isArray(category && category.products) ? category.products : [];
      const products = await Promise.all(
        productEntries.map(async (p) => {
          try {
            if (!p) return null;
            if (typeof getProductById === 'function') {
              const fetchedProduct = await getProductById(p.id, p.src);
              return fetchedProduct ? { ...p, ...fetchedProduct } : null;
            }
            return null;
          } catch (err) {
            console.error('getProductById error for', p, err);
            return null;
          }
        })
      );

      return {
        ...category,
        // filter out failed/undefined product lookups
        products: products.filter(Boolean),
      };
    })
  );

  // build categories for rendering safely; if there are no categories, skip rendering
  let CategoriesElement = '';
  if (safeCategories.length > 0) {
    const source = categoriesWithProducts.length > 0 ? categoriesWithProducts : safeCategories;
    const categoriesForRender = source.map((category, ind) => {
      const href =
        category && category.href && typeof getCategoryLink === 'function'
          ? getCategoryLink(category.href)
          : (category && category.href) || '';
      const name = queries?.categories
        ? queries.categories[ind]
        : typeof getCategoryTitle === 'function'
        ? getCategoryTitle(category && category.name) || (category && category.name) || ''
        : (category && category.name) || '';

      return {
        ...category,
        href,
        name,
      };
    });

    CategoriesElement = await Categories({
      getPhrase,
      getCategoryLink,
      getCategoryTitle,
      categories: categoriesForRender,
      queries,
      add_utm,
    });
  }

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
      ${TopImageTitleElement}

      ${TopImageElement}

      ${IntroElement}

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

export { FridayLikeThursday };
