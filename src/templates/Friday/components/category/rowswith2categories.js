import { Space } from '../Space.js';
import { Paragraph } from '../Paragraph.js';

// Default number of tiles per row. Can be overridden per block with `category.columns`.
const COLUMNS = 2;
 
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
 
const getName = ({ item, getCategoryTitle }) => {
	if (!item?.name) return '';
 
	const translated = typeof getCategoryTitle === 'function' ? getCategoryTitle(item.name) : item.name;
 
	return translated ?? item.name;
};
 
// outlook (word) adds td padding on top of the declared width, so the gaps are
// spacer cells instead of padding and every width is an exact pixel value
const getLayout = ({ totalWidth, containerPadding, gap, columns }) => {
	const inner = totalWidth - containerPadding * 2;
	const tile = Math.floor((inner - gap * (columns - 1)) / columns);
	const widths = new Array(columns).fill(tile);
	widths[columns - 1] = inner - gap * (columns - 1) - tile * (columns - 1);
 
	return { inner, widths, gap };
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
 
	return `
    ${heading.spaceBefore ? Space({ insideTr: true, className: heading.spaceBefore }) : ''}
    <tr>
      <td class="${heading.container ?? containerClass}" align="${heading.align ?? 'center'}">
        ${Paragraph({
		text,
		align: heading.align ?? 'center',
		className: heading.className ?? 'newsletterTitle',
		spanStyle: `color: ${heading.color ?? color}; ${heading.styles ?? ''}`,
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
	const ctaText = showText
		? (category?.tileCta?.phrase ? getPhrase(category.tileCta.phrase) : getPhrase('Shop now'))
		: '';
	// Tile text layout:
	//   'stacked' (default) – name centered, CTA centered underneath
	//   'inRow'             – name on the left, CTA on the right, in one line
	const textInRow = category?.tileTextLayout === 'inRow';
	const nameColor = category?.tileNameColor;
	const ctaColor = category?.tileCtaColor;
	const spaceBetweenRows = category?.spaceBetweenRows ?? 'newsletterBottom35px';
 
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
			const width = layout.widths[columnId];
			const gapHtml = `<td class="newsletterCategoryGap" width="${layout.gap}" style="width: ${layout.gap}px; padding: 0; font-size: 0; line-height: 0;">&nbsp;</td>`;
 
			if (columnId > 0) {
				imgCells += gapHtml;
				if (showText) {
					nameCells += gapHtml;
					ctaCells += gapHtml;
				}
			}
 
			// Empty cell keeps the column width when the last row is not full (odd number of items)
			if (!item) {
				imgCells += `<td class="newsletterCategoryTile" width="${width}" style="width: ${width}px; padding: 0; vertical-align: top;"></td>`;
				if (showText) {
					nameCells += `<td class="newsletterCategoryTile" width="${width}" style="width: ${width}px; padding: 0; vertical-align: top;"></td>`;
					ctaCells += `<td class="newsletterCategoryTile" width="${width}" style="width: ${width}px; padding: 0; vertical-align: top;"></td>`;
				}
				continue;
			}
 
			const href = getHref({ item, getCategoryLink, add_utm, fallbackHref: categoryHref });
			const name = getName({ item, getCategoryTitle });
			const src = getSrc(item);
 
			imgCells += `
				<td class="newsletterCategoryTile" width="${width}" style="width: ${width}px; padding: 0; vertical-align: top;" align="center">
					<a href="${href}" style="text-decoration: none; display: block; line-height: 0;"><img src="${src}" alt="${name}" width="${width}" style="display: block; width: 100%; max-width: ${width}px; vertical-align: top;" loading="lazy"></a>
				</td>
			`;
 
			if (showText && textInRow) {
				// One line: name (left) + CTA (right) in a nested full-width table – Outlook-safe, no floats/flex
				nameCells += `
					<td class="newsletterCategoryTile" width="${width}" valign="top" style="width: ${width}px; padding: 10px 0 0 0; vertical-align: top;">
						<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
							<tr>
								<td class="frenchDaysCategoryName" align="left" valign="middle" style="padding: 0 8px 0 0; text-align: left; vertical-align: middle; font-size: 20px; font-size: clamp(14px, 3.6vw, 20px); font-weight: 400; line-height: 1.25; overflow-wrap: anywhere; color: ${nameColor ?? '#750000'}; font-weight: 600;">
									<a href="${href}" style="color: ${nameColor ?? '#750000'}; text-decoration: none;">${name}</a>
								</td>
								<td align="right" valign="middle" style="padding: 0; text-align: right; vertical-align: middle; white-space: nowrap; font-size: 20px; line-height: 1.25;">
									<a href="${href}" class="frenchDaysCategoryCta" style="font-size: 20px; font-size: clamp(14px, 3.6vw, 20px); line-height: 1.25; white-space: nowrap; color: ${ctaColor ?? '#000000'}; text-decoration: underline; font-weight: 600;">${ctaText}</a>
								</td>
							</tr>
						</table>
					</td>
				`;
			} else if (showText) {
				nameCells += `
					<td class="newsletterCategoryTile frenchDaysCategoryName" width="${width}" valign="top" align="center" style="width: ${width}px; padding-top: 16px; font-size: 20px; font-size: clamp(14px, 3.6vw, 20px); font-weight: 700; line-height: 1.25; vertical-align: top; overflow-wrap: anywhere; color: ${nameColor ?? '#750000'};">
						<a href="${href}" style="color: ${nameColor ?? '#750000'}; text-decoration: none;">${name}</a>
					</td>
				`;
 
				ctaCells += `
					<td class="newsletterCategoryTile" width="${width}" valign="top" align="center" style="width: ${width}px; padding-top: 6px; font-size: 16px; line-height: 1.25; vertical-align: top;">
						<a href="${href}" class="frenchDaysCategoryCta" style="font-size: 16px; font-size: clamp(12px, 3.2vw, 16px); line-height: 1.25; overflow-wrap: anywhere; color: ${ctaColor ?? '#000000'}; text-decoration: underline;">${ctaText}</a>
					</td>
				`;
			}
		}
 
		html += `
      <tr>
        <td class="${containerClass}">
          <table cellspacing="0" cellpadding="0" border="0" width="${layout.inner}" style="width: 100%; max-width: ${layout.inner}px; table-layout: fixed;">
            <tr>
              ${imgCells}
            </tr>
            ${showText ? `
            <tr>
              ${nameCells}
            </tr>
            ${textInRow ? '' : `
            <tr>
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