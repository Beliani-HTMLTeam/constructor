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
    ${cta.spaceBefore ? Space({ insideTr: true, className: cta.spaceBefore, backgroundColor }) : ''}
    ${CTA({
      href: getHref(),
      text: getText(),
      background: backgroundColor,
      color: color,
      align: 'center',
      insideTr: true,
    })}
    ${cta.spaceAfter && !(["HR", "SI"].includes(country)) ? Space({ insideTr: true, className: cta.spaceAfter, backgroundColor }) : ''}
  `;
};