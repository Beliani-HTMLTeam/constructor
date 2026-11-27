import { ImageWithLink } from '../components/ImageWithLink';

const isVideo = (src) => /\.mp4(\?|$)/i.test(String(src ?? ''));

// Video top image for landing pages (emails can't play video, so it's never used in the newsletter).
const VideoWithLink = ({ href, src, tdClass }) => `
  <tr>
    <td ${tdClass ? `class="${tdClass}"` : ''} align="center" valign="top">
      <a href="${href}" style="display: block; line-height: 0;"><video src="${src}" width="100%" style="display: block; width: 100%; max-width: 100%; height: auto; vertical-align: top;" autoplay muted loop playsinline></video></a>
    </td>
  </tr>
`;

export const TopImageHandler = ({ links, TopImage_data, type }) => {
  if (!links?.TopImage_href) return '';

  let html = '';

  // Landing only: links.TopImage_src_landing replaces TopImage_src (.mp4 -> <video>, anything else -> image)
  const landingSrc = type === 'landing' ? links?.TopImage_src_landing : null;

  if (landingSrc) {
    html += isVideo(landingSrc)
      ? VideoWithLink({ href: links.TopImage_href, src: landingSrc, tdClass: TopImage_data?.container })
      : ImageWithLink({
          href: links.TopImage_href,
          src: landingSrc,
          insideTr: true,
          alt: 'Top Image',
          tdClass: TopImage_data?.container,
        });
  } else if (links?.TopImage_src) {
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
      const src = links[key];

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
