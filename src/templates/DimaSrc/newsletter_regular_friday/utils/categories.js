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
