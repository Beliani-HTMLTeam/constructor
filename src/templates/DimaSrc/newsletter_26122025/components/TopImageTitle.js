import { includesKeywords } from '../utils/basic.js';
import { Space } from './Space.js';
import { templates as TopImageTitleTemplates } from './utils/topImageTitle/templates.js';

const TopImageTitle = ({ href, src, title1, title2, color, type, renderType }) => {
  const templates = TopImageTitleTemplates({ color, title1, title2 });

  if (renderType === 'landing') {
    return `
      ${Space({ insideTr: true })}
      <tr>
        <td style="color: ${color}" class="newsletterContainer">
          <a style="color: ${color}" class="newsletterHrefTit" href="${href}">
            ${templates[type] || 'Invalid type'}
          </a>
        </td>
      </tr>

      ${Space({ insideTr: true })}
    `;
  }

  return `
    <tr>
      <td style="line-height: 0; font-size: 0; padding: 0;">
        <a href="${href}" style="display: block; text-decoration: none;">
          <img alt="Top Image Title" src="${src}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy">
        </a>
      </td>
    </tr>`;
};

export { TopImageTitle };
