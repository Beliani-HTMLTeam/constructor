import { TopImageTitle } from '../components/TopImageTitle';

export const TopImageTitleHandler = ({ links, queries, TopImageTitle_data, type }) => {
  return links?.TopImageTitle_href && links?.TopImageTitle_src
    ? TopImageTitle({
        href: links.TopImageTitle_href,
        src: links.TopImageTitle_src,
        title1: queries?.TopImageTitle?.[0] ?? 'Translation not found',
        title2: queries?.TopImageTitle?.[1] ?? 'Translation not found',
        color: TopImageTitle_data?.color,
        background: TopImageTitle_data?.background,
        type: TopImageTitle_data?.type,
        renderType: type,
      })
    : '';
};
