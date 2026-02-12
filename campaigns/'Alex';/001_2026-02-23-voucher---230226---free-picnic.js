import { mondayRegularNslt } from '@/templates/AlexSrc/template/mondayRegularNslt';

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 23.02.26 - Free picnic blanket';

const tableQueries = [
  {
    tableRange: '20:21',
    name: 'tit',
  },
  {
    tableRange: '23:27',
    name: 'offerPart',
  },
  {
    tableRange: '29',
    name: 'code',
  },
  {
    tableRange: '27',
    name: 'codeCTA',
  },
  {
    tableRange: '32:33',
    name: 'intro',
  },
  {
    tableRange: '34:37',
    name: 'categories',
  },
  {
    tableRange: '42:44',
    name: 'condition',
  },
];
const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-23' }),
  TopImageTitle_src: translateImage({ value: '20260223_01.png' }),
  TopImage_src: getImageUrl('20260223_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp26-02-12' }),
  Banner_1_Image: translateImage({ value: '20260212b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-11' }),
  Banner_2_Image: translateImage({ value: '20260211b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FAF1F0',
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
    name: 'Lounge sets',
    background: '#FECD8C',
    color: '#000000',
    src: getImageUrl('20260223Category1.png', true),
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
    products: [
      {
        id: '640850',
        src: getImageUrl('20260223Category11.png', true),
      },
      {
        id: '640792',
        src: getImageUrl('20260223Category12.png', true),
      },
      {
        id: '589382',
        src: getImageUrl('20260223Category13.png', true),
      },
      {
        id: '100801',
        src: getImageUrl('20260223Category14.png', true),
      },
    ],
  },
  {
    name: 'Dining sets',
    background: '#FAF1F0',
    color: '#000',
    src: getImageUrl('20260223Category2.png', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    products: [
      {
        id: '691972',
        src: getImageUrl('20260223Category21.png', true),
      },
      {
        id: '585606',
        src: getImageUrl('20260223Category22.png', true),
      },
      {
        id: '569903',
        src: getImageUrl('20260223Category23.png', true),
      },
      {
        id: '523312',
        src: getImageUrl('20260223Category24.png', true),
      },
    ],
  },
  {
    name: 'Greenhouses',
    background: '#FECD8C',
    color: '#000',
    src: getImageUrl('20260223Category3.png', true),
    href: 'https://www.beliani.ch/outdoor-storage/garden-and-balcony-greenhouses/',
    products: [
      {
        id: '674930',
        src: getImageUrl('20260223Category31.png', true),
      },
      {
        id: '674778',
        src: getImageUrl('20260223Category32.png', true),
      },
      {
        id: '648397',
        src: getImageUrl('20260223Category33.png', true),
      },
      {
        id: '647197',
        src: getImageUrl('20260223Category34.png', true),
      },
    ],
  },
  {
    name: 'Garden sheds & storage boxes',
    background: '#FAF1F0',
    color: '#000',
    src: getImageUrl('20260223Category4.png', true),
    href: 'https://www.beliani.ch/outdoor-storage/garden-sheds-and-storage-boxes/',
    products: [
      {
        id: '668894',
        src: getImageUrl('20260223Category41.png', true),
      },
      {
        id: '669597',
        src: getImageUrl('20260223Category42.png', true),
      },
      {
        id: '672916',
        src: getImageUrl('20260223Category43.png', true),
      },
      {
        id: '316496',
        src: getImageUrl('20260223Category44.png', true),
      },
    ],
  },
];

const freebies = {
  options: {
    color: '#000000',
    background: '#FAF1F0',
  },
  items: [
    {
      size: {
        row: 1,
        col: 3,
      },
      products: [
        {
          id: '565126',
          src: getImageUrl('20260223Freebie1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '564916',
          src: getImageUrl('20260223Freebie2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '564878',
          src: getImageUrl('20260223Freebie3.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
    {
      size: {
        row: 1,
        col: 3,
      },
      products: [
        {
          id: '565031',
          src: getImageUrl('20260223Freebie4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '565050',
          src: getImageUrl('20260223Freebie5.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '565107',
          src: getImageUrl('20260223Freebie6.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: '41261',
  name: 'Voucher - 23.02.26 - Free picnic blanket',
  date: '23.02.2026',
  issueCardId: '448259',
  lpId: '28960',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/2ZXxPAvGKyI2Hi6l9q3FX9/2026.02.23---Free-picnic-blanket--Copy-?node-id=0-1&p=f&t=fThS2fNuXxPi2BOe-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FAF1F0',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      freebies: freebies,
      intro: {
        background: '#FECD8C',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FAF1F0',
      },
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
      background: '#FAF1F0',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      freebies: freebies,
      intro: {
        background: '#FECD8C',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FAF1F0',
      },
      // timer: timer,
      full_img_width: false,
      soon_banners: true,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
