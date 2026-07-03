export const COUNTRY_CONFIG = {
  'CHDE': {
    timezone: 'Europe/Zurich',
    lang: 'german',
  },
  'DE': {
    timezone: 'Europe/Berlin',
    lang: 'german',
  },
  'AT': {
    timezone: 'Europe/Vienna',
    lang: 'german',
  },
  'FR': {
    timezone: 'Europe/Paris',
    lang: 'french',
  },
  'CHFR': {
    timezone: 'Europe/Zurich',
    lang: 'french',
  },
  'IT': {
    timezone: 'Europe/Rome',
    lang: 'italian',
  },
  'ES': {
    timezone: 'Europe/Madrid',
    lang: 'spanish',
  },
  'PT': {
    timezone: 'Europe/Lisbon',
    lang: 'portugal',
  },
  'NL': {
    timezone: 'Europe/Amsterdam',
    lang: 'dutch',
  },
  'BENL': {
    timezone: 'Europe/Brussels',
    lang: 'dutch',
  },
  'BEFR': {
    timezone: 'Europe/Brussels',
    lang: 'french',
  },
  'UK': {
    timezone: 'Europe/London',
    lang: 'english',
  },
  'GB': {
    timezone: 'Europe/London',
    lang: 'english',
  },
  'DK': {
    timezone: 'Europe/Copenhagen',
    lang: 'danish',
  },
  'NO': {
    timezone: 'Europe/Oslo',
    lang: 'norsk',
  },
  'FI': {
    timezone: 'Europe/Helsinki',
    lang: 'finnish',
  },
  'SE': {
    timezone: 'Europe/Stockholm',
    lang: 'swedish',
  },
  'PL': {
    timezone: 'Europe/Warsaw',
    lang: 'polish',
  },
  'CZ': {
    timezone: 'Europe/Prague',
    lang: 'czech',
  },
  'SK': {
    timezone: 'Europe/Bratislava',
    lang: 'slovak',
  },
  'HU': {
    timezone: 'Europe/Budapest',
    lang: 'Hungarian',
  },
  'RO': {
    timezone: 'Europe/Bucharest',
    lang: 'romanian',
  },
};

// Default config
const DEFAULT_CONFIG = {
  timezone: 'Europe/Warsaw',
  lang: 'english',
};
export const getCountryConfig = (country) => {
  return COUNTRY_CONFIG[country] || DEFAULT_CONFIG;
};

/**
 * Create a self-contained timer object
 * Everything derives from the country and campaign settings
 */
export const createTimer = ({
  deadline = '2026-07-10T23:59:00',
  freebies = null,
  background = '#FD9000',      // Timer section background
  color = '#ffffff',           // Timer section text color
  timerBg = '#000000',         // Timer number background
  timerColor = '#ffffff',      // Timer number color
  timerLabel = '#000000',      // Timer label color
  isCtaVisible = true,
  isWithTitles = true,
  position = 'outsideTopImageTitle',
  overrides = {},
}) => {
  console.log(timerBg, timerColor, timerLabel)
  return {
    // Position in template
    position,
    
    // Content
    freebies,
    isCtaVisible,
    isWithTitles,
    background,      // Timer section background
    color,           // Timer section text color
    
    // Timer appearance settings
    timerBg,         // Timer number background
    timerColor,      // Timer number color
    timerLabel,      // Timer label color
    
    // Timer settings
    deadline,
    overrides,
    
    // Helper method to get country-specific config at render time
    getConfig: (country) => {
      const countryConfig = getCountryConfig(country);
      return {
        ...countryConfig,
        ...(overrides[country] || {}),
      };
    },
    
    // Helper method to get timer GIF URL
    getGifUrl: (country, uid = 'USER_ID') => {
      const config = this.getConfig(country);
      return `https://www.prologistics.info/timer.gif?deadline=${config.deadline || deadline}&timezone=${encodeURIComponent(config.timezone)}&lang=${config.lang}&bg=${(overrides[country]?.timerBg || timerBg).replace('#', '')}&color=${(overrides[country]?.timerColor || timerColor).replace('#', '')}&label=${(overrides[country]?.timerLabel || timerLabel).replace('#', '')}&background=${background.replace('#', '')}&uid=${uid}`;
    },
    
    // Helper method to get HTML timer
    getHtmlTimer: (country, labels, containerId) => {
      const config = this.getConfig(country);
      const [dayLabel, hourLabel, minLabel, secLabel] = labels;
      const bg = overrides[country]?.timerBg || timerBg;
      const color = overrides[country]?.timerColor || timerColor;
      const label = overrides[country]?.timerLabel || timerLabel;
      
      return `
      style>
      #${containerId} {
        --timer-bg: ${bg};
        --timer-numbers: ${color};
        --timer-label: ${label};
        max-width: 400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: clamp(8px, 3vw, 16px);
        font-family: "Poppins", sans-serif;
        font-size: clamp(14px, 2.5vw, 18px);
      }
      #${containerId} .unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        min-width: 0;
      }
      #${containerId} .unit .number {
        background: var(--timer-bg);
        color: var(--timer-numbers);
        font-size: clamp(28px, 8vw, 48px);
        font-weight: 700;
        width: 100%;
        aspect-ratio: 4 / 3;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        max-width: 100px;
      }
      #${containerId} .unit .label {
        color: var(--timer-label);
        font-size: clamp(11px, 2vw, 14px);
        margin-top: clamp(2px, 1vw, 4px);
      }
    </style>
<div id="${containerId}">Loading...</div>
<script>
(function() {
    var wallClock = "${config.deadline || deadline}";
    var timezone = "${config.timezone}";
    var containerId = "${containerId}";
    var dayLabel = "${dayLabel}";
    var hourLabel = "${hourLabel}";
    var minLabel = "${minLabel}";
    var secLabel = "${secLabel}";
    
    function wallClockToUtcMs(wc, tz) {
        var m = wc.match(/^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2})(?::(\\d{2}))?$/);
        if (!m) return NaN;
        var utcGuess = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0));
        var parts = new Intl.DateTimeFormat('en-CA', {
            timeZone: tz,
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
        }).formatToParts(new Date(utcGuess));
        var lookup = {};
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].type !== 'literal') lookup[parts[i].type] = parts[i].value;
        }
        if (lookup.hour === '24') lookup.hour = '00';
        var asUtc = Date.UTC(+lookup.year, +lookup.month - 1, +lookup.day,
            +lookup.hour, +lookup.minute, +lookup.second);
        return utcGuess + (utcGuess - asUtc);
    }
    
    var deadlineMs = wallClockToUtcMs(wallClock, timezone);
    var container = document.getElementById(containerId);
    
    function pad(num) { return num < 10 ? "0" + num : num; }
    function makeUnit(num, label) {
        return '<div class="unit"><div class="number">' + pad(num) + '</div><div class="label">' + label + '</div></div>';
    }
    
    function update() {
        var diff = deadlineMs - Date.now();
        if (diff <= 0) diff = 0;
        var days = Math.floor(diff / 86400000);
        var hours = Math.floor((diff / 3600000) % 24);
        var minutes = Math.floor((diff / 60000) % 60);
        var seconds = Math.floor((diff / 1000) % 60);
        container.innerHTML =
            makeUnit(days, dayLabel) +
            makeUnit(hours, hourLabel) +
            makeUnit(minutes, minLabel) +
            makeUnit(seconds, secLabel);
    }
    
    update();
    setInterval(update, 1000);
})();
</script>
      `;
    },
  };
};