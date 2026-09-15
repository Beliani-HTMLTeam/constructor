import { CTA } from '../../CTA.js';

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
}) => {
  const first = (value) => (Array.isArray(value) ? value[0] : value);
  const offer = queries.offer ?? [];
  const accent = theme.offerTitleColor ?? '#750000';
  const background = theme.offerBg ?? '#F6E7E6';
  const row = (content, style = '') => `<tr><td align="center" style="padding:12px 25px;${style}">${content}</td></tr>`;
  const tiers = [1, 2, 3]
    .map((tier) => {
      const info = queries[`offer_info_part_${tier}`] ?? [];
      const rawCode = String(first(queries[`offer_code_${tier + 1}_items`]) ?? '').trim();
      const code = rawCode.includes(':') ? rawCode.slice(rawCode.indexOf(':') + 1).trim() : rawCode;
      const codeButton =
        renderType === 'landing' && code
          ? CTA({
              text: rawCode,
              codeValue: code,
              type: renderType,
              getPhrase,
              color: accent,
              bg: background,
              theme,
              variant: 'plain',
            })
          : '';
      return `<td width="33.33%" align="center" style="width:33.33%;padding:12px 4px;vertical-align:top;${tier > 1 ? `border-left:1px solid ${accent};` : ''}">
      <div style="font-size:14px;">${info[0] ?? ''}</div>
      <div class="frenchDaysDiscount" style="font-size:42px;font-size:clamp(18px, 5.5vw, 42px);font-weight:700;line-height:1.2;overflow-wrap:anywhere;color:${accent};">${formatDiscount(info[1])}</div>
      <div style="font-size:14px;">${info[2] ?? ''}</div>
      ${codeButton ? `<div style="padding-top:12px;">${codeButton}</div>` : ''}
    </td>`;
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
          'padding-top:30px;'
        )
      : '';
  return `<tr><td style="background-color:${background};color:${theme.black ?? '#000000'};font-family:Arial,sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
      ${row(`<table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr><td align="center" bgcolor="${accent}" style="background-color:${accent};border-style:solid;border-color:${accent};border-width:15px 40px;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:700;line-height:20px;mso-line-height-rule:exactly;text-transform:uppercase;">${offer[0] ?? ''}</td></tr></table>`, 'padding-top:30px;')}
      ${row(offer[1] ?? '', `font-size:46px;line-height:1.15;font-weight:700;color:${accent};`)}
      ${row(offer[2] ?? '', 'font-size:16px;line-height:1.3;padding-bottom:35px;')}
      <tr><td><table width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-top:1px solid ${accent};border-bottom:1px solid ${accent};"><tr>${tiers}</tr></table></td></tr>
      ${button}
      ${row(first(queries.offer_subtitle) ?? '', 'font-size:16px;padding-top:20px;')}
      ${row(first(queries.offer_date) ?? '', 'font-size:16px;padding-bottom:20px;')}
    </table>
  </td></tr>`;
};

