import { Categories } from '../components/Categories.js';

const enrichProductEntry = async ({ product, getProductById, getCategoryLink }) => {
  try {
    if (!product) return null;

    const normalizedHref =
      product.href && typeof getCategoryLink === 'function' ? getCategoryLink(product.href) : product.href;

    if (typeof getProductById !== 'function') {
      return normalizedHref ? { ...product, href: normalizedHref } : product;
    }

    const fetchedProduct = await getProductById(product.id, product.src);
    if (!fetchedProduct) return null;

    return normalizedHref ? { ...product, ...fetchedProduct, href: normalizedHref } : { ...product, ...fetchedProduct };
  } catch (err) {
    console.error('getProductById error for', product, err);
    return null;
  }
};

const enrichCategoryProducts = async ({ category, getProductById, getCategoryLink }) => {
  const productEntries = Array.isArray(category?.products) ? category.products : [];
  const products = await Promise.all(
    productEntries.map((product) => enrichProductEntry({ product, getProductById, getCategoryLink }))
  );

  const freebiesRows = Array.isArray(category?.freebies)
    ? category.freebies
    : Array.isArray(category?.freebies?.rows)
      ? category.freebies.rows
      : [];
  const enrichedFreebiesRows = await Promise.all(
    freebiesRows.map(async (row) => {
      if (!Array.isArray(row)) return [];

      return Promise.all(row.map((product) => enrichProductEntry({ product, getProductById, getCategoryLink })));
    })
  );

  return {
    ...category,
    products: products.filter(Boolean),
    freebies: category?.freebies ? enrichedFreebiesRows : category?.freebies,
  };
};

const normalizeCategoryForRender = ({ category, index, queries, getCategoryTitle, getCategoryLink, add_utm }) => {
  const name = queries?.categories?.[index]
    ? queries.categories[index]
    : category?.name
      ? getCategoryTitle(category.name)
      : category?.name;

  let href = '';
  if (queries?.categoryLinks?.[index]) {
    href = add_utm(queries.categoryLinks[index]);
  } else if (category?.href) {
    href = typeof category.href === 'string' ? getCategoryLink(category.href) : add_utm(category.href?.href);
  }

  let src = category?.src;
  if (src && typeof src === 'object') {
    src = src.src;
  }

  return {
    ...category,
    href,
    name,
    src,
  };
};

export const CategoriesHandler = async ({
  categories,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  queries,
  add_utm,
  links,
  type,
  country,
  getPhrase,
}) => {
  const safeCategories = Array.isArray(categories) ? categories : [];
  if (safeCategories.length === 0) {
    return '';
  }

  const categoriesWithProducts = await Promise.all(
    safeCategories.map((category) => enrichCategoryProducts({ category, getProductById, getCategoryLink }))
  );

  const source = categoriesWithProducts.length > 0 ? categoriesWithProducts : safeCategories;
  const categoriesForRender = source.map((category, index) =>
    normalizeCategoryForRender({
      category,
      index,
      queries,
      getCategoryTitle,
      getCategoryLink,
      add_utm,
    })
  );

  return Categories({
    getPhrase,
    getCategoryLink,
    getCategoryTitle,
    categories: categoriesForRender,
    queries,
    add_utm,
    links,
    type,
    country,
  });
};
