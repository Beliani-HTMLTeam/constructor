const campaignTranslationsSheet = 'Voucher - 06.07.26 -  Free outdoor rug';

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
    tableRange: '28',
  },
  {
    name: 'intro',
    tableRange: '29:30',
  },
  {
    name: 'condition',
    tableRange: '34:35',
  },
  // {
  //   name: 'categories',
  //   tableRange: '32:35',
  // },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-06' }),
  TopImageTitle_src: translateImage({ value: '20260706_01.png' }),

  TopImage_src: getImageUrl('20260706_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-06' }),

  Banner_1: translateLink({ value: 'content/lp26-06-26' }),
  Banner_1_Image: translateImage({ value: '20260626b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-25' }),
  Banner_2_Image: translateImage({ value: '20260625b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEFD9',
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
    background: '#FFEFD9',
    color: '#000000',
    spaceAfter: 'newsletterBottom45px',
    freebies: [
      [
        { id: '97591', src: getImageUrl('20260706_pic01.png', true), size: '90 x 180 cm' },
        { id: '97589', src: getImageUrl('20260706_pic02.png', true), size: '90 x 180 cm' },
        { id: '185826', src: getImageUrl('20260706_pic03.png', true), size: '60 x 105 cm' },
      ],
    ],
  },

  // main
  {
    name: 'Lounge Sets',
    // nameOverride: 'PASCO',
    src: getImageUrl('20260706_Cat10.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/looks/',
    skipLinkTranslation: true,
    background: '#FFE0D9',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '45',
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
        id: '143892',
        src: getImageUrl('20260706_pic11.png', true),
      },
      {
        id: '458090',
        src: getImageUrl('20260706_pic12.png', true),
      },
      {
        id: '695801',
        src: getImageUrl('20260706_pic13.png', true),
      },
      {
        id: '517212',
        src: getImageUrl('20260706_pic14.png', true),
      },
    ],
  },
  {
    name: 'Dining Sets',
    // nameOverride: 'LYNWOOD',
    src: getImageUrl('20260706_Cat20.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets//',
    skipLinkTranslation: true,
    background: '#FFEFD9',
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
        id: '511765',
        src: getImageUrl('20260706_pic21.png', true),
      },
      {
        id: '399750',
        src: getImageUrl('20260706_pic22.png', true),
      },
      {
        id: '191195',
        src: getImageUrl('20260706_pic23.png', true),
      },
      {
        id: '180772',
        src: getImageUrl('20260706_pic24.png', true),
      },
    ],
  },
  {
    name: 'Balcony Furniture',
    // nameOverride: 'OPOCO',
    src: getImageUrl('20260706_Cat30.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
    skipLinkTranslation: true,
    background: '#FFE0D9',
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
        id: '198625',
        src: getImageUrl('20260706_pic31.png', true),
      },
      {
        id: '294478',
        src: getImageUrl('20260706_pic32.png', true),
      },
      {
        id: '506137',
        src: getImageUrl('20260706_pic33.png', true),
      },
      {
        id: '508627',
        src: getImageUrl('20260706_pic34.png', true),
      },
    ],
  },
  {
    name: 'Sun Loungers',
    // nameOverride: 'BRADLEY',
    src: getImageUrl('20260706_Cat40.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
    skipLinkTranslation: true,
    background: '#FFEFD9',
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
        id: '731124',
        src: getImageUrl('20260706_pic41.png', true),
      },
      {
        id: '627244',
        src: getImageUrl('20260706_pic42.png', true),
      },
      {
        id: '508266',
        src: getImageUrl('20260706_pic43.png', true),
      },
      {
        id: '189995',
        src: getImageUrl('20260706_pic44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '45279',
  name: 'MON Free Outdoor Rug',
  date: '06.07.2026',
  issueCardId: '498381',
  lpId: '30970',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  soon_banners: true,
  figmaUrl: 'https://www.figma.com/design/Qgx4wEPqdTDBaybjR1BD1E/',
  accent: '#d4f5e9',
  templates: [
    {
      background: '#FFEFD9',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#FFE0D9',
        alignment: 'left',
        position: 'afterFreebies',
        cta: {
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
      tableQueries: tableQueries,
    },
    {
      background: '#FFEFD9',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#FFE0D9',
        alignment: 'left',
        position: 'afterFreebies',
        cta: {
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
      tableQueries: tableQueries,
    },
  ],
});
