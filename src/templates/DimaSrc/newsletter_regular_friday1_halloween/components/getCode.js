import { CopyCodeCTA, CopyCodeWebNotification } from "./CopyCodeCTA";

export function GetCode({ type, code = '', link, color, showCopyCode = false,  copyCodeColor, copyCodeLabel }) {
  console.log('lol', code);

  const codeString = typeof code === 'string' ? code : String(code || '');

  let copyCodeHtml = '';
  if (showCopyCode && type === 'landing') {
    const codeValue = codeString.split(/:\s+/).slice(1).join(': ').trim() || codeString;
    const updatedCode = codeString.split(/:\s+/).slice(0, 1).join(': ').trim().toUpperCase() + ': ' + codeValue;
    copyCodeHtml = CopyCodeWebNotification({ text: updatedCode, codeValue, color: copyCodeColor, label: copyCodeLabel });
  } else {
    copyCodeHtml = codeString
  }
  return `
  ${
    type === 'newsletter'
      ? `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
              <tr>
                  <td align="center" class="newsletterContainer">
                    <a href=${link} style="text-decoration:underline!important; color: ${color || '#000'};">
                        <span class="newsletterCode">
                        ${code}
                        </span>
                    </a>
                  </td>
              </tr>
          </tbody>
        </table>
        `
      : `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
                <td align="center">
                    <span class="newsletterCode" style="color: ${color || '#000'}">
                        ${copyCodeHtml}
                    </span>
                </td>
            </tr>
          </tbody>
        </table>
        `
  }
  `;
}
