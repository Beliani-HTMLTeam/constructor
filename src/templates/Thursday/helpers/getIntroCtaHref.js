export const getIntroCtaHref = ({ links, queries, categories, add_utm, getCategoryLink }) => {
  if (links?.Intro_cta_href) {
    return add_utm(links.Intro_cta_href);
  }

  if (queries?.categoryLinks?.[0]) {
    return add_utm(queries.categoryLinks[0]);
  }

  const firstCategoryHref = categories?.[0]?.href;
  if (firstCategoryHref && typeof firstCategoryHref === 'string' && typeof getCategoryLink === 'function') {
    return getCategoryLink(firstCategoryHref);
  }

  if (firstCategoryHref && typeof firstCategoryHref === 'object' && firstCategoryHref.href) {
    return add_utm(firstCategoryHref.href);
  }

  return '';
};
