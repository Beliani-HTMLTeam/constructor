import { FullWidthTiles } from '../../category/fullWidthTiles';
import { Space } from '../Space';
import { render } from '../../category/small-tiles';

export const SmallTilesRenderer = ({
  categories,
  getCategoryLink,
  getCategoryTitle,
  background,
  country
}) => {
  return `   
      ${
      categories.map((category) => {
        return render({
          tiles: category.tiles,
          color: category.color,
          getCategoryLink,
          getCategoryTitle,
          country
        });
      }).join('')
}
  `;
};