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
  AdventNotices,
} from './advent-popup/index.js';
 
const ADVENT_TEST_MODE = false;
 
// First day of the calendar (door 1), YYYY-MM-DD.
// To try the real day-by-day mechanism before December, set e.g. '2026-11-02'
// (door 1 = 2 Nov, door 2 = 3 Nov ...) – or, without a rebuild, open the LP with
// ?advent-start=2026-11-02 (only for you; a "TEST START" label is shown).
// Set back to '2026-12-01' before going live.
const ADVENT_START = '2026-12-01';
const ADVENT_REAL_START = '2026-12-01';
 
export function InteractiveHeroImage({ type, queries = {}, shopNow: shopNowText, getPhrase, getCategoryLink }) {
  const isLanding = type === String(type).toLowerCase().includes('landing');
 
  const adventBase = 'https://pictureserver.net/static/2026/';
  // ===== Calendar frames =====
  // adventImages[N]     = doors 1..N open, NO glow   -> shown after today's door was opened
  // adventGlowImages[N] = doors 1..N open, door N+1 GLOWS -> shown while today's door is still closed
  // Day 2:  advent_open_1_glow (door 2 glows) -> click -> advent_open_2 (no glow)
  // Day 3:  advent_open_2_glow (door 3 glows) -> click -> advent_open_3 (no glow) ...
  const adventImages = [
    `${adventBase}advent_all_closed.webp?ver=19`,      // 0 - all closed (before 1 Dec)
    `${adventBase}advent_open_1.webp?ver=20`,     // 1
    `${adventBase}advent_open_2.webp?ver=20`,     // 2
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
 
  // Glow frames: index N = doors 1..N open + door N+1 glowing.
  // null = no glow frame yet -> the frame without glow (adventImages[N]) is used.
  // (a glow frame that fails to load also falls back to the frame without glow)
  const adventGlowImages = [
    `${adventBase}advent_all_closed_glow.webp?ver=19`, // 0  - door 1 glows
    `${adventBase}advent_open_1_glow.webp?ver=20`,     // 1  - door 2 glows
    `${adventBase}advent_open_2_glow.webp?ver=20`,     // 2  - door 3 glows
    null,     // 3  - door 4 glows
    null,                                              // 4  - door 5 glows (frame 4 is a placeholder)
    null,                                              // 5  - door 6 glows
    null,                                              // 6  - door 7 glows
    null,     // 7  - door 8 glows
    null,                                              // 8  - door 9 glows
    null,     // 9  - door 10 glows
    null,                                              // 10 - door 11 glows
    null,    // 11 - door 12 glows
    null,    // 12 - door 13 glows
    null,    // 13 - door 14 glows
    null,                                              // 14 - door 15 glows
    null,                                              // 15 - door 16 glows
    null,    // 16 - door 17 glows
    null,    // 17 - door 18 glows
    null,                                              // 18 - door 19 glows
    null,                                              // 19 - door 20 glows
    null,                                              // 20 - door 21 glows
    null,    // 21 - door 22 glows
    null,                                              // 22 - door 23 glows
    null,                                              // 23 - door 24 glows
  ];
 
  // ===== Shared popup texts (translate per country) =====
  // "Shop now" on the category popups:
  // the translated text passed in (shopNow = getPhrase('Shop now') in the template),
  // or getPhrase itself, or English as the last fallback
  const shopNow = shopNowText || (typeof getPhrase === 'function' && getPhrase('Shop now')) || 'Shop now';
  const popupTexts = popupTextsFromQueries(queries, { shopNow });
 
 
  // ===== Popup per door (key = door number) =====
  // type: 'percent' | 'free' | 'buy4pay3' | 'cashback' | 'upto' | 'discount' | 'special'
  //  imageDesktop / imageMobile : full background images (desktop ~1934x960, mobile ~514x920)
  //  link       : background + texts become a link (opens in new tab) – not used any more
  //  ctaLink    : only the "Shop now" link goes there (category popups)
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
 
  const regularConditions = fromQuery('Regular Conditions');
  const upTo = fromQuery('UpTo'); // shared "Up to 50% OFF" (row 3)
 
  // Category for the tracking (eventID): the English URL path, e.g. "/christmas-accessories/decorations/"
  // (analyst's request – the same in every country). Given per day below;
  // without it, the path of the "Shop now" link is used.
  const categoryPath = (link) => {
    try { return new URL(link).pathname; } catch (e) { return ''; }
  };
 
  // Category day – sheet: Title  ->  pre = category, title = shared "Up to 50% OFF"
  const category = (n, link, trackName) => ({
    type: 'upto',
    fields: ['pre'],
    title: upTo,
    cta: popupTexts.shopNow,      // "Shop now" – the only link in the popup
    conditions: regularConditions,
    imageDesktop: popupImg(n, 'd'),
    imageMobile: popupImg(n, 'm'),
    ctaLink: getCategoryLink(link),                // the popup itself is not a link
    trackId: trackName || categoryPath(link),   // eventID in the dataLayer
  });
 
  // Voucher day – conditions from "Conditions - DD.12"
  // no link – voucher popups don't lead anywhere (the code is copied with the copy button)
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
    1: { ...category(1, 'https://www.beliani.ch/christmas-accessories/decorations/', '/christmas-accessories/decorations/'), fields: ['pre', 'title'] },
 
    // 02.12 – Extra / 10% OFF / when you spend €500 / Code
    2: voucher(2, 'percent', ['pre', 'title', 'subtitle', 'code', null]),
 
    // 03.12 – Kid's Room
    3: category(3, 'https://www.beliani.co.uk/children-room/', '/children-room/'),
 
    // 04.12 – Free XXX (sheet: Title, Description, Voucher, Code)
    4: voucher(4, 'free', CODE_THEN_VOUCHER),
 
    // 05.12 / 06.12 – Free XXX
    5: voucher(5, 'free', CODE_THEN_VOUCHER),
    6: voucher(6, 'free', CODE_THEN_VOUCHER),
 
    // 07.12 – Dining Room
    7: category(7, "https://www.beliani.ch/dining-room-furniture/", '/dining-room-furniture/'),
 
    // 08.12 – Free XXX (sheet: Title, Description, Voucher, Code)
    8: voucher(8, 'free', CODE_THEN_VOUCHER),
 
    // 09.12 – €10 Discount
    9: voucher(9, 'discount', CODE_THEN_VOUCHER),
 
    // 10.12 – Free XXX
    10: voucher(10, 'free', CODE_THEN_VOUCHER),
 
    // 11.12 Scatter Cushions / 12.12 Tableware / 13.12 Lighting
    11: category(11, "https://www.beliani.ch/textiles/scatter-cushions/", '/textiles/scatter-cushions/'),
    12: category(12 , "https://www.beliani.ch/kitchenware-tableware/", '/kitchenware-tableware/'),
    13: category(13, "https://www.beliani.ch/lighting/", '/lighting/'),
 
    // 14.12 / 15.12 – Free XXX
    14: voucher(14, 'free', CODE_THEN_VOUCHER),
    15: voucher(15, 'free', CODE_THEN_VOUCHER),
 
    // 16.12 – 4 for 3 pyramid: 3 lines, each with its own code
    // sheet: Title, Desc 1-3 desktop, Desc 1-3 mobile, Code 1-3, Voucher 1-3
    16: {
      ...voucher(16, 'buy4pay3', ['title']),
      tiers: [0, 1, 2].map((i) => ({
        text: cell('Popup16', 1 + i),
        // mobile: one line per offer (design) – line breaks from the sheet are ignored
        mobileText: cell('Popup16', 4 + i).replace(/\s*<br\s*\/?>\s*/gi, ' ') || undefined, // empty -> desktop text
        code: cell('Popup16', 7 + i),
      })),
    },
 
    // 17.12 – Rugs
    17: category(17, "https://www.beliani.ch/rugs/", '/rugs/'),
 
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
    24: category(24, "https://www.beliani.ch/home-accessories/", '/home-accessories/'),
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
      var glowImages = ${JSON.stringify(adventGlowImages)};
 
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
      // option = the selected day (door number), e.g. '18'
      // id     = category name / voucher code of that day's popup (eventID)
      function track(action, label, value, option, id) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'custom_event',
          eventCategory: 'AdventCalendar',
          eventAction: action,
          eventLabel: label,
          eventValue: value,
          eventOption: option === undefined || option === null ? '' : String(option),
          eventID: id === undefined || id === null ? '' : String(id)
        });
      }
      if (!window.__adventPageViewSent) {
        window.__adventPageViewSent = true;
        track('View', 'Page', '');
      }
 
      // eventID of a day's popup: category name or voucher code (set in the popup template)
      function trackIdOf(doorNum) {
        var tpl = document.querySelector('template[data-adv-popup="' + doorNum + '"]');
        return tpl ? tpl.getAttribute('data-track-id') || '' : '';
      }
      // Click / Page / PopUp: once per day – when today's door is opened
      // (by the door or by the "OPEN TODAY'S DEAL" button), not on later clicks
      function trackOpen(doorNum) {
        track('Click', 'Page', 'PopUp', doorNum, trackIdOf(doorNum));
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
      // Today's door glows until it is opened (see "Calendar frame" below).
      var lastDoor = images.length - 1;            // 24
      var msPerDay = 24 * 60 * 60 * 1000;
 
      // start date: ADVENT_START, or ?advent-start=YYYY-MM-DD for a test
      function parseDate(s) {
        var p = String(s || '').split('-');
        if (p.length !== 3) return null;
        var d = new Date(+p[0], +p[1] - 1, +p[2]);
        return isNaN(d.getTime()) ? null : d;
      }
      var START = ${JSON.stringify(ADVENT_START)};
      try {
        var startParam = new URLSearchParams(window.location.search).get('advent-start');
        if (startParam && parseDate(startParam)) START = startParam;
      } catch (e) {}
      var start = parseDate(START) || new Date(2026, 11, 1);
      var START_TEST = START !== ${JSON.stringify(ADVENT_REAL_START)};
 
      // calendar day number of a date: 1 on the start day, 0 before it
      function dayOf(d) {
        var a = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
        var b = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
        return a < b ? 0 : Math.round((a - b) / msPerDay) + 1;
      }
 
      var day = dayOf(new Date());                 // 1 on the start day (1 Dec)
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
      // (a test start date gets its own key, so the test never touches the real progress)
      var STORE_KEY = 'beliani_advent_2026' + (START_TEST ? '_start_' + START : '');
 
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
 
      // ===== Calendar frame =====
      // today's door closed -> doors before today open + today's door GLOWS
      // today's door opened -> doors up to today open, NO glow
      // before the start / after the 24th -> no glow
      // No flicker: a new frame is first loaded + decoded off-screen and only then
      // swapped in (the old frame stays visible meanwhile). The next frame is
      // preloaded in advance, so a door click swaps instantly.
      var frameToken = 0;
      var preloaded = {};
      function preloadFrame(src) {
        if (!src || preloaded[src]) return preloaded[src];
        var pre = new Image();
        pre.decoding = 'async';
        preloaded[src] = new Promise(function (resolve, reject) {
          pre.onload = function () {
            if (pre.decode) pre.decode().then(resolve, resolve); else resolve();
          };
          pre.onerror = reject;
        });
        preloaded[src].catch(function () {});
        pre.src = src;
        return preloaded[src];
      }
      function swapTo(src, fallback) {
        var token = ++frameToken;
        preloadFrame(src).then(function () {
          if (token === frameToken && img.src !== src) img.src = src;
        }, function () {
          if (token === frameToken && fallback) swapTo(fallback);   // glow frame missing -> plain
        });
      }
      function frameSrc(opened, glow) {
        var plain = images[Math.min(Math.max(opened, 0), lastDoor)];
        var glowSrc = glow && opened < lastDoor ? glowImages[opened] : null;
        return { src: glowSrc || plain, fallback: glowSrc ? plain : null };
      }
      var firstFrame = true;
      function setFrame(opened, glow) {
        var f = frameSrc(opened, glow);
        if (firstFrame) {
          // page load: nothing shown yet -> set the right frame straight away
          // (no flash of the "all closed" picture from the HTML)
          firstFrame = false;
          img.onerror = f.fallback ? function () { img.onerror = null; img.src = f.fallback; } : null;
          img.src = f.src;
          preloadFrame(f.src);
          return;
        }
        swapTo(f.src, f.fallback);
      }
      function showImage() {
        // TEST MODE: always the glow frame – the next door glows right after opening one
        if (TEST_MODE) { setFrame(testCurrent, true); return; }
        if (todayOpened) setFrame(todayDoor, false);
        else setFrame(pastDoors, todayDoor > 0);
      }
      // the frame that a click on today's / the next door will show -> load it now
      function preloadNext() {
        if (TEST_MODE) {
          if (testCurrent < lastDoor) { var t = frameSrc(testCurrent + 1, true); preloadFrame(t.src); }
        } else if (!todayOpened && todayDoor > 0) {
          preloadFrame(frameSrc(todayDoor, false).src);
        }
      }
      showImage();
      preloadNext();
 
      // ===== Click logic =====
      // - today's door: first click opens the door (image swap) + shows its popup;
      //   after that it stays open (also after a reload) and a click shows the popup again
      //   – until the day is over
      // - past doors: shown open, not clickable
      // - future doors: not clickable
      // TEST MODE: the last opened door shows its popup again, the next door opens
 
      // day number right now (1 on 1 Dec) – the page may stay open past midnight
      function currentDay() {
        return dayOf(new Date());
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
              trackOpen(doorNum);
              if (window.AdventConfetti) window.AdventConfetti.burstAt(door, e);
              testCurrent = doorNum;
              saveTest();          // remember test progress for the next reload
              showImage();
              preloadNext();       // the next door's frame, for the next click
              updateDoorsTest();
              setTimeout(function () { openPopup(doorNum); }, 400);
            });
          } else if (isLast) {
            makeClickable(door, function (e) {
              // already opened -> popup again, not counted again
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
 
            if (window.AdventConfetti) window.AdventConfetti.burstAt(door, e);   // confetti on every click
 
            if (todayOpened) {                   // already opened today -> popup again (not counted again)
              openPopup(doorNum);
              return;
            }
 
            trackOpen(doorNum);                  // counted once per day
 
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
 
      // TEST label on the calendar, so it's never left on by mistake
      if (TEST_MODE || START_TEST) {
        var badge = document.createElement('div');
        badge.textContent = TEST_MODE ? 'TEST MODE' : 'TEST START ' + START;
        badge.style.cssText = 'position:absolute; top:8px; left:8px; z-index:20; padding:4px 8px; ' +
          'background:#000; color:#fff; font:600 12px/1.2 Poppins, sans-serif; border-radius:4px; pointer-events:none;';
        img.parentNode.appendChild(badge);
      }
 
      // ===== Mobile: open the LP at the calendar image =====
      // On phones the page starts scrolled so the calendar image is at the top of the
      // screen (only when there is no #anchor). A sticky / fixed shop header is taken
      // into account.
      // The position is held for a few seconds after loading, because images loading
      // above the calendar, the browser's own scroll restore or shop scripts can push
      // the page back to the top. As soon as the visitor touches / scrolls, we stop.
      // SCROLL_TARGET: optional CSS selector of the element that should be at the top
      // (empty = the calendar image).
      var SCROLL_TARGET = '';
      (function () {
        try {
          if (!window.matchMedia('(max-width: 600px)').matches) return;
          if (window.location.hash) return;
          if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
 
          var userMoved = false;
          ['touchstart', 'wheel', 'mousedown', 'keydown'].forEach(function (ev) {
            window.addEventListener(ev, function () { userMoved = true; }, { passive: true, once: true });
          });
 
          function headerHeight() {
            for (var el = document.elementFromPoint(window.innerWidth / 2, 1); el && el !== document.body; el = el.parentElement) {
              var pos = window.getComputedStyle(el).position;
              if (pos === 'fixed' || pos === 'sticky') {
                var h = el.getBoundingClientRect().bottom;
                return h > 0 && h < window.innerHeight / 2 ? h : 0;
              }
            }
            return 0;
          }
          function targetY() {
            var target = SCROLL_TARGET ? document.querySelector(SCROLL_TARGET) : document.getElementById('advent-wrapper');
            if (!target) return null;
            return Math.max(0, target.getBoundingClientRect().top + (window.pageYOffset || 0) - headerHeight());
          }
          function go() {
            if (userMoved) return;
            var y = targetY();
            if (y === null) return;
            if (Math.abs((window.pageYOffset || 0) - y) > 2) window.scrollTo(0, y);
          }
 
          go();                                                    // right away
          document.addEventListener('DOMContentLoaded', go);
          window.addEventListener('load', function () {
            go();
            // hold the position for 3 s (late images / scroll restore / shop scripts)
            [100, 300, 600, 1000, 1600, 2400].forEach(function (t) { setTimeout(go, t); });
            var until = Date.now() + 3000;
            window.addEventListener('scroll', function onScroll() {
              if (userMoved || Date.now() > until) { window.removeEventListener('scroll', onScroll); return; }
              go();
            }, { passive: true });
          });
        } catch (e) {}
      })();
 
      // Prevent image dragging on mobile
      img.addEventListener('dragstart', function (e) { e.preventDefault(); });
    })();
    </script>
  `;
 
  return InteractiveTopImage;
}