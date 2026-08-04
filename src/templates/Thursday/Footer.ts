import { Footer as FooterComponent } from '@/components/footer.js';
import { getTrackingUrl, wrapFooterUrl } from "@/utils/getTrackingUrl";
import type { QueriesConfig, RenderType } from '@/types/thursday';

export interface FooterProps {
  /** Footer copy/asset lookup (e.g. `'Klarna src'`, `'Category href 1'`). */
  getFooter: (key: string) => string;
  /** Resolves/decorates a category href. */
  getCategoryLink: (href: string) => string;
  /** Translates a category display name. */
  getCategoryTitle: (name: string) => string;
  /** Resolved translation queries; `queries.condition` is reused verbatim as the footer conditions text. */
  queries: QueriesConfig;
  /** Current market/language code, used for the `exclude` rules. */
  country: string;
  /** Which surface is being rendered. */
  type: RenderType;
  /** Campaign/newsletter DOM id. */
  id: string;
  /** When true, hides the footer's own "thousands more" tiles since the campaign already has an in-body `small-tiles` category. */
  hasSmallTilesCategory: boolean;
}

/**
 * Thursday-specific adapter around the shared `@/components/footer.js` renderer:
 * looks up all footer copy/asset slots via `getFooter()`, wires the "thousands more"
 * category tile links/titles, and applies per-market `exclude` rules (assembly banner,
 * Klarna badge, job banner).
 */
const Footer = ({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id, hasSmallTilesCategory }: FooterProps): string => {
  return FooterComponent(
    {
      id,
      assembly: {
        src: ['AT', 'PL', 'FR', 'UK'].includes(country) ? getFooter('Delivery src') : getFooter('Asembly src'),
        href: getFooter('Asembly href'),
        exclude: ['CHIT'].includes(country),
      },

      workBanner: {
        src: getFooter('Job src'),
        href: getFooter('Job href'),
        exclude: !['PL'].includes(country),
      },
      thousandsMore: {
				exclude: hasSmallTilesCategory,
        title: getFooter('Title'),
        firstCategory: {
          src: getFooter('Category src 1'),
          href: wrapFooterUrl(getFooter('Category href 1')),
          name: getCategoryTitle('Sofas'),
        },
        secondCategory: {
          src: getFooter('Category src 2'),
          href: wrapFooterUrl(getFooter('Category href 2')),
          name: getCategoryTitle('Beds'),
        },
        thirdCategory: {
          src: getFooter('Category src 3'),
          href: wrapFooterUrl(getFooter('Category href 3')),
          name: getCategoryTitle('Coffee Tables'),
        },
        foutrthCategory: {
          src: getFooter('Category src 4'),
          href: wrapFooterUrl(getFooter('Category href 4')),
          name: getCategoryTitle('Chairs'),
        },
        fifthCategory: {
          src: getFooter('Category src 5'),
          href: wrapFooterUrl(getFooter('Category href 5')),
          name: getCategoryTitle('Armchairs'),
        },
        sixthCategory: {
          src: getFooter('Category src 6'),
          href: wrapFooterUrl(getFooter('Category href 6')),
          name: getCategoryTitle('Storage'),
        },
        seventhCategory: {
          src: getFooter('Category src 7'),
          href: wrapFooterUrl(getFooter('Category href 7')),
          name: getCategoryTitle('Lighting'),
        },
        eigthCategory: {
          src: getFooter('Category src 8'),
          href: wrapFooterUrl(getFooter('Category href 8')),
          name: getCategoryTitle('Rugs'),
        },
      },

      klarna: {
        src: getFooter('Klarna src'),
        href: getFooter('Klarna href'),
				exclude: ['HR', 'SI'].includes(country),
        //exclude: ["HU"].includes(country),
      },

      socials: {
        title: getFooter('Socials Title'),
        instagram: {
          src: getFooter('Instagram src'),
          href: getFooter('Instagram href'),
        },
        facebook: {
          src: getFooter('Facebook src'),
          href: getFooter('Facebook href'),
        },
        youtube: {
          src: getFooter('Youtube src'),
          href: getFooter('Youtube href'),
        },
        pinterest: {
          src: getFooter('Pinterest src'),
          href: getFooter('Pinterest href'),
        },
        Xsocial: {
          src: getFooter('X src'),
          href: getFooter('X href'),
        },
        Tiktok: {
          src: getFooter('Tiktok src'),
          href: getFooter('Tiktok href'),
        },
      },

      advantages: {
        firstAdvantage: {
          src: getFooter('Advantages src 1'),
          href: getFooter('Advantages href 1'),
        },
        secondAdvantage: {
          src: getFooter('Advantages src 2'),
          href: getFooter('Advantages href 2'),
        },
        thirdAdvantage: {
          src: getFooter('Advantages src 3'),
          href: getFooter('Advantages href 3'),
        },
        fourthAdvantage: {
          src: getFooter('Advantages src 4'),
          href: getFooter('Advantages href 4'),
        },
      },

      conditions: {
        conditionsTitle: getFooter('Conditions title'),
        conditionsText: queries.condition,
      },

      companyDetails: {
        title: getFooter('Company Details'),
        address: getFooter('Address'),
        mobileNumber: getFooter('Mobile number'),
        emailAddress: getFooter('Email address'),
        mailTo: getFooter('Mail to'),
        email: getFooter('Email'),
        commercialRegister: getFooter('Commercial register'),
        vat: getFooter('VAT'),
      },
    },
    { type }
  );
};

export { Footer };
