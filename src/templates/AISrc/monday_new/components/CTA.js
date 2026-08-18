const CTA = ({
  href = '#',
  text = 'GET THE CODE',
  color,
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  src = null,
  variant = 'maroon', // 'maroon' | 'cream' | 'underline'
  type = 'newsletter',
  codeValue = null,
  alwaysRenderAsImage = false,
  theme = {},
  getPhrase = null,
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  const ctaMaroonBg = theme?.primary ?? '#750000';
  const ctaMaroonText = theme?.primaryText ?? '#ffffff';
  const ctaCreamBg = theme?.secondary ?? '#ffe0d4';
  const ctaCreamText = theme?.secondaryText ?? '#750000';
  const ctaToastBg = theme?.toastBg ?? '#ffe0d4';
  const ctaToastText = color ?? theme?.primary ?? '#750000';

  const codeCopied = getPhrase?.('Copy code');

  const copyOnlyOnClickScript = codeValue ? `
    onclick="(function(e){
      e.preventDefault();
      e.stopPropagation();
      if (navigator.clipboard) {
        navigator.clipboard.writeText('${codeValue}');
      }
      var existing = document.querySelector('[data-copy-toast]');
      if (existing) existing.remove();
      var t = document.createElement('div');
      t.setAttribute('data-copy-toast', '1');
      t.style.cssText = 'position:fixed;top:20px;right:20px;background:${ctaToastBg};color:${ctaToastText};padding:12px 24px;border-radius:6px;font-size:14px;font-weight:bold;z-index:9999;box-shadow:0 4px 14px rgba(0,0,0,0.2);font-family:sans-serif;letter-spacing:0.5px;';
      document.body.appendChild(t);
      t.innerText = '${codeCopied}';
      setTimeout(function(){ if(t) t.remove(); }, 3000);
      return false;
    })(event)"
  ` : '';

  const lpImageCopyScript = codeValue ? `
    onclick="(function(e){
      e.preventDefault();
      e.stopPropagation();
      if (navigator.clipboard) {
        navigator.clipboard.writeText('${codeValue}');
      }
      var img = e.currentTarget.querySelector('img');
      if (img) {
        var originalSrc = img.src;
        img.style.opacity = '0.7';
        setTimeout(function(){ img.style.opacity = '1'; }, 1500);
      }
      var existing = document.querySelector('[data-copy-toast]');
      if (existing) existing.remove();
      var t = document.createElement('div');
      t.setAttribute('data-copy-toast', '1');
      t.style.cssText = 'position:fixed;top:20px;right:20px;background:${ctaToastBg};color:${ctaToastText};padding:12px 24px;border-radius:6px;font-size:14px;font-weight:bold;z-index:9999;box-shadow:0 4px 14px rgba(0,0,0,0.2);font-family:sans-serif;letter-spacing:0.5px;';
      t.innerText = '\u2713 Code copied: ${codeValue}';
      document.body.appendChild(t);
      setTimeout(function(){ if(t) t.remove(); }, 3000);
      return false;
    })(event)"
  ` : '';

  const clipboardIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline-block;vertical-align:middle;margin-right:6px;flex-shrink:0;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

  let html = '';

  if (src || alwaysRenderAsImage) {
    const effectiveSrc = src || '';
    if (type === 'landing' && codeValue) {
      html = `<a href="#" ${lpImageCopyScript} style="text-decoration: none; cursor: pointer; display: inline-block;"><img src="${effectiveSrc}" alt="${text || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
    } else {
      html = `<a href="${href}" style="text-decoration: none;"><img src="${effectiveSrc}" alt="${text || 'CTA'}" border="0" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" /></a>`;
    }
  } else if (type === 'landing') {
    if (variant === 'cream') {
      const buttonContent = codeValue ? `${text} ${clipboardIcon}` : text;
      html = `<a href="#" ${copyOnlyOnClickScript} class="ctaBtn" style="background-color: ${ctaCreamBg}; color: ${ctaCreamText} !important;">${buttonContent}</a>`;
    } else if (variant === 'underline') {
      const underlineHref = codeValue ? '#' : href;
      html = `<a href="${underlineHref}" ${copyOnlyOnClickScript} class="secondaryLinkMaroon">${text}</a>`;
    } else {
      html = `<a href="${href}" class="ctaBtn" style="background-color: ${ctaMaroonBg}; color: ${ctaMaroonText} !important;">${text}</a>`;
    }
  } else {
    if (variant === 'underline') {
      html = `<a href="${href}" class="secondaryLinkMaroon">${text}</a>`;
    } else {
      let bgColor;
      let textColor;
      switch (variant) {
        case 'cream':
          bgColor = '#ffe0d4';
          textColor = '#750000';
          break;
        case 'maroon':
          bgColor = '#750000';
          textColor = '#ffffff';
          break;
        default:
          bgColor = '#750000';
          textColor = '#ffffff';
      }

      html = `
        <table cellspacing="0" cellpadding="0" border="0" align="${align}" style="margin: 0 auto;">
          <tr>
            <td align="center" bgcolor="${bgColor}" style="background-color: ${bgColor}; border-radius: 4px; padding: 15px 45px;">
              <!--[if mso]>
              <i style="letter-spacing: 35px; mso-font-width: -100%; mso-text-raise: 30pt">&nbsp;</i>
              <![endif]-->
              <a href="${href}" target="_blank" style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; font-weight: 600; color: ${textColor} !important; text-decoration: none; display: inline-block; text-transform: uppercase; letter-spacing: 1.5px;">
                <span style="color: ${textColor} !important;">${text}</span>
              </a>
              <!--[if mso]>
              <i style="letter-spacing: 35px; mso-font-width: -100%;">&nbsp;</i>
              <![endif]-->
            </td>
          </tr>
        </table>
      `;
    }
  }

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} align="${align}">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error('Cannot have both insideTr and insideTable set to true - handle automatically.');
    }

    html = `<table ${tableAttributes}><tr><td ${tableContainer ? 'class="newsletterContainer"' : ''} align="${align}">${html}</td></tr></table>`;
  }

  return html;
};

export { CTA };
