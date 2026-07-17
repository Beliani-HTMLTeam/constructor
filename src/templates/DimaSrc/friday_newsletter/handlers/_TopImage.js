import { ImageWithLink } from '../components/ImageWithLink';

export const TopImageHandler = ({ links }) => {
  return links?.TopImage_href && links?.TopImage_src
    ? ImageWithLink({
        href: links.TopImage_href,
        src: links.TopImage_src,
        insideTr: true,
        alt: 'Top Image',
      })
    : '';
};
