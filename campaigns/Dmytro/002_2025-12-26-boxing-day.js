// Campaign generated from form
const campaignTranslationsSheet = '2026::26.12.25 - Boxing Day';

const tableQueries = [
  {
    tableRange: '19:20',
    name: 'TopImageTitle',
  },

  {
    tableRange: '12:13',
    name: 'timer',
  },
  {
    tableRange: '46:48',
    name: 'condition',
  },
  {
    tableRange: '31:36',
    name: 'categories',
  },
];

// images already uploaded to remote server

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp2025-12-26' }),
  TopImageTitle_src: translateImage({ value: '20251226_01.png' }),
  TopImage_src: getImageUrl('20251226topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp2025-12-26' }),
  Timer_href: translateLink({ value: 'content/lp2025-12-20' }),
  CTAcategory: translateLink({ value: 'boxing-day-deals/' }),
  Banner_1: translateLink({ value: 'content/lp25-12-19' }),
  Banner_1_Image: translateImage({ value: '20251219b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-18' }),
  Banner_2_Image: translateImage({ value: '20251218b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'standard',
};

const categories = [
  {
    name: 'Living Room',
    background: '#750000',
    color: '#FFFFFF',
    src: getImageUrl('20251226Category10.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    type: '', // make it by hand (of from old constructor)
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    products: [
      {
        id: '',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '39274',
  name: 'Boxing Day',
  date: '26.12.2025',
  issueCardId: '427150',
  lpId: '27943',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/LHZ5O2o9xjYG8xs4oUuTqK/2025.12.26---Newsletter---Boxing-Day-Newsletter--Cashback-?node-id=9006-4011&t=iaPxCN04Gk6QApEX-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS_OLD,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#750000',
      color: '#FFFFFF',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
        image: '20251226free.png',
      },
      OfferPart: {
        color: '#FFFFFF',
        backgroundColor: '#750000',
        alignment: 'center',
        type: 'code',
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP_OLD,
      background: '#750000',
      color: '#FFFFFF',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
        image: '20251226free.png',
      },
      OfferPart: {
        color: '#FFFFFF',
        backgroundColor: '#750000',
        alignment: 'center',
        type: 'code',
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

