import { BulletproofButton } from '../BulletproofButton';
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
  ctaBackgroundColor,
  ctaColor,
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
    ${BulletproofButton({
      href: getHref(),
      text:  getText(),
      background:
      ctaBackgroundColor || backgroundColor || '#000000',
      color:
      ctaColor || color || '#FFFFFF',
      align: 'center',
      radius: 24,
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 1.2,
      paddingX: 50,
      paddingY: 13,
    })}
    ${cta.spaceAfter ? Space({ insideTr: true, className: cta.spaceAfter, backgroundColor }) : ''}
  `;
};