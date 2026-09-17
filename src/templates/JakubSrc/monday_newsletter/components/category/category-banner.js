import { Line } from '../Line.js';
import { Space } from '../Space.js';

// Category data is already translated by CategoriesHandler.
export const render = ({ category, href, ctaHref, getPhrase }) => {
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
    return `<tr><td><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;"><tr>
      ${hasTitle
        ? `
        <td width="${hasCta ? '70%' : '100%'}" valign="top" align="${category.title?.align ?? 'left'}" class="categoryBannerTitle" style="font-size:24px;font-size:clamp(14px, 3.6vw, 24px);line-height:1.25;font-weight:600;text-transform:uppercase;overflow-wrap:anywhere;color:${color};">${title}</td>
        ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
        `
        : ''
      }
      ${hasCta
        ? `
          ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
          <td width="${hasTitle ? '30%' : '100%'}" align="${category.cta?.align ?? 'right'}" valign="top" class="categoryBannerCtaCell" style="line-height:1.25;"><a class="categoryBannerCta" href="${ctaHref}" style="font-size:18px;font-size:clamp(12px, 3vw, 18px);line-height:1.25;overflow-wrap:anywhere;text-decoration:underline;color:${category.cta?.color ?? color};">${ctaText}</a></td>
          ${Space({ insideTr: true, className: 'newsletterBottom80px' })}
          `
        : ''}
    </tr></table></td></tr>
    ${hasCta && category.line?.show ? Line({ insideTr: true, src: category.line.src }) : ''}`;
  };

  return `<tr><td${container ? ' class="newsletterContainer"' : ''} bgcolor="${background}" style="background-color:${background};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;font-family:Arial,sans-serif;">
      ${renderText('beforeImg')}
      ${category.src ? `<tr><td style="font-size:0;line-height:0;mso-line-height-rule:exactly;"><a href="${href}" style="display:block;text-decoration:none;"><img src="${category.src}" alt="${title}" width="${imageWidth}" border="0" style="display:block;width:100%;max-width:${imageWidth}px;height:auto;border:0;background-color:${background};-ms-interpolation-mode:bicubic;"></a></td></tr>` : ''}
      ${renderText('afterImg')}
      ${category.spaceAfter === 0 ? '' : Space({ insideTr: true, className: category.spaceAfter ?? 'newsletterBottom35px' })}
    </table>
  </td></tr>`;
};
