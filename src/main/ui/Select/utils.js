export function normalizeOptions(options) {
	if (!Array.isArray(options)) return [];
	return options.map((opt) => {
		if (typeof opt === 'object' && opt !== null) {
			return {
				value: opt.value !== undefined ? opt.value : opt.id,
				label: opt.label !== undefined ? opt.label : opt.text !== undefined ? opt.text : String(opt.value),
				subtitle: opt.subtitle,
				badge: opt.badge,
				disabled: Boolean(opt.disabled),
				isFavorite: Boolean(opt.isFavorite),
				original: opt,
			};
		}
		return {
			value: opt,
			label: String(opt),
			disabled: false,
			isFavorite: false,
			original: opt,
		};
	});
}

export function isDateBadge(badge) {
	return typeof badge === 'string' && /^\d{2}\.\d{2}\.\d{4}$/.test(badge.trim());
}

export function formatTriggerText(selectedOption) {
	if (!selectedOption) return '';
	const isDate = isDateBadge(selectedOption.badge);
	if (isDate && selectedOption.badge) {
		return `${selectedOption.label} - ${selectedOption.badge}`;
	}
	return selectedOption.label;
}
