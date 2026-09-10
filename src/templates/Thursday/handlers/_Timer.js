import { Timer } from '../components/Timer';
import { Space } from '../components/Space';
import languages from "@config/languages"

const buildProloTimerScript = ({ deadline, timezone, timerLabels }) => {
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

export const TimerHandler = async ({
	Inside,
	queries,
	links,
	timer,
	shopNow,
	country,
	type,
	shop,
	getProductById,
	getProductId,
	getCategoryLink,
	getPhrase,
	add_utm,
}) => {
	if (!Inside || Inside.type !== 'timer' || !timer?.deadline) {
		return '';
	}

	const timezone = getPhrase('timer-timezone');
	const timerLabels = [
		getPhrase('timer-days'),
		getPhrase('timer-hours'),
		getPhrase('timer-minutes'),
		getPhrase('timer-seconds'),
	];

	const base = (shop?.origin ?? 'https://prologistics.info') + '/timer.gif';

	let link =
		base +
		`?deadline=${timer.deadline}T23:59:00` +
		`&timezone=${timezone}` +
		// in prolo timer generator pt uses "portugal" instead of portugese
		`&lang=${shop?.slug === 'PT' ? 'portugal' : languages[country]?.title}` +
		`&bg=${(Inside.unitBackground || Inside.backgroundColor).replace('#', '')}` +
		`&color=${Inside.color.replace('#', '')}` +
		`&label=${Inside.color.replace('#', '')}` +
		`&background=${Inside.backgroundColor.replace('#', '')}`;
	// + `&uid=USER_ID`

	const fetchProduct = getProductById || getProductId;

	const enrichProductEntry = async (product) => {
		try {
			if (!product) return null;
			if (typeof product === 'string') return product;

			let normalizedHref =
				product.href && typeof getCategoryLink === 'function' ? getCategoryLink(product.href) : product.href;
			if (normalizedHref && typeof add_utm === 'function') {
				normalizedHref = add_utm(normalizedHref);
			}

			const imgSrc =
				typeof product.src === 'object' && product.src !== null ? product.src.src : product.src;

			if (product.id && typeof fetchProduct === 'function') {
				const useDescription = product.useDescription ?? timer?.useDescription ?? true;
				const productData = await fetchProduct(product.id, imgSrc, { useDescription, ...product?.options });
				if (productData) {
					let finalHref = normalizedHref || productData.href;
					if (finalHref && typeof add_utm === 'function') {
						finalHref = add_utm(finalHref);
					}
					return {
						...product,
						...productData,
						description: productData.description || product.description,
						src: imgSrc || productData.src,
						href: finalHref,
					};
				}
			}

			return {
				...product,
				src: imgSrc,
				href: normalizedHref || product.href,
			};
		} catch (err) {
			console.error('getProductById error for freebie in TimerHandler', product, err);
			return null;
		}
	};

	let freebies = null;

	if (timer?.freebies) {
		if (Array.isArray(timer.freebies)) {
			const enriched = await Promise.all(
				timer.freebies.map((product) => enrichProductEntry(product))
			);
			freebies = enriched.filter(Boolean);
		} else if (typeof timer.freebies === 'string') {
			freebies = timer.freebies;
		} else if (timer.freebies?.src && !timer.freebies.id) {
			freebies = typeof timer.freebies.src === 'object' ? timer.freebies.src.src : timer.freebies.src;
		} else if (timer.freebies?.id) {
			const enriched = await enrichProductEntry(timer.freebies);
			freebies = enriched ? [enriched] : null;
		}
	}

	let freeText = getPhrase('Free')
	const freebiesTitle = getPhrase('Your free gifts');

	return Inside && Inside.type === 'timer'
		? `
    ${Inside.spaceBefore ? Space({ insideTr: true, className: Inside.spaceBefore }) : ''}

    ${Timer({
			title: queries?.timer?.[0] ?? 'Translation not found',
			subtitle: queries?.timer?.[1] ?? 'Translation not found',
			href: links?.Timer_href,
			src: link,
			color: Inside.color,
			background: Inside.backgroundColor,
			unitBackground: Inside.unitBackground,
			freebies,
			freebiesTitle,
			freebiesBackground: timer?.freebiesBackground,
			freebiesTitleColor: timer?.freebiesTitleColor,
			freebiesFreeColor: timer?.freebiesFreeColor,
			freebiesTextColor: timer?.freebiesTextColor,
			freeText,
			ctaText: shopNow,
			type: type,
			script: buildProloTimerScript({ deadline: timer.deadline, timezone, timerLabels }),
		})}
      `
		: '';
};
