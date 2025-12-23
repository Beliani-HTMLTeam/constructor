import { TIT_TopImage_Timer_Categories } from '@/templates/AlexSrc/template/TIT_TopImage_Timer_Categories';

// Campaign generated from form
const campaignTranslationsSheet = `2026::Mother's Day Gift Guide`;

const tableQueries = [
  {
    tableRange: '15:16',
    name: 'TopImageTitle',
  },
  {
    tableRange: '18',
    name: 'intro',
  },
  {
    tableRange: '19:22',
    name: 'categories',
  },
  {
    tableRange: '25:27',
    name: 'gift',
  },
  {
    tableRange: '31:32',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-14' }),
  TopImageTitle_src: translateImage({ value: '20260114_01.png' }),

  TopImage: getImageUrl('20260114_gif.gif', true),

  Banner_1: translateLink({ value: 'content/lp25-12-23' }),
  Banner_1_Image: translateImage({ value: '20251223b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-01-08' }),
  Banner_2_Image: translateImage({ value: '20260108b.png' }),
};

const TopImageTitle_data = {
  color: '#000',
  backgroundColor: '#FFEDE6',
  type: 'up_to',
};

const timer = {
  // freebies: getImageUrl('YYYYMMDD_Free.png', true),
  // // ! REMEMBER TO REPLACE THOSE URLS
  // image: {
  //   CHDE: 'https://gen.sendtric.com/countdown/3x5402a5a5',
  //   CHFR: 'https://gen.sendtric.com/countdown/7d3zl0s986',
  //   FR: 'https://gen.sendtric.com/countdown/12rdr6dtgo',
  //   DE: 'https://gen.sendtric.com/countdown/sv2q3k1x3y',
  //   UK: 'https://gen.sendtric.com/countdown/c4cghowbf1',
  //   AT: 'https://gen.sendtric.com/countdown/ypa0wk4eup',
  //   ES: 'https://gen.sendtric.com/countdown/sehb5k3z7z',
  //   PL: 'https://gen.sendtric.com/countdown/zlnhbu660w',
  //   NL: 'https://gen.sendtric.com/countdown/mr9bn0q4c8',
  //   PT: 'https://gen.sendtric.com/countdown/61n8wy3y4m',
  //   IT: 'https://gen.sendtric.com/countdown/lxloewzogf',
  //   SE: 'https://gen.sendtric.com/countdown/y2imagqwpt',
  //   HU: 'https://gen.sendtric.com/countdown/udnrsqd4o8',
  //   DK: 'https://gen.sendtric.com/countdown/uvfzgmkwr6',
  //   CZ: 'https://gen.sendtric.com/countdown/ajq5qcnl44',
  //   FI: 'https://gen.sendtric.com/countdown/hgh6virvh8',
  //   NO: 'https://gen.sendtric.com/countdown/nfx8ncvozu',
  //   SK: 'https://gen.sendtric.com/countdown/x8yr4llgxx',
  //   BENL: 'https://gen.sendtric.com/countdown/442t1ogqur',
  //   BEFR: 'https://gen.sendtric.com/countdown/kgyur9di1m',
  //   RO: 'https://gen.sendtric.com/countdown/ke5m9a4zrx',
  // },
};

const categories = [
  {
    title: { show: true },
    type: 'test-cat',
    background: '#FFEDE6',
    color: '#000000',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    // src: getImageUrl('20251030_Cat00.png', true),
    href: 'https://www.beliani.ch/gift-guide/for-design-lover/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '394733',
        src: [
          getImageUrl('category1Desktop.png', true),
          getImageUrl('category1Mobile.png', true),
         ],
      },
      // SESAME
      {
        id: '394733',
        src: getImageUrl('category11.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('category12.png', true),
      },

      // 3 products grid
      {
        id: '469028',
        src: getImageUrl('category13.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('category14.png', true),
      },
      // IOANNINA
      {
        id: '464301',
        src: getImageUrl('category15.png', true),
      },
    ],
  },

  // New York
  {
    title: { show: true },
    type: 'test-cat',
    background: '#FFEDE6',
    color: '#000000',
    productsAlignment: 'right',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    // src: getImageUrl('20251030_Cat00.png', true),
    href: 'https://www.beliani.ch/gift-guide/gift-guide-host/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '394733',
        src: [
          getImageUrl('category2Desktop.png', true),
          getImageUrl('category2Mobile.png', true),
         ],
      },
      // SESAME
      {
        id: '394733',
        src: getImageUrl('category21.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('category22.png', true),
      },

      // 3 products grid
      {
        id: '469028',
        src: getImageUrl('category23.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('category24.png', true),
      },
      // IOANNINA
      {
        id: '464301',
        src: getImageUrl('category25.png', true),
      },
    ],
  },
  {
    title: { show: true },
    type: 'test-cat',
    background: '#FFEDE6',
    color: '#000000',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    // src: getImageUrl('20251030_Cat00.png', true),
    href: 'https://www.beliani.ch/gift-guide/for-scent-lover/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '394733',
        src: [getImageUrl('category3Desktop.png', true), getImageUrl('category3Mobile.png', true)],
      },
      // SESAME
      {
        id: '394733',
        src: getImageUrl('category31.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('category32.png', true),
      },

      // 3 products grid
      {
        id: '469028',
        src: getImageUrl('category33.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('category34.png', true),
      },
      // IOANNINA
      {
        id: '464301',
        src: getImageUrl('category35.png', true),
      },
    ],
  },
  {
    title: { show: true },
    type: 'test-cat',
    background: '#FFEDE6',
    color: '#000000',
    productsAlignment: 'right',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    // src: getImageUrl('20251030_Cat00.png', true),
    href: 'https://www.beliani.ch/gift-guide/gift-guide-homebody/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '394733',
        src: [
          getImageUrl('category4Desktop.png', true),
          getImageUrl('category4Mobile.png', true),
         ],
      },
      // SESAME
      {
        id: '394733',
        src: getImageUrl('category41.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('category42.png', true),
      },

      // 3 products grid
      {
        id: '469028',
        src: getImageUrl('category43.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('category44.png', true),
      },
      // IOANNINA
      {
        id: '464301',
        src: getImageUrl('category45.png', true),
      },
    ],
  },
  {
    name: 'Gift Vouchers',
    href: 'https://www.beliani.ch/gift-cards/',
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    background: '#FFEDE6',
    color: '#000000',
    ctaElement: { show: true },
    showParagraph: true,
    showWhiteLine: false,
    src: getImageUrl('giftVoucherMD.png', true),
    products: [],
  },
];

export default new entities.Campaign({
  startId: '0000',
  name: 'Test ',
  date: '10.10.2025',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: TIT_TopImage_Timer_Categories, // User should change this
      css: types.CSS.NS_MD,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFEDE6',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        background: '#FFEDE6',
        color: '#000000',
      },
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: TIT_TopImage_Timer_Categories, // User should change this
      css: types.CSS.LP_MD,
      background: '#FFEDE6',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        background: '#FFEDE6',
        color: '#000000',
      },
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
