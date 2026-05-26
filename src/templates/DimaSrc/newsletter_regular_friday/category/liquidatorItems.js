import { Space } from '../components/Space';

export const liquidatorItems = ({
  category,
  color,
  background,
}) => {
  let productsInnerHtml = '';
  console.log('liquidatorItems', category);

  let items = category.items;

  if (Array.isArray(items) && items.length > 0) {
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}; background: ${background};">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 650px;">
          <tr>`;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // Image TD
      productsInnerHtml += `
        <td >
          ${item ? `
            <img 
              alt="Item" 
              src="${item.src.src || item.src}" 
              style="width:100%; max-width: 100%; display:block;" 
              loading="lazy"
            >
          ` : ''}
        </td>`;
    }

    productsInnerHtml += `
          </tr>
        </table>
      </td>
    </tr>`;

    // Add space after if needed
    if (category.spaceAfter) {
      productsInnerHtml += `${Space({
        insideTr: true,
        className: category.spaceAfter,
        backgroundColor: background
      })}`;
    }
  }

  return productsInnerHtml;
};