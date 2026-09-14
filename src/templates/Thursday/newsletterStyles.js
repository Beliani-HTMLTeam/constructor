import baseCss from '../../utils/css/newsletter/thursday.css?inline';
import { composeNewsletterCss } from './helpers/composeNewsletterCss.js';
import component0 from './components/Product/styles.css?inline';
import component1 from './components/TopImageTitle/styles.css?inline';
import component2 from './components/Paragraph/styles.css?inline';
import component3 from './components/Categories/styles.css?inline';
import component4 from './components/Intro/styles.css?inline';
import component5 from './components/Prices/styles.css?inline';
import component6 from './components/category/small-tiles/styles.css?inline';
import component7 from './components/category/3prods/styles.css?inline';
import component8 from './components/CTA/styles.css?inline';
import component9 from './components/CopyCodeCTA/styles.css?inline';
import component10 from './components/Timer/styles.css?inline';
import component11 from './components/Timer/freebies.css?inline';

// Only campaigns opting into NS_THURSDAY use modular newsletter styles.
export function resolveThursdayCss({ css, html, type, wrapper }) {
  if (type !== 'newsletter' || css !== baseCss) return css;
  return composeNewsletterCss({ baseCss, componentStyles: [component0, component1, component2, component3, component4, component5, component6, component7, component8, component9, component10, component11], html, wrapper });
}
