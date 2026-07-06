export const TimerScript = ({
    deadline,
    timezone,
    containerId = 'prolo-timer',
    dayLabel = 'days',
    hourLabel = 'h',
    minLabel = 'm',
    secLabel = 's',
}) => {
    // Escape any special characters in the labels to prevent XSS
    const escapeString = (str) => {
        return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    };

    return `
  <script>
  (function() {
      'use strict';
      
      var wallClock = "${deadline}";
      var timezone = "${timezone}";
      var containerId = "${containerId}";
      var dayLabel = "${escapeString(dayLabel)}";
      var hourLabel = "${escapeString(hourLabel)}";
      var minLabel = "${escapeString(minLabel)}";
      var secLabel = "${escapeString(secLabel)}";
      
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
      
      if (!container) {
          console.warn('Timer container not found:', containerId);
          return;
      }
      
      function pad(num) { 
          return num < 10 ? "0" + num : num; 
      }
      
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
      
      // Initial update
      update();
      
    setInterval(update, 1000);
  })();
  </script>
    `;
};