import { CategoriesProcessor } from './CategoriesProcessor';
import { CategoriesMapper } from './CategoriesMapper';
import { CategoriesRenderer } from './CategoriesRenderer';

export const CategoriesWrapper = async ({
  categories,
  categories_type,
  categories_line,
  country,
  queries,
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  getProductById,
  add_utm,
  background,
}) => {
  // Step 1: Process categories with products
  const processedCategories = await CategoriesProcessor({
    categories,
    categories_type,
    country,
    getProductById,
    add_utm,
  });

  // Step 2: Map categories with overrides
  const mappedCategories = CategoriesMapper({
    categories: processedCategories,
    country,
    queries,
    add_utm,
    getCategoryLink,
    getCategoryTitle,
  });

  // Step 3: Render the appropriate category type
  return await CategoriesRenderer({
    categories: mappedCategories,
    categories_type,
    categories_line,
    country,
    queries,
    getPhrase,
    getCategoryLink,
    getCategoryTitle,
    add_utm,
    background,
  });
};