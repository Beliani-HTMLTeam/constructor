import { Footer } from './Footer.js';
import { Header } from './Header.js';

import { TopImageTitleHandler } from './handlers/_TopImageTitle.js';
import { TopImageHandler } from './handlers/_TopImage.js';
import { IntroHandler } from './handlers/_Intro.js';
import { CategoriesHandler } from './handlers/_Categories.js';
import { SoonEndingBannersHandler } from './handlers/_SoonEndingBanners.js';
import { getIntroCtaHref } from './helpers/getIntroCtaHref.js';

const Monday = async ({
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
}) => {
  const HeaderElement = Header({ getHeader, country, background, type, id });

  const countrySlug = String(country ?? '').toLowerCase();
  const conditionText = conditionOverrides?.[countrySlug] ?? queries.condition;
  const FooterElement = Footer({ getFooter, getCategoryLink, getCategoryTitle, queries: { ...queries, condition: conditionText }, country, type, id });
  const shopNow = intro?.cta?.textOverrides?.[countrySlug] ?? getPhrase('Shop now');
  const shopLimitedTimeDeals = getPhrase('Shop limited-time deals');

  const TopImageTitleElement = TopImageTitleHandler({ links, queries, TopImageTitle_data, type, countrySlug });
  const TopImageElement = TopImageHandler({ links });

  const introCta_href = getIntroCtaHref({ links, queries, categories, add_utm, getCategoryLink });
  const IntroElement = IntroHandler({ intro, queries, introCta_href, shopNow, countrySlug });

  const introPosition = intro?.position ?? 'afterTopImage';
  const safeCategories = Array.isArray(categories) ? categories : [];
  const dealIndex = safeCategories.findIndex((c) => String(c?.type).toLowerCase() === 'deal');

  const categoriesBeforeIntro =
    introPosition === 'afterFreebies' && dealIndex >= 0
      ? safeCategories.slice(0, dealIndex + 1)
      : safeCategories;
  const categoriesAfterIntro =
    introPosition === 'afterFreebies' && dealIndex >= 0
      ? safeCategories.slice(dealIndex + 1)
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
  const IntroAfterTopImageElement = isAfterFreebies ? '' : IntroElement;
  const IntroAfterFreebiesElement = isAfterFreebies ? IntroElement : '';

  return `
    ${HeaderElement}

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">

      ${TopImageTitleElement}

      ${TopImageElement}

      ${IntroAfterTopImageElement}

      ${CategoriesBeforeIntroElement}

      ${IntroAfterFreebiesElement}

      ${CategoriesAfterIntroElement}

    </table>

    ${soonEndingBanner ? SoonEndingBannersHandler({ links, shopLimitedTimeDeals, country }) : ''}

    ${FooterElement}
  `;
};

export { Monday };
