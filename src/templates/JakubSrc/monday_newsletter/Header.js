import { Header as HeaderComponent } from '@/components/header.js';
import { getState } from '@/main/state/appState';

function shouldUseNewHeader(cDate, cutoffDate = new Date(2026, 9, 6)) {
  const parts = cDate.split('.');

  const day = Number(parts[0]);
  const month = Number(parts[1]);
  const year = Number(parts[2]);

  const campaignDate = new Date(year, month - 1, day);

  return campaignDate >= cutoffDate;
}

const Header = ({ getHeader, country, background, type, id }) => {
  const campaignDate = getState('selectedCampaign')?.date;
  const newHeader = shouldUseNewHeader(campaignDate);
  const newHeaderLayout = shouldUseNewHeader(campaignDate, new Date(2026, 9, 12));

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
          src: getHeader(newHeaderLayout ? 'Header Category 1 src new' : 'Header Category 1 src'),
          href: getHeader(newHeaderLayout ? 'Header Category 1 href new' : 'Header Category 1 href'),
          alt: getHeader(newHeaderLayout ? 'Header Category 1 alt new' : 'Header Category 1 alt'),
          width: newHeaderLayout ? getHeader('Header Category 1 width new') : '',
        },
        secondCategory: {
          src: getHeader(newHeaderLayout ? 'Header Category 2 src new' : 'Header Category 2 src'),
          href: getHeader(newHeaderLayout ? 'Header Category 2 href new' : 'Header Category 2 href'),
          alt: getHeader(newHeaderLayout ? 'Header Category 2 alt new' : 'Header Category 2 alt'),
          width: newHeaderLayout ? getHeader('Header Category 2 width new') : '',
        },
        thirdCategory: {
          src: getHeader(newHeaderLayout ? 'Header Category 3 src new' : 'Header Category 3 src'),
          href: getHeader(newHeaderLayout ? 'Header Category 3 href new' : 'Header Category 3 href'),
          alt: getHeader(newHeaderLayout ? 'Header Category 3 alt new' : 'Header Category 3 alt'),
          width: newHeaderLayout ? getHeader('Header Category 3 width new') : '',
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
    { type, newHeader, newHeaderLayout }
  );
};

export { Header };
