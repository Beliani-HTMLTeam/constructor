export const getProductHrefWithOverride = (product, country, defaultHref) => {
  // Priority 1: Check for hrefOverride on the product
  if (product.hrefOverride?.[country]) {
    return product.hrefOverride[country];
  }
  
  // Priority 2: Use product.href
  if (product.href) {
    return product.href;
  }
  
  // Priority 3: Fallback to default
  return defaultHref || product.href;
};