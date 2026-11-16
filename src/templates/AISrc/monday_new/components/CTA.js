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

      const paddingProbe = document.createElement('span');
      paddingProbe.style.padding = resolvedBorderWidth;

      const paddingTop = Number.parseFloat(paddingProbe.style.paddingTop) || 0;
      const paddingRight = Number.parseFloat(paddingProbe.style.paddingRight) || 0;
      const paddingBottom = Number.parseFloat(paddingProbe.style.paddingBottom) || 0;
      const paddingLeft = Number.parseFloat(paddingProbe.style.paddingLeft) || 0;

      const fontSize = 20;

      // Outlook limits mso-font-width to 500%; use extra spaces above that.
      const outlookSpace = (padding, raise = null) => {
        const count = Math.max(1, Math.ceil(padding / (fontSize * 5)));
        const fontWidth = padding / (fontSize * count) * 100;

        return `<i hidden style="font-style:normal;letter-spacing:0;mso-font-width:${fontWidth}%;${raise !== null ? `mso-text-raise:${raise}%;` : ''}">${'&emsp;'.repeat(count)}&#8203;</i>`;
      };

      const totalRaise = (paddingTop + paddingBottom) / fontSize * 100;
      const bottomRaise = paddingBottom / fontSize * 100;

      html = `
        <table role="presentation" class="newsletterCtaTable" cellspacing="0" cellpadding="0" border="0" align="${align}" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
          <tr>
            <td align="${align}" style="font-size:${fontSize}px;line-height:24px;mso-line-height-rule:at-least;">
              <a href="${href}" target="_blank" class="newsletterCtaBtn" style="display:inline-block;box-sizing:border-box;max-width:100%;background-color:${bgColor};color:${textColor} !important;font-family:Arial,sans-serif;font-size:${fontSize}px;font-weight:700;line-height:24px;mso-line-height-rule:at-least;text-align:center;text-decoration:none !important;text-underline-color:${bgColor};padding:${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;mso-padding-alt:0;border:0 !important;border-radius:4px;letter-spacing:${resolvedSpacing};${transform ? `text-transform:${transform};` : ''}"><!--[if mso]>${outlookSpace(paddingLeft, totalRaise)}<span style="mso-text-raise:${bottomRaise}%;"><![endif]--><span style="color:${textColor} !important;text-decoration:none !important;">${text}</span><!--[if mso]></span>${outlookSpace(paddingRight)}<![endif]--></a>
            </td>
          </tr>
        </table>
      `;
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
