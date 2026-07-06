export const TimerScript = ({
    deadline,
    timezone,
    containerId = 'prolo-timer',
    dayLabel = 'days',
    hourLabel = 'h',
    minLabel = 'm',
    secLabel = 's',
}) => {
    // Build wallClock from deadline
    const wallClock = `${deadline}T23:59:00`;

    // Function to convert wall clock to UTC milliseconds
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

    // Calculate deadline in milliseconds
    const deadlineMs = wallClockToUtcMs(wallClock, timezone);

    // If invalid, return empty
    if (Number.isNaN(deadlineMs)) {
        return '';
    }

    // Escape any special characters in the labels to prevent XSS
    const escapeString = (str) => {
        return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    };

    const escapedDayLabel = escapeString(dayLabel);
    const escapedHourLabel = escapeString(hourLabel);
    const escapedMinLabel = escapeString(minLabel);
    const escapedSecLabel = escapeString(secLabel);

    return `
<script>
(function() {  
    var labels = [${JSON.stringify([escapedDayLabel, escapedHourLabel, escapedMinLabel, escapedSecLabel])}];
    var deadlineMs = ${deadlineMs};
    var containerId = "${containerId}";
    var state = window.__proloTimer = window.__proloTimer || {};
    if (state.intervalId) clearInterval(state.intervalId);

    function pad(num) { 
        return num < 10 ? '0' + num : num; 
    }
    
    function makeUnit(num, label) {
        return '<div class="unit"><div class="number">' + pad(num) + '</div><div class="label">' + label + '</div></div>';
    }

    function update() {
        var container = document.getElementById(containerId);
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

    // Initial update
    update();
    
    // Set interval
    state.intervalId = setInterval(update, 1000);
})();
</script>
    `;
};