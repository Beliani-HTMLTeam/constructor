// Campaign generated from form
const campaignTranslationsSheet = '2025::Voucher - 26.12.25 - Boxing Day';

const tableQueries = [
  {
    tableRange: '19:20',
    name: 'TopImageTitle',
  },
  {
    tableRange: '22:27',
    name: 'offerPart',
  },
  { tableRange: '28:29', name: 'codeCTA' },
  {
    tableRange: '54:55',
    name: 'timer',
  },
  {
    tableRange: '47:49',
    name: 'condition',
  },
  {
    tableRange: '31:36',
    name: 'categories',
  },
];

const links = {
  code_href: translateLink({ value: 'content/lp25-12-26' }),
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-26' }),
  TopImageTitle_src: translateImage({ value: '20251226_01.png' }),
  TopImage_src: translateImage({ value: '20251226topgif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp25-12-26' }),
  Timer_href: translateLink({ value: 'content/lp25-12-22' }),
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
    src1: getImageUrl('20251226Category1a.png', true),
    src2: getImageUrl('20251226Category1b.png', true),
    src3: getImageUrl('20251226Category1c.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    type: 'unique', // make it by hand (of from old constructor)
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    products: [
      {
        id: '621490',
        src: getImageUrl('20251226Category11.png', true),
      },
      {
        id: '594299',
        src: getImageUrl('20251226Category12.png', true),
      },
      {
        id: '227485',
        src: getImageUrl('20251226Category13.png', true),
      },
    ],
  },
  {
    name: 'Bedroom',
    background: '#750000',
    color: '#FFFFFF',
    src1: getImageUrl('20251226Category2a.png', true),
    src2: getImageUrl('20251226Category2b.png', true),
    src3: getImageUrl('20251226Category2c.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    type: 'unique', // make it by hand (of from old constructor)
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    products: [
      {
        id: '564062',
        src: getImageUrl('20251226Category21.png', true),
      },
      {
        id: '290573',
        src: getImageUrl('20251226Category22.png', true),
      },
      {
        id: '459647',
        src: getImageUrl('20251226Category23.png', true),
      },
    ],
  },
  {
    name: 'Dining Room',
    background: '#750000',
    color: '#FFFFFF',
    src1: getImageUrl('20251226Category3a.png', true),
    src2: getImageUrl('20251226Category3b.png', true),
    src3: getImageUrl('20251226Category3c.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    type: 'unique', // make it by hand (of from old constructor)
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    products: [
      {
        id: '660679',
        src: getImageUrl('20251226Category31.png', true),
      },
      {
        id: '398757',
        src: getImageUrl('20251226Category32.png', true),
      },
      {
        id: '585357',
        src: getImageUrl('20251226Category33.png', true),
      },
    ],
  },
  {
    name: 'Bathroom',
    background: '#750000',
    color: '#FFFFFF',
    src1: getImageUrl('20251226Category4a.png', true),
    src2: getImageUrl('20251226Category4b.png', true),
    src3: getImageUrl('20251226Category4c.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/',
    type: 'unique', // make it by hand (of from old constructor)
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    products: [
      {
        id: '666399',
        src: getImageUrl('20251226Category41.png', true),
      },
      {
        id: '22972',
        src: getImageUrl('20251226Category42.png', true),
      },
      {
        id: '243619',
        src: getImageUrl('20251226Category43.png', true),
      },
    ],
  },
  {
    name: 'Office',
    background: '#750000',
    color: '#FFFFFF',
    src1: getImageUrl('20251226Category5a.png', true),
    src2: getImageUrl('20251226Category5b.png', true),
    src3: getImageUrl('20251226Category5c.png', true),
    href: 'https://www.beliani.ch/office-furniture/',
    type: 'unique', // make it by hand (of from old constructor)
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    products: [
      {
        id: '375474',
        src: getImageUrl('20251226Category51.png', true),
      },
      {
        id: '354616',
        src: getImageUrl('20251226Category52.png', true),
      },
      {
        id: '668569',
        src: getImageUrl('20251226Category53.png', true),
      },
    ],
  },
  {
    name: 'Hallway',
    background: '#750000',
    color: '#FFFFFF',
    src1: getImageUrl('20251226Category6a.png', true),
    src2: getImageUrl('20251226Category6b.png', true),
    src3: getImageUrl('20251226Category6c.png', true),
    href: 'https://www.beliani.ch/hallway/',
    type: 'unique', // make it by hand (of from old constructor)
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    products: [
      {
        id: '556635',
        src: getImageUrl('20251226Category61.png', true),
      },
      {
        id: '372367',
        src: getImageUrl('20251226Category62.png', true),
      },
      {
        id: '641398',
        src: getImageUrl('20251226Category63.png', true),
      },
    ],
  },
];

const timer = {
  background: '#FFCCB7',
  color: '#000000',
  freebies: getImageUrl('20251226free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/x0r3js9fmn',
    CHFR: 'https://gen.sendtric.com/countdown/lbdgt7rdxf',
    FR: 'https://gen.sendtric.com/countdown/id50rt24qs',
    DE: 'https://gen.sendtric.com/countdown/mfq33jxzgb',
    UK: 'https://gen.sendtric.com/countdown/pa2a07bt69',
    AT: 'https://gen.sendtric.com/countdown/qbxjxi36gc',
    ES: 'https://gen.sendtric.com/countdown/549q0e7ya5',
    PL: 'https://gen.sendtric.com/countdown/kxpp2aj3zl',
    NL: 'https://gen.sendtric.com/countdown/9hxupzhvrh',
    PT: 'https://gen.sendtric.com/countdown/jjzzfavtjz',
    IT: 'https://gen.sendtric.com/countdown/qwk3q89sbj',
    SE: 'https://gen.sendtric.com/countdown/o7ai2vaey7',
    HU: 'https://gen.sendtric.com/countdown/syh2yg7s7f',
    DK: 'https://gen.sendtric.com/countdown/z2q979n104',
    CZ: 'https://gen.sendtric.com/countdown/0hplj8sy35',
    FI: 'https://gen.sendtric.com/countdown/v1a93mb8dn',
    NO: 'https://gen.sendtric.com/countdown/c4o22zwk6b',
    SK: 'https://gen.sendtric.com/countdown/knet68ypot',
    BENL: 'https://gen.sendtric.com/countdown/dbegbqlote',
    BEFR: 'https://gen.sendtric.com/countdown/dp8toymksm',
    RO: 'https://gen.sendtric.com/countdown/m75q5nzjmi',
  },
};

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
      template: templates.Friday, // User should change this
      css: types.CSS.NS,
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
      timer: timer,
      titlesSource: 'queries',
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Friday, // User should change this
      css: types.CSS.LP,
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
      timer: timer,
      titlesSource: 'queries',
    },
  ],
});

