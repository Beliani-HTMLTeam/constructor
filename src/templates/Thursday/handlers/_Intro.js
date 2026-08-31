import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';

export const IntroHandler = ({ intro, queries, introCta_href, shopNow, getCategoryLink, links }) => {
  const introType = intro?.type ?? 'paragraph';
  const introColor = intro?.color ?? '#000000';

  let resolvedHref = undefined;
  if (intro?.href) {
    if (typeof intro.href === 'string' && links && links[intro.href]) {
      resolvedHref = links[intro.href];
    } else if (typeof intro.href === 'string') {
      resolvedHref = getCategoryLink ? getCategoryLink(intro.href) : intro.href;
    }
  }

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
    href: resolvedHref,
  })}
  ${
    intro.cta
      ? `
      ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore }) : ''}
      ${CTA({
        href: introCta_href,
        text: shopNow,
        color: introColor,
        align: 'center',
        insideTr: true,
      })}
      ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter }) : ''}
        `
      : ''
  }
  `
    : '';
};
