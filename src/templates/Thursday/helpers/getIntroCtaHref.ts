import type { LinksConfig, QueriesConfig, CategoryConfig } from '@/types/thursday';

export interface GetIntroCtaHrefProps {
  /** Campaign links map. */
  links?: LinksConfig;
  /** Resolved translation queries. */
  queries?: QueriesConfig;
  /** Category blocks; only `categories[0].href` is consulted. */
  categories?: CategoryConfig[];
  /** Appends UTM tracking parameters to a URL. */
  add_utm: (href: string) => string;
  /** Resolves/decorates a category href. */
  getCategoryLink: (href: string) => string;
}

/**
 * Resolves the link target for the intro section's optional "Shop now" CTA, in priority
 * order: an explicit `links.Intro_cta_href`, the translation-sheet's first category link
 * override, or the first category's own `href` (as a plain string via `getCategoryLink`,
 * or as a pre-resolved `{href}` object via `add_utm`).
 *
 * @returns Resolved href, or `''` if none of the sources yield one.
 */
export const getIntroCtaHref = ({ links, queries, categories, add_utm, getCategoryLink }: GetIntroCtaHrefProps): string => {
  if (links?.Intro_cta_href) {
    // return add_utm(links.Intro_cta_href);
    // getCategoryLink (src/main/handlers/handlers.js) returns a URL object, not a string —
    // coerce explicitly (see the same fix in _Categories.ts's normalizeCategoryForRender).
    return String(getCategoryLink(links.Intro_cta_href));
  }

  if (queries?.categoryLinks?.[0]) {
    return add_utm(queries.categoryLinks[0]);
  }

  const firstCategoryHref = categories?.[0]?.href;
  if (firstCategoryHref && typeof firstCategoryHref === 'string' && typeof getCategoryLink === 'function') {
    return String(getCategoryLink(firstCategoryHref));
  }

  if (firstCategoryHref && typeof firstCategoryHref === 'object' && (firstCategoryHref as { href?: string }).href) {
    return add_utm((firstCategoryHref as { href: string }).href);
  }

  return '';
};
