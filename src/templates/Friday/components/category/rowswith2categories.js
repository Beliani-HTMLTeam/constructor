import { Space } from '../Space.js';
import { Paragraph } from '../Paragraph.js';
import { CTA } from '../CTA.js';

// Default look of the 'button' tile text layout (name centered + filled button underneath).
// Every key can be overridden per block with `category.tileButton: { ... }` (same props as CTA variant 'button').
const TILE_BUTTON_DEFAULTS = {
	background: '#750000',
	color: '#ffffff',
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '500',
	letterSpacing: null,
	borderRadius: '3px',
	paddingX: 45,
	paddingTop: 5,
	paddingBottom: 5,
	mobilePaddingX: 20,
	mobilePaddingTop: 5,
	mobilePaddingBottom: 5,
	mobileFontSize: '16px',
	mobileLineHeight: '20px',
	textTransform: 'none',
	spaceBefore: 8, // px between the name and the button
};

const OVERRIDE_GROUPS = {
	dach: ['chde', 'de', 'at'],
};

// Default number of tiles per row. Can be overridden per block with `category.columns`.
const COLUMNS = 2;
 
// ── Outlook (Word) whole-pixel heights ─────────────────────────────────────────────────────────
// Outlook reads `line-height: 1.25` as "1.25 x its own single line spacing", not 1.25 x font size,
// so every text line gets a fractional height. The tiles add those fractions up and Outlook leaves
// a 1px gap (the line between the categories and the footer). How many lines a name takes changes
// per shop - that's why one country had the line and another didn't.
// mso-line-height-alt is read ONLY by Outlook: every other client keeps line-height 1.25 / 1.4.
const msoLine = (px) => `mso-line-height-alt: ${px}px; mso-line-height-rule: exactly;`;
const MSO_NAME_LINE = 25; // 20px * 1.25
const MSO_STACKED_CTA_LINE = 20; // 16px * 1.25
const MSO_TITLE_LINE = 48; // newsletterTitle 34px * 1.4 = 47.6
 
// Image height attribute for Outlook (whole pixels). Size of the tile image FILE in the config:
//   tileImageSize: { width: 288, height: 216 }   -> 287px tile = 215, 288px tile = 216
// or the shown height directly:
//   tileImageHeight: 216
// Nothing set -> no height attribute (as before). CSS height stays auto, so other clients don't change.
const getImageHeight = ({ category, width }) => {
	if (category?.tileImageHeight) return Math.round(Number(category.tileImageHeight)) || null;
 
	const size = category?.tileImageSize;
	if (size?.width && size?.height) return Math.round((width * Number(size.height)) / Number(size.width)) || null;
 
	return null;
};
 
const getSrc = (item) => {
	if (!item?.src) return '';
 
	return typeof item.src === 'object' ? item.src.src : item.src;
};
 
const getHref = ({ item, getCategoryLink, add_utm, fallbackHref }) => {
	const href = item?.href;
 
	if (!href) return fallbackHref ?? '#';
 
	if (typeof href === 'string') {
		// getCategoryLink returns a URL instance and already appends utm params for newsletters
		const translated = typeof getCategoryLink === 'function' ? getCategoryLink(href) : href;
 
		return String(translated ?? href);
	}
 
	const rawHref = href.href ?? '';
 
	return typeof add_utm === 'function' ? add_utm(rawHref) : rawHref;
};
 

const getOverride = (overrides, country) => {
	if (!overrides || typeof overrides !== 'object' || !country) return undefined;

	const slug = String(country).trim().toLowerCase();
	let fromGroup;

	for (const [key, value] of Object.entries(overrides)) {
		if (value === undefined || value === null || String(value).trim() === '') continue;

		const shops = String(key)
			.split(',')
			.map((part) => part.trim().toLowerCase())
			.flatMap((part) => OVERRIDE_GROUPS[part] ?? [part]);

		if (String(key).trim().toLowerCase() === slug) return value;
		if (fromGroup === undefined && shops.includes(slug)) fromGroup = value;
	}

	return fromGroup;
};

const getName = ({ item, getCategoryTitle, country }) => {
	const override = getOverride(item?.overrides, country);
	if (override !== undefined) return override;

	if (!item?.name) return '';

	const translated = typeof getCategoryTitle === 'function' ? getCategoryTitle(item.name) : item.name;

	return translated ?? item.name;
};

const NAME_CTA_GAP = 8; // = right padding of the name cell
const textLength = (text) => String(text ?? '').replace(/<[^>]*>/g, '').replace(/&[#a-z0-9]+;/gi, 'x').trim().length;

const textCollides = ({ name, ctaText, width, category }) => {
	const charWidth = category?.tileTextCharWidth ?? 0.6;
	const nameWidth = textLength(name) * (category?.tileNameFontSize ?? 20) * charWidth;
	const ctaWidth = textLength(ctaText) * (category?.tileCtaFontSize ?? 20) * charWidth;

	return nameWidth + NAME_CTA_GAP + ctaWidth > width;
};
 
// outlook (word) adds td padding on top of the declared width, so the gaps are
// spacer cells instead of padding and every width is an exact pixel value
const getLayout = ({ totalWidth, containerPadding, gap, columns }) => {
	const inner = totalWidth - containerPadding * 2;
	const tile = Math.floor((inner - gap * (columns - 1)) / columns);
	const widths = new Array(columns).fill(tile);
	widths[columns - 1] = inner - gap * (columns - 1) - tile * (columns - 1);
 
	// Same widths as % of the row, so the tiles shrink with the screen in every client except Outlook
	// (Outlook uses the pixel `width` attributes). The last column takes the rounding rest -> sums to 100%.
	const pct = (px) => Math.floor((px / inner) * 100 * 1000) / 1000;
	const widthsPct = widths.map(pct);
	const gapPct = pct(gap);
	widthsPct[columns - 1] = +(100 - gapPct * (columns - 1) - widthsPct.slice(0, -1).reduce((a, b) => a + b, 0)).toFixed(3);
 
	return { inner, widths, gap, widthsPct, gapPct };
};
 
// The data may still be prepared in rows of 3 (or any size). All items are taken in order
// and regrouped into rows of `columns`, so nothing gets dropped when the column count changes.
const toRows = (rows, columns) => {
	const items = rows.flatMap((row) => (Array.isArray(row) ? row : [])).filter(Boolean);
	const result = [];
 
	for (let i = 0; i < items.length; i += columns) {
		result.push(items.slice(i, i + columns));
	}
 
	return result;
};
 
const renderHeading = ({ heading, queries, getPhrase, color, containerClass }) => {
	if (!heading) return '';
 
	const queryRow = heading.query ? queries?.[heading.query] : null;
	const fromQuery = Array.isArray(queryRow) ? queryRow[0] : queryRow;
	const text = heading.text ?? fromQuery ?? (heading.phrase ? getPhrase(heading.phrase) : undefined);
 
	if (!text) return '';
 
	// Outlook-only whole-pixel line height for the title (heading.msoLineHeight: false switches it off)
	const titleMso = heading.msoLineHeight === false ? '' : msoLine(heading.msoLineHeight ?? MSO_TITLE_LINE);
 
	return `
    ${heading.spaceBefore ? Space({ insideTr: true, className: heading.spaceBefore }) : ''}
    <tr>
      <td class="${heading.container ?? containerClass}" align="${heading.align ?? 'center'}"${titleMso ? ` style="${titleMso}"` : ''}>
        ${Paragraph({
		text,
		align: heading.align ?? 'center',
		className: heading.className ?? 'newsletterTitle',
		spanStyle: `color: ${heading.color ?? color}; ${titleMso} ${heading.styles ?? ''}`,
	})}
      </td>
    </tr>
    ${Space({ insideTr: true, className: heading.spaceAfter ?? 'newsletterBottom35px' })}
  `;
};
 
export const render = ({
	category,
	color,
	container,
	categoryHref,
	queries,
	getCategoryLink,
	getCategoryTitle,
	getPhrase,
	add_utm,
	country,
	renderType,
}) => {
	const columns = category?.columns ?? COLUMNS;
	const rows = toRows(Array.isArray(category?.categories) ? category.categories : [], columns);
 
	if (rows.length === 0) return '';
 
	const containerClass = container ?? 'newsletterContainer';
	const layout = getLayout({
		totalWidth: category?.totalWidth ?? 650,
		containerPadding: category?.containerPadding ?? 20,
		gap: category?.tileGap ?? 11,
		columns,
	});
	const showText = category?.showTileText ?? false;
	// CTA text: tileCta.query (first row of a tableQuery, e.g. "Shop ›" from the campaign tab)
	// -> tileCta.phrase (static phrase) -> static 'Shop now'
	const ctaQueryRow = category?.tileCta?.query ? queries?.[category.tileCta.query] : null;
	const ctaFromQuery = Array.isArray(ctaQueryRow) ? ctaQueryRow[0] : ctaQueryRow;
	const ctaText = showText
		? (ctaFromQuery && String(ctaFromQuery).trim()
			? String(ctaFromQuery).trim()
			: (category?.tileCta?.phrase ? getPhrase(category.tileCta.phrase) : getPhrase('Shop now')))
		: '';
	// Tile text layout:
	//   'stacked' (default) – name centered, CTA centered underneath
	//   'inRow'             – name on the left, CTA on the right, in one line
	//   'button'            – name centered, filled CTA button underneath (style: category.tileButton)
	const textInRow = category?.tileTextLayout === 'inRow';
	const textAsButton = category?.tileTextLayout === 'button';
	const tileButton = { ...TILE_BUTTON_DEFAULTS, ...(category?.tileButton ?? {}) };
	const nameColor = category?.tileNameColor;
	const ctaColor = category?.tileCtaColor;
	// text-decoration of the tile CTA link ('none' = no underline), default underline
	const ctaDecoration = category?.tileCtaDecoration ?? 'underline';
	const spaceBetweenRows = category?.spaceBetweenRows ?? 'newsletterBottom35px';

	// Outlook (Word) doesn't always pass the section background down to cells without their own
	// background, so the white wrapper shows through as thin white lines (e.g. in the gap between
	// two CTA buttons). Every table / row / gap cell of the tiles gets the category background.
	const tileBg = category?.tileBackground ?? category?.background;
	const bgAttr = tileBg ? ` bgcolor="${tileBg}"` : '';
	const bgCss = tileBg ? ` background-color: ${tileBg};` : '';

	// 'button' layout: the CTA button (VML-free, mso-text-raise padding) can come out a fractional
	// height in Outlook (Word). The gap cell next to it then ends 1px early and a white line shows
	// at the bottom of the gap. The gap cell of the button row gets an Outlook-only block of the
	// expected row height in whole pixels (space above + padding + line height), so Word snaps
	// the whole row to that. Other clients only see the usual 1px &nbsp;.
	// Tweak with category.tileButton.msoRowHeight if Outlook still shows a line.
	const ctaRowHeight = Math.ceil(
		tileButton.msoRowHeight ??
			(Number(tileButton.spaceBefore) || 0) +
			(Number(tileButton.paddingTop) || 0) +
			(parseFloat(tileButton.lineHeight) || 0) +
			(Number(tileButton.paddingBottom) || 0)
	);
	const ctaGapHtml = `<td class="newsletterCategoryGap" width="${layout.gap}"${bgAttr} valign="top" style="width: ${layout.gapPct}%; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly; vertical-align: top;${bgCss}"><!--[if mso]><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td height="${ctaRowHeight}" style="height: ${ctaRowHeight}px; font-size: 1px; line-height: ${ctaRowHeight}px; mso-line-height-rule: exactly;${bgCss}">&nbsp;</td></tr></table><![endif]--><!--[if !mso]><!-->&nbsp;<!--<![endif]--></td>`;

	const textStackMode = category?.tileTextStack ?? 'auto';
	const stackText = showText && textInRow && textStackMode !== 'never' && (
		textStackMode === 'always' ||
		rows.some((row) => row.some((item, columnId) => item && textCollides({
			name: getName({ item, getCategoryTitle, country  }),
			ctaText,
			width: layout.widths[columnId],
			category,
		})))
	);
 
	let html = renderHeading({
		heading: category?.heading,
		queries,
		getPhrase,
		color,
		containerClass,
	});
 
	for (let rowId = 0; rowId < rows.length; rowId++) {
		const row = rows[rowId];
		const isLastRow = rowId === rows.length - 1;
 
		let imgCells = '';
		let nameCells = '';
		let ctaCells = '';
 
		for (let columnId = 0; columnId < columns; columnId++) {
			const item = row[columnId];
			const width = layout.widths[columnId]; // px – width attribute (Outlook) + image width
			const widthPct = `${layout.widthsPct[columnId]}%`; // % – CSS width, scales with the screen
			// 1px exactly instead of 0: Outlook can't do font-size 0 and falls back to a default (fractional) line
			const gapHtml = `<td class="newsletterCategoryGap" width="${layout.gap}"${bgAttr} style="width: ${layout.gapPct}%; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;${bgCss}">&nbsp;</td>`;
 
			if (columnId > 0) {
				imgCells += gapHtml;
				if (showText) {
					nameCells += gapHtml;
					ctaCells += textAsButton ? ctaGapHtml : gapHtml;
				}
			}
 
			// Empty cell keeps the column width when the last row is not full (odd number of items)
			if (!item) {
				imgCells += `<td class="newsletterCategoryTile" width="${width}" style="width: ${widthPct}; padding: 0; vertical-align: top;"></td>`;
				if (showText) {
					nameCells += `<td class="newsletterCategoryTile" width="${width}" style="width: ${widthPct}; padding: 0; vertical-align: top;"></td>`;
					ctaCells += `<td class="newsletterCategoryTile" width="${width}" style="width: ${widthPct}; padding: 0; vertical-align: top;"></td>`;
				}
				continue;
			}
 
			const href = getHref({ item, getCategoryLink, add_utm, fallbackHref: categoryHref });
			const name = getName({ item, getCategoryTitle, country });
			const src = getSrc(item);
			const imgHeight = getImageHeight({ category, width });
 
			// height attribute = Outlook only; css height: auto keeps every other client / mobile as before
			imgCells += `
				<td class="newsletterCategoryTile" width="${width}" style="width: ${widthPct}; padding: 0; vertical-align: top;" align="center">
					<a href="${href}" style="text-decoration: none; display: block; line-height: 0;"><img src="${src}" alt="${name}" width="${width}"${imgHeight ? ` height="${imgHeight}"` : ''} style="display: block; width: 100%; max-width: ${width}px; height: auto; vertical-align: top;" loading="lazy"></a>
				</td>
			`;
 
			if (showText && textInRow) {
				const nameLink = `<a href="${href}" style="color: ${nameColor ?? '#750000'}; text-decoration: none;">${name}</a>`;
				const ctaLink = `<a href="${href}" class="frenchDaysCategoryCta" style="color: ${ctaColor ?? '#000000'}; text-decoration: ${ctaDecoration};">${ctaText}</a>`;
				const nameStyle = `text-align: left; font-size: 20px; font-weight: 600; line-height: 1.25; ${msoLine(MSO_NAME_LINE)} word-break: normal; overflow-wrap: break-word; hyphens: manual; color: ${nameColor ?? '#750000'};`;
				const ctaStyle = `font-weight: 600; ${msoLine(MSO_NAME_LINE)} word-break: normal; overflow-wrap: break-word; hyphens: manual;`;

				if (stackText) {
					// Name and CTA in SEPARATE rows of the outer table: the name row is as tall as the
					// tallest name in the row, so every CTA starts at the same height,
					// even when the neighbour's name wraps to two lines.
					nameCells += `
						<td class="newsletterCategoryTile categoryTileText" width="${width}" valign="top" style="width: ${widthPct}; padding: 10px 0 0 0; vertical-align: top;">
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
								<tr>
									<td class="frenchDaysCategoryName categoryTileInRowName" align="left" valign="top" style="padding: 0; vertical-align: top; ${nameStyle}">
										${nameLink}
									</td>
								</tr>
							</table>
						</td>
					`;

					ctaCells += `
						<td class="newsletterCategoryTile categoryTileInRowCta" width="${width}" align="left" valign="top" style="width: ${widthPct}; padding: 6px 0 0 0; text-align: left; vertical-align: top; ${ctaStyle}">
							${ctaLink}
						</td>
					`;
				} else {
					// name (left) + CTA (right) in one line
					nameCells += `
						<td class="newsletterCategoryTile categoryTileText" width="${width}" valign="middle" style="width: ${widthPct}; padding: 10px 0 0 0; vertical-align: middle;">
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
								<tr>
									<td class="frenchDaysCategoryName categoryTileInRowName" align="left" valign="middle" style="padding: 0 ${NAME_CTA_GAP}px 0 0; vertical-align: middle; ${nameStyle}">
										${nameLink}
									</td>
									<td class="categoryTileInRowCta" align="right" valign="middle" style="padding: 0; text-align: right; vertical-align: middle; white-space: nowrap; ${ctaStyle}">
										${ctaLink}
									</td>
								</tr>
							</table>
						</td>
					`;
				}
			} else if (showText && textAsButton) {
				// Name and button in separate rows of the outer table, so all buttons of a row
				// start at the same height even when a neighbour's name wraps to two lines.
				nameCells += `
					<td class="newsletterCategoryTile" width="${width}" valign="top" align="center"${bgAttr} style="width: ${widthPct};${bgCss} padding-top: ${category?.tileNameSpaceBefore ?? 10}px; font-size: 20px; font-weight: 600; line-height: 1.25; ${msoLine(MSO_NAME_LINE)} vertical-align: top; text-align: center; word-break: normal; overflow-wrap: break-word; color: ${nameColor ?? '#750000'};">
						<a href="${href}" style="color: ${nameColor ?? '#750000'}; text-decoration: none;">${name}</a>
					</td>
				`;

				ctaCells += `
					<td class="newsletterCategoryTile" width="${width}" valign="top" align="center"${bgAttr} style="width: ${widthPct}; padding-top: ${tileButton.spaceBefore}px; vertical-align: top;${bgCss}">
						${CTA({
							href,
							text: ctaText,
							variant: 'button',
							type: renderType === 'landing' ? 'landing' : 'newsletter',
							align: 'center',
							bg: tileButton.background,
							textColor: tileButton.color,
							fontSize: tileButton.fontSize,
							lineHeight: tileButton.lineHeight,
							fontWeight: tileButton.fontWeight,
							letterSpacing: tileButton.letterSpacing,
							borderRadius: tileButton.borderRadius,
							paddingX: tileButton.paddingX,
							paddingTop: tileButton.paddingTop,
							paddingBottom: tileButton.paddingBottom,
							mobilePaddingX: tileButton.mobilePaddingX,
							mobilePaddingTop: tileButton.mobilePaddingTop,
							mobilePaddingBottom: tileButton.mobilePaddingBottom,
							mobileFontSize: tileButton.mobileFontSize,
							mobileLineHeight: tileButton.mobileLineHeight,
							textTransform: tileButton.textTransform,
						})}
					</td>
				`;
			} else if (showText) {
				nameCells += `
					<td class="newsletterCategoryTile frenchDaysCategoryName categoryTileStackedName" width="${width}" valign="top" align="center" style="width: ${widthPct}; padding-top: 16px; font-size: 20px; font-weight: 700; line-height: 1.25; ${msoLine(MSO_NAME_LINE)} vertical-align: top; word-break: break-word; overflow-wrap: break-word; color: ${nameColor ?? '#750000'};">
						<a href="${href}" style="color: ${nameColor ?? '#750000'}; text-decoration: none;">${name}</a>
					</td>
				`;
 
				ctaCells += `
					<td class="newsletterCategoryTile categoryTileStackedCta" width="${width}" valign="top" align="center" style="width: ${widthPct}; padding-top: 6px; font-size: 16px; line-height: 1.25; ${msoLine(MSO_STACKED_CTA_LINE)} vertical-align: top; word-break: break-word; overflow-wrap: break-word;">
						<a href="${href}" class="frenchDaysCategoryCta" style="color: ${ctaColor ?? '#000000'}; text-decoration: ${ctaDecoration};">${ctaText}</a>
					</td>
				`;
			}
		}
 
		html += `
      <tr${bgAttr}>
        <td class="${containerClass}"${bgAttr}${bgCss ? ` style="${bgCss.trim()}"` : ''}>
          <table cellspacing="0" cellpadding="0" border="0" width="${layout.inner}"${bgAttr} style="width: 100%; max-width: ${layout.inner}px; table-layout: fixed;${bgCss}">
            <tr${bgAttr}>
              ${imgCells}
            </tr>
            ${showText ? `
            <tr${bgAttr}>
              ${nameCells}
            </tr>
            ${textInRow && !stackText ? '' : `
            <tr${bgAttr}>
              ${ctaCells}
            </tr>
            `}
            ` : ''}
          </table>
        </td>
      </tr>
    `;
 
		if (!isLastRow) {
			html += Space({ insideTr: true, className: spaceBetweenRows });
		}
	}
 
	return html;
};