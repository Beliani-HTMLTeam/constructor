import { Space } from '../Space.js';
import { Paragraph } from '../Paragraph.js';

const COLUMNS = 3;

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
const getLayout = ({ totalWidth, containerPadding, gap }) => {
	const inner = totalWidth - containerPadding * 2;
	const tile = Math.floor((inner - gap * (COLUMNS - 1)) / COLUMNS);
	const widths = new Array(COLUMNS).fill(tile);
	widths[COLUMNS - 1] = inner - gap * (COLUMNS - 1) - tile * (COLUMNS - 1);

	return { inner, widths, gap };
};

const renderTile = ({ item, width, color, nameColor, ctaColor, ctaText, showText, getCategoryLink, getCategoryTitle, add_utm, fallbackHref }) => {
	if (!item) {
		return `<td class="newsletterCategoryTile" width="${width}" style="width: ${width}px; padding: 0; vertical-align: top;"></td>`;
	}

	const href = getHref({ item, getCategoryLink, add_utm, fallbackHref });
	// the tile images already carry the category name and the cta
	const name = showText ? getName({ item, getCategoryTitle }) : '';
	const src = getSrc(item);

	return `
    <td class="newsletterCategoryTile" width="${width}" style="width: ${width}px; padding: 0; vertical-align: top;">
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td align="center">
            <a href="${href}" style="text-decoration: none;"><img src="${src}" alt="${name}" width="${width}" style="display: block; width: 100%; max-width: ${width}px; vertical-align: top;" loading="lazy"></a>
          </td>
        </tr>
        ${showText
			? `
        <tr>
          <td class="newsletterBottom20px"></td>
        </tr>
        <tr>
          <td align="center">
            <a href="${href}" class="newsletterProductTitle" style="color: ${nameColor ?? color}; text-decoration: none;">${name}</a>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-top: 4px;">
            <a href="${href}" class="newsletterFreebieCta" style="color: ${ctaColor ?? color}; text-decoration: underline;">${ctaText}</a>
          </td>
        </tr>
          `
			: ''}
      </table>
    </td>
  `;
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
	const rows = Array.isArray(category?.categories) ? category.categories : [];

	if (rows.length === 0) return '';

	const containerClass = container ?? 'newsletterContainer';
	const layout = getLayout({
		totalWidth: category?.totalWidth ?? 650,
		containerPadding: category?.containerPadding ?? 20,
		gap: category?.tileGap ?? 11,
	});
	const showText = category?.showTileText ?? false;
	const ctaText = showText
		? (category?.tileCta?.phrase ? getPhrase(category.tileCta.phrase) : getPhrase('Shop now'))
		: '';
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
		const row = Array.isArray(rows[rowId]) ? rows[rowId] : [];
		const isLastRow = rowId === rows.length - 1;

		let cells = '';
		for (let columnId = 0; columnId < COLUMNS; columnId++) {
			if (columnId > 0) {
				cells += `<td class="newsletterCategoryGap" width="${layout.gap}" style="width: ${layout.gap}px; padding: 0; font-size: 0; line-height: 0;">&nbsp;</td>`;
			}

			cells += renderTile({
				item: row[columnId],
				width: layout.widths[columnId],
				color,
				nameColor,
				ctaColor,
				ctaText,
				showText,
				getCategoryLink,
				getCategoryTitle,
				add_utm,
				fallbackHref: categoryHref,
			});
		}

		html += `
      <tr>
        <td class="${containerClass}">
          <table cellspacing="0" cellpadding="0" border="0" width="${layout.inner}" style="width: 100%; max-width: ${layout.inner}px; table-layout: fixed;">
            <tr>
              ${cells}
            </tr>
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
