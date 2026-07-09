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

const Footer = ({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id, getPhrase }) => {
  return FooterComponent(
    {
      id,
      assembly: assembly({ getFooter, country }),

      workBanner: workBanner({ getFooter, country }),

      thousandsMore: thousandsMore({ getFooter, getCategoryLink, getCategoryTitle }),

      klarna: klarna({ getFooter, country }),

      socials: socials({ getFooter }),

      advantages: advantages({ getFooter }),

      conditions: conditions({ getFooter, queries, country, type, getPhrase }),

      companyDetails: companyDetails({ getFooter }),
    },
    { type }
  );
};

export { Footer };
