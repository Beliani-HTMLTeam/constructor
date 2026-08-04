import { Space } from './Space.js';
import type { TopImageTitleData, RenderType } from '@/types/thursday';

export interface TopImageTitleProps {
  /** Link target. */
  href: string;
  /** Baked title image (newsletter surface only). */
  src?: string;
  /** First title line (landing-page surface). */
  title1: string;
  /** Second title line (landing-page surface). */
  title2?: string;
  /** Section background colour (landing-page surface). */
  backgroundColor?: string;
  /** Title text colour (landing-page surface). */
  color?: string;
  /** Layout template name; unknown values render `'Invalid type'`. */
  type?: TopImageTitleData['type'];
  /** Which surface is being rendered; only `'landing'` uses the live-text templates. */
  renderType?: RenderType;
  /** Override container CSS class (landing-page surface). */
  container?: string;
}

/**
 * Renders the hero title overlay. On the newsletter surface this is always a single
 * baked image (`src`) since email clients can't reliably render live two-line title
 * typography; on the landing-page surface it renders live HTML text using one of the
 * named two-line layout templates (`type`), with special-cased bigger styling for
 * "retro"/"halloween"/percentage-off titles (see `includesKeywords`).
 */
const TopImageTitle = ({ href, src, title1, title2, backgroundColor, color, type, renderType, container }: TopImageTitleProps): string => {
  const keywords = ['retrò', 'retró', 'rétro', '%', 'halloween', 'retro'];

  function includesKeywords(title: string | undefined): boolean {
    for (let keyword of keywords) {
      if (String(title).toLowerCase().includes(keyword)) {
        return true;
      }
    }

    return false;
  }

  const templates = {
    up_to: `
      <h4 style="color:${color};" class="${includesKeywords(title1) ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title1}</h4>
      <h5 style="color:${color};" class="${includesKeywords(title2) ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title2 ?? ''}</h5>
    `,
    up_to_bigger: `
      <h4 style="color:${color};" class="${includesKeywords(title1) ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title1}</h4>
      <h5 style="color:${color};" class="${includesKeywords(title2) ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title2 ?? ''}</h5>
    `,
    line2bigger: `
      <h4 style="color:${color};" class="${includesKeywords(title1) ? 'newsletterTitleH2BoldBigger' : 'newsletterTitleH1Bold'}">${title1}</h4>
      <h4 style="color:${color};" class="${includesKeywords(title2) ? 'newsletterTitleH2BoldBigger' : 'newsletterTitleH1Bold'}">${title2}</h4>
    `,
    standard: `
      <h5 style="color:${color};" class="newsletterTitleH1">${title1}</h5>
      <h4 style="color:${color};" class="newsletterTitleH2">${title2}</h4>
    `,
    standard_inverted: `
      <h5 style="color:${color};" class="newsletterTitleH2">${title1}</h5>
      <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h4>
    `,
    twoSameLines: `
      <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
      <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h4>
    `,
    singleLine: `
      <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
    `,
    halloween: `
      <h4 style="color:${color};" class="${String(title1).toLowerCase().includes('halloween') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title1}</h4>
      <h4 style="color:${color};" class="${String(title2).toLowerCase().includes('halloween') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title2}</h4>
    `,
  };

  if (renderType === 'landing') {
    return `
    <tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${backgroundColor}; color: ${color};">
      ${Space({ insideTr: true })}
      
      <tr>
        <td style="color: ${color}" class="${container || 'newsletterContainer'}">
          <a style="color: ${color}" class="newsletterHrefTit" href="${href}">
            ${templates[type] || 'Invalid type'}
          </a>
        </td>
      </tr>

      ${Space({ insideTr: true })}

    </table></td></tr>
    `;
  }

  return `
    <tr>
      <td style="line-height: 0; font-size: 0; padding: 0;" ${container ? `class="${container}"` : ''}>
        <a href="${href}" style="display: block; text-decoration: none;">
          <img alt="Top Image Title" src="${src}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy">
        </a>
      </td>
    </tr>`;
};

export { TopImageTitle };
