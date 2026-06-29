import { Space } from './Space.js';
import { ImageWithLink } from './ImageWithLink.js';
import { Paragraph } from './Paragraph.js';
import { CTA } from './CTA.js';

const Timer = ({
  queries,
 links,
 country,
 timer,
 getImageUrl,
 ctaText,
}) => {
  const {color,background, image, overrides, freebies, isCtaVisible, isWithTitles, spaceWithoutCTA, spaceAfter} = timer;
  const title = isWithTitles ? queries.timer[0] || 'Translation not found' : '';
  const subtitle = isWithTitles ? queries.timer[1] || 'Translation not found' : '';
  const href = links.Timer_href;
  const src = image[country];
  const freebiesSrc = overrides && overrides[country] ? getImageUrl(overrides[country], true) : freebies;

  // title: Inside.isWithTitles ? queries.timer[0] || 'Translation not found' : '',
  // // title: 'Free scatter cushions set',
  // subtitle: Inside.isWithTitles ? queries.timer[1] || 'Translation not found' : '',
  // // subtitle: 'deal ends in:',
  // href: links.Timer_href,
  // src: timer.image[country],
  // color: Inside.color,
  // background: Inside.backgroundColor,
  // freebies: timer.overrides && timer.overrides[country] ? getImageUrl(timer.overrides[country], true) : timer.freebies,
  // isCtaVisible: timer.isCtaVisible,
  // ctaText: shopNowPhrase,
  // spaceAfter: Inside.spaceAfter,
  // spaceWithoutCTA: Inside?.spaceWithoutCTA || 'newsletterBottom35px',

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
