import { types } from '@utils/types.js';

export function Header(sections, options) {
  const json_header = {
    // advantages: {
    //   [types.NEWSLETTER]: {
    //     value: (advantages) => `<!--[if gte mso 9]>
    //               <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    //                   <v:fill type="tile" color="#ececec">
    //               </v:background>
    //               <![endif]-->
    //               <p class="title-advantages">
    //                   <span class="title-advantages-item">✔️ ${advantages.freeDelivery}</span>
    //                   <span class="title-advantages-item">✔️ ${advantages.daysReturn}</span>
    //               </p>`,
    //   },
    //   [types.LANDINGPAGE]: {
    //     value: () => '',
    //   },
    // },
    paragraph: {
      [types.NEWSLETTER]: {
        value: (data) => `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%;" id="newsletter">
          <tr>
            <td>
              <span style="display:none; font-size:1px; color:#ffffff; max-height:0px; max-width:0px; opacity:0; overflow:hidden; mso-hide:all;">
              ✔️ Free Delivery & Return ✔️ 365-Day Returns |
              </span>
            </td>
          </tr>
        </table>
        <!--[if !mso]><!-->
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; color: #000;" id="newsletter" class="hideMobile">
          <tr><td class="newsletterBottom20px" style="background-color: #ececec;"></td></tr>
        </table>
        <!--<![endif]-->
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; color: #000;" id="newsletter">
          <tr>
            <td class="newsletterContainer" style="background-color: white; color: #000000;">
              <p class="newsletterRecommendationHeader" style="text-align: right; margin-bottom: 0; color: #000000;">
                <!--${data.troubleViewing} <a class="newsletterRecommendationHeaderLink" style="color: #000000;text-decoration: underline;" href="[[newsshowurl]]">${data.troubleViewingHrefText}</a>
                ${data.addBeliani} <a class="newsletterRecommendationHeaderLink" style="color: #000000;text-decoration: underline;" href="${data.whitelistHref}">${data.whiteList}</a>-->
								View in <a class="newsletterRecommendationHeaderLink" style="color: #000000;text-decoration: underline;" href="[[newsshowurl]]">browser</a>
              </p>
            </td>
          </tr>
        </table>`,
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
                                    <!-- <img src="${getImageUrl(topImage.src, true)}" border="0" alt="Beliani" style="display:block; max-width: 100%;" /> -->
                                    <img src="${getImageUrl("header_test_new.png", true)}" border="0" alt="Beliani Logo" style="display:block; max-width: 100%;" />
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
