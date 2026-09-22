import { IntroRenderer } from './IntroRenderer';

export const IntroWrapper = ({
  intro,
  queries,
  links,
  categories,
  country,
  add_utm,
  getCategoryLink,
  shopNowPhrase,
}) => {
  if (!intro) return '';

  console.log("intro data", intro)

  return IntroRenderer({
    intro,
    queries,
    links,
    categories,
    country,
    add_utm,
    getCategoryLink,
    shopNowPhrase,
  });
};

export { IntroParagraph } from './IntroParagraph';
export { IntroLiquidator } from './IntroLiquidator';
export { IntroCTA } from './IntroCTA';
export { IntroRenderer } from './IntroRenderer';