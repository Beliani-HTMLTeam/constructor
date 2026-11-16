import { ImageWithLink } from '../components/ImageWithLink';

export const TopImageHandler = ({ links, topImage, tdClass, background }) => {
  return links?.TopImage_href && links?.TopImage_src
    ? ImageWithLink({
        href: links.TopImage_href,
        src: topImage.length > 0 ? topImage : links.TopImage_src,
        tdClass,
        insideTr: true,
        alt: 'Top Image',
        background
      })
    : '';
};
