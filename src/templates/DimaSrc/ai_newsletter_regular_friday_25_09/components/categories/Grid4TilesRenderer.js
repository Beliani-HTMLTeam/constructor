import { Categories } from '../Categories';

export const Grid4TilesRenderer = async ({
  categories,
  categories_line,
  country,
  queries,
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  add_utm,
}) => {
  return await Categories({
    getPhrase,
    getCategoryLink,
    getCategoryTitle,
    categories,
    categories_line,
    queries,
    add_utm,
    country,
  });
};