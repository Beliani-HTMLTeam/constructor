import { Create2Columns_Grid } from '../Create2Columns_Grid';
import { render as category2Columns_Grid } from '../../category/category2Columns_Grid';

export const TwoColumnsGridRenderer = ({
  categories,
  getCategoryLink,
  getCategoryTitle,
  background,
}) => {
  return `
    <tr>
      <td style="background-color: ${background};" class="newsletterContainer">
        ${Create2Columns_Grid({
          shuffle: false,
          iter: categories,
          left: (categories) =>
            category2Columns_Grid({
              getCategoryLink,
              getCategoryTitle,
              categories,
              paddingStyle: 'padding-right:6px',
            }),
          right: (categories) =>
            category2Columns_Grid({
              getCategoryLink,
              getCategoryTitle,
              categories,
              paddingStyle: 'padding-left:6px',
            }),
        })}
      </td>
    </tr>
  `;
};