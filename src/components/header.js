import { types } from '@utils/types.js';

function shouldUseNewHeader(cDate) {
  const parts = cDate.split('.');

  const day = Number(parts[0]);
  const month = Number(parts[1]);
  const year = Number(parts[2]);

  const campaignDate = new Date(year, month - 1, day);
  const cutoffDate = new Date(2026, 9, 6);

  return campaignDate >= cutoffDate;
}

export function Header(sections, options) {
  const json_header = {
    advantages: {
      [types.NEWSLETTER]: {
        value: (advantages) =>
          options.newHeader
            ? `
				<div style="display:none;max-height:0px;overflow:hidden">
        ✔️ ${advantages.freeDelivery} ✔️ ${advantages.daysReturn}
        </div>
        <div style="display:none;max-height:0px;overflow:hidden">
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        `
            : `<!--[if gte mso 9]>
                  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                      <v:fill type="tile" color="#ececec">
                  </v:background>
                  <![endif]-->
                  <p class="title-advantages">
                      <span class="title-advantages-item">✔️ ${advantages.freeDelivery}</span>
                      <span class="title-advantages-item">✔️ ${advantages.daysReturn}</span>
                  </p>`,
      },
      [types.LANDINGPAGE]: {
        value: () => '',
      },
    },
    paragraph: {
      [types.NEWSLETTER]: {
        value: (data) =>
          options.newHeader
            ? ``
            : `<p class="newsletterRecommendationHeader">
                  ${data.troubleViewing} <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">${data.troubleViewingHrefText}</a>
                  ${data.addBeliani} <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="${data.whitelistHref}">${data.whiteList}</a>
              </p>`,
      },
      [types.LANDINGPAGE]: {
        value: () => '',
      },
    },
    topImage: {
      [types.NEWSLETTER]: {
        value: (topImage) => `<table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: 0 auto; max-width: 650px; width: 100%; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
                    <tbody>
                        <tr>
                            <th>
                                <a href="${topImage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${sections.id}">
                                    <img src="${getImageUrl(topImage.src, true)}" border="0" alt="Beliani" style="display:block; max-width: 100%;" />
                                </a>
                            </th>
                        </tr>
                    </tbody>
                </table>`,
      },
      [types.LANDINGPAGE]: {
        value: () => '',
      },
    },
    categories: {
      [types.NEWSLETTER]: {
        value: ({
          firstCategory,
          secondCategory,
          thirdCategory,
        }) => `<table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: 0 auto; max-width: 650px; width: 100%; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
                    <tbody>
                        <tr>
                            <th><a
                                    href="${firstCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${sections.id}"><img
                                        src="${getImageUrl(firstCategory.src, true)}" border="0"
                                        alt="${firstCategory.alt}" style="display:block; max-width: 100%;" /></a></th>
                            <th><a
                                    href="${secondCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${sections.id}"><img
                                        src="${getImageUrl(secondCategory.src, true)}" border="0"
                                        alt="${secondCategory.alt}" style="display:block; max-width: 100%;" /></a></th>
                            <th><a
                                    href="${thirdCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${sections.id}"><img
                                        src="${getImageUrl(thirdCategory.src, true)}" border="0"
                                        alt="${thirdCategory.alt}" style="display:block; max-width: 100%;" /></a></th>
                        </tr>
                    </tbody>
                </table>`,
      },
      [types.LANDINGPAGE]: {
        value: () => '',
      },
    },
    assembly: {
      [types.NEWSLETTER]: {
        value: (
          assembly
        ) => `<table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
                    <tbody>
                        <tr>
                            <td>
                                <a href="${assembly.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${sections.id}">
                                    <img src="${assembly.src}" border="0" alt="" style="display:block; max-width: 100%;" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>`,
      },
      [types.LANDINGPAGE]: {
        value: (
          assembly
        ) => `<table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
                    <tbody>
                        <tr>
                            <td>
                                <a href="${assembly.href}">
                                    <img src="${assembly.src}" border="0" alt="" style="display:block; max-width: 100%;" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>`,
      },
    },
  };

  let html = '';
  for (const section in sections) {
    const elem = sections[section];
    if (typeof elem !== 'object') continue;

    if (section in json_header) {
      if (!('exclude' in elem)) {
        const conditionalSections = {};

        for (const key in elem) {
          let element = elem[key];
          if (element === undefined) {
            element = '';
          }

          if (typeof elem !== 'object') {
            conditionalSections[key] = element;
            continue;
          }

          if (!element.exclude) {
            conditionalSections[key] = element;
          }
        }
        html += json_header[section][options.type].value(conditionalSections);
        continue;
      }
      if (!elem.exclude) {
        const conditionalSections = {};

        for (const key in elem) {
          let element = elem[key];
          if (element === undefined) {
            element = '';
          }
          if (typeof elem !== 'object') {
            conditionalSections[key] = element;
            continue;
          }

          if (!element.exclude) {
            conditionalSections[key] = element;
          }
        }
        html += json_header[section][options.type].value(conditionalSections);
      }
    } else {
      throw new Error('Dodaj sekcje: ' + section + '. Do json_header in Header.js');
    }
  }
  return html;
}
