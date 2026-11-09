const campaignTranslationsSheet = 'Voucher - 20.07.26 - Free Gift';

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '22:23',
  },
  {
    name: 'offer',
    tableRange: '25:27',
  },
  {
    name: 'offer_date',
    tableRange: '29',
  },
  {
    name: 'intro',
    tableRange: '30:31',
  },
  {
    name: 'condition',
    tableRange: '36:37',
  },
  // {
  //   name: 'categories',
  //   tableRange: '32:35',
  // },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/bedroom-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-20' }),
  TopImageTitle_src: translateImage({ value: '20260720_01.png' }),

  TopImage_src: getImageUrl('20260720_02.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-20' }),

  Banner_1: translateLink({ value: 'content/lp26-07-10' }),
  Banner_1_Image: translateImage({ value: '20260710b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-07-09' }),
  Banner_2_Image: translateImage({ value: '20260709b.png' }),
};

const topImage_data = {
  ['PL']: getImageUrl('20260720_PLITCZ_Gif.gif', true),
  ['CZ']: getImageUrl('20260720_PLITCZ_Gif.gif', true),
  ['IT']: getImageUrl('20260720_PLITCZ_Gif.gif', true),
  ['default']: getImageUrl('20260720_ALL_Gif.gif', true),
}

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'standard',
};

const categories = [
  // offer
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#F6E7E6',
    color: '#000000',
    spaceAfter: 'newsletterBottom45px',
    freebies: [
      [
        { id: '78710', src: getImageUrl('20260720_Pic01.png', true) },
        { id: '367130', src: getImageUrl('20260720_Pic02.png', true) },
        { id: '131577', src: getImageUrl('20260720_Pic03.png', true) },
        { id: '325032', src: getImageUrl('20260720_Pic04.png', true) },
        { id: '519742', src: getImageUrl('20260720_Pic05.png', true), visibility: ['PL', 'CZ', 'IT'] },
      ],
    ],
  },

  // main
  {
    name: 'Beds',
    // nameOverride: 'PASCO',
    src: getImageUrl('20260720_Cat10.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    skipLinkTranslation: true,
    background: '#FFE0D4',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '45',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom20px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom20px',
      spaceAfter: 'newsletterBottom20px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      {
        id: '722123',
        src: getImageUrl('20260720_Pic10.png', true),
      },
      {
        id: '583890',
        src: getImageUrl('20260720_Pic11.png', true),
      },
      {
        id: '610528',
        src: getImageUrl('20260720_Pic12.png', true),
      },
      {
        id: '728861',
        src: getImageUrl('20260720_Pic13.png', true),
      },
      {
        id: '686100',
        src: getImageUrl('20260720_Pic14.png', true),
      },

      {
        id: '609212',
        src: getImageUrl('20260720_Pic15.png', true),
      },
      {
        id: '656606',
        src: getImageUrl('20260720_Pic16.png', true),
      },
      {
        id: '416811',
        src: getImageUrl('20260720_Pic17.png', true),
      },
      {
        id: '454228',
        src: getImageUrl('20260720_Pic18.png', true),
      },
      {
        id: '443263',
        src: getImageUrl('20260720_Pic19.png', true),
      },
    ],
  },
  {
    name: 'Mattresses',
    // nameOverride: 'LYNWOOD',
    src: getImageUrl('20260720_Cat20.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
    skipLinkTranslation: true,
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      {
        id: '499858',
        src: getImageUrl('20260720_Pic20.png', true),
      },
      {
        id: '5874',
        src: getImageUrl('20260720_Pic21.png', true),
      },
      {
        id: '607271',
        src: getImageUrl('20260720_Pic22.png', true),
      },
      {
        id: '464770',
        src: getImageUrl('20260720_Pic23.png', true),
      },
      {
        id: '499678',
        src: getImageUrl('20260720_Pic24.png', true),
      },

      {
        id: '495115',
        src: getImageUrl('20260720_Pic25.png', true),
      },
      {
        id: '65663',
        src: getImageUrl('20260720_Pic26.png', true),
      },
      {
        id: '4597',
        src: getImageUrl('20260720_Pic27.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '45536',
  name: 'MON Free Gift',
  date: '20.07.2026',
  issueCardId: '503877',
  lpId: '31084',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  soon_banners: true,
  figmaUrl: 'https://www.figma.com/design/5LszaTBjyKeC4LjnVhdV7E/',
  accent: '#d4f5e9',
  templates: [
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#FFE0D4',
        alignment: 'left',
        position: 'afterFreebies',
        cta: {
          textOverrides: {
            fi: 'Katso valikoima'
          },
          spaceAfter: 'newsletterBottom35px',
        },
      },
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImage_data,
      tableQueries: tableQueries,
    },
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#FFE0D4',
        alignment: 'left',
        position: 'afterFreebies',
        cta: {
          textOverrides: {
            fi: 'Katso valikoima'
          },
          spaceAfter: 'newsletterBottom80px',
        },
      },
      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImage_data,
      tableQueries: tableQueries,
    },
  ],
});
