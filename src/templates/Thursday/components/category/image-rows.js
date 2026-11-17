// Rows of linked images with their own widths (e.g. a wide + a narrow tile in one row),
// separated by a fixed gap in the category background colour.
//
// category config:
//   tiles: [                                     // one array per row
//     [{ src, width: 650, titleIndex: 0 }],
//     [{ src, width: 438, titleIndex: 1 }, { src, width: 208, titleIndex: 2 }],
//   ],
//   gap: 4,                                      // px between tiles and between rows
//
// widths are px of the full row (gaps included they should add up to the row width, 650 for a full-width row).
// href: tile.href (beliani.ch url / translateLink) or the category href (already translated, with UTMs).
// alt: tile.alt, or queries.titles[titleIndex].

const resolveSrc = (src) => (src && typeof src === 'object' ? src.src : src) ?? '';

const resolveHref = ({ tile, category, getCategoryLink, add_utm }) => {
	const href = tile?.href;

	if (!href) return category?.href || '#';

	if (typeof href === 'string') {
		if (href.includes('/content/')) return typeof add_utm === 'function' ? add_utm(href) : href;
		return String(typeof getCategoryLink === 'function' ? getCategoryLink(href) : href);
	}

	if (typeof href === 'object' && href.href) {
		return typeof add_utm === 'function' ? add_utm(String(href.href)) : String(href.href);
	}

	return category?.href || '#';
};

const pct = (value, total) => `${+((value / total) * 100).toFixed(3)}%`;

export const render = ({ tiles, queries, getCategoryLink, add_utm, category = {} }) => {
	const rows = Array.isArray(tiles) ? tiles.filter((row) => Array.isArray(row) && row.length) : [];
	if (!rows.length) return '';

	const gap = Number(category.gap ?? 4);
	const background = category.background ?? '#ffffff';
	const bgAttr = `background-color: ${background};" bgcolor="${background}`;

	const gapCell = (total) =>
		`<td width="${gap}" style="width: ${pct(gap, total)}; padding: 0; font-size: 0; line-height: 0; mso-line-height-rule: exactly; ${bgAttr}">&nbsp;</td>`;

	const rowGap = `<tr><td height="${gap}" style="height: ${gap}px; padding: 0; font-size: ${gap}px; line-height: ${gap}px; mso-line-height-rule: exactly; ${bgAttr}">&nbsp;</td></tr>`;

	const html = rows
		.map((row, rowIndex) => {
			const total = row.reduce((sum, tile) => sum + Number(tile.width ?? 0), 0) + gap * (row.length - 1);

			const cells = row
				.map((tile, tileIndex) => {
					const width = Number(tile.width ?? 0);
					const href = resolveHref({ tile, category, getCategoryLink, add_utm });
					const alt = tile.alt ?? queries?.titles?.[tile.titleIndex] ?? '';

					return `${tileIndex > 0 ? gapCell(total) : ''}<td width="${width}" valign="top" style="width: ${pct(width, total)}; padding: 0; vertical-align: top; font-size: 0; line-height: 0;"><a href="${href}" target="_blank" style="display: block; line-height: 0; text-decoration: none;"><img src="${resolveSrc(tile.src)}" alt="${alt}" width="${width}" style="display: block; width: 100%; max-width: ${width}px; height: auto; border: 0;" loading="lazy"></a></td>`;
				})
				.join('');

			return `${rowIndex > 0 ? rowGap : ''}<tr><td style="padding: 0;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr>${cells}</tr></table></td></tr>`;
		})
		.join('');

	return `
  <tr>
    <td style="padding: 0;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; ${bgAttr}">
        ${html}
      </table>
    </td>
  </tr>`;
};
