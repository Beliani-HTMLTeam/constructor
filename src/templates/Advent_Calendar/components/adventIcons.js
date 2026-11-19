// ============================================================
// Advent Calendar 2026 – 4 icons with labels ("24 Days", "Exclusive Offers" ...)
// Newsletter + Landing Page
//
// Usage in the template:
//   const iconsElement = AdventIcons({ queries, type, href: links?.columnsImage_href, tdClass: 'newsletterContainer40px' });
//
// Texts: queries.icons – sheet "01.12.26 - Advent Calendar", rows 29:32 (Icon 1 – Icon 4)
//   { tableRange: '29:32', name: 'icons', tableName: adventSheet }
// Each label is split into 2 lines at its last space ("Exclusive<br />Offers", as in the design).
// A <br /> written in the sheet is kept as it is.
// Mobile sizes (additionalCss): .advent-icons__box, .advent-icons__img--1 … --4, .advent-icons__label
// ============================================================
 
const RED = '#750000';
const NSLT_FONT = "'Open Sans', Arial, Helvetica, sans-serif";
const LP_FONT = "'Poppins', Arial, Helvetica, sans-serif";

// PNG (SVG doesn't show in Gmail / Outlook), exported at 2x, transparent background
const ICON_BASE = 'https://pictureserver.net/static/2026/';
const DEFAULT_ICONS = [
  `${ICON_BASE}advent_icon_1.png?ver=29`,   // calendar "24"
  `${ICON_BASE}advent_icon_2.png?ver=10`,   // star
  `${ICON_BASE}advent_icon_3.png?ver=10`,   // hourglass
  `${ICON_BASE}advent_icon_4_2.png?ver=40`,   // flower
];
// Display size of each icon in px [width, height] – sizes from the design.
// Outlook needs both numbers (otherwise it shows the PNG at its own size).
// Keep the PNG's proportions: e.g. a 84 x 84 export -> [42, 42].
const DEFAULT_ICON_SIZES = [
  [42, 42],   // calendar
  [56, 54],   // star
  [31, 44],   // hourglass
  [48, 45],   // flower
];
const ICON_BOX = 56;      // all icons stand on one line at the bottom of a 56px high box (labels stay level)
const ITEM_WIDTH = 135;   // one icon + label: 4 x 135 = 540 fits the 570px desktop row,
                          // on phones (content ~270-350px) only 2 fit -> 2 rows of 2
const ROW_GAP = 12;       // space under each icon + label (= between the 2 rows on mobile)

const DEFAULT_LABELS = ['24 Days', 'Exclusive Offers', '24-Hour Deals', 'Don’t Miss Out'];

// all rows of a query as a list of texts
const rowsOf = (rows) =>
  [].concat(rows || []).map((r) => String((Array.isArray(r) ? r[0] : r) ?? '').trim());

// "Exclusive Offers" -> "Exclusive<br />Offers" (last space; labels with a <br /> stay as they are)
const twoLines = (label) => {
  if (/<br\s*\/?>/i.test(label)) return label;
  const i = label.lastIndexOf(' ');
  return i > 0 ? `${label.slice(0, i)}<br />${label.slice(i + 1)}` : label;
};

export function AdventIcons({
  queries = {},
  type,
  href,                    // optional: icon + label become a link (LP: scrolls to the calendar)
  icons = DEFAULT_ICONS,
  iconSizes = DEFAULT_ICON_SIZES,
  tdClass = 'newsletterContainer40px',
  breakLabels = true,      // false = labels wrap by themselves
}) {
  const font = String(type || '').toLowerCase().includes('landing') ? LP_FONT : NSLT_FONT;
  const labels = rowsOf(queries.icons);
  const wrap = (inner) =>
    href ? `<a href="${href}" target="_blank" style="color:${RED}; text-decoration:none;">${inner}</a>` : inner;

  const items = DEFAULT_LABELS.map((fallback, i) => {
    const text = labels[i] || fallback;
    const [w, h] = iconSizes[i] || [ICON_BOX, ICON_BOX];
    return { label: breakLabels ? twoLines(text) : text, w, h, src: icons[i] };
  });

  // one icon + its label (a small table: icon box on top, label below)
  const item = ({ label, w, h, src }, i) =>
    `<div class="advent-icons__item" style="display:inline-block; width:100%; max-width:${ITEM_WIDTH}px; vertical-align:top; padding-bottom:${ROW_GAP}px;">` +
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; border-collapse:collapse;">` +
        `<tr><td class="advent-icons__box" align="center" valign="bottom" height="${ICON_BOX}" style="height:${ICON_BOX}px; font-size:0;">${wrap(
          `<img class="advent-icons__img advent-icons__img--${i + 1}" src="${src}" alt="" width="${w}" height="${h}" style="display:block; width:${w}px; height:${h}px; margin:0 auto; border:0; outline:none;" />`
        )}</td></tr>` +
        `<tr><td class="advent-icons__label" align="center" valign="top" style="padding:14px 4px 0 4px; font-family:${font}; font-size:16px; line-height:24px; mso-line-height-rule:exactly; font-weight:600; color:${RED}; text-align:center;">${wrap(label)}</td></tr>` +
      `</table>` +
    `</div>`;

  // no spaces between the boxes (a space would push the 4th box to a new line on desktop);
  // classic Outlook: each box in its own cell of a fixed 4-column table
  const cells = items
    .map((it, i) =>
      (i === 0
        ? `<!--[if mso]><table role="presentation" align="center" width="${ITEM_WIDTH * 4}" cellpadding="0" cellspacing="0" border="0"><tr><td width="${ITEM_WIDTH}" valign="top"><![endif]-->`
        : `<!--[if mso]></td><td width="${ITEM_WIDTH}" valign="top"><![endif]-->`) + item(it, i)
    )
    .join('') + `<!--[if mso]></td></tr></table><![endif]-->`;

  return `
  <tr>
    <td class="${tdClass}" align="center" style="text-align:center; font-size:0; line-height:0;">${cells}</td>
  </tr>`;
}