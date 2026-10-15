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
 
  var overlay, content, current = null, closeTimer = null;
 
  function getTpl(id) {
    return document.querySelector('template[data-adv-popup="' + String(id) + '"]');
  }
 
  function ensureOverlay() {
    if (overlay) return;
    overlay = document.getElementById('advent-popup');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'advent-popup';
      overlay.className = 'adv-pop';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.innerHTML = '<div class="adv-pop__content"></div>';
      document.body.appendChild(overlay);
    }
    content = overlay.querySelector('.adv-pop__content');
 
    // grey background → close
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
 
    // clicks inside the popup
    content.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('.adv-pop__close')) { close(); return; }
 
      var copyBtn = t.closest('.adv-pop__copy');
      if (copyBtn) {
        var feedback = copyBtn.nextElementSibling;
        copyText(copyBtn.getAttribute('data-code'), function () {
          if (feedback) {
            feedback.textContent = copyBtn.getAttribute('data-copied') || '';
            setTimeout(function () { feedback.textContent = ''; }, 1500);
          }
          track('Verify', 'Promo', 'Voucher');
        });
        return;
      }
 
      if (t.closest('.adv-pop__cond')) { showConditions(); return; }
 
      if (t.closest('[data-adv-link]')) track('Click', 'PopUp', 'Promo');
    });
 
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }
 
  function open(id) {
    var tpl = getTpl(id);
    if (!tpl) return false;
    ensureOverlay();
    clearTimeout(closeTimer);
    current = id;
    content.className = 'adv-pop__content adv-pop--' + (tpl.getAttribute('data-layout') || 'deal');
    content.innerHTML = '';
    content.appendChild(tpl.content.cloneNode(true));
    overlay.classList.remove('is-closing');
    overlay.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    return true;
  }
 
  function close() {
    if (!overlay || !overlay.classList.contains('is-open')) return;
    overlay.classList.add('is-closing');
    document.documentElement.style.overflow = '';
    closeTimer = setTimeout(function () {
      overlay.classList.remove('is-open', 'is-closing');
      content.innerHTML = '';
    }, 400);
  }
 
  function copyText(t, done) {
    function legacy() {
      var ta = document.createElement('textarea');
      ta.value = t;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(t).then(done, legacy);
    } else {
      legacy();
    }
  }
 
  function showConditions() {
    var src = content.querySelector('.adv-pop__cond-src');
    var box = document.getElementById(OPTS.conditionsBoxId);
    if (!src || !box) return;
    box.innerHTML =
      '<div class="adv-cond__title">' + (src.getAttribute('data-title') || '') + '</div>' +
      '<div class="adv-cond__text">' + src.innerHTML + '</div>';
    box.style.display = 'block';
    close();
    setTimeout(function () {
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 450);
  }
 
  // preload popup images so they appear instantly
  function preload() {
    var tpls = document.querySelectorAll('template[data-adv-popup]');
    Array.prototype.forEach.call(tpls, function (tpl) {
      Array.prototype.forEach.call(tpl.content.querySelectorAll('img'), function (im) {
        var pre = new Image();
        pre.src = im.getAttribute('src');
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
    close: close,
    has: function (id) { return !!getTpl(id); }
  };
})();
</script>`;
}