// Campaign generated from form
import { mondayRegularNslt } from '@/templates/AlexSrc/template/mondayRegularNslt';

const campaignTranslationsSheet = '2025::Voucher - 22.12.25 - Free bathroom set';

const tableQueries = [
  {
    tableRange: '19:20',
    name: 'TopImageTitle',
  },
  {
    tableRange: '22:26',
    name: 'offerPart',
  },
  {
    tableRange: '28',
    name: 'code',
  },
  {
    tableRange: '26',
    name: 'codeCTA',
  },
  {
    tableRange: '31:32',
    name: 'intro',
  },
  {
    tableRange: '33:36',
    name: 'categories',
  },
  {
    tableRange: '42:44',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-22' }),
  TopImageTitle_src: translateImage({ value: '20251222_01.png' }),
  TopImage_src: getImageUrl('20251222_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp25-12-12' }),
  Banner_1_Image: translateImage({ value: '20251212b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-11' }),
  Banner_2_Image: translateImage({ value: '20251211b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'up_to',
};

const categories = [
  {
    name: 'Bathtubs',
    background: '#FF8D73',
    color: '#000000',
    src: getImageUrl('20251222Category1.png', true),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    products: [
      {
        id: '200426',
        src: getImageUrl('20251222Category11.png', true),
      },
      {
        id: '663213',
        src: getImageUrl('20251222Category12.png', true),
      },
      {
        id: '665850',
        src: getImageUrl('20251222Category13.png', true),
      },
      {
        id: '82000',
        src: getImageUrl('20251222Category14.png', true),
      },
    ],
  },
  {
    name: 'Storage',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20251222Category2.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
    products: [
      {
        id: '604296',
        src: getImageUrl('20251222Category21.png', true),
      },
      {
        id: '514389',
        src: getImageUrl('20251222Category22.png', true),
      },
      {
        id: '670017',
        src: getImageUrl('20251222Category23.png', true),
      },
      {
        id: '648093',
        src: getImageUrl('20251222Category24.png', true),
      },
    ],
  },
  {
    name: 'Lighting',
    background: '#FF8D73',
    color: '#000',
    src: getImageUrl('20251222Category3.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-lighting/',
    products: [
      {
        id: '655052',
        src: getImageUrl('20251222Category31.png', true),
      },
      {
        id: '654957',
        src: getImageUrl('20251222Category32.png', true),
      },
      {
        id: '652856',
        src: getImageUrl('20251222Category33.png', true),
      },
      {
        id: '651729',
        src: getImageUrl('20251222Category34.png', true),
      },
    ],
  },
  {
    name: 'Fittings',
    background: '#FFCCB7',
    color: '#000',
    src: getImageUrl('20251222Category4.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-fittings/',
    products: [
      {
        id: '620959',
        src: getImageUrl('20251222Category41.png', true),
      },
      {
        id: '642044',
        src: getImageUrl('20251222Category42.png', true),
      },
      {
        id: '635258',
        src: getImageUrl('20251222Category43.png', true),
      },
      {
        id: '193870',
        src: getImageUrl('20251222Category44.png', true),
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
        col: 2,
      },
      products: [
        {
          id: '320485',
          src: getImageUrl('20251222Freebie1.png', true),
          style: 'padding-right: 5px; padding-left: 10px;',
        },
        {
          id: '320374',
          src: getImageUrl('20251222Freebie2.png', true),
          style: 'padding-right: 10px; padding-left: 5px;',
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
          id: '316914',
          src: getImageUrl('20251222Freebie3.png', true),
          style: 'padding-right: 5px; padding-left: 10px;',
        },
        {
          id: '230503',
          src: getImageUrl('20251222Freebie4.png', true),
          style: 'padding-right: 10px; padding-left: 5px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: '39403',
  name: 'Free bathroom set: choose from 4 options',
  date: '22.12.2025',
  issueCardId: '427069',
  lpId: '28001',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/Zmpm6OUlozYMmFFVK24cMi/2025.12.22-Free-bathroom-set--Copy-?node-id=0-1&p=f&t=OgPWusq5f6PRNGfD-0',
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
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FFCCB7',
      },
      intro: {
        background: '#FF8D73',
        color: '#000000',
      },
      categories: categories,
      freebies: freebies,
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
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FFCCB7',
      },
      intro: {
        background: '#FF8D73',
        color: '#000000',
      },
      categories: categories,
      freebies: freebies,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

