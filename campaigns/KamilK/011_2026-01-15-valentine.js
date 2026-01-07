import { TIT_TopImage_Timer_Categories } from '@/templates/AlexSrc/template/TIT_TopImage_Timer_Categories';

// Campaign generated from form
const campaignTranslationsSheet = `2026::15.01.26 - Valentine's gift guide`;

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: 'Voucher - 13.01.26 - Free Wall Decor',
  },
  {
    tableRange: '21:24',
    name: 'categories',
  },
  {
    tableRange: '25',
    name: 'gift',
  },
  {
    tableRange: '26:30',
    name: 'paragraphs',
  },
  {
    tableRange: '31:32',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-15' }),
  TopImageTitle_src: translateImage({ value: '20260115_01.png' }),

  TopImage: getImageUrl('20260115_Gif.gif', true),

  Banner_1: translateLink({ value: 'content/lp26-01-08' }),
  Banner_1_Image: translateImage({ value: '20260108b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-12-23' }),
  Banner_2_Image: translateImage({ value: '20251223b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-01-13' }),
};

const TopImageTitle_data = {
  color: '#000',
  backgroundColor: '#FFEDE6',
  type: 'up_to',
};

const timer = {
  freebies: getImageUrl('20260115_Free.png', true),
  // ! REMEMBER TO REPLACE THOSE URLS
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/wdynz75b76',
    CHFR: 'https://gen.sendtric.com/countdown/iawebkgp2z',
    FR: 'https://gen.sendtric.com/countdown/13irm6b7hp',
    DE: 'https://gen.sendtric.com/countdown/ydu8ax5aub',
    UK: 'https://gen.sendtric.com/countdown/6hzr248cjf',
    AT: 'https://gen.sendtric.com/countdown/vo7u5gs3k2',
    ES: 'https://gen.sendtric.com/countdown/030k9nbjeg',
    PL: 'https://gen.sendtric.com/countdown/jf4zuw9u7i',
    NL: 'https://gen.sendtric.com/countdown/nfp526zl31',
    PT: 'https://gen.sendtric.com/countdown/n3esgpu82q',
    IT: 'https://gen.sendtric.com/countdown/hagel577kk',
    SE: 'https://gen.sendtric.com/countdown/f8g9l0wn26',
    HU: 'https://gen.sendtric.com/countdown/zze0n72f76',
    DK: 'https://gen.sendtric.com/countdown/dtk50m36yo',
    CZ: 'https://gen.sendtric.com/countdown/fgp6ev3dcr',
    FI: 'https://gen.sendtric.com/countdown/qzbak7lkpi',
    NO: 'https://gen.sendtric.com/countdown/5s4nnlk3km',
    SK: 'https://gen.sendtric.com/countdown/pklrlkbne4',
    BENL: 'https://gen.sendtric.com/countdown/0vwlpu4p8p',
    BEFR: 'https://gen.sendtric.com/countdown/qq5aupqgy8',
    RO: 'https://gen.sendtric.com/countdown/oi7j9bhd18',
  },
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
        id: '679233',
        src: [getImageUrl('20260115_Pic01desktop.png', true), getImageUrl('20260115_Pic01desktop.png', true)],
      },
      // LINAS
      {
        id: '681031',
        src: getImageUrl('20260115_Pic02.png', true),
      },
      // MOLYBDENIUM
      {
        id: '681371',
        src: getImageUrl('20260115_Pic03.png', true),
      },

      // 3 products grid FAIRMONT
      {
        id: '	676916',
        src: getImageUrl('20260115_Pic04.png', true),
      },
      // BARTON
      {
        id: '685422',
        src: getImageUrl('20260115_Pic05.png', true),
      },
      // CASTALLA
      {
        id: '684186',
        src: getImageUrl('20260115_Pic06.png', true),
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
        id: '641397',
        src: [getImageUrl('20260115_Pic11desktop.png', true), getImageUrl('20260115_Pic11desktop.png', true)],
      },
      // DIOPSIDE
      {
        id: '468905',
        src: getImageUrl('20260115_Pic12.png', true),
      },
      // ZITI
      {
        id: '669332',
        src: getImageUrl('20260115_Pic13.png', true),
      },

      // 3 products grid NETTLE
      {
        id: '585186',
        src: getImageUrl('20260115_Pic14.png', true),
      },
      // DONEGAL
      {
        id: '640642',
        src: getImageUrl('20260115_Pic15.png', true),
      },
      // DAMANHUR
      {
        id: '646477',
        src: getImageUrl('20260115_Pic16.png', true),
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
        id: '600351',
        src: [getImageUrl('20260115_Pic21desktop.png', true), getImageUrl('20260115_Pic21desktop.png', true)],
      },
      // DELIGHT BLISS
      {
        id: '409469',
        src: getImageUrl('20260115_Pic22.png', true),
      },
      // VODNO
      {
        id: '658626',
        src: getImageUrl('20260115_Pic23.png', true),
      },

      // 3 products grid BAZARNES
      {
        id: '608542',
        src: getImageUrl('20260115_Pic24.png', true),
      },
      // CLASSY TINT
      {
        id: '408879',
        src: getImageUrl('20260115_Pic25.png', true),
      },
      // NOISETTE
      {
        id: '664683',
        src: getImageUrl('20260115_Pic26.png', true),
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
        id: '564746',
        src: [getImageUrl('20260115_Pic31desktop.png', true), getImageUrl('20260115_Pic31desktop.png', true)],
      },
      // YANKEE
      {
        id: '413674',
        src: getImageUrl('20260115_Pic32.png', true),
      },
      // THONDI
      {
        id: '189052',
        src: getImageUrl('20260115_Pic33.png', true),
      },

      // 3 products grid SCOTIA
      {
        id: '646042',
        src: getImageUrl('20260115_Pic34.png', true),
      },
      // PRODDATUR
      {
        id: '327492',
        src: getImageUrl('20260115_Pic35.png', true),
      },
      // ALDER
      {
        id: '526375',
        src: getImageUrl('20260115_Pic36.png', true),
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
    src: getImageUrl('20260115_Cat40.png', true),
    products: [],
  },
];

export default new entities.Campaign({
  startId: '39852',
  name: "Valentine's gift guide",
  date: '15.01.2026',
  lpId: '28231',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
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
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
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
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
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
