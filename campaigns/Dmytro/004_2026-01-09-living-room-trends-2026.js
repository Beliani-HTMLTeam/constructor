// Campaign generated from form
const campaignTranslationsSheet = '2026::09.01.26 - Living Room Trends 2026';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  {
    tableRange: '35:36',
    name: 'timer',
  },
  {
    tableRange: '29:30',
    name: 'condition',
  },
  {
    tableRange: '21:26',
    name: 'categories',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-09' }),
  TopImageTitle_src: translateImage({ value: '20260109_01.png' }),
  TopImage_src: getImageUrl('20260109topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-09' }),
  Timer_href: translateLink({ value: 'content/lp26-01-05' }),
  // that's what should be here
  // Banner_1: translateLink({ value: 'content/lp26-01-02' }),
  // Banner_1_Image: translateImage({ value: '20260102b.png' }),

  // placeholder
  Banner_1: translateLink({ value: 'content/lp25-12-19' }),
  Banner_1_Image: translateImage({ value: '20251219b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-01' }),
  Banner_2_Image: translateImage({ value: '20251218b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Mid-century modern',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260109Category10.png', true),
    href: 'https://www.beliani.ch/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      {
        id: '652251',
        src: getImageUrl('20260109Category11.png', true),
      },
      {
        id: '508409',
        src: getImageUrl('20260109Category12.png', true),
      },
      {
        id: '313934',
        src: getImageUrl('20260109Category13.png', true),
      },
      {
        id: '454986',
        src: getImageUrl('20260109Category14.png', true),
      },
    ],
  },
  {
    name: 'Memphis design',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260109Category20.png', true),
    href: 'https://www.beliani.ch/', // change
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      {
        id: '633342',
        src: getImageUrl('20260109Category21.png', true),
      },
      {
        id: '526187',
        src: getImageUrl('20260109Category22.png', true),
      },
      {
        id: '651709',
        src: getImageUrl('20260109Category23.png', true),
      },
      {
        id: '455113',
        src: getImageUrl('20260109Category24.png', true),
      },
    ],
  },
  {
    name: 'Organic shapes',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260109Category30.png', true),
    href: 'https://www.beliani.ch/', // change
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      {
        id: '636095',
        src: getImageUrl('20260109Category31.png', true),
      },
      {
        id: '675751',
        src: getImageUrl('20260109Category32.png', true),
      },
      {
        id: '647029',
        src: getImageUrl('20260109Category33.png', true),
      },
      {
        id: '588790',
        src: getImageUrl('20260109Category34.png', true),
      },
    ],
  },
];

const timer = {
  position: 'outsideTopImageTitle',
  background: '#FFCCB7',
  color: '#000000',
  freebies: getImageUrl('20260109free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/mha14x7ll2',
    CHFR: 'https://gen.sendtric.com/countdown/6774om4ey6',
    FR: 'https://gen.sendtric.com/countdown/ycq89uwjgn',
    DE: 'https://gen.sendtric.com/countdown/13l0y5t6hb',
    UK: 'https://gen.sendtric.com/countdown/cok16twwy6',
    AT: 'https://gen.sendtric.com/countdown/ur4k43a98e',
    ES: 'https://gen.sendtric.com/countdown/83g7lmotlh',
    PL: 'https://gen.sendtric.com/countdown/910vc0nyt2',
    NL: 'https://gen.sendtric.com/countdown/4l7vqfdvh2',
    PT: 'https://gen.sendtric.com/countdown/gw3og1m6g9',
    IT: 'https://gen.sendtric.com/countdown/zp4rxvwnms',
    SE: 'https://gen.sendtric.com/countdown/x38vk6mmxr',
    HU: 'https://gen.sendtric.com/countdown/urqg9km0vy',
    DK: 'https://gen.sendtric.com/countdown/h9nnkdo3xh',
    CZ: 'https://gen.sendtric.com/countdown/2nr40kdehn',
    FI: 'https://gen.sendtric.com/countdown/6lfb535d8e',
    NO: 'https://gen.sendtric.com/countdown/s20q3s93oz',
    SK: 'https://gen.sendtric.com/countdown/lxecedk0a1',
    BENL: 'https://gen.sendtric.com/countdown/kudeh38pq7',
    BEFR: 'https://gen.sendtric.com/countdown/z057y7gj2o',
    RO: 'https://gen.sendtric.com/countdown/343fq7akr0',
  },
  isCtaVisible: true,
};

export default new entities.Campaign({
  startId: '39596',
  name: 'Living Room Trends 2026',
  date: '09.01.2026',
  issueCardId: '434658',
  lpId: '28097',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/tPEsL5xMspRVRQMYZaXf5n/2026.01.09---Living-room-trends--Copy---Copy-?node-id=11004-3902&p=f&t=eEMb4pzAfb76nzQ6-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFE9CC',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
        image: '20260109free.png',
        isWithTitles: true,
        spaceAfter: 'newsletterBottom25px',
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFE9CC',
        alignment: 'left',
        type: 'paragraph',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt,
      css: types.CSS.LP,
      background: '#FFE9CC',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
        image: '20260109free.png',
        isWithTitles: true,
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFE9CC',
        alignment: 'left',
        type: 'paragraph',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
  ],
});
