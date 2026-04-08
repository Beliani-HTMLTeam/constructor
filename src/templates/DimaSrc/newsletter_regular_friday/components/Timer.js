import { Space } from './Space.js';
import { ImageWithLink } from './ImageWithLink.js';
import { Paragraph } from './Paragraph.js';
import { CTA } from './CTA.js';

const Timer = ({
  title,
  subtitle,
  href,
  src,
  color = '#000000',
  background = 'white',
  freebies,
  isCtaVisible,
  ctaText,
  spaceAfter = '',
  spaceWithoutCTA = 'newsletterBottom35px'
}) => {
  // console.log("Timer Component:", { title, subtitle, href, src, color, background, freebies, ctaText });

  return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" align="center" style="color: ${color}; background-color: ${background};">
          ${title && subtitle && Space({ insideTr: true, className: 'newsletterBottom10px' })}
          
          <tr>
            <td align="center" class="newsletterContainer">
              ${
                title
                  ? Paragraph({
                      text: title,
                      tableContainer: true,
                      className: 'newsletterSubtitleTimer',
                      spanStyle: `color: ${color}`,
                      align: 'center',
                    })
                  : ''
              }
            </td>
          </tr>
          
          
          <tr>
            <td align="center" class="newsletterContainer">
              ${
                subtitle
                  ? Paragraph({
                      text: subtitle,
                      tableContainer: true,
                      className: 'newsletterSubtitleTimer',
                      spanStyle: `color: ${color}`,
                      align: 'center',
                    })
                  : ''
              }
            </td>
          </tr>

          ${title && subtitle ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}

          ${ImageWithLink({
            href: href,
            src: src,
            insideTr: true,
            tdClass: 'newsletterContainer60px',
          })}

          ${Space({ insideTr: true, className: isCtaVisible ? 'newsletterBottom20px' : spaceWithoutCTA })}

          ${
            isCtaVisible
              ? CTA({
                  color: color,
                  href: href,
                  text: ctaText,
                  align: 'center',
                  insideTr: true,
                  background: background,
                })
              : ''
          }
          
          ${
            freebies
              ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
          
            ${ImageWithLink({ insideTr: true, src: freebies, href: href, alt: 'Freebies Image' })}  

            `
              : `${Space({ insideTr: true, className: 'newsletterBottom15px' })}`
          }
        </table>
      </td>
    </tr>
    ${spaceAfter ? Space({ insideTr: true, className: spaceAfter }) : ''}
  `;
};

export { Timer };
