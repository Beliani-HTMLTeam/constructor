// ============================================================
// AdventConfettiScript – star confetti burst (canvas-confetti)
// No npm install: the library is loaded from a CDN in the browser.
// Include once per page.
//
// Exposes:
//   window.AdventConfetti.burstAt(element, event)  -> burst at the click
//                                                    (or element centre)
//   window.AdventConfetti.burst(x, y)              -> x / y = 0..1 of the screen
//
// Desktop (wider than 600px) gets a bigger, wider burst than mobile.
// Tune it with `desktop` / `mobile` (any canvas-confetti option).
//
// If the CDN can't be loaded (blocked, offline) nothing breaks –
// the burst is simply skipped. To self-host, upload the file to
// pictureserver and pass its URL as `src`.
// ============================================================
export function AdventConfettiScript({
  src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js',
  colors = ['#750000', '#FFCCB7', '#FECD8C'],
  zIndex = 100000, // above the popup overlay (99999)
  // mobile = same as the 2025 calendar
  mobile = { particleCount: 30, startVelocity: 10, ticks: 100, scalar: 1.5 },
  // desktop = more stars, flying further
  desktop = { particleCount: 60, startVelocity: 28, ticks: 160, scalar: 1.8 },
  desktopFrom = 601, // px – same breakpoint as the popups
} = {}) {
  const opts = JSON.stringify({ src, colors, zIndex, mobile, desktop, desktopFrom });
 
  return `
<script>
(function () {
  if (window.AdventConfetti) return;
  var OPTS = ${opts};
  var loading = null;
 
  // load canvas-confetti once (from the CDN)
  function load() {
    if (window.confetti) return Promise.resolve(window.confetti);
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = OPTS.src;
      s.async = true;
      s.onload = function () { window.confetti ? resolve(window.confetti) : reject(); };
      s.onerror = function () { loading = null; reject(); };
      document.head.appendChild(s);
    });
    return loading;
  }
 
  // 3 star bursts – size depends on the screen
  function burst(x, y) {
    load().then(function (confetti) {
      var size = window.innerWidth >= OPTS.desktopFrom ? OPTS.desktop : OPTS.mobile;
      var settings = {
        particleCount: 30,
        spread: 360,
        ticks: 100,
        gravity: 0.6,
        decay: 0.95,
        startVelocity: 10,
        scalar: 1.5,
        shapes: ['star'],
        colors: OPTS.colors,
        zIndex: OPTS.zIndex,
        disableForReducedMotion: true,
        origin: { x: x, y: y }
      };
      for (var k in size) settings[k] = size[k];
 
      confetti(settings);
      setTimeout(function () { confetti(settings); }, 150);
      setTimeout(function () { confetti(settings); }, 300);
    }).catch(function () {});
  }
 
  // burst at the mouse/touch position, or at the centre of the element
  function burstAt(el, e) {
    var x, y;
    if (e && (e.clientX || e.clientY)) {
      x = e.clientX; y = e.clientY;
    } else if (el && el.getBoundingClientRect) {
      var r = el.getBoundingClientRect();
      x = r.left + r.width / 2; y = r.top + r.height / 2;
    } else {
      x = window.innerWidth / 2; y = window.innerHeight / 2;
    }
    burst(x / window.innerWidth, y / window.innerHeight);
  }
 
  // preload after the page has loaded so the first click is instant
  function preload() { load().catch(function () {}); }
  if (document.readyState === 'complete') preload();
  else window.addEventListener('load', preload);
 
  window.AdventConfetti = { burst: burst, burstAt: burstAt };
})();
</script>`;
}
 