import { types } from '@utils/types.js';
import { Line } from '@components/Line.js';
import { Space_new as Space } from "../components/Space_new.js";

export const FOOTER_THEMES = {
  peach: { frame: '#FFCCB7', legal: '#750000' },
  black: { frame: '#000000', legal: '#FFFFFF' },
};
 
export const getFooterTheme = (theme) => FOOTER_THEMES[theme] ?? FOOTER_THEMES.peach;
 
// ── "Download our app" ─────────────────────────────────────────────────────────────────────────
// Shown from the newsletter of 16.12.2026 on (campaign date "dd.mm.yyyy", also accepts "yyyy-mm-dd").
const APP_DOWNLOAD_FROM = new Date(2026, 10, 16); // months are 0-based -> 10 = November
 
const parseCampaignDate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
 
  const text = String(value).trim();
 
  const dmy = text.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})/);
  if (dmy) return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]));
 
  const ymd = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (ymd) return new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3]));
 
  return null;
};
 
const isFromDate = (cDate, fromDate) => {
  const campaignDate = parseCampaignDate(cDate);
 
  return Boolean(campaignDate) && campaignDate >= fromDate;
};
 
export function shouldShowAppDownload(cDate) {
  return isFromDate(cDate, APP_DOWNLOAD_FROM);
}
 
// "See you soon" banner: the "See you soon src v2" image from the newsletter of 16.11.2026 on
const SEE_YOU_SOON_V2_FROM = new Date(2026, 10, 16); // 10 = November
 
export function shouldUseSeeYouSoonV2(cDate) {
  return isFromDate(cDate, SEE_YOU_SOON_V2_FROM);
}
 
// Bigger titles ("Download our app", "Stay up to date") from the newsletter of 16.11.2026 on:
// 22px desktop / 20px mobile (classes ...TitleV2 in footer.css / footer-landing.css).
// Older campaigns keep the old classes (18px).
const FOOTER_TITLE_V2_FROM = new Date(2026, 10, 16); // 10 = November
 
export function shouldUseFooterTitleV2(cDate) {
  return isFromDate(cDate, FOOTER_TITLE_V2_FROM);
}
 
// Store badges: whole-pixel width + height attributes for Outlook, same height for both.
// 32px high = 80% of the original 135x40 / 120x40 (ratio kept, no fractional pixels).
// Can be overridden per badge with width / height in the footer data.
const APP_BADGE = {
  googlePlay: { width: 108, height: 32 },
  appStore: { width: 96, height: 32 },
};
const APP_BADGE_GAP = 15;
 
const CLASSES = {
  [types.NEWSLETTER]: {
    frame: 'newsletterContainerFooter20px',
    container30: 'newsletterContainer30px',
    container40: 'newsletterContainer40px',
    bottom15: 'newsletterBottom15px',
    bottom20: 'newsletterBottom20px',
    bottom30: 'newsletterBottom30px',
    bottom35: 'newsletterBottom35px',
    thousandsTitle: 'thousandsMoreTitle',
    thousandsRowGap: 'thousandsMoreRowGap',
    thousandsCellLeft: 'thousandsMoreBtnCellLEFT',
    thousandsCellRight: 'thousandsMoreBtnCellRIGHT',
    socialCol: 'footer',
    socialTitle: 'newsletterNewFooterTitle',
    socialTitleV2: 'newsletterNewFooterTitleV2',
    socialSubtitle: 'newsletterFooterSubtitle',
    socialIcon: 'newsletterNewSocialIcon',
    socialTitleCol: 'newsletterSocialTitleCol',
    socialIconsCol: 'newsletterSocialIconsCol',
    socialIcons: 'newsletterSocialIcons',
    appTitleCol: 'newsletterAppTitleCol',
    appBadgesCol: 'newsletterAppBadgesCol',
    appBadges: 'newsletterAppBadges',
    appBadge: 'newsletterAppBadge',
    appBadgeGap: 'newsletterAppBadgeGap',
    conditions: 'newsletterNewFooterConditions',
    companyDetails: 'newsletterNewFooterCompanyDetails',
  },
  [types.LANDINGPAGE]: {
    frame: 'footerFrame',
    container30: 'footerContainer30px',
    container40: 'footerContainer40px',
    bottom15: 'footerBottom15px',
    bottom20: 'footerBottom20px',
    bottom30: 'footerBottom30px',
    bottom35: 'footerBottom35px',
    thousandsTitle: 'footerThousandsTitle',
    thousandsRowGap: 'footerThousandsRowGap',
    thousandsCellLeft: 'footerThousandsCellLEFT',
    thousandsCellRight: 'footerThousandsCellRIGHT',
    socialCol: '',
    socialTitle: 'footerSocialTitle',
    socialTitleV2: 'footerSocialTitleV2',
    socialSubtitle: 'footerSocialSubtitle',
    socialIcon: 'footerSocialIcon',
    socialTitleCol: 'footerSocialTitleCol',
    socialIconsCol: 'footerSocialIconsCol',
    socialIcons: 'footerSocialIcons',
    appTitleCol: 'footerAppTitleCol',
    appBadgesCol: 'footerAppBadgesCol',
    appBadges: 'footerAppBadges',
    appBadge: 'footerAppBadge',
    appBadgeGap: 'footerAppBadgeGap',
    conditions: 'footerConditions',
    companyDetails: 'footerCompanyDetails',
  },
};
 
const cls = (name) => (name ? ` class="${name}"` : '');
 
const URL_RE = /\b((?:https?:\/\/)?www\.[\w-]+(?:\.[\w-]+)+(?:\/[^\s<]*)?)/gi;
 
const linkStyle = (color) => `color: ${color}; text-decoration: none;`;
 
const styleLinks = (html, color) =>
  String(html ?? '')
    .split(/(<a\b[\s\S]*?<\/a>)/gi)
    .map((part) => {
      if (/^<a\b/i.test(part)) {
        return part
          .replace(/^<a\b([^>]*)>/i, (tag, attrs) => {
            const style = attrs.match(/\bstyle\s*=\s*(["'])([\s\S]*?)\1/i);
            if (style) {
              // drop any existing color (eg. color:inherit – Outlook doesn't support inherit)
              const rest = style[2]
                .replace(/(^|;)\s*color\s*:[^;]*/gi, '$1')
                .replace(/;\s*;/g, ';')
                .trim()
                .replace(/^;/, '')
                .replace(/;?$/, ';');
              return tag.replace(style[0], `style=${style[1]}${rest === ';' ? '' : rest + ' '}color: ${color};${style[1]}`);
            }
            return `<a${attrs} style="${linkStyle(color)}">`;
          })
          // Outlook: colour also on a span inside the link
          .replace(/^(<a\b[^>]*>)([\s\S]*?)(<\/a>)$/i, (m, open, inner, close) =>
            `${open}<span style="color: ${color};">${inner}</span>${close}`);
      }
      return part.replace(URL_RE, (url) => {
        const clean = url.replace(/[.,;:!?)]+$/, '');
        const tail = url.slice(clean.length);
        const href = /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
        return `<a href="${href}" style="${linkStyle(color)}"><span style="color: ${color};">${clean}</span></a>${tail}`;
      });
    })
    .join('');
 
const frameTable = (c, rows, { id = '', bg = FOOTER_THEMES.peach.frame, bottomClass = '' } = {}) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" bgcolor="${bg}"${id ? ` id="${id}"` : ''} style="max-width: 650px; width: 100%; background-color: ${bg}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td${cls([c.frame, bottomClass].filter(Boolean).join(' '))} bgcolor="${bg}" style="background-color: ${bg};">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="${bg}" style="width: 100%; background-color: ${bg}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              ${rows}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>`;
 
const NL_IMG_WIDTH_30 = 650 - 40 - 60; // 550 – 30px inner padding
const NL_IMG_WIDTH_40 = 650 - 40 - 80; // 530 – 40px inner padding
 
const SOCIAL_ICON_SIZE = 28;
const NL_THOUSANDS_TILE_WIDTH = Math.floor((NL_IMG_WIDTH_30 - 3 * 10) / 4);
 
const ADVANTAGE_WIDTHS = [141, 134, 134, 141];
// outlook
const ADVANTAGE_BG = '#F6E7E6';
const ADVANTAGE_FILL_BG = [true, false, false, false];
const ADVANTAGE_HEIGHT = 112;
const ADVANTAGES_WIDTH = ADVANTAGE_WIDTHS.reduce((sum, w) => sum + w, 0);
 
const advantageCell = (item, href, i) => {
  const width = ADVANTAGE_WIDTHS[i];
  const percent = ((width / ADVANTAGES_WIDTH) * 100).toFixed(2);
 
  const fill = ADVANTAGE_FILL_BG[i];
 
  return `
  <td width="${width}" valign="top"${fill ? ` bgcolor="${ADVANTAGE_BG}"` : ''} style="width: ${percent}%; font-size: 0; line-height: 0;${fill ? ` background-color: ${ADVANTAGE_BG};` : ''}">
    <a href="${href}">
      <img loading="lazy" src="${item.src}" alt="Advantages" width="${width}" height="${ADVANTAGE_HEIGHT}" border="0" style="display: block; border: 0; width: 100%; max-width: ${width}px; height: auto;" />
    </a>
  </td>`;
};
 
const thousandsMoreTile = (category, width) => `
  <a href="${category.href}">
    <img loading="lazy" src="${category.src}" alt="${category.name || ''}"${width ? ` width="${width}"` : ''} border="0" style="display: block; width: 100%; max-width: 100%; height: auto;" />
  </a>`;
 
 
const thousandsMorePair = (c, left, right, side, width) => `
  <td width="50%" valign="top" style="padding-${side === 'LEFT' ? 'right' : 'left'}: 5px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tbody>
        <tr>
          <td class="${c.thousandsCellLeft}" width="50%" valign="top">${thousandsMoreTile(left, width)}</td>
          <td class="${c.thousandsCellRight}" width="50%" valign="top">${thousandsMoreTile(right, width)}</td>
        </tr>
      </tbody>
    </table>
  </td>`;
 
const thousandsMoreRow = (c, categories, isLast, width) => `
  <tr>
    <td${isLast ? '' : cls(c.thousandsRowGap)}>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tbody>
          <tr>
            ${thousandsMorePair(c, categories[0], categories[1], 'LEFT', width)}
            ${thousandsMorePair(c, categories[2], categories[3], 'RIGHT', width)}
          </tr>
        </tbody>
      </table>
    </td>
  </tr>`;
 
const thousandsMoreGrid = (c, categories, width) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      ${thousandsMoreRow(c, categories.slice(0, 4), false, width)}
      ${thousandsMoreRow(c, categories.slice(4, 8), true, width)}
    </tbody>
  </table>`;
 
const socialIcon = (c, item, alt, href) => `
  <td class="${c.socialIcon}" valign="middle" style="line-height: ${SOCIAL_ICON_SIZE}px; mso-line-height-rule: at-least;">
    <a href="${href}">
      <img loading="lazy" src="${item.src}" width="${SOCIAL_ICON_SIZE}" border="0" style="display:block; max-width: 100%; vertical-align: middle;" alt="${alt}">
    </a>
  </td>`;
 
export function Footer(sections, options, name) {
  const id = sections.id;
  const NL = CLASSES[types.NEWSLETTER];
  const LP = CLASSES[types.LANDINGPAGE];
 
  const theme = getFooterTheme(options?.theme);
 
  // title class: the bigger V2 titles from 16.11.2026 (options.campaignDate comes from the template's Footer.js)
  const useTitleV2 = shouldUseFooterTitleV2(options?.campaignDate);
  const titleClass = (c) => (useTitleV2 ? c.socialTitleV2 : c.socialTitle);
  // same date: "Stay up to date" goes into two rows on mobile (title, icons under it) – before 16.11
  // the row stays as it was (title + icons in one line), so no stacking classes are printed
  const stackSocials = useTitleV2;
 
  const frame = (c, rows) => rows;
 
  // UTM parameters (& instead of ? when the link already has a query, eg. the Google Play link)
  const track = (href, isLP) =>
    isLP
      ? href
      : `${href}${String(href).includes('?') ? '&' : '?'}utm_source=newsletter&utm_medium=email&utm_campaign=${id}`;
 
  const seeYouSoon = ({ src, href }, isLP) => {
    const c = isLP ? LP : NL;
    return frame(c, `
                <tr>
                    <td style="background-color: #fff;">
                        <a href="${track(href, isLP)}">
                            <img loading="lazy" alt="See you soon" src="${src}" width="${NL_IMG_WIDTH_30}" style="display: block; width: 100%; max-width: 100%; height: auto;">
                        </a>
                    </td>
                </tr>
                ${Space({ className: c.bottom30, insideTr: true, background: '#fff' })}
                <tr>
                <td class="${c.container30}" style="background-color: #fff;">
                ${Line("https://pictureserver.net/static/footer/new_footer_line.png")}
                </td>
                </tr>
        `);
  };
 
  const workBanner = ({ src, href }) => {
    const c = LP;
    return frame(c, `
            ${Space({ className: c.bottom30, insideTr: true, background: '#fff' })}
                <tr>
                    <td class="${c.container30}" style="background-color: #fff;">
                        <a href="${href}">
                            <img loading="lazy" alt="work banner" src="${src}" width="${NL_IMG_WIDTH_30}" style="display: block; width: 100%; max-width: 100%; height: auto;">
                        </a>
                    </td>
                </tr>
                ${Space({ className: c.bottom30, insideTr: true, background: '#fff' })}
                <tr>
                <td class="${c.container30}" style="background-color: #fff;">
                ${Line("https://pictureserver.net/static/footer/new_footer_line.png")}
                </td>
                </tr>
        `);
  };
 
  const deliveryBanner = ({ src, href }, isLP) => {
    const c = isLP ? LP : NL;
    return frame(c, `
                ${Space({ className: c.bottom30, insideTr: true, background: '#fff' })}
                    <tr>
                        <td class="${c.container30}" style="background-color: #fff;">
                            <a href="${track(href, isLP)}">
                                <img loading="lazy" alt="work banner" src="${src}" width="${NL_IMG_WIDTH_30}" style="display: block; width: 100%; max-width: 100%; height: auto;">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="${c.bottom35}" style="background-color: #fff;">
                        </td>
                    </tr>
            `);
  };
 
  const thousandsMore = (
    {
      title,
      firstCategory,
      secondCategory,
      thirdCategory,
      foutrthCategory,
      fifthCategory,
      sixthCategory,
      seventhCategory,
      eigthCategory,
    },
    isLP
  ) => {
    const c = isLP ? LP : NL;
    return frame(c, `
            <tr>
              <td class="${c.container30}" style="background-color: #ffffff;">
                ${Line("https://pictureserver.net/static/footer/new_footer_line.png")}
              </td>
            </tr>
            ${Space({ className: c.bottom30, insideTr: true, background: '#ffffff' })}
            <tr>
              <td class="${c.container30}" style="background-color: #FFFFFF;">
                <span class="${c.thousandsTitle}" style="color: #750000; font-weight: 700;">
                  ${title}
                </span>
              </td>
            </tr>
            ${Space({ className: c.bottom20, insideTr: true, background: '#FFFFFF' })}
            <tr>
              <td class="${c.container30}" style="background-color: #FFFFFF;">
                ${thousandsMoreGrid(
      c,
      [
        firstCategory,
        secondCategory,
        thirdCategory,
        foutrthCategory,
        fifthCategory,
        sixthCategory,
        seventhCategory,
        eigthCategory,
      ],
      isLP ? null : NL_THOUSANDS_TILE_WIDTH
    )}
              </td>
            </tr>
            ${Space({ className: c.bottom30, insideTr: true, background: '#FFFFFF' })}
                `);
  };
 
  const klarna = ({ href, src }, isLP) => {
    const c = isLP ? LP : NL;
    return frame(c, `
                    <tr>
                        <td class="${c.container30}" style="background-color: #FFFFFF;">
                            ${Line("https://pictureserver.net/static/footer/new_footer_line.png")}
                        </td>
                    </tr>
                    ${Space({ className: c.bottom30, insideTr: true, background: '#FFFFFF' })}
 
                    <tr>
                        <td class="${c.container30}" style="background-color: #FFFFFF;">
                            <a href="${track(href, isLP)}">
                                <img alt="Klarna" border="0" src="${src}" width="${NL_IMG_WIDTH_30}" style="display: block; width: 100%; max-width: 100%; height: auto;"/>
                            </a>
                        </td>
                    </tr>
                    ${Space({ className: c.bottom30, insideTr: true, background: '#FFFFFF' })}
        `);
  };
 
  // one store badge (Google Play / App Store); no src -> no badge
  const appBadge = (c, badge, alt, size, isLP) => {
    if (!badge?.src) return '';
 
    const width = Number(badge.width) || size.width;
    const height = Number(badge.height) || size.height;
    const img = `<img loading="lazy" src="${badge.src}" alt="${alt}" width="${width}" height="${height}" border="0" style="display: block; border: 0; width: ${width}px; max-width: 100%; height: auto; vertical-align: middle;" />`;
 
    // Outlook: line-height 0 there means "exactly 0" and clips the top of the image. A line at least as
    // tall as the badge (same trick as the social icons) shows the whole image; font-size 0 stays for
    // the other clients (no extra space under the image).
    return `
                                                    <td class="${c.appBadge}" valign="middle" style="font-size: 0; line-height: ${height}px; mso-line-height-rule: at-least; vertical-align: middle;">
                                                        ${badge.href ? `<a href="${track(badge.href, isLP)}" target="_blank" style="text-decoration: none;">${img}</a>` : img}
                                                    </td>`;
  };
 
  // Download our app: line, title on the left + store badges on the right (on mobile the badges go
  // under the title – footer.css / footer-landing.css), same look as the "Stay up to date" row
  const appDownload = ({ title, googlePlay, appStore }, isLP) => {
    const c = isLP ? LP : NL;
    const google = appBadge(c, googlePlay, 'Google Play', APP_BADGE.googlePlay, isLP);
    const apple = appBadge(c, appStore, 'App Store', APP_BADGE.appStore, isLP);
 
    if (!google && !apple) return '';
 
    const gap =
      google && apple
        ? `<td class="${c.appBadgeGap}" width="${APP_BADGE_GAP}" style="width: ${APP_BADGE_GAP}px; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">&nbsp;</td>`
        : '';
 
    return frame(c, `
                <tr>
                    <td class="${c.container30}" style="background-color: #FFFFFF;">
                        ${Line("https://pictureserver.net/static/footer/new_footer_line.png")}
                    </td>
                </tr>
                ${Space({ className: c.bottom30, insideTr: true, background: '#FFFFFF' })}
                <tr>
                    <td align="center" class="${c.container30}" style="background-color: #FFFFFF;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" valign="middle" class="${c.appTitleCol}" style="padding-right: 15px; vertical-align: middle;">
                                        <span class="${titleClass(c)}">
                                              ${title ?? ''}
                                        </span>
                                    </td>
                                    <td align="right" valign="middle" class="${c.appBadgesCol}" style="vertical-align: middle;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" class="${c.appBadges}">
                                            <tbody>
                                                <tr>
                                                    ${google}
                                                    ${gap}
                                                    ${apple}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                ${Space({ className: c.bottom30, insideTr: true, background: '#FFFFFF' })}
        `);
  };
 
  const socials = ({ title, subtitle, instagram, facebook, youtube, pinterest, Xsocial, Tiktok }, isLP) => {
    const c = isLP ? LP : NL;
    return frame(c, `
                <tr>
                    <td align="center" class="${c.container30}" style="background-color: #FFFFFF;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left"${cls([c.socialCol, stackSocials && c.socialTitleCol].filter(Boolean).join(' '))}${stackSocials ? ' style="padding-right: 15px; vertical-align: middle;"' : ''}>
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span class="${titleClass(c)}">
                                                              ${title}
                                                        </span>
                                                    </td>
                                                </tr>
                                                ${subtitle
        ? `
                                                <tr>
                                                <td>
                                                <span class="${c.socialSubtitle}">
                                                      ${subtitle}
                                                </span>
                                                </td>
                                                </tr>`
        : ''
      }
                                            </tbody>
                                        </table>
                                    </td>
                                    <td align="right"${cls([c.socialCol, stackSocials && c.socialIconsCol].filter(Boolean).join(' '))} style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0"${stackSocials ? ` align="right"${cls(c.socialIcons)}` : ''}>
                                            <tbody>
                                                <tr>
                                                    ${socialIcon(c, instagram, 'Instagram', track(instagram.href, isLP))}
                                                    ${socialIcon(c, facebook, 'Facebook', track(facebook.href, isLP))}
                                                    ${youtube && youtube.href && youtube.src
        ? socialIcon(c, youtube, 'YouTube', track(youtube.href, isLP))
        : ''
      }
                                                    ${socialIcon(c, pinterest, 'Pinterest', track(pinterest.href, isLP))}
                                                    ${Tiktok ? socialIcon(c, Tiktok, 'Tik-Tok', track(Tiktok.href, isLP)) : ''}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                ${Space({ className: c.bottom30, insideTr: true, background: '#FFFFFF' })}
                `);
  };
 
  const conditions = (conditionsTitle, text, isLP) => {
    const c = isLP ? LP : NL;
    return `
            <tr>
              <td bgcolor="${theme.frame}" style="background-color: ${theme.frame};">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="${theme.frame}" style="width: 100%; background-color: ${theme.frame}; border-collapse: collapse;">
                  <tbody>
            ${Space({ className: c.bottom15, insideTr: true, background: theme.frame })}
                <tr>
                    <td align="center" bgcolor="${theme.frame}" style="line-height: 13px; mso-line-height-rule: exactly; background-color: ${theme.frame};">
                    <span class="${c.conditions}" style="mso-line-height-rule: exactly; color: ${theme.legal}; text-align: center;">${styleLinks(`${conditionsTitle} ${text}`, theme.legal)}</span>
                    </td>
                </tr>
            ${isLP ? Space({ className: c.bottom15, insideTr: true, background: theme.frame }) : ''
      }
                  </tbody>
                </table>
              </td>
            </tr>
        `;
  };
 
  const json_footer = {
    seeYouSoon: {
      [types.NEWSLETTER]: { value: (data) => seeYouSoon(data, false) },
      [types.LANDINGPAGE]: { value: (data) => seeYouSoon(data, true) },
    },
    workBanner: {
      [types.NEWSLETTER]: { value: () => `` },
      // [types.LANDINGPAGE]: { value: (data) => workBanner(data) },
      [types.LANDINGPAGE]: { value: (data) => `` },
    },
    deliveryBanner: {
      [types.NEWSLETTER]: { value: (data) => deliveryBanner(data, false) },
      [types.LANDINGPAGE]: { value: (data) => deliveryBanner(data, true) },
    },
    thousandsMore: {
      [types.NEWSLETTER]: { value: (data) => thousandsMore(data, false) },
      [types.LANDINGPAGE]: { value: (data) => thousandsMore(data, true) },
    },
    advantages: {
      [types.NEWSLETTER]: {
        value: ({ firstAdvantage, secondAdvantage, thirdAdvantage, fourthAdvantage }) => {
          const items = [firstAdvantage, secondAdvantage, thirdAdvantage, fourthAdvantage];
          const cell = (i) => advantageCell(items[i], track(items[i].href, false), i);
          return frame(NL, `
                  <tr>
                      <td class="${NL.container30}" bgcolor="#ffffff" style="background-color: #ffffff; mso-padding-alt: 0px 20px 0px 20px;">
                          <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto; width: 100%; max-width: ${ADVANTAGES_WIDTH}px; table-layout: fixed; background-color: #ffffff;">
                              <tbody>
                                  <tr>
                                      ${cell(0)}
                                      ${cell(1)}
                                      ${cell(2)}
                                      ${cell(3)}
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr> ${Space({ className: NL.bottom30, insideTr: true, background: '#FFFFFF' })}
                  `);
        },
      },
      [types.LANDINGPAGE]: {
        value: ({ firstAdvantage, secondAdvantage, thirdAdvantage, fourthAdvantage }) => '',
      },
    },
    klarna: {
      [types.NEWSLETTER]: { value: (data) => klarna(data, false) },
      [types.LANDINGPAGE]: { value: (data) => klarna(data, true) },
    },
    appDownload: {
      [types.NEWSLETTER]: { value: (data) => appDownload(data, false) },
      [types.LANDINGPAGE]: { value: (data) => appDownload(data, true) },
    },
    socials: {
      [types.NEWSLETTER]: { value: (data) => socials(data, false) },
      [types.LANDINGPAGE]: { value: (data) => socials(data, true) },
    },
 
    conditions: {
      [types.NEWSLETTER]: {
        value: ({ conditionsTitle, conditionsText }) =>
          conditions(
            conditionsTitle,
            conditionsText.length === 2
              ? conditionsText[0] + ' ' + conditionsText[1]
              : conditionsText.length === 3
                ? conditionsText[0] + ' ' + conditionsText[1] + ' ' + conditionsText[2]
                : conditionsText,
            false
          ),
      },
      [types.LANDINGPAGE]: {
        value: ({ conditionsTitle, conditionsText }) =>
          conditions(
            conditionsTitle,
            conditionsText.length === 5
              ? conditionsText[4] + ' ' + conditionsText[1]
              : conditionsText.length === 4
                ? conditionsText[3] + ' ' + conditionsText[1]
                : conditionsText.length === 3
                  ? conditionsText[0] + ' ' + conditionsText[1]
                  : conditionsText.length === 2
                    ? conditionsText[0]
                    : conditionsText[0],
            true
          ),
      },
    },
    companyDetails: {
      [types.NEWSLETTER]: {
        value: ({
          title,
          address,
          mobileNumber,
          emailAddress,
          mailTo,
          email,
          commercialRegister,
          vat,
        }) => {
          return `
                <tr>
                    <td align="center" class="${NL.companyDetails}" bgcolor="${theme.frame}" style="background-color: ${theme.frame}; color: ${theme.legal}; line-height: 18px; mso-line-height-rule: exactly;">
                        <span style="color: ${theme.legal}; text-align: center; font-size: 11px; line-height: 13px; mso-line-height-rule: exactly;">
                        ${styleLinks(`${address} | ${commercialRegister}`, theme.legal)}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="${theme.frame}" height="1" style="background-color: ${theme.frame}; height: 1px; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">&nbsp;</td>
                </tr>
                `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({
          title,
          address,
          mobileNumber,
          emailAddress,
          mailTo,
          email,
          commercialRegister,
          vat,
        }) => '',
      },
    },
  };
 
  let html = '';
  for (const section in sections) {
    const elem = sections[section];
    if (typeof elem !== 'object') continue;
 
    if (section in json_footer) {
      if (!('exclude' in elem)) {
        const conditionalSections = {};
 
        for (const key in elem) {
          const element = elem[key] || '';
          if (elem[key] === undefined) {
            console.log('Value for ' + key + ' not found.');
          }
          if (typeof elem !== 'object') {
            conditionalSections[key] = element;
            continue;
          }
 
          if (!element.exclude) {
            conditionalSections[key] = element;
          }
        }
        html += json_footer[section][options.type].value(conditionalSections);
        continue;
      }
      if (!elem.exclude) {
        const conditionalSections = {};
 
        for (const key in elem) {
          const element = elem[key] || '';
          if (elem[key] === undefined) {
            console.log('Value for ' + key + ' not found.');
          }
          if (typeof elem !== 'object') {
            conditionalSections[key] = element;
            continue;
          }
 
          if (!element.exclude) {
            conditionalSections[key] = element;
          }
        }
        html += json_footer[section][options.type].value(conditionalSections);
      }
    } else {
      throw new Error('Dodaj sekcje: ' + section + '. Do json_footer in Footer.js');
    }
  }
 
  if (!html) return html;
 
  const spacer = (className) =>
    className ? Space({ className, insideTr: true, background: theme.frame }) : '';
 
  const isLPType = options.type === types.LANDINGPAGE;
  const c = isLPType ? LP : NL;
 
  return frameTable(
    c,
    `${spacer(options.spaceTop)}${html}${spacer(options.spaceBottom)}`,
    { bg: theme.frame, id: isLPType ? '' : 'newsletter', bottomClass: options.bottomSpace ? c.bottom15 : '' }
  );
}