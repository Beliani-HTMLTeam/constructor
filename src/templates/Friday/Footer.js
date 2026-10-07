import { Footer as FooterComponent } from '@/components/footer.js';
import { wrapFooterUrl } from "@/utils/getTrackingUrl";
import { getState } from '@/main/state/appState';
import {Space} from "./components/Space.js";

const Footer = ({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id, hasSmallTilesCategory, selectedCampaign, date }) => {
  const campaignDate = date || selectedCampaign?.date || getState('selectedCampaign')?.date;

  const assemblyBanner =  {
        src: getFooter('Assembly src new'),
        href: getFooter('Assembly href NEW'),
      }

  const FooterElement = FooterComponent(
    {
      id,
      seeYouSoon: {
        src: getFooter('See you soon src'),
        href: getFooter('See you soon href'),
      },

      deliveryBanner: {
        src: getFooter('Delivery src'),
        href: getFooter('Delivery href'),
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
          src: getFooter('Category src 1 new'),
          href: wrapFooterUrl(getFooter('Category href 1')),
          name: getCategoryTitle('Sofas'),
        },
        secondCategory: {
          src: getFooter('Category src 2 new'),
          href: wrapFooterUrl(getFooter('Category href 2')),
          name: getCategoryTitle('Beds'),
        },
        thirdCategory: {
          src: getFooter('Category src 3 new'),
          href: wrapFooterUrl(getFooter('Category href 3')),
          name: getCategoryTitle('Coffee Tables'),
        },
        foutrthCategory: {
          src: getFooter('Category src 4 new'),
          href: wrapFooterUrl(getFooter('Category href 4')),
          name: getCategoryTitle('Chairs'),
        },
        fifthCategory: {
          src: getFooter('Category src 5 new'),
          href: wrapFooterUrl(getFooter('Category href 5')),
          name: getCategoryTitle('Armchairs'),
        },
        sixthCategory: {
          src: getFooter('Category src 6 new'),
          href: wrapFooterUrl(getFooter('Category href 6')),
          name: getCategoryTitle('Storage'),
        },
        seventhCategory: {
          src: getFooter('Category src 7 new'),
          href: wrapFooterUrl(getFooter('Category href 7')),
          name: getCategoryTitle('Lighting'),
        },
        eigthCategory: {
          src: getFooter('Category src 8 new'),
          href: wrapFooterUrl(getFooter('Category href 8')),
          name: getCategoryTitle('Rugs'),
        },
      },
      advantages: {
        firstAdvantage: {
          src: getFooter('Advantages src 1 new'),
          href: getFooter('Advantages href 1'),
        },
        secondAdvantage: {
          src: getFooter('Advantages src 2 new'),
          href: getFooter('Advantages href 2'),
        },
        thirdAdvantage: {
          src: getFooter('Advantages src 3 new'),
          href: getFooter('Advantages href 3'),
        },
        fourthAdvantage: {
          src: getFooter('Advantages src 4 new'),
          href: getFooter('Advantages href 4'),
        },
      },

      klarna: {
        src: getFooter('Klarna src new'),
        href: getFooter('Klarna href'),
				exclude: ['HR', 'SI'].includes(country),
        //exclude: ["HU"].includes(country),
      },

      socials: {
        title: getFooter('Socials Title'),
        subtitle: getFooter('Stay up to date'),
        instagram: {
          src: getFooter('Instagram src new'),
          href: getFooter('Instagram href'),
        },
        facebook: {
          src: getFooter('Facebook src new'),
          href: getFooter('Facebook href'),
        },
        youtube: {
          src: getFooter('Youtube src new'),
          href: getFooter('Youtube href'),
        },
        pinterest: {
          src: getFooter('Pinterest src new'),
          href: getFooter('Pinterest href'),
        },
        Xsocial: {
          src: getFooter('X src new'),
          href: getFooter('X href'),
        },
        Tiktok: {
          src: getFooter('Tiktok src new'),
          href: getFooter('Tiktok href'),
        },
      },

     
      conditions: {
        conditionsTitle: getFooter('Conditions title'),
        conditionsText: queries.condition || [getFooter('Conditions_description'), getFooter('Conditions_unsubscribe new')],
      },

      companyDetails: {
        title: getFooter('Company Details'),
        address: getFooter('Address new'),
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

  return `
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px;">
  ${Space({ className: 'newsletterBottom30px',  insideTr: true, background: '#FFCCB7' })}
    <tr>
      <td style="width: 100%; max-width: 100%; background-color: #FFCCB7;">
        ${FooterElement}
      </td>
    </tr>
    ${Space({ className: 'newsletterBottom15px',  insideTr: true, background: '#FFCCB7' })}
  </table>
  `
};

export { Footer };
