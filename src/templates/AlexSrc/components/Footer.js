import { Footer as FooterComponent } from '@/components/footer.js';

const Footer = ({ getFooter, getCategoryLink, getCategoryTitle, queries, country, type, id }) => {

  return FooterComponent(
    {
      id,
      assembly: {
        src: ['AT', 'PL', 'FR', 'UK'].includes(country)
          ? getFooter('Delivery src')
          : getFooter('Asembly src'),
        href: getFooter('Asembly href'),
        exclude: ['CHIT'].includes(country),
      },

      workBanner: {
        src: getFooter('Job src'),
        href: getFooter('Job href'),
        exclude: !['PL'].includes(country),
      },
      
      thousandsMore: {
        title: getFooter('Title'),
        firstCategory: {
          src: getFooter('Category src 1'),
          href: getCategoryLink('https://www.beliani.co.uk/sofas/all+products'),
          name: getCategoryTitle('Sofas'), //href: getFooter("Category href 1"),
        },
        secondCategory: {
          src: getFooter('Category src 2'),
          href: getCategoryLink('https://www.beliani.co.uk/beds/all+products'),
          name: getCategoryTitle('Beds'), //href: getFooter("Category href 2"),
        },
        thirdCategory: {
          src: getFooter('Category src 3'),
          href: getCategoryLink('https://www.beliani.co.uk/tables/coffee-tables'),
          name: getCategoryTitle('Coffee Tables'), //href: getFooter("Category href 3"),
        },
        foutrthCategory: {
          src: getFooter('Category src 4'),
          href: getCategoryLink('https://www.beliani.co.uk/chairs/all+products'),
          name: getCategoryTitle('Chairs'), //href: getFooter("Category href 4"),
        },
        fifthCategory: {
          src: getFooter('Category src 5'),
          href: getCategoryLink('https://www.beliani.co.uk/armchairs/all+products'),
          name: getCategoryTitle('Armchairs'), //href: getFooter("Category href 5"),
        },
        sixthCategory: {
          src: getFooter('Category src 6'),
          href: getCategoryLink('https://www.beliani.co.uk/storage/sideboards'),
          name: getCategoryTitle('Storage'), //href: getFooter("Category href 6"),
        },
        seventhCategory: {
          src: getFooter('Category src 7'),
          href: getCategoryLink('https://www.beliani.co.uk/lighting/all+products'),
          name: getCategoryTitle('Lighting'), //href: getFooter("Category href 7"),
        },
        eigthCategory: {
          src: getFooter('Category src 8'),
          href: getCategoryLink('https://www.beliani.co.uk/rugs/all+products'),
          name: getCategoryTitle('Rugs'), //href: getFooter("Category href 8"),
        },
      },

      klarna: {
        src: getFooter('Klarna src'),
        href: getFooter('Klarna href'),
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
