import { TopImageSubtitle } from '../components/TopImageSubtitle';

/**
 * Optional image strip (e.g. "UP TO XX% OFF LAST CALL FOR CHRISTMAS").
 * Renders only when both links.TopImageSubtitle_href and links.TopImageSubtitle_src are set.
 *
 * TopImageSubtitle_data (optional):
 *  - position: 'top' (default) | 'afterTopImage' | 'afterTopImageTitle'  (placement handled in template.js)
 *  - alt: image alt text
 *  - container: td class, e.g. 'newsletterContainer'
 */
export const TopImageSubtitleHandler = ({ links, TopImageSubtitle_data }) => {
  return links?.TopImageSubtitle_href && links?.TopImageSubtitle_src
    ? TopImageSubtitle({
        href: links.TopImageSubtitle_href,
        src: links.TopImageSubtitle_src,
        alt: TopImageSubtitle_data?.alt,
        container: TopImageSubtitle_data?.container,
      })
    : '';
};
