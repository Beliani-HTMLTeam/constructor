import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { CTA } from './CTA.js';

const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphSpace = 'newsletterBottom25px',
  paragraphAlign = 'center',
  containerClass = '',
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
  showCta = true,
  disableLine = false,
  ctaSettings = {},
  options = {},
}) => {
  const resolvedBg = backgroundColor ?? theme.introBg ?? '#750000';
  const resolvedColor = color ?? theme.introText ?? '#ffffff';

  const hasTitleAndParagraph = Array.isArray(text) && text.length > 1;
  const hasSingleArrayValue = Array.isArray(text) && text.length === 1;

  const normalizeText = (value) => {
    if (typeof value !== 'string') return '';
    return String(value).trim();
  };

  const getAnchorUse = (elem, content, { href = ctaHref, style = ''} = {}) => {
    if (!options?.useLinks?.includes(elem) || !href)
      return content;

    return (`
    <a href="${href}" style="display:block;width:100%;text-decoration:none;${style}">
      ${content}
    </a>
    `);
  };

  const introHeader = hasTitleAndParagraph ? normalizeText(text[0] ?? 'TRANSLATION NOT FOUND') : '';
  const introTitle = hasTitleAndParagraph ? normalizeText(text[1] ?? 'TRANSLATION NOT FOUND') : '';
  const introParagraph = hasTitleAndParagraph
    ? normalizeText(text[2] ?? 'TRANSLATION NOT FOUND')
    : hasSingleArrayValue
      ? normalizeText(text[0] ?? 'TRANSLATION NOT FOUND')
      : normalizeText(text ?? 'TRANSLATION NOT FOUND');

  const isRedBlock = resolvedBg.toLowerCase() === (theme.introBg ?? '#750000').toLowerCase();
  const textColor = isRedBlock ? (theme.primaryText ?? '#ffffff') : resolvedColor;
  const btnVariant = ctaVariant ?? (isRedBlock ? 'cream' : 'maroon');

  const sectionStyle = `background-color: ${resolvedBg}; color: ${textColor}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`;
  const wrapperCellStyle = `padding: 0; margin: 0; background-color: ${resolvedBg};`;

  // Only use Red CSS classes on red background; on light backgrounds those classes force white text
  const headerClass = isRedBlock ? 'introRedHeader' : 'introHeader';
  const titleClass = isRedBlock ? 'introRedTitle' : 'introTitle';
  const paragraphClass = isRedBlock ? 'introRedParagraph' : 'introParagraph';

  const optionsObj = {
    // Global
    align: options?.align ? `align:${options.align};` : (`align:${paragraphAlign};` ?? 'center'),

    // Header
    headerColor: options?.headerColor ? `color:${options.headerColor};` : (`color:${textColor};` ?? ''),
    headerWeight: options?.headerWeight ? `font-weight:${options.headerWeight};` : '',
    headerClass: options?.headerClass ? options?.headerClass : (headerClass ?? ''),

    // Title
    titleColor: options?.titleColor ? `color:${options.titleColor};` : (`color:${textColor};` ?? ''),
    titleWeight: options?.titleWeight ? `font-weight:${options.titleWeight};` : '',
    titleClass: options?.titleClass ? options?.titleClass : (titleClass ?? ''),
  };

  const joinTexts = (...props) => {
    let joined = '';

    props.forEach((elem) => {
      joined += optionsObj[elem].trim();
    });

    return joined;
  };

  const IntroTitleElement = introTitle
    ? `
    <tr>
      <td align="${optionsObj?.align.split(':')[1].replace(';','')}"${containerClass ? ` class=${containerClass}` : ''}>
      ${getAnchorUse('header', (`
        <span class="${optionsObj?.headerClass}" style="${type === 'newsletter' ? "font-family:'Open Sans',Arial,sans-serif;" : ''}line-height:1.2;${joinTexts('headerColor', 'headerWeight')}text-align:${paragraphAlign};">
          ${introHeader}
        </span>`)
      )}
      </td>
    </tr>
    ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
    <tr>
      <td align="${optionsObj?.align.split(':')[1].replace(';','')}"${containerClass ? ` class=${containerClass}` : ''}>
      ${getAnchorUse('title', 
        (`<span class="${optionsObj?.titleClass}" style="${type === 'newsletter' ? "font-family:'Open Sans',Arial,sans-serif;" : ''}line-height:1.2;${joinTexts('titleColor', 'titleWeight')}text-align:${paragraphAlign};">
          ${introTitle}
        </span>`)
      )}
      </td>
    </tr>
    ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
    `
    : '';

  const IntroParagraphElement = introParagraph
    ? `
    <tr>
      <td align="${optionsObj?.align.split(':')[1].replace(';','')}"${containerClass ? ` class=${containerClass}` : ''}>
      ${getAnchorUse('paragraph',
        (`<span class="${paragraphClass}" style="${type === 'newsletter' ? "font-family:'Open Sans',Arial,sans-serif;" : ''}line-height:1.2;color:${textColor};text-align:${paragraphAlign};">
          ${introParagraph}
        </span>`)
      )}
      </td>
    </tr>
    ${paragraphSpace === false ? '' : Space({ insideTr: true, className: paragraphSpace ?? 'newsletterBottom25px' })}
    `
    : '';

  const CTAElement =
    ctaHref && ctaText
      ?
      Space({ insideTr: true, className: 'newsletterBottom15px' }) +
      CTA({
        disableLink: !options?.useLinks.includes('cta'),
        href: ctaHref,
        text: ctaText,
        variant: btnVariant,
        type: type,
        src: ctaSrc,
        insideTr: true,
        align: ctaSettings?.align ?? paragraphAlign,
        bg: ctaSettings?.bg,
        tdClass: containerClass,
        align: optionsObj?.align.split(':')[1].replace(';',''),
        color: ctaSettings?.color ?? '#000000',
        alwaysRenderAsImage: false,
        theme,
        borderColor: ctaSettings?.borderColor ?? '',
        borderWidth: ctaSettings?.borderWidth ?? '',
      })
      : '';

  const SecondaryLinkElement =
    secondaryLinkHref && secondaryLinkText
      ? `
    ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
    <tr>
      <td align="${ctaSettings?.align ?? paragraphAlign}">
        ${
          type === 'newsletter'
            ? CTA({
                disableLink: !options?.useLinks.includes('cta'),
                href: secondaryLinkHref,
                text: secondaryLinkText,
                variant: 'cream',
                type,
                align: paragraphAlign,
                theme,
              })
            : `<a href="${secondaryLinkHref}" class="introSecondaryLink" style="${type === 'newsletter' ? "font-family: 'Open Sans', Arial, sans-serif;" : ''} font-size: 13px; color: ${textColor} !important; text-decoration: underline;">${secondaryLinkText}</a>`
        }
      </td>
    </tr>
    `
      : '';

  let html =
  `
  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${sectionStyle}">
    ${
      !disableLine
        ? `
      <tr>
        <td class="newsletterContainer" align="center">
          <img loading="lazy" src="https://pictureserver.net/static/2026/line_black.jpg" style="display:block; max-width: 100%;"  alt="Line separator">
        </td>
      </tr>
      `
        : ''
    }
    ${spaceTop === false ? '' : Space({ className: spaceTop || 'newsletterBottom35px', insideTr: true })}

    ${IntroTitleElement}
      
    ${IntroParagraphElement}

    ${showCta ? CTAElement : ''}

    ${showCta ? SecondaryLinkElement : ''}

    ${spaceBottom === false ? '' : Space({ className: spaceBottom || 'newsletterBottom35px', insideTr: true })}
  </table>
  `
  return `
    <tr>
      <td style="${wrapperCellStyle}">
        ${html}
      </td>
    </tr>
  `;
};

export { Intro };

