export function Create2Columns_Grid({ iter, left, right, shuffle }) {
  if (!iter || iter.length === 0) return '';

  const rows = [];

  // Разбиваем на пары (2 колонки в строке)
  for (let i = 0; i < iter.length; i += 2) {
    const item1 = iter[i];
    const item2 = iter[i + 1];

    const columns = [
      left(item1),
      item2 ? right(item2) : '<td width="50%"></td>', // Если нечетное кол-во, оставляем пустую ячейку
    ];

    if (shuffle && i % 4 >= 2) {
      columns.reverse(); // Меняем местами для "shuffle" эффекта
    }

    // <<< NOWE: wykrycie ostatniej pary >>>
    const isLastPair = i + 2 >= iter.length;
    const paddingBottom = isLastPair ? '0' : '8px';

    rows.push(`
      <tr>
        <td class="newsletterContainer" style="padding-bottom: ${paddingBottom};">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                ${columns.join('')}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    `);
  }

  return rows.join('');
}
