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
    const images = ${JSON.stringify(adventImages)};
    const img = document.getElementById('advent-img');
    const doors = document.querySelectorAll('.advent-door');
    if (!img || !doors.length) return;

    // ===== Date logic =====
    // All closed:  1 Dec 2026 00:00 → 23:59:59
    // open_1:      2 Dec 2026 00:00 → 23:59:59
    // open_2:      3 Dec 2026 00:00 → 23:59:59
    // open_3:      4 Dec 2026 00:00 → 23:59:59
    // open_4:      5 Dec 2026 00:00 → 23:59:59
    const start = new Date(2026, 11, 1); // 1 December 2026
    const now = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;

    let maxAllowed = Math.floor((now - start) / msPerDay);
    if (maxAllowed < 0) maxAllowed = 0;
    if (maxAllowed >= images.length) maxAllowed = images.length - 1;

    let current = maxAllowed;
    img.src = images[current];

    // ===== Click logic =====
    function updateDoors() {
      doors.forEach(door => {
        const doorNum = parseInt(door.dataset.door, 10);

        // Only the *next* door is active
        if (doorNum === current + 1 && doorNum < images.length) {
          door.style.pointerEvents = 'auto';
          door.style.cursor = 'pointer';
          door.onclick = function () {
            current = doorNum;
            img.src = images[current];
            updateDoors();
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
    img.addEventListener('dragstart', e => e.preventDefault());
  })();
  </script>
`;

return InteractiveTopImage;
}