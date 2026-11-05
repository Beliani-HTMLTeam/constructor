import { toast } from 'sonner';
import { buildCopyIcon } from './CopyCodeCTA.js';

const CTA = ({
  href = '#',
  text = 'GET THE CODE',
  color,
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  src = null,
  variant = 'maroon',
  type = 'newsletter',
  codeValue = null,
  alwaysRenderAsImage = false,
  theme = {},
  getPhrase = null,
  bg = '',
  borderWidth = '',
  borderColor = '',
  transform = '',
  letterSpacing = '',
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  const ctaMaroonBg = theme?.primary ?? '#750000';
  const ctaMaroonText = theme?.primaryText ?? '#ffffff';
  const ctaCreamBg = theme?.secondary ?? '#ffe0d4';
  const ctaCreamText = theme?.secondaryText ?? '#750000';
  const ctaToastBg = theme?.toastBg ?? '#ffe0d4';
  const ctaToastText = theme?.toastText ?? theme?.primary ?? '#750000';

  const codeCopied = getPhrase?.('Copy code');

  const copyIcon = codeValue ? buildCopyIcon({
    codeValue,
    color,
    toastBg: ctaToastBg,
    toastText: ctaToastText,
    label: codeCopied,
  }) : '';

  let html = '';

  let codeCopyHandler = codeValue ? `onclick="(function(e){e.preventDefault();e.stopPropagation();var btn=e.currentTarget.querySelector('button');if(btn&&!e.target.closest('button')){btn.click();}})(event)"` : '';

  if (src || alwaysRenderAsImage) {
    const effectiveSrc = src || '';
    if (type === 'landing' && codeValue) {
      html = `<a href="#" style="text-decoration: none; cursor: pointer; display: inline-block;"><img src="${effectiveSrc}" alt="${text || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
    } else {
      html = `<a href="${href}" style="text-decoration: none;"><img src="${effectiveSrc}" alt="${text || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
    }
  } else if (type === 'landing') {
    if (variant === 'cream') {
      const buttonContent = codeValue ? `${text} ${copyIcon}` : text;
      html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="ctaBtn" style="background-color: ${bg ?? ctaCreamBg}; color: ${color ?? ctaCreamText} !important;letter-spacing:${letterSpacing ? letterSpacing : '1.2'};">${buttonContent}</a>`;
    } else if (variant === 'underline') {
      html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="secondaryLink" style="color: ${color};${transform ? `text-transform:${transform};` : ''}">${text} ${copyIcon}</a>`;
    } else {
      html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="ctaBtn" style="background-color: ${bg ?? ctaMaroonBg}; color: ${color ?? ctaMaroonText} !important;letter-spacing:${letterSpacing ? letterSpacing : '1.2'};">${text} ${copyIcon}</a>`;
    }
  } else {
    if (variant === 'underline') {
      html = `<a href="${href}" class="secondaryLink" style="color: ${color};">${text}</a>`;
    } else {
      if (!borderColor || !borderWidth)
        toast.error(`CTA ${text} needs borderWidth and borderColor attributes.`);
      const isCream = variant === 'cream';
      const bgColor = String(bg ?? '').trim() || (isCream ? ctaCreamBg : ctaMaroonBg);
      const textColor = String(color ?? '').trim() || (isCream ? ctaCreamText : ctaMaroonText);
      const resolvedBorderColor = String(borderColor ?? '').trim() || bgColor;
      const resolvedBorderWidth = String(borderWidth ?? '').trim() || '12px 24px';

      const rawSpacing = String(letterSpacing ?? '').trim();
      const resolvedSpacing = !rawSpacing ? '1.2px' : /^-?\d*\.?\d+$/.test(rawSpacing) ? `${rawSpacing}px` : rawSpacing;

      // Measure in the browser while generating the newsletter.
      const measureOutlookButton = () => {
        const element = document.createElement('span');
        const label = document.createElement('div');

        label.innerHTML = String(text);
        element.textContent = label.textContent ?? '';

        element.style.cssText = `position:absolute;left:-100000px;top:0;visibility:hidden;display:inline-block;box-sizing:content-box;width:auto;max-width:none;white-space:nowrap;font-family:Arial,sans-serif;font-size:20px;font-weight:700;line-height:24px;letter-spacing:${resolvedSpacing};text-transform:${transform || 'none'};padding:${resolvedBorderWidth};border:0;`;

        document.body.appendChild(element);

        try {
          const bounds = element.getBoundingClientRect();

          return {
            width: Math.ceil((bounds.width + 8) / 4) * 4,
            height: Math.ceil(bounds.height / 4) * 4,
          };
        } finally {
          element.remove();
        }
      };

      const {
        width: outlookButtonWidth,
        height: outlookButtonHeight,
      } = measureOutlookButton();

      html = `
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="${align}" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
          <tr>
            <td align="${align}" style="padding:0;border:0;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" arcsize="15%" stroke="f" fillcolor="${bgColor}" style="width:${outlookButtonWidth}px;height:${outlookButtonHeight}px;v-text-anchor:middle;">
                <w:anchorlock/>
                <center style="color:${textColor};font-family:Arial,sans-serif;font-size:20px;font-weight:bold;letter-spacing:${resolvedSpacing};${transform ? `text-transform:${transform};` : ''}">${text}</center>
              </v:roundrect>
              <![endif]-->
              <!--[if !mso]><!-->
              <a href="${href}" target="_blank" class="newsletterCtaBtn" style="display:inline-block;box-sizing:border-box;max-width:100%;background-color:${bgColor};color:${textColor} !important;text-decoration:none !important;text-align:center;font-family:'Open Sans',Arial,sans-serif;font-size:20px;font-weight:600;line-height:24px;letter-spacing:${resolvedSpacing};border-style:solid;border-width:${resolvedBorderWidth};border-color:${resolvedBorderColor};border-radius:4px;${transform ? `text-transform:${transform};` : ''}">
                <span style="color:${textColor} !important;text-decoration:none !important;">${text}</span>
              </a>
              <!--<![endif]-->
            </td>
          </tr>
        </table>
      `;

      /*html = `
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                  xmlns:w="urn:schemas-microsoft-com:office:word"
                  href="${href}"
                  style="height:48px;v-text-anchor:middle;width:200px;"
                  arcsize="8%"
                  strokecolor="${bgColor}"
                  fillcolor="${bgColor}">
        <w:anchorlock/>
        <center style="color:${textColor};font-family:Arial,sans-serif;font-size:16px;font-weight:600;">
          ${text}
        </center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="${href}" class="newsletterCtaBtn" target="_blank" style="background-color:${bgColor};border-radius:4px;font-size:16px;font-weight:600;color:${textColor}!important;text-decoration:none;display:inline-block;text-transform:uppercase;letter-spacing:1.5px;max-width:100%;box-sizing:border-box;border-style:solid;border-radius:5px;border-width:${borderWidth};border-color:${borderColor};">
        <span style="color: ${textColor} !important;">${text}</span>
      </a>
      <!--<![endif]-->
      `;*/
    }
  }

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} align="${align}">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error('Cannot have both insideTr and insideTable set to true - handle automatically.');
    }

    html = `<table ${tableAttributes}><tr><td ${tableContainer ? 'class="newsletterContainer"' : ''} align="${align}">${html}</td></tr></table>`;
  }

  return html;
};

export { CTA };
