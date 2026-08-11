import { Intro } from '../components/Intro';
import { Space } from '../components/Space';
import { CTA } from '../components/CTA';

const normalizeTitleLines = (value) => {
  const normalize = (item) =>
    String(item ?? '')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

  if (Array.isArray(value)) {
    return value.flatMap(normalize);
  }

  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(normalize);
  }

  return normalize(value);
};

export const IntroHandler = ({
  intro,
  queries,
  introCta_href,
  shopNow,
}) => {
  if (!intro || (intro.type && intro.type !== 'paragraph')) {
    return '';
  }

  const background =
    intro.background ||
    intro.backgroundColor ||
    '#750000';

  const subtitleColor =
    intro.subtitleColor ||
    '#FFCCB7';

  const titleColor =
    intro.titleColor ||
    '#FFFFFF';

  const paragraphColor =
    intro.paragraphColor ||
    '#FFFFFF';

  const ctaBackground =
    intro.cta?.background ||
    '#FD9000';

  const ctaColor =
    intro.cta?.color ||
    '#750000';

  const subtitle =
    queries?.subtitle ||
    '';

  const titleLines = normalizeTitleLines(
    queries?.TopImageTitle
  );

  const paragraph =
    queries?.intro ||
    'Translation not found';

  const ctaText =
    queries?.introCTA ||
    shopNow ||
    'Shop now';

  return `
    <tr>
      <td
        align="left"
        bgcolor="${background}"
        class="newsletterContainer25px"
        style="
          text-align:left;
          background-color:${background};
        "
      >
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          role="presentation"
        >
        ${Space({ className: 'newsletterBottom40px', insideTr: true})}
          ${
            subtitle
              ? `
                <tr>
                  <td
                    align="left"
                    class="newsletterWednesdaySubtitle"
                    style="
                      color:${subtitleColor};
                     
                    "
                  >
                    ${subtitle}
                  </td>
                </tr>

                ${Space({ className: 'newsletterBottom15px', insideTr: true})}

              `
              : ''
          }

          ${
            titleLines.length
              ? `
                ${titleLines
                  .map(
                    (line) => `
                      <tr>
                        <td
                          align="left"
                          class="newsletterWednesdayTitle"
                          style="
                            color:${titleColor};
                            text-align:left;
                          "
                        >
                          ${line}
                        </td>
                      </tr>
                    `
                  )
                  .join('')}
          
                ${Space({
                  className: 'newsletterBottom20px',
                  insideTr: true,
                })}
              `
              : ''
          }

          <tr>
            <td
              align="left"
              class="newsletterWednesdayParagraph"
              style="
                color:${paragraphColor};
              
              "
            >
              ${paragraph}
            </td>
          </tr>

          ${
            intro.cta && introCta_href
              ? `
                ${Space({ className: 'newsletterBottom25px', insideTr: true})}

                <tr>
                  <td align="left" style="background-color:${background};">
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      role="presentation"
                    >
                      <tr>
                        <td
                          style="
                            border-radius:4px;
                          "
                        >
                          <a
                            href="${introCta_href}"
                            class="newsletterWednesdayIntroCTA"
                            style="
                            border-color:${ctaBackground};
                            color:${ctaColor};
                            background-color:${ctaBackground};
                            
                            "
                          >${ctaText}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${Space({ className: 'newsletterBottom40px', insideTr: true})}
              `
              : ''
          }
        </table>
      </td>
    </tr>
  `;
};