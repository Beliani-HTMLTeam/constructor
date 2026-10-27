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
 
const ADVENT_TEST_MODE = false;
 
export function InteractiveHeroImage({ type,  queries = {} }) {
  const isLanding = type === String(type).toLowerCase().includes('landing');
 
  const adventBase = 'https://pictureserver.net/static/2026/';
  const adventImages = [
    `${adventBase}advent_all_closed.webp?ver=17`, // 0 - all closed
    `${adventBase}advent_open_1.webp?ver=17`,     // 1
    `${adventBase}advent_open_2.webp?ver=17`,     // 2
    `${adventBase}advent_open_3.webp?ver=17`,     // 3
    `${adventBase}advent_open_3.webp?ver=17`,     // 4 // placeholder, freebie
    `${adventBase}advent_open_3.webp?ver=17`,     // 5 // placeholder, freebie
    `${adventBase}advent_open_3.webp?ver=17`,     // 6 // placeholder, freebie
    `${adventBase}advent_open_7.webp?ver=17`,     // 7
    `${adventBase}advent_open_7.webp?ver=17`,     // 8 // placeholder, freebie
    `${adventBase}advent_open_9.webp?ver=17`,     // 9
    `${adventBase}advent_open_9.webp?ver=17`,    // 10 // placeholder, freebie
    `${adventBase}advent_open_11.webp?ver=17`,    // 11
    `${adventBase}advent_open_12.webp?ver=17`,    // 12
    `${adventBase}advent_open_13.webp?ver=17`,    // 13 // placeholder, freebie
    `${adventBase}advent_open_13.webp?ver=17`,    // 14 // placeholder, freebie
    `${adventBase}advent_open_13.webp?ver=17`,    // 15 // placeholder, freebie
    `${adventBase}advent_open_16.webp?ver=17`,    // 16
    `${adventBase}advent_open_17.webp?ver=17`,    // 17
    `${adventBase}advent_open_17.webp?ver=17`,    // 18 // placeholder, freebie 
    `${adventBase}advent_open_17.webp?ver=17`,    // 19 // placeholder, freebie
    `${adventBase}advent_open_17.webp?ver=17`,    // 20 // placeholder, freebie
    `${adventBase}advent_open_21.webp?ver=17`,    // 21
    `${adventBase}advent_open_21.webp?ver=17`,    // 22 // placeholder, freebie
    `${adventBase}advent_open_21.webp?ver=17`,    // 23 // placeholder, freebie
    `${adventBase}advent_open_24.webp?ver=17`,    // 24
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
 
  // screen-reader name of the doors: "<DoorLabel> 5" (optional sheet row, e.g. "Door" / "Tür" / "Porte")
  const doorLabel = cell('DoorLabel', 0) || 'Door';
 
  const HOME = 'https://www.beliani.ch/';   // voucher popups link to the home page
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
 
  // Voucher day – conditions from "Conditions - DD.12"
  // link: the whole popup leads there (except the copy button and the code itself)
  const voucher = (n, type, fields, link = HOME) => ({
    type,
    fields,
    conditions: fromQuery(`Conditions${n}`),
    imageDesktop: popupImg(n, 'd'),
    imageMobile: popupImg(n, 'm'),
    link,
  });
 
  // Row orders used in the sheet (null = Voucher ID row, not shown)
  const CODE_THEN_VOUCHER = ['title', 'subtitle', 'code', null];
  const VOUCHER_THEN_CODE = ['title', 'subtitle', null, 'code'];
 
  const adventPopups = popupsFromQueries(queries, {
    // 01.12 – Christmas Decorations / Up to 50% OFF (sheet: Title, Description)
    1: { ...category(1, 'https://www.beliani.ch/christmas-accessories/decorations/'), fields: ['pre', 'title'] },
 
    // 02.12 – Extra / 10% OFF / when you spend €500 / Code
    2: voucher(2, 'percent', ['pre', 'title', 'subtitle', 'code', null], HOME),
 
    // 03.12 – Kid's Room
    3: category(3, 'https://www.beliani.co.uk/children-room/'),
 
    // 04.12 – Free XXX (sheet: Title, Description, Voucher, Code)
    4: voucher(4, 'free', CODE_THEN_VOUCHER, HOME),
 
    // 05.12 / 06.12 – Free XXX
    5: voucher(5, 'free', CODE_THEN_VOUCHER, HOME),
    6: voucher(6, 'free', CODE_THEN_VOUCHER, HOME),
 
    // 07.12 – Dining Room
    7: category(7, "https://www.beliani.ch/dining-room-furniture/"),
 
    // 08.12 – Free XXX (sheet: Title, Description, Voucher, Code)
    8: voucher(8, 'free', CODE_THEN_VOUCHER, HOME),
 
    // 09.12 – €10 Discount
    9: voucher(9, 'discount', CODE_THEN_VOUCHER, HOME),
 
    // 10.12 – Free XXX
    10: voucher(10, 'free', CODE_THEN_VOUCHER, HOME),
 
    // 11.12 Scatter Cushions / 12.12 Tableware / 13.12 Lighting
    11: category(11, "https://www.beliani.ch/textiles/scatter-cushions/"),
    12: category(12 , "https://www.beliani.ch/kitchenware-tableware/"),
    13: category(13, "https://www.beliani.ch/lighting/"),
 
    // 14.12 / 15.12 – Free XXX
    14: voucher(14, 'free', CODE_THEN_VOUCHER, HOME),
    15: voucher(15, 'free', CODE_THEN_VOUCHER, HOME),
 
    // 16.12 – 4 for 3 pyramid: 3 lines, each with its own code
    // sheet: Title, Desc 1-3 desktop, Desc 1-3 mobile, Code 1-3, Voucher 1-3
    16: {
      ...voucher(16, 'buy4pay3', ['title'], HOME),
      tiers: [0, 1, 2].map((i) => ({
        text: cell('Popup16', 1 + i),
        // mobile: one line per offer (design) – line breaks from the sheet are ignored
        mobileText: cell('Popup16', 4 + i).replace(/\s*<br\s*\/?>\s*/gi, ' ') || undefined, // empty -> desktop text
        code: cell('Popup16', 7 + i),
      })),
    },
 
    // 17.12 – Rugs
    17: category(17, "https://www.beliani.ch/rugs/"),
 
    // 18.12 / 19.12 / 20.12 – Free XXX
    18: voucher(18, 'free', CODE_THEN_VOUCHER, HOME),
    19: voucher(19, 'free', CODE_THEN_VOUCHER, HOME),
    20: voucher(20, 'free', CODE_THEN_VOUCHER, HOME),
 
    // 21.12 – €50 Cashback
    21: voucher(21, 'cashback', CODE_THEN_VOUCHER, HOME),
 
    // 22.12 / 23.12 – Free XXX
    22: voucher(22, 'free', CODE_THEN_VOUCHER, HOME),
    23: voucher(23, 'free', CODE_THEN_VOUCHER, HOME),
 
    // 24.12 – Home Accessories
    24: category(24, "https://www.beliani.ch/home-accessories/"),
  });
 
  const InteractiveTopImage = `
    <tr>
      <td align="center" style="padding:0; line-height:0; font-size:0;">
        ${AdventPopupStyles()}
        <style>
          /* keyboard focus on a door (Tab) */
          .advent-door:focus { outline: none; }
          .advent-door:focus-visible { outline: 3px solid #750000; outline-offset: 2px; border-radius: 6px; }
          /* TEST: "See conditions" 22px on desktop, popup 1 only (default 25px) – remove after the test */
          .adv-pop__content[data-popup="1"] { --fs-cond: 2.275; }   /* 22 / 967 */
        </style>
 
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
            top: 5%;
            width: 17%;
            height: 12%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 1"></div>
          <!-- Door 2 -->
          <div class="advent-door" data-door="2" style="
            position: absolute;
            left: 41%;
            top: 17%;
            width: 16%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 2"></div>
          <!-- Door 3 -->
          <div class="advent-door" data-door="3" style="
            position: absolute;
            left: 57%;
            top: 17%;
            width: 17%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 3"></div>
          <!-- Door 4 -->
          <div class="advent-door" data-door="4" style="
            position: absolute;
            left: 43%;
            top: 37%;
            width: 10%;
            height: 7%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 4"></div>
          <!-- Door 5 -->
          <div class="advent-door" data-door="5" style="
            position: absolute;
            left: 43%;
            top: 29%;
            width: 10%;
            height: 8%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 5"></div>
          <!-- Door 6 -->
          <div class="advent-door" data-door="6" style="
            position: absolute;
            left: 65%;
            top: 29%;
            width: 13%;
            height: 15%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 6"></div>
          <!-- Door 7 -->
          <div class="advent-door" data-door="7" style="
            position: absolute;
            left: 54%;
            top: 30%;
            width: 10%;
            height: 14%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 7"></div>
          <!-- Door 8 -->
          <div class="advent-door" data-door="8" style="
            position: absolute;
            left: 18%;
            top: 46%;
            width: 25%;
            height: 12%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 8"></div>
          <!-- Door 9 -->
          <div class="advent-door" data-door="9" style="
            position: absolute;
            left: 58%;
            top: 46%;
            width: 15%;
            height: 13%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 9"></div>
          <!-- Door 10 -->
          <div class="advent-door" data-door="10" style="
            position: absolute;
            left: 43%;
            top: 44%;
            width: 12%;
            height: 14%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 10"></div>
          <!-- Door 11 -->
          <div class="advent-door" data-door="11" style="
            position: absolute;
            left: 29%;
            top: 58%;
            width: 11%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 11"></div>
          <!-- Door 12 -->
          <div class="advent-door" data-door="12" style="
            position: absolute;
            left: 17%;
            top: 58%;
            width: 12%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 12"></div>
          <!-- Door 13 -->
          <div class="advent-door" data-door="13" style="
            position: absolute;
            left: 3%;
            top: 79%;
            width: 18%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 13"></div>
          <!-- Door 14 -->
          <div class="advent-door" data-door="14" style="
            position: absolute;
            left: 40%;
            top: 58%;
            width: 18%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 14"></div>
          <!-- Door 15 -->
          <div class="advent-door" data-door="15" style="
            position: absolute;
            left: 58%;
            top: 59%;
            width: 16%;
            height: 9%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 15"></div>
          <!-- Door 16 -->
          <div class="advent-door" data-door="16" style="
            position: absolute;
            left: 3%;
            top: 69%;
            width: 17%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 16"></div>
          <!-- Door 17 -->
          <div class="advent-door" data-door="17" style="
            position: absolute;
            left: 60%;
            top: 79%;
            width: 18%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 17"></div>
          <!-- Door 18 -->
          <div class="advent-door" data-door="18" style="
            position: absolute;
            left: 40%;
            top: 69%;
            width: 18%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 18"></div>
          <!-- Door 19 -->
          <div class="advent-door" data-door="19" style="
            position: absolute;
            left: 21%;
            top: 69%;
            width: 18%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 19"></div>
          <!-- Door 20 -->
          <div class="advent-door" data-door="20" style="
            position: absolute;
            left: 78%;
            top: 69%;
            width: 19%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 20"></div>
          <!-- Door 21 -->
          <div class="advent-door" data-door="21" style="
            position: absolute;
            left: 22%;
            top: 79%;
            width: 18%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 21"></div>
          <!-- Door 22 -->
          <div class="advent-door" data-door="22" style="
            position: absolute;
            left: 59%;
            top: 69%;
            width: 19%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 22"></div>
          <!-- Door 23 -->
          <div class="advent-door" data-door="23" style="
            position: absolute;
            left: 41%;
            top: 79%;
            width: 18%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 23"></div>
          <!-- Door 24 -->
          <div class="advent-door" data-door="24" style="
            position: absolute;
            left: 79%;
            top: 79%;
            width: 18%;
            height: 11%;
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
        ${AdventNotices({ past: queries.PastPopup, future: queries.FuturePopup })}
        ${AdventPopupScript({ closeLabel: popupTexts.close })}
        ${AdventConfettiScript({zIndex: 9999})}
      </td>
    </tr>
 
    <script>
    (function () {
      var images = ${JSON.stringify(adventImages)};
 
      var img = document.getElementById('advent-img');
      var doors = document.querySelectorAll('.advent-door');
      if (!img || !doors.length) return;
 
      // ===== Accessibility: doors are buttons with a name ("Door 5") =====
      // Today's door can be reached with Tab and opened with Enter / Space;
      // locked doors are announced as unavailable.
      var DOOR_LABEL = ${JSON.stringify(doorLabel)};
      Array.prototype.forEach.call(doors, function (door) {
        door.setAttribute('role', 'button');
        door.setAttribute('aria-label', DOOR_LABEL + ' ' + door.getAttribute('data-door'));
        door.removeAttribute('title');   // English tooltip would be read twice
        door.addEventListener('keydown', function (e) {
          if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
          e.preventDefault();
          if (typeof door.onclick === 'function') door.onclick(e);
        });
      });
 
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
      // One door per day, only on its own day:
      //   1 Dec -> door 1 can be opened (all others closed)
      //   2 Dec -> door 1 shown open (not clickable), door 2 can be opened
      //   ...
      //  24 Dec -> doors 1-23 shown open, door 24 can be opened
      // Past doors are shown open but are not clickable, future doors are closed.
      var lastDoor = images.length - 1;            // 24
      var start = new Date(2026, 11, 1);           // 1 December 2026
      var now = new Date();
      var msPerDay = 24 * 60 * 60 * 1000;
 
      var day = now < start ? 0 : Math.floor((now - start) / msPerDay) + 1;  // 1 on 1 Dec
      var todayDoor = day >= 1 && day <= lastDoor ? day : 0;                 // 0 = no door today
      var pastDoors = Math.min(Math.max(day - 1, 0), lastDoor);              // shown open by date
 
      // ===== TEST MODE =====
      // All doors can be opened one by one (1, 2, 3 ...), whatever the date.
      // On: ADVENT_TEST_MODE = true (top of InteractiveHeroImage.js)
      //     or add ?advent-test to the page URL (e.g. .../content/advent-calendar?advent-test)
      // Test progress is saved too (separately from the real progress), so it survives a reload.
      // Start again with all doors closed: ?advent-test=reset
      var TEST_MODE = ${ADVENT_TEST_MODE ? 'true' : 'false'};
      var TEST_RESET = false;
      try {
        var params = new URLSearchParams(window.location.search);
        if (params.has('advent-test')) TEST_MODE = true;
        TEST_RESET = params.get('advent-test') === 'reset';
      } catch (e) {}
      var TEST_KEY = 'beliani_advent_2026_test';
      var testCurrent = 0;   // test mode: doors opened so far
      if (TEST_MODE) {
        try {
          if (TEST_RESET) window.localStorage.removeItem(TEST_KEY);
          testCurrent = Math.min(parseInt(window.localStorage.getItem(TEST_KEY), 10) || 0, lastDoor);
        } catch (e) {}
      }
      function saveTest() {
        try { window.localStorage.setItem(TEST_KEY, String(testCurrent)); } catch (e) {}
      }
 
      // ===== Remember today's door (this user / this browser) =====
      // { opened: N } -> the user already opened door N (rewritten with every new door)
      var STORE_KEY = 'beliani_advent_2026';
 
      function loadState() {
        try { return JSON.parse(window.localStorage.getItem(STORE_KEY)) || {}; }
        catch (e) { return {}; }
      }
      var saved = loadState();
      var todayOpened = todayDoor > 0 && parseInt(saved.opened, 10) === todayDoor;
 
      function saveState() {
        try {
          window.localStorage.setItem(STORE_KEY, JSON.stringify({
            opened: todayOpened ? todayDoor : (parseInt(saved.opened, 10) || 0)
          }));
        } catch (e) {}
      }
 
      function showImage() {
        if (TEST_MODE) { img.src = images[testCurrent]; return; }
        img.src = images[todayOpened ? todayDoor : pastDoors];
      }
      showImage();
 
      // ===== Click logic =====
      // - today's door: first click opens the door (image swap) + shows its popup;
      //   after that it stays open (also after a reload) and a click shows the popup again
      //   – until the day is over
      // - past doors: shown open, not clickable
      // - future doors: not clickable
      // TEST MODE: the last opened door shows its popup again, the next door opens
 
      // day number right now (1 on 1 Dec) – the page may stay open past midnight
      function currentDay() {
        var n = new Date();
        return n < start ? 0 : Math.floor((n - start) / msPerDay) + 1;
      }
 
      function makeClickable(door, onClick) {
        door.style.pointerEvents = 'auto';
        door.style.cursor = 'pointer';
        door.onclick = onClick;
        door.tabIndex = 0;                          // reachable with Tab
        door.removeAttribute('aria-disabled');
      }
      function makeLocked(door) {
        door.style.pointerEvents = 'none';
        door.style.cursor = 'default';
        door.onclick = null;
        door.tabIndex = -1;                         // skipped by Tab
        door.setAttribute('aria-disabled', 'true'); // "unavailable" for screen readers
      }
      // past / future door: no deal, a small message for a few seconds
      //   'past'   -> "Too late for this one! ..."   (sheet: PastPopup)
      //   'future' -> "Still wrapped! ..."           (sheet: FuturePopup)
      function makeNotice(door, kind) {
        door.style.pointerEvents = 'auto';
        door.style.cursor = 'pointer';
        door.tabIndex = -1;                         // still skipped by Tab
        door.setAttribute('aria-disabled', 'true');
        door.onclick = function () {
          // the day is over (page left open past midnight) -> start the new day
          if (!TEST_MODE && currentDay() !== day) { window.location.reload(); return; }
          if (window.AdventPopup && window.AdventPopup.notice) window.AdventPopup.notice(kind);
        };
      }
 
      function updateDoorsTest() {
        doors.forEach(function (door) {
          var doorNum = parseInt(door.dataset.door, 10);
          var isNext = doorNum === testCurrent + 1 && doorNum <= lastDoor;
          var isLast = doorNum === testCurrent;    // test "today": popup again
 
          if (isNext) {
            makeClickable(door, function (e) {
              track('Click', 'Page', 'PopUp');
              if (window.AdventConfetti) window.AdventConfetti.burstAt(door, e);
              testCurrent = doorNum;
              saveTest();          // remember test progress for the next reload
              showImage();
              updateDoorsTest();
              setTimeout(function () { openPopup(doorNum); }, 400);
            });
          } else if (isLast) {
            makeClickable(door, function (e) {
              track('Click', 'Page', 'PopUp');
              if (window.AdventConfetti) window.AdventConfetti.burstAt(door, e);
              openPopup(doorNum);
            });
          } else {
            makeNotice(door, doorNum < testCurrent ? 'past' : 'future');
          }
        });
      }
 
      function updateDoors() {
        if (TEST_MODE) { updateDoorsTest(); return; }
        doors.forEach(function (door) {
          var doorNum = parseInt(door.dataset.door, 10);
 
          if (doorNum !== todayDoor) {
            // before 1 Dec everything is "future", after 24 Dec everything is "past"
            var isPast = day > lastDoor || (todayDoor > 0 && doorNum < todayDoor);
            makeNotice(door, isPast ? 'past' : 'future');
            return;
          }
 
          makeClickable(door, function (e) {
            // the day is over (page left open past midnight) -> start the new day
            if (currentDay() !== day) { window.location.reload(); return; }
 
            track('Click', 'Page', 'PopUp');
            if (window.AdventConfetti) window.AdventConfetti.burstAt(door, e);   // confetti on every click
 
            if (todayOpened) {                   // already opened today -> popup again
              openPopup(doorNum);
              return;
            }
 
            todayOpened = true;
            saveState();                         // remember it for the next visit
            showImage();
            // short delay so the door opening is visible before the popup
            setTimeout(function () { openPopup(doorNum); }, 400);
          });
        });
      }
 
      updateDoors();
 
      // ===== "OPEN TODAY'S DEAL" button =====
      // On the landing page, a link that points to this same page (the intro CTA
      // links to content/advent-calendar) works like a click on TODAY'S door
      // instead of reloading the page:
      //   - today's door still closed -> it opens + popup
      //   - today's door already open -> just the popup
      // It never opens any other door. Any element with data-advent-today does the same.
      // TEST MODE: "today" = the last opened test door (door 1 when none is open yet).
      function todayNumber() {
        return TEST_MODE ? Math.max(testCurrent, 1) : todayDoor;
      }
      function openToday(e) {
        var n = todayNumber();
        var door = n ? document.querySelector('.advent-door[data-door="' + n + '"]') : null;
        if (!door || typeof door.onclick !== 'function') return false;   // no deal today
        door.onclick(e);            // same as clicking today's door (confetti at the button)
        return true;
      }
      window.AdventCalendar = { openToday: openToday };
 
      function trimSlash(path) {
        while (path.length > 1 && path.charAt(path.length - 1) === '/') path = path.slice(0, -1);
        return path;
      }
      function isThisPage(a) {
        try {
          var u = new URL(a.getAttribute('href'), window.location.href);
          return u.origin === window.location.origin &&
                 trimSlash(u.pathname) === trimSlash(window.location.pathname);
        } catch (err) { return false; }
      }
 
      document.addEventListener('click', function (e) {
        var el = e.target.closest && e.target.closest('[data-advent-today], a[href]');
        if (!el || el.closest('#advent-wrapper, #advent-popup')) return;
        if (!el.hasAttribute('data-advent-today') && !isThisPage(el)) return;
        if (openToday(e)) e.preventDefault();   // before 1 Dec / after 24 Dec the link works as usual
      });
 
      // TEST MODE label on the calendar, so it's never left on by mistake
      if (TEST_MODE) {
        var badge = document.createElement('div');
        badge.textContent = 'TEST MODE';
        badge.style.cssText = 'position:absolute; top:8px; left:8px; z-index:20; padding:4px 8px; ' +
          'background:#000; color:#fff; font:600 12px/1.2 Poppins, sans-serif; border-radius:4px; pointer-events:none;';
        img.parentNode.appendChild(badge);
      }
 
      // Prevent image dragging on mobile
      img.addEventListener('dragstart', function (e) { e.preventDefault(); });
    })();
    </script>
  `;
 
  return InteractiveTopImage;
}
 