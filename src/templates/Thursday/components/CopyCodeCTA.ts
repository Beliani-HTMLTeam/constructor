// Ported from the currently-used `src/templates/JakubSrc/monday_newsletter/components/CopyCodeCTA.js`
// (the version already live in KrBiranowski's Monday `deal` campaigns — e.g.
// `campaigns/KrBiranowski/010_2026-08-11-free-kids.js`'s `copyCodeWeb: true`). The
// click-to-copy `onclick` logic and toast/notification animation are kept byte-for-byte
// identical to that tested version — only the outer wrapper gained an optional `filled`
// pill-button style (background/padding/radius, matching the newsletter's filled CTA) and
// `textColor`/`font` params, since the original renders bare inline text+icon with no
// button chrome at all.

const ICON_DEFAULT = 'https://pictureserver.net/static/2026/copy-icon-black.svg';
const ICON_OK = 'https://pictureserver.net/static/2026/copy-icon-ok.svg';

interface FilledStyleProps {
  /** Wraps the text+icon in a filled pill (background/padding/radius), matching the newsletter's filled CTA look. Unset/false = original bare inline text+icon (JakubSrc default). */
  filled?: boolean;
  /** Pill background colour (`filled` only). */
  background?: string;
  /** Pill width px (`filled` only). Defaults to `230`. */
  width?: number | string;
  /** Pill height px (`filled` only). Defaults to `48`. */
  height?: number | string;
}

export interface CopyCodeCTAProps extends FilledStyleProps {
  /** Label shown next to the copy icon, e.g. `'Code: freelampUK26'`. */
  text: string;
  /** Raw value copied to the clipboard (just the code, no "Code: " prefix). */
  codeValue: string;
  /** Toast accent colour. */
  color?: string;
  /** Toast text shown after a successful copy. */
  label?: string;
  /** Font stack. Defaults to the JakubSrc original's `'Poppins, Tahoma, Geneva, sans-serif'`. */
  font?: string;
  /** Text colour for the "Code: xxxxx" label — unset keeps `.newsletterParagraph`'s own colour (the JakubSrc default, dark). Pass the surrounding section's own text colour (e.g. white on a maroon offer field) so the label doesn't go invisible/mismatched, or the pill's own text colour when `filled`. */
  textColor?: string;
}

const wrapFilled = (
  inner: string,
  { filled, background = '#750000', width = 230, height = 48 }: FilledStyleProps
): string =>
  filled
    ? `
  <tr><td align="center">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;width:${width}px;"><tr>
      <td bgcolor="${background}" align="center" height="${height}" style="background-color:${background};border-radius:4px;height:${height}px;">${inner}</td>
    </tr></table>
  </td></tr>`
    : `
  <tr>
    <td style="text-align: center;" class="newsletterContainer">${inner}</td>
  </tr>`;

/**
 * "Code: xxxxx" + copy-icon. Click copies `codeValue` to the clipboard and shows a small
 * inline tooltip-style toast above the icon (2.5s auto-dismiss). Landing-page only — email
 * clients don't run `onclick`/clipboard JS; the newsletter rendering uses `renderFilledCodeButton`
 * (see `deal/offer.ts`) instead.
 */
const CopyCodeCTA = ({
  text,
  codeValue,
  color = '#750000',
  label = 'Code copied',
  font = 'Poppins, Tahoma, Geneva, sans-serif',
  textColor,
  filled,
  background,
  width,
  height,
}: CopyCodeCTAProps): string => {
  const inner = `<span style="display:inline-flex;align-items:center;justify-content:center;gap:6px;"><span class="newsletterParagraph"${textColor ? ` style="color: ${textColor};"` : ''}>${text}</span><span style="position:relative;display:inline-block;"><button onclick="(function(b){var i=b.querySelector('img');var t=b.parentElement.querySelector('.copy-toast');if(t.style.opacity==='1')return;navigator.clipboard.writeText('${codeValue}').then(function(){i.src='${ICON_OK}';t.style.visibility='visible';t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';setTimeout(function(){t.style.transition='opacity 0.15s ease,transform 0.15s ease';t.style.opacity='0';t.style.transform='translateX(-50%) translateY(6px)';setTimeout(function(){t.style.visibility='hidden';i.style.transition='opacity 0.2s ease';i.style.opacity='0';setTimeout(function(){i.src='${ICON_DEFAULT}';i.style.opacity='1';},200);},150);},2500);})})(this)" style="background:none;border:none;cursor:pointer;padding:0;vertical-align:middle;"><img src="${ICON_DEFAULT}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;"></button><span class="copy-toast" style="position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(6px);background:${color};color:#fff;padding:5px 10px;border-radius:5px;font-size:11px;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.3s ease,transform 0.3s ease;pointer-events:none;font-family:${font};font-weight:500;">${label}<span style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid ${color};display:block;"></span></span></span></span>`;

  return wrapFilled(inner, { filled, background, width, height });
};

export interface CopyCodeWebNotificationProps extends FilledStyleProps {
  text: string;
  codeValue: string;
  color?: string;
  label?: string;
  font?: string;
  textColor?: string;
}

/**
 * "Code: xxxxx" + copy-icon, alternate alert style: click copies to clipboard and slides in
 * a floating corner notification (top-right, 2.5s auto-dismiss) instead of an inline tooltip.
 * Same landing-page-only caveat as `CopyCodeCTA`.
 */
const CopyCodeWebNotification = ({
  text,
  codeValue,
  color = '#FFCCB7',
  label = 'Code copied',
  font = 'Poppins, Tahoma, Geneva, sans-serif',
  textColor,
  filled,
  background,
  width,
  height,
}: CopyCodeWebNotificationProps): string => {
  const inner = `<span style="display:inline-flex;align-items:center;justify-content:center;gap:6px;"><span class="newsletterParagraph"${textColor ? ` style="color: ${textColor};"` : ''}>${text}</span><button onclick="(function(b){var i=b.querySelector('img');if(document.querySelector('[data-copy-notif]'))return;navigator.clipboard.writeText('${codeValue}').then(function(){i.src='${ICON_OK}';var n=document.createElement('div');n.setAttribute('data-copy-notif','1');var top=window.innerWidth<=600?'80px':'20px';n.style.cssText='position:fixed;right:-300px;top:'+top+';'+'background:${color};color:#000;padding:12px 20px;border-radius:8px;font-size:13px;font-weight:500;font-family:${font};z-index:9999;transition:right 0.3s ease;box-shadow:0 4px 12px rgba(0,0,0,0.15);white-space:nowrap;display:flex;align-items:center;gap:6px;';var ic=document.createElement('img');ic.src='${ICON_OK}';ic.width=16;ic.height=16;ic.style.cssText='width:16px;height:16px;';n.appendChild(ic);n.appendChild(document.createTextNode('${label}'));document.body.appendChild(n);requestAnimationFrame(function(){requestAnimationFrame(function(){n.style.right='20px';});});setTimeout(function(){n.style.right='-300px';setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n);i.style.transition='opacity 0.2s ease';i.style.opacity='0';setTimeout(function(){i.src='${ICON_DEFAULT}';i.style.opacity='1';},200);},300);},2500);})})(this)" style="background:none;border:none;cursor:pointer;padding:0;vertical-align:middle;"><img src="${ICON_DEFAULT}" data-no-webp alt="Copy" width="16" height="16" style="width:16px;height:16px;vertical-align:middle;display:inline-block;"></button></span>`;

  return wrapFilled(inner, { filled, background, width, height });
};

export { CopyCodeCTA, CopyCodeWebNotification };
