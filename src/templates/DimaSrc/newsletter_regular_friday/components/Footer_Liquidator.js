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

const FooterLiquidator = ({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id }) => {
  return FooterComponent(
    {
      id,
      assembly: assembly({ getFooter, country }),

      workBanner: workBanner({ getFooter, country }),

      thousandsMore: thousandsMore({ getFooter, getCategoryLink, getCategoryTitle }),

      klarna: klarna({ getFooter, country }),

      socials: socials({ getFooter }),

      advantages: advantages({ getFooter }),

      companyDetails: companyDetails({ getFooter }),
    },
    { type }
  );
};

export { FooterLiquidator };
