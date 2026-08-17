import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';

export const IntroHandler = ({ intro, queries, introCta_href, shopNow }) => {
  const introType = intro?.type ?? 'paragraph';
  const introColor = intro?.color ?? '#000000';
  const ctaColor = intro?.cta?.color ?? '#FFF4E6';

  return intro && introType === 'paragraph'
    ? `
  ${Intro({
    spaceTop: intro?.spaceTop,
    spaceBottom: intro?.spaceBottom,
    text: `Unwrap a new festive deal every day and make the countdown to Christmas truly magical. </br>Hurry—today’s offer disappears at midnight.`,
    paragraphAlign: intro?.alignment,
    color: introColor,
    backgroundColor: intro?.backgroundColor,
    container: intro?.container,
  })}
  ${
    intro.cta
      ? `
      ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore }) : ''}
      ${CTA({
        href: introCta_href,
        text: "Open Today’s deal  →",
        color: ctaColor,
        backgroundColor: intro?.cta?.backgroundColor ?? '#750000',
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
