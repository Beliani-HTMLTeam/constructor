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
  unitBackground,
  freebies,
  ctaText,
  type,
  showCta = true,
  spaceTop = 'newsletterBottom10px',
  spaceBottom = 'newsletterBottom10px',
  container = null,
  script = ''
}) => {
  // without an explicit container the old 20px td + 20px paragraph nesting is kept
  const containerClass = container ?? 'newsletterContainer';
  const paragraphContainer = container ? false : true;
  // console.log("Timer Component:", { title, subtitle, href, src, color, background, freebies, ctaText });

  return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="color: ${color}; background-color: ${background};">
          ${Space({ insideTr: true, className: spaceTop })}
          
          <tr>
            <td align="center" class="${containerClass}">
              ${Paragraph({
                text: title,
                tableContainer: paragraphContainer,
                className: 'newsletterSubtitleTimer',
                spanStyle: `color: ${color}`,
                align: 'center',
              })}
            </td>
          </tr>
          
          
          <tr>
            <td align="center" class="${containerClass}">
              ${Paragraph({
                text: subtitle,
                tableContainer: paragraphContainer,
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

          ${showCta
            ? `
          ${Space({ insideTr: true, className: 'newsletterBottom20px' })}

          ${CTA({
            href: href,
            text: ctaText,
            color: color,
            align: 'center',
            insideTr: true,
          })}
          `
            : ''}
          
          ${
            freebies
              ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
          
            ${ImageWithLink({ insideTr: true, src: freebies, href: href, alt: 'Freebies Image' })}  

            `
              : `${Space({ insideTr: true, className: spaceBottom })}`
          }

          ${script}

          <style>
            :root {
              --timer-bg: ${background};
              --timer-unit-bg: ${unitBackground ?? background};
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
