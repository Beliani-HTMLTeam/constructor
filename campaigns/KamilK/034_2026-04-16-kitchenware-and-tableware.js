// Campaign generated from form
const campaignTranslationsSheet = '2026::16.04.26 - Kitchenware & tableware';

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
    tableRange: '25:28',
    name: 'paragraphs',
  },
  {
    tableRange: '21:24',
    name: 'categories',
  },
  {
    tableRange: '29:30',
    name: 'condition',
  },
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: '2026::Voucher - 13.04.26 - Free Scatter cushion',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-16' }),
  TopImageTitle_src: translateImage({ value: '20260416_01.png' }),

  TopImage_src: getImageUrl('20260416_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-04-16' }),

  Banner_1: translateLink({ value: 'content/lp26-04-09' }),
  Banner_1_Image: translateImage({ value: '20260409b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-04-08' }),
  Banner_2_Image: translateImage({ value: '20260408b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-04-13' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Knives',
    src: getImageUrl('20260416_Cat00.png', true),
    href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/kitchen-knives/',
    background: '#FFEBE2',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '60',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // IKEDA
      {
        id: 672294,
        src: getImageUrl('20260416_Pic01.png', true),
      },
      // TOCHIGI
      {
        id: 671895,
        src: getImageUrl('20260416_Pic02.png', true),
      },
      // KASHIWA
      {
        id: 671588,
        src: getImageUrl('20260416_Pic03.png', true),
      },
      // NAGANO
      {
        id: 672332,
        src: getImageUrl('20260416_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Dinnerware',
    src: getImageUrl('20260416_Cat10.png', true),
    href: 'https://www.beliani.ch/kitchenware-tableware/dinnerware/',
    background: '#FFCCB7',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // VIVANI
      {
        id: 694173,
        src: getImageUrl('20260416_Pic11.png', true),
      },
      // SPIKENARD
      {
        id: 643682,
        src: getImageUrl('20260416_Pic12.png', true),
      },
      // CHERVIL
      {
        id: 643720,
        src: getImageUrl('20260416_Pic13.png', true),
      },
      // NUTMEG
      {
        id: 705678,
        src: getImageUrl('20260416_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Cutlery',
    src: getImageUrl('20260416_Cat20.png', true),
    href: 'https://www.beliani.ch/kitchenware-tableware/cutlery/',
    background: '#FFEBE2',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // BAVETTE
      {
        id: 691013,
        src: getImageUrl('20260416_Pic21.png', true),
      },
      // FREGOLA
      {
        id: 690974,
        src: getImageUrl('20260416_Pic22.png', true),
      },
      // FARFALLE
      {
        id: 690859,
        src: getImageUrl('20260416_Pic23.png', true),
      },
      // ROTINI
      {
        id: 669043,
        src: getImageUrl('20260416_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Serveware',
    src: getImageUrl('20260416_Cat30.png', true),
    href: 'https://www.beliani.ch/kitchenware-tableware/serveware/',
    background: '#FFCCB7',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // MANSOURA
      {
        id: 645643,
        src: getImageUrl('20260416_Pic31.png', true),
      },
      // BONHEUR
      {
        id: 658034,
        src: getImageUrl('20260416_Pic32.png', true),
      },
      // BRIOCHE
      {
        id: 598694,
        src: getImageUrl('20260416_Pic33.png', true),
      },
      // HERAKLION
      {
        id: 466123,
        src: getImageUrl('20260416_Pic34.png', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20260416free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/moari4f8zy',
    CHFR: 'https://gen.sendtric.com/countdown/lsqewsz7db',
    FR: 'https://gen.sendtric.com/countdown/c97leqy9e6',
    DE: 'https://gen.sendtric.com/countdown/cpnwoijg6u',
    UK: 'https://gen.sendtric.com/countdown/wc9wi9wfo3',
    AT: 'https://gen.sendtric.com/countdown/porkwp3i4d',
    ES: 'https://gen.sendtric.com/countdown/8v748f4ltr',
    PL: 'https://gen.sendtric.com/countdown/bkpwqkkwvu',
    NL: 'https://gen.sendtric.com/countdown/l7n8vpkfz0',
    PT: 'https://gen.sendtric.com/countdown/a4o9x2kw22',
    IT: 'https://gen.sendtric.com/countdown/7pz41cghp9',
    SE: 'https://gen.sendtric.com/countdown/dfa8tpmspw',
    HU: 'https://gen.sendtric.com/countdown/vwkrd9xine',
    DK: 'https://gen.sendtric.com/countdown/4p0i5mamil',
    CZ: 'https://gen.sendtric.com/countdown/f8o7hg2qyy',
    FI: 'https://gen.sendtric.com/countdown/djrd4iqkd6',
    NO: 'https://gen.sendtric.com/countdown/zbq10f8mrd',
    SK: 'https://gen.sendtric.com/countdown/5cgrnnbbgv',
    BENL: 'https://gen.sendtric.com/countdown/qdkg423ol7',
    BEFR: 'https://gen.sendtric.com/countdown/t0er8ockcr',
    RO: 'https://gen.sendtric.com/countdown/avcdbuyxx8',
  },
};

export default new entities.Campaign({
  startId: 42733,
  name: 'Kitchenware & tableware',
  date: '16.04.2026',
  issueCardId: 461408,
  lpId: 29650,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/vAxPSLOJqvhtXecR3g8LaC/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFEBE2',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFEBE2', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FFEBE2',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFEBE2', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
      },
    },
  ],
});
