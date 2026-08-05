import { Space } from './Space.js';
import { templates as TopImageTitleTemplates } from './utils/topImageTitle/templates.js';

const TopImageTitle = ({
  href,
  src,
  subtitle,
  title1,
  title2,
  title3,
  introText,
  ctaText = 'Shop now',
  color = '#FFCCB7',
  titleColor = '#FFFFFF',
  backgroundColor = '#750000',
  type,
  renderType,
  className,
}) => {
  // HTML Header Section (Subtitle + Title + Intro Paragraph + CTA button)
  if (subtitle || title1 || title2 || title3 || introText) {
    const bg = backgroundColor || '#750000';
    const textColor = color || '#FFCCB7';
    const headingColor = titleColor || '#FFFFFF';

    return `
    <tr>
    <td style="background-color: ${bg}; color: ${textColor};" class="newsletterContainer40px" align="left">
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${Space({className: 'newsletterBottom30px', insideTr: true, backgroundColor: bg})}
    ${
      subtitle
                ? `
              <tr>
                <td align="left">
                  <span style="color: ${textColor}; display: block;" class="newsletterSubtitle">
                    ${subtitle}
                  </span>
                </td>
              </tr>
              ${Space({ insideTr: true, className: 'newsletterBottom10px', backgroundColor: bg })}
            `
                : ''
            }

            ${
              title1
                ? `
              <tr>
                <td align="left">
                  <span style="color: ${headingColor}; display: block;" class="newsletterTopTitle">
                    ${title1}
                  </span>
                </td>
              </tr>
              
            `
                : ''
            }

            ${
              title2
                ? `
              <tr>
                <td align="left">
                  <span style="color: ${headingColor};  display: block;" class="newsletterTopTitle">
                    ${title2}
                  </span>
                </td>
              </tr>
              ${Space({ insideTr: true, className: 'newsletterBottom15px', backgroundColor: bg })}
            `
                : ''
            }
          
            ${
              introText
                ? `
              <tr>
                <td align="left">
                  <span style="color: ${textColor};" class="newsletterParagraph">
                    ${introText}
                  </span>
                </td>
              </tr>
              ${Space({ insideTr: true, className: 'newsletterBottom20px', backgroundColor: bg })}
            `
                : ''
            }

            ${
              href
                ? `
              <tr>
                <td align="left" style="font-family: 'Open Sans', Arial, sans-serif;">
                  <table cellspacing="0" cellpadding="0" border="0" align="left">
                    <tr>
                      <td align="center" style="background-color: #FFFFFF; border-radius: 4px; padding: 10px 22px;">
                        <a href="${href}" style="color: ${bg}; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; font-weight: 700; text-decoration: none; display: inline-block;">
                          <span style="color: ${bg}; text-decoration: none;">${ctaText}</span>
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            `
                : ''
            }
            ${Space({className: 'newsletterBottom25px', insideTr: true, backgroundColor: bg})}

          </table>
        </td>
      </tr>
    `;
  }

  // if (renderType === 'landing') {
  //   const templates = TopImageTitleTemplates({ color, title1, title2, title3 });
  //   return `
  //     ${Space({ insideTr: true, backgroundColor })}
  //     <tr>
  //       <td style="color: ${color}; background: ${backgroundColor};" class="newsletterContainer">
  //         <a style="color: ${color}" class="newsletterHrefTit" href="${href}">
  //           ${templates[type] || 'Invalid type'}
  //         </a>
  //       </td>
  //     </tr>

  //     ${className || className === '' ? Space({ insideTr: true, className, backgroundColor }) : Space({ insideTr: true, backgroundColor })}
  //   `;
  // }

  if (src) {
    return `
      <tr>
        <td style="line-height: 0; font-size: 0; padding: 0;">
          <a href="${href}" style="display: block; text-decoration: none;">
            <img alt="Top Image Title" src="${src}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy">
          </a>
        </td>
      </tr>`;
  }

  return '';
};

export { TopImageTitle };
