import { Create2Columns_Grid } from './Create2Columns_Grid.js';

const CategoriesColumns = ({
    href,
    src,
    name,
    categories,
}) => {
  if (String(text).trim() === '') {
    text = 'Translation not found';
  }

  return `
    <tr>
        <td style="background-color: #750000;" class="newsletterContainer">
            ${Create2Columns_Grid({
            shuffle: false,
            iter: categories,
            left: (categories) => `
            <td width="50%" valign="top">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td style="padding-left:4px">
                    <a href="${href}">
                        <img alt="${name}" src="${src}" style="width:100%; max-width: 100%; display:block;" loading="lazy">
                    </a>
                    </td>
                </tr>
                </table>
            </td>
            `,
            right: (categories) => `
            <td width="50%" valign="top">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td style="padding-right:4px">
                    <a href="${href}">
                        <img alt="${name}" src="${src}" style="width:100%; max-width: 100%; display:block;" loading="lazy">
                    </a>
                    </td>
                </tr>
                </table>
            </td>
            `,
            cta: getPhrase(
                "Shop All Categories",
            ),
            color: "#ffffff",
            align: "center",
            href:
                type === "newsletter"
                    ? shop.origin + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id
                    : shop.origin,
                type,
            })}
        </td>
    </tr>
    <tr>
        ${Space({})}
    </tr>
  `;
};

export { CategoriesColumns };