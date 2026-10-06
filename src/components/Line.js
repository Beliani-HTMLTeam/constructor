export function Line(img = "https://pictureserver.net/static/footer/new_footer_line.png") {
    return `
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
              <tr>
                  <td>
                      <img src=${img} style="display:block" width="100%" alt="Line separator"/>
                  </td>
              </tr>
          </tbody>
      </table>
      `;
  }
  