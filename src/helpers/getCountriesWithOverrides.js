export function getCountriesWithOverrides(template) {
  const slugs = new Set();

  if (template?.intro?.titleOverride) slugs.add('*');
  if (template?.intro?.titleOverrides) Object.keys(template.intro.titleOverrides).forEach((s) => slugs.add(s));

  const introCta = template?.intro?.cta;
  if (introCta && typeof introCta === 'object') {
    if (introCta.textOverrides) Object.keys(introCta.textOverrides).forEach((s) => slugs.add(s));
    if (introCta.hrefOverrides) Object.keys(introCta.hrefOverrides).forEach((s) => slugs.add(s));
  }

  for (const category of template?.categories ?? []) {
    if (category?.nameOverrides) {
      Object.keys(category.nameOverrides).forEach((s) => slugs.add(s));
    }
    if (category?.hrefOverrides) {
      Object.keys(category.hrefOverrides).forEach((s) => slugs.add(s));
    }
    if(!category?.tiles?.[Symbol.iterator]) continue;
    for (const tile of category?.tiles ?? []) {
      if (tile?.hrefOverrides) {
        Object.keys(tile.hrefOverrides).forEach((s) => slugs.add(s));
      }
    }
  }

  for (const value of Object.values(template?.links ?? {})) {
    if (value && typeof value === 'object' && !('src' in value) && !('href' in value) && !('query' in value)) {
      Object.keys(value).forEach((s) => slugs.add(s));
    }
  }

  return slugs;
}
