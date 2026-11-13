import { CTA_new } from './CTA_new.js'; // adjust the path to your CTA_new.js
import { Space } from './Space.js';

const RED = '#750000';
const CREAM = '#FFF4E6';
const NSLT_FONT = "'Open Sans', Arial, Helvetica, sans-serif";
const LP_FONT = "'Poppins', Arial, Helvetica, sans-serif";
const TEXT_WIDTH = 300;   // the text breaks into lines as in the design ("A new offer every day / until Christmas Eve")

const DEFAULT_TEXTS = ['Daily deals', 'A new offer every day until Christmas Eve', 'Don’t miss the next deal'];

const rowsOf = (rows) =>
  [].concat(rows || []).map((r) => String((Array.isArray(r) ? r[0] : r) ?? '').trim());

export function AdventDailyDeals({
  queries = {},
  type,
  href = '',
  tdClass = 'newsletterContainer40px',
}) {
  const font = String(type || '').toLowerCase().includes('landing') ? LP_FONT : NSLT_FONT;
  const rows = rowsOf(queries.dailyDeals);
  const [title, text, cta] = DEFAULT_TEXTS.map((fallback, i) => rows[i] || fallback);

  const button = CTA_new({
    href,
    text: cta,
    variant: 'button',
    type,
    bg: CREAM,
    textColor: RED,
    fontFamily: font,
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '600',
    textTransform: 'none',
    borderRadius: '0px',
    paddingX: 28,
    paddingTop: 15,
    paddingBottom: 15,
    mobileFontSize: '16px',
    mobileLineHeight: '24px',
    mobilePaddingX: 20,
    mobilePaddingTop: 13,
    mobilePaddingBottom: 13,
  });

  return `
  <tr>
    <td class="${tdClass}" align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; border-collapse:collapse;">
        <tr>
          <td class="advent-deals__box" align="center" bgcolor="${RED}" style="background-color:${RED}; text-align:center;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; border-collapse:collapse;">
            ${Space({insideTr: true, className: "newsletterBottom25px"})}
              <tr>
                <td align="center">
                  <!--[if mso]><table role="presentation" align="center" width="${TEXT_WIDTH}" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="font-family:Arial, sans-serif; font-size:26px; line-height:32px; mso-line-height-rule:exactly; color:${CREAM};"><![endif]-->
                  <div class="advent-deals__text" style="max-width:${TEXT_WIDTH}px; margin:0 auto; font-family:${font}; font-size:26px; line-height:32px; mso-line-height-rule:exactly; font-weight:400; color:${CREAM}; text-align:center;">${title}<br />${text}</div>
                  <!--[if mso]></td></tr></table><![endif]-->
                </td>
              </tr>
              ${Space({insideTr: true, className: "newsletterBottom20px"})}
              <tr>
                <td align="center">${button}</td>
              </tr>
              ${Space({insideTr: true, className: "newsletterBottom30px"})}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}