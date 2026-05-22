import { Space } from '../components/Space';

export const liquidatorConditions = ({
  category,
    color,
  background,
}) => {
  let productsInnerHtml = '';

  console.log('liquidatorConditions', category);

  let conditions = category.conditions;

  if (Array.isArray(conditions)) {
    productsInnerHtml += `
    <tr>
      <td style="color: ${color}; background: ${background};" class="newsletterMiniContainer">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>`;

    // Calculate width for each image (3 columns)
    const imageWidth = 100 / 3; // 33.333%

    for (let i = 0; i < conditions.length; i++) {
      const product = conditions[i];
      const isFirst = i === 0;
      const isLast = i === conditions.length - 1;

      // Add right margin to all except last, add left margin to first and last
      let cellStyle = `width: ${imageWidth}%; vertical-align: top;`;

      productsInnerHtml += `<td style="color: ${color}; background: ${background}; padding: 0 5px;" width="${imageWidth}%">`;

      if (product) {
        productsInnerHtml += `
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td>
                <div>
                    <img alt="Condition" src="${product.src.src || product.src
          }" style="width:100%; max-width: 100%; display:block;" loading="lazy">
                </div>
              </td>
            </tr>
          </table>`;
      }

      productsInnerHtml += '</td>';
    }

    
    productsInnerHtml += '</tr></table></td></tr>';
    
  }

  if (category.spaceAfter) {
    productsInnerHtml += `${Space({ insideTr: true, className: category.spaceAfter, backgroundColor: background })}`;
  }

  return productsInnerHtml;
};