import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { templates as TopImageTitleTemplates } from './utils/topImageTitle/templates.js';
import { getImageUrl } from '../../../../utils/ImageManager.js';

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
  intro,
  country
}) => {
  console.log("introData", intro)
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
                ? renderType === 'newsletter' && intro?.cta?.newsletter?.src
                  ? `
                    
                       ${ImageWithLink({
                          href: href,
                          src: getImageUrl(`${country.toLowerCase()}_${intro?.cta?.newsletter?.src}.png`, true),
                          tdClass: 'newsletterRight150px',
                          insideTr: true,
                          align: 'left',
                        })}
                     
                  `
                  : renderType === 'landing'
                    ? `
                      <tr>
                        <td align="left">
                          <a
                            href="${href}"
                            style="
                              background-color:${intro?.cta?.landing?.background || '#FFCCB7'};
                              color:${intro?.cta?.landing?.color || '#750000'};
                            "
                            class="newsletterTopButton"
                          >
                            ${ctaText}
                          </a>
                        </td>
                      </tr>
                    `
                    : ''
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

  return '';
};

export { TopImageTitle };
