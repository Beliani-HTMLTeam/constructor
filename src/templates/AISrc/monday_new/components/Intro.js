import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { CTA } from './CTA.js';

const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphAlign = 'center',
  color,
  backgroundColor,
  ctaHref,
  ctaText = 'SHOP NOW',
  secondaryLinkHref,
  secondaryLinkText = 'SEE MORE >',
  type = 'newsletter',
  ctaSrc = null,
  ctaVariant = null,
  theme = {},
}) => {
  const resolvedBg = backgroundColor ?? theme.introBg ?? '#750000';
  const resolvedColor = color ?? theme.introText ?? '#ffffff';

  const hasTitleAndParagraph = Array.isArray(text) && text.length > 1;
  const hasSingleArrayValue = Array.isArray(text) && text.length === 1;

  const normalizeText = (value) => {
    if (typeof value !== 'string') return '';
    return String(value).trim();
  };

  const introTitle = hasTitleAndParagraph ? normalizeText(text[0] ?? 'TRANSLATION NOT FOUND') : '';
  const introParagraph = hasTitleAndParagraph
    ? normalizeText(text[1] ?? 'TRANSLATION NOT FOUND')
    : hasSingleArrayValue
      ? normalizeText(text[0] ?? 'TRANSLATION NOT FOUND')
      : normalizeText(text ?? 'TRANSLATION NOT FOUND');

  const isRedBlock = resolvedBg.toLowerCase() === (theme.introBg ?? '#750000').toLowerCase();
  const textColor = isRedBlock ? (theme.primaryText ?? '#ffffff') : resolvedColor;
  const btnVariant = ctaVariant ?? (isRedBlock ? 'cream' : 'maroon');

  const sectionStyle = `background-color: ${resolvedBg}; color: ${textColor}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`;
  const wrapperCellStyle = `padding: 0; margin: 0; background-color: ${resolvedBg};`;

  // Only use Red CSS classes on red background; on light backgrounds those classes force white text
  const titleClass = isRedBlock ? 'introRedTitle' : 'introTitle';
  const paragraphClass = isRedBlock ? 'introRedParagraph' : 'introParagraph';

  const IntroTitleElement = introTitle
    ? `
    <tr>
      <td align="${paragraphAlign}" style="padding: 0 25px;">
        <span class="${titleClass}" style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 28px; line-height: 1.25; color: ${textColor}; display: block; text-align: ${paragraphAlign};">
          ${introTitle}
        </span>
      </td>
    </tr>
    ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
    `
    : '';

  const IntroParagraphElement = introParagraph
    ? `
    <tr>
      <td align="${paragraphAlign}" style="padding: 0 25px;">
        <span class="${paragraphClass}" style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 16px; line-height: 1.5; color: ${textColor}; display: block; text-align: ${paragraphAlign};">
          ${introParagraph}
        </span>
      </td>
    </tr>
    ${Space({ insideTr: true, className: 'newsletterBottom25px' })}
    `
    : '';

  const CTAElement = ctaHref && ctaText
    ? `
    <tr>
      <td align="${paragraphAlign}">
        ${CTA({
          href: ctaHref,
          text: ctaText,
          variant: btnVariant,
          type: type,
          src: ctaSrc,
          align: paragraphAlign,
          alwaysRenderAsImage: type === 'newsletter' && btnVariant !== 'underline',
          theme,
        })}
      </td>
    </tr>
    `
    : '';

  const SecondaryLinkElement = secondaryLinkHref && secondaryLinkText
    ? `
    ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
    <tr>
      <td align="${paragraphAlign}">
        ${type === 'newsletter'
          ? CTA({
              href: secondaryLinkHref,
              text: secondaryLinkText,
              variant: 'cream',
              type,
              align: paragraphAlign,
              theme,
            })
          : `<a href="${secondaryLinkHref}" class="introSecondaryLink" style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 13px; color: ${textColor} !important; text-decoration: underline;">${secondaryLinkText}</a>`}
      </td>
    </tr>
    `
    : '';

  return `
    <tr>
      <td style="${wrapperCellStyle}">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${sectionStyle}">
          <tr>
            <td align="center">
              <img loading="lazy" src="https://pictureserver.net/static/2026/line_black.jpg" style="display:block; max-width: 100%;"  alt="Line separator">
            </td>
          </tr>
          ${Space({ className: spaceTop || 'newsletterBottom35px', insideTr: true })}

          ${IntroTitleElement}
            
          ${IntroParagraphElement}

          ${CTAElement}

          ${SecondaryLinkElement}
    
          ${Space({ className: spaceBottom || 'newsletterBottom35px', insideTr: true })}
        </table>
      </td>
    </tr>
  `;
};

export { Intro };
