import baseCss from '../../utils/css/newsletter/thursday.css?inline';
import { composeNewsletterCss } from './helpers/composeNewsletterCss.js';
import productStyles from './components/Product/styles.css?inline';
import topImageTitleStyles from './components/TopImageTitle/styles.css?inline';
import paragraphStyles from './components/Paragraph/styles.css?inline';
import categoryStyles from './components/Categories/styles.css?inline';
import introStyles from './components/Intro/styles.css?inline';
import priceStyles from './components/Prices/styles.css?inline';
import smallTileStyles from './components/category/small-tiles/styles.css?inline';
import threeProductStyles from './components/category/3prods/styles.css?inline';
import ctaStyles from './components/CTA/styles.css?inline';
import copyCodeStyles from './components/CopyCodeCTA/styles.css?inline';
import timerStyles from './components/Timer/styles.css?inline';
import freebieStyles from './components/Timer/freebies.css?inline';

export function resolveThursdayCss({ css, html, type, wrapper }) {
  if (type !== 'newsletter' || css !== baseCss) return css;
  return composeNewsletterCss({
    baseCss,
    componentStyles: [
      productStyles,
      topImageTitleStyles,
      paragraphStyles,
      categoryStyles,
      introStyles,
      priceStyles,
      smallTileStyles,
      threeProductStyles,
      ctaStyles,
      copyCodeStyles,
      timerStyles,
      freebieStyles,
    ],
    html,
    wrapper,
  });
}
