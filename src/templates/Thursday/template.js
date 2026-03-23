import { Footer } from './Footer.js';
import { Header } from './Header.js';

// handlers:
import { TopImageTitleHandler } from './handlers/_TopImageTitle.js';
import { TopImageHandler } from './handlers/_TopImage.js';
import { IntroHandler } from './handlers/_Intro.js';
import { TimerHandler } from './handlers/_Timer.js';
import { CategoriesHandler } from './handlers/_Categories.js';
import { SoonEndingBannersHandler } from './handlers/_SoonEndingBanners.js';
import { getIntroCtaHref } from './helpers/getIntroCtaHref.js';

const Thursday = async ({
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
  // console.log(categories);

  const HeaderElement = Header({ getHeader, country, background, type, id });
  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id });

  const seeMore = getPhrase('See more');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');
  const shopNow = getPhrase('Shop now');

  const TopImageTitleElement = TopImageTitleHandler({ links, queries, TopImageTitle_data, type });
  const TopImageElement = TopImageHandler({ links });

  const introCta_href = getIntroCtaHref({
    links,
    queries,
    categories,
    add_utm,
    getCategoryLink,
  });

  const IntroElement = IntroHandler({ intro, queries, introCta_href, shopNow });
  const TimerElement = TimerHandler({ Inside, queries, links, timer, shopNow, country });
  const introPosition = intro?.position ?? 'afterTopImage';

  const safeCategories = Array.isArray(categories) ? categories : [];
  const freebiesIndex = safeCategories.findIndex((category) => String(category?.type).toLowerCase() === 'freebies');

  const categoriesBeforeIntro =
    introPosition === 'afterFreebies' && freebiesIndex >= 0
      ? safeCategories.slice(0, freebiesIndex + 1)
      : safeCategories;
  const categoriesAfterIntro =
    introPosition === 'afterFreebies' && freebiesIndex >= 0 ? safeCategories.slice(freebiesIndex + 1) : [];

  const CategoriesBeforeIntroElement = await CategoriesHandler({
    categories: categoriesBeforeIntro,
    getProductById,
    getCategoryLink,
    getCategoryTitle,
    queries,
    add_utm,
    links,
    type,
    country,
    getPhrase,
  });
  const CategoriesAfterIntroElement = await CategoriesHandler({
    categories: categoriesAfterIntro,
    getProductById,
    getCategoryLink,
    getCategoryTitle,
    queries,
    add_utm,
    links,
    type,
    country,
    getPhrase,
  });

  const IntroAfterTopImageElement = introPosition === 'afterFreebies' ? '' : IntroElement;
  const IntroAfterFreebiesElement = introPosition === 'afterFreebies' ? IntroElement : '';

  const timerPosition = Inside?.position ?? 'beforeCategories';
  const TimerBeforeCategories = timerPosition === 'beforeCategories' ? TimerElement : '';
  const TimerAfterCategories =
    timerPosition === 'afterCategories' || timerPosition === 'underCategories' ? TimerElement : '';

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
      ${TopImageTitleElement}

      ${TopImageElement}

      ${IntroAfterTopImageElement}

      ${TimerBeforeCategories}

      ${CategoriesBeforeIntroElement}

      ${IntroAfterFreebiesElement}

      ${CategoriesAfterIntroElement}

      ${TimerAfterCategories}
    </table>


    ${SoonEndingBannersHandler({ links, shopLimitedTimeDeals })}
      
    ${FooterElement}
  `;
};

export { Thursday };
