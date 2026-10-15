// ============================================================
// Fully responsive Interactive Advent Calendar (4 doors)
// Landing Page only
// ============================================================
export function InteractiveHeroImage({ type }) {
  const isLanding = type === String(type).toLowerCase().includes('landing');
   
  const adventBase = 'https://pictureserver.net/static/2026/';
  const adventImages = [
    `${adventBase}uk_all_closed.webp`, // 0 - all closed
    `${adventBase}uk_open_1.webp`,     // 1
    `${adventBase}uk_open_2.webp`,     // 2
    `${adventBase}uk_open_3.webp`,     // 3
  ];
   
  // ===== Popup per door (key = door number) =====
  // img  = popup image shown over the page
  // link = where the popup image leads (opens in a new tab)
  const adventPopups = {
    1: { img: `${adventBase}uk_advent_popup_1.webp`, link: 'https://www.beliani.co.uk/', alt: 'Deal of the day' },
    2: { img: `${adventBase}uk_advent_popup_2.webp`, link: 'https://www.beliani.co.uk/', alt: 'Deal of the day' },
    3: { img: `${adventBase}uk_advent_popup_3.webp`, link: 'https://www.beliani.co.uk/', alt: 'Deal of the day' },
  };
   
  const InteractiveTopImage = `
    <tr>
      <td align="center" style="padding:0; line-height:0; font-size:0;">
        <div id="advent-wrapper" style="
          position: relative;
          display: block;
          width: 100%;
          max-width: 570px;
          margin: 0 auto;
          line-height: 0;
          -webkit-user-select: none;
          user-select: none;
        ">
          <img
            id="advent-img"
            src="${adventImages[0]}"
            alt="Festive Countdown Daily Deals"
            width="570"
            height="1020"
            style="
              display: block;
              width: 100%;
              height: auto;
              border: 0;
              pointer-events: none;
            "
          />
   
          <!-- ========== CLICKABLE DOORS (percentage based = fully responsive) ========== -->
   
          <!-- Door 1 (top box - 01) -->
          <div class="advent-door" data-door="1" style="
          position: absolute;
          left: 53%;
          top: 12%;
          width: 22%;
          height: 14%;
          cursor: pointer;
          z-index: 10;
          " title="Open door 1"></div>
   
          <!-- Door 2 -->
          <div class="advent-door" data-door="2" style="
            position: absolute;
            left: 42%;
            top: 26%;
            width: 20%;
            height: 13%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 2"></div>
   
          <!-- Door 3 -->
          <div class="advent-door" data-door="3" style="
            position: absolute;
            left: 62%;
            top: 26%;
            width: 22%;
            height: 13%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 3"></div>
        </div>
      </td>
    </tr>
   
    <script>
    (function () {
      var images = ${JSON.stringify(adventImages)};
      var popups = ${JSON.stringify(adventPopups)};
      var img = document.getElementById('advent-img');
      var doors = document.querySelectorAll('.advent-door');
      if (!img || !doors.length) return;
   
      // ===== Date logic =====
      // All closed:  1 Dec 2026 00:00 → 23:59:59
      // open_1:      2 Dec 2026 00:00 → 23:59:59
      // open_2:      3 Dec 2026 00:00 → 23:59:59
      // open_3:      4 Dec 2026 00:00 → 23:59:59
      // open_4:      5 Dec 2026 00:00 → 23:59:59
      var start = new Date(2026, 11, 1); // 1 December 2026
      var now = new Date();
      var msPerDay = 24 * 60 * 60 * 1000;
   
      var maxAllowed = Math.floor((now - start) / msPerDay);
      if (maxAllowed < 0) maxAllowed = 0;
      if (maxAllowed >= images.length) maxAllowed = images.length - 1;
   
      var current = maxAllowed;
      img.src = images[current];
   
      // ===== Preload popup images (no flash on open) =====
      Object.keys(popups).forEach(function (k) {
        var pre = new Image();
        pre.src = popups[k].img;
      });
   
      // ===== Popup overlay (built once, appended to <body>) =====
      var overlay = document.getElementById('advent-popup');
      var isNew = !overlay;
   
      if (isNew) {
        overlay = document.createElement('div');
        overlay.id = 'advent-popup';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.style.cssText = [
          'position:fixed',
          'inset:0',
          'top:0', 'right:0', 'bottom:0', 'left:0',
          'z-index:99999',
          'display:none',
          'align-items:center',
          'justify-content:center',
          'padding:16px',
          'box-sizing:border-box',
          'background:rgba(0,0,0,0.6)',
          'opacity:0',
          'transition:opacity .3s ease',
          'cursor:pointer'
        ].join(';');
   
        overlay.innerHTML =
          '<a id="advent-popup-link" href="#" target="_blank" rel="noopener" ' +
            'style="display:block;line-height:0;cursor:pointer;">' +
            '<img id="advent-popup-img" src="" alt="" style="' +
              'display:block;' +
              'width:auto;height:auto;' +
              'max-width:min(570px, 92vw);' +
              'max-height:88vh;' +
              'border:0;border-radius:8px;' +
              'box-shadow:0 10px 40px rgba(0,0,0,.35);' +
              'transform:scale(.9);' +
              'transition:transform .3s cubic-bezier(.175,.885,.32,1.275);' +
            '" />' +
          '</a>';
   
        document.body.appendChild(overlay);
      }
   
      var popupLink = document.getElementById('advent-popup-link');
      var popupImg = document.getElementById('advent-popup-img');
      var closeTimer = null;
   
      function openPopup(doorNum) {
        var p = popups[doorNum];
        if (!p) return;
        clearTimeout(closeTimer);
   
        popupImg.src = p.img;
        popupImg.alt = p.alt || '';
        popupLink.href = p.link;
   
        overlay.style.display = 'flex';
        void overlay.offsetWidth; // force reflow so the fade-in runs
        overlay.style.opacity = '1';
        popupImg.style.transform = 'scale(1)';
        document.documentElement.style.overflow = 'hidden'; // lock page scroll
      }
   
      function closePopup() {
        overlay.style.opacity = '0';
        popupImg.style.transform = 'scale(.9)';
        document.documentElement.style.overflow = '';
        closeTimer = setTimeout(function () {
          overlay.style.display = 'none';
        }, 300);
      }
   
      if (isNew) {
        // Click anywhere outside the image → close
        overlay.addEventListener('click', function (e) {
          if (!popupLink.contains(e.target)) closePopup();
        });
   
        // Esc key → close
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && overlay.style.display === 'flex') closePopup();
        });
      }
   
      // ===== Click logic =====
      // - next door: opens the door (image swap) + shows its popup
      // - already opened doors: show their popup again
      // - future doors: not clickable
      function updateDoors() {
        doors.forEach(function (door) {
          var doorNum = parseInt(door.dataset.door, 10);
          var isNext = doorNum === current + 1 && doorNum < images.length;
          var isOpened = doorNum <= current;
   
          if (isNext || isOpened) {
            door.style.pointerEvents = 'auto';
            door.style.cursor = 'pointer';
            door.onclick = function () {
              if (isNext) {
                current = doorNum;
                img.src = images[current];
                updateDoors();
                // short delay so the door opening is visible before the popup
                setTimeout(function () { openPopup(doorNum); }, 400);
              } else {
                openPopup(doorNum);
              }
            };
          } else {
            door.style.pointerEvents = 'none';
            door.style.cursor = 'default';
            door.onclick = null;
          }
        });
      }
   
      updateDoors();
   
      // Prevent image dragging on mobile
      img.addEventListener('dragstart', function (e) { e.preventDefault(); });
    })();
    </script>
  `;
   
  return InteractiveTopImage;
  }