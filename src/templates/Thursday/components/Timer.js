import { Space } from './Space.js';
import { ImageWithLink } from './ImageWithLink.js';
import { Paragraph } from './Paragraph.js';
import { CTA } from './CTA.js';

const renderSingleFreebie = ({ product, isLast, freebiesTextColor, freebiesFreeColor, freeText }) => {
	if (!product) return '';
	const productHref = product.href;
	const productSrc = typeof product.src === 'object' && product.src !== null ? product.src.src : product.src;
	const rawTitle = (product.description?.trim() || product.name || '').trim();
	const productTitle = rawTitle.replace(
		/(\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm\s+\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm)/gi,
		'<span style="display:inline-block;">$1</span>'
	);
	const oldPrice = product.highPrice || product.lowPrice || '';

	return `
        <td width="96" valign="middle" align="center" class="${isLast ? 'freebieImageTdLast' : 'freebieImageTd'}">
          <a href="${productHref}" target="_blank">
            <img src="${productSrc}" alt="${product.name || ''}" width="96" height="96" class="freebieImage" />
          </a>
        </td>

        <td valign="middle" align="left" class="${isLast ? 'freebieTitleTdLast' : 'freebieTitleTd'}">
          <a href="${productHref}" target="_blank" style="text-decoration: none; color: ${freebiesTextColor};">
            <span class="newsletterProductTitleFreebie" style="color: ${freebiesTextColor};">${productTitle}</span>
          </a>

          <!--[if !mso]><!-->
          <div class="freebiePriceMobile">
            ${oldPrice ? `<span class="freebieOldPriceMobile">${oldPrice}</span>` : ''}
            <span class="freebieLowPriceMobile" style="color: ${freebiesFreeColor};">${freeText}</span>
          </div>
          <!--<![endif]-->
        </td>

        <td valign="middle" align="right" class="${isLast ? 'freebiePriceDesktopTdLast' : 'freebiePriceDesktopTd'}">
          ${oldPrice ? `<div class="freebieOldPriceDesktop">${oldPrice}</div>` : ''}
          <div class="freebieLowPriceDesktop" style="color: ${freebiesFreeColor};">${freeText}</div>
        </td>
  `;
};

const renderSingleFreebie2col = ({ product, isLast, freebiesTextColor, freebiesFreeColor, freeText }) => {
	if (!product) return '';
	const productHref = product.href;
	const productSrc = typeof product.src === 'object' && product.src !== null ? product.src.src : product.src;
	const rawTitle = (product.description?.trim() || product.name || '').trim();
	const productTitle = rawTitle.replace(
		/(\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm\s+\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?\s*cm)/gi,
		'<span style="display:inline-block;">$1</span>'
	);
	const oldPrice = product.highPrice || product.lowPrice || '';

	const imgClass   = isLast ? 'freebieImgTd2colLast'   : 'freebieImgTd2col';
	const titleClass = isLast ? 'freebieTitleTd2colLast' : 'freebieTitleTd2col';
	const priceClass = isLast ? 'frebiePriceTd2colLast'  : 'frebiePriceTd2col';

	return `
        <td width="96" valign="middle" align="center" class="${imgClass}">
          <a href="${productHref}" target="_blank">
            <img src="${productSrc}" alt="${product.name || ''}" width="96" height="96" class="freebieImage" />
          </a>
          <!--[if !mso]><!-->
          <div class="freebieTileMobile">
            <a href="${productHref}" target="_blank" style="text-decoration: none; color: ${freebiesTextColor};">
              <span class="newsletterProductTitleFreebie freebieTileMobileTitle" style="color: ${freebiesTextColor};">${productTitle}</span>
            </a>
            <div class="freebieTileMobilePrice">
              ${oldPrice ? `<div class="freebieOldPriceMobile">${oldPrice}</div>` : ''}
              <div class="freebieLowPriceMobile" style="color: ${freebiesFreeColor};">${freeText}</div>
            </div>
          </div>
          <!--<![endif]-->
        </td>

        <td valign="middle" align="left" class="${titleClass}">
          <a href="${productHref}" target="_blank" style="text-decoration: none; color: ${freebiesTextColor};">
            <span class="newsletterProductTitleFreebie" style="color: ${freebiesTextColor};">${productTitle}</span>
          </a>
          <!--[if !mso]><!-->
          <div class="freebiePriceMobile">
            ${oldPrice ? `<span class="freebieOldPriceMobile">${oldPrice}</span>` : ''}
            <span class="freebieLowPriceMobile" style="color: ${freebiesFreeColor};">${freeText}</span>
          </div>
          <!--<![endif]-->
        </td>

        <td valign="middle" align="right" class="${priceClass}">
          ${oldPrice ? `<div class="freebieOldPriceDesktop">${oldPrice}</div>` : ''}
          <div class="freebieLowPriceDesktop" style="color: ${freebiesFreeColor};">${freeText}</div>
        </td>
  `;
};

const renderEmpty2col = (isLast) => {
	const imgClass   = isLast ? 'freebieImgTd2colLast'   : 'freebieImgTd2col';
	const titleClass = isLast ? 'freebieTitleTd2colLast' : 'freebieTitleTd2col';
	const priceClass = isLast ? 'frebiePriceTd2colLast'  : 'frebiePriceTd2col';
	return `<td class="${imgClass}"></td><td class="${titleClass}"></td><td class="${priceClass}"></td>`;
};

const renderFreebiesList = ({
	freebies,
	freebiesTitle,
	freebiesBackground = '#ffffff',
	freebiesTitleColor = '#750000',
	freebiesFreeColor = '#750000',
	freebiesTextColor = '#000000',
	freeText = 'FREE',
	columns = 1,
}) => {
	if (!Array.isArray(freebies) || freebies.length === 0) return '';

	let itemsHtml = '';

	if (columns === 2) {
		for (let productIndex = 0; productIndex < freebies.length; productIndex += 2) {
			const left = freebies[productIndex];
			const right = freebies[productIndex + 1];
			const isLastRow = productIndex + 2 >= freebies.length;
			const leftHtml  = renderSingleFreebie2col({ product: left, isLast: isLastRow, freebiesTextColor, freebiesFreeColor, freeText });
			const rightHtml = right
				? renderSingleFreebie2col({ product: right, isLast: isLastRow, freebiesTextColor, freebiesFreeColor, freeText })
				: renderEmpty2col(isLastRow);
			itemsHtml += `
        <tr>
          ${leftHtml}
          <td class="freebieGapTd2col"></td>
          ${rightHtml}
        </tr>
      `;
		}
	} else {
		itemsHtml = freebies
			.map((product, index) => {
				if (!product) return '';
				const isLast = index === freebies.length - 1;
				return `
        <tr>
          ${renderSingleFreebie({ product, isLast, freebiesTextColor, freebiesFreeColor, freeText })}
        </tr>
      `;
			})
			.join('');
	}

	return `
    <tr>
      <td class="freebiesContainer" style="background-color: ${freebiesBackground};">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          ${freebiesTitle
		? `
          <tr>
            <td colspan="${columns === 2 ? 7 : 3}" align="left" class="newsletterBottom10px">
              <span class="newsletterFreebiesTitle" style="color: ${freebiesTitleColor};">${freebiesTitle}</span>
            </td>
          </tr>
          `
		: ''
	}
          ${itemsHtml}
        </table>
      </td>
    </tr>
  `;
};

const Timer = ({
	title,
	subtitle,
	href,
	src,
	color = '#000000',
	background = 'white',
	unitBackground,
	freebies,
	freebiesTitle,
	freebiesBackground = '#ffffff',
	freebiesTitleColor = '#750000',
	freebiesFreeColor = '#750000',
	freebiesTextColor = '#000000',
	freeText = 'FREE',
	freebiesColumns = 1,
	ctaText,
	type,
	script = '',
}) => {
	const hasProductList = Array.isArray(freebies) && freebies.length > 0;
	const hasSingleImage =
		typeof freebies === 'string' ||
		(freebies && typeof freebies === 'object' && freebies.src && !Array.isArray(freebies));

	return `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="color: ${color}; background-color: ${background};">
          ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
          
          <tr>
            <td align="center" class="newsletterContainer">
              ${Paragraph({
								text: title,
								tableContainer: true,
								className: 'newsletterSubtitleTimer',
								spanStyle: `color: ${color}`,
								align: 'center',
							})}
            </td>
          </tr>
          
          <tr>
            <td align="center" class="newsletterContainer">
              ${Paragraph({
								text: subtitle,
								tableContainer: true,
								className: 'newsletterSubtitleTimer',
								spanStyle: `color: ${color}`,
								align: 'center',
							})}
            </td>
          </tr>

          ${Space({ insideTr: true, className: 'newsletterBottom20px' })}

          ${type === 'newsletter'
						? ImageWithLink({
							href: href,
							src: src,
							insideTr: true,
							tdClass: 'newsletterContainer60px',
						})
						: `<tr><td class="newsletterContainer60px" align="center" vAlign="middle"><a style="color: ${color}; text-decoration: none;" href="${href}"><div id="prolo-timer">Loading...</div></a></td></tr>`
					}

          ${Space({ insideTr: true, className: 'newsletterBottom20px' })}

          ${CTA({
						className: 'newsletterFreebieCta',
						href: href,
						text: ctaText,
						color: color,
						align: 'center',
						insideTr: true,
					})}
          
          ${hasSingleImage ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
          
            ${ImageWithLink({ insideTr: true, src: typeof freebies === 'object' ? freebies.src : freebies, href: href, alt: 'Freebies Image' })}  
          `
						: `${Space({ insideTr: true, className: 'newsletterBottom20px' })}`
					}

          ${type === 'newsletter' ? '' : script}

          ${type !== 'newsletter' ? `<style>
            :root {
              --timer-bg: ${background};
              --timer-unit-bg: ${unitBackground ?? background};
              --timer-numbers: ${color};
              --timer-label: ${color};
            }
          </style>` : ''}
        </table>
      </td>
    </tr>

    ${hasProductList
			? renderFreebiesList({
				freebies,
				freebiesTitle,
				freebiesBackground,
				freebiesTitleColor,
				freebiesFreeColor,
				freebiesTextColor,
				freeText,
				columns: freebiesColumns,
			})
			: ''
		}
  `;
};

export { Timer };
