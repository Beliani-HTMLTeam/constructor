import { ImageWithLink } from '../components/ImageWithLink';

export const TopImageHandler = ({ links, topImage, padding = '' }) => {
  return links?.TopImage_href && links?.TopImage_src
    ? ImageWithLink({
        href: links.TopImage_href,
        src: topImage.length > 0 ? topImage : links.TopImage_src,
        insideTr: true,
        alt: 'Top Image',
        padding: padding,
      })
    : '';
};
