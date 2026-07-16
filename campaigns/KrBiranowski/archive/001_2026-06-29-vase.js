const campaignTranslationsSheet = 'Voucher - 29.06.26 - Vase';

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '22:23',
  },
  {
    name: 'offer',
    tableRange: '25:28',
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
    tableRange: '39:40',
  },
  {
    name: 'categories',
    tableRange: '32:35',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/armchairs/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-29' }),
  TopImageTitle_src: translateImage({ value: '20260629_01.png' }),

  TopImage_src: getImageUrl('20260629_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-29' }),

  Banner_1: translateLink({ value: 'content/lp26-06-24' }),
  Banner_1_Image: translateImage({ value: '20260624b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-18' }),
  Banner_2_Image: translateImage({ value: '20260618b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEDE6',
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
    background: '#FFEDE6',
    color: '#000000',
    spaceAfter: 'newsletterBottom45px',
    freebies: [
      [
        { id: '363119', src: getImageUrl('20260629_pic01.png', true) },
        { id: '363057', src: getImageUrl('20260629_pic02.png', true) },
        { id: '363700', src: getImageUrl('20260629_pic03.png', true) },
      ],
      [
        { id: '363504', src: getImageUrl('20260629_pic04.png', true) },
        { id: '361829', src: getImageUrl('20260629_pic05.png', true) },
        { id: '363076', src: getImageUrl('20260629_pic06.png', true) },
      ],
    ],
  },

  // main
  {
    name: 'Fabric armchairs',
    // nameOverride: 'PASCO',
    src: getImageUrl('20260629_Cat10.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/fabric-armchairs/',
    skipLinkTranslation: true,
    background: '#FFB6A6',
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
        id: '628880',
        src: getImageUrl('20260629_pic11.png', true),
      },
      {
        id: '510717',
        src: getImageUrl('20260629_pic12.png', true),
      },
      {
        id: '667867',
        src: getImageUrl('20260629_pic13.png', true),
      },
      {
        id: '679738',
        src: getImageUrl('20260629_pic14.png', true),
      },
    ],
  },
  {
    name: 'Hanging chairs',
    // nameOverride: 'LYNWOOD',
    src: getImageUrl('20260629_Cat20.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/hanging-chairs/',
    skipLinkTranslation: true,
    background: '#FFEDE6',
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
        id: '188622',
        src: getImageUrl('20260629_pic21.png', true),
      },
      {
        id: '188765',
        src: getImageUrl('20260629_pic22.png', true),
      },
      {
        id: '238070',
        src: getImageUrl('20260629_pic23.png', true),
      },
      {
        id: '122486',
        src: getImageUrl('20260629_pic24.png', true),
      },
    ],
  },
  {
    name: 'Reclining armchairs',
    // nameOverride: 'OPOCO',
    src: getImageUrl('20260629_Cat30.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/reclining-armchairs/',
    skipLinkTranslation: true,
    background: '#FFB6A6',
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
        id: '581324',
        src: getImageUrl('20260629_pic31.png', true),
      },
      {
        id: '423659',
        src: getImageUrl('20260629_pic32.png', true),
      },
      {
        id: '594969',
        src: getImageUrl('20260629_pic33.png', true),
      },
      {
        id: '62561',
        src: getImageUrl('20260629_pic34.png', true),
      },
    ],
  },
  {
    name: 'Rocking armchairs',
    // nameOverride: 'BRADLEY',
    src: getImageUrl('20260629_Cat40.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/rocking-chairs/',
    skipLinkTranslation: true,
    background: '#FFEDE6',
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
        id: '383685',
        src: getImageUrl('20260629_pic41.png', true),
      },
      {
        id: '599304',
        src: getImageUrl('20260629_pic42.png', true),
      },
      {
        id: '138924',
        src: getImageUrl('20260629_pic43.png', true),
      },
      {
        id: '599267',
        src: getImageUrl('20260629_pic44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '45247',
  name: 'MON Free Vase',
  date: '29.06.2026',
  issueCardId: '496672',
  lpId: '30951',
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
      background: '#FFEDE6',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#FFB6A6',
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
      background: '#FFEDE6',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#FFB6A6',
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
