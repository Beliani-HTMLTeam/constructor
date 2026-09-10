import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';

export const IntroHandler = ({ intro, queries, introCta_href, shopNow, getCategoryLink, links }) => {
  const introType = intro?.type ?? 'paragraph';
  const introColor = intro?.color ?? '#000000';

  return intro && introType === 'paragraph'
    ? `
  ${Intro({
    spaceTop: intro?.spaceTop,
    spaceBottom: intro?.spaceBottom,
    text: queries.intro || 'Translation not found',
    paragraphAlign: intro?.alignment,
    color: introColor,
    backgroundColor: intro?.backgroundColor,
    container: intro?.container,
    title: intro?.title,
    paragraph: intro?.paragraph,
    href: introCta_href,
  })}
  ${
    intro.cta
      ? `
      ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore }) : ''}
      ${CTA({
        href: introCta_href,
        text: shopNow,
        color: introColor,
        align: intro?.alignment ?? 'center',
        insideTr: true,
        ...(typeof intro.cta === 'object' ? {
          ...intro.cta,
          bg: intro.cta.background ?? intro.cta.bg,
          textColor: intro.cta.color ?? intro.cta.textColor,
          background: undefined,
        } : {}),
      })}
      ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter }) : ''}
        `
      : ''
  }
  `
    : '';
};
