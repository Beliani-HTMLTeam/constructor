import { includesKeywords } from '../utils/basic.js';
import { Space } from './Space.js';
import { templates as TopImageTitleTemplates } from './utils/topImageTitle/templates.js';

const TopImageTitleWithoutLink = ({ src, title1, title2, title3, color, type, renderType, className, backgroundColor }) => {
  const templates = TopImageTitleTemplates({ color, title1, title2, title3 });

  if (renderType === 'landing') {
    return `
      ${Space({ insideTr: true, backgroundColor })}
      <tr>
        <td style="color: ${color}; background: ${backgroundColor};" class="newsletterContainer">
            ${templates[type] || 'Invalid type'}
        </td>
      </tr>

      ${className || className === '' ? Space({ insideTr: true, className, backgroundColor }) : Space({ insideTr: true, backgroundColor })}
    `;
  }

  return `
    <tr>
      <td style="line-height: 0; font-size: 0; padding: 0;">
          <a href="#"><img alt="Top Image Title" src="${src}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy"></a>
      </td>
    </tr>`;
};

export { TopImageTitleWithoutLink };
