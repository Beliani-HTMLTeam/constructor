import { CTA } from '../CTA.js';
import { Line } from '../Line.js';
import { Space } from '../Space.js';

// Measure while building the email; email clients never execute this code.
const fitCategoryRow = (subtitle, cta, options, width) => {
  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
  const context = canvas?.getContext('2d');
  const measure = (html, weight) => {
    const element = typeof document !== 'undefined' ? document.createElement('div') : null;
    if (element) element.innerHTML = html;
    const text = (element?.textContent ?? html.replace(/<[^>]*>/g, '')).trim();
    if (!context) return Array.from(text).length * 24;
    // Arial is also the Outlook fallback. Allow a little extra room for font differences.
    context.font = `${weight} 24px Arial`;
    const fallbackWidth = context.measureText(text).width;
    context.font = `${weight} 24px "Open Sans", Arial, sans-serif`;
    return Math.ceil(Math.max(fallbackWidth, context.measureText(text).width) * 1.12);
  };
  const left = options.showSubtitle ? measure(subtitle, options.subtitleWeight ?? 400) : 0;
  const right = options.showCta ? measure(cta, 400) : 0;
  const gap = left && right ? 24 : 0;
  const total = Math.max(1, left + right);
  const leftPercent = Math.max(1, Math.min(99, Math.round(left / total * 100)));
  // Below 14px, allow wrapping instead of making long translations unreadable.
  const fit = (available) => {
    const scale = left && right
      ? Math.min((available * leftPercent / 100 - gap) / left, (available * (100 - leftPercent) / 100) / right)
      : available / total;
    return Math.max(14, Math.min(24, Math.floor(24 * scale)));
  };
  return {
    desktop: fit(width),
    mobile: fit(Math.min(width, 280)),
    left: leftPercent,
    gap,
  };
};

export const getCategoryRowFit = (category, id, queries, getPhrase, renderType) => {
  const options = category.options ?? {};
  if (category.type !== 'category-banner' || options.displayType !== 'withSubtitle' ||
      !options.autoFitSubtitleCta ||
      (!options.showSubtitle && !options.showCta)) return null;
  const subtitle = String(queries?.category_subtitle?.[id] ?? 'TRANSLATION NOT FOUND');
  const cta = category.ctaText ?? category.cta?.text ?? getPhrase(category.cta?.phrase ?? 'Shop now');
  // withSubtitle banners have 20px container padding on each side.
  return fitCategoryRow(subtitle, cta, options, 610);
};

export const getCategoryRowSizes = (categories, queries, getPhrase, renderType) =>
  categories.reduce((sizes, category, id) => {
    const fitted = getCategoryRowFit(category, id, queries, getPhrase, renderType);
    return fitted ? {
      desktop: Math.min(sizes.desktop, fitted.desktop),
      mobile: Math.min(sizes.mobile, fitted.mobile),
    } : sizes;
  }, { desktop: 24, mobile: 24 });

// Category data is already translated by CategoriesHandler.
export const render = ({ category, id, queries, href, ctaHref, getPhrase, renderType, options = {}, sharedRowSizes }) => {
  console.log(renderType);
  const background = category.background ?? '#FAF1F0';
  const color = category.color ?? '#000000';
  const title = category.name ?? '';
  const titlePosition = category.title?.position ?? 'afterImg';
  const ctaPosition = category.cta?.position ?? category.ctaPosition ?? 'afterImg';
  const showTitle = category.title?.show !== false;
  const showCta = category.cta !== false;
  const ctaText = category.ctaText ?? category.cta?.text ?? getPhrase(category.cta?.phrase ?? 'Shop now');
  const container = category.insideContainer !== false;
  const imageWidth = container ? 610 : 650;

  const renderText = (position) => {
    const hasTitle = showTitle && titlePosition === position;
    const hasCta = showCta && ctaPosition === position;
    if (!hasTitle && !hasCta) return '';
    return `<tr><td>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;">
      <tr>
        ${
          hasTitle
            ? `<td width="${hasCta ? '70%' : '100%'}" valign="top" align="${category.title?.align ?? 'left'}" class="categoryBannerTitle" style="font-size:30px;line-height:1.2;font-weight:600;overflow-wrap:anywhere;color:${color};">${title}</td>`
            : ''
        }
        ${
          hasCta
            ? `<td width="${hasTitle ? '30%' : '100%'}" align="${category.cta?.align ?? 'right'}" valign="top"><a class="categoryBannerCta" href="${ctaHref}" style="display:inline-block;vertical-align:top;font-size:20px;line-height:1.2;overflow-wrap:anywhere;text-decoration:underline;color:${category.cta?.color ?? color};">${ctaText}</a></td>`
            : ''
        }
      </tr>
      ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
    </table>
  </td></tr>
  ${hasCta && category.line?.show ? Line({ insideTr: true, src: category.line.src }) : ''}`;

  };

  if (options?.displayType === undefined || options?.displayType === 'noSubtitle')
    return `<tr><td${container ? ' class="newsletterContainer"' : ''} bgcolor="${background}" style="background-color:${background};">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;${renderType === 'newsletter' ? "font-family: 'Open Sans', Arial, sans-serif;" : ''}">
        ${renderText('beforeImg')}
        ${category.src ? `<tr><td style="font-size:0;line-height:0;mso-line-height-rule:exactly;"><a href="${href}" style="display:block;text-decoration:none;"><img src="${category.src}" alt="${title}" width="${imageWidth}" border="0" style="display:block;width:100%;max-width:${imageWidth}px;height:auto;border:0;background-color:${background};-ms-interpolation-mode:bicubic;"></a></td></tr>` : ''}
        ${renderText('afterImg')}
        ${category.spaceAfter === 0 ? '' : Space({ insideTr: true, className: category.spaceAfter ?? 'newsletterBottom35px' })}
      </table>
    </td></tr>`;

  if (options?.displayType === 'withSubtitle') {
    const subtitle = String(queries?.category_subtitle?.[id] ?? 'TRANSLATION NOT FOUND');
    const rowFit = getCategoryRowFit({ ...category, options }, id, queries, getPhrase, renderType);
    const fitted = rowFit ? { ...rowFit, ...(sharedRowSizes ?? {}) } : null;
    const fittedStyle = fitted
      ? `font-family:'Open Sans',Arial,sans-serif;font-size:${fitted.desktop}px;line-height:1.2;word-wrap:break-word;overflow-wrap:anywhere;`
      : '';
    const fittedClass = fitted ? `categoryRowMobile${fitted.mobile}` : '';

    return `
    <tr>
      <td align="left" bgcolor="${background}" style="background-color:${background};">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
          ${
            category.src
              ? `
              <tr>
                <td style="font-size:0;line-height:0;mso-line-height-rule:exactly;">
                  <a href="${href}" style="display:block;text-decoration:none;">
                    <img src="${category.src}" alt="${title}" width="${imageWidth}" border="0" style="display:block;width:100%;max-width:${imageWidth}px;height:auto;border:0;background-color:${background};-ms-interpolation-mode:bicubic;">
                  </a>
                </td>
              </tr>
            `
              : ''
          }
          ${
            options?.showTitle
              ? `
            ${Space({ insideTr: true, className: 'newsletterBottom20px', bg: background })}
            <tr>
              <td class="newsletterContainer">
                <table cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                  <tr>
                    <td class="${options?.titleClass ? options.titleClass : 'shopByCategoryPeakName'}" style="color:${options?.titleColor ?? '#000000'};${options?.titleWeight ? `font-weight:${options.titleWeight};` : ''}${options?.titleUpperCase === true ? 'text-transform:uppercase;' : ''}" align="left">
                      ${title}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>`
              : ''
          }
          ${
            options?.showSubtitle || options?.showCta
              ? `
            ${Space({ insideTr: true, className: 'newsletterBottom10px', bg: background })}
            <tr>
              <td class="newsletterContainer">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                  <tr>
                    ${
                      options?.showSubtitle
                        ? `
                      <td ${fitted ? `width="${options.showCta ? fitted.left : 100}%"` : ''} class="${fitted ? fittedClass : options?.subtitleClass ?? 'shopByCategoryPeakName'}" align="left" valign="top" style="color:${options?.subtitleColor ?? '#000000'};${options?.subtitleWeight ? `font-weight:${options.subtitleWeight};` : ''}width:${options.showCta ? fitted.left : 100}%;${fittedStyle}">
                        ${fitted?.gap ? `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;"><tr><td class="${fittedClass}" style="${fittedStyle}color:${options.subtitleColor ?? '#000000'};font-weight:${options.subtitleWeight ?? 400};padding-right:${fitted.gap}px;">${subtitle}</td></tr></table>` : subtitle}
                      </td>
                      `
                        : ''
                    }
                    ${
                      options?.showCta
                        ? `
                        <td ${fitted ? `width="${options.showSubtitle ? 100 - fitted.left : 100}%"` : ''} align="right" valign="top" ${options.showSubtitle ? `style="width:${100 - fitted.left}` : `style="width:100`}%;">
                        ${fitted ? `<a class="${fittedClass}" href="${ctaHref}" style="${fittedStyle}display:inline-block;vertical-align:top;font-weight:400;color:${options.ctaColor ?? category.cta?.color ?? color};text-decoration:underline;">${ctaText}</a>` : CTA({

                            color: options?.ctaColor ?? '#000000',
                            href: href,
                            text: getPhrase('Shop now'),
                            insideTr: false,
                            align: 'left',
                            elemClass: 'shopByCategoryCta',
                          })}
                      </td>`
                        : ''
                    }
                  </tr>
                  ${Space({ insideTr: true, className: 'newsletterBottom80px', bg: background })}
                </table>
              </td>
            </tr>
            `
              : ''
          }
        </table>
      </td>
    </tr>
  `;
  }
};

