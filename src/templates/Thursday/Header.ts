import { Header as HeaderComponent } from '@/components/header.js';
import type { RenderType } from '@/types/thursday';

export interface HeaderProps {
  /** Header copy/asset lookup (e.g. `'Free Delivery'`, `'Top image src'`). */
  getHeader: (key: string) => string;
  /** Current market/language code. */
  country: string;
  /** Root section background colour, used to pick the "cosy" vs. standard delivery banner. */
  background: string;
  /** Which surface is being rendered. */
  type: RenderType;
  /** Campaign/newsletter DOM id. */
  id: string;
}

/**
 * Thursday-specific adapter around the shared `@/components/header.js` renderer:
 * looks up all header copy/asset slots via `getHeader()` and picks the market-appropriate
 * assembly/delivery banner variant based on `country` and the section `background` colour.
 */
const Header = ({ getHeader, country, background, type, id }: HeaderProps): string => {

  return HeaderComponent(
    {
      id,
      advantages: {
        freeDelivery: getHeader('Free Delivery'),
        daysReturn: getHeader('365-Day Return'),
      },

      paragraph: {
        troubleViewing: getHeader('Trouble viewing'),
        troubleViewingHrefText: getHeader('Trouble viewing href text'),
        addBeliani: getHeader('Add Beliani to your'),
        whiteList: getHeader('Whitelist'),
        whitelistHref: getHeader('Whitelist href'),
      },
      
      topImage: {
        src: getHeader('Top image src'),
        href: getHeader('Top image href'),
      },
      
      categories: {
        firstCategory: {
          src: getHeader('Header Category 1 src'),
          href: getHeader('Header Category 1 href'),
          alt: getHeader('Header Category 1 alt'),
        },
        secondCategory: {
          src: getHeader('Header Category 2 src'),
          href: getHeader('Header Category 2 href'),
          alt: getHeader('Header Category 2 alt'),
        },
        thirdCategory: {
          src: getHeader('Header Category 3 src'),
          href: getHeader('Header Category 3 href'),
          alt: getHeader('Header Category 3 alt'),
        },
      },
      
      assembly: {
        src: ['AT', 'PL', 'FR', 'UK'].includes(country)
          ? ['#FFCCB7'].includes(background)
            ? getHeader('Header delivery_cosy src')
            : getHeader('Header delivery src')
          : ['#FBF4F3'].includes(background)
          ? getHeader('Header asembly src')
          : getHeader('Header asembly_cosy src'),
        href: getHeader('Header asembly href'),
        exclude: true,
      },
    },
    { type }
  );
};

export { Header };
