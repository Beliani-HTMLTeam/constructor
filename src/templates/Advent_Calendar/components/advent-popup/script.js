// ============================================================
// AdventPopupScript – browser runtime for the popup templates.
// Include once per page, after the <template data-adv-popup> tags.
//
// Exposes:
//   window.AdventPopup.open(id)  -> opens <template data-adv-popup="id">
//   window.AdventPopup.close()
//   window.AdventPopup.has(id)   -> true if that popup exists
//   window.AdventPopup.notice('past' | 'future') -> small message for a few seconds
//                                    (texts from <template data-adv-notice>, see AdventNotices)
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
// noticeMs: how long the small "past / future door" message stays (ms)
export function AdventPopupScript({ conditionsBoxId = 'advent-conditions', trackingCategory = 'AdventCalendar', noticeMs = 5000, closeLabel = 'Close' } = {}) {
  const opts = JSON.stringify({ conditionsBoxId, trackingCategory, noticeMs, closeLabel });

  return `
<script>
(function () {
  if (window.AdventPopup) return;
  var OPTS = ${opts};

  // eventOption = the day (door number) of the open popup, e.g. '18'
  // eventID     = category name of the popup / the voucher code (see trackId in parts.js)
  function track(action, label, value, id) {
    if (window.AdventNoTracking) return;   // translator mode (InteractiveHeroImage) – nothing is sent
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'custom_event',
      eventCategory: OPTS.trackingCategory,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
      eventOption: current === null ? '' : String(current),
      eventID: id !== undefined ? String(id) : currentTrackId
    });
  }
  var lastVerify = 0;
  // code = the copied voucher code -> eventID
  function trackVerify(code) {        // copy button + manual copy of the code, once per action
    if (Date.now() - lastVerify < 800) return;
    lastVerify = Date.now();
    track('Verify', 'Promo', 'Voucher', code || currentTrackId);
  }
  function codeOf(el) {
    var line = el && el.closest && el.closest('.adv-pop__code');
    var v = line && line.querySelector('.adv-pop__code-value');
    return v ? (v.textContent || '').trim() : '';
  }

  var overlay, content, live, current = null, currentTrackId = '', closeTimer = null, lastFocus = null;
  var lockX = 0, lockY = null;   // page position while the popup is open

  // Hide the page scrollbar while the popup is open. The scrollbar's width is added
  // as padding to <body>, so the page behind doesn't shift sideways.
  var savedOverflow = null, savedPad = '';
  function hideScrollbar() {
    if (savedOverflow !== null) return;
    var html = document.documentElement, body = document.body;
    var sbw = window.innerWidth - html.clientWidth;          // 0 on phones (no visible scrollbar)
    savedOverflow = html.style.overflow;
    savedPad = body.style.paddingRight;
    html.style.overflow = 'hidden';
    if (sbw > 0) body.style.paddingRight = ((parseFloat(window.getComputedStyle(body).paddingRight) || 0) + sbw) + 'px';
  }
  function showScrollbar() {
    if (savedOverflow === null) return;
    document.documentElement.style.overflow = savedOverflow;
    document.body.style.paddingRight = savedPad;
    savedOverflow = null;
  }

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
    // anything else that still moves the page (dragging the scrollbar, scripts,
    // browser gestures) -> put it straight back where it was when the popup opened
    window.addEventListener('scroll', function () {
      if (!isOpen() || lockY === null) return;
      if (Math.abs((window.pageYOffset || 0) - lockY) > 1 || Math.abs((window.pageXOffset || 0) - lockX) > 1) {
        try { window.scrollTo({ left: lockX, top: lockY, behavior: 'instant' }); }
        catch (err) { window.scrollTo(lockX, lockY); }
      }
    }, { passive: true });

    // copy icon (buildCopyIcon) handles copying + notification itself;
    // capture phase so we still track it before its onclick stops the event
    content.addEventListener('click', function (e) {
      var wrap = e.target.closest('.adv-pop__copy-wrap');
      if (wrap && e.target.closest('button')) {
        trackVerify(codeOf(wrap));
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

      if (t.closest('[data-adv-link]')) track('Click', 'PopUp', 'Promo');   // "Shop now"
    });
    // "Shop now" opened with the middle mouse button
    content.addEventListener('auxclick', function (e) {
      if (e.button === 1 && e.target.closest('[data-adv-link]')) track('Click', 'PopUp', 'Promo');
    });
    // code highlighted and copied by hand (Ctrl+C / long press -> Copy) counts as Verify too
    document.addEventListener('copy', function () {
      if (!isOpen()) return;
      var sel = window.getSelection && window.getSelection();
      var node = sel && sel.anchorNode;
      var el = node && (node.nodeType === 1 ? node : node.parentElement);
      if (el && el.closest && el.closest('.adv-pop__code') && content.contains(el)) trackVerify(codeOf(el));
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

  // ===== Long translations: shrink a line only when one of its words doesn't fit =====
  // e.g. HU "kedvezménnyel" at 90px is wider than the text column. CSS can't measure
  // words, so after opening we check every text line: if its longest word is wider than
  // the column, that line (only that one) gets a smaller font until it fits.
  // Lines that fit keep the design size – English and other short texts never change.
  // The deal title also may not wrap into more lines than the sheet has (see fitLines),
  // and on desktop the whole text block must fit the popup's height (see fitHeight).
  var FIT_SEL = '.adv-pop__headline, .adv-pop__pre, .adv-pop__title, .adv-pop__subtitle, .adv-pop__code, ' +
                '.adv-pop__tier-text, .adv-pop__today, .adv-pop__cta, .adv-pop__cond';
  function fitText() {
    if (!content || !isOpen()) return;
    var deal = content.querySelector('.adv-pop__deal');
    if (!deal) return;
    var els = deal.querySelectorAll(FIT_SEL);
    Array.prototype.forEach.call(els, function (el) { el.style.fontSize = ''; el.style.maxWidth = ''; });   // back to the design
    Array.prototype.forEach.call(deal.querySelectorAll('.adv-pop__tline, .adv-pop__num'), function (ln) { ln.style.fontSize = ''; });
    var cs = window.getComputedStyle(deal);
    var avail = deal.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    if (avail <= 0) return;
    // the X in the top right corner: lines at the height of the X must stay clear of it.
    // The text is centered, so such a line gets a narrower width (the X's overlap taken off
    // on both sides) – it wraps earlier; only a single word that is still too long shrinks.
    // (offset* values: not affected by the opening animation)
    var x = content.querySelector('.adv-pop__close');
    var colRight = deal.offsetLeft + deal.clientWidth - (parseFloat(cs.paddingRight) || 0);
    var xOverlap = x ? Math.max(0, colRight - x.offsetLeft + 4) : 0;   // + 4px air
    var xBottom = x ? x.offsetTop + x.offsetHeight : 0;
    Array.prototype.forEach.call(els, function (el) {
      if (el.offsetParent === null) return;                 // hidden (desktop-only / mobile-only text)
      var base = parseFloat(window.getComputedStyle(el).fontSize) || 0;   // design size
      if (!base) return;
      el._advBase = base;
      var room = avail;
      if (xOverlap && deal.offsetTop + el.offsetTop < xBottom) {   // next to the X
        room = avail - 2 * xOverlap;
        el.style.maxWidth = room + 'px';
      }
      // title with lines from the sheet: every line is fitted on its own (see fitTitleLines)
      var tlines = el.classList.contains('adv-pop__title') ? el.querySelectorAll('.adv-pop__tline') : [];
      if (tlines.length) { fitTitleLines(el, tlines, room); return; }
      for (var i = 0; i < 5; i++) {
        var w = el.scrollWidth;                             // width of its longest word / line
        if (w <= room + 1) break;
        var size = parseFloat(window.getComputedStyle(el).fontSize) || 0;
        if (!size) break;
        el.style.fontSize = (size * (room / w) * 0.98) + 'px';
      }
      // the deal title keeps its lines: the lines of the sheet ("akár<br />50% kedvezménnyel" = 2)
      // or max. 2 lines without breaks. If it wraps into more, it gets smaller until it fits –
      // but never below 60% of the design size.
      if (el.classList.contains('adv-pop__title')) fitLines(el, base);
    });
    // all texts together must fit the height:
    //  desktop – the popup (e.g. FI "Ylimääräinen / 10% alennus / vähintään 500 € ..." is taller than 480px);
    //  mobile  – the top 62% of the popup (the gift box below must stay visible; the English
    //            designs end at ~59%), or the text area itself when it is taller (4 for 3)
    var desktop = window.matchMedia && window.matchMedia('(min-width: 601px)').matches;
    fitHeight(deal, els, desktop ? 0 : Math.max(deal.clientHeight, content.clientHeight * 0.62));
  }
  // height of the visible text block (first line top -> last line bottom)
  function blockHeight(deal) {
    var kids = Array.prototype.filter.call(deal.children, function (k) { return k.offsetParent !== null; });
    if (!kids.length) return 0;
    var first = kids[0], last = kids[kids.length - 1];
    return last.offsetTop + last.offsetHeight - first.offsetTop;
  }
  // too tall -> shrink step by step until the block fits:
  //   1. the title: with lines from the sheet only its WORDS ("Jusqu'à", "de réduction"), the deal
  //      number ("50 %") keeps its size; without lines ("10% alennus") the whole title –
  //      down to 60% of the title size;
  //   2. the other lines (category, Only Today, button, ...) – down to 75% of their design size;
  //   3. a title with lines as a whole (number included) – down to 60% of its design size.
  // maxBottom: mobile – the text may end no lower than this (px from the top of the text area)
  function fitHeight(deal, els, maxBottom) {
    var cs = window.getComputedStyle(deal);
    // desktop: 20px air above and below (a little less than the column padding, so the
    // English designs – e.g. the 4 for 3 pyramid – keep their sizes)
    var avail = maxBottom
      ? maxBottom - (parseFloat(cs.paddingTop) || 0)
      : deal.clientHeight - 40;
    if (avail <= 0) return;
    var px = function (el) { return parseFloat(window.getComputedStyle(el).fontSize) || 0; };
    var visible = Array.prototype.filter.call(els, function (el) { return el.offsetParent !== null && el._advBase; });
    var titles = visible.filter(function (el) { return el.classList.contains('adv-pop__title'); });
    var others = visible.filter(function (el) { return !el.classList.contains('adv-pop__title'); });
    var tooTall = function () { return blockHeight(deal) > avail + 1; };

    // 1. title words / titles without lines
    titles.forEach(function (t) {
      if (!t.querySelector('.adv-pop__tline')) {
        for (var n = 0; n < 20 && tooTall() && px(t) > t._advBase * 0.6; n++) {
          t.style.fontSize = Math.max(t._advBase * 0.6, px(t) * 0.95) + 'px';
        }
        return;
      }
      var words = Array.prototype.filter.call(t.querySelectorAll('.adv-pop__tline'), function (ln) {
        return !ln.classList.contains('adv-pop__tline--num');
      });
      if (!words.length) return;
      var tpx = px(t), size = Math.min.apply(null, words.map(px));
      for (var i = 0; i < 20 && tooTall() && size > tpx * 0.6; i++) {
        size = Math.max(tpx * 0.6, size * 0.95);
        words.forEach(function (ln) { setLineSize(ln, size, tpx); });
      }
    });
    // 2. the other lines
    for (var j = 0; j < 20 && tooTall(); j++) {
      var group = others.filter(function (el) { return px(el) > el._advBase * 0.75; });
      if (!group.length) break;
      group.forEach(function (el) { el.style.fontSize = Math.max(el._advBase * 0.75, px(el) * 0.95) + 'px'; });
    }
    // 3. the whole title
    for (var k = 0; k < 20 && tooTall(); k++) {
      var tgroup = titles.filter(function (el) { return px(el) > el._advBase * 0.6; });
      if (!tgroup.length) break;
      tgroup.forEach(function (el) { el.style.fontSize = Math.max(el._advBase * 0.6, px(el) * 0.95) + 'px'; });
    }
  }
  // one title line at text size px; its deal number ("50%", parts.js markNumbers) stays at the title size.
  // Sizes are set in em of the title, so fitHeight can still scale the whole title.
  function setLineSize(ln, px, titlePx) {
    ln.style.fontSize = (px / titlePx) + 'em';
    Array.prototype.forEach.call(ln.querySelectorAll('.adv-pop__num'), function (n) {
      n.style.fontSize = (titlePx / px) + 'em';             // back to the title size
    });
  }
  // rows a line really takes (a bigger number on the same row counts as the same row)
  function textRows(ln) {
    var range = document.createRange();
    range.selectNodeContents(ln);
    var rects = Array.prototype.slice.call(range.getClientRects())
      .filter(function (r) { return r.width > 0 && r.height > 0; })
      .sort(function (a, b) { return a.top - b.top; });
    var rows = 0, bottom = -Infinity;
    rects.forEach(function (r) {
      if ((r.top + r.bottom) / 2 > bottom) { rows++; bottom = r.bottom; }
      else bottom = Math.max(bottom, r.bottom);
    });
    return rows || 1;
  }
  // text size for these lines: the largest size at which each of them fits on one line
  // (numbers stay at the title size while measuring)
  function textSizeFor(lines, titlePx, room) {
    var min = titlePx * 0.6, text = titlePx;
    Array.prototype.forEach.call(lines, function (ln) {
      var px = titlePx;
      setLineSize(ln, px, titlePx);
      for (var i = 0; i < 5; i++) {                       // a word wider than the column
        var w = ln.scrollWidth;
        if (w <= room + 1) break;
        px = Math.max(min, px * (room / w) * 0.98);
        setLineSize(ln, px, titlePx);
        if (px <= min) break;
      }
      for (var j = 0; j < 20 && textRows(ln) > 1 && px > min; j++) {   // wraps -> smaller
        px = Math.max(min, px * 0.95);
        setLineSize(ln, px, titlePx);
      }
      text = Math.min(text, px);
    });
    return text;
  }
  // "50% kedvezménnyel" -> "50%" on its own line + "kedvezménnyel" (the line is split around the number)
  function splitNumbers(el) {
    var split = false;
    Array.prototype.forEach.call(el.querySelectorAll('.adv-pop__tline'), function (ln) {
      var num = ln.querySelector('.adv-pop__num');
      if (!num || ln.classList.contains('adv-pop__tline--num')) return;
      var parts = ln.innerHTML.split(num.outerHTML);
      if (parts.length !== 2) return;
      var before = parts[0].trim(), after = parts[1].trim();
      if (!before && !after) { ln.classList.add('adv-pop__tline--num'); return; }   // number alone already
      var html = (before ? '<span class="adv-pop__tline">' + before + '</span>' : '') +
                 '<span class="adv-pop__tline adv-pop__tline--num">' + num.outerHTML + '</span>' +
                 (after ? '<span class="adv-pop__tline">' + after + '</span>' : '');
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      while (tmp.firstChild) ln.parentNode.insertBefore(tmp.firstChild, ln);
      ln.parentNode.removeChild(ln);
      split = true;
    });
    return split;
  }
  // Title with lines from the sheet:
  //  - the words get one common size (largest at which every line fits on one line, min 60%);
  //  - the deal number ("50%") keeps the full title size;
  //  - if the words had to get smaller, the number goes on its OWN line and gets bigger
  //    (desktop: up to 120% of the title size, as wide as the column allows; mobile: title size):
  //      HU "akár / 50% kedvezménnyel" -> "akár / 50% / kedvezménnyel"
  function fitTitleLines(el, lines, room) {
    var titlePx = parseFloat(window.getComputedStyle(el).fontSize) || 0;
    if (!titlePx) return;
    var text = textSizeFor(lines, titlePx, room);
    if (text >= titlePx - 0.5 || !el.querySelector('.adv-pop__num')) {
      Array.prototype.forEach.call(lines, function (ln) { setLineSize(ln, text, titlePx); });
      return;
    }
    splitNumbers(el);
    Array.prototype.forEach.call(el.querySelectorAll('.adv-pop__tline'), function (ln) {
      if (ln.querySelector('.adv-pop__num') && !ln.classList.contains('adv-pop__tline--num')) return;
      if (ln.querySelector('.adv-pop__num')) ln.classList.add('adv-pop__tline--num');
    });
    var all = el.querySelectorAll('.adv-pop__tline');
    var words = Array.prototype.filter.call(all, function (ln) { return !ln.classList.contains('adv-pop__tline--num'); });
    var nums = Array.prototype.filter.call(all, function (ln) { return ln.classList.contains('adv-pop__tline--num'); });
    text = words.length ? textSizeFor(words, titlePx, room) : titlePx;
    words.forEach(function (ln) { setLineSize(ln, text, titlePx); });
    // desktop: 120% of the title size; mobile: the title size (more height would cover the picture)
    var numScale = window.matchMedia && window.matchMedia('(min-width: 601px)').matches ? 1.2 : 1;
    nums.forEach(function (ln) {
      var px = titlePx * numScale;
      ln.style.fontSize = (px / titlePx) + 'em';
      Array.prototype.forEach.call(ln.querySelectorAll('.adv-pop__num'), function (n) { n.style.fontSize = ''; });
      for (var i = 0; i < 5; i++) {                       // never wider than the column
        var w = ln.scrollWidth;
        if (w <= room + 1) break;
        px = px * (room / w) * 0.98;
        ln.style.fontSize = (px / titlePx) + 'em';
      }
    });
  }
  function lineCount(el) {
    var lh = parseFloat(window.getComputedStyle(el).lineHeight) || 0;
    return lh ? Math.round(el.offsetHeight / lh) : 1;   // offsetHeight: not affected by the opening animation
  }
  function fitLines(el, base) {
    var breaks = (el.innerHTML.match(/<br/gi) || []).length;
    // with line breaks from the sheet: exactly those lines ("akár" + "50% kedvezménnyel" = 2);
    // without: at most 2 lines, like the design ("Free / candle holder") – a longer title
    // ("Ajándék / díszpárna- / szett") gets smaller until it fits on 2 lines
    // 4 for 3 popup (with the pyramid lines): the title on ONE line ("3-at fizet, 4-et vihet")
    var oneLine = !breaks && el.closest('.adv-pop__deal') && el.closest('.adv-pop__deal').querySelector('.adv-pop__tiers');
    var allowed = breaks ? breaks + 1 : (oneLine ? 1 : 2);
    var min = base * 0.6;
    for (var i = 0; i < 20 && lineCount(el) > allowed; i++) {
      var size = parseFloat(window.getComputedStyle(el).fontSize) || 0;
      if (!size || size <= min) break;
      el.style.fontSize = Math.max(min, size * 0.95) + 'px';
    }
  }
  // fit again when the web font has loaded or the window size changes
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitText);
  window.addEventListener('resize', function () { if (isOpen()) fitText(); });

  function open(id) {
    var tpl = getTpl(id);
    if (!tpl) return false;
    ensureOverlay();
    clearTimeout(closeTimer);
    current = id;
    currentTrackId = tpl.getAttribute('data-track-id') || '';
    if (!isOpen()) lastFocus = document.activeElement;
    content.className = 'adv-pop__content adv-pop--' + (tpl.getAttribute('data-layout') || 'deal') +
      (tpl.getAttribute('data-text') === 'left' ? ' adv-pop--text-left' : '');
    // popup id on the box -> per-popup CSS, e.g. .adv-pop__content[data-popup="1"] { ... }
    content.setAttribute('data-popup', String(id));
    content.innerHTML = '';
    content.appendChild(tpl.content.cloneNode(true));
    if (!isOpen()) { lockX = window.pageXOffset || 0; lockY = window.pageYOffset || 0; hideScrollbar(); }   // freeze the page here
    overlay.classList.remove('is-closing');
    overlay.classList.add('is-open');
    fitText();                     // long translations: shrink only lines that don't fit

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
    lockY = null;                  // page can scroll again
    showScrollbar();
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

  // ===== Small notice (past / future door) =====
  var note, noteBody, noteTimer, noteCloseTimer;
  var X_ICON = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M1 1 15 15M15 1 1 15"/></svg>';   // thin X (design)

  function noteOpen() { return !!note && note.classList.contains('is-open') && !note.classList.contains('is-closing'); }

  function ensureNote() {
    if (note) return;
    note = document.createElement('div');
    note.className = 'adv-note';
    note.innerHTML =
      '<div class="adv-note__box" role="status" aria-live="polite">' +
        '<div class="adv-note__body"></div>' +
        '<button type="button" class="adv-note__close">' + X_ICON + '</button>' +
      '</div>';
    note.querySelector('.adv-note__close').setAttribute('aria-label', OPTS.closeLabel);
    noteBody = note.querySelector('.adv-note__body');
    document.body.appendChild(note);
    note.addEventListener('click', function (e) {
      if (e.target === note || e.target.closest('.adv-note__close')) hideNote();   // outside / X
    });
    note.addEventListener('wheel', function (e) { if (noteOpen()) e.preventDefault(); }, { passive: false });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && noteOpen()) hideNote();
    });
  }

  function showNote(kind) {
    var tpl = document.querySelector('template[data-adv-notice="' + kind + '"]');
    if (!tpl) return false;
    ensureNote();
    clearTimeout(noteTimer); clearTimeout(noteCloseTimer);
    noteBody.innerHTML = '';
    noteBody.appendChild(tpl.content.cloneNode(true));
    note.classList.remove('is-open', 'is-closing');
    void note.offsetWidth;                       // restart the animation on a quick 2nd click
    note.classList.add('is-open');
    noteTimer = setTimeout(hideNote, OPTS.noticeMs);   // disappears by itself
    return true;
  }

  function hideNote() {
    if (!note || !note.classList.contains('is-open')) return;
    clearTimeout(noteTimer);
    note.classList.add('is-closing');
    noteCloseTimer = setTimeout(function () { note.classList.remove('is-open', 'is-closing'); }, 300);
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
    notice: showNote,
    has: function (id) { return !!getTpl(id); }
  };
})();
</script>`;
}