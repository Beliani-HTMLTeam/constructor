import { Grid4TilesRenderer } from './Grid4TilesRenderer';
import { TwoColumnsGridRenderer } from './TwoColumnsGridRenderer';
import { FullWidthTilesRenderer } from './FullWidthTilesRenderer';

export const CategoriesRenderer = async ({
  categories,
  categories_type,
  categories_line,
  country,
  queries,
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  add_utm,
  background,
}) => {
  // No categories
  if (!categories) {
    return '';
  }

  // Grid 4 tiles (default)
  if (
    categories_type !== 'twoColumnsGrid' &&
    categories_type !== 'fullWidthTiles' &&
    categories_type !== 'liquidator'
  ) {
    return await Grid4TilesRenderer({
      categories,
      categories_line,
      country,
      queries,
      getPhrase,
      getCategoryLink,
      getCategoryTitle,
      add_utm,
    });
  }

  // Two columns grid
  if (categories_type === 'twoColumnsGrid') {
    return TwoColumnsGridRenderer({
      categories,
      getCategoryLink,
      getCategoryTitle,
      background,
    });
  }

  // Full width tiles
  if (categories_type === 'fullWidthTiles') {
    return FullWidthTilesRenderer({
      categories,
      getCategoryLink,
      getCategoryTitle,
      background,
    });
  }

  return '';
};