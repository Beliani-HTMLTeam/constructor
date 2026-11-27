import { Space } from '../Space.js';

const pct = (value) => `${+value.toFixed(4)}%`;

const toRows = (products, columns) => {
	const rows = [];
	let row = [];
	let used = 0;

	for (const product of products) {
		const span = Math.min(Math.max(Number(product?.span ?? 1), 1), columns);

		if (used + span > columns && row.length) {
			rows.push(row);
			row = [];
			used = 0;
		}

		row.push({ product, span });
		used += span;
	}

	if (row.length) rows.push(row);

	return rows;
};

const spaceRow = (className) => (className ? Space({ insideTr: true, className }).replace('<td', '<td colspan="3"') : '');

const Tile = ({ product, tilePx, insetPx, style, showNames, align, color }) => {
	const insetPct = (insetPx / tilePx) * 100;
	const innerPct = 100 - insetPct * 2;
	const titleStyle = style.title ?? {};
	const src = typeof product.src === 'object' && product.src ? product.src.src : product.src;
	const background = style.background ?? '#ffffff';

	const inset = `<td width="${pct(insetPct)}" style="width: ${pct(insetPct)}; font-size: 0; line-height: 0;">&nbsp;</td>`;

	const label = product.label ?? product.name;

	const image = src
		? `<a target="_blank" href="${product.href ?? '#'}" style="display: block; line-height: 0;"><img src="${src}" alt="${label ?? ''}" width="100%" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0;" loading="lazy"></a>`
		: '';

	const name =
		showNames && label
			? `
        ${spaceRow(style.nameGapClass ?? 'newsletterBottom10px')}
        <tr>
          ${inset}
          <td align="${align}" class="${titleStyle.className ?? 'newsletterProductTitle'}" style="text-align: ${align}; color: ${titleStyle.color ?? color}; word-wrap: break-word; ${titleStyle.styles ?? ''}">${label}</td>
          ${inset}
        </tr>`
			: '';

	return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="${background}" style="width: 100%; height: 100%; border-collapse: collapse; background-color: ${background};">
      ${spaceRow(style.spaceTopClass ?? 'newsletterBottom10px')}
      <tr>
        ${inset}
        <td width="${pct(innerPct)}" valign="top" style="width: ${pct(innerPct)}; vertical-align: top; line-height: 0; font-size: 0;">${image}</td>
        ${inset}
      </tr>
      ${name}
      ${spaceRow(style.spaceBottomClass ?? 'newsletterBottom15px')}
    </table>`;
};

export const render = ({ products, showNames, align = 'left', color, container, category }) => {
	if (!Array.isArray(products) || products.length === 0) return '';

	const columns = Number(category?.columns ?? 3);
	const gap = Number(category?.gap ?? 10);
	const rowWidth = Number(category?.rowWidth ?? 590);
	const unitPx = (rowWidth - gap * (columns - 1)) / columns;
	const gapPct = (gap / rowWidth) * 100;

	const style = category?.product ?? { background: '#ffffff' };
	const insetPx = Number(style.insetX ?? 10);
	const tileBackground = style.background ?? '#ffffff';
	const containerClass = container ?? 'newsletterContainer';

	const gapCell = `<td width="${pct(gapPct)}" style="width: ${pct(gapPct)}; font-size: 0; line-height: 0;">&nbsp;</td>`;
	const rowGapClass = category?.rowGapClass ? ` class="${category.rowGapClass}"` : '';
	const rowGap = `<tr><td${rowGapClass} height="${gap}" style="height: ${gap}px; font-size: 0; line-height: 0; mso-line-height-rule: exactly;">&nbsp;</td></tr>`;

	const rowsHtml = toRows(products, columns)
		.map((row) => {
			const cells = row
				.map(({ product, span }, index) => {
					const tilePx = unitPx * span + gap * (span - 1);
					const width = (tilePx / rowWidth) * 100;

					return `${index > 0 ? gapCell : ''}<td width="${pct(width)}" valign="top" bgcolor="${tileBackground}" style="width: ${pct(width)}; vertical-align: top; background-color: ${tileBackground};">${Tile({ product, tilePx, insetPx, style, showNames, align, color })}</td>`;
				})
				.join('');

			return `<tr><td style="padding: 0;"><table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; table-layout: fixed; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr>${cells}</tr></table></td></tr>`;
		})
		.join(rowGap);

	return `
    <tr>
      <td class="${containerClass}" style="color: ${color};">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; border-collapse: collapse;">
          ${rowsHtml}
        </table>
      </td>
    </tr>`;
};
