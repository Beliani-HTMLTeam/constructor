// ============================================================
// AdventPopupScript – browser runtime for the popup templates.
// Include once per page, after the <template data-adv-popup> tags.
//
// Exposes:
//   window.AdventPopup.open(id)  -> opens <template data-adv-popup="id">
//   window.AdventPopup.close()
//   window.AdventPopup.has(id)   -> true if that popup exists
//
// Handles: grey overlay, click outside / X / Esc to close, copy code,
// "See conditions" (fills the AdventConditionsBox), dataLayer events.
//
// Accessibility:
//   - the popup is a dialog named after its deal text ("Christmas Decorations Up to 50% OFF")
//   - focus moves into the popup (close button) and Tab stays inside it
//   - on close, focus goes back to where it was (the door / the button);
//     after "See conditions" it goes to the conditions box
//   - the page behind does not scroll while the popup is open
//     (wheel, touch swipe and scroll keys) – the scrollbar stays in place
//   - "Code copied" is announced to screen readers
// ============================================================
export function AdventPopupScript({ conditionsBoxId = 'advent-conditions', trackingCategory = 'AdventCalendar' } = {}) {
  const opts = JSON.stringify({ conditionsBoxId, trackingCategory });
 
  return `
<script>
(function () {
  if (window.AdventPopup) return;
  var OPTS = ${opts};
 
  function track(action, label, value) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'custom_event',
      eventCategory: OPTS.trackingCategory,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
      eventOption: '',
      eventID: ''
    });
  }
 
  var overlay, content, live, current = null, closeTimer = null, lastFocus = null;
 
  function getTpl(id) {
    return document.querySelector('template[data-adv-popup="' + String(id) + '"]');
  }
 
  function isOpen() {
    return !!overlay && overlay.classList.contains('is-open') && !overlay.classList.contains('is-closing');
  }
 
  // focusable elements inside the popup (only the visible desktop / mobile ones)
  function focusables() {
    var list = content.querySelectorAll('a[href], button, [tabindex]');
    return Array.prototype.filter.call(list, function (el) {
      return el.getAttribute('tabindex') !== '-1' && !el.disabled && el.offsetParent !== null;
    });
  }
 
  function stop(e) { if (isOpen()) e.preventDefault(); }
 
  function ensureOverlay() {
    if (overlay) return;
    overlay = document.getElementById('advent-popup');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'advent-popup';
      overlay.className = 'adv-pop';
      overlay.innerHTML = '<div class="adv-pop__content"></div>';
      document.body.appendChild(overlay);
    }
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    content = overlay.querySelector('.adv-pop__content');
 
    // screen-reader announcements ("Code copied")
    live = document.createElement('div');
    live.className = 'adv-pop__sr';
    live.setAttribute('aria-live', 'polite');
    document.body.appendChild(live);
 
    // grey background → close
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
 
    // the page behind must not scroll while the popup is open (scrollbar stays visible)
    overlay.addEventListener('wheel', stop, { passive: false });
    overlay.addEventListener('touchmove', stop, { passive: false });
 
    // copy icon (buildCopyIcon) handles copying + notification itself;
    // capture phase so we still track it before its onclick stops the event
    content.addEventListener('click', function (e) {
      var wrap = e.target.closest('.adv-pop__copy-wrap');
      if (wrap && e.target.closest('button')) {
        track('Verify', 'Promo', 'Voucher');
        var msg = wrap.getAttribute('data-copied') || '';
        live.textContent = '';
        setTimeout(function () { live.textContent = msg; }, 100);
      }
    }, true);
 
    // clicks inside the popup
    content.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('.adv-pop__close')) { close(); return; }
 
      if (t.closest('.adv-pop__cond')) { showConditions(); return; }
 
      if (t.closest('[data-adv-link]')) track('Click', 'PopUp', 'Promo');
    });
 
    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;
 
      if (e.key === 'Escape') { close(); return; }
 
      // keep Tab inside the popup
      if (e.key === 'Tab') {
        var f = focusables();
        if (!f.length) { e.preventDefault(); return; }
        var first = f[0], last = f[f.length - 1];
        var inside = content.contains(document.activeElement);
        if (e.shiftKey && (document.activeElement === first || !inside)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (document.activeElement === last || !inside)) { e.preventDefault(); first.focus(); }
        return;
      }
 
      // no page scrolling with the keyboard while the popup is open
      var scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'];
      var onControl = e.target.closest && e.target.closest('a, button');
      if (scrollKeys.indexOf(e.key) !== -1 || (e.key === ' ' && !onControl)) e.preventDefault();
    });
  }
 
  function open(id) {
    var tpl = getTpl(id);
    if (!tpl) return false;
    ensureOverlay();
    clearTimeout(closeTimer);
    current = id;
    if (!isOpen()) lastFocus = document.activeElement;
    content.className = 'adv-pop__content adv-pop--' + (tpl.getAttribute('data-layout') || 'deal') +
      (tpl.getAttribute('data-text') === 'left' ? ' adv-pop--text-left' : '');
    // popup id on the box -> per-popup CSS, e.g. .adv-pop__content[data-popup="1"] { ... }
    content.setAttribute('data-popup', String(id));
    content.innerHTML = '';
    content.appendChild(tpl.content.cloneNode(true));
    overlay.classList.remove('is-closing');
    overlay.classList.add('is-open');
 
    // dialog name = the visible deal text, e.g. "Christmas Decorations Up to 50% OFF"
    var head = Array.prototype.filter.call(content.querySelectorAll('.adv-pop__container'), function (el) {
      return el.offsetParent !== null;
    })[0];
    var name = head ? (head.innerText || head.textContent || '').split(String.fromCharCode(10)).join(' ').trim() : '';
    if (name) overlay.setAttribute('aria-label', name); else overlay.removeAttribute('aria-label');
 
    // move focus into the popup
    var btn = content.querySelector('.adv-pop__close');
    if (btn) { try { btn.focus({ preventScroll: true }); } catch (err) { btn.focus(); } }
    return true;
  }
 
  // focusTo: element that gets the focus after closing (default: where it was before)
  function close(focusTo) {
    if (!overlay || !overlay.classList.contains('is-open')) return;
    overlay.classList.add('is-closing');
    var target = focusTo && focusTo.nodeType === 1 ? focusTo : lastFocus;
    lastFocus = null;
    closeTimer = setTimeout(function () {
      overlay.classList.remove('is-open', 'is-closing');
      content.innerHTML = '';
      if (target && document.contains(target) && typeof target.focus === 'function') {
        try { target.focus({ preventScroll: true }); } catch (err) { target.focus(); }
      }
    }, 400);
  }
 
  function showConditions() {
    var src = content.querySelector('.adv-pop__cond-src');
    var box = document.getElementById(OPTS.conditionsBoxId);
    if (!src || !box) return;
    box.innerHTML =
      '<div class="adv-cond__title">' + (src.getAttribute('data-title') || '') + '</div>' +
      '<div class="adv-cond__text">' + src.innerHTML + '</div>';
    box.style.display = 'block';
    box.setAttribute('tabindex', '-1');     // so focus (and the screen reader) can go there
    close(box);
    setTimeout(function () {
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 450);
  }
 
  // preload popup images so they appear instantly
  function preload() {
    var tpls = document.querySelectorAll('template[data-adv-popup]');
    Array.prototype.forEach.call(tpls, function (tpl) {
      // background images (data-preload="desktop mobile") + any <img>
      Array.prototype.forEach.call(tpl.content.querySelectorAll('[data-preload], img'), function (el) {
        var srcs = (el.getAttribute('data-preload') || el.getAttribute('src') || '').split(' ');
        srcs.forEach(function (src) {
          if (src) { var pre = new Image(); pre.src = src; }
        });
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preload);
  } else {
    preload();
  }
 
  window.AdventPopup = {
    open: open,
    close: function () { close(); },
    has: function (id) { return !!getTpl(id); }
  };
})();
</script>`;
}