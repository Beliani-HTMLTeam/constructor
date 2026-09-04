import { getCategoryName, getHrefWithOverride } from '../../utils/categories';
import { getProductHrefWithOverride } from '../../utils/products';

export const CategoriesMapper = ({
  categories,
  country,
  queries,
  add_utm,
  getCategoryLink,
  getCategoryTitle,
}) => {
  return categories.map((category, idx) => {
    const href = getHrefWithOverride(
      category,
      country,
      category.href,
      queries,
      idx,
      add_utm,
      getCategoryLink
    );
    
    const name = getCategoryName(category, idx, country, queries, getCategoryTitle);

    // Handle product href overrides if products exist
    const products = category.products && Array.isArray(category.products)
      ? category.products.map((product) => ({
          ...product,
          href: getProductHrefWithOverride(product, country, product.href),
        }))
      : category.products;

    return {
      ...category,
      href,
      name,
      products,
    };
  });
};