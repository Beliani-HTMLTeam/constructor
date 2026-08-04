import { Space } from './Space.js';
import { ImageWithLink } from './ImageWithLink.js';
import { Paragraph } from './Paragraph.js';
import { CTA } from './CTA.js';
import type { RenderType } from '@/types/thursday';

export interface ProloTimerProps {
  /** Timer section title (first line). */
  title: string;
  /** Timer section subtitle (second line). */
  subtitle: string;
  /** Link target for the countdown image/placeholder and CTA. */
  href: string;
  /** Countdown GIF URL (newsletter surface only). */
  src: string;
  /** Timer digit/label colour and general text colour. */
  color?: string;
  /** Section background colour. */
  background?: string;
  /** Background colour for each time-unit box (landing-page surface); defaults to `background`. */
  unitBackground?: string;
  /** Optional teaser image (or `{src}` wrapper) shown below the CTA. */
  freebies?: string | { src: string };
  /** CTA label text. */
  ctaText: string;
  /** Which surface is being rendered; determines GIF vs. live `<script>` countdown. */
  type: RenderType;
  /** Client-side countdown `<script>` HTML (landing-page surface only), from `buildProloTimerScript`. */
  script?: string;
}

/**
 * Live countdown-timer section (Prologistics-generated). On the newsletter surface it
 * embeds a server-rendered countdown GIF (`src`, built in `handlers/_Timer.ts` from a
 * `timer.gif` URL); on the landing-page surface it renders a `#prolo-timer` placeholder
 * that `script` (a self-contained client-side countdown, see `buildProloTimerScript` in
 * `handlers/_Timer.ts`) fills in and keeps ticking every second.
 */
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
  script = ''
}: ProloTimerProps): string => {
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
          
            ${ImageWithLink({ insideTr: true, src: typeof freebies === 'object' ? freebies.src : (freebies as string), href: href, alt: 'Freebies Image' })}

            `
              : `${Space({ insideTr: true, className: 'newsletterBottom10px' })}`
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
