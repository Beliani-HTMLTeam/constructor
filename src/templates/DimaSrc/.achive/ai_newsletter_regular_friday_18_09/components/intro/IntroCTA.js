import { AI_CTA } from '../AI_CTA';
import { CTA } from '../CTA';
import { Space } from '../Space';

export const IntroCTA = ({
  cta,
  intro,
  queries,
  links,
  categories,
  country,
  add_utm,
  getCategoryLink,
  shopNowPhrase,
  backgroundColor,
  color,
}) => {
  if (!cta) return '';

  const getHref = () => {
    if (cta.hrefSource === 'queries') {
      return add_utm(queries.introCTAhref);
    }
    if (links.Intro_cta_href) {
      return getCategoryLink(links.Intro_cta_href);
    }
    return getCategoryLink(categories[0]?.href);
  };

  const getText = () => {
    return cta.overrides?.[country] || queries.introCTA || shopNowPhrase;
  };

  return `
    ${AI_CTA({
      href: getHref(),
      text:getText(),
      insideTr: true,
      tdClass: 'newsletterContainer',
      color: intro.cta?.color || color,
      background: intro.backgroundColor || backgroundColor,
      ctaBackgroundColor: intro.cta?.backgroundColor || '#FFFFFF',
    })}
    ${cta.spaceAfter ? Space({ insideTr: true, className: cta.spaceAfter, backgroundColor }) : ''}
  `;
};