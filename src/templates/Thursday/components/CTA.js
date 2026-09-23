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
	msoTextRaise = null,
	fontSize = '20px',
	lineHeight = '20px',
	fontWeight = '700',
	letterSpacing = null,
	textTransform = 'uppercase',
	borderRadius = '4px',
	fontFamily = "'Open Sans', sans-serif",
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

			const textLength = transformedText ? transformedText.length : 0;
			const fontSizePx = parseFloat(fontSize) || 20;
			const perCharWidth = fontSizePx * 0.6;
			const letterSpacingPx = parseFloat(letterSpacing) || 0;
			const estimatedTextWidth =
				textLength * (perCharWidth + letterSpacingPx) + (codeValue ? 24 : 0);
			const vmlWidth = Math.round(estimatedTextWidth + effectivePadX * 2);
			
			const parsedLineHeight = parseInt(lineHeight) || 16;
			const parsedBorderRadius = parseInt(borderRadius) || 4;
			
			const vmlHeight = parsedLineHeight + effectivePadTop + effectivePadBottom;
			const arcsize = Math.round((parsedBorderRadius / vmlHeight) * 100) + '%';

			const vmlFontFamily = fontFamily.replace(/"/g, "'");
			
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

			const vmlRaiseStyle = msoTextRaise ? `mso-text-raise:${msoTextRaise};` : '';

			html = `
        <table cellspacing="0" cellpadding="0" border="0" ${tableAlignAttr} style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; ${tableMarginStyle}">
          <tr>
            <td align="${align}" style="font-size: 0px; line-height: 0px; mso-line-height-rule: exactly;">
              <!--[if gte mso 9]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref}" style="height:${vmlHeight}px;v-text-anchor:middle;width:${vmlWidth}px;" arcsize="${arcsize}" stroke="f" fillcolor="${bgColor}">
                <center style="color:${btnTextColor};font-family:${vmlFontFamily};font-size:${fontSize};font-weight:${fontWeight};letter-spacing:${letterSpacing ?? '0px'};text-transform: ${textTransform};"><span style="${vmlRaiseStyle}">${transformedText}</span></center>
              </v:roundrect>
              <![endif]-->
              <!--[if !mso]><!-->
                <a href="${buttonHref}" class="${buttonClass}" ${codeValue ? codeCopyHandler : 'target="_blank"'} style="mso-hide: all; background-color: ${bgColor}; font-family: ${fontFamily}; font-size: ${fontSize}; line-height: ${lineHeight}; font-weight: ${fontWeight};${letterSpacing ? ` letter-spacing: ${letterSpacing};` : ''} text-transform: ${textTransform}; color: ${btnTextColor}; padding: ${paddingCss}; text-decoration: none; display: inline-block; border-radius: ${borderRadius}; box-sizing: border-box; width: auto; max-width: 100%; white-space: normal; word-break: break-word;">
                  <span style="color: ${btnTextColor}; display: inline-block; line-height: inherit;">${buttonContent}</span>
                </a>
              <!--<![endif]-->
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
