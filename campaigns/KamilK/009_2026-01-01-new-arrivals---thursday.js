// Campaign generated from form
const campaignTranslationsSheet = '2026::01.01.26 - New arrivals';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '19',
    name: 'intro',
  },
  {
    tableRange: '20:21',
    name: 'condition',
  },
  {
    tableRange: '12:13',
    name: 'timer',
    tableName: '2025::Voucher - 26.12.25 - Boxing Day',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-01' }),
  TopImageTitle_src: translateImage({ value: '20260101_01.png' }),

  TopImage_src: getImageUrl('20260101_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-01' }),

  Banner_1: translateLink({ value: 'content/lp25-12-26' }),
  Banner_1_Image: translateImage({ value: '20251226b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-12-23' }),
  Banner_2_Image: translateImage({ value: '20251223b.png' }),

  Timer_href: translateLink({ value: 'content/lp25-12-26' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFF4E6',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'New',
    src: getImageUrl('20260101_Cat00.png', true),
    // tdClass: 'newsletterContainer',
    href: 'https://www.beliani.ch/new/',
    background: '#FFF4E6',
    color: '#000000',
    type: 'default',
    cta: false,
    paddingTop: 60,
    spaceAfter: 'newsletterBottom60px',
    title: {
      show: false,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: '',
    },
    line: {
      show: false,
      insideContainer: true,
    },
  },
  {
    name: 'New',
    src: getImageUrl('20260101_Cat10.png', true),
    // tdClass: 'newsletterContainer',
    href: 'https://www.beliani.ch/new/',
    background: '#FFF4E6',
    color: '#000000',
    type: 'default',
    cta: false,
    paddingTop: 0,
    spaceAfter: 'newsletterBottom60px',
    title: {
      show: false,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: '',
    },
    line: {
      show: false,
      insideContainer: true,
    },
  },
  {
    name: 'New',
    src: getImageUrl('20260101_Cat20.png', true),
    // tdClass: 'newsletterContainer',
    href: 'https://www.beliani.ch/new/',
    background: '#FFF4E6',
    color: '#000000',
    type: 'default',
    cta: {
      show: true,
    },
    paddingTop: 0,
    spaceAfter: 'newsletterBottom60px',
    title: {
      show: false,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    line: {
      show: false,
      insideContainer: true,
    },
  },
];

const timer = {
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/sw0f5qbl32',
    CHFR: 'https://gen.sendtric.com/countdown/1xzhngpodf',
    FR: 'https://gen.sendtric.com/countdown/h1yzod4cme',
    DE: 'https://gen.sendtric.com/countdown/nm6c9z86df',
    UK: 'https://gen.sendtric.com/countdown/ilwhx0breu',
    AT: 'https://gen.sendtric.com/countdown/jczaq10q52',
    ES: 'https://gen.sendtric.com/countdown/ncxh1y0nbv',
    PL: 'https://gen.sendtric.com/countdown/o4on8h66ly',
    NL: 'https://gen.sendtric.com/countdown/fg7pvcrz4g',
    PT: 'https://gen.sendtric.com/countdown/7xynup71a9',
    IT: 'https://gen.sendtric.com/countdown/b3y7myqebh',
    SE: 'https://gen.sendtric.com/countdown/brj7jva6dn',
    HU: 'https://gen.sendtric.com/countdown/xbkzauobsn',
    DK: 'https://gen.sendtric.com/countdown/hdfqymvef5',
    CZ: 'https://gen.sendtric.com/countdown/x1dk1ec3ar',
    FI: 'https://gen.sendtric.com/countdown/zi7xycdkrq',
    NO: 'https://gen.sendtric.com/countdown/lje7y7wsw7',
    SK: 'https://gen.sendtric.com/countdown/mi7qz9wp1i',
    BENL: 'https://gen.sendtric.com/countdown/0uqpfp4gyc',
    BEFR: 'https://gen.sendtric.com/countdown/s6dpb00gf7',
    RO: 'https://gen.sendtric.com/countdown/1nd6lzz3nh',
  },
};

export default new entities.Campaign({
  startId: '39500',
  name: 'New arrivals - Thursday',
  date: '01.01.2026',
  issueCardId: '432474',
  lpId: '28039',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/kJWgD1ngWtR7xy9vqMXK03',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFF4E6',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        cta: {
          spaceAfter: 'newsletterBottom80px',
        },
        color: '#000000', // unused
        backgroundColor: '#FFF4E6', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#750000',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FFF4E6',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        cta: {
          spaceAfter: 'newsletterBottom80px',
        },
        color: '#000000', // unused
        backgroundColor: '#FFF4E6', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#750000',
        type: 'timer',
      },
    },
  ],
});

