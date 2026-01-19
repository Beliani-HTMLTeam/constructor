import { mondayRegularNslt } from '@/templates/AlexSrc/template/mondayRegularNslt';

// Campaign generated from form
const campaignTranslationsSheet = '2026::02.02.26 - Voucher - Free scatter cushion set';

const tableQueries = [
  {
    tableRange: '22:23',
    name: 'tit',
  },
  {
    tableRange: '25:29',
    name: 'offerPart',
  },
  {
    tableRange: '31',
    name: 'code',
  },
  {
    tableRange: '29',
    name: 'codeCTA',
  },
  {
    tableRange: '34:35',
    name: 'intro',
  },
  {
    tableRange: '36:39',
    name: 'categories',
  },
  {
    tableRange: '45:47',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-02' }),
  TopImageTitle_src: translateImage({ value: '20260202_01.png' }),
  TopImage_src: getImageUrl('20260202_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp26-01-09' }),
  Banner_1_Image: translateImage({ value: '20260109b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-08' }),
  Banner_2_Image: translateImage({ value: '20260108b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'standard',
};

// const timer = {
//   freebies: getImageUrl('YYYYMMDD_Free.png', true),
//   // ! REMEMBER TO REPLACE THOSE URLS
//   image: {
//     CHDE: 'https://gen.sendtric.com/countdown/3x5402a5a5',
//     CHFR: 'https://gen.sendtric.com/countdown/7d3zl0s986',
//     FR: 'https://gen.sendtric.com/countdown/12rdr6dtgo',
//     DE: 'https://gen.sendtric.com/countdown/sv2q3k1x3y',
//     UK: 'https://gen.sendtric.com/countdown/c4cghowbf1',
//     AT: 'https://gen.sendtric.com/countdown/ypa0wk4eup',
//     ES: 'https://gen.sendtric.com/countdown/sehb5k3z7z',
//     PL: 'https://gen.sendtric.com/countdown/zlnhbu660w',
//     NL: 'https://gen.sendtric.com/countdown/mr9bn0q4c8',
//     PT: 'https://gen.sendtric.com/countdown/61n8wy3y4m',
//     IT: 'https://gen.sendtric.com/countdown/lxloewzogf',
//     SE: 'https://gen.sendtric.com/countdown/y2imagqwpt',
//     HU: 'https://gen.sendtric.com/countdown/udnrsqd4o8',
//     DK: 'https://gen.sendtric.com/countdown/uvfzgmkwr6',
//     CZ: 'https://gen.sendtric.com/countdown/ajq5qcnl44',
//     FI: 'https://gen.sendtric.com/countdown/hgh6virvh8',
//     NO: 'https://gen.sendtric.com/countdown/nfx8ncvozu',
//     SK: 'https://gen.sendtric.com/countdown/x8yr4llgxx',
//     BENL: 'https://gen.sendtric.com/countdown/442t1ogqur',
//     BEFR: 'https://gen.sendtric.com/countdown/kgyur9di1m',
//     RO: 'https://gen.sendtric.com/countdown/ke5m9a4zrx',
//   },
// };

const categories = [
  {
    name: 'Living room',
    background: '#FD9000',
    color: '#000000',
    src: getImageUrl('20260202Category1.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    products: [
      {
        id: '687032',
        src: getImageUrl('20260202Category11.png', true),
      },
      {
        id: '463832',
        src: getImageUrl('20260202Category12.png', true),
      },
      {
        id: '448719',
        src: getImageUrl('20260202Category13.png', true),
      },
      {
        id: '463512',
        src: getImageUrl('20260202Category14.png', true),
      },
    ],
  },
  {
    name: 'Bedroom',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20260202Category2.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    products: [
      {
        id: '669596',
        src: getImageUrl('20260202Category21.png', true),
      },
      {
        id: '670883',
        src: getImageUrl('20260202Category22.png', true),
      },
      {
        id: '682174',
        src: getImageUrl('20260202Category23.png', true),
      },
      {
        id: '637822',
        src: getImageUrl('20260202Category24.png', true),
      },
    ],
  },
  {
    name: 'Dining room',
    background: '#FD9000',
    color: '#000',
    src: getImageUrl('20260202Category3.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    products: [
      {
        id: '567982',
        src: getImageUrl('20260202Category31.png', true),
      },
      {
        id: '569350',
        src: getImageUrl('20260202Category32.png', true),
      },
      {
        id: '494583',
        src: getImageUrl('20260202Category33.png', true),
      },
      {
        id: '678058',
        src: getImageUrl('20260202Category34.png', true),
      },
    ],
  },
  {
    name: 'Bathroom',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20260202Category4.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/',
    products: [
      {
        id: '200426',
        src: getImageUrl('20260202Category41.png', true),
      },
      {
        id: '676839',
        src: getImageUrl('20260202Category42.png', true),
      },
      {
        id: '670017',
        src: getImageUrl('20260202Category43.png', true),
      },
      {
        id: '660737',
        src: getImageUrl('20260202Category44.png', true),
      },
    ],
  },
];

const freebies = {
  options: {
    color: '#000',
    background: '#FFCCB7',
  },
  items: [
    {
      size: {
        row: 1,
        col: 3,
      },
      products: [
        {
          id: '257993',
          src: getImageUrl('20260202Freebie1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '581344',
          src: getImageUrl('20260202Freebie2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '307409',
          src: getImageUrl('20260202Freebie3.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
    {
      size: {
        row: 1,
        col: 2,
      },
      products: [
        {
          id: '307734',
          src: getImageUrl('20260202Freebie4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '307537',
          src: getImageUrl('20260202Freebie5.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: '40396',
  name: '02.02.26 - Voucher - Free scatter cushion set',
  date: '02.02.2026',
  issueCardId: '437999',
  lpId: '28500',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/4wuhIy6XZS5viPVGkmmQxW/2026.02.02---Newsletter---Free-scatter-cushion-set--Copy-?node-id=12001-4025&p=f&t=eEC0TdCQFLZAGgc2-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFCCB7',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        background: '#FD9000',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FFCCB7',
      },
      freebies: freebies,
      // timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.LP,
      background: '#FFCCB7',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        background: '#FD9000',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FFCCB7',
      },
      freebies: freebies,
      // timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
      soon_banners: true,
    },
  ],
});
