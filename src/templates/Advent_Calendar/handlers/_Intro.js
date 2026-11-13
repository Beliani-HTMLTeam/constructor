import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';
import { CTA_new } from '../components/CTA_new';

export const IntroHandler = ({ intro, queries, introCta_href, shopNow, type }) => {
  const introType = intro?.type ?? 'paragraph';
  const introColor = intro?.color ?? '#000000';
  const ctaColor = intro?.cta?.color ?? '#FFF4E6';
  const ctaBg = intro?.cta?.backgroundColor ?? '#750000';

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
      ${CTA_new({
        href: introCta_href,
        text: 'Open Today’s deal',
        variant: 'button',
        type,
        bg: ctaBg,
        textColor: ctaColor,
        align: 'center',
        insideTr: true,
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: '600',
        textTransform: 'none',
        borderRadius: '2px',
        paddingX: 32,
        paddingTop: 16,
        paddingBottom: 16,mobilePaddingX: 20,
        mobilePaddingTop: 13,
        mobilePaddingBottom: 13,
        mobileFontSize: '16px',
        mobileLineHeight: '20px',
      })}
      ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter }) : ''}
        `
      : ''
  }
  `
    : '';
};
