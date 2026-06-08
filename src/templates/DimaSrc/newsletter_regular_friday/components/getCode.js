import { CopyCodeCTA } from "./CopyCodeCTA";

export function GetCode({ type, code = '', link, color, showCopyCode = false }) {
  console.log('getCode', code);

  const codeString = typeof code === 'string' ? code : String(code || '');

  let copyCodeHtml = '';
  if (showCopyCode && type === 'landing') {
    const codeValue = codeString.split(/:\s+/).slice(1).join(': ').trim() || codeString;
    copyCodeHtml = CopyCodeCTA({ text: codeString, codeValue });
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
                  <td align="center">
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
