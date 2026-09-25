import { Product } from '../components/Product';
import { Space } from '../components/Space';

export const render = (
  categories = [],
  {
    color = '#000000',
    background = '#ffffff',
    titleColor = '#8B0000',
    ctaColor = '#8B0000',
    insideContainer = true,
    getPhrase = (key) => key,
    getCategoryTitle,
    getCategoryLink,
  } = {}
) => {
  if (
    !Array.isArray(categories) ||
    categories.length === 0
  ) {
    return '';
  }

  const cols = 3;
  const totalRows = Math.ceil(
    categories.length / cols
  );

  const shopNowText = getPhrase('Shop now');

  const resolveTitle = (category) =>
    typeof getCategoryTitle === 'function'
      ? getCategoryTitle(category.name)
      : category.name;

  const resolveHref = (category) =>
    typeof getCategoryLink === 'function'
      ? getCategoryLink(category.href)
      : category.href;

  const renderGridCells = (
    rowCategories,
    renderContent,
    valign = 'top'
  ) =>
    rowCategories
      .map((category, column) => {
        const content = category
          ? renderContent(category)
          : '&nbsp;';

        return `
          <td
            width="32%"
            valign="${valign}"
            align="center"
            bgcolor="${background}"
            style="
              width:32%;
              padding:0;
              vertical-align:${valign};
              text-align:center;
              background-color:${background};
              color:${color};
            "
          >
            ${content}
          </td>

          ${
            column < cols - 1
              ? `
                <td
                  width="2%"
                  bgcolor="${background}"
                  style="
                    width:2%;
                    padding:0;
                    background-color:${background};
                    font-size:0;
                    line-height:0;
                  "
                >
                  &nbsp;
                </td>
              `
              : ''
          }
        `;
      })
      .join('');

  let gridRows = '';

  for (let row = 0; row < totalRows; row++) {
    const isLastRow = row === totalRows - 1;

    const rowCategories = Array.from(
      { length: cols },
      (_, column) =>
        categories[row * cols + column] || null
    );

    /*
     * Shared image row.
     */
    gridRows += `
      <tr>
        ${renderGridCells(
          rowCategories,
          (category) => {
            const href = resolveHref(category);
            const title = resolveTitle(category);

            return `
              <a
                href="${href}"
                target="_blank"
                style="
                  display:block;
                  text-decoration:none;
                "
              >
                <img
                  src="${category.src}"
                  alt="${title}"
                  width="190"
                  border="0"
                  style="
                    display:block;
                    width:100%;
                    max-width:190px;
                    height:auto;
                    margin:0 auto;
                    padding:0;
                    border:0;
                    outline:none;
                    text-decoration:none;
                    -ms-interpolation-mode:bicubic;
                  "
                >
              </a>
            `;
          }
        )}
      </tr>
    `;

    /*
     * Shared space after images.
     */
    gridRows += `
      <tr>
        <td
          colspan="5"
          height="10"
          bgcolor="${background}"
          style="
            height:10px;
            padding:0;
            background-color:${background};
            font-size:0;
            line-height:10px;
            mso-line-height-rule:exactly;
          "
        >
          &nbsp;
        </td>
      </tr>
    `;

    /*
     * Shared title row.
     *
     * If one title wraps onto two lines, this complete
     * row becomes taller for all three categories.
     */
    gridRows += `
      <tr>
        ${renderGridCells(
          rowCategories,
          (category) => {
            const href = resolveHref(category);
            const title = resolveTitle(category);

            return `
              <a
                href="${href}"
                target="_blank"
                class="newsletterSmallgridItemTitle"
                style="
                  display:block;
                  color:${titleColor};
                  text-align:center;
                  text-decoration:none;
                "
              >
                ${title}
              </a>
            `;
          },
          'top'
        )}
      </tr>
    `;

    /*
     * Shared space between titles and CTAs.
     */
    gridRows += `
      <tr>
        <td
          colspan="5"
          height="8"
          bgcolor="${background}"
          style="
            height:8px;
            padding:0;
            background-color:${background};
            font-size:0;
            line-height:8px;
            mso-line-height-rule:exactly;
          "
        >
          &nbsp;
        </td>
      </tr>
    `;

    /*
     * Shared CTA row.
     *
     * All CTAs now start below the tallest title.
     */
    gridRows += `
      <tr>
        ${renderGridCells(
          rowCategories,
          (category) => {
            const href = resolveHref(category);

            return `
              <a
                href="${href}"
                target="_blank"
                class="newsletterSmallgridItemCTA"
                style="
                  display:inline-block;
                  color:${ctaColor};
                  text-align:center;
                  text-decoration:underline;
                "
              >
                ${shopNowText}
              </a>
            `;
          },
          'bottom'
        )}
      </tr>
    `;

    /*
     * Space between category rows.
     */
    if (!isLastRow) {
      gridRows += `
        <tr>
          <td
            colspan="5"
            height="35"
            bgcolor="${background}"
            style="
              height:35px;
              padding:0;
              background-color:${background};
              font-size:0;
              line-height:35px;
              mso-line-height-rule:exactly;
            "
          >
            &nbsp;
          </td>
        </tr>
      `;
    }
  }

  return `
    <tr>
      <td
        ${
          insideContainer
            ? 'class="newsletterContainer"'
            : ''
        }
        bgcolor="${background}"
        style="
          background-color:${background};
          color:${color};
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          bgcolor="${background}"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
            background-color:${background};
          "
        >
          ${gridRows}
        </table>
      </td>
    </tr>
  `;
};