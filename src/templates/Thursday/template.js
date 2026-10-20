import { Footer, shouldUseNewFooter } from './Footer.js';
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
  selectedCampaign,
  date,

  // campaign elements
  Inside,
  intro,
  timer,
  TopImageTitle_data,
  TopImage_data,
  footer_theme,

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

  const seeMore = getPhrase('See more');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');
  const shopNow = getPhrase('Shop now');

  const resolveShopHref = (href) =>
    typeof href === 'string' && /^https?:\/\//.test(href) && !href.includes('/content/') ? String(getCategoryLink(href)) : href;
  const resolvedLinks = {
    ...links,
    ...(links?.TopImage_href && { TopImage_href: resolveShopHref(links.TopImage_href) }),
    ...(links?.TopImageTitle_href && { TopImageTitle_href: resolveShopHref(links.TopImageTitle_href) }),
  };

  const TopImageTitleElement = TopImageTitleHandler({ links: resolvedLinks, queries, TopImageTitle_data, type });
  const TopImageElement = TopImageHandler({ links: resolvedLinks, TopImage_data });

  const introCta_href = getIntroCtaHref({
    links,
    queries,
    categories,
    add_utm,
    getCategoryLink,
  });

  const introCtaText = intro?.cta?.phrase ? getPhrase(intro?.cta?.phrase) : shopNow;
  const IntroElement = IntroHandler({ intro, queries, introCta_href, introCtaText, getCategoryLink, links });
  const TimerElement = await TimerHandler({
    Inside,
    queries,
    links,
    timer,
    shopNow,
    country,
    type,
    shop,
    getProductById,
    getCategoryLink,
    getPhrase,
    add_utm,
  });
  const introPosition = intro?.position ?? 'afterTopImage';
  const timerPosition = Inside?.position ?? 'beforeCategories';

  const TimerAtTop = timerPosition === 'top' ? TimerElement : '';
  const TimerBeforeCategories = timerPosition === 'beforeCategories' ? TimerElement : '';
  const TimerAfterCategories =
    timerPosition === 'afterCategories' || timerPosition === 'underCategories' ? TimerElement : '';
  const hasTimer = Boolean(TimerElement);

  const safeCategories = Array.isArray(categories) ? categories : [];
  const freebiesIndex = safeCategories.findIndex((category) => String(category?.type).toLowerCase() === 'deal');

  // afterFirstCategory: intro goes right under categories[0] (e.g. top image rendered as a category)
  const introSplitIndex =
    introPosition === 'afterFirstCategory' && safeCategories.length > 0
      ? 0
      : introPosition === 'afterFreebies'
        ? freebiesIndex
        : -1;

  const categoriesBeforeIntro = introSplitIndex >= 0 ? safeCategories.slice(0, introSplitIndex + 1) : safeCategories;
  const categoriesAfterIntro = introSplitIndex >= 0 ? safeCategories.slice(introSplitIndex + 1) : [];

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

  const isAfterFreebies = introPosition === 'afterFreebies' || introPosition === 'afterFirstCategory';
  const isAfterTimer = introPosition === 'afterTimer' && hasTimer;
  const isBeforeTopImage = introPosition === 'beforeTopImage';
  const IntroBeforeTopImageElement = isBeforeTopImage ? IntroElement : '';
  const IntroAfterTopImageElement = isAfterFreebies || isAfterTimer || isBeforeTopImage ? '' : IntroElement;
  const IntroAfterFreebiesElement = isAfterFreebies ? IntroElement : '';
  const IntroAfterTimerBeforeCategoriesElement =
    isAfterTimer && timerPosition === 'beforeCategories' ? IntroElement : '';
  const IntroAfterTimerAfterCategoriesElement =
    isAfterTimer && (timerPosition === 'afterCategories' || timerPosition === 'underCategories') ? IntroElement : '';

  let hasSmallTilesCategory = false;

  if (categories.find((cat) => cat?.type === 'small-tiles' && !cat?.tiles?.dimensions)) {
    hasSmallTilesCategory = true;
  }

  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id, hasSmallTilesCategory, selectedCampaign, date, theme: footer_theme });

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" ${background ? `bgcolor="${background}"` : ''} id="newsletter">
      ${TimerAtTop}

      ${IntroBeforeTopImageElement}

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


    ${shouldUseNewFooter(date || selectedCampaign?.date) ? '' : SoonEndingBannersHandler({ links, shopLimitedTimeDeals, country })}
      
    ${FooterElement}
  `;
};

export { Thursday };
