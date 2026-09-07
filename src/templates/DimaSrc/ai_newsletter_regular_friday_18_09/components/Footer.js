import { Footer as FooterComponent } from '@/components/footer.js';
import {
  advantages,
  assembly,
  companyDetails,
  conditions,
  klarna,
  socials,
  thousandsMore,
  workBanner,
} from './utils/footer/components';

const Footer = ({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id, hasSmallTilesCategory }) => {
  return FooterComponent(
    {
      id,
      assembly: assembly({ getFooter, country }),

      workBanner: workBanner({ getFooter, country }),

      thousandsMore: thousandsMore({hasSmallTilesCategory, getFooter, getCategoryLink, getCategoryTitle }),

      klarna: klarna({ getFooter, country }),

      socials: socials({ getFooter }),

      advantages: advantages({ getFooter }),

      conditions: conditions({ getFooter, queries }),

      companyDetails: companyDetails({ getFooter }),
    },
    { type }
  );
};

export { Footer };
