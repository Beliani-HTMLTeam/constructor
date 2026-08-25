import { Space } from "../Space";

const normalizeImageSrc = (src) => {
  if (!src) return '';

  if (typeof src === 'object') {
    return src.src || '';
  }

  return src;
};

const getTitle = ({
  item,
  country,
  getCategoryTitle,
}) => {
  return (
    item?.overrides?.[country] ||
    (
      typeof getCategoryTitle === 'function'
        ? getCategoryTitle(item.name)
        : item.name
    ) ||
    ''
  );
};

const getHref = ({
  item,
  getCategoryLink,
}) => {
  if (!item?.href) return '#';

  return typeof getCategoryLink === 'function'
    ? getCategoryLink(item.href)
    : item.href;
};

const renderTextBlock = ({
  item,
  country,
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  defaultBackground,
  defaultColor,
  textHeight,
}) => {
  const href = getHref({
    item,
    getCategoryLink,
  });

  const title = getTitle({
    item,
    country,
    getCategoryTitle,
  });

  const background =
    item?.background ||
    defaultBackground ||
    '#FFCCB7';

  const color =
    item?.title?.color ||
    item?.color ||
    defaultColor ||
    '#000000';

  const ctaColor =
    item?.cta?.color ||
    item?.color ||
    defaultColor ||
    '#000000';

  const ctaText =
    typeof getPhrase === 'function'
      ? getPhrase('shop now')
      : 'Shop now';

  return `
    <table
      role="presentation"
      border="0"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      bgcolor="${background}"
      style="
        width:100%;
        table-layout:fixed;
        background-color:${background};
        border-collapse:collapse;
        mso-table-lspace:0pt;
        mso-table-rspace:0pt;
      "
    >
      <tbody>
      ${Space({ className: "newsletterBottom20px", backgroundColor: background, insideTr: true })}
        <tr>
          <td
            align="${item?.title?.align || 'center'
    }"
            valign="middle"
            bgcolor="${background}"
            style="
            text-align:${item?.title?.align || 'center'};
            color:${color};
            background-color:${background};
              vertical-align:middle;
              mso-line-height-rule:exactly;
              -webkit-text-size-adjust:100%;
              -ms-text-size-adjust:100%;
            "
          >
                  <a
                    href="${href}"
                    target="_blank"
                    class="newsletterCategoryTitle"
                    style="
                    text-align:${item?.title?.align || 'center'};
                    color:${color};
                      -webkit-text-size-adjust:100%;
                      -ms-text-size-adjust:100%;
                    "
                  >
                    ${title}
                  </a>
          </td>
        </tr>
        ${Space({ className: "newsletterBottom10px", backgroundColor: background, insideTr: true })}
        <tr>
        <td
          align="${item?.title?.align || 'center'
  }"
          valign="middle"
          bgcolor="${background}"
          style="
          text-align:${item?.title?.align || 'center'};
          color:${color};
          background-color:${background};
            vertical-align:middle;
            mso-line-height-rule:exactly;
            -webkit-text-size-adjust:100%;
            -ms-text-size-adjust:100%;
          "
        >
      
                <a
                  href="${href}"
                  target="_blank"
                  class="newsletterCategoryCTA"
                  style="
                  color:${ctaColor};
                   
                    -webkit-text-size-adjust:100%;
                    -ms-text-size-adjust:100%;
                  "
                >
                  ${ctaText}
                </a>
        </td>
      </tr>
      </tbody>
    </table>
  `;
};

const renderCard = ({
  item,
  country,
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  defaultBackground,
  defaultColor,
  textHeight,
  imageWidth = 650,
}) => {
  if (!item) return '';

  const href = getHref({
    item,
    getCategoryLink,
  });

  const title = getTitle({
    item,
    country,
    getCategoryTitle,
  });

  const src = normalizeImageSrc(item.src);

  const background =
    item.background ||
    defaultBackground ||
    '#FFCCB7';

  return `
    <table
      role="presentation"
      border="0"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      bgcolor="${background}"
      style="
        width:100%;
        table-layout:fixed;
        background-color:${background};
        border-collapse:collapse;
        mso-table-lspace:0pt;
        mso-table-rspace:0pt;
      "
    >
      <tbody>
        ${src
      ? `
              <tr>
                <td
                  align="center"
                  valign="top"
                  bgcolor="${background}"
                  style="
                    padding:0;
                    background-color:${background};
                    text-align:center;
                    vertical-align:top;
                  "
                >
                  <a
                    href="${href}"
                    target="_blank"
                    style="
                      display:block;
                      width:100%;
                      background-color:${background};
                      text-decoration:none;
                    "
                  >
                  <img
                  src="${src}"
                  alt="${title}"
                  width="${imageWidth}"
                  border="0"
                  style="
                    display:block;
                    width:100%;
                    max-width:100%;
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
              </tr>
            `
      : ''
    }

        <tr>
          <td
          class="newsletterContainer"
            bgcolor="${background}"
            style="
              background-color:${background};
            "
          >
            ${renderTextBlock({
      item,
      country,
      getPhrase,
      getCategoryLink,
      getCategoryTitle,
      defaultBackground,
      defaultColor,
      textHeight,
    })}
          </td>
        </tr>
        ${Space({ className: "newsletterBottom80px", backgroundColor: background, insideTr: true })}
      </tbody>
    </table>
  `;
};

const renderFullRow = ({
  item,
  rendererProps,
}) => {
  if (!item) return '';

  const background =
    item.background ||
    rendererProps.defaultBackground;

  return `
    <tr>
      <td
        width="650"
        valign="top"
        bgcolor="${background}"
        style="
          width:100%;
          padding:0;
          vertical-align:top;
          background-color:${background};
        "
      >
        ${renderCard({
          ...rendererProps,
          item,
          imageWidth: 650,
        })}
      </td>
    </tr>
  `;
};

const renderPairRow = ({
  leftItem,
  rightItem,
  gap = 20,
  rendererProps,
}) => {
  if (!leftItem && !rightItem) return '';

  const leftBackground =
    leftItem?.background ||
    rendererProps.defaultBackground;

  const rightBackground =
    rightItem?.background ||
    rendererProps.defaultBackground;

  const pairImageWidth = Math.floor(
    (650 - gap) / 2
  );

  return `
    <tr>
      <td
        width="650"
        valign="top"
        bgcolor="${rendererProps.defaultBackground}"
        style="
          width:100%;
          padding:0;
          vertical-align:top;
          background-color:${rendererProps.defaultBackground};
        "
      >
        <table
          role="presentation"
          border="0"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          align="center"
          bgcolor="${rendererProps.defaultBackground}"
          style="
            width:100%;
            table-layout:fixed;
            border-collapse:collapse;
            background-color:${rendererProps.defaultBackground};
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
          "
        >
          <tbody>
            <tr>
              <td
                valign="top"
                bgcolor="${leftBackground}"
                style="
                  padding:0;
                  vertical-align:top;
                  background-color:${leftBackground};
                "
              >
                ${
                  leftItem
                    ? renderCard({
                        ...rendererProps,
                        item: leftItem,
                        imageWidth: pairImageWidth,
                      })
                    : '&nbsp;'
                }
              </td>

              <td
                width="${gap}"
                valign="top"
                bgcolor="${rendererProps.defaultBackground}"
                style="
                  width:${gap}px;
                  padding:0;
                  font-size:0;
                  line-height:0;
                  vertical-align:top;
                  background-color:${rendererProps.defaultBackground};
                  mso-line-height-rule:exactly;
                "
              >&nbsp;</td>

              <td
                valign="top"
                bgcolor="${rightBackground}"
                style="
                  padding:0;
                  vertical-align:top;
                  background-color:${rightBackground};
                "
              >
                ${
                  rightItem
                    ? renderCard({
                        ...rendererProps,
                        item: rightItem,
                        imageWidth: pairImageWidth,
                      })
                    : '&nbsp;'
                }
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  `;
};

const createDefaultLayout = (items) => {
  const layout = [];

  for (let index = 0; index < items.length;) {
    layout.push({
      type: 'full',
      items: [index],
    });

    index += 1;

    if (index < items.length) {
      layout.push({
        type: 'pair',
        items: [index, index + 1],
      });

      index += 2;
    }
  }

  return layout;
};

export const BigGridRenderer = ({
  categories,
  country,
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  background = '#FFCCB7',
}) => {
  const groups = Array.isArray(categories)
    ? categories
    : [];

  let html = '';

  groups.forEach((group) => {
    const items = Array.isArray(group?.categories)
      ? group.categories
      : [];

    if (items.length === 0) return;

    const groupBackground =
      group.background ||
      background ||
      items[0]?.background ||
      '#FFCCB7';

    const groupColor =
      group.color ||
      items[0]?.color ||
      '#000000';

    const gap = Number(group.gap ?? 20);
    const textHeight = Number(
      group.textHeight ?? 64
    );

    const layout = Array.isArray(group.layout)
      ? group.layout
      : createDefaultLayout(items);

    const rendererProps = {
      country,
      getPhrase,
      getCategoryLink,
      getCategoryTitle,
      defaultBackground: groupBackground,
      defaultColor: groupColor,
      textHeight,
    };

    let rows = '';

    layout.forEach((row) => {
      const indexes = Array.isArray(row.items)
        ? row.items
        : [];

      if (row.type === 'pair') {
        rows += renderPairRow({
          leftItem: items[indexes[0]],
          rightItem: items[indexes[1]],
          gap,
          rendererProps,
        });

        return;
      }

      rows += renderFullRow({
        item: items[indexes[0]],
        rendererProps,
      });
    });

    html += `
      ${group.spaceBefore
        ? `
            <tr>
              <td
                class="${group.spaceBefore}"
                bgcolor="${groupBackground}"
                style="
                  background-color:${groupBackground};
                  font-size:0;
                  line-height:0;
                "
              >&nbsp;</td>
            </tr>
          `
        : ''
      }

      <tr>
      <td
        width="650"
        bgcolor="${groupBackground}"
        style="
          width:100%;
          padding:0;
          background-color:${groupBackground};
        "
      >
        <table
          role="presentation"
          border="0"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          align="center"
          bgcolor="${groupBackground}"
          style="
            width:100%;
            table-layout:fixed;
            background-color:${groupBackground};
            border-collapse:collapse;
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
          "
        >
          <tbody>
            ${rows}
          </tbody>
        </table>
      </td>
    </tr>
    `;
  });

  return html;
};