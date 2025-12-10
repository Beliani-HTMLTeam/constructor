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
  ctaText,
}) => {
  // console.log("Timer Component:", { title, subtitle, href, src, color, background, freebies, ctaText });

  return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" align="center" style="color: ${color}; background-color: ${background};">
          ${Space({ insideTr: true, className: 'newsletterBottom10px' })}
          
          <tr>
            <td align="center">
              ${Paragraph({
                text: title,
                tableContainer: true,
                className: 'newsletterSubtitleTimer',
                spanStyle: `color: ${color}`,
                align: 'center',
              })}
            </td>
          </tr>
          
          
          <tr>
            <td align="center">
              ${Paragraph({
                text: subtitle,
                tableContainer: true,
                className: 'newsletterSubtitleTimer',
                spanStyle: `color: ${color}`,
                align: 'center',
              })}
            </td>
          </tr>

          ${Space({ insideTr: true, className: 'newsletterBottom20px' })}

          ${ImageWithLink({
            href: href,
            src: src,
            insideTr: true,
            tdClass: 'newsletterContainer60px',
          })}

          ${Space({ insideTr: true, className: 'newsletterBottom20px' })}

          ${CTA({
            href: href,
            text: ctaText,
            align: 'center',
            insideTr: true,
          })}
          
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
  `;
};

export { Timer };
