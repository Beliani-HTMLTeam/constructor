import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';

export const IntroHandler = ({ intro, queries, introCta_href, introCtaText, getCategoryLink, links }) => {
  const introType = intro?.type ?? 'paragraph';
  const introColor = intro?.color ?? '#000000';
  const introBg = intro?.backgroundColor;

  const containerClass = typeof intro?.container === 'string' ? intro?.container : (intro?.container ? 'newsletterContainer' : '');
  const ctaContainerClass = intro?.cta?.tdClass || containerClass;

  const ctaElement = intro?.cta
    ? `
      ${Space({ insideTr: true, className: intro.cta.spaceBefore || intro?.spaceBottom || 'newsletterBottom20px', background: introBg })}
      <tr ${introBg ? `style="background-color: ${introBg};" bgcolor="${introBg}"` : ''}>
        <td ${ctaContainerClass ? `class="${ctaContainerClass}"` : ''} align="${intro?.cta?.align || intro?.alignment || 'center'}" ${introBg ? `style="background-color: ${introBg};" bgcolor="${introBg}"` : ''}>
          ${CTA({
            href: introCta_href,
            text: introCtaText,
            color: introColor,
            align: intro?.cta?.align || intro?.alignment || 'center',
            insideTr: false,
            background: introBg,
            ...(typeof intro.cta === 'object' ? {
              ...intro.cta,
              bg: intro.cta.background ?? intro.cta.bg,
              textColor: intro.cta.color ?? intro.cta.textColor,
              background: introBg,
            } : {}),
          })}
        </td>
      </tr>
      ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter, background: introBg }) : ''}
    `
    : '';

  return intro && introType === 'paragraph'
    ? Intro({
        spaceTop: intro?.spaceTop,
        spaceBottom: intro?.spaceBottom,
        text: queries.intro || 'Translation not found',
        paragraphAlign: intro?.alignment,
        color: introColor,
        backgroundColor: introBg,
        container: intro?.container,
        title: intro?.title,
        paragraph: intro?.paragraph,
        href: introCta_href,
        cta: ctaElement,
      })
    : '';
};
