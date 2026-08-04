import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';
import type { IntroConfig, QueriesConfig } from '@/types/thursday';

export interface IntroHandlerProps {
  /** Intro section config. */
  intro?: IntroConfig;
  /** Resolved translation queries; `queries.intro` supplies the copy. */
  queries: QueriesConfig;
  /** Resolved link for the optional CTA (see `helpers/getIntroCtaHref.ts`). */
  introCta_href: string;
  /** Translated "Shop now" phrase, used as the CTA label. */
  shopNow: string;
}

/**
 * Wires campaign `intro` config into the `Intro` component and appends an
 * optional "Shop now" text CTA when `intro.cta` is set. Renders nothing unless `intro`
 * is provided and its `type` (defaulting to `'paragraph'`) is `'paragraph'`.
 */
export const IntroHandler = ({ intro, queries, introCta_href, shopNow }: IntroHandlerProps): string => {
  const introType = intro?.type ?? 'paragraph';
  const introColor = intro?.color ?? '#000000';

  return intro && introType === 'paragraph'
    ? `
  ${Intro({
    spaceTop: intro?.spaceTop,
    spaceBottom: intro?.spaceBottom,
    // `queries.intro` can resolve to `[]` (blank/misconfigured sheet range) — `[] || fallback`
    // doesn't catch that (an empty array is truthy), so it must be checked explicitly or the
    // section silently renders zero rows instead of a visible "Translation not found".
    text: Array.isArray(queries.intro) && queries.intro.length > 0 ? queries.intro : 'Translation not found',
    paragraphAlign: intro?.alignment,
    color: introColor,
    backgroundColor: intro?.backgroundColor,
    container: intro?.container,
  })}
  ${
    intro.cta
      ? // Wrapped in its own table carrying the intro's background — these rows sit *after*
        // the Intro component's table, so without this they'd land on the newsletter body's
        // background instead (e.g. a stray maroon strip under a white intro block).
        `
      <tr>
        <td style="padding: 0; margin: 0;${intro.backgroundColor ? ` background-color: ${intro.backgroundColor};` : ''}">
          <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${intro.backgroundColor ? `background-color: ${intro.backgroundColor};` : ''} border-collapse: collapse;">
            ${intro.cta.spaceBefore ? Space({ insideTr: true, className: intro.cta.spaceBefore }) : ''}
            ${CTA({
              href: introCta_href,
              text: shopNow,
              color: intro.ctaColor ?? introColor,
              align: 'center',
              insideTr: true,
              className: 'newsletterCtaCaps',
            })}
            ${intro.cta.spaceAfter ? Space({ insideTr: true, className: intro.cta.spaceAfter }) : ''}
          </table>
        </td>
      </tr>
        `
      : ''
  }
  `
    : '';
};
