export const render = ({ getCategoryLink, getCategoryTitle, categories, paddingStyle = 'padding-right:4px' }) => {
  return `
    <td width="50%" valign="top">
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
          <td style="${paddingStyle}">
            <a href="${getCategoryLink(categories.href)}">
                <img alt="${getCategoryTitle(categories.name)}" src="${
    categories.src
  }" style="width:100%; max-width: 100%; display:block;" loading="lazy">
            </a>
          </td>
      </tr>
    </table>
</td>`;
};
