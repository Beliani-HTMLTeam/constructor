let productsSortOrder = 'newest'; // 'newest' | 'oldest'
let productsVisibilityFilter = 'loaded'; // 'loaded' | 'all'

export function getProductsSortOrder() {
  return productsSortOrder;
}

export function setProductsSortOrder(next) {
  productsSortOrder = next === 'oldest' ? 'oldest' : 'newest';
}

export function getProductsVisibilityFilter() {
  return productsVisibilityFilter;
}

export function setProductsVisibilityFilter(next) {
  productsVisibilityFilter = next === 'all' ? 'all' : 'loaded';
}
