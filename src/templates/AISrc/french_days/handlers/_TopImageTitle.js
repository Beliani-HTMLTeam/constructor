import { TopImageTitle } from '../components/TopImageTitle';

export const TopImageTitleHandler = ({ links, queries, TopImageTitle_data, type, countrySlug }) => {
  const overrides = TopImageTitle_data?.textOverrides?.[countrySlug];
  return links?.TopImageTitle_href && links?.TopImageTitle_src
    ? TopImageTitle({
        href: links.TopImageTitle_href,
        src: links.TopImageTitle_src,
        title1: overrides?.[0] ?? queries?.TopImageTitle?.[0] ?? 'TRANSLATION NOT FOUND',
        title2: overrides?.[1] ?? queries?.TopImageTitle?.[1] ?? 'TRANSLATION NOT FOUND',
        color: TopImageTitle_data?.color,
        backgroundColor: TopImageTitle_data?.backgroundColor,
        type: TopImageTitle_data?.type,
        renderType: type,
      })
    : '';
};
