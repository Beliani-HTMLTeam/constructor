const ICON_DEFAULT = 'https://pictureserver.net/static/2026/copy-icon{variant}.svg';
const ICON_OK = 'https://pictureserver.net/static/2026/copy-icon-ok{variant}.svg';

const isColorLight = (color) => {
  if (!color) return false;
  const hex = color.replace('#', '');

  if (hex.length === 3) {
    hex = hex.split('').map((c) => c + c).join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luminance > 128;
}

const resolveIcons = (color) => {
  if (isColorLight(color)) {
    return {
      iconDefault: ICON_DEFAULT.replace('{variant}', '-light'),
      iconOk: ICON_OK.replace('{variant}', '-light'),
    };
  }
  return {
    iconDefault: ICON_DEFAULT.replace('{variant}', '-black'),
    iconOk: ICON_OK.replace('{variant}', ''),
  };
};

const CopyCodeCTA = ({ text, codeValue, color = '#750000', label = 'Code copied', font = 'Poppins, Tahoma, Geneva, sans-serif' }) => {
  const { iconDefault, iconOk } = resolveIcons(color);

  return `
    <tr>
      <td style="text-align: center;" class="newsletterContainer"><span style="display:inline-flex;align-items:center;gap:6px;"><span class="newsletterParagraph">${text}</span><span style="position:relative;display:inline-block;"><button onclick="(function(b){var e=window.event||arguments[0];if(e){e.preventDefault();e.stopPropagation();}var i=b.querySelector('img');var t=b.parentElement.querySelector('.copy-toast');if(t.style.opacity==='1')return;navigator.clipboard.writeText('${codeValue}').then(function(){i.src='${iconOk}';t.style.visibility='visible';t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';setTimeout(function(){t.style.transition='opacity 0.15s ease,transform 0.15s ease';t.style.opacity='0';t.style.transform='translateX(-50%) translateY(6px)';setTimeout(function(){t.style.visibility='hidden';i.style.transition='opacity 0.2s ease';i.style.opacity='0';setTimeout(function(){i.src='${iconDefault}';i.style.opacity='1';},200);},150);},2500);})})(this)" style="background:none;border:none;cursor:pointer;padding:0;vertical-align:middle;"><img src="${iconDefault}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;"></button><span class="copy-toast" style="position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(6px);background:${color};color:#fff;padding:5px 10px;border-radius:5px;font-size:11px;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.3s ease,transform 0.3s ease;pointer-events:none;font-family:${font};font-weight:500;">${label}<span style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid ${color};display:block;"></span></span></span></span></td>
    </tr>
  `;
}

const CopyCodeWebNotification = ({ text, codeValue, color = '#FFCCB7', label = 'Code copied', font = 'Poppins, Tahoma, Geneva, sans-serif' }) => {
  const { iconDefault, iconOk } = resolveIcons(color);

  return `
    <tr>
      <td style="text-align: center;" class="newsletterContainer"><span style="display:inline-flex;align-items:center;gap:6px;"><span class="newsletterParagraph">${text}</span><button onclick="(function(b){var e=window.event||arguments[0];if(e){e.preventDefault();e.stopPropagation();}var i=b.querySelector('img');if(document.querySelector('[data-copy-notif]'))return;navigator.clipboard.writeText('${codeValue}').then(function(){i.src='${iconOk}';var n=document.createElement('div');n.setAttribute('data-copy-notif','1');var top=window.innerWidth<=600?'80px':'20px';n.style.cssText='position:fixed;right:-300px;top:'+top+';'+'background:${color};color:#000;padding:12px 20px;border-radius:8px;font-size:13px;font-weight:500;font-family:${font};z-index:9999;transition:right 0.3s ease;box-shadow:0 4px 12px rgba(0,0,0,0.15);white-space:nowrap;display:flex;align-items:center;gap:6px;';var ic=document.createElement('img');ic.src='${iconOk}';ic.width=16;ic.height=16;ic.style.cssText='width:16px;height:16px;';n.appendChild(ic);n.appendChild(document.createTextNode('${label}'));document.body.appendChild(n);requestAnimationFrame(function(){requestAnimationFrame(function(){n.style.right='20px';});});setTimeout(function(){n.style.right='-300px';setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n);i.style.transition='opacity 0.2s ease';i.style.opacity='0';setTimeout(function(){i.src='${iconDefault}';i.style.opacity='1';},200);},300);},2500);})})(this)" style="background:none;border:none;cursor:pointer;padding:0;vertical-align:middle;"><img src="${iconDefault}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;"></button></span></td>
    </tr>
  `;
}

const buildCopyIcon = ({ codeValue, color, toastBg, toastText, label, font = 'Poppins, Tahoma, Geneva, sans-serif' }) => {
  const { iconDefault, iconOk } = resolveIcons(color);

  return `<span style="position:relative;display:inline-block;"><button onclick="(function(b){var e=window.event||arguments[0];if(e){e.preventDefault();e.stopPropagation();}var i=b.querySelector('img');if(document.querySelector('[data-copy-notif]'))return;navigator.clipboard.writeText('${codeValue}').then(function(){i.src='${iconOk}';var n=document.createElement('div');n.setAttribute('data-copy-notif','1');var top=window.innerWidth<=600?'80px':'20px';n.style.cssText='position:fixed;right:-300px;top:'+top+';background:${toastBg};color:${toastText};padding:12px 20px;border-radius:8px;font-size:13px;font-weight:500;font-family:${font};z-index:9999;transition:right 0.3s ease;box-shadow:0 4px 12px rgba(0,0,0,0.15);white-space:nowrap;display:flex;align-items:center;gap:6px;';var ic=document.createElement('img');ic.src='${iconOk}';ic.width=16;ic.height=16;ic.style.cssText='width:16px;height:16px;';n.appendChild(ic);n.appendChild(document.createTextNode('${label}'));document.body.appendChild(n);requestAnimationFrame(function(){requestAnimationFrame(function(){n.style.right='20px';});});setTimeout(function(){n.style.right='-300px';setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n);i.style.transition='opacity 0.2s ease';i.style.opacity='0';setTimeout(function(){i.src='${iconDefault}';i.style.opacity='1';},200);},300);},2500);})})(this)" style="background:none;border:none;cursor:pointer;padding:0;vertical-align:middle;margin-left:6px;display:inline-flex;align-items:center;"><img src="${iconDefault}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;"></button></span>`;
}

export { CopyCodeCTA, CopyCodeWebNotification, isColorLight, buildCopyIcon };
