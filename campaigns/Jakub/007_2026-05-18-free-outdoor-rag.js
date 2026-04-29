// Campaign generated from form
const campaignTranslationsSheet = 'Voucher - 25.05.26 - Outdoor rug';

const tableQueries = [
  {
    tableRange: '22:23',
    name: 'TopImageTitle',
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
    tableRange: '35:36',
    name: 'condition',
  },
  {
    tableRange: '35:38',
    name: 'paragraphs',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-25' }),
  TopImageTitle_src: translateImage({ value: '20260525_01.png' }),

  TopImage_src: getImageUrl('20260525_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-25' }),

  Banner_1: translateLink({ value: 'content/lp26-05-15' }),
  Banner_1_Image: translateImage({ value: '20260515b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-13' }),
  Banner_2_Image: translateImage({ value: '20260513b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE6DB', 
  type: 'standard',
};

const categories = [
  // offer
  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
    paddingTop: '0',
    type: 'deal',
    background: '#FFE6DB',
    color: '#000000',
    spaceAfter: "newsletterBottom45px",
    freebies: [[
      // TUMKUR 
      {
        id: '185969', 
        src: getImageUrl('20260525_Pic01.png', true),
      },
      // LATUR 
      {
        id: '185849', 
        src: getImageUrl('20260525_Pic02.png', true),
      },
      // HALDIA (blue)
      { 
        id: '185852',
        src: getImageUrl('20260525_Pic03.png', true),
      },
      // HISAR 
      {
        id: '185912', 
        src: getImageUrl('20260525_Pic04.png', true),
      },
      // HALDIA (green)
      {
        id: '97589', 
        src: getImageUrl('20260525_Pic05.png', true),
      },
      // BALLARI 
      { 
        id: '186262',
        src: getImageUrl('20260525_Pic06.png', true),
      },
    ]],
  },

  // main
  {
    name: 'Dining Sets',
    src: getImageUrl('20260525_Cat10.png', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-dining-sets/',
    background: '#FFEFD9', 
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
      // ALIANO
      {
        id: '294731', 
        src: getImageUrl('20260525_Pic11.png', true),
      },
      // VERNIO
      {
        id: '8312', 
        src: getImageUrl('20260525_Pic12.png', true),
      },
      // MAUI
      { 
        id: '64978',
        src: getImageUrl('20260525_Pic13.png', true),
      },
      // ANCONA
      {
        id: '263967', 
        src: getImageUrl('20260525_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Garden Tables',
    src: getImageUrl('20260525_Cat20.png', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-tables/',
    background: '#FFE6DB',
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
      // CONZA 
      {
        id: '636095', 
        src: getImageUrl('20260525_Pic21.png', true),
      },
      // OLBIA
      { 
        id: '195095',
        src: getImageUrl('20260525_Pic22.png', true),
      },
      // TUSCANIA 
      {
        id: '259061',
        src: getImageUrl('20260525_Pic23.png', true),
      },
      // CESANA 
      {
        id: '71526',
        src: getImageUrl('20260525_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Garden Chairs',
    src: getImageUrl('20260525_Cat30.png', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-chairs/',
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
      // SASSARI 
      {
        id: '511747',
        src: getImageUrl('20260525_Pic31.png', true),
      },
      // OLBIA 
      {
        id: '195095',
        src: getImageUrl('20260525_Pic32.png', true),
      },
      // CINE 
      {
        id: '288028',
        src: getImageUrl('20260525_Pic33.png', true),
      },
      // CESANA 
      {
        id: '71526',
        src: getImageUrl('20260525_Pic34.png', true),
      },
    ],
  },
  {
    name: 'Balcony furniture',
    src: getImageUrl('20260525_Cat40.png', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/',
    background: '#FFE6DB',
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
      // BARATTI  
      {
        id: '330930',
        src: getImageUrl('20260525_Pic41.png', true),
      },
      // CARIATI 
      {
        id: '321406',
        src: getImageUrl('20260525_Pic42.png', true),
      },
      // CONIOLO 
      {
        id: '622222',
        src: getImageUrl('20260525_Pic43.png', true),
      },
      // PECORINI 
      {
        id: '596587',
        src: getImageUrl('20260525_Pic44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '43726',
  name: 'MON Free outdoor rag',
  date: '25.05.2026',
  issueCardId: '479257',
  lpId: '30147',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  accent: '#d4f5e9',
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/zSECb8cWxl0i2tKvUT5Tdj/Newsletter-Outdoor-rug---Monday-2026.05.25-FINAL--Copy-?node-id=0-1&t=mKMDBmNDrgZIB671-1',
  templates: [
    {
      background: '#FFEFD9',
      color: '#000000',
      template: templates.Monday, // User should change this
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFEFD9', // unused
        alignment: 'left',
        cta: true,
        position: 'afterFreebies',
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
      template: templates.Monday, // User should change this
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFEFD9', // unused
        alignment: 'left',
        cta: true,
        position: 'afterFreebies',
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
