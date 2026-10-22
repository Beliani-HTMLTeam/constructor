// ============================================================
// Fully responsive Interactive Advent Calendar
// Landing Page only
// Popups come from the reusable ./advent-popup components
// ============================================================
import {
  AdventPopupStyles,
  AdventPopupScript,
  AdventPopups, 
  AdventConfettiScript,
  popupTextsFromQueries,
  popupsFromQueries,
} from './advent-popup/index.js';
 
export function InteractiveHeroImage({ type,  queries = {} }) {
  const isLanding = type === String(type).toLowerCase().includes('landing');
 
  const adventBase = 'https://pictureserver.net/static/2026/';
  const adventImages = [
    `${adventBase}advent_all_closed.webp?ver=14`, // 0 - all closed
    `${adventBase}advent_open_1.webp?ver=14`,     // 1
    `${adventBase}advent_open_2.webp?ver=14`,     // 2
    `${adventBase}advent_open_3.webp?ver=14`,     // 3
    `${adventBase}advent_open_3.webp?ver=14`,     // 4 // placeholder, freebie
    `${adventBase}advent_open_3.webp?ver=14`,     // 5 // placeholder, freebie
    `${adventBase}advent_open_3.webp?ver=14`,     // 6 // placeholder, freebie
    `${adventBase}advent_open_7.webp?ver=14`,     // 7
    `${adventBase}advent_open_7.webp?ver=14`,     // 8 // placeholder, freebie
    `${adventBase}advent_open_9.webp?ver=14`,     // 9
    `${adventBase}advent_open_9.webp?ver=14`,    // 10 // placeholder, freebie
    `${adventBase}advent_open_11.webp?ver=14`,    // 11
    `${adventBase}advent_open_12.webp?ver=14`,    // 12
    `${adventBase}advent_open_13.webp?ver=14`,    // 13 // placeholder, freebie
    `${adventBase}advent_open_13.webp?ver=14`,    // 14 // placeholder, freebie
    `${adventBase}advent_open_13.webp?ver=14`,    // 15 // placeholder, freebie
    `${adventBase}advent_open_16.webp?ver=14`,    // 16
    `${adventBase}advent_open_17.webp?ver=14`,    // 17
    `${adventBase}advent_open_17.webp?ver=14`,    // 18 // placeholder, freebie 
    `${adventBase}advent_open_17.webp?ver=14`,    // 19 // placeholder, freebie
    `${adventBase}advent_open_17.webp?ver=14`,    // 20 // placeholder, freebie
    `${adventBase}advent_open_21.webp?ver=14`,    // 21
    `${adventBase}advent_open_21.webp?ver=14`,    // 22 // placeholder, freebie
    `${adventBase}advent_open_21.webp?ver=14`,    // 23 // placeholder, freebie
    `${adventBase}advent_open_24.webp?ver=14`,    // 24
  ];
 
  // ===== Shared popup texts (translate per country) =====
  const popupTexts = popupTextsFromQueries(queries);

 
  // ===== Popup per door (key = door number) =====
  // type: 'percent' | 'free' | 'buy4pay3' | 'cashback' | 'upto' | 'discount' | 'special'
  //  imageDesktop / imageMobile : full background images (desktop ~1934x960, mobile ~514x920)
  //  link       : background + texts become a link (opens in new tab)
  //  pre        : line above the title ("Extra", "Christmas Accessories")
  //  title      : main deal (<br /> for a line break)
  //  subtitle   : "when you spend min. £200"
  //  code       : "Code: xxx" -> copy button
  //  mobile     : { pre, title, subtitle, code } – different texts on mobile ('' hides it)
  //  conditions : text shown below the calendar after "See conditions"
  const popupImg = (n, device) => `${adventBase}advent_popup_${n}_${device}.webp?ver=10`;

  // one sheet cell of a query (row index i, 0-based)
  const cell = (name, i) => {
    const r = (queries[name] || [])[i];
    return String((Array.isArray(r) ? r[0] : r) ?? '').trim();
  };
  // all rows of a query as one text (each row = new line)
  const fromQuery = (name) =>
    (queries[name] || [])
      .map((r) => String((Array.isArray(r) ? r[0] : r) ?? '').trim())
      .filter(Boolean)
      .join('<br />');

  const regularConditions = fromQuery('Regular Conditions');
  const upTo = fromQuery('UpTo'); // shared "Up to 50% OFF" (row 3)

  // Category day – sheet: Title  ->  pre = category, title = shared "Up to 50% OFF"
  const category = (n, link) => ({
    type: 'upto',
    fields: ['pre'],
    title: upTo,
    conditions: regularConditions,
    imageDesktop: popupImg(n, 'd'),
    imageMobile: popupImg(n, 'm'),
    link,
  });

  // Voucher day – conditions from "Conditions - DD.12" (empty -> no "See conditions")
  const voucher = (n, type, fields) => ({
    type,
    fields,
    conditions: fromQuery(`Conditions${n}`),
    imageDesktop: popupImg(n, 'd'),
    imageMobile: popupImg(n, 'm'),
  });

  // Row orders used in the sheet (null = Voucher ID row, not shown)
  const CODE_THEN_VOUCHER = ['title', 'subtitle', 'code', null];
  const VOUCHER_THEN_CODE = ['title', 'subtitle', null, 'code'];

  const adventPopups = popupsFromQueries(queries, {
    // 01.12 – Christmas Decorations / Up to 50% OFF (sheet: Title, Description)
    1: { ...category(1, 'https://www.beliani.ch/christmas-accessories/decorations/'), fields: ['pre', 'title'] },

    // 02.12 – Extra / 10% OFF / when you spend €500 / Code
    2: voucher(2, 'percent', ['pre', 'title', 'subtitle', 'code', null]),

    // 03.12 – Kid's Room
    3: category(3, 'https://www.beliani.co.uk/children-room/'),

    // 04.12 – Free XXX (sheet: Title, Description, Voucher, Code)
    4: voucher(4, 'free', VOUCHER_THEN_CODE),

    // 05.12 / 06.12 – Free XXX
    5: voucher(5, 'free', CODE_THEN_VOUCHER),
    6: voucher(6, 'free', CODE_THEN_VOUCHER),

    // 07.12 – Dining Room
    7: category(7, "https://www.beliani.ch/dining-room-furniture/"),

    // 08.12 – Free XXX (sheet: Title, Description, Voucher, Code)
    8: voucher(8, 'free', VOUCHER_THEN_CODE),

    // 09.12 – €10 Discount
    9: voucher(9, 'discount', CODE_THEN_VOUCHER),

    // 10.12 – Free XXX
    10: voucher(10, 'free', CODE_THEN_VOUCHER),

    // 11.12 Scatter Cushions / 12.12 Tableware / 13.12 Lighting
    11: category(11, "https://www.beliani.ch/textiles/scatter-cushions/"),
    12: category(12 , "https://www.beliani.ch/kitchenware-tableware/"),
    13: category(13, "https://www.beliani.ch/lighting/"),

    // 14.12 / 15.12 – Free XXX
    14: voucher(14, 'free', CODE_THEN_VOUCHER),
    15: voucher(15, 'free', CODE_THEN_VOUCHER),

    // 16.12 – 4 for 3 pyramid: 3 lines, each with its own code
    // sheet: Title, Desc 1-3 desktop, Desc 1-3 mobile, Code 1-3, Voucher 1-3
    16: {
      ...voucher(16, 'buy4pay3', ['title']),
      tiers: [0, 1, 2].map((i) => ({
        text: cell('Popup16', 1 + i),
        mobileText: cell('Popup16', 4 + i) || undefined, // empty mobile cell -> desktop text
        code: cell('Popup16', 7 + i),
      })),
    },

    // 17.12 – Rugs
    17: category(17, "https://www.beliani.ch/rugs/"),

    // 18.12 / 19.12 / 20.12 – Free XXX
    18: voucher(18, 'free', CODE_THEN_VOUCHER),
    19: voucher(19, 'free', CODE_THEN_VOUCHER),
    20: voucher(20, 'free', CODE_THEN_VOUCHER),

    // 21.12 – €50 Cashback
    21: voucher(21, 'cashback', CODE_THEN_VOUCHER),

    // 22.12 / 23.12 – Free XXX
    22: voucher(22, 'free', CODE_THEN_VOUCHER),
    23: voucher(23, 'free', CODE_THEN_VOUCHER),

    // 24.12 – Home Accessories
    24: category(24, "https://www.beliani.ch/home-accessories/"),
  });

  const InteractiveTopImage = `
    <tr>
      <td align="center" style="padding:0; line-height:0; font-size:0;">
        ${AdventPopupStyles()}
 
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
 
          <!-- Door 1 -->
          <div class="advent-door" data-door="1" style="
            position: absolute;
            left: 50%;
            top: 16%;
            width: 15%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 1"></div>
          <!-- Door 2 -->
          <div class="advent-door" data-door="2" style="
            position: absolute;
            left: 44%;
            top: 26%;
            width: 12%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 2"></div>
          <!-- Door 3 -->
          <div class="advent-door" data-door="3" style="
            position: absolute;
            left: 56%;
            top: 26%;
            width: 15%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 3"></div>
          <!-- Door 4 -->
          <div class="advent-door" data-door="4" style="
            position: absolute;
            left: 45%;
            top: 42%;
            width: 8%;
            height: 6%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 4"></div>
          <!-- Door 5 -->
          <div class="advent-door" data-door="5" style="
            position: absolute;
            left: 45%;
            top: 36%;
            width: 8%;
            height: 6%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 5"></div>
          <!-- Door 6 -->
          <div class="advent-door" data-door="6" style="
            position: absolute;
            left: 63%;
            top: 36%;
            width: 12%;
            height: 12%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 6"></div>
          <!-- Door 7 -->
          <div class="advent-door" data-door="7" style="
            position: absolute;
            left: 54%;
            top: 36%;
            width: 9%;
            height: 12%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 7"></div>
          <!-- Door 8 -->
          <div class="advent-door" data-door="8" style="
            position: absolute;
            left: 24%;
            top: 49%;
            width: 21%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 8"></div>
          <!-- Door 9 -->
          <div class="advent-door" data-door="9" style="
            position: absolute;
            left: 58%;
            top: 50%;
            width: 12%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 9"></div>
          <!-- Door 10 -->
          <div class="advent-door" data-door="10" style="
            position: absolute;
            left: 45%;
            top: 48%;
            width: 10%;
            height: 12%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 10"></div>
          <!-- Door 11 -->
          <div class="advent-door" data-door="11" style="
            position: absolute;
            left: 33%;
            top: 60%;
            width: 10%;
            height: 8%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 11"></div>
          <!-- Door 12 -->
          <div class="advent-door" data-door="12" style="
            position: absolute;
            left: 23%;
            top: 60%;
            width: 10%;
            height: 8%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 12"></div>
          <!-- Door 13 -->
          <div class="advent-door" data-door="13" style="
            position: absolute;
            left: 11%;
            top: 77%;
            width: 17%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 13"></div>
          <!-- Door 14 -->
          <div class="advent-door" data-door="14" style="
            position: absolute;
            left: 43%;
            top: 60%;
            width: 14%;
            height: 8%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 14"></div>
          <!-- Door 15 -->
          <div class="advent-door" data-door="15" style="
            position: absolute;
            left: 58%;
            top: 61%;
            width: 13%;
            height: 7%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 15"></div>
          <!-- Door 16 -->
          <div class="advent-door" data-door="16" style="
            position: absolute;
            left: 11%;
            top: 69%;
            width: 16%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 16"></div>
          <!-- Door 17 -->
          <div class="advent-door" data-door="17" style="
            position: absolute;
            left: 59%;
            top: 78%;
            width: 15%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 17"></div>
          <!-- Door 18 -->
          <div class="advent-door" data-door="18" style="
            position: absolute;
            left: 43%;
            top: 69%;
            width: 15%;
            height: 8%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 18"></div>
          <!-- Door 19 -->
          <div class="advent-door" data-door="19" style="
            position: absolute;
            left: 27%;
            top: 69%;
            width: 15%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 19"></div>
          <!-- Door 20 -->
          <div class="advent-door" data-door="20" style="
            position: absolute;
            left: 74%;
            top: 69%;
            width: 17%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 20"></div>
          <!-- Door 21 -->
          <div class="advent-door" data-door="21" style="
            position: absolute;
            left: 27%;
            top: 78%;
            width: 16%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 21"></div>
          <!-- Door 22 -->
          <div class="advent-door" data-door="22" style="
            position: absolute;
            left: 27%;
            top: 78%;
            width: 16%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 22"></div>
          <!-- Door 23 -->
          <div class="advent-door" data-door="23" style="
            position: absolute;
            left: 43%;
            top: 78%;
            width: 15%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 23"></div>
          <!-- Door 24 -->
          <div class="advent-door" data-door="24" style="
            position: absolute;
            left: 75%;
            top: 78%;
            width: 15%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 24"></div>
        </div>
      </td>
    </tr>
 
    <!-- ========== CONDITIONS + POPUP TEMPLATES ========== -->
    <tr>
      <td align="center" style="padding:0;">
        ${AdventPopups({ popups: adventPopups, texts: popupTexts })}
        ${AdventPopupScript()}
        ${AdventConfettiScript({zIndex: 9999})}
      </td>
    </tr>
 
    <script>
    (function () {
      var images = ${JSON.stringify(adventImages)};
 
      var img = document.getElementById('advent-img');
      var doors = document.querySelectorAll('.advent-door');
      if (!img || !doors.length) return;
 
      // ===== Analytics =====
      function track(action, label, value) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'custom_event',
          eventCategory: 'AdventCalendar',
          eventAction: action,
          eventLabel: label,
          eventValue: value,
          eventOption: '',
          eventID: ''
        });
      }
      if (!window.__adventPageViewSent) {
        window.__adventPageViewSent = true;
        track('View', 'Page', '');
      }
 
      function openPopup(doorNum) {
        if (window.AdventPopup) window.AdventPopup.open(doorNum);
      }
 
      // ===== Date logic =====
      // All closed:  1 Dec 2026 00:00 → 23:59:59
      // open_1:      2 Dec 2026 00:00 → 23:59:59
      // open_2:      3 Dec 2026 00:00 → 23:59:59
      // ...
      var start = new Date(2026, 11, 1); // 1 December 2026
      var now = new Date();
      var msPerDay = 24 * 60 * 60 * 1000;
 
      var maxAllowed = Math.floor((now - start) / msPerDay);
      if (maxAllowed < 0) maxAllowed = 0;
      if (maxAllowed >= images.length) maxAllowed = images.length - 1;
 
      var current = maxAllowed;
      img.src = images[current];
 
      // ===== Click logic =====
      // - next door: opens the door (image swap) + shows its popup
      // - already opened doors: show their popup again
      // - future doors: not clickable
      var TEST_DOORS = [18, 19];   // opened in this order: 19 unlocks after 18
      var testOpened = {};

      function updateDoors() {
        doors.forEach(function (door) {
          var doorNum = parseInt(door.dataset.door, 10);
          var isNext = doorNum === current + 1 && doorNum < images.length;
          var isOpened = doorNum <= current;

          // TEST ONLY: first test door is always clickable,
          // the next one only after the previous test door was opened
          var testIdx = TEST_DOORS.indexOf(doorNum);
          var isTest = testIdx !== -1 &&
                       (testIdx === 0 || testOpened[TEST_DOORS[testIdx - 1]]);

          if (isNext || isOpened || isTest) {
            door.style.pointerEvents = 'auto';
            door.style.cursor = 'pointer';
            door.onclick = function (e) {
              track('Click', 'Page', 'PopUp');
              if (window.AdventConfetti) window.AdventConfetti.burstAt(door, e);

              // TEST ONLY: open out of order without changing the real progress
              if (isTest && !isNext && !isOpened) {
                testOpened[doorNum] = true;
                if (images[doorNum]) img.src = images[doorNum];
                updateDoors();   // unlocks the next test door (19)
                setTimeout(function () { openPopup(doorNum); }, 400);
                return;
              }

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