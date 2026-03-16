// Campaign generated from form
const campaignTranslationsSheet = '2026::22.01.26 - Winter favourites';

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
    tableRange: '23:24',
    name: 'condition',
  },
  {
    tableRange: '14:15',
    name: 'timer',
    tableName: '2026::Voucher - 20.01.26 - free mirror',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-22' }),
  TopImageTitle_src: translateImage({ value: '20260122_01.png' }),

  TopImage_src: getImageUrl('20260122_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-22' }),

  Banner_1: translateLink({ value: 'content/lp26-01-15' }),
  Banner_1_Image: translateImage({ value: '20260115b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-01-14' }),
  Banner_2_Image: translateImage({ value: '20260114b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-01-20' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FAF2F1',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Electric fireplaces & mantels',
    src: getImageUrl('20260122_Cat00.png', true),
    href: 'https://www.beliani.ch/accessories-decor/electric-fireplaces-and-mantels/',
    background: '#FAF2F1',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '60',
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
      // NYIRI
      {
        id: '525527',
        src: getImageUrl('20260122_Pic01.png', true),
      },
      // SAHARA
      {
        id: '525435',
        src: getImageUrl('20260122_Pic02.png', true),
      },
      // DJURAB
      {
        id: '525548',
        src: getImageUrl('20260122_Pic03.png', true),
      },
      // BUNBURY
      {
        id: '577671',
        src: getImageUrl('20260122_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Blankets',
    src: getImageUrl('20260122_Cat10.png', true),
    href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
    background: '#FF8266',
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
      // BAYBURT
      {
        id: '374003',
        src: getImageUrl('20260122_Pic11.png', true),
      },
      // DELICE
      {
        id: '266960',
        src: getImageUrl('20260122_Pic12.png', true),
      },
      // YASAM
      {
        id: '351509',
        src: getImageUrl('20260122_Pic13.png', true),
      },
      // BETALI
      {
        id: '351269',
        src: getImageUrl('20260122_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Sheepskin & faux fur rugs',
    src: getImageUrl('20260122_Cat20.png', true),
    href: 'https://www.beliani.ch/rugs/sheepskin-rugs/',
    background: '#FAF2F1',
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
      // MUNGO
      {
        id: '96610',
        src: getImageUrl('20260122_Pic21.png', true),
      },
      // ULURU
      {
        id: '82891',
        src: getImageUrl('20260122_Pic22.png', true),
      },
      // MAMUNGARI
      {
        id: '322829',
        src: getImageUrl('20260122_Pic23.png', true),
      },
      // BOGONG
      {
        id: '308899',
        src: getImageUrl('20260122_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Candle holders',
    src: getImageUrl('20260122_Cat30.png', true),
    href: 'https://www.beliani.ch/accessories-decor/candle-holders/',
    background: '#FF8266',
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
      // SIPANJE
      {
        id: '658721',
        src: getImageUrl('20260122_Pic31.png', true),
      },
      // KRADENIK
      {
        id: '658684',
        src: getImageUrl('20260122_Pic32.png', true),
      },
      // RAMADA
      {
        id: '600448',
        src: getImageUrl('20260122_Pic33.png', true),
      },
      // LIWUNG
      {
        id: '369811',
        src: getImageUrl('20260122_Pic34.png', true),
      },
    ],
  },
];

//
//
//                  TIMERS ARE OLD
//
//
const timer = {
  freebies: getImageUrl('20260122_Free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/3f0jdj2gy2',
    CHFR: 'https://gen.sendtric.com/countdown/es0xyyl5pj',
    FR: 'https://gen.sendtric.com/countdown/9crpjvjpg0',
    DE: 'https://gen.sendtric.com/countdown/zi199bxrv5',
    UK: 'https://gen.sendtric.com/countdown/54il7xhjt9',
    AT: 'https://gen.sendtric.com/countdown/erc20r7tkg',
    ES: 'https://gen.sendtric.com/countdown/wcn4l8fdgi',
    PL: 'https://pictureserver.net/static/2026/plbroken_timer22012026.png',
    NL: 'https://gen.sendtric.com/countdown/rdpy310n03',
    PT: 'https://gen.sendtric.com/countdown/82of4ovj39',
    IT: 'https://gen.sendtric.com/countdown/o1ackr507f',
    SE: 'https://gen.sendtric.com/countdown/xt23b76v3a',
    HU: 'https://pictureserver.net/static/2026/hubroken_timer22012026.png',
    DK: 'https://gen.sendtric.com/countdown/l3eub3qxne',
    CZ: 'https://gen.sendtric.com/countdown/009h62orxn',
    FI: 'https://gen.sendtric.com/countdown/50hkow12yw',
    NO: 'https://gen.sendtric.com/countdown/xz6umiwrt5',
    SK: 'https://gen.sendtric.com/countdown/3ce3n3q3t2',
    BENL: 'https://gen.sendtric.com/countdown/xvqczt2l24',
    BEFR: 'https://gen.sendtric.com/countdown/w1wg71qwzb',
    RO: 'https://gen.sendtric.com/countdown/g79ob2pncp',
  },
};

export default new entities.Campaign({
  startId: '39820',
  name: 'Winter favourites',
  date: '22.01.2026',
  issueCardId: '437254',
  lpId: '28212',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/RUvV56IjNXdwztYTIMkH6d/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FAF2F1',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FAF2F1', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FAF2F1',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FAF2F1', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
      },
    },
  ],
});
