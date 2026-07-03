import { getCountryConfig } from '../utils/timerConfig.js';
import { CTA } from './CTA.js';
import { ImageWithLink } from './ImageWithLink.js';
import { Paragraph } from './Paragraph.js';
import { Space } from './Space.js';
import { TimerGif, TimerHtml, getTimerLabels, getTimerLabelsSync, getTimerConfig } from './timer/index.js';

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
  console.log("timer", timer)
  // Get labels
  const config = getCountryConfig(country);

  const finalConfig = {
    timezone: config?.timezone || 'Europe/Warsaw',
    lang: config?.lang || 'english',
    bg:  timer.timerBg || '#000000',
    color: timer.timerColor || '#ffffff',
    label:timer.timerLabel || '#000000',
    ...(timer?.overrides?.[country] || {}),
  };
  
  // Get labels
  let labels = getTimerLabelsSync(finalConfig.lang);
  
  const [dayLabel, hourLabel, minLabel, secLabel] = labels;
  
  // Generate timer content based on type
  let timerContent = '';
  if (type === 'newsletter') {
    // For newsletter: use GIF image (no scripts)
    const bg = (finalConfig.bg || '#000000').replace('#', '');
    const color = (finalConfig.color || '#ffffff').replace('#', '');
    const label = (finalConfig.label || '#000000').replace('#', '');
    const background = (timer?.background || '#FD9000').replace('#', '');
    
    const gifUrl = `https://www.prologistics.info/timer.gif?deadline=${timer?.deadline || '2026-07-10T23:59:00'}&timezone=${encodeURIComponent(finalConfig.timezone)}&lang=${finalConfig.lang}&bg=${bg}&color=${color}&label=${label}&background=${background}&uid=USER_ID`;
    
    timerContent = ImageWithLink({
      href: href,
      src: gifUrl,
      insideTr: true,
      tdClass: 'newsletterContainer60px',
    });
  } else {
    // For landing page: use HTML with scripts
    timerContent = TimerHtml({
      deadline: timer?.deadline || '2026-07-10T23:59:00',
      timezone: finalConfig.timezone,
      bg: finalConfig.bg || '#000000',
      color: finalConfig.color || '#ffffff',
      label: finalConfig.label || '#000000',
      containerId: containerId,
      dayLabel,
      hourLabel,
      minLabel,
      secLabel,
      showLoading: true,
    });
  }

  // Assemble the timer with proper fallbacks
  const timerColor = timer?.color || '#ffffff';
  const timerBackground = timer?.background || '#FD9000';
  const isCtaVisible = timer?.isCtaVisible !== undefined ? timer.isCtaVisible : true;
  const freebies = timer?.freebies || null;
  
  return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" align="center" style="color: ${timerColor}; background-color: ${timerBackground};">
          ${title && subtitle ? Space({ insideTr: true, className: 'newsletterBottom10px' }) : ''}
          
          ${title ? `
            <tr>
              <td align="center" class="newsletterContainer">
                ${Paragraph({
                  text: title,
                  tableContainer: true,
                  className: 'newsletterSubtitleTimer',
                  spanStyle: `color: ${timerColor}`,
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
                  spanStyle: `color: ${timerColor}`,
                  align: 'center',
                })}
              </td>
            </tr>
          ` : ''}

          ${title && subtitle ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}

          ${timerContent}

          ${Space({ insideTr: true, className: isCtaVisible ? 'newsletterBottom20px' : spaceWithoutCTA })}

          ${isCtaVisible ? CTA({
            color: timerColor,
            href: href,
            text: ctaText,
            align: 'center',
            insideTr: true,
            background: timerBackground,
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