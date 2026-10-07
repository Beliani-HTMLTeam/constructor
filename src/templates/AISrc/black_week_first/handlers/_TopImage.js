import { ImageWithLink } from '../components/ImageWithLink';

export const TopImageHandler = ({ links, topImage, type = "", getCategoryLink }) => {
  if (type !== undefined && type == "shop_now")
    return links?.ShopNow_href && links?.ShopNow_src
  ? ImageWithLink({
      href: getCategoryLink(links?.ShopNow_href),
      src: topImage.length > 0 ? topImage : links.ShopNow_src,
      insideTr: true,
      alt: 'Top Image',
    })
  : '';
  return links?.TopImage_href && links?.TopImage_src
    ? ImageWithLink({
        href: links.TopImage_href,
        src: topImage.length > 0 ? topImage : links.TopImage_src,
        insideTr: true,
        alt: 'Top Image',
      })
    : '';
};
