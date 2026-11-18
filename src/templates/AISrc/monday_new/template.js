import { Footer, shouldUseNewFooter } from './Footer.js';
import { Header } from './Header.js';

import { TopImageTitleHandler } from './handlers/_TopImageTitle.js';
import { TopImageHandler } from './handlers/_TopImage.js';
import { IntroHandler } from './handlers/_Intro.js';
import { CategoriesHandler } from './handlers/_Categories.js';
import { SoonEndingBannersHandler } from './handlers/_SoonEndingBanners.js';
import { getIntroCtaHref } from './helpers/getIntroCtaHref.js';
import { TimerHandler } from './handlers/_Timer.js';
import { getTimerLinks } from '@/templates/Friday/helpers/getTimerLinks.js';
import { renderContent } from './helpers/renderContent.js';

const MondayNew = async ({
  links,
  queries,
  shop,
  country,
  type,
  id,
  categories,
  background = '#ffffff',
  color = '#000000',
  selectedCampaign,
  date,

  intro,
  TopImageTitle_data,
  topImage_data,
  topImageTdClass,
  conditionOverrides,
  shopByCategory,
  theme,

  Inside,
  timer,

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
  footerOverride = {},
  footer_theme = 'peach',
}) => {
  const themeData = { ...theme };

  const HeaderElement = Header({ getHeader, country, background, type, id });

  const countrySlug = String(country ?? '').toLowerCase();
  const conditionText = conditionOverrides?.[countrySlug] ?? queries.condition;
  const FooterElement = Footer({
    getFooter,
    getCategoryLink,
    getCategoryTitle,
    queries: { ...queries, condition: conditionText },
    country,
    type,
    id,
    disableFooterCategories,
    disableKlarna,
    selectedCampaign,
    date,
    theme: footer_theme,
  });
  const shopNow = intro?.cta?.textOverrides?.[countrySlug] ?? getPhrase('Shop now');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');

  let topImage = topImage_data?.[country] || topImage_data?.default || '';

  const TopImageTitleElement = !disableTopImageTitle
    ? TopImageTitleHandler({ links, queries, TopImageTitle_data, type, countrySlug })
    : '';
  const TopImageElement = TopImageHandler({
    links,
    topImage,
    tdClass: topImageTdClass,
    background: theme?.secondary,
  });

  const TimerElement = await TimerHandler({
    Inside,
    queries,
    links: getTimerLinks({ links, timer, type }),
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

  const introCta_href = getIntroCtaHref({ links, queries, categories, add_utm, getCategoryLink });
  const IntroElement = IntroHandler({
    intro,
    queries,
    introCta_href,
    shopNow,
    countrySlug,
    type,
    links,
    getPhrase,
    theme: themeData,
  });

  const introPosition = intro?.position ?? 'afterTopImage';
  const safeCategories = Array.isArray(categories) ? categories : [];
  const dealIndex = safeCategories.findIndex((c) => String(c?.type).toLowerCase() === 'deal');

  const categoriesBeforeIntro =
    introPosition === 'afterFreebies' && dealIndex >= 0 ? safeCategories.slice(0, dealIndex + 1) : safeCategories;

  const categoriesAfterIntro =
    introPosition === 'afterFreebies' && dealIndex >= 0 ? safeCategories.slice(dealIndex + 1) : [];

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
    ...categoriesSharedProps,
  });

  const CategoriesAfterIntroElement = await CategoriesHandler({
    categories: categoriesAfterIntro,
    ...categoriesSharedProps,
    indexOffset: categoriesBeforeIntro.length,
  });

  const ContentElement = renderContent({
    topImage: TopImageElement,
    intro: IntroElement,
    timer: TimerElement,
    categoriesBeforeIntro: CategoriesBeforeIntroElement,
    categoriesAfterIntro: CategoriesAfterIntroElement,
    introPosition,
    timerPosition: Inside?.position,
  });

  const hideSoonEnding =
    disableSoonEnding === true ||
    (Array.isArray(disableSoonEnding) && disableSoonEnding.includes(country)) ||
    shouldUseNewFooter(date || selectedCampaign?.date);

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; background-color: ${background}; color: ${color};" id="newsletter">

      ${TopImageTitleElement}

      ${ContentElement}

      <tr>
        <td valign="top" style="padding:0;border:0;">
          ${
            !hideSoonEnding
              ? SoonEndingBannersHandler({
                  links,
                  shopLimitedTimeDeals,
                  country,
                })
              : ''
          }
          ${FooterElement}
        </td>
      </tr>
    </table>
  `;
};

export { MondayNew };

