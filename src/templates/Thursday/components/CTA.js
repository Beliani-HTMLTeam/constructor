import { buildCopyIcon } from './CopyCodeCTA.js';

const CTA = ({
	href = '#',
	text,
	color,
	align = 'center',
	insideTr = false,
	tdClass,
	insideTable = false,
	tableContainer = false,
	src = null,
	variant = 'text', // 'text' | 'underline' | 'button'
	type = 'newsletter',
	codeValue = null,
	alwaysRenderAsImage = false,
	getPhrase = null,
	bg,
	borderWidth,
	borderColor,
	className = '',
	background,
	textColor,
	paddingX = 45,
	paddingY = 16,
	paddingTop = null,
	paddingBottom = null,
	mobilePaddingX = null,
	mobilePaddingY = null,
	mobilePaddingTop = null,
	mobilePaddingBottom = null,
	fontSize = '20px',
	lineHeight = '20px',
	fontWeight = '700',
	letterSpacing = null,
	textTransform = 'uppercase',
	borderRadius = '4px',
	fontFamily = "'Open Sans', sans-serif",
	mobileFontSize = null,
	mobileLineHeight = null,
	spanStyle = '',
}) => {
	const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

	const tableContainerClass =
		typeof tableContainer === 'string'
			? tableContainer
			: tableContainer
				? 'newsletterContainer'
				: '';

	const bgColor = bg ?? '#000000';
	const btnTextColor = textColor ?? '#ffffff';

	const ctaToastBg = '#000000';
	const ctaToastText = '#ffffff';

	const codeCopied = getPhrase?.('Copy code');

	const copyIcon = codeValue ? buildCopyIcon({
		codeValue,
		color,
		toastBg: ctaToastBg,
		toastText: ctaToastText,
		label: codeCopied,
	}) : '';

	let html = '';

	let codeCopyHandler = codeValue
		? `onclick="(function(e){e.preventDefault();e.stopPropagation();var btn=e.currentTarget.querySelector('button');if(btn&&!e.target.closest('button')){btn.click();}})(event)"`
		: '';

	const transformedText = (() => {
		if (!text) return '';
		if (textTransform === 'uppercase') return String(text).toUpperCase();
		if (textTransform === 'lowercase') return String(text).toLowerCase();
		return String(text);
	})();

	if (src || alwaysRenderAsImage) {
		const effectiveSrc = src || '';
		if (type === 'landing' && codeValue) {
			html = `<a href="#" style="text-decoration: none; cursor: pointer; display: inline-block;"><img src="${effectiveSrc}" alt="${transformedText || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
		} else {
			html = `<a href="${href}" style="text-decoration: none;"><img src="${effectiveSrc}" alt="${transformedText || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
		}
	} else if (type === 'landing') {
		if (variant === 'underline') {
			html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="secondaryLinkMaroon">${transformedText} ${copyIcon}</a>`;
		} else {
			const buttonContent = codeValue ? `${transformedText} ${copyIcon}` : transformedText;
			html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="ctaBtn" style="background-color: ${bgColor}; color: ${btnTextColor} !important;">${buttonContent}</a>`;
		}
	} else {
		// newsletter type
		if (variant === 'underline') {
			const underlineClass = className || 'newsletterCta';
			html = `<a style="color: ${color ?? '#000000'}; text-decoration: underline;" href="${href}"><span class="${underlineClass}">${transformedText}</span></a>`;
		} else if (variant === 'button') {
			const buttonContent = codeValue ? `${transformedText} ${copyIcon}` : transformedText;
			const buttonHref = codeValue ? '#' : href;

			const effectivePadTop = paddingTop ?? paddingY;
			const effectivePadBottom = paddingBottom ?? paddingY;
			const effectivePadX = paddingX;

			const effectiveMobilePadTop = mobilePaddingTop ?? mobilePaddingY ?? effectivePadTop;
			const effectiveMobilePadBottom = mobilePaddingBottom ?? mobilePaddingY ?? effectivePadBottom;
			const effectiveMobilePadX = mobilePaddingX ?? effectivePadX;

			const effectiveMobileFontSize = mobileFontSize ?? fontSize;
			const effectiveMobileLineHeight = mobileLineHeight ?? lineHeight;

			const safeFontSize = fontSize.toString().replace(/[^0-9a-zA-Z]/g, '');
			const safeMobileFontSize = effectiveMobileFontSize.toString().replace(/[^0-9a-zA-Z]/g, '');
			const safeLetterSpacing = letterSpacing ? String(letterSpacing).replace(/[^0-9a-zA-Z-]/g, '') : '';
			const ctaClass = className || `cta-${effectivePadTop}-${effectivePadBottom}-${effectivePadX}-${effectiveMobilePadTop}-${effectiveMobilePadBottom}-${effectiveMobilePadX}-${safeFontSize}-${safeMobileFontSize}${safeLetterSpacing ? `-ls${safeLetterSpacing}` : ''}`;
			const buttonClass = ctaClass;

			const paddingCss = `${effectivePadTop}px ${effectivePadX}px ${effectivePadBottom}px ${effectivePadX}px`;
			const mobilePaddingCss = `${effectiveMobilePadTop}px ${effectiveMobilePadX}px ${effectiveMobilePadBottom}px ${effectiveMobilePadX}px`;

			if (typeof globalThis !== 'undefined') {
				globalThis.collectedCtaStyles = globalThis.collectedCtaStyles || new Set();
				globalThis.collectedCtaStyles.add(`
          .${ctaClass} {
            padding: ${paddingCss};
            font-size: ${fontSize};
            line-height: ${lineHeight};${letterSpacing ? `
            letter-spacing: ${letterSpacing};` : ''}
          }
          @media screen and (max-width: 768px) {
            .${ctaClass} {
              padding: ${mobilePaddingCss} !important;
              font-size: ${effectiveMobileFontSize} !important;
              line-height: ${effectiveMobileLineHeight} !important;
            }
          }
        `);
			}

			const tableAlignAttr = align === 'center' ? 'align="center"' : '';
			const tableMarginStyle = align === 'left' ? 'margin: 0;' : align === 'right' ? 'margin: 0 0 0 auto;' : 'margin: 0 auto;';

			const outlookFontSizePx = Number.parseFloat(fontSize) || 20;

			// Word-based Outlook ignores padding on <a>, so the padding is emulated with em-spaces scaled by mso-font-width.
			// Outlook limits mso-font-width to 500%; use extra spaces above that.
			const outlookSpace = (padding, raise = null) => {
				const size = Math.max(0, Number(padding) || 0);
				const count = Math.max(1, Math.ceil(size / (outlookFontSizePx * 5)));
				const fontWidth = (size / (outlookFontSizePx * count)) * 100;

				return `<i hidden style="font-style:normal;letter-spacing:0;mso-font-width:${fontWidth}%;${raise !== null ? `mso-text-raise:${raise}%;` : ''}">${'&emsp;'.repeat(count)}&#8203;</i>`;
			};

			const totalRaise = ((Number(effectivePadTop) + Number(effectivePadBottom)) / outlookFontSizePx) * 100;
			const bottomRaise = (Number(effectivePadBottom) / outlookFontSizePx) * 100;

			html = `
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" ${tableAlignAttr} style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;${tableMarginStyle}">
          <tr>
            <td align="${align}" style="font-size:${fontSize};line-height:${lineHeight};mso-line-height-rule:at-least;">
              <a href="${buttonHref}" class="${buttonClass}" ${codeValue ? codeCopyHandler : 'target="_blank"'} style="background-color:${bgColor};border-radius:${borderRadius};color:${btnTextColor} !important;display:inline-block;font-family:${fontFamily};font-size:${fontSize};font-weight:${fontWeight};line-height:${lineHeight};mso-line-height-rule:at-least;${letterSpacing ? `letter-spacing:${letterSpacing};` : ''}padding:${paddingCss};mso-padding-alt:0;text-align:center;text-decoration:none !important;text-underline-color:${bgColor};text-transform:${textTransform};"><!--[if mso]>${outlookSpace(effectivePadX, totalRaise)}<span style="mso-text-raise:${bottomRaise}%;"><![endif]--><span style="color:${btnTextColor} !important;text-decoration:none !important;">${buttonContent}</span><!--[if mso]></span>${outlookSpace(effectivePadX)}<![endif]--></a>
            </td>
          </tr>
        </table>
      `;
		} else {
			// default: text variant
			const textClass = className || 'newsletterCta';
			html = `<a style="color: ${color ?? '#000000'}; text-decoration: none;" href="${href}"><span class="${textClass}"${spanStyle ? ` style="${spanStyle}"` : ''}>${text}</span></a>`;
		}
	}

	if (insideTr) {
		html = `
      <tr ${background ? `style="background-color: ${background};" bgcolor="${background}"` : ''}>
        <td ${tdClass ? `class="${tdClass}"` : ''} align="${align}" ${background ? `style="background-color: ${background};" bgcolor="${background}"` : ''}>
          ${html}
        </td>
      </tr>
    `;
	}

	if (insideTable) {
		if (insideTr) {
			throw new Error('Cannot have both insideTr and insideTable set to true - handle automatically.');
		}
		html = `<table ${tableAttributes}><tr><td${tableContainerClass ? ` class="${tableContainerClass}"` : ''} align="${align}"${background ? ` style="background-color: ${background};"` : ''}>${html}</td></tr></table>`;
	}

	return html;
};

export { CTA };
