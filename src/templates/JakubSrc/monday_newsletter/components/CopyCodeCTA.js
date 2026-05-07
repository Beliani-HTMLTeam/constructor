const ICON_DEFAULT = 'https://pictureserver.net/static/2026/copy-icon-black.svg';
const ICON_OK = 'https://pictureserver.net/static/2026/copy-icon-ok.svg';

const CopyCodeCTA = ({ text, codeValue }) => `
  <tr>
    <td style="text-align: center;" class="newsletterContainer"><span class="newsletterParagraph" style="text-align: center;">${text}</span><button onclick="(function(b){var i=b.querySelector('img');navigator.clipboard.writeText('${codeValue}').then(function(){i.src='${ICON_OK}';setTimeout(function(){i.src='${ICON_DEFAULT}';},2000);})})(this)" style="background:none;border:none;cursor:pointer;padding:0;vertical-align:middle;margin-left:6px;"><img src="${ICON_DEFAULT}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;"></button></td>
  </tr>
`;

export { CopyCodeCTA };
