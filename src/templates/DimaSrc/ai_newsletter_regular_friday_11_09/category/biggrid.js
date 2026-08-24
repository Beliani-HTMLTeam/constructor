/**
 * Email-safe two-column category grid.
 * Designed for a 650 px newsletter container.
 */

import { Space } from "../components/Space";

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const renderTile = ({
  category,
  title,
  href,
  ctaText,
  isLastRow,
}) => {
  if (!category) {
    return `
      <td
        width="290"
        style="width:49.15%;"
      >
        &nbsp;
      </td>
    `;
  }

  const titleColor =
    category.title?.color ||
    category.color ||
    '#750000';

  /*
   * cta.color in your campaign is #FFFFFF because it was
   * intended for a red button. The Figma design uses a red
   * text link, so linkColor is used separately.
   */
  const ctaColor =
    category.cta?.linkColor ||
    '#FF2F00';

  const background =
    category.background ||
    '#FFFFFF';

  const image = escapeHtml(category.src);
  const safeHref = escapeHtml(href);
  const safeTitle = escapeHtml(title);
  const safeCta = escapeHtml(ctaText);

  const bottomPadding = isLastRow ? 0 : 14;

  return `
    <td
      width="290"
      valign="top"
      style="
        width:49.15%;
        vertical-align:top;
        background-color:${background};
      "
    >
      <table
        role="presentation"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="
          width:100%;
          border-collapse:collapse;
          background-color:${background};
        "
      >
        <tr>
          <td>
            <a
              href="${safeHref}"
              target="_blank"
              style="
                display:block;
                text-decoration:none;
              "
            >
              <img
                src="${image}"
                width="290"
                height="290"
                alt="${safeTitle}"
                style="
                  display:block;
                  width:100%;
                  max-width:290px;
                  height:auto;
                  border:0;
                "
              >
            </a>
          </td>
        </tr>

        ${Space({ className: 'newsletterBottom10px', insideTr: true, backgroundColor: background })}
        <tr>
          <td
            align="left"
            class="newsletterBigGridTitle"
            style="
              color:${titleColor};     
            "
          >
            <a
              href="${safeHref}"
              target="_blank"
              style="
                color:${titleColor};
                text-decoration:none;
              "
            >
              ${safeTitle}
            </a>
          </td>
        </tr>

        ${Space({ className: 'newsletterBottom10px', insideTr: true, backgroundColor: background })}

        <tr>
          <td
            align="left"
            style="
              color:${ctaColor};
            "
            class="newsletterBigGridCTA"
          >
            <a
              href="${safeHref}"
              target="_blank"
              style="
                color:${ctaColor};
                text-decoration:none;
              "
            >
              ${safeCta}
            </a>
          </td>
        </tr>
        ${Space({ className: `newsletterBottom20px`, insideTr: true, backgroundColor: background })}
      </table>
    </td>
  `;
};

/**
 * Returns one complete <tr> that can be inserted
 * into the main 650 px newsletter table.
 */
export const BigGrid = ({
  categories = [],
  getTitle = (category) => category.name,
  getHref = (category) => category.href,
  getCtaText = () => 'Shop now',
  background = '#FFFFFF',
}) => {
  console.log("biggrid", categories)
  if (
    !Array.isArray(categories) ||
    categories.length === 0
  ) {
    return '';
  }

  const rows = [];

  for (
    let index = 0;
    index < categories.length;
    index += 2
  ) {
    const leftCategory = categories[index];
    const rightCategory = categories[index + 1];

    const isLastRow =
      index + 2 >= categories.length;

    rows.push(`
      <tr>
        ${renderTile({
          category: leftCategory,
          title: getTitle(leftCategory),
          href: getHref(leftCategory),
          ctaText: getCtaText(leftCategory),
          isLastRow,
        })}

        <td
          width="10"
          style="
            width:1.7%;
            font-size:0;
            line-height:0;
          "
        >
          &nbsp;
        </td>

        ${renderTile({
          category: rightCategory,
          title: rightCategory
            ? getTitle(rightCategory)
            : '',
          href: rightCategory
            ? getHref(rightCategory)
            : '',
          ctaText: rightCategory
            ? getCtaText(rightCategory)
            : '',
          isLastRow,
        })}
      </tr>
    `);
  }

  return `
  ${Space({ className: 'newsletterBottom60px', insideTr: true, backgroundColor: background })}
    <tr>
      <td
        class="newsletterContainer30px"
        align="center"
        style="
          background-color:${background};
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width:100%;
            border-collapse:collapse;
            table-layout:fixed;
            background-color:${background};
          "
        >
          ${rows.join('')}
        </table>
      </td>
    </tr>
    ${Space({ className: 'newsletterBottom60px', insideTr: true, backgroundColor: background })}
  `;
};

export const render = BigGrid;

export default BigGrid;