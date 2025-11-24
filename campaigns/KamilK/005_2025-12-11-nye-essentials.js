import { templates } from '@/templates/index.js';

// Campaign generated from form
const campaignTranslationsSheet = '11.12.25 - NYE essentials';

const tableQueries = [
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableRange: '16',
    name: 'intro',
  },
  {
    tableRange: '17:20',
    name: 'categories',
  },
  {
    tableRange: '12:13',
    name: 'timer',
    tableName: 'Voucher - 08.12.25 - Free gift',
  },
  {
    tableRange: '21:24',
    name: 'paragraphs',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-11' }),
  TopImageTitle_src: translateImage({ value: '20251211_01.png' }),

  TopImage_href: translateLink({ value: 'content/lp25-12-11' }),
  TopImage_src: getImageUrl('20251211_Pic.png', true),

  Timer_href: translateLink({ value: 'content/lp25-12-08' }),

  Banner_1: translateLink({ value: 'content/lp25-12-04' }),
  Banner_1_Image: translateImage({ value: '20251204b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-12-03' }),
  Banner_2_Image: translateImage({ value: '20251203b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEC273',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Dining tables',
    src: getImageUrl('20251211_Cat00.png', true),
    href: 'https://www.beliani.ch/tables/dining-tables/',
    background: '#FEC273',
    color: '#000000',
    type: 'grid',
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
      // CROSBY
      {
        id: '520121',
        src: getImageUrl('20251211_Pic01.png', true),
      },
      // LUNNIN
      {
        id: '679366',
        src: getImageUrl('20251211_Pic02.png', true),
      },
      // WAIPORI
      {
        id: '667426',
        src: getImageUrl('20251211_Pic03.png', true),
      },
      // EFTALIA
      {
        id: '310164',
        src: getImageUrl('20251211_Pic04.png', true),
      },
    ],
  },

  {
    name: 'Kitchen trolleys',
    src: getImageUrl('20251211_Cat10.png', true),
    href: 'https://www.beliani.ch/storage/kitchen-trolleys/',
    background: '#BA8080',
    color: '#000000',
    type: 'grid',
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
      // NOTI
      {
        id: '311036',
        src: getImageUrl('20251211_Pic11.png', true),
      },
      // MARCOLA
      {
        id: '311077',
        src: getImageUrl('20251211_Pic12.png', true),
      },
      // COLTON
      {
        id: '311095',
        src: getImageUrl('20251211_Pic13.png', true),
      },
      // GABBS
      {
        id: '306079',
        src: getImageUrl('20251211_Pic14.png', true),
      },
    ],
  },

  {
    name: 'Decorative plates',
    src: getImageUrl('20251211_Cat20.png', true),
    href: 'https://www.beliani.ch/kitchenware-tableware/decorative-plates/',
    background: '#FEC273',
    color: '#000000',
    type: 'grid',
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
      // BIRMA
      {
        id: '190061',
        src: getImageUrl('20251211_Pic21.png', true),
      },
      // DAMANHUR
      {
        id: '646477',
        src: getImageUrl('20251211_Pic22.png', true),
      },
      // SUNBAT
      {
        id: '190068',
        src: getImageUrl('20251211_Pic23.png', true),
      },
      // BRANTAS
      {
        id: '370016',
        src: getImageUrl('20251211_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Candle holders',
    src: getImageUrl('20251211_Cat30.png', true),
    href: 'https://www.beliani.ch/accessories-decor/candle-holders/',
    background: '#BA8080',
    color: '#000000',
    type: 'grid',
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
      // TRAFARIA
      {
        id: '600103',
        src: getImageUrl('20251211_Pic31.png', true),
      },
      // SIPANJE
      {
        id: '658721',
        src: getImageUrl('20251211_Pic32.png', true),
      },
      // COBH
      {
        id: '634726',
        src: getImageUrl('20251211_Pic33.png', true),
      },
      // ARRENTELA
      {
        id: '600427',
        src: getImageUrl('20251211_Pic34.png', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20251211_free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/1q4mdde4nr',
    CHFR: 'https://gen.sendtric.com/countdown/gbvy4wgvks',
    FR: 'https://gen.sendtric.com/countdown/ixio51fy2r',
    DE: 'https://gen.sendtric.com/countdown/ze6azplvms',
    UK: 'https://gen.sendtric.com/countdown/v5w124hges',
    AT: 'https://gen.sendtric.com/countdown/49lzkmfocx',
    ES: 'https://gen.sendtric.com/countdown/pgd87qw5gd',
    PL: 'https://gen.sendtric.com/countdown/jp0hpjojip',
    NL: 'https://gen.sendtric.com/countdown/kqklzrtkvq',
    PT: 'https://gen.sendtric.com/countdown/r3l2naopkv',
    IT: 'https://gen.sendtric.com/countdown/dnkrw0n9an',
    SE: 'https://gen.sendtric.com/countdown/lqf5ixsdxs',
    HU: 'https://gen.sendtric.com/countdown/e2l4hpczkp',
    DK: 'https://gen.sendtric.com/countdown/pr2vijvdql',
    CZ: 'https://gen.sendtric.com/countdown/oy4p6kkm60',
    FI: 'https://gen.sendtric.com/countdown/u2a6cykuz3',
    NO: 'https://gen.sendtric.com/countdown/wfjqho3bms',
    SK: 'https://gen.sendtric.com/countdown/0i2ly09pnp',
    BENL: 'https://gen.sendtric.com/countdown/zz9l43kez2',
    BEFR: 'https://gen.sendtric.com/countdown/5b6y373vf5',
    RO: 'https://gen.sendtric.com/countdown/gywjy4a9yp',
  },
};

export default new entities.Campaign({
  startId: '38920',
  name: 'NYE essentials',
  date: '11.12.2025',
  issueCardId: '424434',
  lpId: '27770',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/wVVHQwkOQK3exmoUlYKE5U/COPY-%7C-2025.12.11--NYE-essentials?node-id=11013-151&t=v18yn8cxOnfron1W-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FEC273',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: '#000000',
        backgroundColor: '#F6E7E6',
        type: 'timer',
      },
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FEC273', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      timer: timer,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FEC273',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: '#000000',
        backgroundColor: '#F6E7E6',
        type: 'timer',
      },
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FEC273', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      timer: timer,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

