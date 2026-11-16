import { Space } from '../Space.js';
import { Paragraph } from '../Paragraph.js';
 
const NAME_CTA_GAP = 6; // = right padding of the name cell
 
const textLength = (text) =>
	String(text ?? '')
		.replace(/<[^>]*>/g, '')
		.replace(/&[#a-z0-9]+;/gi, 'x')
		.trim().length;
 
const collides = ({ name, ctaText, width, nameSize, ctaSize, charWidth }) =>
	textLength(name) * nameSize * charWidth + NAME_CTA_GAP + textLength(ctaText) * ctaSize * charWidth > width;
 
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
 
	// one decision for the whole block (see the comment at the top)
	const names = items.map((item) => getName({ item, getCategoryTitle }));
	const stackMode = category?.tileTextStack ?? 'auto';
	const charWidth = category?.tileTextCharWidth ?? 0.6;
	const stackGap = category?.tileStackGap ?? 8;
 
	const anyCollision = ({ width, nameSize, ctaSize }) =>
		names.some((name) => collides({ name, ctaText, width, nameSize, ctaSize, charWidth }));
 
	const stackDesktop =
		showText &&
		(stackMode === 'always' ||
			(stackMode === 'auto' &&
				anyCollision({
					width: inner,
					nameSize: category?.tileNameFontSize ?? 30,
					ctaSize: category?.tileCtaFontSize ?? 30,
				})));
 
	const stackMobile =
		showText &&
		!stackDesktop &&
		stackMode === 'auto' &&
		anyCollision({
			width: category?.tileTextMobileWidth ?? 300,
			nameSize: category?.tileNameMobileFontSize ?? 18,
			ctaSize: category?.tileCtaMobileFontSize ?? 18,
		});
 
	// names wrap only between words, never inside a word
	const nameStyle = `text-align: left; mso-line-height-rule: at-least; word-break: normal; overflow-wrap: break-word; hyphens: manual; color: ${nameColor};`;
 
	const renderText = ({ href, name }) => {
		const nameLink = `<a href="${href}" style="color: ${nameColor}; text-decoration: none;">${name}</a>`;
 
		if (stackDesktop) {
			// name, CTA underneath - on desktop and mobile
			return `
                  <tr>
                    <td class="categoryListName" align="left" valign="top" style="padding: 0; vertical-align: top; ${nameStyle}">
                      ${nameLink}
                    </td>
                  </tr>
                  <tr>
                    <td class="categoryListCta" align="left" valign="top" style="padding: ${stackGap}px 0 0 0; text-align: left; vertical-align: top; mso-line-height-rule: at-least;">
                      <a href="${href}" style="color: ${ctaColor}; text-decoration: ${ctaDecoration};">${ctaText}</a>
                    </td>
                  </tr>`;
		}
 
		// name left + CTA right in one line; with stackMobile the mobile css stacks them
		return `
                  <tr>
                    <td class="categoryListName${stackMobile ? ' categoryListNameStack' : ''}" width="100%" align="left" valign="middle" style="padding: 0 ${NAME_CTA_GAP}px 0 0; vertical-align: middle; ${nameStyle}">
                      ${nameLink}
                    </td>
                    <td class="categoryListCta${stackMobile ? ' categoryListCtaStack' : ''}" align="right" valign="middle" style="padding: 0; text-align: right; vertical-align: middle; white-space: nowrap; mso-line-height-rule: at-least;">
                      <a href="${href}" style="white-space: nowrap; color: ${ctaColor}; text-decoration: ${ctaDecoration};">${ctaText}</a>
                    </td>
                  </tr>`;
	};
 
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
		const name = names[index];
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
                  ${renderText({ href, name })}
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