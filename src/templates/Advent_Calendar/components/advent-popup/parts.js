export const DEFAULT_POPUP_TEXTS = {
  onlyToday: 'Only Today',
  seeConditions: 'See conditions',
  shopNow: 'Shop now',
  conditionsTitle: 'Conditions:',
  copied: 'Copied!',
  close: 'Close',
  copy: 'Copy',
};
 
// Escape a value used inside an HTML attribute
export const attr = (v = '') =>
  String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
 
const ICON_CLOSE =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" aria-hidden="true"><path d="M4 3 20 21M20 3 4 21"/></svg>';
const ICON_COPY =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
 
function linkOrDiv(link, cls, inner) {
  return link
    ? `<a class="${cls}" href="${attr(link)}" target="_blank" rel="noopener" data-adv-link>${inner}</a>`
    : `<div class="${cls}">${inner}</div>`;
}
 
// ---------- Text block: headline / pre / title / subtitle ----------
export function PopupText({ headline, pre, title, subtitle, link }) {
  const inner =
    (headline ? `<div class="adv-pop__headline">${headline}</div>` : '') +
    (pre ? `<div class="adv-pop__pre">${pre}</div>` : '') +
    (title ? `<div class="adv-pop__title">${title}</div>` : '') +
    (subtitle ? `<div class="adv-pop__subtitle">${subtitle}</div>` : '');
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
 
export function PopupCodes({ code, texts = DEFAULT_POPUP_TEXTS }) {
  const codes = [].concat(code || []).map(splitCode).filter(Boolean);
  if (!codes.length) return '';
  return (
    '<div class="adv-pop__codes">' +
    codes
      .map(
        (c) =>
          `<div class="adv-pop__code">` +
          `<span>${c.label}: <span class="adv-pop__code-value">${c.value}</span></span>` +
          `<button type="button" class="adv-pop__copy" data-code="${attr(c.value)}" data-copied="${attr(texts.copied)}" aria-label="${attr(texts.copy + ' ' + c.value)}">${ICON_COPY}</button>` +
          `<span class="adv-pop__copied" aria-live="polite"></span>` +
          `</div>`
      )
      .join('') +
    '</div>'
  );
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
 
// ---------- Shell: close button + image + text column ----------
// layout: 'percent' | 'deal' | 'upto' | 'special' (controls font sizes)
export function AdventPopupShell({ id, layout = 'deal', imageDesktop, imageMobile, alt = '', link, conditions, texts, body }) {
  const t = { ...DEFAULT_POPUP_TEXTS, ...texts };
  const image =
    `<img class="adv-pop__d" src="${attr(imageDesktop)}" alt="${attr(alt)}">` +
    `<img class="adv-pop__m" src="${attr(imageMobile || imageDesktop)}" alt="${attr(alt)}">`;
 
  return `
<template data-adv-popup="${attr(id)}" data-layout="${attr(layout)}">
  <button type="button" class="adv-pop__close" aria-label="${attr(t.close)}">${ICON_CLOSE}</button>
  ${linkOrDiv(link, 'adv-pop__img', image)}
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
    PopupCodes({ code: props.code, texts: t }) +
    PopupFooter({ texts: t, onlyToday, conditions: props.conditions, cta, link: props.link });
 
  return AdventPopupShell({ ...props, layout, texts: t, body });
}
 
// ---------- Box under the calendar that shows the conditions ----------
export function AdventConditionsBox({ id = 'advent-conditions' } = {}) {
  return `<div id="${attr(id)}" class="adv-cond" style="display:none; max-width:570px; margin:0 auto; padding:20px;"></div>`;
}