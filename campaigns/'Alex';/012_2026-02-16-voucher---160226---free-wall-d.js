import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 16.02.26 - Free wall decor';

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
    tableRange: '44:46',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-16' }),
  TopImageTitle_src: translateImage({ value: '20260216_01.png' }),
  TopImage_src: getImageUrl('20260216_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp26-02-11' }),
  Banner_1_Image: translateImage({ value: '20260211b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-05' }),
  Banner_2_Image: translateImage({ value: '20260205b.png' }),
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
    name: 'Kids beds',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260216Category1.png', true),
    href: 'https://www.beliani.ch/children-room/kids-beds/',
    products: [
      {
        id: '692861',
        src: getImageUrl('20260216Category11.png', true),
      },
      {
        id: '686728',
        src: getImageUrl('20260216Category12.png', true),
      },
      {
        id: '647370',
        src: getImageUrl('20260216Category13.png', true),
      },
      {
        id: '618591',
        src: getImageUrl('20260216Category14.png', true),
      },
    ],
  },
  {
    name: 'Kids storage',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20260216Category2.png', true),
    href: 'https://www.beliani.ch/children-room/kids-storage/',
    products: [
      {
        id: '681714',
        src: getImageUrl('20260216Category21.png', true),
      },
      {
        id: '680287',
        src: getImageUrl('20260216Category22.png', true),
      },
      {
        id: '679980',
        src: getImageUrl('20260216Category23.png', true),
      },
      {
        id: '571656',
        src: getImageUrl('20260216Category24.png', true),
      },
    ],
  },
  {
    name: 'Chairs and tables',
    background: '#F6E7E6',
    color: '#000',
    src: getImageUrl('20260216Category3.png', true),
    href: 'https://www.beliani.ch/children-room/kids-chairs/',
    products: [
      {
        id: '685553',
        src: getImageUrl('20260216Category31.png', true),
      },
      {
        id: '683444',
        src: getImageUrl('20260216Category32.png', true),
      },
      {
        id: '680498',
        src: getImageUrl('20260216Category33.png', true),
      },
      {
        id: '522245',
        src: getImageUrl('20260216Category34.png', true),
      },
    ],
  },
  {
    name: 'Textiles & playmats',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20260216Category4.png', true),
    href: 'https://www.beliani.ch/children-room/kids-duvet-covers-and-sheets/',
    products: [
      {
        id: '613886',
        src: getImageUrl('20260216Category41.png', true),
      },
      {
        id: '612729',
        src: getImageUrl('20260216Category42.png', true),
      },
      {
        id: '563093',
        src: getImageUrl('20260216Category43.png', true),
      },
      {
        id: '457133',
        src: getImageUrl('20260216Category44.png', true),
      },
    ],
  },
];

const freebies = {
  options: {
    color: '#000000',
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
          id: '368564',
          src: getImageUrl('20260216Freebie1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '368545',
          src: getImageUrl('20260216Freebie2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '368601',
          src: getImageUrl('20260216Freebie3.png', true),
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
          id: '368583',
          src: getImageUrl('20260216Freebie4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '368527',
          src: getImageUrl('20260216Freebie5.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '368492',
          src: getImageUrl('20260216Freebie6.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};


export default new entities.Campaign({
  startId: "41133",
  name: "Voucher - 16.02.26 - Free wall decor",
  date: "16.02.2026",
  issueCardId: "447272",
  lpId: "28881",
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/udDJQ2qpUASJyZvJmzSjvi/2026.02.16---Newsletter---Free-wall-decor--Copy-?node-id=9031-3902&p=f&t=zRIBvhyMWtgS0T6y-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        background: '#F6E7E6',
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
      soon_banners: true,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        background: '#F6E7E6',
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
      soon_banners: true,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});