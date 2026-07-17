import { Space } from '../Space';
import { FreebiesItem } from './FreebiesItem';

export const FreebiesSection = ({
  items,
  background,
  color,
  options = {},
}) => {
  if (!items || !Array.isArray(items) || items.length === 0) return '';

  const cols = options.cols || 3;
  const spaceAfter = options.spaceAfter || 'newsletterBottom35px';

  let html = '';
  
  // Split items into rows
  for (let i = 0; i < items.length; i += cols) {
    const rowItems = items.slice(i, i + cols);
    
    html += `
      <tr>
        ${rowItems.map(item => FreebiesItem({
          freebie: item,
          color,
          background,
        })).join('')}
        ${rowItems.length < cols ? `<td style="width: ${100 - (rowItems.length / cols * 100)}%;"></td>` : ''}
      </tr>
    `;
    
    html += Space({ insideTr: true, className: spaceAfter });
  }

  return html;
};