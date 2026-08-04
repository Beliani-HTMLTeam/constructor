export interface SoonEndingBannerProps {
  /** Link target. */
  href?: string;
  /** Banner image source. */
  src?: string;
  /** Banner position (1 or 2), used only for the alt-text suffix. */
  orderingId: string | number;
}

/** Renders a single full-width footer banner ("shop limited-time deals" section). */
const SoonEndingBanner = ({ href, src, orderingId }: SoonEndingBannerProps): string => {
  return `
  <tr>
    <td align="left">
      <a href=${href}>
        <img alt="Soon Ending Banner ${orderingId}" loading="lazy" src=${src} style="display: block;" width="100%">
      </a>
    </td>
  </tr>
  `;
};

export { SoonEndingBanner };
