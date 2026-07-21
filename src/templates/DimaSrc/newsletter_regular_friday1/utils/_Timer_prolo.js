import { Timer } from '../components/ProloTimer';
import languages from "@config/languages"


let languagesMap = {
  ...languages,
  // "HU":
  // {
  //   ...languages.HU,
  //   title: "hungarian"
  // },
}

export const timezones = {
  "CHDE": "Europe/Zurich",
  "CHFR": "Europe/Zurich",
  "FR": "Europe/Paris",
  "DE": "Europe/Berlin",
  "UK": "Europe/London",
  "AT": "Europe/Vienna",
  "ES": "Europe/Madrid",
  "PL": "Europe/Warsaw",
  "NL": "Europe/Amsterdam",
  "PT": "Europe/Lisbon",
  "IT": "Europe/Rome",
  "SE": "Europe/Stockholm",
  "HU": "Europe/Budapest",
  "DK": "Europe/Copenhagen",
  "CZ": "Europe/Prague",
  "FI": "Europe/Helsinki",
  "NO": "Europe/Oslo",
  "SK": "Europe/Bratislava",
  "BENL": "Europe/Brussels",
  "BEFR": "Europe/Brussels",
  "RO": "Europe/Bucharest"
}

export const labels = {
  "CHDE": ["Tage", "Std.", "Min.", "Sek."],
  "CHFR": ["jours", "h", "min", "s"],
  "FR": ["jours", "h", "min", "s"],
  "DE": ["Tage", "Std.", "Min.", "Sek."],
  "UK": ["days", "h", "m", "s"],
  "AT": ["Tage", "Std.", "Min.", "Sek."],
  "ES": ["días", "h", "min", "s"],
  "PL": ["dni", "h", "min", "s"],
  "NL": ["dagen", "uren", "minuten", "seconden"],
  "PT": ["Dias", "h", "min", "s"],
  "IT": ["giorni", "h", "m", "s"],
  "SE": ["dagar", "h", "min", "s"],
  "HU": ["nap", "óra", "perc", "másodperc"],
  "DK": ["dage", "t", "min", "s"],
  "CZ": [
    "dnů",
    "hod.",
    "min.",
    "s"
  ],
  "FI": [
    "päivää",
    "tuntia",
    "minuuttia",
    "sekuntia"
],
  "NO": ["dager", "t", "min", "s"],
  "SK": ["dní", "hod.", "min.", "s"],
  "BENL": ["dagen", "uren", "minuten", "seconden"],
  "BEFR": ["jours", "h", "min", "s"],
  "RO": ["zile", "h", "m", "s"],
  HR: [
    "dani",
    "sati",
    "min.",
    "s"
]
}

const buildProloTimerScript = ({ deadline, country }) => {
  const timerLabels = labels[country] ?? labels.UK;
  const timezone = timezones[country];

  const wallClock = `${deadline}T23:59:00`;

  function wallClockToUtcMs(wc, tz) {
    const match = wc.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/);
    if (!match) return NaN;

    const utcGuess = Date.UTC(+match[1], +match[2] - 1, +match[3], +match[4], +match[5], +(match[6] || 0));
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).formatToParts(new Date(utcGuess));

    const lookup = {};
    for (const part of parts) {
      if (part.type !== 'literal') lookup[part.type] = part.value;
    }

    if (lookup.hour === '24') lookup.hour = '00';

    const asUtc = Date.UTC(
      +lookup.year,
      +lookup.month - 1,
      +lookup.day,
      +lookup.hour,
      +lookup.minute,
      +lookup.second
    );

    return utcGuess + (utcGuess - asUtc);
  }

  const deadlineMs = wallClockToUtcMs(wallClock, timezone);

  if (Number.isNaN(deadlineMs)) {
    return '';
  }

  return `
    <script>
      (function () {
          var labels = ${JSON.stringify(timerLabels)};
          var deadlineMs = ${deadlineMs};
          var state = window.__proloTimerProlo = window.__proloTimerProlo || {};
          if (state.intervalId) clearInterval(state.intervalId);

          function pad(num) { return num < 10 ? '0' + num : num; }
          function makeUnit(num, label) {
              return '<div class="unit"><div class="number">' + pad(num) + '</div><div class="label">' + label + '</div></div>';
          }

          function update() {
              var container = document.getElementById('prolo-timer');
              if (!container) return;

              var diff = deadlineMs - Date.now();
              if (diff <= 0) diff = 0;
              var days = Math.floor(diff / 86400000);
              var hours = Math.floor((diff / 3600000) % 24);
              var minutes = Math.floor((diff / 60000) % 60);
              var seconds = Math.floor((diff / 1000) % 60);
              container.innerHTML =
                  makeUnit(days, labels[0]) +
                  makeUnit(hours, labels[1]) +
                  makeUnit(minutes, labels[2]) +
                  makeUnit(seconds, labels[3]);
          }

          update();
          state.intervalId = setInterval(update, 1000);
      })();
    </script>
  `;
};

export const TimerHandler = ({ Inside, queries, links, timer, shopNow, country, type, shop }) => {
  if (["HR", "SI"].includes(country)) return '';

  console.log("timerhandler", Inside, queries, links, timer, shopNow, country, type, shop)

  const base = (shop?.origin ?? 'https://prologistics.info') + '/timer.gif';

  let link = base + `?deadline=${timer.deadline}T23:59:00` +
    `&timezone=${timezones[country]}` +
    // in prolo timer generator pt uses "portugal" instead of portugese
    `&lang=${shop.slug === "PT" ? "portugal" : languagesMap[country]?.title}` +
    `&bg=${(Inside.unitBackground || Inside.backgroundColor).replace('#', '')}` +
    `&color=${Inside.color.replace('#', '')}` +
    `&label=${Inside.color.replace('#', '')}` +
    `&background=${Inside.backgroundColor.replace('#', '')}`
  // + `&uid=USER_ID`

  const freebies = timer?.overrides?.[country] ? getImageUrl(timer.overrides[country], true) : timer?.freebies;

  return Inside && Inside.type === 'timer'
    ? Timer({
      title: queries?.timer?.[0] ?? 'Translation not found',
      subtitle: queries?.timer?.[1] ?? 'Translation not found',
      href: links?.Timer_href,
      src: link,
      color: Inside.color,
      background: Inside.backgroundColor,
      unitBackground: Inside.unitBackground,
      freebies: freebies,
      ctaText: shopNow,
      type: type,
      script: buildProloTimerScript({ deadline: timer.deadline, country }),
    })
    : '';
};
