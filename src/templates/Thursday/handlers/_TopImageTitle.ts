import { TopImageTitle } from '../components/TopImageTitle';
import type { LinksConfig, QueriesConfig, TopImageTitleData, RenderType } from '@/types/thursday';

export interface TopImageTitleHandlerProps {
  /** Campaign links map. */
  links: LinksConfig;
  /** Resolved translation queries; `queries.TopImageTitle` supplies `[title1, title2]`. */
  queries: QueriesConfig;
  /** Visual config for the overlay. */
  TopImageTitle_data?: TopImageTitleData;
  /** Which surface is being rendered. */
  type: RenderType;
}

/**
 * Wires campaign `links`/`queries`/`TopImageTitle_data` into the `TopImageTitle`
 * component. Renders nothing unless both `links.TopImageTitle_href` and
 * `links.TopImageTitle_src` are set — i.e. this section is opt-in per campaign.
 */
export const TopImageTitleHandler = ({ links, queries, TopImageTitle_data, type }: TopImageTitleHandlerProps): string => {
  return links?.TopImageTitle_href && links?.TopImageTitle_src
    ? TopImageTitle({
        href: links.TopImageTitle_href,
        src: links.TopImageTitle_src,
        title1: queries?.TopImageTitle?.[0] ?? 'Translation not found',
        title2: queries?.TopImageTitle?.[1] ?? 'Translation not found',
        color: TopImageTitle_data?.color,
        backgroundColor: TopImageTitle_data?.backgroundColor,
        type: TopImageTitle_data?.type,
        renderType: type,
        container: TopImageTitle_data?.container,
      })
    : '';
};
