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

const normalizeImageSrc = (src) => {
  if (!src) return '';

  if (typeof src === 'object') {
    return src.src || '';
  }

  return src;
};

const getTileData = ({
  category,
  getTitle,
  getHref,
  getCtaText,
}) => {
  if (!category) return null;

  return {
    background:
      category.background || '#FFFFFF',

    titleColor:
      category.title?.color ||
      category.color ||
      '#750000',

    ctaColor:
      category.cta?.linkColor ||
      '#FF2F00',

    image: escapeHtml(
      normalizeImageSrc(category.src)
    ),

    href: escapeHtml(
      getHref(category)
    ),

    title: escapeHtml(
      getTitle(category)
    ),

    ctaText: escapeHtml(
      getCtaText(category)
    ),
  };
};

const renderGapCell = ({
  background,
  height,
}) => `
  <td
    width="10"
    height="${height || ''}"
    bgcolor="${background}"
    style="
      width:1.7%;
      ${height ? `height:${height}px;` : ''}
      padding:0;
      background-color:${background};
      font-size:0;
      line-height:${height || 0}px;
      mso-line-height-rule:exactly;
    "
  >&nbsp;</td>
`;

const renderSpacerCell = ({
  background,
  height,
}) => `
  <td
    width="290"
    height="${height}"
    bgcolor="${background}"
    style="
      width:49.15%;
      height:${height}px;
      padding:0;
      background-color:${background};
      font-size:0;
      line-height:${height}px;
      mso-line-height-rule:exactly;
    "
  >&nbsp;</td>
`;

const renderImageCell = ({
  tile,
  background,
}) => {
  if (!tile) {
    return `
      <td
        width="290"
        valign="top"
        bgcolor="${background}"
        style="
          width:49.15%;
          padding:0;
          background-color:${background};
          vertical-align:top;
        "
      >&nbsp;</td>
    `;
  }

  return `
    <td
      width="290"
      valign="top"
      bgcolor="${tile.background}"
      style="
        width:49.15%;
        padding:0;
        background-color:${tile.background};
        vertical-align:top;
      "
    >
      <a
        href="${tile.href}"
        target="_blank"
        style="
          display:block;
          width:100%;
          text-decoration:none;
        "
      >
        <img
          src="${tile.image}"
          width="290"
          height="290"
          alt="${tile.title}"
          border="0"
          style="
            display:block;
            width:100%;
            max-width:290px;
            height:auto;
            margin:0;
            padding:0;
            border:0;
            outline:none;
            text-decoration:none;
            -ms-interpolation-mode:bicubic;
          "
        >
      </a>
    </td>
  `;
};

const renderTitleCell = ({
  tile,
  background,
}) => {
  if (!tile) {
    return `
      <td
        width="290"
        valign="top"
        bgcolor="${background}"
        style="
          width:49.15%;
          padding:0;
          background-color:${background};
          vertical-align:top;
        "
      >&nbsp;</td>
    `;
  }

  return `
    <td
      width="290"
      align="left"
      valign="top"
      bgcolor="${tile.background}"
      class="newsletterBigGridTitle"
      style="
        width:49.15%;
        padding:0;
        background-color:${tile.background};
        color:${tile.titleColor};
        text-align:left;
        vertical-align:top;
      "
    >
      <a
        href="${tile.href}"
        target="_blank"
        style="
          display:block;
          color:${tile.titleColor};
          text-decoration:none;
        "
      >
        ${tile.title}
      </a>
    </td>
  `;
};

const renderCtaCell = ({
  tile,
  background,
}) => {
  if (!tile) {
    return `
      <td
        width="290"
        valign="top"
        bgcolor="${background}"
        style="
          width:49.15%;
          padding:0;
          background-color:${background};
          vertical-align:top;
        "
      >&nbsp;</td>
    `;
  }

  return `
    <td
      width="290"
      align="left"
      valign="top"
      bgcolor="${tile.background}"
      class="newsletterBigGridCTA"
      style="
        width:49.15%;
        padding:0;
        background-color:${tile.background};
        color:${tile.ctaColor};
        text-align:left;
        vertical-align:top;
      "
    >
      <a
        href="${tile.href}"
        target="_blank"
        style="
          display:block;
          color:${tile.ctaColor};
          text-decoration:none;
        "
      >
        ${tile.ctaText}
      </a>
    </td>
  `;
};

const renderPair = ({
  leftCategory,
  rightCategory,
  getTitle,
  getHref,
  getCtaText,
  background,
  isLastRow,
}) => {
  const leftTile = getTileData({
    category: leftCategory,
    getTitle,
    getHref,
    getCtaText,
  });

  const rightTile = getTileData({
    category: rightCategory,
    getTitle,
    getHref,
    getCtaText,
  });

  const leftBackground =
    leftTile?.background || background;

  const rightBackground =
    rightTile?.background || background;

  return `
    <!-- Images -->
    <tr>
      ${renderImageCell({
        tile: leftTile,
        background,
      })}

      ${renderGapCell({
        background,
      })}

      ${renderImageCell({
        tile: rightTile,
        background,
      })}
    </tr>

    <!-- 10px between images and titles -->
    <tr>
      ${renderSpacerCell({
        background: leftBackground,
        height: 10,
      })}

      ${renderGapCell({
        background,
        height: 10,
      })}

      ${renderSpacerCell({
        background: rightBackground,
        height: 10,
      })}
    </tr>

    <!-- Shared title row -->
    <tr>
      ${renderTitleCell({
        tile: leftTile,
        background,
      })}

      ${renderGapCell({
        background,
      })}

      ${renderTitleCell({
        tile: rightTile,
        background,
      })}
    </tr>

    <!-- 10px between titles and CTAs -->
    <tr>
      ${renderSpacerCell({
        background: leftBackground,
        height: 10,
      })}

      ${renderGapCell({
        background,
        height: 10,
      })}

      ${renderSpacerCell({
        background: rightBackground,
        height: 10,
      })}
    </tr>

    <!-- Shared CTA row -->
    <tr>
      ${renderCtaCell({
        tile: leftTile,
        background,
      })}

      ${renderGapCell({
        background,
      })}

      ${renderCtaCell({
        tile: rightTile,
        background,
      })}
    </tr>

    <!-- Space below the pair -->
    <tr>
      ${renderSpacerCell({
        background: leftBackground,
        height: isLastRow ? 20 : 40,
      })}

      ${renderGapCell({
        background,
        height: isLastRow ? 20 : 40,
      })}

      ${renderSpacerCell({
        background: rightBackground,
        height: isLastRow ? 20 : 40,
      })}
    </tr>
  `;
};

export const BigGrid = ({
  categories = [],
  getTitle = (category) => category.name,
  getHref = (category) => category.href,
  getCtaText = () => 'Shop now',
  background = '#FFFFFF',
}) => {
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
    let isLastRow = index + 2 >= categories.length;

    rows.push(
      renderPair({
        leftCategory: categories[index],
        rightCategory:
          categories[index + 1] || null,
        getTitle,
        getHref,
        getCtaText,
        background,
        isLastRow,
      })
    );
  }

  return `
    ${Space({
      className: 'newsletterBottom60px',
      insideTr: true,
      backgroundColor: background,
    })}

    <tr>
      <td
        class="newsletterContainer30px"
        align="center"
        bgcolor="${background}"
        style="
          padding-top:0;
          padding-bottom:0;
          background-color:${background};
          text-align:center;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          bgcolor="${background}"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
            background-color:${background};
          "
        >
          <tbody>
            ${rows.join('')}
          </tbody>
        </table>
      </td>
    </tr>

    ${Space({
      className: 'newsletterBottom60px',
      insideTr: true,
      backgroundColor: background,
    })}
  `;
};

export const render = BigGrid;

export default BigGrid;