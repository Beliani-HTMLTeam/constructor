const campaignTranslationsSheet = ' 22.06.26 - Free Bed Linen';

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
    tableRange: '35:36',
  },
  {
    name: 'paragraphs',
    tableRange: '35:38',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/living-room-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-22' }),
  TopImageTitle_src: translateImage({ value: '20260622_01.png' }),

  TopImage_src: getImageUrl('20260622_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-22' }),

  Banner_1: translateLink({ value: 'content/lp26-06-04' }),
  Banner_1_Image: translateImage({ value: '20260604b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-10' }),
  Banner_2_Image: translateImage({ value: '20260610b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE3D8',
  type: 'standard',
};

const categories = [
  // offer
  {
    copyCodeWeb : true, 
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#FFE3D8',
    color: '#000000',
    spaceAfter: 'newsletterBottom45px',
    products: [
      { id: '247876', src: getImageUrl('20260622_pic01.png', true), size: '155 x 220 cm' },
      { id: '247871', src: getImageUrl('20260622_pic02.png', true), size: '135 x 200 cm' },
      { id: '247885', src: getImageUrl('20260622_pic03.png', true), size: '155 x 220 cm' },
      { id: '247883', src: getImageUrl('20260622_pic04.png', true), size: '155 x 220 cm' },
    ],
  },

  // main
  {
    name: 'PASCO',
    nameOverride: 'PASCO',
    src: getImageUrl('20260622_Cat10.png', true),
    href: 'https://www.beliani.ch/search/pasco/',
    skipLinkTranslation: true,
    background: '#E3CCCC',
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
        id: '260678',
        src: getImageUrl('20260622_pic11.png', true), 
      },
      {
        id: '260571',
        src: getImageUrl('20260622_pic12.png', true), 
      },
      {
        id: '260609',
        src: getImageUrl('20260622_pic13.png', true), 
      },
      {
        id: '517753',
        src: getImageUrl('20260622_pic14.png', true), 
      },
    ],
  },
  {
    name: 'LYNWOOD',
    nameOverride: 'LYNWOOD',
    src: getImageUrl('20260622_Cat20.png', true),
    href: 'https://www.beliani.ch/search/lynwood/',
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
        id: '569521',
        src: getImageUrl('20260622_pic21.png', true), 
      },
      {
        id: '569311',
        src: getImageUrl('20260622_pic22.png', true), 
      },
      {
        id: '569598',
        src: getImageUrl('20260622_pic23.png', true), 
      },
      {
        id: '569559',
        src: getImageUrl('20260622_pic24.png', true), 
      },
    ],
  },
  {
    name: 'OPOCO',
    nameOverride: 'OPOCO',
    src: getImageUrl('20260622_Cat30.png', true),
    href: 'https://www.beliani.ch/search/opoco/',
    skipLinkTranslation: true,
    background: '#E3CCCC',
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
        id: '406663',
        src: getImageUrl('20260622_pic31.png', true), 
      },
      {
        id: '406629',
        src: getImageUrl('20260622_pic32.png', true), 
      },
      {
        id: '406681',
        src: getImageUrl('20260622_pic33.png', true), 
      },
      {
        id: '406646',
        src: getImageUrl('20260622_pic34.png', true), 
      },
    ],
  },
  {
    name: 'BRADLEY',
    nameOverride: 'BRADLEY',
    src: getImageUrl('20260622_Cat40.png', true),
    href: 'https://www.beliani.ch/search/bradley/',
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
        id: '624238',
        src: getImageUrl('20260622_pic41.png', true), 
      },
      {
        id: '624257',
        src: getImageUrl('20260622_pic42.png', true), 
      },
      {
        id: '624294',
        src: getImageUrl('20260622_pic43.png', true), 
      },
      {
        id: '624200',
        src: getImageUrl('20260622_pic44.png', true), 
      },
    ],
  }
];

export default new entities.Campaign({
  startId: '44817',
  name: 'MON Free Bed linen',
  date: '22.06.2026',
  issueCardId: '493899',
  lpId: '30681',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  soon_banners: true,
  figmaUrl: 'https://www.figma.com/design/e2cie1Q0qGlSyQUCGARSjq/Newsletter-Free-Bed-linen---Monday-2026.06.22--Copy-?node-id=0-1&t=sm1LS22ZbgoChFnN-1',
  accent: '#d4f5e9',
  templates: [
    {
      background: '#FFE3D8',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#E3CCCC',
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
      background: '#FFE3D8',
      color: '#000000',
      template: templates.Monday,
      intro: {
        color: '#000000',
        backgroundColor: '#E3CCCC',
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