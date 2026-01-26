let productsSortOrder = 'newest'; // 'newest' | 'oldest'

export function getProductsSortOrder() {
  return productsSortOrder;
}

export function setProductsSortOrder(next) {
  productsSortOrder = next === 'oldest' ? 'oldest' : 'newest';
}
