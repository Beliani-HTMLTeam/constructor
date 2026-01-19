import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 05.01.26 - Free duvet cover';

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
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-05' }),
  TopImageTitle_src: translateImage({ value: '20260105_01.png' }),
  TopImage_src: getImageUrl('20260105_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp25-12-23' }),
  Banner_1_Image: translateImage({ value: '20251223b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-18' }),
  Banner_2_Image: translateImage({ value: '20251218b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'standard',
};

const categories = [
  {
    name: 'Beds',
    background: '#FD9000',
    color: '#000000',
    src: getImageUrl('20260105Category1.png', true),
    href: 'https://www.beliani.ch/beds/',
    products: [
      {
        id: '602303',
        src: getImageUrl('20260105Category11.png', true),
      },
      {
        id: '455494',
        src: getImageUrl('20260105Category12.png', true),
      },
      {
        id: '653680',
        src: getImageUrl('20260105Category13.png', true),
      },
      {
        id: '343790',
        src: getImageUrl('20260105Category14.png', true),
      },
    ],
  },
  {
    name: 'Bedside tables',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20260105Category2.png', true),
    href: 'https://www.beliani.ch/storage/bedside-tables/',
    products: [
      {
        id: '682174',
        src: getImageUrl('20260105Category21.png', true),
      },
      {
        id: '609438',
        src: getImageUrl('20260105Category22.png', true),
      },
      {
        id: '565488',
        src: getImageUrl('20260105Category23.png', true),
      },
      {
        id: '553728',
        src: getImageUrl('20260105Category24.png', true),
      },
    ],
  },
  {
    name: 'Pouffes',
    background: '#FD9000',
    color: '#000',
    src: getImageUrl('20260105Category3.png', true),
    href: 'https://www.beliani.ch/stools/pouffes/',
    products: [
      {
        id: '683348',
        src: getImageUrl('20260105Category31.png', true),
      },
      {
        id: '686175',
        src: getImageUrl('20260105Category32.png', true),
      },
      {
        id: '658988',
        src: getImageUrl('20260105Category33.png', true),
      },
      {
        id: '628747',
        src: getImageUrl('20260105Category34.png', true),
      },
    ],
  },
  {
    name: 'Table lamps',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20260105Category4.png', true),
    href: 'https://www.beliani.ch/lighting/table-lamps/',
    products: [
      {
        id: '585644',
        src: getImageUrl('20260105Category41.png', true),
      },
      {
        id: '666249',
        src: getImageUrl('20260105Category42.png', true),
      },
      {
        id: '637880',
        src: getImageUrl('20260105Category43.png', true),
      },
      {
        id: '613847',
        src: getImageUrl('20260105Category44.png', true),
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
          id: '247883',
          src: getImageUrl('20260105Freebie1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '247885',
          src: getImageUrl('20260105Freebie2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '247876',
          src: getImageUrl('20260105Freebie3.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: "39660",
  name: "Voucher - 05.01.26 - Free duvet cover",
  date: "05.01.2026",
  issueCardId: "432995",
  lpId: "28135",
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/KWvBW4N3zJWPECBRTtsTim/2025.01.05---Newsletter---Free-duvet-cover--Copy-?node-id=0-1&p=f&t=FnKAgxPS3f6P0xPN-0",
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
      freebies: freebies,
      intro: {
        background: '#FD9000',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FFCCB7',
      },
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
      soon_banners: true,
      categories: categories,
      freebies: freebies,
      intro: {
        background: '#FD9000',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FFCCB7',
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});