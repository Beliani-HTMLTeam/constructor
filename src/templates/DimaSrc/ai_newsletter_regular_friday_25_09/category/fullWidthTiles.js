export function FullWidthTiles({ tiles, getCategoryLink, getCategoryTitle }) {
 console.log('fullWIdthTiles', tiles)
  if (!tiles || tiles.length === 0) return '';

  const rows = [];

  // Разбиваем на пары (2 колонки в строке)
  for (let i = 0; i < tiles.length; i++) {
    const isLast = i === tiles.length - 1;
    const paddingBottom = isLast ? 'newsletterContainer' : 'newsletterContainerWithPaddingBottom20px';

    rows.push(`
      <tr>
        <td class="${paddingBottom}">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                ${renderTile({ category: tiles[i], getCategoryLink, getCategoryTitle })}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    `);
  }

  return rows.join('');
}

function renderTile({category, getCategoryLink, getCategoryTitle,}) {
  return `
  <td width="100%" valign="top">
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
        <td>
          <a href="${getCategoryLink(category.href)}">
              <img alt="${getCategoryTitle(category.name)}" src="${
                category.src && category.src.src ? category.src.src : category.src
              }" style="width:100%; max-width: 100%; display:block;" loading="lazy">
          </a>
        </td>
    </tr>
  </table>
</td>`;
}
