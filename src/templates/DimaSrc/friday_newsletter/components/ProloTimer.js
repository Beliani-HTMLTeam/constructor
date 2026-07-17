
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
  type,
  script = ''
}) => {
  // console.log("Timer Component:", { title, subtitle, href, src, color, background, freebies, ctaText });

  return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="color: ${color}; background-color: ${background};">
          ${Space({ insideTr: true, className: 'newsletterBottom10px' })}
          
          <tr>
            <td align="center" class="newsletterContainer">
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
            <td align="center" class="newsletterContainer">
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

          ${type === 'newsletter' ? 
            ImageWithLink({
              href: href,
              src: src,
              insideTr: true,
              tdClass: 'newsletterContainer60px',
            })
            : 
            `<tr><td class="newsletterContainer60px" align="center" vAlign="middle"><a style="color: ${color}; text-decoration: none;" href="${href}"><div id="prolo-timer">Loading...</div></a></td></tr>`
          }

          ${Space({ insideTr: true, className: 'newsletterBottom20px' })}

          ${CTA({
            href: href,
            text: ctaText,
            color: color,
            align: 'center',
            insideTr: true,
          })}
          
          ${
            freebies
              ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
          
            ${ImageWithLink({ insideTr: true, src: freebies, href: href, alt: 'Freebies Image' })}  

            `
              : `${Space({ insideTr: true, className: 'newsletterBottom10px' })}`
          }

          ${script}

          <style>
            :root {
              // --timer-bg: ${background};
              --timer-bg: #EAD9D9;
              --timer-numbers: ${color};
              --timer-label: ${color};
            }
          </style>
        </table>
      </td>
    </tr>
  `;
};

export { Timer };
