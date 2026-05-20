(function () {
  var RESTORE_KEY = 'constructor-restore';

  // Custom shop order (s key toggles between this and default)
  var SHOP_SELLER_ORDER = [
    'Beliani.uk', 'Beliani.pl', 'Beliani.de', 'Beliani.at', 'Beliani.ch',
    'Beliani.nl', 'Beliani.fr', 'Beliani.sp', 'Beliani.pt', 'Beliani.it',
    'Beliani.dk', 'Beliani.no', 'Beliani.fi', 'Beliani.se', 'Beliani.cz',
    'Beliani.sk', 'Beliani.hu', 'Beliani.be', 'Beliani.ro',
  ];
  var shopSorted = false;

  function isEditing() {
    var tag = document.activeElement?.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable;
  }

  function dispatchChange(el) {
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // --- Restore ---

  function applyState(state) {
    var campaign = document.getElementById('campaigns');
    if (!campaign) return;

    campaign.value = state.campaign;
    dispatchChange(campaign); // synchronously populates templates select

    var template = document.getElementById('templates');
    if (template && state.template) {
      template.value = state.template;
      dispatchChange(template); // sets template in state; render() aborts early (no country yet)
    }

    var shop = document.getElementById('shops');
    if (shop && state.shop) {
      shop.value = state.shop;
      dispatchChange(shop); // synchronously populates language select
    }

    var language = document.getElementById('languages');
    if (language && state.language) {
      language.value = state.language;
      dispatchChange(language); // sets country and triggers the actual render
    }
  }

  function restoreState() {
    var raw = sessionStorage.getItem(RESTORE_KEY);
    if (!raw) return;
    sessionStorage.removeItem(RESTORE_KEY);

    var state;
    try { state = JSON.parse(raw); } catch (e) { return; }

    if (!state.campaign) return;

    var campaign = document.getElementById('campaigns');
    if (!campaign) return;

    var campaignsReady = campaign.options.length > 1;
    var translationsReady = !!window.__appTranslationsReady;

    function tryApply() {
      if (campaignsReady && translationsReady) applyState(state);
    }

    if (!campaignsReady) {
      // initializeApp() is async — campaigns may not be appended yet at DOMContentLoaded
      var observer = new MutationObserver(function () {
        if (campaign.options.length > 1) {
          observer.disconnect();
          campaignsReady = true;
          tryApply();
        }
      });
      observer.observe(campaign, { childList: true });
    }

    if (!translationsReady) {
      // circular dependency breaks top-level await propagation, so translations
      // may still be loading when campaigns are appended
      document.addEventListener('app:translations-ready', function onReady() {
        document.removeEventListener('app:translations-ready', onReady);
        translationsReady = true;
        tryApply();
      });
    }

    tryApply();
  }

  function applyShopSort(shopsEl) {
    var shopOpts = Array.from(shopsEl.options).filter(function (o) { return o.value !== 'default'; });

    if (!shopSorted) {
      shopOpts.forEach(function (o, i) { o.dataset.origIdx = String(i); });
      shopOpts.sort(function (a, b) {
        var ai = SHOP_SELLER_ORDER.indexOf(a.text);
        var bi = SHOP_SELLER_ORDER.indexOf(b.text);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      });
    } else {
      shopOpts.sort(function (a, b) {
        return Number(a.dataset.origIdx) - Number(b.dataset.origIdx);
      });
    }

    // Move elements in sorted order (appendChild on existing node = move, no clone needed)
    shopOpts.forEach(function (o) { shopsEl.appendChild(o); });
    shopSorted = !shopSorted;
  }

  function showSortNotification(sorted) {
    var id = 'shop-sort-notif';
    var existing = document.getElementById(id);
    if (existing) {
      clearTimeout(existing._t);
      existing.remove();
    }

    var el = document.createElement('div');
    el.id = id;
    el.textContent = sorted ? 'Shops: custom order' : 'Shops: default order';
    el.style.cssText = [
      'position:fixed',
      'bottom:20px',
      'right:20px',
      'background:rgba(30,30,30,0.92)',
      'color:#fff',
      'padding:10px 16px',
      'border-radius:8px',
      'font-size:13px',
      'font-family:Poppins,sans-serif',
      'z-index:99999',
      'box-shadow:0 4px 14px rgba(0,0,0,0.35)',
      'opacity:1',
      'transition:opacity 0.3s ease',
      'pointer-events:none',
    ].join(';');

    document.body.appendChild(el);

    el._t = setTimeout(function () {
      el.style.opacity = '0';
      setTimeout(function () { el.remove(); }, 320);
    }, 2200);
  }

  document.addEventListener('DOMContentLoaded', restoreState);

  // --- Save and reload ---

  function saveAndReload() {
    var state = {
      campaign: document.getElementById('campaigns')?.value,
      template: document.getElementById('templates')?.value,
      shop: document.getElementById('shops')?.value,
      language: document.getElementById('languages')?.value,
    };
    sessionStorage.setItem(RESTORE_KEY, JSON.stringify(state));
    location.reload();
  }

  // --- Keyboard shortcuts ---

  document.addEventListener('keydown', function (e) {
    if (isEditing()) return;

    if (e.key === 'r') {
      e.preventDefault();
      saveAndReload();
      return;
    }

    if (e.key === 't') {
      var selectTemplates = document.getElementById('templates');
      if (!selectTemplates || selectTemplates.options.length <= 1) return;
      if (selectTemplates.parentElement?.style.display === 'none') return;
      e.preventDefault();
      var tTotal = selectTemplates.options.length;
      var tCurrent = selectTemplates.selectedIndex;
      var tNext = (tCurrent < tTotal - 1) ? tCurrent + 1 : 1;
      selectTemplates.selectedIndex = tNext;
      selectTemplates.dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }

    if (e.key === 'y') {
      var shopsEl = document.getElementById('shops');
      if (!shopsEl || shopsEl.options.length <= 1) return;
      if (shopsEl.parentElement?.style.display === 'none') return;
      e.preventDefault();
      shopsEl.blur();
      applyShopSort(shopsEl);
      showSortNotification(shopSorted);
      requestAnimationFrame(function () {
        shopsEl.focus();
        if (typeof shopsEl.showPicker === 'function') {
          try { shopsEl.showPicker(); } catch (_) { shopsEl.click(); }
        } else {
          shopsEl.click();
        }
      });
      return;
    }

    if (e.key === 'f' && !e.ctrlKey && !e.metaKey) {
      if (!window.__openEditCurrentCampaign) return;
      e.preventDefault();
      window.__openEditCurrentCampaign();
      return;
    }

    if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
      var copyBtn = document.querySelector('.copyTemplate');
      if (!copyBtn || copyBtn.style.display === 'none') return;
      e.preventDefault();
      copyBtn.click();
      return;
    }

    if (e.key === 'd' || e.key === 'a') {
      var selectLang = document.getElementById('languages');
      if (!selectLang || selectLang.options.length <= 1) return;
      if (selectLang.parentElement?.style.display === 'none') return;
      e.preventDefault();
      var langTotal = selectLang.options.length;
      var langCurrent = selectLang.selectedIndex;
      var langIsFirst = langCurrent <= 0 || selectLang.options[langCurrent].value === 'default';
      var langNext;
      if (e.key === 'd') {
        langNext = langIsFirst ? 1 : langCurrent < langTotal - 1 ? langCurrent + 1 : 1;
      } else {
        langNext = langIsFirst ? langTotal - 1 : langCurrent > 1 ? langCurrent - 1 : langTotal - 1;
      }
      selectLang.selectedIndex = langNext;
      window.__skipUndefinedConfirm = true;
      selectLang.dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }

    if (e.key !== 'e' && e.key !== 'q') return;

    var selectShop = document.getElementById('shops');
    var selectLanguage = document.getElementById('languages');

    if (!selectShop || selectShop.options.length <= 1) return;
    if (selectShop.parentElement?.style.display === 'none') return;

    e.preventDefault();

    var total = selectShop.options.length;
    var current = selectShop.selectedIndex;
    var isFirst = current <= 0 || selectShop.options[current].value === 'default';

    var next;
    if (e.key === 'e') {
      next = isFirst ? 1 : current < total - 1 ? current + 1 : 1;
    } else {
      next = isFirst ? total - 1 : current > 1 ? current - 1 : total - 1;
    }

    selectShop.selectedIndex = next;
    selectShop.dispatchEvent(new Event('change', { bubbles: true }));

    if (selectLanguage && selectLanguage.options.length > 1) {
      selectLanguage.selectedIndex = 1;
      selectLanguage.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
})();
