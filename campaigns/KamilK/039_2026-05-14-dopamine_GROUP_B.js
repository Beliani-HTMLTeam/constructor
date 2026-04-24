// Campaign generated from form
const campaignTranslationsSheet = '2026::14.05.26 - Dopamina Reshoot';

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
    tableRange: '21:23',
    name: 'paragraphs',
  },
  // {
  //   tableRange: '21:24',
  //   name: 'categories',
  // },
  {
    tableRange: '26:27',
    name: 'condition',
  },
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: '2026::Voucher - 11.05.26 - Free picnic blanket',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-14' }),
  TopImageTitle_src: translateImage({ value: '20260514_01.png' }),

  TopImage_src: getImageUrl('20260514_Pic.jpg', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-14' }),

  Banner_1: translateLink({ value: 'content/lp26-05-07' }),
  Banner_1_Image: translateImage({ value: '20260507b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-06' }),
  Banner_2_Image: translateImage({ value: '20260506b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-05-11' }),
};

const TopImageTitle_data = {
  color: '#FF2F00',
  backgroundColor: '#FFF0EA',
  type: 'twoSameLines',
};

const categories = [
  {
    // name: 'Dinnerware',
    src: getImageUrl('20260514_Cat00.jpg', true),
    href: 'https://www.beliani.ch/trends/maximalist-haven/',
    background: '#FFF0EA',
    color: '#750000',
    type: 'grid',
    cta: true,
    paddingTop: '60',
    title: {
      show: false,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
    },
    products: [
      // TAMNINE
      {
        id: 451258,
        src: getImageUrl('20260514_Pic01.jpg', true),
      },
      // PANEER
      {
        id: 317927,
        src: getImageUrl('20260514_Pic02.jpg', true),
      },
      // JIKAWO
      {
        id: 445099,
        src: getImageUrl('20260514_Pic03.jpg', true),
      },
      // BITETTO
      {
        id: 431195,
        src: getImageUrl('20260514_Pic04.jpg', true),
      },
    ],
  },
  {
    // name: 'Cutlery',
    src: getImageUrl('20260514_Cat10.jpg', true),
    href: 'https://www.beliani.ch/trends/maximalist-haven/',
    background: '#FFE0D9',
    color: '#750000',
    type: 'grid',
    cta: true,
    paddingTop: '0',
    title: {
      show: false,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
    },
    products: [
      // TORRENS
      {
        id: 621489,
        src: getImageUrl('20260514_Pic11.jpg', true),
      },
      // MORGANITE
      {
        id: 467859,
        src: getImageUrl('20260514_Pic12.jpg', true),
      },
      // WHIZZY
      {
        id: 722979,
        src: getImageUrl('20260514_Pic13.jpg', true),
      },
      // THETIDIO
      {
        id: 346621,
        src: getImageUrl('20260514_Pic14.jpg', true),
      },
    ],
  },
  {
    // name: 'Serveware',
    src: getImageUrl('20260514_Cat20.jpg', true),
    href: 'https://www.beliani.ch/trends/maximalist-haven/',
    background: '#FFF0EA',
    color: '#750000',
    type: 'grid',
    cta: true,
    paddingTop: '0',
    title: {
      show: false,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
    },
    products: [
      // GENOLA
      {
        id: 592476,
        src: getImageUrl('20260514_Pic21.jpg', true),
      },
      // SAKAMI
      {
        id: 611445,
        src: getImageUrl('20260514_Pic22.jpg', true),
      },
      // MILLET
      {
        id: 380643,
        src: getImageUrl('20260514_Pic23.jpg', true),
      },
      // ANSAR
      {
        id: 392378,
        src: getImageUrl('20260514_Pic24.jpg', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20260514free.jpg', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/r5xxolmegp',
    CHFR: 'https://gen.sendtric.com/countdown/7qatzpzxec',
    FR: 'https://gen.sendtric.com/countdown/zn8kmclsd2',
    DE: 'https://gen.sendtric.com/countdown/vcr6as7x6u',
    UK: 'https://gen.sendtric.com/countdown/wcqw8ooqsq',
    AT: 'https://gen.sendtric.com/countdown/c15ympm228',
    ES: 'https://gen.sendtric.com/countdown/mk40w6w8sy',
    PL: 'https://gen.sendtric.com/countdown/cvruy5vvkb',
    NL: 'https://gen.sendtric.com/countdown/yswmqlxrc4',
    PT: 'https://gen.sendtric.com/countdown/3w3cryvtz9',
    IT: 'https://gen.sendtric.com/countdown/qivol98eri',
    SE: 'https://gen.sendtric.com/countdown/opjc0aqhm6',
    HU: 'https://gen.sendtric.com/countdown/xslrmvt71c',
    DK: 'https://gen.sendtric.com/countdown/wprjjqobjz',
    CZ: 'https://gen.sendtric.com/countdown/xfyf5ux2wg',
    FI: 'https://gen.sendtric.com/countdown/i3ahr28b8x',
    NO: 'https://gen.sendtric.com/countdown/kq53jwu86u',
    SK: 'https://gen.sendtric.com/countdown/pzvnmgjmw5',
    BENL: 'https://gen.sendtric.com/countdown/e38rf9c10r',
    BEFR: 'https://gen.sendtric.com/countdown/zok24mul3m',
    RO: 'https://gen.sendtric.com/countdown/ovnvu74mqj',
  },
};

export default new entities.Campaign({
  startId: 43662,
  name: 'Dopamina Reshoot [GROUP B]',
  date: '14.05.2026',
  issueCardId: 468170,
  // lpId: 30109,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/H0DjNdGQ9gTwikGTwVVcvT/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFF0EA',
      color: '#750000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#750000', // unused
        backgroundColor: '#FFF0EA', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FFF0EA',
      color: '#750000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#750000', // unused
        backgroundColor: '#FFF0EA', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
      },
    },
  ],
});
