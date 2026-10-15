// ============================================================
// Fully responsive Interactive Advent Calendar
// Landing Page only
// Popups come from the reusable ./advent-popup components
// ============================================================
import {
  AdventPopupStyles,
  AdventPopupScript,
  AdventPopups,
  AdventConditionsBox,
} from './advent-popup/index.js';
 
export function InteractiveHeroImage({ type }) {
  const isLanding = type === String(type).toLowerCase().includes('landing');
 
  const adventBase = 'https://pictureserver.net/static/2026/';
  const adventImages = [
    `${adventBase}advent_all_closed.webp?ver=11`, // 0 - all closed
    `${adventBase}advent_open_1.webp?ver=11`,     // 1
    `${adventBase}advent_open_2.webp?ver=11`,     // 2
    `${adventBase}advent_open_3.webp?ver=11`,     // 3
    `${adventBase}advent_open_4.webp?ver=11`,     // 4
    `${adventBase}advent_open_5.webp?ver=11`,     // 5
    `${adventBase}advent_open_6.webp?ver=11`,     // 6
    `${adventBase}advent_open_7.webp?ver=11`,     // 7
    `${adventBase}advent_open_8.webp?ver=11`,     // 8
    `${adventBase}advent_open_9.webp?ver=11`,     // 9
    `${adventBase}advent_open_10.webp?ver=11`,    // 10
    `${adventBase}advent_open_11.webp?ver=11`,    // 11
    `${adventBase}advent_open_12.webp?ver=11`,    // 12
    `${adventBase}advent_open_13.webp?ver=11`,    // 13
    `${adventBase}advent_open_14.webp?ver=11`,    // 14
    `${adventBase}advent_open_15.webp?ver=11`,    // 15
    `${adventBase}advent_open_16.webp?ver=11`,    // 16
    `${adventBase}advent_open_17.webp?ver=11`,    // 17
    `${adventBase}advent_open_18.webp?ver=11`,    // 18
    `${adventBase}advent_open_19.webp?ver=11`,    // 19
    `${adventBase}advent_open_20.webp?ver=11`,    // 20
  ];
 
  // ===== Shared popup texts (translate per country) =====
  const popupTexts = {
    onlyToday: 'Only today',
    seeConditions: 'See conditions',
    shopNow: 'Shop now',          // used by type 'special'
    conditionsTitle: 'Conditions:',
    copied: 'Copied!',
  };
 
  // ===== Popup per door (key = door number) =====
  // type: 'percent' | 'free' | 'buy4pay3' | 'cashback' | 'upto' | 'discount' | 'special'
  //  imageDesktop / imageMobile : popup images (plain rectangles, curve is drawn by CSS)
  //  link       : image + texts become a link (opens in new tab)
  //  headline   : 'special' only – "One day.<br />One special deal."
  //  pre        : line above the title ("Extra", "Textiles", "Today only:")
  //  title      : main deal (<br /> for a line break)
  //  subtitle   : "when you spend min. £200"
  //  code       : "Code: xxx" (or an array) -> copy button
  //  conditions : text shown below the calendar after "See conditions"
  // Full prop list of each type: ./advent-popup/<Type>Popup.js
  const adventPopups = {
    1: {
      type: 'upto',
      imageDesktop: `${adventBase}advent_popup_1_d.webp`,
      imageMobile: `${adventBase}advent_popup_1_m.webp`,
      link: 'https://www.beliani.co.uk/textiles/',
      pre: 'Textiles',
      title: 'up to<br />50% OFF',
      conditions: 'All items are subject to availability. All prices are subject to change without notification.',
    },
    2: {
      type: 'free',
      imageDesktop: `${adventBase}advent_popup_2_d.webp`,
      imageMobile: `${adventBase}advent_popup_2_m.webp`,
      title: 'Free table lamp',
      subtitle: 'when you spend min. £300',
      code: 'Code: 02advent26uk',
      conditions: 'Receive a free table lamp ... (conditions text)',
    },
    3: {
      type: 'cashback',
      imageDesktop: `${adventBase}advent_popup_1_d.webp`,
      imageMobile: `${adventBase}advent_popup_1_m.webp`,
      title: '£50<br />cashback',
      subtitle: 'when you shop for min. £150',
      code: 'Code: 03advent26uk',
      conditions: 'Use the code 03advent26uk ... (conditions text)',
    },
    18: {
      type: 'percent',
      imageDesktop: `${adventBase}advent_popup_2_d.webp`,
      imageMobile: `${adventBase}advent_popup_2_m.webp`,
      pre: 'Extra',
      title: '10% OFF',
      subtitle: 'when you spend £500',
      code: 'Code: 18advent26uk',
      conditions: '...',
    },
    19: {
      type: 'upto',
      imageDesktop: `${adventBase}advent_popup_1_d.webp`,
      imageMobile: `${adventBase}advent_popup_1_m.webp`,
      link: 'https://www.beliani.co.uk/rugs/',
      pre: 'Rugs',
      title: 'Up to<br />50% OFF',
      conditions: '...',
    },
  };
 
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
            top: 11%;
            width: 14%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 1"></div>
          <!-- Door 2 -->
          <div class="advent-door" data-door="2" style="
            position: absolute;
            left: 44%;
            top: 22%;
            width: 12%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 2"></div>
          <!-- Door 3 -->
          <div class="advent-door" data-door="3" style="
            position: absolute;
            left: 56%;
            top: 22%;
            width: 14%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 3"></div>
          <!-- Door 4 -->
          <div class="advent-door" data-door="4" style="
            position: absolute;
            left: 46%;
            top: 37%;
            width: 10%;
            height: 7%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 4"></div>
          <!-- Door 5 -->
          <div class="advent-door" data-door="5" style="
            position: absolute;
            left: 46%;
            top: 30%;
            width: 10%;
            height: 7%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 5"></div>
          <!-- Door 6 -->
          <div class="advent-door" data-door="6" style="
            position: absolute;
            left: 68%;
            top: 32%;
            width: 7%;
            height: 8%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 6"></div>
          <!-- Door 7 -->
          <div class="advent-door" data-door="7" style="
            position: absolute;
            left: 57%;
            top: 30%;
            width: 11%;
            height: 14%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 7"></div>
          <!-- Door 8 -->
          <div class="advent-door" data-door="8" style="
            position: absolute;
            left: 21%;
            top: 46%;
            width: 24%;
            height: 12%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 8"></div>
          <!-- Door 9 -->
          <div class="advent-door" data-door="9" style="
            position: absolute;
            left: 59%;
            top: 46%;
            width: 17%;
            height: 13%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 9"></div>
          <!-- Door 10 -->
          <div class="advent-door" data-door="10" style="
            position: absolute;
            left: 46%;
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
            top: 63%;
            width: 6%;
            height: 6%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 11"></div>
          <!-- Door 12 -->
          <div class="advent-door" data-door="12" style="
            position: absolute;
            left: 59%;
            top: 17%;
            width: 17%;
            height: 12%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 12"></div>
          <!-- Door 13 -->
          <div class="advent-door" data-door="13" style="
            position: absolute;
            left: 6%;
            top: 80%;
            width: 17%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 13"></div>
          <!-- Door 14 -->
          <div class="advent-door" data-door="14" style="
            position: absolute;
            left: 42%;
            top: 58%;
            width: 17%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 14"></div>
          <!-- Door 15 -->
          <div class="advent-door" data-door="15" style="
            position: absolute;
            left: 60%;
            top: 59%;
            width: 16%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 15"></div>
          <!-- Door 16 -->
          <div class="advent-door" data-door="16" style="
            position: absolute;
            left: 6%;
            top: 70%;
            width: 17%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 16"></div>
          <!-- Door 17 -->
          <div class="advent-door" data-door="17" style="
            position: absolute;
            left: 59%;
            top: 80%;
            width: 18%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 17"></div>
          <!-- Door 18 -->
          <div class="advent-door" data-door="18" style="
            position: absolute;
            left: 43%;
            top: 69%;
            width: 15%;
            height: 9%;
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
            left: 78%;
            top: 70%;
            width: 17%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 20"></div>
          <!-- Door 21 -->
          <div class="advent-door" data-door="21" style="
            position: absolute;
            left: 24%;
            top: 80%;
            width: 17%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 21"></div>
          <!-- Door 22 -->
          <div class="advent-door" data-door="22" style="
            position: absolute;
            left: 59%;
            top: 70%;
            width: 18%;
            height: 10%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 22"></div>
          <!-- Door 23 -->
          <div class="advent-door" data-door="23" style="
            position: absolute;
            left: 42%;
            top: 80%;
            width: 17%;
            height: 11%;
            cursor: pointer;
            z-index: 10;
          " title="Open door 23"></div>
          <!-- Door 24 -->
          <div class="advent-door" data-door="24" style="
            position: absolute;
            left: 78%;
            top: 80%;
            width: 17%;
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
        ${AdventConditionsBox()}
        ${AdventPopups({ popups: adventPopups, texts: popupTexts })}
        ${AdventPopupScript()}
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
            door.onclick = function () {
              track('Click', 'Page', 'PopUp');

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