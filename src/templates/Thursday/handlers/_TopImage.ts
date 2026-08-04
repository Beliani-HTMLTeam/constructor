import { ImageWithLink } from '../components/ImageWithLink';
import type { LinksConfig } from '@/types/thursday';

export interface TopImageHandlerProps {
  /** Campaign links map. */
  links: LinksConfig;
  /** Wrapper config for each image cell. */
  TopImage_data?: { container?: string };
}

/**
 * Renders the plain hero image (as opposed to the title-overlay hero, see
 * `_TopImageTitle.ts`). Renders nothing unless `links.TopImage_href` is set. Supports
 * one or more stacked hero images: the primary `links.TopImage_src` renders first,
 * followed by any `links.TopImage_src_1`, `links.TopImage_src_2`, ... keys (all sharing
 * `links.TopImage_href`), rendered in ascending numeric order.
 */
export const TopImageHandler = ({ links, TopImage_data }: TopImageHandlerProps): string => {
  if (!links?.TopImage_href) return '';

  let html = '';

  if (links?.TopImage_src) {
    html += ImageWithLink({
      href: links.TopImage_href,
      src: links.TopImage_src,
      insideTr: true,
      alt: 'Top Image',
      tdClass: TopImage_data?.container,
    });
  }

  // get all TopImage_src_N links, sort them to render in order, eg TopImage_src_1, TopImage_src_2, etc.
  Object.keys(links)
    .filter((key) => /^TopImage_src_\d+$/.test(key))
    .sort((a, b) => Number(a.split('_').pop()) - Number(b.split('_').pop()))
    .forEach((key) => {
      const src = links[key as keyof LinksConfig];

      if (!src) return;

      html += ImageWithLink({
        href: links.TopImage_href,
        src,
        insideTr: true,
        alt: 'Top Image',
        tdClass: TopImage_data?.container,
      });
    });

  return html;

}
