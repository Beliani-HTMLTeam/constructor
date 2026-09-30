import { Header as HeaderComponent } from '@/components/header.js';
import { getState } from '@/main/state/appState';

function shouldUseNewHeader(cDate) {
  const parts = cDate.split('.');

  const day = Number(parts[0]);
  const month = Number(parts[1]);
  const year = Number(parts[2]);

  const campaignDate = new Date(year, month - 1, day);
  const cutoffDate = new Date(2026, 9, 6);

  return campaignDate >= cutoffDate;
}

const Header = ({ getHeader, country, background, type, id }) => {
  const campaignDate = getState('selectedCampaign')?.date;
  const newHeader = shouldUseNewHeader(campaignDate);

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
        src: newHeader ? getHeader('Top image src new') : getHeader('Top image src'),
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
    { type, newHeader }
  );
};

export { Header };
