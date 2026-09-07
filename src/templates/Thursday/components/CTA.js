import { buildCopyIcon } from './CopyCodeCTA.js';

const CTA = ({
	href = '#',
	text = 'Shop now',
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
	mobilePaddingX,
	mobilePaddingY,
	fontSize = '20px',
	lineHeight = '16px',
	fontWeight = '700',
	textTransform = 'uppercase',
	borderRadius = '4px',
	fontFamily = "'Open Sans', sans-serif",
	mobileFontSize = '16px',
	mobileLineHeight = '14px',
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

	if (src || alwaysRenderAsImage) {
		const effectiveSrc = src || '';
		if (type === 'landing' && codeValue) {
			html = `<a href="#" style="text-decoration: none; cursor: pointer; display: inline-block;"><img src="${effectiveSrc}" alt="${text || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
		} else {
			html = `<a href="${href}" style="text-decoration: none;"><img src="${effectiveSrc}" alt="${text || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
		}
	} else if (type === 'landing') {
		if (variant === 'underline') {
			html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="secondaryLinkMaroon">${text} ${copyIcon}</a>`;
		} else {
			const buttonContent = codeValue ? `${text} ${copyIcon}` : text;
			html = `<a href="${codeValue ? '#' : href}" ${codeCopyHandler} class="ctaBtn" style="background-color: ${bgColor}; color: ${btnTextColor} !important;">${buttonContent}</a>`;
		}
	} else {
		// newsletter type
		if (variant === 'underline') {
			html = `<a style="color: ${color ?? '#000000'}; text-decoration: underline;" href="${href}"><span class="newsletterCta" ${className ? `class="${className}"` : ''}>${text}</span></a>`;
		} else if (variant === 'button') {
			const buttonContent = codeValue ? `${text} ${copyIcon}` : text;
			const buttonHref = codeValue ? '#' : href;

			const effectiveMobilePaddingX = mobilePaddingX ?? paddingX;
			const effectiveMobilePaddingY = mobilePaddingY ?? paddingY;
			const effectiveMobileFontSize = mobileFontSize ?? fontSize;
			const effectiveMobileLineHeight = mobileLineHeight ?? lineHeight;

			const textLength = text ? text.length : 0;
			const estimatedTextWidth = textLength * 12 + (codeValue ? 24 : 0);
			const vmlWidth = estimatedTextWidth + paddingX * 2;
			
			const parsedLineHeight = parseInt(lineHeight) || 16;
			const parsedBorderRadius = parseInt(borderRadius) || 4;
			
			const vmlHeight = parsedLineHeight + paddingY * 2;
			const arcsize = Math.round((parsedBorderRadius / vmlHeight) * 100) + '%';

			const vmlFontFamily = fontFamily.replace(/"/g, "'");
			
			const safeFontSize = fontSize.toString().replace(/[^0-9a-zA-Z]/g, '');
			const safeMobileFontSize = effectiveMobileFontSize.toString().replace(/[^0-9a-zA-Z]/g, '');
			const ctaClass = `cta-${paddingY}-${paddingX}-${effectiveMobilePaddingY}-${effectiveMobilePaddingX}-${safeFontSize}-${safeMobileFontSize}`;
			const buttonClass = `newsletterCtaLink ${ctaClass}${className ? ` ${className}` : ''}`;

			if (typeof globalThis !== 'undefined') {
				globalThis.collectedCtaStyles = globalThis.collectedCtaStyles || new Set();
				globalThis.collectedCtaStyles.add(`
          .${ctaClass} {
            padding: ${paddingY}px ${paddingX}px;
            font-size: ${fontSize};
            line-height: ${lineHeight};
          }
          @media screen and (max-width: 768px) {
            .${ctaClass} {
              padding: ${effectiveMobilePaddingY}px ${effectiveMobilePaddingX}px;
              font-size: ${effectiveMobileFontSize};
              line-height: ${effectiveMobileLineHeight};
            }
          }
        `);
			}

			html = `
        <table cellspacing="0" cellpadding="0" border="0" align="${align}" style="margin: 0 auto;">
          <tr>
            <td align="center" class="newsletterCtaBtn">
              <!--[if gte mso 9]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref}" style="height:${vmlHeight}px;v-text-anchor:middle;width:${vmlWidth}px;" arcsize="${arcsize}" stroke="f" fillcolor="${bgColor}">
                  <w:anchorlock/>
                  <center style="color:${btnTextColor};font-family:${vmlFontFamily};font-size:${fontSize};font-weight:${fontWeight};letter-spacing:0px;text-transform: ${textTransform};">${text}</center>
                </v:roundrect>
              <![endif]-->
              <!--[if !mso]><!-->
                <a href="${buttonHref}" class="${buttonClass}" ${codeValue ? codeCopyHandler : 'target="_blank"'} style="mso-hide: all; background-color: ${bgColor}; font-family: ${fontFamily}; font-weight: ${fontWeight}; text-transform: ${textTransform}; color: ${btnTextColor}; text-decoration: none; display: inline-block; border-radius: ${borderRadius}; box-sizing: border-box;">
                  <span style="color: ${btnTextColor};">${buttonContent}</span>
                </a>
              <!--<![endif]-->
            </td>
          </tr>
        </table>
      `;
		} else {
			// default: text variant
			html = `<a style="color: ${color ?? '#000000'}; text-decoration: none;" href="${href}"><span class="newsletterCta" ${className ? `class="${className}"` : ''}>${text}</span></a>`;
		}
	}

	if (insideTr) {
		html = `
      <tr>
        <td ${tdClass ? `class="${tdClass}"` : ''} align="${align}" ${background ? `style="background-color: ${background};"` : ''}>
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
