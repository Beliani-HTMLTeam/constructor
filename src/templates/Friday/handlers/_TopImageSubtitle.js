import { TopImageSubtitle } from '../components/TopImageSubtitle';

export const TopImageSubtitleHandler = ({ links }) => {
  return links?.TopImageSubtitle_href && links?.TopImageSubtitle_src
    ? TopImageSubtitle({
        href: links.TopImageSubtitle_href,
        src: links.TopImageSubtitle_src,
      })
    : '';
};
