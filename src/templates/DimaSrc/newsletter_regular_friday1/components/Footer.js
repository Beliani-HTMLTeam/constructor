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

function shouldUseNewAssembly(cDate) {
  const parts = cDate.split('.');

  const day = Number(parts[0]);
  const month = Number(parts[1]);
  const year = Number(parts[2]);

  const campaignDate = new Date(year, month - 1, day);
  const cutoffDate = new Date(2026, 8, 14);

  return campaignDate > cutoffDate;
}

const Footer = ({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id, hasSmallTilesCategory }) => {
  const campaignDate = date || selectedCampaign?.date || getState('selectedCampaign')?.date;
  const newAssembly = shouldUseNewAssembly(campaignDate);

  const assemblyBanner = newAssembly
    ? {
        src: getFooter('Assembly src new'),
        href: getFooter('Assembly href NEW'),
      }
    : {
        src: ['AT', 'PL', 'FR', 'UK'].includes(country) ? getFooter('Delivery src') : getFooter('Asembly src'),
        href: getFooter('Asembly href'),
      };
  return FooterComponent(
    {
      id,
      assembly:{
        ...assemblyBanner,
        exclude: ['CHIT'].includes(country),
      },

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
