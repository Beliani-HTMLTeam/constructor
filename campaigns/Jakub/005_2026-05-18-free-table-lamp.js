// Campaign generated from form
const campaignTranslationsSheet = 'Voucher - 18.05.26 - Free table lamp';

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
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-18' }),
  TopImageTitle_src: translateImage({ value: '20260518_01.png' }),

  //Intro_cta_href: translateLink({ value: 'https://www.beliani.ch/living-room-furniture/tables' }),

  TopImage_src: getImageUrl('20260518_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-18' }),

  Banner_1: translateLink({ value: 'content/lp26-05-07' }),
  Banner_1_Image: translateImage({ value: '20260507b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-06' }),
  Banner_2_Image: translateImage({ value: '20260506b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCBBF', 
  type: 'standard',
};

const categories = [
  // offer
  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://www.beliani.ch/living-room-furniture/tables',
    paddingTop: '0',
    type: 'deal',
    background: '#FFCBBF',
    color: '#000000',
    spaceAfter: "newsletterBottom45px",
    freebies: [[
      // LABRADA
      {
        id: '414734', 
        src: getImageUrl('20260518_Pic02.png', true),
      },
      // DOUCE
      {
        id: '343763', 
        src: getImageUrl('20260518_Pic03.png', true),
      },
      // CHAMAELEON
      { 
        id: '379512',
        src: getImageUrl('20260518_Pic04.png', true),
      },
    ]],
  },

  // main
  {
    name: 'Dining Tables',
    src: getImageUrl('20260518_Cat10.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/tables/dining-tables/',
    background: '#FFD8A6', 
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
      // MADOX 
      {
        id: '415056',
        src: getImageUrl('20260518_Pic11.png', true),
      },
      // SHERIDAN
      {
        id: '398740',
        src: getImageUrl('20260518_Pic12.png', true),
      },
      // BUSCOT
      {
        id: '172266',
        src: getImageUrl('20260518_Pic13.png', true),
      },
      // PLATO
      {
        id: '564043',
        src: getImageUrl('20260518_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Coffee Tables',
    src: getImageUrl('20260518_Cat20.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/tables/coffee-tables/',
    background: '#FFCBBF',
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
      // ONDLE
      {
        id: '449670',
        src: getImageUrl('20260518_Pic21.png', true),
      },
      // MELODY
      {
        id: '156191',
        src: getImageUrl('20260518_Pic22.png', true),
      },
      // JOSE
      {
        id: '337005',
        src: getImageUrl('20260518_Pic23.png', true),
      },
      // MAUMEE
      {
        id: '691547',
        src: getImageUrl('20260518_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Console Tables',
    src: getImageUrl('20260518_Cat30.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/tables/console-tables/',
    background: '#FFD8A6',
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
      // SALTON
      {
        id: '562573',
        src: getImageUrl('20260518_Pic31.png', true),
      },
      // RONGE
      {
        id: '697656',
        src: getImageUrl('20260518_Pic32.png', true),
      },
      // JOSE
      {
        id: '336987',
        src: getImageUrl('20260518_Pic33.png', true),
      },
      // DELANO
      {
        id: '179148',
        src: getImageUrl('20260518_Pic34.png', true),
      },
    ],
  },
  {
    name: 'Garden Tables',
    src: getImageUrl('20260518_Cat40.png', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-tables/',
    background: '#FFCBBF',
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
      // CAORIA 
      {
        id: '407567',
        src: getImageUrl('20260518_Pic41.png', true),
      },
      // SIRMIONE
      {
        id: '709805',
        src: getImageUrl('20260518_Pic42.png', true),
      },
      // TOFANE
      {
        id: '517639',
        src: getImageUrl('20260518_Pic43.png', true),
      },
      // AISA
      {
        id: '712712',
        src: getImageUrl('20260518_Pic44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '43341',
  name: 'MON Free table lamp',
  date: '18.05.2026',
  issueCardId: '477794',
  lpId: '29942',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  accent: '#d4f5e9',
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/newqOligrlULyRWa7QPjDW/2026.05.18---Newsletter---Free-table-lamp--Copy-?node-id=0-1&t=iBhUDC8PyMywTQYn-1',
  templates: [
    {
      background: '#FFD8A6',
      color: '#000000',
      template: templates.Monday, 
      intro: {
        color: '#000000', 
        backgroundColor: '#FFD8A6', 
        alignment: 'left',
        cta: true,
       //href: 'https://www.beliani.ch/living-room-furniture/tables',
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
      background: '#FFD8A6',
      color: '#000000',
      template: templates.Monday, 
      intro: {
        color: '#000000',
        backgroundColor: '#FFD8A6', 
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
