import { templates as TopImageTitleTemplates } from './utils/topImageTitle/templates.js';


const TopImageWithTitle = ({
  href,
  imgSrc,
  title1, title2, title3,
  type,
  color = '#ffffff',
  backgroundColor = 'transparent',
  className,
}) => {
    const templates = TopImageTitleTemplates({ color, title1, title2, title3 });
  
  return `
    <tr>
      <td style="position: relative;" align="center" valign="top">
        
        <!-- Image -->
        <a href="${href}">
          <img 
            src="${imgSrc}" 
            alt="Top Image" 
            style="vertical-align: top; max-width: 100%; display: block;"
            loading="lazy"
            onload="this.parentElement.parentElement.querySelector('.title-overlay').style.opacity='1';"
          >
        </a>

        <!-- Title Overlay -->
        <div class="title-overlay newsletterContainer">
          <a 
            href="${href}" 
            style="color: ${color}; background: ${backgroundColor};"
            class="newsletterHrefTit"
          >
            ${templates[type] || 'Invalid type'}
          </a>
        </div>

      </td>
    </tr>

    
  `;
};

export { TopImageWithTitle };