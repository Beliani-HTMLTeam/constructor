// ============================================================
// Shared building blocks for every advent popup template.
// Each popup is rendered as a <template data-adv-popup="ID">,
// the runtime (AdventPopupScript) clones it into the overlay.
// Text props accept HTML (e.g. "Up to<br />50% OFF").
// ============================================================
import { buildCopyIcon } from '../CopyCodeCTA.js'; // adjust the path to your CopyCodeCTA.js

export const DEFAULT_POPUP_TEXTS = {
  onlyToday: 'Only Today',
  seeConditions: 'See conditions',
  shopNow: 'Shop now',
  conditionsTitle: 'Conditions:',
  copied: 'Code copied',   // notification text after copying
  close: 'Close',
  copy: 'Copy',
};

// Escape a value used inside an HTML attribute
export const attr = (v = '') =>
  String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const ICON_CLOSE =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" aria-hidden="true"><path d="M4 3 20 21M20 3 4 21"/></svg>';

function linkOrDiv(link, cls, inner) {
  return link
    ? `<a class="${cls}" href="${attr(link)}" target="_blank" rel="noopener" data-adv-link>${inner}</a>`
    : `<div class="${cls}">${inner}</div>`;
}

// ---------- Desktop / mobile text ----------
// If a mobile version is given (and differs), both are rendered and CSS
// shows the right one per screen. mobile '' = hide that line on mobile.
function dm(cls, desktop, mobile) {
  if (mobile === undefined || mobile === desktop) {
    return desktop ? `<div class="${cls}">${desktop}</div>` : '';
  }
  return (
    (desktop ? `<div class="${cls} adv-pop__only-d">${desktop}</div>` : '') +
    (mobile ? `<div class="${cls} adv-pop__only-m">${mobile}</div>` : '')
  );
}

// ---------- Text block: headline / pre / title / subtitle ----------
// mobile = { headline, pre, title, subtitle } – optional mobile texts
export function PopupText({ headline, pre, title, subtitle, link, mobile = {} }) {
  const inner =
    dm('adv-pop__headline', headline, mobile.headline) +
    dm('adv-pop__pre', pre, mobile.pre) +
    dm('adv-pop__title', title, mobile.title) +
    dm('adv-pop__subtitle', subtitle, mobile.subtitle);
  return linkOrDiv(link, 'adv-pop__container', inner);
}

// ---------- Voucher code(s) with copy button ----------
function splitCode(raw) {
  raw = String(raw || '').trim();
  if (!raw) return null;
  let i = raw.indexOf(':');
  if (i === -1) i = raw.indexOf('：');
  if (i === -1) return { label: 'Code', value: raw };
  return { label: raw.slice(0, i).trim(), value: raw.slice(i + 1).trim() };
}

function codesBlock(code, texts, extraCls = '') {
  const codes = [].concat(code || []).map(splitCode).filter(Boolean);
  if (!codes.length) return '';
  return (
    `<div class="adv-pop__codes${extraCls}">` +
    codes
      .map(
        (c) =>
          `<div class="adv-pop__code">` +
          `<span>${c.label}: <span class="adv-pop__code-value">${c.value}</span></span>` +
          // shared copy icon: icon switches to "ok" + slide-in notification
          `<span class="adv-pop__copy-wrap">` +
          buildCopyIcon({
            codeValue: c.value,
            color: '#750000',
            toastBg: '#750000',
            toastText: '#ffffff',
            label: texts.copied,
            className: 'adv-pop__copy-icon',
          }) +
          `</span>` +
          `</div>`
      )
      .join('') +
    '</div>'
  );
}

// mobileCode: optional different code text on mobile ('' = hide on mobile)
export function PopupCodes({ code, mobileCode, texts = DEFAULT_POPUP_TEXTS }) {
  if (mobileCode === undefined || mobileCode === code) return codesBlock(code, texts);
  return codesBlock(code, texts, ' adv-pop__only-d') + codesBlock(mobileCode, texts, ' adv-pop__only-m');
}

// ---------- Footer: Only Today / See conditions / CTA ----------
export function PopupFooter({ texts = DEFAULT_POPUP_TEXTS, onlyToday = true, conditions, cta, link }) {
  return (
    '<div class="adv-pop__footer">' +
    (onlyToday && texts.onlyToday ? `<div class="adv-pop__today">${texts.onlyToday}</div>` : '') +
    (conditions ? `<button type="button" class="adv-pop__cond">${texts.seeConditions}</button>` : '') +
    (cta && link
      ? `<a class="adv-pop__cta" href="${attr(link)}" target="_blank" rel="noopener" data-adv-link>${cta}</a>`
      : '') +
    '</div>'
  );
}

// URL safe to use inside url('...') in a style attribute
const cssUrl = (u = '') =>
  String(u).replace(/'/g, '%27').replace(/"/g, '%22').replace(/\(/g, '%28').replace(/\)/g, '%29');

// ---------- Background image (covers the whole popup) ----------
// imageDesktop: 967 x 480 design (export ~1934 x 960)
// imageMobile : 257 x 460 design (export ~514 x 920), text area at the top
function PopupBackground({ imageDesktop, imageMobile, alt = '', link }) {
  const d = imageDesktop || '';
  const m = imageMobile || imageDesktop || '';
  const style = `--bg-d:url('${cssUrl(d)}'); --bg-m:url('${cssUrl(m)}');`;
  const a11y = alt ? ` role="img" aria-label="${attr(alt)}"` : ' aria-hidden="true"';
  const common = `class="adv-pop__bg" style="${attr(style)}" data-preload="${attr(d)} ${attr(m)}"${a11y}`;
  return link
    ? `<a ${common} href="${attr(link)}" target="_blank" rel="noopener" data-adv-link></a>`
    : `<div ${common}></div>`;
}

// ---------- Shell: close button + background image + text ----------
// layout  : 'percent' | 'deal' | 'upto' | 'special' (controls font sizes)
// textSide: 'right' (default, as in the design) | 'left' – desktop only
export function AdventPopupShell({ id, layout = 'deal', imageDesktop, imageMobile, alt = '', link, conditions, texts, textSide = 'right', body }) {
  const t = { ...DEFAULT_POPUP_TEXTS, ...texts };

  return `
<template data-adv-popup="${attr(id)}" data-layout="${attr(layout)}" data-text="${attr(textSide)}">
  <button type="button" class="adv-pop__close" aria-label="${attr(t.close)}">${ICON_CLOSE}</button>
  ${PopupBackground({ imageDesktop, imageMobile, alt, link })}
  <div class="adv-pop__deal">${body}</div>
  ${conditions ? `<div class="adv-pop__cond-src" hidden data-title="${attr(t.conditionsTitle)}">${conditions}</div>` : ''}
</template>`;
}

// ---------- Standard popup = text + codes + footer in a shell ----------
// Used by every type component; `defaults` holds per-type defaults.
export function StandardPopup(layout, props, defaults = {}) {
  const t = { ...DEFAULT_POPUP_TEXTS, ...props.texts };
  const onlyToday = props.onlyToday !== undefined ? props.onlyToday : defaults.onlyToday !== false;
  const cta = props.cta !== undefined ? props.cta : defaults.cta ? t[defaults.cta] : '';

  const body =
    PopupText(props) +
    PopupCodes({ code: props.code, mobileCode: (props.mobile || {}).code, texts: t }) +
    PopupFooter({ texts: t, onlyToday, conditions: props.conditions, cta, link: props.link });

  return AdventPopupShell({ ...props, layout, texts: t, body });
}

// ---------- Box under the calendar that shows the conditions ----------
// Can be placed anywhere on the page (the script finds it by id).
// maxWidth: match the width of the content around it (e.g. 650 for the LP table)
// (no padding here – the 20px spacing is on the text inside, see styles.js)
export function AdventConditionsBox({ id = 'advent-conditions', maxWidth = 570 } = {}) {
  return `<div id="${attr(id)}" class="adv-cond" style="display:none; max-width:${Number(maxWidth) || 570}px; margin:0 auto; background-color: #F7EAE9;"></div>`;
}