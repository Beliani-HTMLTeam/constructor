import { FreebiesSection } from './FreebiesSection';
import { Space } from '../Space';

export const FreebiesRenderer = ({
  freebies,
  background,
  color,
}) => {
  if (!freebies) return '';

  const { items, items2, options = {} } = freebies;

  const backgroundColor = options.background || background;
  const textColor = options.color || color;
  const space = options.space || 'newsletterBottom35px';

  let html = '';

  // Render first section
  if (items && items.length > 0) {
    html += `
      <tr>
        <td style="background-color: ${backgroundColor}; color: ${textColor};">
          <table cellspacing="0" cellpadding="0" width="100%">
            ${FreebiesSection({
              items,
              background: backgroundColor,
              color: textColor,
              options: options.section1 || options,
            })}
          </table>
        </td>
      </tr>
    `;
  }

  // Render second section
  if (items2 && items2.length > 0) {
    html += `
      <tr>
        <td style="background-color: ${backgroundColor}; color: ${textColor};">
          <table cellspacing="0" cellpadding="0" width="100%">
            ${FreebiesSection({
              items: items2,
              background: backgroundColor,
              color: textColor,
              options: options.section2 || options,
            })}
          </table>
        </td>
      </tr>
    `;
  }

  // Add spacing after freebies
  if (items || items2) {
    html += `
      <tr>
        <td style="background-color: ${backgroundColor}; color: ${textColor};">
          ${Space({ className: space })}
        </td>
      </tr>
    `;
  }

  return html;
};