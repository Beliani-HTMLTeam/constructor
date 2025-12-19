import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2025::Voucher - 21.07.25 - Free wall art';

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
  TopImageTitle_href: translateLink({ value: 'content/lp25-07-21' }),
  TopImageTitle_src: translateImage({ value: '20250721_01.png' }),
  TopImage_src: getImageUrl('20250721_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp25-07-21' }),
  Banner_1_Image: translateImage({ value: '20251219b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-18' }),
  Banner_2_Image: translateImage({ value: '20251218b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'up_to',
};

const categories = [
  {
    name: 'Beds',
    background: '#FD9000',
    color: '#000000',
    src: getImageUrl('20250721Category1.png', true),
    href: 'https://www.beliani.ch/beds/',
    products: [
      {
        id: '619891',
        src: getImageUrl('20250721Category11.png', true),
      },
      {
        id: '616415',
        src: getImageUrl('20250721Category12.png', true),
      },
      {
        id: '610567',
        src: getImageUrl('20250721Category13.png', true),
      },
      {
        id: '518913',
        src: getImageUrl('20250721Category14.png', true),
      },
    ],
  },
  {
    name: 'Mattresses',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20250721Category2.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
    products: [
      {
        id: '414109',
        src: getImageUrl('20250721Category21.png', true),
      },
      {
        id: '610414',
        src: getImageUrl('20250721Category22.png', true),
      },
      {
        id: '570747',
        src: getImageUrl('20250721Category23.png', true),
      },
      {
        id: '495205',
        src: getImageUrl('20250721Category24.png', true),
      },
    ],
  },
  {
    name: 'Bedside tables',
    background: '#FD9000',
    color: '#000000',
    src: getImageUrl('20250721Category3.png', true),
    href: 'https://www.beliani.ch/storage/bedside-tables/',
    products: [
      {
        id: '624200',
        src: getImageUrl('20250721Category31.png', true),
      },
      {
        id: '609457',
        src: getImageUrl('20250721Category32.png', true),
      },
      {
        id: '607518',
        src: getImageUrl('20250721Category33.png', true),
      },
      {
        id: '391691',
        src: getImageUrl('20250721Category34.png', true),
      },
    ],
  },
  {
    name: 'Dressing tables',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20250721Category4.png', true),
    href: 'https://www.beliani.ch/storage/dressing-tables/',
    products: [
      {
        id: '214136',
        src: getImageUrl('20250721Category41.png', true),
      },
      {
        id: '361452',
        src: getImageUrl('20250721Category42.png', true),
      },
      {
        id: '361361',
        src: getImageUrl('20250721Category43.png', true),
      },
      {
        id: '360774',
        src: getImageUrl('20250721Category44.png', true),
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
          id: '226413',
          src: getImageUrl('20250721Freebie1.png', true),
          style: 'padding-right: 5px; padding-left: 0px;',
        },
        {
          id: '226327',
          src: getImageUrl('20250721Freebie2.png', true),
          style: 'padding-right: 5px; padding-left: 5px;',
        },
        {
          id: '226448',
          src: getImageUrl('20250721Freebie3.png', true),
          style: 'padding-right: 0px; padding-left: 5px;',
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
          id: '226449',
          src: getImageUrl('20250721Freebie4.png', true),
          style: 'padding-right: 5px; padding-left: 0px;',
        },
        {
          id: '231007',
          src: getImageUrl('20250721Freebie5.png', true),
          style: 'padding-right: 5px; padding-left: 5px;',
        },
        {
          id: '226459',
          src: getImageUrl('20250721Freebie6.png', true),
          style: 'padding-right: 0px; padding-left: 5px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: '0001',
  name: 'Voucher - 21.07.25 - Free wall art',
  date: '21.07.2025',
  lpId: '25923',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
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
      background: '#FFCCB7',
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

