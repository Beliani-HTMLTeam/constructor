import { IntroParagraph } from './IntroParagraph';
import { IntroLiquidator } from './IntroLiquidator';

export const IntroRenderer = ({
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

  switch (intro.type) {
    case 'paragraph':
      return IntroParagraph({
        intro,
        queries,
        links,
        categories,
        country,
        add_utm,
        getCategoryLink,
        shopNowPhrase,
      });
    case 'liquidator':
      return IntroLiquidator({
        intro,
        queries,
      });
    default:
      return '';
  }
};