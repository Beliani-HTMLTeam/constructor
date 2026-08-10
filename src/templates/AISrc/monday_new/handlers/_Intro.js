import { Intro } from '../components/Intro.js';

export const IntroHandler = ({ intro, queries, introCta_href, shopNow, countrySlug, type = 'newsletter', links, getPhrase, theme }) => {
  if (!intro) return '';

  const introColor = intro?.color ?? theme?.primaryText ?? '#ffffff';
  // empty array is truthy so || alone won't trigger the fallback
  const rawText = queries.intro?.length ? queries.intro : 'TRANSLATION NOT FOUND';
  const titleOverride = intro?.titleOverrides?.[countrySlug] ?? intro?.titleOverride;
  const introText =
    titleOverride && Array.isArray(rawText)
      ? [titleOverride, ...rawText.slice(1)]
      : rawText;

  const ctaText = intro?.cta?.textOverrides?.[countrySlug] ?? intro?.cta?.text ?? shopNow ?? 'TRANSLATION NOT FOUND';
  const ctaSrc = intro?.cta?.srcByType?.[type] ?? intro?.cta?.src ?? null;
  const ctaVariant = intro?.cta?.variant ?? null;
  const secondaryLinkText = intro?.secondaryLink?.text ?? getPhrase?.('See more');
  const secondaryLinkHref = intro?.secondaryLink?.href ?? links?.Intro_secondary_href ?? introCta_href;

  return Intro({
    spaceTop: intro?.spaceTop ?? 'newsletterBottom40px',
    spaceBottom: intro?.spaceBottom ?? 'newsletterBottom40px',
    text: introText,
    paragraphAlign: intro?.alignment ?? 'center',
    color: introColor,
    backgroundColor: intro?.backgroundColor ?? '#750000',
    ctaHref: introCta_href,
    ctaText,
    ctaSrc,
    ctaVariant,
    secondaryLinkHref: intro?.secondaryLink !== false ? secondaryLinkHref : null,
    secondaryLinkText,
    type,
    theme,
  });
};
