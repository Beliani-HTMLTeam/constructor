import { buildCopyIcon } from './CopyCodeCTA.js';

// Escapes a value for use inside a double-quoted HTML attribute
// (raw "&" -> "&amp;", '"' -> "&quot;"), without double-escaping existing entities.
const escapeAttr = (v) =>
	String(v ?? '')
		.replace(/&(?!(?:amp|lt|gt|quot|#\d+|#x[0-9a-f]+);)/gi, '&amp;')
		.replace(/"/g, '&quot;');

// Measures the real rendered width of the button text in the builder's browser.
// Returns null when there is no DOM (server/Node render) or no layout (hidden iframe, jsdom),
// so the caller can fall back to the character-based estimate.
const measureTextWidth = ({ text, fontFamily, fontSize, fontWeight, letterSpacing, type }) => {
	if (typeof document === 'undefined' || !document.body || typeof DOMParser === 'undefined') return null;

	// DOMParser does not run scripts or load images, so HTML inside the text is safe to strip here.
	const plainText = new DOMParser().parseFromString(String(text ?? ''), 'text/html').body.textContent ?? '';
	if (!plainText) return null;

	const element = document.createElement('span');
	element.textContent = plainText;
	element.style.cssText = `position:absolute;left:-100000px;top:0;visibility:hidden;display:inline-block;white-space:nowrap;margin:0;padding:0;border:0;${type == 'newsletter' ? `font-family:${fontFamily};` : ''}font-size:${fontSize};font-weight:${fontWeight};letter-spacing:${letterSpacing || 'normal'};text-transform:none;`;

	document.body.appendChild(element);
	try {
		const width = element.getBoundingClientRect().width;
		return width > 0 ? width : null;
	} finally {
		element.remove();
	}
};

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
	msoTextRaise = null,
	fontSize = '20px',
	lineHeight = '20px',
	fontWeight = '700',
	letterSpacing = null,
	textTransform = 'uppercase',
	borderRadius = '4px',
	fontFamily = "'Open Sans', sans-serif",
	msoFontFamily = 'Arial, sans-serif', // font classic Outlook draws the VML button text in (web fonts don't load there)
	mobileFontSize = null,
	mobileLineHeight = null,
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
		console.log("font-family:", fontFamily, "type:", type, "variant", variant);

		if (variant === 'underline') {
			const underlineStyle = color ? ` style="color: ${color}; text-decoration: underline;"` : '';
			html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="secondaryLinkMaroon"${underlineStyle}>${transformedText} ${copyIcon}</a>`;
		}else if (variant === 'button') {
			const buttonContent = codeValue ? `${transformedText} ${copyIcon}` : transformedText;
			const buttonHref = codeValue ? '#' : href;
			const safeHref = escapeAttr(buttonHref);

			const effectivePadTop = paddingTop ?? (paddingY !== null && paddingY !== undefined ? paddingY + 1 : 17);
			const effectivePadBottom = paddingBottom ?? (paddingY !== null && paddingY !== undefined ? paddingY - 1 : 15);
			const effectivePadX = paddingX;

			const effectiveMobilePadTop = mobilePaddingTop ?? (mobilePaddingY !== null && mobilePaddingY !== undefined ? mobilePaddingY + 1 : effectivePadTop);
			const effectiveMobilePadBottom = mobilePaddingBottom ?? (mobilePaddingY !== null && mobilePaddingY !== undefined ? mobilePaddingY - 1 : effectivePadBottom);
			const effectiveMobilePadX = mobilePaddingX ?? effectivePadX;

			const effectiveMobileFontSize = mobileFontSize ?? fontSize;
			const effectiveMobileLineHeight = mobileLineHeight ?? lineHeight;

			// Optional border (only when borderWidth > 0 and a borderColor is given).
			const parsedBorderWidth = parseInt(borderWidth) || 0;
			const hasBorder = parsedBorderWidth > 0 && !!borderColor;
			const borderPx = hasBorder ? parsedBorderWidth : 0;
			const htmlBorderCss = hasBorder ? `border:${borderPx}px solid ${borderColor};` : '';
			const vmlStrokeAttrs = hasBorder
				? `stroke="t" strokecolor="${borderColor}" strokeweight="${borderPx}px"`
				: 'stroke="f"';

			// VML width: measure the text in the builder's browser in the font Outlook uses (Arial).
			// +5% and +4px cover the difference between browser and Word text metrics.
			// Falls back to a character-based estimate when there is no browser to measure in.
			const fontSizePx = parseFloat(fontSize) || 20;
			const letterSpacingPx = parseFloat(letterSpacing) || 0;
			const measuredTextWidth = measureTextWidth({
				text: transformedText,
				fontFamily: msoFontFamily,
				fontSize,
				fontWeight,
				letterSpacing,
				type
			});
			const estimatedTextWidth =
				(transformedText ? transformedText.length : 0) *
				(fontSizePx * (textTransform === 'uppercase' ? 0.72 : 0.6) + letterSpacingPx);
			const textWidth = measuredTextWidth != null ? measuredTextWidth * 1.05 + 4 : estimatedTextWidth;
			const iconWidth = codeValue ? 24 : 0;
			const vmlWidth = Math.ceil(textWidth + iconWidth + effectivePadX * 2 + borderPx * 2);

			const parsedLineHeight = parseInt(lineHeight) || 16;
			const parsedBorderRadius = Number.isNaN(parseInt(borderRadius)) ? 4 : parseInt(borderRadius);

			const vmlHeight = parsedLineHeight + effectivePadTop + effectivePadBottom + borderPx * 2;
			const arcsize = Math.round((parsedBorderRadius / vmlHeight) * 100) + '%';

			const vmlFontFamily = msoFontFamily.replace(/"/g, "'");

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
			const tableMarginStyle = align === 'left' ? 'margin:0;' : align === 'right' ? 'margin:0 0 0 auto;' : 'margin:0 auto;';

			const vmlRaiseStyle = `mso-text-raise:${msoTextRaise ?? '2pt'};`;

			html = `
        <table cellspacing="0" cellpadding="0" border="0" ${tableAlignAttr} style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; ${tableMarginStyle}">
          <tr>
            <td align="${align}" style="font-size: 0px; line-height: 0px; mso-line-height-rule: exactly;">
                <a href="${buttonHref}" class="${buttonClass}" ${codeValue ? codeCopyHandler : 'target="_blank"'} style="mso-hide: all; background-color: ${bgColor}; font-size: ${fontSize}; line-height: ${lineHeight}; font-weight: ${fontWeight};${letterSpacing ? ` letter-spacing: ${letterSpacing};` : ''} text-transform: ${textTransform}; color: ${btnTextColor}; padding: ${paddingCss}; text-decoration: none; display: inline-block; border-radius: ${borderRadius}; box-sizing: border-box; width: auto; max-width: 100%; white-space: normal; word-break: break-word;">
                  <span style="color: ${btnTextColor}; display: inline-block; line-height: inherit;">${buttonContent}</span>
                </a>
            </td>
          </tr>
        </table>
      `;
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
			const safeHref = escapeAttr(buttonHref);

			const effectivePadTop = paddingTop ?? (paddingY !== null && paddingY !== undefined ? paddingY + 1 : 17);
			const effectivePadBottom = paddingBottom ?? (paddingY !== null && paddingY !== undefined ? paddingY - 1 : 15);
			const effectivePadX = paddingX;

			const effectiveMobilePadTop = mobilePaddingTop ?? (mobilePaddingY !== null && mobilePaddingY !== undefined ? mobilePaddingY + 1 : effectivePadTop);
			const effectiveMobilePadBottom = mobilePaddingBottom ?? (mobilePaddingY !== null && mobilePaddingY !== undefined ? mobilePaddingY - 1 : effectivePadBottom);
			const effectiveMobilePadX = mobilePaddingX ?? effectivePadX;

			const effectiveMobileFontSize = mobileFontSize ?? fontSize;
			const effectiveMobileLineHeight = mobileLineHeight ?? lineHeight;

			// Optional border (only when borderWidth > 0 and a borderColor is given).
			const parsedBorderWidth = parseInt(borderWidth) || 0;
			const hasBorder = parsedBorderWidth > 0 && !!borderColor;
			const borderPx = hasBorder ? parsedBorderWidth : 0;
			const htmlBorderCss = hasBorder ? `border:${borderPx}px solid ${borderColor};` : '';
			const vmlStrokeAttrs = hasBorder
				? `stroke="t" strokecolor="${borderColor}" strokeweight="${borderPx}px"`
				: 'stroke="f"';

			// VML width: measure the text in the builder's browser in the font Outlook uses (Arial).
			// +5% and +4px cover the difference between browser and Word text metrics.
			// Falls back to a character-based estimate when there is no browser to measure in.
			const fontSizePx = parseFloat(fontSize) || 20;
			const letterSpacingPx = parseFloat(letterSpacing) || 0;
			const measuredTextWidth = measureTextWidth({
				text: transformedText,
				fontFamily: msoFontFamily,
				fontSize,
				fontWeight,
				letterSpacing,
				type
			});
			const estimatedTextWidth =
				(transformedText ? transformedText.length : 0) *
				(fontSizePx * (textTransform === 'uppercase' ? 0.72 : 0.6) + letterSpacingPx);
			const textWidth = measuredTextWidth != null ? measuredTextWidth * 1.05 + 4 : estimatedTextWidth;
			const iconWidth = codeValue ? 24 : 0;
			const vmlWidth = Math.ceil(textWidth + iconWidth + effectivePadX * 2 + borderPx * 2);

			const parsedLineHeight = parseInt(lineHeight) || 16;
			const parsedBorderRadius = Number.isNaN(parseInt(borderRadius)) ? 4 : parseInt(borderRadius);

			const vmlHeight = parsedLineHeight + effectivePadTop + effectivePadBottom + borderPx * 2;
			const arcsize = Math.round((parsedBorderRadius / vmlHeight) * 100) + '%';

			const vmlFontFamily = msoFontFamily.replace(/"/g, "'");

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
			const tableMarginStyle = align === 'left' ? 'margin:0;' : align === 'right' ? 'margin:0 0 0 auto;' : 'margin:0 auto;';

			const outlookFontSizePx = Number.parseFloat(fontSize) || 20;

			const outlookSpace = (padding, raise = null) => {
				const size = Math.max(0, Number(padding) || 0);
				const count = Math.max(1, Math.ceil(size / (outlookFontSizePx * 5)));
				const fontWidth = size / (outlookFontSizePx * count) * 100;

				return `<i hidden style="font-style:normal;letter-spacing:0;mso-font-width:${fontWidth}%;${raise !== null ? `mso-text-raise:${raise}%;` : ''}">${'&emsp;'.repeat(count)}&#8203;</i>`;
			};

			const totalRaise =
				(Number(effectivePadTop) + Number(effectivePadBottom)) /
				outlookFontSizePx * 100;

			const bottomRaise =
				Number(effectivePadBottom) / outlookFontSizePx * 100;
				console.log("before new button, type:", type)
			html = `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" ${tableAlignAttr} style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;${tableMarginStyle}">
     <tr>
      <td align="${align}" style="font-size:${fontSize};line-height:${lineHeight};mso-line-height-rule:at-least;">
       <a href="${safeHref}" class="${buttonClass}" ${codeValue ? codeCopyHandler : 'target="_blank"'} style="background-color:${bgColor};${htmlBorderCss}border-radius:${borderRadius};color:${btnTextColor} !important;display:inline-block; ${type == 'newsletter' ? `font-family:${fontFamily};` : ''}font-size:${fontSize};font-weight:${fontWeight};line-height:${lineHeight};mso-line-height-rule:at-least;${letterSpacing ? `letter-spacing:${letterSpacing};` : ''}padding:${paddingCss};mso-padding-alt:0;text-align:center;text-decoration:none !important;text-underline-color:${bgColor};text-transform:${textTransform};"><!--[if mso]>${outlookSpace(effectivePadX, totalRaise)}<span style="mso-text-raise:${bottomRaise}%;"><![endif]--><span style="color:${btnTextColor} !important;text-decoration:none !important;">${buttonContent}</span><!--[if mso]></span>${outlookSpace(effectivePadX)}<![endif]--></a>
      </td>
     </tr>
    </table>
   `;
		} else {
			// default: text variant
			const textClass = className || 'newsletterCta';
			html = `<a style="color: ${color ?? '#000000'}; text-decoration: none;" href="${href}"><span class="${textClass}">${text}</span></a>`;
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