import { FullWidthTiles } from '../../category/fullWidthTiles';
import { Space } from '../Space';

export const FullWidthTilesRenderer = ({
  categories,
  getCategoryLink,
  getCategoryTitle,
  background,
}) => {
  return `
    <tr>
      <td style="background-color: ${background};" class="newsletterContainer">
        ${FullWidthTiles({
          tiles: categories,
          getCategoryLink,
          getCategoryTitle,
        })}
        ${Space({ className: 'newsletterBottom80px' })}
      </td>
    </tr>
  `;
};