import { Intro } from '.';
import { IntroCTA } from './IntroCTA';
import { Space } from '../Space';

export const IntroParagraph = ({
  intro,
  queries,
  links,
  categories,
  country,
  add_utm,
  getCategoryLink,
  shopNowPhrase,
}) => {
  if (!intro || intro.type !== 'paragraph') {
    return '';
  }

  const {
    text,
    alignment = 'left',
    color = '#000000',
    spaceTop = 'newsletterBottom35px',
    spaceBottom = 'newsletterBottom35px',
    backgroundColor = '#FFFFFF',
    cta,
    additionalSpace,

    // New layout settings
    layout,
    lineColor = '#750000',
    tableContainerClass =
      'newsletterContainer40px',
  } = intro;

  const introText =
    text ||
    queries?.intro ||
    'Translation not found';

  /*
   * Keep the existing layout for other campaigns.
   */
  if (layout !== 'decorativeLine') {
    return `
      ${Intro({
        text: introText,
        paragraphAlign: alignment,
        color,
        spaceTop,
        spaceBottom,
        backgroundColor,
      })}

      ${
        cta
          ? IntroCTA({
              cta,
              intro,
              queries,
              links,
              categories,
              country,
              add_utm,
              getCategoryLink,
              shopNowPhrase,
              backgroundColor,
              color:
                cta.color ||
                color ||
                '#000000',
            })
          : ''
      }

      ${
        additionalSpace
          ? Space({
              insideTr: true,
              className: additionalSpace,
              backgroundColor,
            })
          : ''
      }
    `;
  }

  const getCtaHref = () => {
    if (cta?.href) {
      return cta.href;
    }

    if (
      cta?.hrefSource === 'queries' &&
      queries?.introCTAhref
    ) {
      return typeof add_utm === 'function'
        ? add_utm(queries.introCTAhref)
        : queries.introCTAhref;
    }

    if (links?.Intro_cta_href) {
      return typeof getCategoryLink ===
        'function'
        ? getCategoryLink(
            links.Intro_cta_href
          )
        : links.Intro_cta_href;
    }

    if (links?.introCTA_href) {
      return links.introCTA_href;
    }

    if (links?.TopImage_href) {
      return links.TopImage_href;
    }

    const directCategory = categories?.find(
      (item) => item?.href
    );

    const nestedCategory = categories
      ?.flatMap(
        (item) => item?.categories || []
      )
      .find((item) => item?.href);

    const categoryHref =
      directCategory?.href ||
      nestedCategory?.href;

    if (
      categoryHref &&
      typeof getCategoryLink === 'function'
    ) {
      return getCategoryLink(categoryHref);
    }

    return categoryHref || '#';
  };

  const getCtaText = () =>
    cta?.overrides?.[country] ||
    queries?.introCTA ||
    cta?.text ||
    shopNowPhrase ||
    'Shop now';

  const ctaColor =
    cta?.color ||
    lineColor ||
    '#750000';

  /*
   * Use only one space below the section.
   * Prefer CTA spaceAfter when it is configured.
   */
  const bottomSpace =
    cta?.spaceAfter || spaceBottom;

  return `
    ${
      spaceTop !== '0'
        ? Space({
            insideTr: true,
            className: spaceTop,
            backgroundColor,
          })
        : ''
    }

    <tr>
      <td
        class="${tableContainerClass}"
        bgcolor="${backgroundColor}"
        style="
          background-color:${backgroundColor};
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          bgcolor="${backgroundColor}"
          style="
            width:100%;
            border-collapse:collapse;
            background-color:${backgroundColor};
          "
        >
          <!-- Paragraph -->
          <tr>
          <td
          width="22"
          bgcolor="${backgroundColor}"
          class="newsletterIntroLineSideSpace"
          style="
            width:22px;
            padding:0;
            background-color:${backgroundColor};
            font-size:0;
            line-height:0;
          "
        >
          &nbsp;
        </td>
            <!-- Decorative line -->
            <td
  width="34"
  valign="top"
  bgcolor="${backgroundColor}"
  class="newsletterIntroLineCell"
  style="
    width:34px;
    padding:0;
    background-color:${backgroundColor};
    vertical-align:top;
  "
>
  <table
    role="presentation"
    width="34"
    height="24"
    border="0"
    cellspacing="0"
    cellpadding="0"
    class="newsletterIntroLineTable"
    style="
      width:34px;
      height:24px;
      border-collapse:collapse;
    "
  >
    <tr>
      <td
        width="34"
        height="24"
        valign="middle"
        class="newsletterIntroLineCell"
        style="
          width:34px;
          height:24px;
          padding:0;
          vertical-align:middle;
        "
      >
        <table
          role="presentation"
          width="34"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="newsletterIntroLineTable"
          style="
            width:34px;
            border-collapse:collapse;
          "
        >
          <tr>
            <td
              width="34"
              height="2"
              bgcolor="${lineColor}"
              class="newsletterIntroDecorativeLine"
              style="
                width:34px;
                height:2px;
                padding:0;
                background-color:${lineColor};
                font-size:0;
                line-height:0;
                mso-line-height-rule:exactly;
              "
            >
              &nbsp;
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</td>

            <!-- Space after line -->
            <td
              width="22"
              class="newsletterIntroLineSideSpace"
              bgcolor="${backgroundColor}"
              style="
                width:22px;
                padding:0;
                background-color:${backgroundColor};
                font-size:0;
                line-height:0;
              "
            >
              &nbsp;
            </td>

            <!-- Intro text -->
            <td
              valign="top"
              align="${alignment}"
              bgcolor="${backgroundColor}"
              class="newsletterIntroParagraph"
              style="
              text-align:${alignment};
              background-color:${backgroundColor};
              color:${color};
             
              "
            >
              ${introText}
            </td>
            <td
              width="22"
              bgcolor="${backgroundColor}"
              class="newsletterIntroLineSideSpace"
              style="
                width:22px;
                padding:0;
                background-color:${backgroundColor};
                font-size:0;
                line-height:0;
              "
            >
              &nbsp;
            </td>
          </tr>

         <tr>
         <td
         colspan="5"
         bgcolor="${backgroundColor}"
         class="newsletterBottom20px"
         style="
           background-color:${backgroundColor};
           font-size:0;
           line-height:0;
         "
       >
         &nbsp;
       </td>
         </tr>

          ${
            cta
              ? `
                <tr>
                  <td
                    colspan="3"
                    width="78"
                    bgcolor="${backgroundColor}"
                    class="newsletterIntroContentOffset"
                    style="
                      width:78px;
                      padding:0;
                      background-color:${backgroundColor};
                      font-size:0;
                      line-height:0;
                    "
                  >
                    &nbsp;
                  </td>
          
                  <td
                    align="${alignment}"
                    bgcolor="${backgroundColor}"
                    style="
                      background-color:${backgroundColor};
                      text-align:${alignment};
                    "
                  >
                    <a
                      href="${getCtaHref()}"
                      class="newsletterBedsAndNightstandsIntroCTA"
                      style="
                      text-align:${alignment};
                      color:${ctaColor};
                       
                      "
                    >${getCtaText()}</a>
                  </td>
                  <td
                    width="22"
                    bgcolor="${backgroundColor}"
                    class="newsletterIntroLineSideSpace"
                    style="
                      width:22px;
                      padding:0;
                      background-color:${backgroundColor};
                      font-size:0;
                      line-height:0;
                    "
                  >
                    &nbsp;
                  </td>
                </tr>
              `
              : ''
          }
        </table>
      </td>
    </tr>

    ${
      bottomSpace !== '0'
        ? Space({
            insideTr: true,
            className: bottomSpace,
            backgroundColor,
          })
        : ''
    }

    ${
      additionalSpace
        ? Space({
            insideTr: true,
            className: additionalSpace,
            backgroundColor,
          })
        : ''
    }
  `;
};