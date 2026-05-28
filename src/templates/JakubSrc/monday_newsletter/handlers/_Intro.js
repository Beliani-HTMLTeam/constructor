import { Intro } from '../components/Intro';
import { CTA } from '../components/CTA';

export const IntroHandler = ({ intro, queries, introCta_href, shopNow }) => {
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
  })}
  ${
    intro.cta
      ? `
      ${intro.cta.spaceBefore ? `<tr style="background-color: ${intro.backgroundColor ?? ''};"><td class="${intro.cta.spaceBefore}"></td></tr>` : ''}
      <tr style="background-color: ${intro.backgroundColor ?? ''};"><td align="center">
        ${CTA({
          href: introCta_href,
          text: shopNow,
          color: introColor,
          align: 'center',
        })}
      </td></tr>
      ${intro.cta.spaceAfter ? `<tr style="background-color: ${intro.backgroundColor ?? ''};"><td class="${intro.cta.spaceAfter}"></td></tr>` : ''}
        `
      : ''
  }
  `
    : '';
};
