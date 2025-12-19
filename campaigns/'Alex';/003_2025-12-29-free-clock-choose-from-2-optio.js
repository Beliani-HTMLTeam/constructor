import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2025::Voucher - 29.12.25 - Free clock';

const tableQueries = [
  {
    tableRange: '15:16',
    name: 'TopImageTitle',
  },
  {
    tableRange: '18:22',
    name: 'offerPart',
  },
  {
    tableRange: '24',
    name: 'code',
  },
  {
    tableRange: '22',
    name: 'codeCTA',
  },
  {
    tableRange: '27:28',
    name: 'intro',
  },
  {
    tableRange: '29:32',
    name: 'categories',
  },
  {
    tableRange: '38:40',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-29' }),
  TopImageTitle_src: translateImage({ value: '20251229_01.png' }),
  TopImage_src: getImageUrl('20251229_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp25-12-19' }),
  Banner_1_Image: translateImage({ value: '20251219b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-18' }),
  Banner_2_Image: translateImage({ value: '20251218b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FD9000',
  type: 'up_to',
};

const categories = [
  {
    name: 'Better sleep',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20251229Category1.png', true),
    href: 'https://www.beliani.ch/beds/',
    products: [
      {
        id: '669333',
        src: getImageUrl('20251229Category11.png', true),
      },
      {
        id: '671108',
        src: getImageUrl('20251229Category12.png', true),
      },
      {
        id: '467586',
        src: getImageUrl('20251229Category13.png', true),
      },
      {
        id: '437695',
        src: getImageUrl('20251229Category14.png', true),
      },
    ],
  },
  {
    name: 'Relax more',
    background: '#FD9000',
    color: '#000',
    src: getImageUrl('20251229Category2.png', true),
    href: 'https://www.beliani.ch/sofas/',
    products: [
      {
        id: '681886',
        src: getImageUrl('20251229Category21.png', true),
      },
      {
        id: '660072',
        src: getImageUrl('20251229Category22.png', true),
      },
      {
        id: '623077',
        src: getImageUrl('20251229Category23.png', true),
      },
      {
        id: '603969',
        src: getImageUrl('20251229Category24.png', true),
      },
    ],
  },
  {
    name: 'Family & friends time',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20251229Category3.png', true),
    href: 'https://www.beliani.ch/tables/dining-tables/',
    products: [
      {
        id: '679609',
        src: getImageUrl('20251229Category31.png', true),
      },
      {
        id: '667389',
        src: getImageUrl('20251229Category32.png', true),
      },
      {
        id: '644556',
        src: getImageUrl('20251229Category33.png', true),
      },
      {
        id: '609306',
        src: getImageUrl('20251229Category34.png', true),
      },
    ],
  },
  {
    name: 'Ergonomic workplaces',
    background: '#FD9000',
    color: '#000',
    src: getImageUrl('20251229Category4.png', true),
    href: 'https://www.beliani.ch/office-furniture/desks/',
    products: [
      {
        id: '682520',
        src: getImageUrl('20251229Category41.png', true),
      },
      {
        id: '682689',
        src: getImageUrl('20251229Category42.png', true),
      },
      {
        id: '443816',
        src: getImageUrl('20251229Category43.png', true),
      },
      {
        id: '305942',
        src: getImageUrl('20251229Category44.png', true),
      },
    ],
  },
];

const freebies = {
  options: {
    color: '#000',
    background: '#FD9000',
  },
  items: [
    {
      size: {
        row: 1,
        col: 2,
      },
      products: [
        {
          id: '324935',
          src: getImageUrl('20251229Freebie1.png', true),
          style: 'padding-right: 5px; padding-left: 10px;',
        },
        {
          id: '246185',
          src: getImageUrl('20251229Freebie2.png', true),
          style: 'padding-right: 10px; padding-left: 5px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: '39532',
  name: 'Free clock: choose from 2 options',
  date: '29.12.2025',
  issueCardId: '431852',
  lpId: '28059',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/YMY0WzoVhsnaTSbstEcOMP/2025.12.29---Newsletter---Free-clock--Copy-?node-id=11001-3902&p=f&t=WX34wrPCRczY8E6A-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FD9000',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      freebies: freebies,
      intro: {
        background: '#FFCCB7',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FD9000',
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.LP,
      background: '#FD9000',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      freebies: freebies,
      intro: {
        background: '#FFCCB7',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FD9000',
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
