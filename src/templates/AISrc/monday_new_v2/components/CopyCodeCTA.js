const ICON_DEFAULT = 'https://pictureserver.net/static/2026/copy-icon-black.svg';
const ICON_OK = 'https://pictureserver.net/static/2026/copy-icon-ok.svg';

const CopyCodeCTA = ({
  text,
  codeValue,
  color = '#FF2D00',
  toastBg = '#750000',
  textColor = '#ffffff',
  font = '',
}) => `
  <tr>
    <td align="center" class="newsletterContainer" style="background-color: #F6E7E6;">
      <!--[if mso]>
      <table cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0 auto;"><tr><td align="center" bgcolor="${color}" style="background-color:${color};"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="0%" stroke="f" fillcolor="${color}"><w:anchorlock/><center style="color:${textColor};font-family:'Open Sans',Arial,sans-serif;font-size:16px;font-weight:600;letter-spacing:1.5px;">${text}</center></v:roundrect></td></tr></table>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="#" onclick="(function(b){var i=b.querySelector('img');if(i.src.indexOf('ok')>-1)return;function d(){i.src='${ICON_OK}';var t=b.querySelector('.copy-toast');t.style.visibility='visible';t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';setTimeout(function(){t.style.transition='opacity 0.15s ease,transform 0.15s ease';t.style.opacity='0';t.style.transform='translateX(-50%) translateY(6px)';setTimeout(function(){t.style.visibility='hidden';i.style.transition='opacity 0.2s ease';i.style.opacity='0';setTimeout(function(){i.src='${ICON_DEFAULT}';i.style.opacity='1';},200);},150);},2500);}if(navigator.clipboard){navigator.clipboard.writeText('${codeValue}').then(d);}else{var t=document.createElement('textarea');t.value='${codeValue}';t.style.cssText='position:fixed;top:-9999px;left:-9999px;';document.body.appendChild(t);t.focus();t.select();try{document.execCommand('copy');d();}catch(e){}document.body.removeChild(t);}})(this);return false;" style="${font ? `font-family:${font};` : ''}font-size:16px;font-weight:600;color:${textColor}!important;text-decoration:none;display:inline-block;padding:15px 45px;letter-spacing:1.5px;background-color:${color};position:relative;white-space:nowrap;"><span style="color:${textColor}!important;display:inline-flex;align-items:center;justify-content:center;gap:8px;">${text}<img src="${ICON_DEFAULT}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;filter:brightness(0) invert(1);"></span><span class="copy-toast" style="position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(6px);background:${toastBg};color:#fff;padding:5px 10px;border-radius:5px;font-size:11px;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.3s ease,transform 0.3s ease;pointer-events:none;${font ? `font-family:${font};` : ''}font-weight:500;">${codeValue}<span style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid ${toastBg};display:block;"></span></span></a>
      <!--<![endif]-->
    </td>
  </tr>
`;

const CopyCodeWebNotification = ({
  text,
  codeValue,
  color = '#FF2D00',
  notifBg = '#FFCCB7',
  textColor = '#ffffff',
  font = '',
  label = 'Code copied',
}) => `
  <tr>
    <td align="center" class="newsletterContainer" style="background-color: #F6E7E6;">
      <!--[if mso]>
      <table cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0 auto;"><tr><td align="center" bgcolor="${color}" style="background-color:${color};"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="0%" stroke="f" fillcolor="${color}"><w:anchorlock/><center style="color:${textColor};font-family:'Open Sans',Arial,sans-serif;font-size:16px;font-weight:600;letter-spacing:1.5px;">${text}</center></v:roundrect></td></tr></table>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="#" onclick="(function(b){var i=b.querySelector('img');if(document.querySelector('[data-copy-notif]'))return;function d(){i.src='${ICON_OK}';var n=document.createElement('div');n.setAttribute('data-copy-notif','1');n.style.cssText='position:fixed;right:-300px;top:'+(window.innerWidth<=600?'80px':'20px')+';background:${notifBg};color:#000;padding:12px 20px;border-radius:8px;font-size:13px;font-weight:500;${font ? `font-family:${font};` : ''}z-index:9999;transition:right 0.3s ease;box-shadow:0 4px 12px rgba(0,0,0,0.15);white-space:nowrap;display:flex;align-items:center;gap:6px;';var ic=document.createElement('img');ic.src='${ICON_OK}';ic.width=16;ic.height=16;ic.style.cssText='width:16px;height:16px;';n.appendChild(ic);n.appendChild(document.createTextNode('${label}'));document.body.appendChild(n);requestAnimationFrame(function(){requestAnimationFrame(function(){n.style.right='20px';});});setTimeout(function(){n.style.right='-300px';setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n);i.style.transition='opacity 0.2s ease';i.style.opacity='0';setTimeout(function(){i.src='${ICON_DEFAULT}';i.style.opacity='1';},200);},300);},2500);}if(navigator.clipboard){navigator.clipboard.writeText('${codeValue}').then(d);}else{var t=document.createElement('textarea');t.value='${codeValue}';t.style.cssText='position:fixed;top:-9999px;left:-9999px;';document.body.appendChild(t);t.focus();t.select();try{document.execCommand('copy');d();}catch(e){}document.body.removeChild(t);}})(this);return false;" style="${font ? `font-family:${font};` : ''}font-size:16px;font-weight:600;color:${textColor}!important;text-decoration:none;display:inline-block;padding:15px 45px;letter-spacing:1.5px;background-color:${color};white-space:nowrap;"><span style="color:${textColor}!important;display:inline-flex;align-items:center;justify-content:center;gap:8px;">${text}<img src="${ICON_DEFAULT}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;filter:brightness(0) invert(1);"></span></a>
      <!--<![endif]-->
    </td>
  </tr>
`;

export { CopyCodeCTA, CopyCodeWebNotification };