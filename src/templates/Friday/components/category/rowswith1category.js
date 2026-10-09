import { Space } from '../Space.js';
import { Paragraph } from '../Paragraph.js';
 
// One category per row: full-width image, underneath the name (left) and the CTA (right) in one line.
 
const getSrc = (item) => {
	if (!item?.src) return '';
 
	return typeof item.src === 'object' ? item.src.src : item.src;
};
 
const getHref = ({ item, getCategoryLink, add_utm, fallbackHref }) => {
	const href = item?.href;
 
	if (!href) return fallbackHref ?? '#';
 
	if (typeof href === 'string') {
		// getCategoryLink returns a URL instance and already appends utm params for newsletters
		const translated = typeof getCategoryLink === 'function' ? getCategoryLink(href) : href;
 
		return String(translated ?? href);
	}
 
	const rawHref = href.href ?? '';
 
	return typeof add_utm === 'function' ? add_utm(rawHref) : rawHref;
};
 
const getName = ({ item, getCategoryTitle }) => {
	if (!item?.name) return '';
 
	const translated = typeof getCategoryTitle === 'function' ? getCategoryTitle(item.name) : item.name;
 
	return translated ?? item.name;
};
 
// Accepts a flat list ([{...}, {...}]) or rows ([[{...}], [{...}]]) – always rendered one per row
const toItems = (categories) =>
	(Array.isArray(categories) ? categories : [])
		.flatMap((entry) => (Array.isArray(entry) ? entry : [entry]))
		.filter(Boolean);
 
const renderHeading = ({ heading, queries, getPhrase, color, containerClass }) => {
	if (!heading) return '';
 
	const queryRow = heading.query ? queries?.[heading.query] : null;
	const fromQuery = Array.isArray(queryRow) ? queryRow[0] : queryRow;
	const text = heading.text ?? fromQuery ?? (heading.phrase ? getPhrase(heading.phrase) : undefined);
 
	if (!text) return '';
 
	return `
    ${heading.spaceBefore ? Space({ insideTr: true, className: heading.spaceBefore }) : ''}
    <tr>
      <td class="${heading.container ?? containerClass}" align="${heading.align ?? 'center'}">
        ${Paragraph({
		text,
		align: heading.align ?? 'center',
		className: heading.className ?? 'newsletterTitle',
		spanStyle: `color: ${heading.color ?? color}; ${heading.styles ?? ''}`,
	})}
      </td>
    </tr>
    ${Space({ insideTr: true, className: heading.spaceAfter ?? 'newsletterBottom35px' })}
  `;
};
 
export const render = ({
	category,
	color,
	container,
	categoryHref,
	queries,
	getCategoryLink,
	getCategoryTitle,
	getPhrase,
	add_utm,
}) => {
	const items = toItems(category?.categories);
 
	if (items.length === 0) return '';
 
	const containerClass = container ?? 'newsletterContainer';
	// px width for Outlook (width attribute) + image max-width; everywhere else the image is 100% fluid
	const inner = (category?.totalWidth ?? 650) - (category?.containerPadding ?? 20) * 2;
	const showText = category?.showTileText ?? true;
	const ctaText = showText
		? (category?.tileCta?.phrase ? getPhrase(category.tileCta.phrase) : getPhrase('Shop now'))
		: '';
	const nameColor = category?.tileNameColor ?? color ?? '#750000';
	const ctaColor = category?.tileCtaColor ?? color ?? '#000000';
	const ctaDecoration = category?.tileCtaUnderline ? 'underline' : 'none';
	const radius = category?.tileRadius ?? 0;
	const spaceBetweenRows = category?.spaceBetweenRows ?? 'newsletterBottom35px';
 
	let html = renderHeading({
		heading: category?.heading,
		queries,
		getPhrase,
		color,
		containerClass,
	});
 
	items.forEach((item, index) => {
		const isLast = index === items.length - 1;
		const href = getHref({ item, getCategoryLink, add_utm, fallbackHref: categoryHref });
		const name = getName({ item, getCategoryTitle });
		const src = getSrc(item);
 
		html += `
      <tr>
        <td class="${containerClass}">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="${inner}" style="width: 100%; max-width: ${inner}px;">
            <tr>
              <td style="padding: 0; line-height: 0; font-size: 0;" align="center">
                <a href="${href}" style="text-decoration: none; display: block; line-height: 0;"><img src="${src}" alt="${name}" width="${inner}" style="display: block; width: 100%; max-width: ${inner}px; height: auto; border: 0;${radius ? ` border-radius: ${radius}px;` : ''}" loading="lazy"></a>
              </td>
            </tr>
            ${showText ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
            <tr>
              <td>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                  <tr>
                    <td class="categoryListName" width="100%" align="left" valign="middle" style="padding: 0 12px 0 0; text-align: left; vertical-align: middle; mso-line-height-rule: at-least; word-break: break-word; overflow-wrap: break-word; color: ${nameColor};">
                      <a href="${href}" style="color: ${nameColor}; text-decoration: none;">${name}</a>
                    </td>
                    <td class="categoryListCta" align="right" valign="middle" style="padding: 0; text-align: right; vertical-align: middle; white-space: nowrap;mso-line-height-rule: at-least;">
                      <a href="${href}" style="white-space: nowrap; color: ${ctaColor}; text-decoration: ${ctaDecoration};">${ctaText}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            ` : ''}
          </table>
        </td>
      </tr>
    `;
 
		if (!isLast) {
			html += Space({ insideTr: true, className: spaceBetweenRows });
		}
	});
 
	return html;
};
 