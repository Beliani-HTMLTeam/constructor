import { ImageWithLink } from '../components/ImageWithLink';

export const TopImageHandler = ({ links }) => {
  if (!links?.TopImage_href) return '';

  let html = '';

  if (links?.TopImage_src) {
    html += ImageWithLink({
      href: links.TopImage_href,
      src: links.TopImage_src,
      insideTr: true,
      alt: 'Top Image',
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
      });
    });

  return html;

}
