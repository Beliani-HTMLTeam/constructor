import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';

export const IntroHandler = ({ intro, queries, introCta_href, shopNow, countrySlug }) => {
  const introType = intro?.type ?? 'paragraph';
  const introColor = intro?.color ?? '#000000';

  const rawText = queries.intro || 'Translation not found';
  const titleOverride = intro?.titleOverrides?.[countrySlug] ?? intro?.titleOverride;
  const introText =
    titleOverride && Array.isArray(rawText)
      ? [titleOverride, ...rawText.slice(1)]
      : rawText;

  return intro && introType === 'paragraph'
    ? `
  ${Intro({
    spaceTop: intro?.spaceTop,
    spaceBottom: intro?.spaceBottom,
    text: introText,
    paragraphAlign: intro?.alignment,
    color: introColor,
    backgroundColor: intro?.backgroundColor,
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
