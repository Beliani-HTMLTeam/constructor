import { Space } from './Space.js';
import { ImageWithLink } from './ImageWithLink.js';
import { Paragraph } from './Paragraph.js';
import { CTA } from './CTA.js';

export interface LegacyTimerProps {
  /** Timer section title (first line). */
  title: string;
  /** Timer section subtitle (second line). */
  subtitle: string;
  /** Link target for the banner image and CTA. */
  href: string;
  /** Banner image source. */
  src: string;
  /** Text colour. */
  color?: string;
  /** Section background colour. */
  background?: string;
  /** Optional teaser image (or `{src}` wrapper) shown below the CTA. */
  freebies?: string | { src: string };
  /** CTA label text. */
  ctaText: string;
}

/**
 * Legacy countdown-timer section: title/subtitle, a static banner image, a text CTA,
 * and an optional freebies teaser image. Superseded by `components/ProloTimer.ts` for
 * campaigns with a live countdown, but kept for campaigns that only need a static banner.
 */
const Timer = ({
  title,
  subtitle,
  href,
  src,
  color = '#000000',
  background = 'white',
  freebies,
  ctaText,
}: LegacyTimerProps): string => {
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
            color: color,
            align: 'center',
            insideTr: true,
          })}
          
          ${
            freebies
              ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
          
            ${ImageWithLink({ insideTr: true, src: typeof freebies === 'object' ? freebies.src : freebies, href: href, alt: 'Freebies Image' })}  

            `
              : `${Space({ insideTr: true, className: 'newsletterBottom10px' })}`
          }
        </table>
      </td>
    </tr>
  `;
};

export { Timer };
