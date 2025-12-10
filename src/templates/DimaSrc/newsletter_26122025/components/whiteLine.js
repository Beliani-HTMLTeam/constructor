export function WhiteLine(img = 'https://upload.pictureserver.net/static/2024/white_line.jpg') {
  return `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td align="center">
                    <img src=${img} style="display:block" width="609" alt="Line separator"/>
                </td>
            </tr>
        </tbody>
</table>
    `;
}
