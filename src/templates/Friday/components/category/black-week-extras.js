import { Space } from '../Space.js';
import { Paragraph } from '../Paragraph.js';
import { CTA } from '../CTA.js';
import { buildCopyIcon } from '../CopyCodeCTA.js';

// one tier = 4 lines of the "deal_img" query: EXTRA / 20% / OFF / when you spend min. €2500
const DEAL_TIER_LINES = 4;
// 2x2 grid - fits on mobile too, so there is no separate mobile layout
const DEAL_COLUMNS = 2;
// index (inside a tier) of the discount line - used for the image name and the font fitting
const VALUE_LINE = 1;
 
const chunk = (items, size) => {
	const result = [];
 
	for (let i = 0; i < items.length; i += size) {
		result.push(items.slice(i, i + size));
	}
 
	return result;
};
 
const getQueryRows = (queries, name) => (Array.isArray(queries?.[name]) ? queries[name] : []);
 
const isEmpty = (value) => value === undefined || value === null || String(value).trim() === '';
 
const getQueryText = (queries, name, index, fallback) => {
	const value = getQueryRows(queries, name)[index];
 
	return isEmpty(value) ? fallback : String(value);
};
 
const getCodeValue = (text) => {
	const raw = String(text ?? '');
	const parts = raw.split(':');
 
	return (parts.length > 1 ? parts.slice(1).join(':') : raw).trim();
};
 
const stripTags = (text) =>
	String(text ?? '')
		.replace(/<br\s*\/?>/gi, ' ')
		.replace(/<[^>]*>/g, '')
		.replace(/"/g, '&quot;')
		.replace(/\s+/g, ' ')
		.trim();
 
// "20%", "20 %", "-20%" -> "20"
const getPercent = (value) => (String(value ?? '').match(/\d+/) ?? [''])[0];
 
// rough average glyph width of the landing page font, as a fraction of the font size
const GLYPH_WIDTH_RATIO = 0.62;
 
// the discount must stay on one line, so long values (eg. "-20 %") get scaled down.
// the longest value decides the size for every box, so all four stay equal
const getFitStyle = ({ texts, maxWidth, maxFontSize, minFontSize }) => {
	const longest = texts.reduce((max, text) => Math.max(max, stripTags(text).length), 0);
 
	if (!longest) return '';
 
	const fitted = Math.floor(maxWidth / (longest * GLYPH_WIDTH_RATIO));
	const floor = Math.min(minFontSize, maxFontSize);
	const size = Math.max(floor, Math.min(maxFontSize, fitted));
 
	return size < maxFontSize ? `font-size: ${size}px !important; line-height: 1 !important;` : '';
};
 
const getDefaultRowOrder = (lines) => Array.from({ length: lines }, (_, i) => `row${i + 1}`);
 
// per shop line order inside a box, same config shape as the french days template:
// rowOrder: { default: ['row1','row2','row3','row4'], 'fr,chfr,befr': ['row2','row1','row3','row4'] }
const resolveRowOrder = (rowOrder = {}, country, lines) => {
	const defaults = getDefaultRowOrder(lines);
	const slug = String(country ?? '').toLowerCase();
	const rules = Array.isArray(rowOrder)
		? rowOrder.map(({ countries, order }) => [countries, order])
		: Object.entries(rowOrder);
 
	const countryList = (key) =>
		(Array.isArray(key) ? key : String(key ?? '').split(',')).map((value) => String(value).trim().toLowerCase());
 
	const isValid = (candidate) =>
		Array.isArray(candidate) &&
		candidate.length === lines &&
		new Set(candidate).size === lines &&
		candidate.every((name) => defaults.includes(name));
 
	let order = defaults;
 
	// later matches win: default first, then group rules, then a rule for this shop only
	for (const matches of [
		(list) => list.includes('default'),
		(list) => list.length > 1 && list.includes(slug),
		(list) => list.length === 1 && list[0] === slug,
	]) {
		for (const [key, candidate] of rules) {
			if (matches(countryList(key)) && isValid(candidate)) {
				order = candidate;
			}
		}
	}
 
	return order;
};
 
// newsletter box images, one per tier, in the same order as the tiers:
//   dealImgs: ['https://.../{country}_black_week_extra_20.png', ...]
// or a single pattern, {value} is taken from the discount line ("20%" -> 20):
//   dealImgPattern: 'https://.../{country}_black_week_extra_{value}.png'
const resolveDealImages = ({ category, tiers, country }) => {
	const slug = String(country ?? '').toLowerCase();
	const fill = (src, tier) =>
		String(src ?? '')
			.replace(/\{country\}/g, slug)
			.replace(/\{value\}/g, getPercent(tier?.[VALUE_LINE]));
	const srcOf = (img) => (typeof img === 'object' ? img?.src : img);
 
	if (Array.isArray(category?.dealImgs)) {
		return tiers.map((tier, i) => (srcOf(category.dealImgs[i]) ? fill(srcOf(category.dealImgs[i]), tier) : ''));
	}
 
	if (category?.dealImgPattern) {
		return tiers.map((tier) => fill(category.dealImgPattern, tier));
	}
 
	return [];
};
 
// percentages so the grid shrinks on mobile, pixel attributes for outlook
const getGridSizes = ({ totalWidth, gap }) => {
	const cellWidth = Math.floor((totalWidth - gap * (DEAL_COLUMNS - 1)) / DEAL_COLUMNS);
 
	return {
		cellWidth,
		cellPercent: ((cellWidth / totalWidth) * 100).toFixed(2),
		gapPercent: ((gap / totalWidth) * 100).toFixed(2),
	};
};
 
const renderGapCell = ({ gap, gapPercent }) =>
	`<td width="${gap}" style="width: ${gapPercent}%; padding: 0; font-size: 0; line-height: 0;">&nbsp;</td>`;
 
const renderGapRow = ({ gap }) => `
          <tr>
            <td colspan="${DEAL_COLUMNS * 2 - 1}" height="${gap}" style="height: ${gap}px; padding: 0; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>`;
 
// shared 2x2 table, renderCell draws the content of one box
const renderGrid = ({ items, totalWidth, gap, containerClass, rowClass, renderCell, cellStyles = '' }) => {
	if (items.length === 0) return '';
 
	const { cellWidth, cellPercent, gapPercent } = getGridSizes({ totalWidth, gap });
 
	let rows = '';
 
	chunk(items, DEAL_COLUMNS).forEach((row, rowIndex) => {
		if (rowIndex > 0) rows += renderGapRow({ gap });
 
		let cells = '';
 
		for (let col = 0; col < DEAL_COLUMNS; col++) {
			if (col > 0) cells += renderGapCell({ gap, gapPercent });
 
			const item = row[col];
 
			cells += `
            <td width="${cellWidth}" align="center" valign="top" style="width: ${cellPercent}%; vertical-align: top; ${item ? cellStyles : 'padding: 0;'
				}">
              ${item ? renderCell(item, cellWidth) : '&nbsp;'}
            </td>`;
		}
 
		rows += `
          <tr>${cells}
          </tr>`;
	});
 
	return `
    <tr${rowClass ? ` class="${rowClass}"` : ''}>
      <td${containerClass ? ` class="${containerClass}"` : ''} align="center">
        <table cellspacing="0" cellpadding="0" border="0" width="${totalWidth}" style="width: 100%; max-width: ${totalWidth}px; table-layout: fixed; border-collapse: collapse;">
          ${rows}
        </table>
      </td>
    </tr>
  `;
};
 
// newsletter: every box is an image (eg. uk_black_week_extra_20)
const renderImageGrid = ({ tiers, images, href, ...gridProps }) =>
	renderGrid({
		...gridProps,
		items: tiers.map((tier, i) => ({ tier, src: images[i] })),
		cellStyles: 'padding: 0;',
		renderCell: ({ tier, src }, cellWidth) =>
			src
				? `<a href="${href}" style="text-decoration: none;"><img src="${src}" alt="${stripTags(
					tier.join(' ')
				)}" width="${cellWidth}" style="display: block; width: 100%; max-width: ${cellWidth}px; height: auto; border: 0; vertical-align: top;" loading="lazy"></a>`
				: '&nbsp;',
	});
 
// landing page: the same boxes in html, with the code under every tier
const renderHtmlGrid = ({ tiers, codes, order, classes, colors, box, fit, codeSpacing, toast, showCopyIcon, ...gridProps }) => {
	const { cellWidth } = getGridSizes({ totalWidth: gridProps.totalWidth, gap: gridProps.gap });
 
	const fitStyle = getFitStyle({
		texts: tiers.map((tier) => tier[VALUE_LINE]),
		maxWidth: fit.maxWidth ?? cellWidth - box.paddingX * 2,
		maxFontSize: fit.value,
		minFontSize: fit.min,
	});
 
	// class per line: EXTRA / 20% / OFF / when you spend...
	const lineClasses = [classes.label, classes.value, classes.off, classes.note];
 
	const renderLine = (tier, name) => {
		const index = Number(name.replace('row', '')) - 1;
		const text = tier[index];
 
		if (isEmpty(text)) return '';
 
		const isValue = index === VALUE_LINE;
		const className = lineClasses[index] ?? classes.note;
 
		return isValue
			? `<div style="white-space: nowrap;"><span class="${className}" style="color: ${colors.value}; ${fitStyle}">${text}</span></div>`
			: `<div><span class="${className}" style="color: ${colors.text};">${text}</span></div>`;
	};
 
	return renderGrid({
		...gridProps,
		items: tiers.map((tier, i) => ({ tier, code: codes[i] ?? codes[0] ?? '' })),
		cellStyles: `background-color: ${colors.box}; border-radius: ${box.radius}px; padding: ${box.paddingY}px ${box.paddingX}px; box-sizing: border-box;`,
		renderCell: ({ tier, code }) => `
              <div style="text-align: center;">
                ${order.map((name) => renderLine(tier, name)).join('')}
                ${isEmpty(code)
				? ''
				: `
                <div style="padding-top: ${codeSpacing}px;">
                  <span class="${classes.code}" style="color: ${colors.value}; display: inline-flex; align-items: center; white-space: nowrap;">
                    ${code}
                    ${showCopyIcon
					? buildCopyIcon({
						codeValue: getCodeValue(code),
						color: colors.value,
						toastBg: toast.background,
						toastText: toast.color,
						label: toast.label,
					})
					: ''
				}
                  </span>
                </div>`
			}
              </div>`,
	});
};
 
const renderConditions = ({ queries, color, containerClass, styles = '', spaceBetween, query }) => {
	// "condition" is the footer one, the deal has its own rows
	const conditions = getQueryRows(queries, query ?? 'deal_condition');
 
	if (conditions.length === 0) return '';
 
	let html = '';
	for (let i = 0; i < conditions.length; i++) {
		if (i > 0) {
			html += Space({ insideTr: true, className: spaceBetween ?? 'newsletterBottom20px' });
		}
 
		html += `
      <tr>
        <td class="${containerClass}" align="center">
          ${Paragraph({
			text: conditions[i],
			align: 'center',
			spanStyle: `color: ${color}; ${styles}`,
		})}
        </td>
      </tr>
    `;
	}
 
	return html;
};
 
export const render = ({ queries, color, getPhrase, renderType, categoryHref, category, container, country }) => {
	const isNewsletter = renderType === 'newsletter';
	const containerClass = container ?? 'newsletterContainer';
	const textColor = category?.textColor ?? color ?? '#ffffff';
	const sectionColor = category?.background ?? '#000000';
 
	const colors = {
		text: category?.dealBoxTextColor ?? '#000000',
		value: category?.dealValueColor ?? '#FF2F00',
		box: category?.dealBoxColor ?? '#FFF3E6',
	};
 
	// styled in the campaign additionalCss so the sizes can be tuned per campaign
	const classes = {
		label: category?.dealClasses?.label ?? 'newsletterDealTierLabel',
		value: category?.dealClasses?.value ?? 'newsletterDealTierValue',
		off: category?.dealClasses?.off ?? 'newsletterDealTierOff',
		note: category?.dealClasses?.note ?? 'newsletterDealTierNote',
		code: category?.dealClasses?.code ?? 'newsletterDealCode',
	};
 
	const tierLines = category?.dealTierLines ?? DEAL_TIER_LINES;
	const tiers = chunk(getQueryRows(queries, 'deal_img'), tierLines).filter((tier) => tier.some((line) => !isEmpty(line)));
	const codes = getQueryRows(queries, 'deal_codes');
 
	const ctaDefaults = {
		variant: 'button',
		bg: textColor,
		textColor: sectionColor,
		insideTr: true,
		align: 'center',
		tdClass: containerClass,
		fontSize: '16px',
		lineHeight: '16px',
		mobileFontSize: '16px',
		mobileLineHeight: '16px',
		paddingX: 30,
		paddingY: 14,
		paddingTop: 15,
		paddingBottom: 13,
		mobilePaddingX: 30,
		mobilePaddingY: 14,
		mobilePaddingTop: 15,
		mobilePaddingBottom: 13,
		msoTextRaise: '2pt',
		textTransform: category?.textTransform ?? 'uppercase',
	};
 
	let html = '';
 
	// optional - the black week design starts straight with the title
	const header = getQueryText(queries, 'deal_header', 0, '');
	if (header) {
		html += CTA({ ...ctaDefaults, href: categoryHref, text: header, ...(category?.headerCta ?? {}) });
		html += Space({ insideTr: true, className: category?.spaceAfterHeader ?? 'newsletterBottom20px' });
	}
 
	html += `
    <tr>
      <td class="${containerClass}" align="center">
        ${Paragraph({
		text: getQueryText(queries, 'deal_title', 0, 'Deal title'),
		align: 'center',
		className: 'newsletterTitle',
		spanStyle: `color: ${textColor}; ${category?.dealTitle?.styles ?? ''}`,
	})}
      </td>
    </tr>
  `;
 
	// optional paragraph under the title
	const paragraph = getQueryText(queries, 'deal_paragraph', 0, '');
	if (paragraph) {
		html += Space({ insideTr: true, className: category?.spaceAfterTitle ?? 'newsletterBottom20px' });
		html += `
      <tr>
        <td class="${containerClass}" align="center">
          ${Paragraph({
			text: paragraph,
			align: 'center',
			spanStyle: `color: ${textColor}; ${category?.dealParagraph?.styles ?? ''}`,
		})}
        </td>
      </tr>
    `;
	}
 
	html += Space({ insideTr: true, className: category?.spaceBeforeDeal ?? 'newsletterBottom20px' });
 
	const gridProps = {
		// inner width of the container, the grid is percentage based so it also shrinks on mobile
		totalWidth: category?.dealWidth ?? 560,
		gap: category?.dealGap ?? 10,
		containerClass: category?.dealGridContainer ?? containerClass,
		rowClass: category?.dealRowClass,
	};
 
	const images = isNewsletter ? resolveDealImages({ category, tiers, country }) : [];
 
	if (isNewsletter && images.some(Boolean)) {
		html += renderImageGrid({ ...gridProps, tiers, images, href: categoryHref });
	} else {
		html += renderHtmlGrid({
			...gridProps,
			tiers,
			// the code is only shown on the landing page
			codes: isNewsletter ? [] : codes,
			order: resolveRowOrder(category?.rowOrder, country, tierLines),
			classes,
			colors,
			box: {
				radius: category?.dealBoxRadius ?? 10,
				paddingY: category?.dealBoxPaddingY ?? 16,
				paddingX: category?.dealBoxPaddingX ?? 10,
			},
			fit: {
				maxWidth: category?.dealFit?.maxWidth,
				value: category?.dealFit?.value ?? 48,
				min: category?.dealFit?.min ?? 24,
			},
			codeSpacing: category?.dealCodeSpacing ?? 8,
			showCopyIcon: category?.showCopyIcon ?? false,
			toast: {
				background: category?.copyToast?.background ?? colors.value,
				color: category?.copyToast?.color ?? '#ffffff',
				label: category?.copyToast?.label ?? getPhrase('Copy code'),
			},
		});
	}
 
	html += Space({ insideTr: true, className: category?.spaceAfterDeal ?? 'newsletterBottom20px' });
 
	if (isNewsletter) {
		// more than one code in the deal -> plural cta
		const codesCount = codes.filter((code) => !isEmpty(code)).length;
 
		html += CTA({
			...ctaDefaults,
			href: categoryHref,
			text: getPhrase(codesCount > 1 ? 'Get codes' : 'Get code'),
			...(category?.codeCta ?? {}),
		});
 
		html += Space({ insideTr: true, className: category?.spaceAfterCodeCta ?? 'newsletterBottom20px' });
	}
 
	html += renderConditions({
		queries,
		color: textColor,
		containerClass,
		styles: category?.conditions?.styles,
		spaceBetween: category?.conditions?.spaceBetween,
		query: category?.conditions?.query,
	});
 
	html += Space({ insideTr: true, className: category?.spaceAfterConditions ?? 'newsletterBottom35px' });
 
	return html;
};