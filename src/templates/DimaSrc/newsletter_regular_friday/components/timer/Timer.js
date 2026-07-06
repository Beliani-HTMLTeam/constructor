import { CTA } from '../CTA.js';
import { ImageWithLink } from '../ImageWithLink.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';
import { TimerGif } from './TimerGif.js';
import { TimerHtml } from './TimerHtml.js';
import { getTimerLabels, getTimerLabelsSync } from './TimerLabels.js';
import { getTimerConfig } from '../../utils/timerConfig.js';

export const Timer = async ({
  timer, // The complete timer object
  type, // 'newsletter' or 'landing'
  country,
  title = '',
  subtitle = '',
  href = '#',
  ctaText = 'Shop now',
  spaceAfter = null,
  spaceWithoutCTA = 'newsletterBottom35px',
  containerId = 'prolo-timer',
  useDynamicLabels = true,
}) => {
  // Get full config for this country
  const config = getTimerConfig(country, timer?.overrides || {});
  
  // Get labels
  let labels;
  if (useDynamicLabels) {
    labels = await getTimerLabels(config.lang);
  } else {
    labels = getTimerLabelsSync(config.lang);
  }
  
  const [dayLabel, hourLabel, minLabel, secLabel] = labels || ['days', 'h', 'm', 's'];
  
  // Use timer values with fallbacks
  const timerBg = timer?.timerBg || TIMER_DEFAULTS.bg;
  const timerColor = timer?.timerColor || TIMER_DEFAULTS.color;
  const timerLabel = timer?.timerLabel || TIMER_DEFAULTS.label;
  const background = timer?.background || TIMER_DEFAULTS.background;
  const textColor = timer?.color || TIMER_DEFAULTS.textColor;
  const deadline = timer?.deadline || TIMER_DEFAULTS.deadline;
  const isCtaVisible = timer?.isCtaVisible !== undefined ? timer.isCtaVisible : true;
  const freebies = timer?.freebies || null;
  
  let timerContent = '';
  
  if (type === 'newsletter') {
    timerContent = TimerGif({
      deadline: deadline,
      timezone: config.timezone,
      lang: config.lang,
      bg: timerBg.replace('#', ''),
      color: timerColor.replace('#', ''),
      label: timerLabel.replace('#', ''),
      background: background.replace('#', ''),
      uid: 'USER_ID',
      href: href,
    });
  } else {
    timerContent = TimerHtml({
      deadline: deadline,
      timezone: config.timezone,
      bg: timerBg,
      color: timerColor,
      label: timerLabel,
      containerId: containerId,
      dayLabel,
      hourLabel,
      minLabel,
      secLabel,
      showLoading: false,
    });
  }

  return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" align="center" style="color: ${textColor}; background-color: ${background};">
          ${title && subtitle ? Space({ insideTr: true, className: 'newsletterBottom10px' }) : ''}
          
          ${title ? `
            <tr>
              <td align="center" class="newsletterContainer">
                ${Paragraph({
                  text: title,
                  tableContainer: true,
                  className: 'newsletterSubtitleTimer',
                  spanStyle: `color: ${textColor}`,
                  align: 'center',
                })}
              </td>
            </tr>
          ` : ''}
          
          ${subtitle ? `
            <tr>
              <td align="center" class="newsletterContainer">
                ${Paragraph({
                  text: subtitle,
                  tableContainer: true,
                  className: 'newsletterSubtitleTimer',
                  spanStyle: `color: ${textColor}`,
                  align: 'center',
                })}
              </td>
            </tr>
          ` : ''}

          ${title && subtitle ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}

          ${timerContent}

          ${Space({ insideTr: true, className: isCtaVisible ? 'newsletterBottom20px' : spaceWithoutCTA })}

          ${isCtaVisible ? CTA({
            color: textColor,
            href: href,
            text: ctaText,
            align: 'center',
            insideTr: true,
            background: background,
          }) : ''}
          
          ${freebies ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
            ${ImageWithLink({ insideTr: true, src: freebies, href: href, alt: 'Freebies Image' })}
          ` : `${Space({ insideTr: true, className: 'newsletterBottom15px' })}`}
        </table>
      </td>
    </tr>
    ${spaceAfter ? Space({ insideTr: true, className: spaceAfter }) : ''}
  `;
};