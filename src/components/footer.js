import { types } from '@utils/types.js';
import { Line } from '@components/Line.js';
import {Space} from "../components/Space.js";


// Outlook (Word rendering engine) ignores `padding` on <table>, so the peach side frame
// must come from padding on a <td>. Every section (newsletter AND landing page) is wrapped in this:
// peach outer table -> peach <td> with the 20px side padding -> inner table with the section rows.
const peachFrame = (rows, { id = '', style = '' } = {}) => `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" bgcolor="#FFCCB7"${id ? ` id="${id}"` : ''} style="max-width: 650px; width: 100%; background-color: #FFCCB7;${style}">
    <tbody>
      <tr>
        <td class="newsletterContainerFooter20px" bgcolor="#FFCCB7" style="background-color: #FFCCB7;">
          <table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;${style}">
            <tbody>
              ${rows}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>`;
 
// Landing page sections keep id="newsletter" (as before) in case LP styles/scripts target it.
const frameOptions = (isLP, extra = {}) => (isLP ? { id: 'newsletter', ...extra } : extra);
 
// Classic Outlook ignores CSS width on <img> and renders images at their natural pixel size,
// which stretches the white panel into the peach frame. The width attribute caps them in Outlook;
// other clients still use the CSS width: 100%.
// 650 (newsletter) - 2 x 20 (peach frame) - 2 x inner padding
const NL_IMG_WIDTH_30 = 650 - 40 - 60; // 550 – newsletterContainer30px
const NL_IMG_WIDTH_40 = 650 - 40 - 80; // 530 – newsletterContainer40px
// Social icons: Outlook ignores display:block on <img>, so the icons sit on a text line and get
// cropped to an inherited exact line-height. Each icon cell gets an "at-least" line-height
// (the line grows to fit the icon) and a pixel width so Outlook doesn't guess the size.
const SOCIAL_ICON_SIZE = 28;
const NL_THOUSANDS_TILE_WIDTH = Math.floor((NL_IMG_WIDTH_30 - 3 * 10) / 4); // 130 – 4 tiles, 10px gaps
 
// The 4 advantage images are slices of one rounded box and do NOT have equal natural widths,
// so each must keep its own proportion (forcing 25% each made the slices different heights).
// Outlook still needs a pixel width per image: when the data gives each slice's natural `width`,
// the 4 are scaled together to fit the 550px column. Without it, no width attribute is set.
const advantageWidths = (items, total) => {
  const ws = items.map((i) => Number(i && i.width));
  if (ws.some((w) => !w)) return items.map(() => null);
  const scale = Math.min(1, total / ws.reduce((a, b) => a + b, 0));
  return ws.map((w) => Math.floor(w * scale));
};
 
// Category tile image. `width` is only passed for the newsletter (Outlook ignores CSS widths on <img>).
const thousandsMoreTile = (category, width) => `
  <a href="${category.href}">
    <img loading="lazy" src="${category.src}" alt="${category.name || ''}"${width ? ` width="${width}"` : ''} border="0" style="display: block; width: 100%; max-width: 100%; height: auto;" />
  </a>`;
 
// Two tiles side by side. On mobile each pair becomes its own full-width row,
// so the grid goes from 4 columns (desktop) to 2 columns (mobile).
const thousandsMorePair = (left, right, side, width) => `
  <td class="thousandsMorePair${side}" width="50%" valign="top">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tbody>
        <tr>
          <td class="thousandsMoreBtnCellLEFT" width="50%" valign="top">${thousandsMoreTile(left, width)}</td>
          <td class="thousandsMoreBtnCellRIGHT" width="50%" valign="top">${thousandsMoreTile(right, width)}</td>
        </tr>
      </tbody>
    </table>
  </td>`;
 
const thousandsMoreRow = (categories, isLast, width) => `
  <tr>
    <td${isLast ? '' : ' class="thousandsMoreRowGap"'}>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tbody>
          <tr>
            ${thousandsMorePair(categories[0], categories[1], 'LEFT', width)}
            ${thousandsMorePair(categories[2], categories[3], 'RIGHT', width)}
          </tr>
        </tbody>
      </table>
    </td>
  </tr>`;
 
const thousandsMoreGrid = (categories, width) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      ${thousandsMoreRow(categories.slice(0, 4), false, width)}
      ${thousandsMoreRow(categories.slice(4, 8), true, width)}
    </tbody>
  </table>`;
 
const socialIcon = (item, alt, href) => `
  <td class="newsletterSocialIcon" valign="middle" style="line-height: ${SOCIAL_ICON_SIZE}px; mso-line-height-rule: at-least;">
    <a href="${href}">
      <img loading="lazy" src="${item.src}" width="${SOCIAL_ICON_SIZE}" border="0" style="display:block; max-width: 100%; vertical-align: middle;" alt="${alt}">
    </a>
  </td>`;
 
export function Footer(sections, options, name) {
  //   console.log(name);
  const id = sections.id;
 
  // Newsletter links get the UTM parameters, landing page links stay clean (as before).
  const track = (href, isLP) =>
    isLP ? href : `${href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}`;
 
  // ─── Shared builders: the landing page uses the same markup/styles as the newsletter ───
  const seeYouSoon = ({ src, href }, isLP) =>
    peachFrame(`
            ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#fff' })}
                <tr>
                    <td class="newsletterContainer30px" style="background-color: #fff;">
                        <a href="${track(href, isLP)}">
                            <img loading="lazy" alt="See you soon" src="${src}" width="${NL_IMG_WIDTH_30}" style="display: block; width: 100%; max-width: 100%; height: auto;">
                        </a>
                    </td>
                </tr>
                ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#fff' })}
                <tr>
                <td class="newsletterContainer30px" style="background-color: #fff;">
                ${Line()}
                </td>
                </tr>
        `, frameOptions(isLP));
 
  // Landing page only (empty in the newsletter) – same style as seeYouSoon: image, then a line.
  const workBanner = ({ src, href }) =>
    peachFrame(`
            ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#fff' })}
                <tr>
                    <td class="newsletterContainer30px" style="background-color: #fff;">
                        <a href="${href}">
                            <img loading="lazy" alt="work banner" src="${src}" width="${NL_IMG_WIDTH_30}" style="display: block; width: 100%; max-width: 100%; height: auto;">
                        </a>
                    </td>
                </tr>
                ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#fff' })}
                <tr>
                <td class="newsletterContainer30px" style="background-color: #fff;">
                ${Line()}
                </td>
                </tr>
        `, frameOptions(true));
 
  const deliveryBanner = ({ src, href }) =>
    peachFrame(`
                ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#fff' })}
                    <tr>
                        <td class="newsletterContainer40px" style="background-color: #fff;">
                            <a href="${href}">
                                <img loading="lazy" alt="work banner" src="${src}" width="${NL_IMG_WIDTH_40}" style="display: block; width: 100%; max-width: 100%; height: auto;">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="newsletterBottom35px" style="background-color: #fff;">
                        </td>
                    </tr>
            `, { id: 'newsletter' });
 
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
  ) =>
    peachFrame(`
            <tr>
              <td  class="newsletterContainer30px" style="background-color: #ffffff;">
                ${Line()}
              </td>
            </tr>
            ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#ffffff' })}
            <tr>
              <td class="newsletterContainer30px" style="background-color: #FFFFFF;">
                <span class="thousandsMoreTitle" style="color: #750000; font-weight: 700;">
                  ${title}
                </span>
              </td>
            </tr>
            ${Space({ className: 'newsletterBottom20px', insideTr: true, background: '#FFFFFF' })}
            <tr>
              <td class="newsletterContainer30px" style="background-color: #FFFFFF;">
                ${thousandsMoreGrid(
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
            ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#FFFFFF' })}
                `, frameOptions(isLP));
 
  const klarna = ({ href, src }, isLP) =>
    peachFrame(`
                    <tr>
                        <td class="newsletterContainer30px" style="background-color: #FFFFFF;">
                            ${Line()}
                        </td>
                    </tr>
                    ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#FFFFFF' })}
                  <!--KLARNA-->
                    <tr>
                        <td class="newsletterContainer30px" style="background-color: #FFFFFF;">
                            <a href="${track(href, isLP)}">
                                <img alt="Klarna" border="0" src="${src}" width="${NL_IMG_WIDTH_30}" style="display: block; width: 100%; max-width: 100%; height: auto;"/>
                            </a>
                        </td>
                    </tr>
                    ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#FFFFFF' })}
        `, frameOptions(isLP));
 
  const socials = ({ title, subtitle, instagram, facebook, youtube, pinterest, Xsocial, Tiktok }, isLP) =>
    peachFrame(`
                <tr>
                    <td align="center" class="newsletterContainer30px" style="background-color: #FFFFFF;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" class="footer">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span class="newsletterFooterTitle">
                                                              ${title}
                                                        </span>
                                                    </td>
                                                </tr>
                                                ${
                                                  subtitle
                                                    ? `
                                                <tr>
                                                <td>
                                                <span class="newsletterFooterSubtitle">
                                                      ${subtitle}
                                                </span>
                                                </td>
                                                </tr>`
                                                    : ''
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                    <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    ${socialIcon(instagram, 'Instagram', track(instagram.href, isLP))}
                                                    ${socialIcon(facebook, 'Facebook', track(facebook.href, isLP))}
                                                    ${
                                                      youtube && youtube.href && youtube.src
                                                        ? socialIcon(youtube, 'YouTube', track(youtube.href, isLP))
                                                        : ''
                                                    }
                                                    ${socialIcon(pinterest, 'Pinterest', track(pinterest.href, isLP))}
                                                    ${Tiktok ? socialIcon(Tiktok, 'Tik-Tok', track(Tiktok.href, isLP)) : ''}
                                                    ${Xsocial ? socialIcon(Xsocial, 'X', track(Xsocial.href, isLP)) : ''}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                ${Space({ className: 'newsletterBottom30px', insideTr: true, background: '#FFFFFF' })}
                `, frameOptions(isLP));
 
  // Same style for both; the text picked from conditionsText stays as it was per type.
  const conditions = (conditionsTitle, text, isLP) =>
    peachFrame(`
            ${Space({ className: 'newsletterBottom15px', insideTr: true, background: '#FFCCB7' })}
                <tr>
                    <td align="center">
                        <span class="newsletterConditions" style="color: #750000; text-align: center;">${conditionsTitle} ${text}</span>
                    </td>
                </tr>
            ${
              // The newsletter gets its bottom space from companyDetails (rendered right after),
              // which is empty on the landing page – so the LP closes the frame with its own spacer.
              isLP ? Space({ className: 'newsletterBottom15px', insideTr: true, background: '#FFCCB7' }) : ''
            }
        `, frameOptions(isLP, { style: ' line-height: 10px; mso-line-height-rule: exactly;' }));
 
  const json_footer = {
    seeYouSoon: {
      [types.NEWSLETTER]: { value: (data) => seeYouSoon(data, false) },
      [types.LANDINGPAGE]: { value: (data) => seeYouSoon(data, true) },
    },
    workBanner: {
      [types.NEWSLETTER]: { value: () => `` },
      [types.LANDINGPAGE]: { value: (data) => workBanner(data) },
    },
    deliveryBanner: {
      [types.NEWSLETTER]: { value: (data) => deliveryBanner(data) },
      [types.LANDINGPAGE]: { value: (data) => deliveryBanner(data) },
    },
    thousandsMore: {
      [types.NEWSLETTER]: { value: (data) => thousandsMore(data, false) },
      [types.LANDINGPAGE]: { value: (data) => thousandsMore(data, true) },
    },
    advantages: {
        [types.NEWSLETTER]: {
          value: ({ firstAdvantage, secondAdvantage, thirdAdvantage, fourthAdvantage }) => {
            const aw = advantageWidths([firstAdvantage, secondAdvantage, thirdAdvantage, fourthAdvantage], NL_IMG_WIDTH_30);
            return peachFrame(`
                  <!-- ADVANTAGES -->
                  <!-- Outlook: images render at natural size (the 4 slices are ~552px together, wider than the
                       550px column), so Outlook gets 20px side padding and a shrink-to-fit centered table.
                       Other clients keep the 30px padding and the full-width table. -->
                  <tr>
                      <!--[if mso]><td bgcolor="#ffffff" style="background-color: #ffffff; padding: 0px 20px 0px 20px;"><![endif]-->
                      <!--[if !mso]><!--><td class="newsletterContainer30px" style="background-color: #ffffff;"><!--<![endif]-->
                          <!--[if mso]><table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff;"><![endif]-->
                          <!--[if !mso]><!--><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff;"><!--<![endif]-->
                              <tbody>
                                  <tr>
                                      <td valign="top">
                                          <a
                                              href="${
                                                firstAdvantage.href
                                              }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                              <img loading="lazy" src="${firstAdvantage.src}"
                                                  alt="Advantages"${aw[0] ? ` width="${aw[0]}"` : ''} style="display: block; width: 100%; max-width: 100%; height: auto;"  border="0" />
                                          </a>
                                      </td>
 
                                      <td valign="top">
                                          <a
                                              href="${
                                                secondAdvantage.href
                                              }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                              <img loading="lazy" src="${secondAdvantage.src}"
                                                  alt="Advantages"${aw[1] ? ` width="${aw[1]}"` : ''} style="display: block; width: 100%; max-width: 100%; height: auto;"  border="0" />
                                          </a>
                                      </td>
 
                                      <td valign="top">
                                          <a
                                              href="${
                                                thirdAdvantage.href
                                              }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                              <img loading="lazy" src="${thirdAdvantage.src}"
                                                  alt="Advantages"${aw[2] ? ` width="${aw[2]}"` : ''} style="display: block; width: 100%; max-width: 100%; height: auto;"  border="0" />
                                          </a>
                                      </td>
 
                                      <td valign="top">
                                          <a
                                              href="${
                                                fourthAdvantage.href
                                              }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                              <img loading="lazy" src="${fourthAdvantage.src}"
                                                  alt="Advantages"${aw[3] ? ` width="${aw[3]}"` : ''} style="display: block; width: 100%; max-width: 100%; height: auto;"  border="0" />
                                          </a>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr> ${Space({ className: 'newsletterBottom30px',  insideTr: true, background: '#FFFFFF' })}
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
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #FFCCB7;" id="newsletter">
            <tbody>
                <tr>
                    <td align="center" class="newsletterFooterCompanyDetails">
                        <span style="color: #750000;text-align: center; font-size:13px;">
                            ${address} | ${commercialRegister}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
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
  // Outlook can leave 1px gaps between the stacked section tables (DPI rounding). The page behind them
  // is white, so the gaps show as white lines across the peach frame. A peach wrapper hides them.
  // Used for both the newsletter and the landing page so the whole footer sits in one peach frame.
  if (!html) return html;
  return `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" bgcolor="#FFCCB7" style="max-width: 650px; width: 100%; background-color: #FFCCB7;">
    <tbody>
      <tr>
        <td bgcolor="#FFCCB7" style="background-color: #FFCCB7;">
          ${html}
        </td>
      </tr>
    </tbody>
  </table>`;
}