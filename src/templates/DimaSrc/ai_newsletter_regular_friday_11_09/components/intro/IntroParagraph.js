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
  if (!intro || intro.type !== 'paragraph') return '';

  const {
    title,
    subtitle,
    text,
    alignment = 'center',
    color = '#000000',
    titleColor,
    subtitleColor,
    paragraphColor,
    spaceTop = 'newsletterBottom35px',
    spaceBottom = 'newsletterBottom35px',
    backgroundColor = '#FFFFFF',
    cta,
    additionalSpace,
    tableContainerClass = 'newsletterContainer30px',
    useTopImageTitle = false,
    uppercaseSubtitle = true,
  } = intro;

  const topImageTitle = Array.isArray(
    queries?.TopImageTitle
  )
    ? queries.TopImageTitle
    : [];

  const introTitle =
    title ||
    queries?.introTitle ||
    (useTopImageTitle ? topImageTitle[0] : '');

  const introSubtitle =
    subtitle ||
    queries?.introSubtitle ||
    (useTopImageTitle ? topImageTitle[1] : '');

  const introText =
    text ||
    queries?.intro ||
    'Translation not found';

  const hasHeading = Boolean(
    introTitle || introSubtitle
  );

  // Preserve the old layout for paragraph-only campaigns.
  if (!hasHeading) {
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
              color,
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

  const titleHasPercentage = String(
    introTitle || ''
  ).includes('%');
  
  const subtitleHasPercentage = String(
    introSubtitle || ''
  ).includes('%');
  
  const mainHeadingIsSubtitle =
    !titleHasPercentage && subtitleHasPercentage;
  
  const titleClass = mainHeadingIsSubtitle
    ? 'newsletterIntroSubtitle'
    : 'newsletterIntroMainTitle';
  
  const subtitleClass = mainHeadingIsSubtitle
    ? 'newsletterIntroMainTitle'
    : 'newsletterIntroSubtitle';

  const content = `
    ${
      spaceTop !== '0'
        ? Space({
            insideTr: true,
            className: spaceTop,
            backgroundColor,
          })
        : ''
    }

    ${
      introTitle
        ? `
          ${Space({
            insideTr: true,
            className: 'newsletterBottom35px',
            backgroundColor,
          })}

          <tr>
            <td
              align="${alignment}"
              bgcolor="${backgroundColor}"
              class="${titleClass}"
              style="
                padding:0;
                background-color:${backgroundColor};
                color:${titleColor || color};
                text-align:${alignment};
                mso-line-height-rule:exactly;
                -webkit-text-size-adjust:100%;
                -ms-text-size-adjust:100%;
              "
            >
              ${introTitle}
            </td>
          </tr>
        `
        : ''
    }

    ${
      introSubtitle
        ? `
          ${Space({
            insideTr: true,
            className: 'newsletterBottom10px',
            backgroundColor,
          })}

          <tr>
            <td
              align="${alignment}"
              bgcolor="${backgroundColor}"
              class="${subtitleClass}"
              style="
                padding:0;
                background-color:${backgroundColor};
                color:${
                  subtitleColor ||
                  titleColor ||
                  color
                };
                text-align:${alignment};
                ${country === 'FI' && 'text-transform:lowercase;'}
                mso-line-height-rule:exactly;
                -webkit-text-size-adjust:100%;
                -ms-text-size-adjust:100%;
              "
            >
              ${introSubtitle}
            </td>
          </tr>
        `
        : ''
    }

    ${Space({
      insideTr: true,
      className: 'newsletterBottom20px',
      backgroundColor,
    })}

    <tr>
      <td
        class="newsletterIntroParagraph"
        align="${alignment}"
        bgcolor="${backgroundColor}"
        style="
          padding:0;
          background-color:${backgroundColor};
          color:${paragraphColor || color};
          text-align:${alignment};
          mso-line-height-rule:exactly;
          -webkit-text-size-adjust:100%;
          -ms-text-size-adjust:100%;
        "
      >
        ${introText}
      </td>
    </tr>

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
            color,
          })
        : ''
    }

    ${
      spaceBottom !== '0'
        ? Space({
            insideTr: true,
            className: spaceBottom,
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

  return `
    <tr>
      <td
        class="${tableContainerClass}"
        align="${alignment}"
        bgcolor="${backgroundColor}"
        style="
          background-color:${backgroundColor};
          text-align:${alignment};
        "
      >
        <table
          role="presentation"
          border="0"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          align="center"
          bgcolor="${backgroundColor}"
          style="
            width:100%;
            table-layout:fixed;
            background-color:${backgroundColor};
            border-collapse:collapse;
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
          "
        >
          <tbody>
            ${content}
          </tbody>
        </table>
      </td>
    </tr>
  `;
};