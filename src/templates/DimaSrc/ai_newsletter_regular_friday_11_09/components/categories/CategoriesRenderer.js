import { Grid4TilesRenderer } from './Grid4TilesRenderer';
import { TwoColumnsGridRenderer } from './TwoColumnsGridRenderer';
import { FullWidthTilesRenderer } from './FullWidthTilesRenderer';
import { SmallTilesRenderer } from './SmallTilesRenderer';
import BigGrid from '../../category/biggrid';

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
    categories_type !== 'liquidator' && categories_type !== 'small-tiles' && categories_type !== 'biggrid'
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

  if (categories_type === "biggrid") {
    console.log("before", categories)
  return BigGrid({
    categories: categories[0]?.categories,
    background: categories[0]?.background || background,

    getTitle: (item) =>
      getCategoryTitle(item.name, country),

    getHref: (item) =>
      add_utm(item.href),

    getCtaText: () =>
      getPhrase('Shop now'),
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

  if (categories_type === 'small-tiles') {
    return SmallTilesRenderer({
      categories,
      getCategoryLink,
      getCategoryTitle,
      country,
      background: background
    });
  }

  return '';
};