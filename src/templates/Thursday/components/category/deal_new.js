import { Space } from '../Space.js';
import { Paragraph } from '../Paragraph.js';
import { CTA } from '../CTA.js';
import { buildCopyIcon } from '../CopyCodeCTA.js';

const DEAL_TIER_LINES = 3;

const chunk = (items, size) => {
	const result = [];

	for (let i = 0; i < items.length; i += size) {
		result.push(items.slice(i, i + size));
	}

	return result;
};

const getQueryRows = (queries, name) => (Array.isArray(queries?.[name]) ? queries[name] : []);

const getQueryText = (queries, name, index, fallback) => {
	const value = getQueryRows(queries, name)[index];

	return value === undefined || value === null || String(value).trim() === '' ? fallback : String(value);
};

const getCodeValue = (text) => {
	const raw = String(text ?? '');
	const parts = raw.split(':');

	return (parts.length > 1 ? parts.slice(1).join(':') : raw).trim();
};

// rough average glyph width of the newsletter font, as a fraction of the font size
const GLYPH_WIDTH_RATIO = 0.62;

// the three columns are narrow and the text must not wrap, so long translations
// (eg. "GRATUIT", "le moins cher") get scaled down until they fit the column.
// the longest text of the row decides the size for every column, so all three stay equal
const getFitStyle = ({ texts, maxWidth, maxFontSize, minFontSize }) => {
	const longest = texts.reduce((max, text) => Math.max(max, String(text ?? '').trim().length), 0);

	if (!longest) return '';

	const fitted = Math.floor(maxWidth / (longest * GLYPH_WIDTH_RATIO));
	const floor = Math.min(minFontSize, maxFontSize);
	const size = Math.max(floor, Math.min(maxFontSize, fitted));

	return size < maxFontSize ? `font-size: ${size}px !important;` : '';
};

const DEFAULT_ROW_ORDER = ['row1', 'row2', 'row3'];

// per shop line order, same config shape as the french days template:
// rowOrder: { default: ['row1','row2','row3'], 'fr,chfr,befr': ['row1','row3','row2'] }
const resolveRowOrder = (rowOrder = {}, country) => {
	const slug = String(country ?? '').toLowerCase();
	const rules = Array.isArray(rowOrder)
		? rowOrder.map(({ countries, order }) => [countries, order])
		: Object.entries(rowOrder);

	const countryList = (key) =>
		(Array.isArray(key) ? key : String(key ?? '').split(',')).map((value) => String(value).trim().toLowerCase());

	const isValid = (candidate) =>
		Array.isArray(candidate) &&
		candidate.length === 3 &&
		new Set(candidate).size === 3 &&
		candidate.every((name) => DEFAULT_ROW_ORDER.includes(name));

	let order = DEFAULT_ROW_ORDER;

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

// outlook (word) adds td padding on top of the declared width, so the cells carry
// an exact pixel width with no padding and all the insets live in an inner div
const getColumnWidths = ({ columns, totalWidth }) => {
	const base = Math.floor(totalWidth / columns);
	const widths = new Array(columns).fill(base);
	widths[columns - 1] = totalWidth - base * (columns - 1);

	return widths;
};

const getColumnStyles = ({ width, columnId, columns, borderColor, borderTop, borderBottom }) => {
	const isLast = columnId === columns - 1;

	return [
		'vertical-align: top;',
		`width: ${width}px;`,
		'padding: 0;',
		isLast ? '' : `border-right: 1px solid ${borderColor};`,
		borderTop ? `border-top: 1px solid ${borderColor};` : '',
		borderBottom ? `border-bottom: 1px solid ${borderColor};` : '',
	].join(' ');
};

const getInnerPadding = ({ columnId, columns, verticalPadding, paddingTop, paddingBottom, horizontalPadding }) => {
	const isLast = columnId === columns - 1;
	// the borders run edge to edge, only the text is kept off the edges
	const paddingLeft = columnId === 0 ? horizontalPadding : 10;
	const paddingRight = isLast ? horizontalPadding : 10;

	return `padding-top: ${paddingTop ?? verticalPadding}px; padding-bottom: ${paddingBottom ?? verticalPadding
		}px; padding-left: ${paddingLeft}px; padding-right: ${paddingRight}px;`;
};

const renderTierCell = ({
	tier,
	width,
	columnId,
	columns,
	color,
	borderColor,
	classes,
	verticalPadding,
	paddingBottom,
	horizontalPadding,
	borderBottom,
	fitStyles,
	order,
}) => {
	const [label = '', value = '', note = ''] = tier;

	const lines = {
		row1: `<div><span class="${classes.label}">${label}</span></div>`,
		row2: `<div style="white-space: nowrap;"><span class="${classes.value}" style="${fitStyles.value}">${value}</span></div>`,
		row3: `<div><span class="${classes.note}">${note}</span></div>`,
	};

	return `
    <td width="${width}" align="center" style="${getColumnStyles({
		width,
		columnId,
		columns,
		borderColor,
		borderTop: true,
		// no divider between the tier text and the code below it
		borderBottom,
	})}">
      <div style="color: ${color}; text-align: center; ${getInnerPadding({
		columnId,
		columns,
		verticalPadding,
		paddingBottom,
		horizontalPadding,
	})}">
        ${order.map((name) => lines[name]).join('')}
      </div>
    </td>
  `;
};

const renderCodeCell = ({
	text,
	width,
	columnId,
	columns,
	color,
	borderColor,
	classes,
	verticalPadding,
	paddingTop,
	horizontalPadding,
	toast,
}) => {
	const codeValue = getCodeValue(text);

	// lp to mozna divki
	return `
    <td width="${width}" align="center" style="${getColumnStyles({
			width,
			columnId,
			columns,
			borderColor,
			borderTop: false,
			borderBottom: true,
		})}">
      <div style="color: ${color}; text-align: center; ${getInnerPadding({
				columnId,
				columns,
				verticalPadding,
				paddingTop,
				horizontalPadding,
			})}">
        <span class="${classes.code}" style="display: inline-flex; align-items: center; white-space: nowrap;">
          ${text}
          ${buildCopyIcon({ codeValue, color, toastBg: toast.background, toastText: toast.color, label: toast.label })}
        </span>
      </div>
    </td>
  `;
};

const renderDealTable = ({ queries, color, borderColor, classes, verticalPadding, horizontalPadding, codeSpacing, toast, fit, order, totalWidth, showCodes, rowClass }) => {
	const tiers = chunk(getQueryRows(queries, 'deal_img'), DEAL_TIER_LINES).filter((tier) => tier.length > 0);

	if (tiers.length === 0) return '';

	const codes = getQueryRows(queries, 'deal_codes');
	const columns = tiers.length;

	// the discount must stay on one line, so it is the only one that gets scaled,
	// and the same size is used in every column
	const fitStyles = {
		value: getFitStyle({
			texts: tiers.map((tier) => tier[1]),
			maxWidth: fit.maxWidth,
			maxFontSize: fit.value,
			minFontSize: fit.min,
		}),
	};

	const widths = getColumnWidths({ columns, totalWidth });

	let tierCells = '';
	let codeCells = '';

	for (let columnId = 0; columnId < columns; columnId++) {
		tierCells += renderTierCell({
			tier: tiers[columnId],
			width: widths[columnId],
			columnId,
			columns,
			color,
			borderColor,
			classes,
			verticalPadding,
			horizontalPadding,
			fitStyles,
			order,
			paddingBottom: showCodes ? 0 : undefined,
			borderBottom: !showCodes,
		});

		if (showCodes) {
			codeCells += renderCodeCell({
				text: codes[columnId] ?? codes[0] ?? '',
				width: widths[columnId],
				columnId,
				columns,
				color,
				borderColor,
				classes,
				verticalPadding,
				paddingTop: codeSpacing,
				horizontalPadding,
				toast,
			});
		}
	}

	return `
    <tr${rowClass ? ` class="${rowClass}"` : ''}>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="${totalWidth}" style="width: 100%; max-width: ${totalWidth}px; table-layout: fixed; border-collapse: collapse;">
          <tr>
            ${tierCells}
          </tr>
          ${codeCells ? `<tr>${codeCells}</tr>` : ''}
        </table>
      </td>
    </tr>
  `;
};

// below 768px the columns do not fit
const renderMobileDealTable = ({ queries, color, borderColor, classes, verticalPadding, horizontalPadding, codeSpacing, toast, order, showCodes, rowClass }) => {
	const tiers = chunk(getQueryRows(queries, 'deal_img'), DEAL_TIER_LINES).filter((tier) => tier.length > 0);

	if (tiers.length === 0) return '';

	const codes = getQueryRows(queries, 'deal_codes');

	let rows = '';
	for (let i = 0; i < tiers.length; i++) {
		const [label = '', value = '', note = ''] = tiers[i];
		const codeText = showCodes ? (codes[i] ?? codes[0] ?? '') : '';
		const codeValue = getCodeValue(codeText);

		rows += `
      <tr>
        <td align="center" style="vertical-align: top; padding: ${verticalPadding}px ${horizontalPadding}px; ${i === 0 ? `border-top: 1px solid ${borderColor};` : ''
			} border-bottom: 1px solid ${borderColor};">
          <div style="color: ${color}; text-align: center;">
            ${order
				.map(
					(name) =>
						({
							row1: `<div><span class="${classes.label}">${label}</span></div>`,
							row2: `<div><span class="${classes.value}">${value}</span></div>`,
							row3: `<div><span class="${classes.note}">${note}</span></div>`,
						})[name]
				)
				.join('')}
            ${codeText
				? `
            <div style="padding-top: ${codeSpacing}px;">
              <span class="${classes.code}" style="display: inline-flex; align-items: center; white-space: nowrap;">
                ${codeText}
                ${buildCopyIcon({ codeValue, color, toastBg: toast.background, toastText: toast.color, label: toast.label })}
              </span>
            </div>
            `
				: ''
			}
          </div>
        </td>
      </tr>
    `;
	}

	return `
    <!--[if !mso]><!-->
    <tr${rowClass ? ` class="${rowClass}"` : ''} style="display: none;">
      <td>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse: collapse;">
          ${rows}
        </table>
      </td>
    </tr>
    <!--<![endif]-->
  `;
};

const renderConditions = ({ queries, color, containerClass, styles = '', spaceBetween, query }) => {
	// "condition" is the footer one, the deal has its own rows
	const conditions = getQueryRows(queries, query ?? 'deal_condition');

	if (conditions.length === 0) return '';

	let html = '';
	for (let i = 0; i < conditions.length; i++) {
		const condition = conditions[i];

		if (i > 0) {
			html += Space({ insideTr: true, className: spaceBetween ?? 'newsletterBottom20px' });
		}

		html += `
      <tr>
        <td class="${containerClass}" align="center">
          ${Paragraph({
						text: condition,
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
	const accentColor = category?.background ?? '#FF2F00';
	const borderColor = category?.dealBorderColor ?? textColor;

	// styled in the campaign additionalCss so the sizes can be tuned per campaign
	const classes = {
		label: category?.dealClasses?.label ?? 'newsletterDealTierLabel',
		value: category?.dealClasses?.value ?? 'newsletterDealTierValue',
		note: category?.dealClasses?.note ?? 'newsletterDealTierNote',
		code: category?.dealClasses?.code ?? 'newsletterDealCode',
	};

	const dealVerticalPadding = category?.dealVerticalPadding ?? 15;

	const dealImgSrc = typeof category?.dealImg === 'object' ? category.dealImg?.src : category?.dealImg;

	const ctaDefaults = {
		variant: 'button',
		bg: textColor,
		textColor: accentColor,
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

	html += CTA({
		...ctaDefaults,
		href: categoryHref,
		text: getQueryText(queries, 'deal_header', 0, 'Deal header'),
		...(category?.headerCta ?? {}),
	});

	html += Space({ insideTr: true, className: category?.spaceAfterHeader ?? 'newsletterBottom20px' });

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

	html += Space({ insideTr: true, className: category?.spaceAfterTitle ?? 'newsletterBottom20px' });

	html += `
    <tr>
      <td class="${containerClass}" align="center">
        ${Paragraph({
		text: getQueryText(queries, 'deal_paragraph', 0, 'Deal paragraph'),
		align: 'center',
		spanStyle: `color: ${textColor}; ${category?.dealParagraph?.styles ?? ''}`,
	})}
      </td>
    </tr>
  `;

	html += Space({ insideTr: true, className: category?.spaceBeforeDeal ?? 'newsletterBottom35px' });

	const dealHorizontalPadding = category?.dealHorizontalPadding ?? 20;

	// usable width of a single column in the 3 column desktop layout
	const dealColumnWidth =
		category?.dealFit?.maxWidth ??
		Math.floor((category?.dealWidth ?? 650) / DEAL_TIER_LINES) - dealHorizontalPadding - 10;

	const dealTableProps = {
		queries,
		color: textColor,
		borderColor,
		classes,
		verticalPadding: dealVerticalPadding,
		horizontalPadding: dealHorizontalPadding,
		codeSpacing: category?.dealCodeSpacing ?? 10,
		totalWidth: category?.dealWidth ?? 650,
		order: resolveRowOrder(category?.rowOrder, country),
		fit: {
			maxWidth: dealColumnWidth,
			value: category?.dealFit?.value ?? 48,
			min: category?.dealFit?.min ?? 20,
		},
		toast: {
			background: category?.copyToast?.background ?? accentColor,
			color: category?.copyToast?.color ?? textColor,
			// same phrase the french days template uses, eg. "Code kopiert"
			label: category?.copyToast?.label ?? getPhrase('Copy code'),
		},
		// the code is only shown on the landing page
		showCodes: !isNewsletter,
	};

	const desktopRowClass = category?.dealDesktopClass ?? 'newsletterDealDesktop';
	const mobileRowClass = category?.dealMobileClass ?? 'newsletterDealMobile';

	if (isNewsletter && dealImgSrc) {
		// container disabled by default - the deal image goes edge to edge
		const dealImgContainer = category?.dealImgContainer;

		html += `
      <tr class="${desktopRowClass}">
        <td ${dealImgContainer ? `class="${dealImgContainer}"` : ''} align="center">
          <a href="${categoryHref}" style="text-decoration: none;"><img src="${dealImgSrc}" alt="Deal" style="display: block; width: 100%; max-width: 100%; vertical-align: top;" loading="lazy"></a>
        </td>
      </tr>
    `;
	} else {
		html += renderDealTable({ ...dealTableProps, rowClass: desktopRowClass });
	}

	// below 768px the image is too small to read and the columns do not fit
	html += renderMobileDealTable({ ...dealTableProps, rowClass: mobileRowClass });

	html += Space({ insideTr: true, className: category?.spaceAfterDeal ?? 'newsletterBottom35px' });

	if (isNewsletter) {
		html += CTA({
			...ctaDefaults,
			href: categoryHref,
			text: getPhrase('Get code'),
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
