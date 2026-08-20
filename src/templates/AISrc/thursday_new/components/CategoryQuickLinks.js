import { Space } from './Space.js';

export const CategoryQuickLinks = ({
  linksList = [
    { name: 'Sofas', href: 'https://www.beliani.ch/living-room-furniture/sofas/' },
    { name: 'Beds', href: 'https://www.beliani.ch/bedroom-furniture/beds/' },
    { name: 'Armchairs', href: 'https://www.beliani.ch/living-room-furniture/armchairs/' },
    { name: 'Tables', href: 'https://www.beliani.ch/tables/' },
    { name: 'Chairs', href: 'https://www.beliani.ch/chairs/' },
    { name: 'Storage', href: 'https://www.beliani.ch/storage/' },
    { name: 'Rugs', href: 'https://www.beliani.ch/rugs/' },
    { name: 'Lighting', href: 'https://www.beliani.ch/lighting/' },
  ],
  title = 'Explore all categories',
  getCategoryLink,
  getCategoryTitle,
  type = 'newsletter',
  theme = {},
}) => {
  if (!Array.isArray(linksList) || linksList.length === 0) return '';

  const cols = 2;
  let rowsHtml = '';

  for (let i = 0; i < linksList.length; i += cols) {
    rowsHtml += '<tr>';

    for (let c = 0; c < cols; c++) {
      const item = linksList[i + c];
      const isLeftCol = c === 0;

      rowsHtml += `<td width="50%" style="width: 50%; padding: 5px ${isLeftCol ? '5px' : '0'} 5px ${isLeftCol ? '0' : '5px'}; vertical-align: middle;">`;

      if (item) {
        const href = typeof getCategoryLink === 'function' && item.href ? getCategoryLink(item.href) : item.href || '#';
        const name = typeof getCategoryTitle === 'function' && item.name ? getCategoryTitle(item.name) : item.name || '';

        if (type === 'landing') {
          rowsHtml += `<a href="${href}" class="categoryLinkCard">${name}</a>`;
        } else {
          rowsHtml += `
            <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tr>
                <td align="center" bgcolor="#750000" style="background-color: #750000; border-radius: 4px; padding: 14px 10px;">
                  <a href="${href}" style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 14px; font-weight: bold; color: #ffffff !important; text-decoration: none; display: block; text-align: center; text-transform: uppercase;">
                    <span class="categoryLinkCard" style="color: #ffffff !important;">${name}</span>
                  </a>
                </td>
              </tr>
            </table>
          `;
        }
      }

      rowsHtml += '</td>';
    }

    rowsHtml += '</tr>';
  }

  return `
    <tr>
      <td style="background-color: #ffffff; padding: 30px 20px;" align="center">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          ${title ? `
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <span style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Georgia, serif;' : ''} font-size: 20px; font-weight: bold; color: #000000; display: block; text-align: center;">
                  ${title}
                </span>
              </td>
            </tr>
          ` : ''}
          <tr>
            <td>
              <table cellspacing="0" cellpadding="0" border="0" width="100%" class="categoryQuickLinksTable">
                ${rowsHtml}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
};
