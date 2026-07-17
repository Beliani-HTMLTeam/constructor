import { Footer } from './Footer.js';
import { Header } from './Header.js';

import { TopImageTitleHandler } from './handlers/_TopImageTitle.js';
import { TopImageHandler } from './handlers/_TopImage.js';
import { IntroHandler } from './handlers/_Intro.js';
import { CategoriesHandler } from './handlers/_Categories.js';
import { SoonEndingBannersHandler } from './handlers/_SoonEndingBanners.js';
import { getIntroCtaHref } from './helpers/getIntroCtaHref.js';
import { TimerHandler } from './handlers/_ProloTimer.js';

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

  intro,
  Inside,
  timer,
  TopImage_data,
  TopImageTitle_data,
  conditionOverrides,

  getHeader,
  getFooter,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getProductById,
  add_utm,
  soonEndingBanner = true,
  categoryImageTdClass,
}) => {
  const HeaderElement = Header({ getHeader, country, background, type, id });

  const countrySlug = String(country ?? '').toLowerCase();
  const conditionText = conditionOverrides?.[countrySlug] ?? queries.condition;
  const shopNow = intro?.cta?.textOverrides?.[countrySlug] ?? getPhrase('Shop now');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');

  const TopImageTitleElement = TopImageTitleHandler({ links, queries, TopImageTitle_data, type, countrySlug });
  const TopImageElement = TopImageHandler({ links });

  const introCta_href = getIntroCtaHref({ links, queries, categories, add_utm, getCategoryLink });
  const IntroElement = IntroHandler({ intro, queries, introCta_href, shopNow, countrySlug });
  const TimerElement = TimerHandler({ Inside, queries, links, timer, shopNow, country, type });
  const introPosition = intro?.position ?? 'afterTopImage';
  const timerPosition = Inside?.position ?? 'beforeCategories';

  const TimerBeforeCategories = timerPosition === 'beforeCategories' ? TimerElement : '';
  const TimerAfterCategories =
    timerPosition === 'afterCategories' || timerPosition === 'underCategories' ? TimerElement : '';
  const hasTimer = Boolean(TimerElement);

  const safeCategories = Array.isArray(categories) ? categories : [];
  const freebiesIndex = safeCategories.findIndex((category) => String(category?.type).toLowerCase() === 'deal');

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
		
	let hasSmallTilesCategory = false;

	if (categories.find((cat) => cat?.type === 'small-tiles' && !cat?.tiles?.dimensions)) {
		hasSmallTilesCategory = true;
	}

	const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id, hasSmallTilesCategory });


  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; background-color: ${background}; color: #000;" id="newsletter">

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

    ${soonEndingBanner ? SoonEndingBannersHandler({ links, shopLimitedTimeDeals, country }) : ''}

    ${FooterElement}
  `;
};

export { Friday };
