// NSLT: inline font-family on every element that holds text and has none - without it Word/Outlook ignores
// the <style> font and renders Times New Roman.

const FONT_FAMILY = "'Open Sans', sans-serif";

// opening tag of an element whose first child is text (not a tag / comment)
const TEXT_ELEMENT =
	/<(span|a|p|div|td|th|li|h[1-6]|strong|b|em|i|u|font|label|small|sup|sub|del|s|center)\b((?:[^>"']|"[^"]*"|'[^']*')*)>(?=\s*[^\s<])/gi;

// <style> / <script> bodies are not html
const RAW_BLOCK = /<(style|script)\b[^>]*>[\s\S]*?<\/\1>/gi;

const STYLE_ATTR = /(\sstyle\s*=\s*)(["'])([\s\S]*?)\2/i;

const addFont = (html) =>
	html.replace(TEXT_ELEMENT, (tag, name, attrs) => {
		const style = attrs.match(STYLE_ATTR);

		if (!style) return `<${name}${attrs} style="font-family:${FONT_FAMILY};">`;

		const [whole, prefix, quote, value] = style;
		if (/font-family\s*:/i.test(value)) return tag;

		// a single-quoted attribute can't hold 'Open Sans'
		const family = quote === "'" ? FONT_FAMILY.replace(/'/g, '"') : FONT_FAMILY;
		const newValue = `font-family:${family};${value.trim() ? ` ${value.trimStart()}` : ''}`;

		return `<${name}${attrs.replace(whole, `${prefix}${quote}${newValue}${quote}`)}>`;
	});

export const inlineFontFamily = (html) => {
	html = String(html ?? '');

	let output = '';
	let last = 0;

	for (const match of html.matchAll(RAW_BLOCK)) {
		output += addFont(html.slice(last, match.index)) + match[0];
		last = match.index + match[0].length;
	}

	return output + addFont(html.slice(last));
};
