export function GetCode({ type, code, link, color }) {
  console.log('getCode', code);
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
                        ${code[0]}
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
                        ${code[0]}
                    </span>

                    <button style="border: none; cursor: pointer; background: none;" onclick="copyCode()" class="copy-btn" data-code="${code[0]}">
                      <img style="width: 18px; heigth: 18px; color: green;" src="https://pictureserver.net/static/2026/copy-icon-black.svg"/>
                    </button>
                </td>
            </tr>
          </tbody>
        </table>
        `
  }
  `;
}

window.copyCode = function() {
  const button = document.querySelector('.copy-btn');
  const copyImg = document.querySelector('.copy-img');

  if(!button) return;

  const code = button.getAttribute('data-code');
  const splittedCode = code.match(/^\s*(.+?)\s*[:：]\s*(.+)\s*$/);
  
  navigator.clipboard.writeText(splittedCode[2])
    .then(() => {
      const img = button.querySelector('img');
      img.style.width = '18px';
      img.style.heigth = '18px';
      const copyImg = img.src;
      img.src = 'https://pictureserver.net/static/2026/copy-icon-ok.svg';
      
      // setTimeout(() => {
      //   img.src = originalSrc;
      // }, 2000);
      
    })
    .catch(err => {
      console.error(err);
    });
}