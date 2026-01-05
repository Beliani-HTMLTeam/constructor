import { CTA } from "./CTA";
import { ImageWithLink } from "./ImageWithLink";
import { Paragraph } from "./Paragraph";
import { Space } from "./Space";

const GiftCard = ({
  title,
  href,
  image_src,
  color = '#000000',
  background = 'white',
  paragraph,
  isCtaVisible,
  ctaText,
  spaceAfter = '',
}) => {
  // console.log("Timer Component:", { title, subtitle, href, src, color, background, freebies, ctaText });

  return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" align="center" style="color: ${color}; background-color: ${background};">
          ${title && Space({ insideTr: true, className: 'newsletterBottom35px' })}
          ${title && ` <tr>
          <td class="newsletterContainer" style="text-align: center;">
            ${Paragraph({
              text: title,
              color: color,
              background: background,
              align: 'center',
              className: 'newsletterAditionalTitle',
            })}
          </td>
        </tr>`}
        ${title && Space({ insideTr: true, className: 'newsletterBottom35px' })}
          ${
            image_src
            ? ImageWithLink({
              src: image_src,
              insideTr: true,
              href: href
            })
            : ''
          }
          ${image_src && Space({ insideTr: true, className: 'newsletterBottom35px' })}
          
          
          <tr>
            <td align="center" class="newsletterContainer">
              ${
                paragraph
                  ? Paragraph({
                      text: paragraph,
                      spanStyle: `color: ${color}`,
                      align: 'center',
                    })
                  : ''
              }
            </td>
          </tr>

          ${paragraph && isCtaVisible ? Space({ insideTr: true, className: 'newsletterBottom35px'  }) : ''}

          ${
            isCtaVisible
              ? CTA({
                  href: href,
                  text: ctaText,
                  align: 'center',
                  insideTr: true,
                })
              : ''
          }
        </table>
      </td>
    </tr>
    ${spaceAfter ? Space({ insideTr: true, className: spaceAfter }) : ''}
  `;
};

export { GiftCard };
