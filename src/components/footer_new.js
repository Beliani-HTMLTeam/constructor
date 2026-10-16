import { types } from '@utils/types.js';
import { Line } from '@components/Line.js';
import { Space_new as Space } from "../components/Space_new.js";

export const FOOTER_THEMES = {
  peach: { frame: '#FFCCB7', legal: '#750000' },
  black: { frame: '#000000', legal: '#FFFFFF' },
};
 
export const getFooterTheme = (theme) => FOOTER_THEMES[theme] ?? FOOTER_THEMES.peach;
 
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
    socialSubtitle: 'newsletterFooterSubtitle',
    socialIcon: 'newsletterNewSocialIcon',
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
    socialSubtitle: 'footerSocialSubtitle',
    socialIcon: 'footerSocialIcon',
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
        return part.replace(/^<a\b([^>]*)>/i, (tag, attrs) => {
          const style = attrs.match(/\bstyle\s*=\s*(["'])([\s\S]*?)\1/i);
          if (style) {
            const rest = style[2].trim().replace(/;?$/, ';');
            return tag.replace(style[0], `style=${style[1]}${rest} color: ${color};${style[1]}`);
          }
          return `<a${attrs} style="${linkStyle(color)}">`;
        });
      }
      return part.replace(URL_RE, (url) => {
        const clean = url.replace(/[.,;:!?)]+$/, ''); // a full stop at the end of a sentence is not part of the address
        const tail = url.slice(clean.length);
        const href = /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
        return `<a href="${href}" style="${linkStyle(color)}">${clean}</a>${tail}`;
      });
    })
    .join('');
 
const frameTable = (c, rows, { id = '', bg = FOOTER_THEMES.peach.frame } = {}) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" bgcolor="${bg}"${id ? ` id="${id}"` : ''} style="max-width: 650px; width: 100%; background-color: ${bg}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td${cls(c.frame)} bgcolor="${bg}" style="background-color: ${bg};">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
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
 
const advantageWidths = (items, total) => {
  const ws = items.map((i) => Number(i && i.width));
  if (ws.some((w) => !w)) return items.map(() => null);
  const scale = Math.min(1, total / ws.reduce((a, b) => a + b, 0));
  return ws.map((w) => Math.floor(w * scale));
};
 
 
const advantageCell = (item, href, width) => `
  <td valign="top">
    <a href="${href}">
      <img loading="lazy" src="${item.src}" alt="Advantages"${width ? ` width="${width}"` : ''} border="0" style="display: block; width: 100%; max-width: 100%; height: auto;" />
    </a>
  </td>`;
 
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
 
  const frame = (c, rows) => rows;
 
  // UTM parameters
  const track = (href, isLP) =>
    isLP ? href : `${href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}`;
 
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
 
  const socials = ({ title, subtitle, instagram, facebook, youtube, pinterest, Xsocial, Tiktok }, isLP) => {
    const c = isLP ? LP : NL;
    return frame(c, `
                <tr>
                    <td align="center" class="${c.container30}" style="background-color: #FFFFFF;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left"${cls(c.socialCol)}>
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span class="${c.socialTitle}">
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
                                    <td align="right"${cls(c.socialCol)} style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0">
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
                                                    ${Xsocial ? socialIcon(c, Xsocial, 'X', track(Xsocial.href, isLP)) : ''}
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
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; line-height: 10px; mso-line-height-rule: exactly; border-collapse: collapse;">
                  <tbody>
            ${Space({ className: c.bottom15, insideTr: true, background: theme.frame })}
                <tr>
                    <td align="center">
                    <span class="${c.conditions}" style="color: ${theme.legal}; text-align: center;">${styleLinks(`${conditionsTitle} ${text}`, theme.legal)}</span>
                    </td>
                </tr>
            ${
      isLP ? Space({ className: c.bottom15, insideTr: true, background: theme.frame }) : ''
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
          const aw = advantageWidths(items, NL_IMG_WIDTH_30);
          const cell = (i) => advantageCell(items[i], track(items[i].href, false), aw[i]);
          return frame(NL, `
                  <tr>
                      <td class="${NL.container30}" bgcolor="#ffffff" style="background-color: #ffffff; mso-padding-alt: 0px 20px 0px 20px;">
                          <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto; background-color: #ffffff;">
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
                    <td align="center" class="${NL.companyDetails}" bgcolor="${theme.frame}" style="background-color: ${theme.frame}; color: ${theme.legal};">
                        <span style="color: ${theme.legal};text-align: center; font-size:13px;">
                            ${address} | ${commercialRegister}
                        </span>
                    </td>
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
 
  return frameTable(
    isLPType ? LP : NL,
    `${spacer(options.spaceTop)}${html}${spacer(options.spaceBottom)}`,
    { bg: theme.frame, id: isLPType ? '' : 'newsletter' }
  );
}
 