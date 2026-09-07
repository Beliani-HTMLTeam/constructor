import { IntroParagraph } from './IntroParagraph';
import { IntroLiquidator } from './IntroLiquidator';
import { IntroTiT } from './IntroWithTiT';

export const IntroRenderer = ({
  intro,
  queries,
  links,
  categories,
  country,
  add_utm,
  getCategoryLink,
  shopNowPhrase,
  type
}) => {
  if (!intro) return '';

  switch (intro.type) {
    case "withTopImageTitle":
      return IntroTiT({
        intro,
        queries,
        links,
        categories,
        country,
        add_utm,
        getCategoryLink,
        shopNowPhrase,
        type
      });
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