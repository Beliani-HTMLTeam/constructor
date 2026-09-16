import { CTA } from '../../CTA.js';
import { Space } from '../../Space.js';

// The translation API can return percentage cells as fractions. Only the
// discount line uses this fallback; already formatted copy remains untouched.
const formatDiscount = (value) => {
  const text = String(value ?? '');
  const numericText = text.trim().replace(',', '.');
  if (!/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(numericText)) return text;
  const number = Number(numericText);
  if (Math.abs(number) > 1) return text;
  return `${Number((number * 100).toFixed(8))}%`;
};

export const renderOfferSection = ({
  queries = {},
  renderType = 'newsletter',
  links = {},
  getPhrase = (text) => text,
  theme = {},
  country,
  rowOrder = {},
}) => {
  const slug = String(country ?? '').toLowerCase();
  const defaultOrder = ['row1', 'row2', 'row3'];
  let order = defaultOrder;
  const rules = Array.isArray(rowOrder)
    ? rowOrder.map(({ countries, order }) => [countries, order])
    : Object.entries(rowOrder);
  const countryList = (key) => (Array.isArray(key) ? key : String(key ?? '').split(','))
    .map((value) => String(value).trim().toLowerCase());
  for (const matches of [
    (list) => list.includes('default'),
    (list) => list.length > 1 && list.includes(slug),
    (list) => list.length === 1 && list[0] === slug,
  ]) {
    for (const [key, candidate] of rules) {
      if (matches(countryList(key)) && Array.isArray(candidate) && candidate.length === 3 &&
          new Set(candidate).size === 3 && candidate.every((name) => defaultOrder.includes(name))) {
        order = candidate;
      }
    }
  }
  const offerInfo = [1, 2, 3].map((tier) => queries[`offer_info_part_${tier}`] ?? []);
  const first = (value) => (Array.isArray(value) ? value[0] : value);
  const offer = queries.offer ?? [];
  const fontStyle = renderType === 'newsletter' ? "font-family:'Open Sans', Arial, sans-serif;" : '';
  const accent = theme.offerTitleColor ?? '#750000';
  const background = theme.offerBg ?? '#F6E7E6';
  const discounts = offerInfo.map((info) => formatDiscount(info[1]));
  const discountSizes = discounts.map((text) => {
    const length = Array.from(text.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, 'X').trim()).length;
    const max = Math.max(25, Math.round(40 * 6 / Math.max(6, length)));
    const viewport = (100 / (Math.max(6, length) * 0.7)).toFixed(2);
    const inset = (48 / (Math.max(6, length) * 0.7)).toFixed(2);
    return `font-size:${max}px;font-size:clamp(25px, calc(${viewport}vw - ${inset}px), ${max}px);`;
  });
  const row = (content, style = '', { before, after, className = '' } = {}) => `
    ${before ? Space({ insideTr: true, className: before, bg: background }) : ''}
    <tr><td class="newsletterContainer ${className}" align="center" style="${style}">${content}</td></tr>
    ${after ? Space({ insideTr: true, className: after, bg: background }) : ''}`;
  const tiers = [1, 2, 3]
    .map((tier) => {

      const info = offerInfo[tier - 1];
      const rawCode = String(first(queries[`offer_code_${tier + 1}_items`]) ?? '').trim();
      const code = (rawCode.split(':')[1] ?? rawCode).trim();
      const codeButton =
        renderType === 'landing' && code
          ? CTA({
              text: code,
              codeValue: code,
              type: renderType,
              getPhrase,
              color: accent,
              bg: background,
              theme,
              variant: 'plain',
            })
          : '';
      const divider = tier > 1 ? `border-left:1px solid ${accent};` : '';
      const styledRows = {
        row1: `<div style="font-size:14px;font-weight:normal;">${info[0] ?? ''}</div>`,
        row2: `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;"><tr><td class="frenchDaysDiscount" height="48" align="center" valign="middle" style="height:48px;text-align:center;vertical-align:middle;${discountSizes[tier - 1]}font-weight:700;line-height:1.2;overflow-wrap:anywhere;color:${accent};">${discounts[tier - 1]}</td></tr></table>`,
        row3: `<div style="font-size:14px;font-weight:normal;">${info[2] ?? ''}</div>`,
      };
      const cell = `<td class="frenchDaysCodeTier" width="33.33%" align="center" style="width:33.33%;padding:12px 4px;vertical-align:top;border-top-color:${accent};${divider}">
      ${order.map((name) => styledRows[name]).join('')}
      ${codeButton ? `<div style="padding-top:12px;">${codeButton}</div>` : ''}
    </td>`;
      return cell;
    })
    .join('');
  const button =
    renderType === 'newsletter'
      ? row(
          CTA({
            href: links.TopImageTitle_href || links.TopImage_href || '#',
            text: getPhrase('Get code'),
            type: renderType,
            color: '#ffffff',
            bg: accent,
            borderColor: accent,
            borderWidth: '15px 45px',
            theme,
          }),
          '',
          { before: 'newsletterBottom35px' }
        )
      : '';
  return `<tr><td style="background-color:${background};color:${theme.black ?? '#000000'};${fontStyle}">
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
      ${row(`<table role="presentation" class="frenchDaysOfferBadge" width="240" align="center" cellspacing="0" cellpadding="0" border="0" bgcolor="${accent}" style="width:240px !important;max-width:100%;margin:0 auto;table-layout:fixed;border-collapse:collapse;background-color:${accent};mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr><td height="15" style="height:15px;font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td></tr><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;"><tr><td width="20" style="width:20px;font-size:0;line-height:0;">&nbsp;</td><td align="center" class="frenchDaysOfferLabel" style="color:#ffffff;${fontStyle}font-weight:700;mso-line-height-rule:exactly;text-transform:uppercase;overflow-wrap:anywhere;">${offer[0] ?? ''}</td><td width="20" style="width:20px;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr><tr><td height="15" style="height:15px;font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td></tr></table>`, '', { before: 'newsletterBottom35px', after: 'newsletterBottom20px' })}
      ${row(offer[1] ?? '', `color:${accent};`, { after: 'newsletterBottom20px', className: 'frenchDaysOfferHeadline' })}
      ${row(offer[2] ?? '', '', { after: 'newsletterBottom35px', className: 'frenchDaysOfferDescription' })}
      <tr><td><table role="presentation" class="frenchDaysResponsiveCodes" width="100%" cellspacing="0" cellpadding="0" border="0" style="--french-days-divider:${accent};table-layout:fixed;border-collapse:collapse;border-top:1px solid ${accent};border-bottom:1px solid ${accent};"><tr>${tiers}</tr></table></td></tr>
      ${button}
      ${row(first(queries.offer_subtitle) ?? '', '', { before: 'newsletterBottom20px', className: 'frenchDaysOfferSubtitle' })}
      ${row(first(queries.offer_date) ?? '', '', { before: 'newsletterBottom15px', after: 'newsletterBottom20px', className: 'frenchDaysOfferDate' })}
    </table>
  </td></tr>`;
};
