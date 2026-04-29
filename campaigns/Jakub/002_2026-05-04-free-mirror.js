// Campaign generated from form
const campaignTranslationsSheet = 'Voucher - 04.05.26 - Free Mirror';

const tableQueries = [
  {
    tableRange: '21:22',
    name: 'TopImageTitle',
  },
  {
    name: 'offer',
    tableRange: '24:26',
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
    tableRange: '34:35',
    name: 'condition',
  },
  {
    tableRange: '35:38',
    name: 'paragraphs',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-04' }),
  TopImageTitle_src: translateImage({ value: '20260504_01.png' }),

  TopImage_src: getImageUrl('20260504_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-04' }),

  Banner_1: translateLink({ value: 'content/lp26-04-29' }),
  Banner_1_Image: translateImage({ value: '20260429b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-04-23' }),
  Banner_2_Image: translateImage({ value: '20260423b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE8DE',
  type: 'standard',
};

const categories = [
  // offer
  {
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#FFE8DE',
    color: '#000000',
    spaceAfter: "newsletterBottom45px",
    freebies: [[
      // YEBRA
      {
        id: '324994',
        src: getImageUrl('20260504_pic01.png', true),
      },
      // PASAKU
      {
        id: '314370',
        src: getImageUrl('20260504_pic02.png', true),
      },
      // SOLEDAD
      {
        id: '369238',
        src: getImageUrl('20260504_pic03.png', true),
      },
      // DOMME
      {
        id: '345545',
        src: getImageUrl('20260504_pic04.png', true),
      },
      //TIERGA
      {
        id: '325032',
        src: getImageUrl('20260504_pic05.png', true),
      },
      // BABAI
      {
        id: '314272',
        src: getImageUrl('20260504_pic06.png', true),
      },
    ]],
  },

  // main
  {
    name: 'Sofas',
    src: getImageUrl('20260504_Cat10.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
    background: '#fecd8c',
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
      // VINTERBRO
      {
        id: '442870',
        src: getImageUrl('20260504_Pic11.png', true),
      },
      // ASBY
      {
        id: '231617',
        src: getImageUrl('20260504_Pic12.png', true),
      },
      // CHESTERFIELD
      {
        id: '214089',
        src: getImageUrl('20260504_Pic13.png', true),
      },
      // ELVENES
      {
        id: '101669',
        src: getImageUrl('20260504_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Armchairs',
    src: getImageUrl('20260504_Cat20.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
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
      // EVJE
      {
        id: '515945',
        src: getImageUrl('20260504_Pic21.png', true),
      },
      // NOLVIK
      {
        id: '597308',
        src: getImageUrl('20260504_Pic22.png', true),
      },
      // ILBRO
      {
        id: '618024',
        src: getImageUrl('20260504_Pic23.png', true),
      },
      // ALVESTA
      {
        id: '403367',
        src: getImageUrl('20260504_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Chairs',
    src: getImageUrl('20260504_Cat30.png', true),
    href: 'https://www.beliani.ch/chairs/',
    background: '#fecd8c',
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
      // DIXON
      {
        id: '575666',
        src: getImageUrl('20260504_Pic31.png', true),
      },
      // CORDOVA
      {
        id: '424428',
        src: getImageUrl('20260504_Pic32.png', true),
      },
      // ISANTI
      {
        id: '569273',
        src: getImageUrl('20260504_Pic33.png', true),
      },
      // MYLO
      {
        id: '575229',
        src: getImageUrl('20260504_Pic34.png', true),
      },
    ],
  },
  {
    name: 'Pouffes',
    src: getImageUrl('20260504_Cat40.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/stools/',
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
      // DINNI
      {
        id: '428207',
        src: getImageUrl('20260504_Pic41.png', true),
      },
      // KANSAS
      {
        id: '512750',
        src: getImageUrl('20260504_Pic42.png', true),
      },
      // MUKKI
      {
        id: '101143',
        src: getImageUrl('20260504_Pic43.png', true),
      },
      // VIRGINIA
      {
        id: '171419',
        src: getImageUrl('20260504_Pic44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '42957',
  name: 'MON Free mirror',
  date: '04.05.2026',
  issueCardId: '470531',
  lpId: '29765',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  accent: '#d4f5e9',
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/fT3GFKWV5vDEuWXhtnyd5t/https://www.figma.com/design/c2nfd2iNss24wW7t4CaYh6/2026.05.04---Newsletter---Free-Mirror--Copy-?node-id=0-1&t=gGhMlKu26q8ES8Pg-1-Free-garden-chair---Monday-2026.04.27--Copy-?node-id=0-1&t=9f5UpsZ8IQZEknCx-1',
  templates: [
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Monday, // User should change this
      intro: {
        color: '#000000', // unused
        backgroundColor: '#fecd8c', // unused
        alignment: 'left',
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
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Monday, // User should change this
      intro: {
        color: '#000000', // unused
        backgroundColor: '#fecd8c', // unused
        alignment: 'left',
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
