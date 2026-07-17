const campaignTranslationsSheet = 'Voucher - 27.07.26 - Vase';

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '21:22',
  },
  {
    name: 'offer',
    tableRange: '24:26',
  },
  {
    name: 'offer_date',
    tableRange: '27',
  },
  {
    name: 'intro',
    tableRange: '28:29',
  },
  {
    name: 'condition',
    tableRange: '33:34',
  },
  // {
  //   name: 'categories',
  //   tableRange: '32:35',
  // },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-27' }),
  TopImageTitle_src: translateImage({ value: '20260727_01.png' }),

  TopImage_src: getImageUrl('20260727_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-27' }),

  Banner_1: translateLink({ value: 'content/lp26-07-17' }),
  Banner_1_Image: translateImage({ value: '20260717b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-07-16' }),
  Banner_2_Image: translateImage({ value: '20260716b.png' }),
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
        { id: '526546', src: getImageUrl('20260727_Pic01.png', true) },
        { id: '346619', src: getImageUrl('20260727_Pic02.png', true) },
        { id: '330436', src: getImageUrl('20260727_Pic03.png', true) },
      ],
      [
        { id: '290280', src: getImageUrl('20260727_Pic04.png', true) },
        { id: '290014', src: getImageUrl('20260727_Pic05.png', true) },
        { id: '108492', src: getImageUrl('20260727_Pic06.png', true) },
      ],
    ],
  },

  // main
  {
    name: 'Lounge sets',
    // nameOverride: 'PASCO',
    src: getImageUrl('20260727_Cat10.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
    skipLinkTranslation: true,
    background: '#FFF5F1',
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
        id: '338035',
        src: getImageUrl('20260727_Pic10.png', true),
      },
      {
        id: '124357',
        src: getImageUrl('20260727_Pic11.png', true),
      },
      {
        id: '252439',
        src: getImageUrl('20260727_Pic12.png', true),
      },
      {
        id: '210677',
        src: getImageUrl('20260727_Pic13.png', true),
      },
    ],
  },
  {
    name: 'Sofas',
    // nameOverride: 'LYNWOOD',
    src: getImageUrl('20260727_Cat20.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
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
        id: '505993',
        src: getImageUrl('20260727_Pic20.png', true),
      },
      {
        id: '642120',
        src: getImageUrl('20260727_Pic21.png', true),
      },
      {
        id: '642479',
        src: getImageUrl('20260727_Pic22.png', true),
      },
      {
        id: '680726',
        src: getImageUrl('20260727_Pic23.png', true),
      },
    ],
  },
  {
    name: 'Armchairs',
    // nameOverride: 'OPOCO',
    src: getImageUrl('20260727_Cat30.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
    skipLinkTranslation: true,
    background: '#FFF5F1',
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
        id: '667830',
        src: getImageUrl('20260727_Pic30.png', true),
      },
      {
        id: '651463',
        src: getImageUrl('20260727_Pic31.png', true),
      },
      {
        id: '614870',
        src: getImageUrl('20260727_Pic32.png', true),
      },
      {
        id: '515945',
        src: getImageUrl('20260727_Pic33.png', true),
      },
    ],
  },
  {
    name: 'Beds',
    // nameOverride: 'BRADLEY',
    src: getImageUrl('20260727_Cat40.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
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
        id: '403061',
        src: getImageUrl('20260727_Pic40.png', true),
      },
      {
        id: '452066',
        src: getImageUrl('20260727_Pic41.png', true),
      },
      {
        id: '626844',
        src: getImageUrl('20260727_Pic42.png', true),
      },
      {
        id: '683920',
        src: getImageUrl('20260727_Pic43.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '46103',
  name: 'MON Free Vase',
  date: '27.07.2026',
  issueCardId: '507435',
  lpId: '31376',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  soon_banners: true,
  figmaUrl: 'https://www.figma.com/design/4EClbaS0pQXQaPFKOTNPdT/',
  accent: '#d4f5e9',
  templates: [
    {
      background: '#FFEFD9',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#FFF5F1',
        alignment: 'left',
        position: 'afterFreebies',
        cta: true,
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
        backgroundColor: '#FFF5F1',
        alignment: 'left',
        position: 'afterFreebies',
        cta: true,
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
