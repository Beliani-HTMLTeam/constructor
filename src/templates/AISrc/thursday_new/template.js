import { Footer } from './Footer.js';
import { Header } from './Header.js';

import { TopImageTitleHandler } from './handlers/_TopImageTitle.js';
import { TopImageHandler } from './handlers/_TopImage.js';
import { IntroHandler } from './handlers/_Intro.js';
import { TimerHandler } from './handlers/_Timer.js';
import { CategoriesHandler } from './handlers/_Categories.js';
import { SoonEndingBannersHandler } from './handlers/_SoonEndingBanners.js';
import { getIntroCtaHref } from './helpers/getIntroCtaHref.js';
import { ShopByCategoryHeader } from './components/ShopByCategoryHeader.js';

const ThursdayNew = async ({
  links,
  topImagePadding,
  queries,
  shop,
  country,
  type,
  id,
  categories,
  background = '#ffffff',
  color = '#000000',

  Inside,
  intro,
  timer,
  TopImageTitle_data,
  topImage_data,
  conditionOverrides,
  shopByCategory,
  theme,

  getHeader,
  getFooter,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getProductById,
  add_utm,
  disableSoonEnding,
  disableFooterCategories = false,
  disableKlarna,
  categoryImageTdClass,
  disableTopImageTitle = false,
  disableHighPrice = false,
}) => {
  const themeData = {...theme};

  const HeaderElement = Header({ getHeader, country, background, type, id });

  const countrySlug = String(country ?? '').toLowerCase();
  const conditionText = conditionOverrides?.[countrySlug] ?? queries.condition;
  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries: { ...queries, condition: conditionText }, country, type, id, disableFooterCategories, disableKlarna });
  const shopNow = intro?.cta?.textOverrides?.[countrySlug] ?? getPhrase('Shop now');
  const timerShopNow = Inside?.cta?.textOverrides?.[countrySlug] ?? getPhrase('Shop now');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');

  let topImage = '';
  if (topImage_data && typeof topImage_data === 'object') {
    topImage_data[country] = topImage_data[country] || topImage_data['default'] || '';
    topImage = topImage_data[country];
  }

  const TopImageTitleElement = !disableTopImageTitle ? TopImageTitleHandler({ links, queries, TopImageTitle_data, type, countrySlug }) : '';
  const TopImageElement = TopImageHandler({ links, topImage, padding: topImagePadding });

  const introCta_href = getIntroCtaHref({ links, queries, categories, add_utm, getCategoryLink });
  
  const IntroElement = IntroHandler({ intro, queries, introCta_href, shopNow, countrySlug, type, links, getPhrase, theme: themeData });
  const TimerElement = TimerHandler({ Inside, queries, links, timer, shopNow: timerShopNow, country, type, shop });
  const introPosition = intro?.position ?? 'afterTopImage';
  const timerPosition = Inside?.position ?? 'beforeCategories';
  const safeCategories = Array.isArray(categories) ? categories : [];
  const dealIndex = safeCategories.findIndex((c) => String(c?.type).toLowerCase() === 'deal');

  const TimerBeforeCategories = timerPosition === 'beforeCategories' ? TimerElement : '';
  const TimerAfterCategories =
    timerPosition === 'afterCategories' || timerPosition === 'underCategories' ? TimerElement : '';
  const hasTimer = Boolean(TimerElement);

  const categoriesBeforeIntro =
  introPosition === 'afterFreebies' && dealIndex >= 0
    ? safeCategories.slice(0, dealIndex + 1)
    : introPosition === 'beforeFreebies' || introPosition === 'beforeCategories'
      ? []
      : safeCategories.length > 1
        ? [safeCategories[0]]
        : safeCategories;

  const categoriesAfterIntro =
    introPosition === 'afterFreebies' && dealIndex >= 0
      ? safeCategories.slice(dealIndex + 1)
      : introPosition === 'beforeFreebies' || introPosition === 'beforeCategories'
        ? safeCategories
        : safeCategories.length > 1
          ? safeCategories.slice(1)
          : [];

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
    categoryImageTdClass,
    theme: themeData,
    disableHighPrice,
  };

  const CategoriesBeforeIntroElement = await CategoriesHandler({
    categories: categoriesBeforeIntro,
    categoryOffset: 0,
    ...categoriesSharedProps,
  });

  const CategoriesAfterIntroElement = await CategoriesHandler({
    categories: categoriesAfterIntro,
    categoryOffset: categoriesBeforeIntro.length,
    ...categoriesSharedProps,
  });

  const isAfterFreebies = introPosition === 'afterFreebies';
  const isAfterTimer = introPosition === 'afterTimer' && hasTimer;
  const IntroAfterTopImageElement = isAfterFreebies ? '' : IntroElement;
  const IntroAfterFreebiesElement = isAfterFreebies ? IntroElement : '';
  const IntroAfterTimerBeforeCategoriesElement =
    isAfterTimer && timerPosition === 'beforeCategories' ? IntroElement : '';
  const IntroAfterTimerAfterCategoriesElement =
    isAfterTimer && (timerPosition === 'afterCategories' || timerPosition === 'underCategories') ? IntroElement : '';

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; background-color: ${background}; color: ${color};" id="newsletter">

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

    ${!disableSoonEnding?.includes(country) ? SoonEndingBannersHandler({ links, shopLimitedTimeDeals, country }) : ''}

    ${FooterElement}
  `;
};

export { ThursdayNew };
