import { Paragraph } from '../Paragraph.js';
import { CTA } from '../CTA.js';
import { buildCopyIcon } from '../CopyCodeCTA.js';
 
/*
  Category type: 'offer_tiers'
  ----------------------------
  Stacked offer tiers (-25% / -50% / FREE) separated by short lines,
  then the deal condition, a "Get codes" button (newsletter only) and the validity date.
 
  Newsletter -> value + description, NO codes, "Get codes" CTA
  Landing    -> value + description + CODE: XXX with copy icon (buildCopyIcon), no CTA
 
  Reads from queries (tableQueries):
    deal_1 / deal_2 / deal_3 -> [discount, description, code]
    deal_condition           -> [text]
    deal_date                -> [text]
*/
 
const DEFAULTS = {
	deals: ['deal_1', 'deal_2', 'deal_3'],
	conditionQuery: 'deal_condition',
	dateQuery: 'deal_date',
 
	valueColor: '#000000',
	highlightColor: '#750000',
	// indexes of tiers whose value uses highlightColor (FREE in the design)
	highlight: [2],
	codeColor: '#750000',
	// px, copy icon next to the code (LP)
	copyIconSize: 18,
 
	lineColor: '#750000',
	lineWidth: 48,
	lineHeight: 3,
 
	// toast shown after clicking the copy icon (landing page)
	copyToast: {
		background: '#FFE0D4',
		color: '#000000',
		// label: defaults to getPhrase('Copy code')
	},
 
	cta: {
		show: true,
		phrase: 'Get codes',
		background: '#FF8C00',
		color: '#000000',
	},
 
	// px
	spacing: {
		afterValue: 10,
		afterDescription: 0, // before the code (LP)
		beforeLine: 30,
		afterLine: 30,
		afterCondition: 20,
		afterCta: 20,
		afterDate: 0,
	},
};
 
const spacer = (height) =>
	height > 0
		? `<tr><td height="${height}" style="height: ${height}px; font-size: 0; line-height: 0; mso-line-height-rule: exactly;">&nbsp;</td></tr>`
		: '';
 
const firstValue = (value) => (Array.isArray(value) ? value[0] : value);
 
const row = ({ text, className = 'newsletterParagraph', spanStyle = '' }) => `
	<tr>
		<td>
			${Paragraph({
				text,
				insideTable: true,
				tableContainer: true,
				className,
				align: 'center',
				spanStyle,
			})}
		</td>
	</tr>
`;
 
const line = ({ color, width, height }) => `
	<tr>
		<td align="center">
			<table cellspacing="0" cellpadding="0" border="0" width="${width}" align="center" style="width: ${width}px !important; border-collapse: collapse;">
				<tr>
					<td height="${height}" bgcolor="${color}" style="height: ${height}px; background-color: ${color}; font-size: 0; line-height: 0; mso-line-height-rule: exactly;">&nbsp;</td>
				</tr>
			</table>
		</td>
	</tr>
`;
 
// "Code: XXX" -> <span class="offerTierCodePrefix">Code:</span> XXX
const formatCode = (code) => {
	const str = String(code ?? '');
	const i = str.indexOf(':');
	if (i === -1) return str;
 
	return `<span class="offerTierCodePrefix">${str.slice(0, i + 1)}</span>${str.slice(i + 1)}`;
};
 
// "Code: XXX" -> "XXX" (what gets copied)
const getCodeValue = (code) => {
	const raw = String(code ?? '');
	const parts = raw.split(':');
 
	return (parts.length > 1 ? parts.slice(1).join(':') : raw).trim();
};
 
// code text + copy icon on one line
// - the text sits in its own span, otherwise flex trims the space after "Code:"
// - the icon sits in a fixed-size box, sized by .offerTierCopyIcon in the campaign css
const codeWithCopyIcon = ({ code, color, toast, iconSize }) => `
  <span
    onclick="if (!event.target.closest('button')) { event.preventDefault(); event.stopPropagation(); this.querySelector('button').click(); }"
    style="display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;vertical-align:middle;cursor:pointer;"
  >
    <span>${formatCode(code)}</span>
    <span
      class="offerTierCopyIcon"
      style="display:inline-block;flex:0 0 ${iconSize}px;width:${iconSize}px;height:${iconSize}px;max-width:${iconSize}px;max-height:${iconSize}px;margin-left:8px;line-height:0;"
    >
      ${buildCopyIcon({
        codeValue: getCodeValue(code),
        color,
        toastBg: toast.background,
        toastText: toast.color,
        label: toast.label,
      })}
    </span>
  </span>
`;

export const render = ({ queries, links, getPhrase, renderType, categoryHref, category, type }) => {
	const config = category?.offerTiers ?? {};
	const cfg = {
		...DEFAULTS,
		...config,
		cta: { ...DEFAULTS.cta, ...(config.cta ?? {}) },
		copyToast: { ...DEFAULTS.copyToast, ...(config.copyToast ?? {}) },
		spacing: { ...DEFAULTS.spacing, ...(config.spacing ?? {}) },
	};
 
	const isNewsletter = renderType === 'newsletter';
	const highlight = Array.isArray(cfg.highlight) ? cfg.highlight : [];
	const toast = {
		background: cfg.copyToast.background,
		color: cfg.copyToast.color,
		label: cfg.copyToast.label ?? getPhrase('Copy code'),
	};
 
	const deals = cfg.deals.map((key, i) => {
		const cells = Array.isArray(queries?.[key]) ? queries[key] : [];
 
		return {
			value: cells[0] ?? `Deal ${i + 1} - discount`,
			description: cells[1] ?? `Deal ${i + 1} - description`,
			code: cells[2] ?? 'Code: XXX',
		};
	});
 
	let html = '';
 
	deals.forEach((deal, i) => {
		const valueColor = highlight.includes(i) ? cfg.highlightColor : cfg.valueColor;
		const isLast = i === deals.length - 1;
 
		html += row({
			text: deal.value,
			className: 'offerTierValue',
			spanStyle: `color: ${valueColor};`,
		});
		html += spacer(cfg.spacing.afterValue);
 
		html += row({ text: deal.description, spanStyle: `font-weight: 600;` });
 
		if (!isNewsletter) {
			html += spacer(cfg.spacing.afterDescription);
			html += row({
				text: codeWithCopyIcon({ code: deal.code, color: cfg.codeColor, toast, iconSize: cfg.copyIconSize }),
				className: 'offerTierCode',
				spanStyle: `color: ${cfg.codeColor};`,
			});
		}
 
		html += spacer(isLast ? (renderType === 'newsletter' ? cfg.spacing.beforeNSLTLastLine : cfg.spacing.beforeLPLastLine) ?? cfg.spacing.beforeLine : cfg.spacing.beforeLine);
		html += line({ color: cfg.lineColor, width: cfg.lineWidth, height: cfg.lineHeight });
		html += spacer(cfg.spacing.afterLine);
	});
 
	html += row({
		text: firstValue(queries?.[cfg.conditionQuery]) ?? 'Deal condition',
		spanStyle: 'font-weight: 700;',
	});
	html += spacer(cfg.spacing.afterCondition);
 
	if (isNewsletter && cfg.cta.show !== false) {
		html += CTA({
			type,
			href: cfg.cta.href ?? categoryHref ?? links?.TopImageTitle_href,
			text: getPhrase(cfg.cta.phrase),
			color: cfg.cta.color,
			bg: cfg.cta.background,
			textColor: cfg.cta.color,
			align: 'center',
			insideTr: true,
			variant: 'button',
			textTransform: 'none'
		});
		html += spacer(cfg.spacing.afterCta);
	}
 
	html += row({ text: firstValue(queries?.[cfg.dateQuery]) ?? 'Offer valid' });
	html += spacer(cfg.spacing.afterDate);
 
	return html;
};
 