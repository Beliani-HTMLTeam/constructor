export const getCategoryName = (category, idx, country, queries, getCategoryTitle) => {
  // Priority 1: Query-based titles
  if (category.title?.source === 'queries') {
    return queries.categories[idx];
  }

  // Priority 2: Country-specific override
  if (category.overrides?.[country]) {
    return category.overrides[country];
  }

  // Priority 3: Translated title via getCategoryTitle
  if (getCategoryTitle) {
    return getCategoryTitle(category.name);
  }

  // Priority 4: Original name
  return category.name;
};

export const getHrefWithOverride = (category, country, defaultHref, queries, idx, add_utm, getCategoryLink) => {
  // Priority 1: Check for hrefOverride on the category
  if (category.hrefOverride?.[country]) {
    return add_utm ? add_utm(category.hrefOverride[country]) : category.hrefOverride[country];
  }
  
  // Priority 2: Check for hrefSource === 'queries'
  if (category.hrefSource && category.hrefSource === 'queries') {
    const link = queries.categoryLinks.length > 1 ? queries.categoryLinks[idx] : queries.categoryLinks[0];
    return add_utm ? add_utm(link) : link;
  }
  
  // Priority 3: Use category.href with DACH support
  if (category.href) {
    const href = category.hrefDACH ? category.hrefDACH : category.href;
    return getCategoryLink ? getCategoryLink(href) : href;
  }
  
  // Priority 4: Fallback to default
  return defaultHref || category.href;
};