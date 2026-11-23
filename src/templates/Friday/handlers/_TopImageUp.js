import { TopImageUp } from '../components/TopImageUp';

/**
 * Optional image strip above the Top Image (e.g. "UP TO XX% OFF" gif bar).
 * Renders only when both links.TopImageUp_href and links.TopImageUp_src are set.
 *
 * TopImageUp_data (optional):
 *  - position: 'top' (default, very first row) | 'beforeTopImage' (right above the Top Image)
 *    (placement handled in template.js)
 *  - alt: image alt text
 *  - container: td class, e.g. 'newsletterContainer'
 */
export const TopImageUpHandler = ({ links, TopImageUp_data }) => {
  return links?.TopImageUp_href && links?.TopImageUp_src
    ? TopImageUp({
        href: links.TopImageUp_href,
        src: links.TopImageUp_src,
        alt: TopImageUp_data?.alt,
        container: TopImageUp_data?.container,
      })
    : '';
};
