// Konfiguracja główna
const SHOP_MAP = {
	CHDE: 1, CHFR: 1, UK: 2, DE: 3, FR: 7, AT: 8, ES: 10, PL: 12, NL: 17,
	BENL: 19, BEFR: 19, IT: 21, PT: 22, SE: 23, HU: 24, DK: 25, CZ: 26,
	FI: 27, NO: 28, SK: 29, RO: 30, HR: 33, SI: 34,
};

const NEW_COUNTRIES = ['HR', 'SI'];

const LP_ORDER = [
	'CHDE', 'CHFR', 'UK', 'DE', 'FR', 'AT', 'ES', 'PL', 'NL', 'BENL', 'BEFR',
	'PT', 'IT', 'SE', 'HU', 'DK', 'CZ', 'FI', 'NO', 'SK', 'RO', ...NEW_COUNTRIES
];

const NL_ORDER = [
	'CHDE', 'CHFR', 'AT', 'BENL', 'BEFR', 'CZ', 'DE', 'DK', 'FI', 'FR',
	'HR', 'HU', 'IT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'ES', 'UK'
];

const getCountries = (order, version) =>
	version === 'new' ? order : order.filter(c => !NEW_COUNTRIES.includes(c));

export function generateLpLinks(baseId, version = 'new', specialLpIds = null) {
	const SHARED_ID_COUNTRIES = ['CHFR', 'BEFR'];
	let countries = getCountries(LP_ORDER, version);

	// Upgrade zajebistej funkcji [*] Michała
	if (specialLpIds) {
		const extraCountries = Object.keys(specialLpIds).filter(c => !countries.includes(c));
		countries = [...countries, ...extraCountries];
	}

	const links = {};
	let currentId = Number(baseId);

	countries.forEach((country, index) => {
		if (index > 0 && !SHARED_ID_COUNTRIES.includes(country)) {
			currentId++;
		}

		const overrideId = specialLpIds?.[country];
		const id = overrideId ?? currentId;

		links[country] = `https://www.prologistics.info/shop_content.php?id=${id}&shop_id=${SHOP_MAP[country]}`;
	});

	return links;
}

export function generateNewsletterIds(baseId, version = 'new', customOrder = null) {
	const countries = customOrder || getCountries(NL_ORDER, version);
	const ids = {};
	let currentId = Number(baseId);

	countries.forEach(country => {
		ids[country] = currentId++;
	});

	return ids;
}