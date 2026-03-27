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
  const timerPosition = Inside?.position ?? 'beforeCategories';

  const TimerBeforeCategories = timerPosition === 'beforeCategories' ? TimerElement : '';
  const TimerAfterCategories =
    timerPosition === 'afterCategories' || timerPosition === 'underCategories' ? TimerElement : '';
  const hasTimer = Boolean(TimerElement);

  const safeCategories = Array.isArray(categories) ? categories : [];
  const freebiesIndex = safeCategories.findIndex((category) => String(category?.type).toLowerCase() === 'freebies');

  const categoriesBeforeIntro =
    introPosition === 'afterFreebies' && freebiesIndex >= 0
      ? safeCategories.slice(0, freebiesIndex + 1)
      : safeCategories;
  const categoriesAfterIntro =
    introPosition === 'afterFreebies' && freebiesIndex >= 0 ? safeCategories.slice(freebiesIndex + 1) : [];

  const categoriesSharedProps = {
    getProductById,
    getCategoryLink,
    getCategoryTitle,
    queries,
    add_utm,
    links,
    type,
    country,
    getPhrase,
  };

  const CategoriesBeforeIntroElement = await CategoriesHandler({
    categories: categoriesBeforeIntro,
    ...categoriesSharedProps,
  });
  const CategoriesAfterIntroElement = await CategoriesHandler({
    categories: categoriesAfterIntro,
    ...categoriesSharedProps,
  });

  const isAfterFreebies = introPosition === 'afterFreebies';
  const isAfterTimer = introPosition === 'afterTimer' && hasTimer;
  const IntroAfterTopImageElement = isAfterFreebies || isAfterTimer ? '' : IntroElement;
  const IntroAfterFreebiesElement = introPosition === 'afterFreebies' ? IntroElement : '';
  const IntroAfterTimerBeforeCategoriesElement =
    isAfterTimer && timerPosition === 'beforeCategories' ? IntroElement : '';
  const IntroAfterTimerAfterCategoriesElement =
    isAfterTimer && (timerPosition === 'afterCategories' || timerPosition === 'underCategories') ? IntroElement : '';

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
      ${TopImageTitleElement}

      ${TopImageElement}

      ${IntroAfterTopImageElement}

      ${TimerBeforeCategories}

      ${IntroAfterTimerBeforeCategoriesElement}

      ${CategoriesBeforeIntroElement}

      ${IntroAfterFreebiesElement}

      ${CategoriesAfterIntroElement}

      ${TimerAfterCategories}

      ${IntroAfterTimerAfterCategoriesElement}
    </table>


    ${SoonEndingBannersHandler({ links, shopLimitedTimeDeals })}
      
    ${FooterElement}
  `;
};

export { Thursday };
