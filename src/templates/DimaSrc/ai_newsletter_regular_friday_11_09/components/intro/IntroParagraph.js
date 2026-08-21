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
    tableContainerClass = 'newsletterContainer',
    useTopImageTitle = false,
    uppercaseSubtitle = true,
  } = intro;

  const topImageTitle = Array.isArray(queries?.TopImageTitle)
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

  // Keep the old paragraph-only layout for other campaigns.
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

    ${
      introTitle
        ? `
          <tr>
            <td
              class="${tableContainerClass}"
              align="${alignment}"
              bgcolor="${backgroundColor}"
              style="
                padding-top:20px;
                background-color:${backgroundColor};
                color:${titleColor || color};
                font-family:Poppins, Arial, sans-serif;
                font-size:48px;
                line-height:1.15;
                font-weight:700;
                letter-spacing:-1.4px;
                text-align:${alignment};
                mso-line-height-rule:exactly;
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
          <tr>
            <td
              class="${tableContainerClass}"
              align="${alignment}"
              bgcolor="${backgroundColor}"
              style="
                padding-top:2px;
                background-color:${backgroundColor};
                color:${
                  subtitleColor ||
                  titleColor ||
                  color
                };
                font-family:Poppins, Arial, sans-serif;
                font-size:22px;
                line-height:1.2;
                font-weight:700;
                letter-spacing:0;
                text-align:${alignment};
                text-transform:${
                  uppercaseSubtitle
                    ? 'uppercase'
                    : 'none'
                };
                mso-line-height-rule:exactly;
              "
            >
              ${introSubtitle}
            </td>
          </tr>
        `
        : ''
    }

    <tr>
      <td
        class="${tableContainerClass}"
        align="${alignment}"
        bgcolor="${backgroundColor}"
        style="
          padding-top:14px;
          background-color:${backgroundColor};
          color:${paragraphColor || color};
          font-family:Arial, sans-serif;
          font-size:12px;
          line-height:1.4;
          font-weight:400;
          text-align:${alignment};
          mso-line-height-rule:exactly;
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
};