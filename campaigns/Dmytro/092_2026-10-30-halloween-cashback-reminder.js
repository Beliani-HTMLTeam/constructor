
// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 30.10.26 - Halloween Cashback Reminder';
const theme = {
  primary: '#000000',
  primaryText: '#FF2F00',
  secondary: '#FAF1F0',
  secondaryText: '#FFCCB7',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  ctaBg: '#F6E7E6',
  offerBg: '#ffffff',
  dealBg: '#FFEBE2',
  freebieColor: '#FFEBE2',
  offerTitleColor: '#750000',
  offerPrg1Color: '#000000',
  offerPrg2Color: '#000000',
};

const catData = [
  // Cat 1
  {
    name: 'Hallway',
    href: 'https://www.beliani.ch/living-room-furniture/',
    catImg: translateImage({ value: '20261030_Cat01.png' }),
  },
  // Cat 2
  {
    name: 'Bedroom',
    href: 'https://www.beliani.ch/bedroom-furniture/',
    catImg: translateImage({ value: '20261030_Cat02.png' }),
  },
  // Cat 3
  {
    name: 'Dining Room',
    href: 'https://www.beliani.ch/dining-room-furniture/',
    catImg: translateImage({ value: '20261030_Cat03.png' }),
  },
  // Cat 4
  {
    name: 'Bathroom',
    href: 'https://www.beliani.ch/bathroom-furniture/',
    catImg: translateImage({ value: '20261030_Cat04.png' }),
  },
  // Cat 5
  {
    name: 'Hallway',
    href: 'https://www.beliani.ch/hallway/',
    catImg: translateImage({ value: '20261030_Cat05.png' }),
  },
];

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '22:23',
  },
  {
    name: 'offer',
    tableRange: '25:27',
  },
  {
    name: 'offer_date',
    tableRange: '29:30',
  },
  {
    name: 'offer_code',
    tableRange: '28',
  },
  {
    name: 'condition',
    tableRange: '42:44',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-30' }),
  TopImageTitle_src: translateImage({ value: '20261030_01.png' }),

  TopImage_src: translateImage({value: '20261030_img.png'}),
  TopImage_href: translateLink({ value: 'content/lp26-10-30' }),

  Banner_1: translateLink({ value: 'content/lp26-10-22' }),
  Banner_1_Image: translateImage({ value: '20261022b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-21' }),
  Banner_2_Image: translateImage({ value: '20261021b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-10-30' }),
};

const TopImageTitle_data = {
  color: theme.primaryText,
  backgroundColor: theme.black,
  type: 'twoSameSemiBoldLines',
};

const timer ={
  position: 'insideTopImageTitle',
  deadline: '2026-11-01',
  isCtaVisible: false,
  isWithTitles: false,
}

const catObj = {
  type: 'category-banner',
  insideContainer: true,
  title: { show: false, position: 'beforeImg', align: 'center', },
  line: { show: false, src: 'https://pictureserver.net/static/2026/footer/line.jpg' },
  skipLinkTranslation: true,
  background: theme.primary,
  color: theme.black,
};

const categories = [
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: theme.primary,
    color: theme.white,
    spaceAfter: 'newsletterBottom50px',
    cta: {
      variant: 'button',
      bg: '#FF2F00',
      color: '#FFFFFF',
      borderWidth: '13px 45px',
      borderColor: '#FF2F00',
    },
    gridSize: 'small',
    combineOfferParts: false,
    product: {
      freebieSize: 16,
      freebieBold: 'bold',
      align: 'center',
      priceLowSize: 16,
      priceHighSize: 15
    },
    line: {
      show: false
    }
  },
  ...catData.map((cat, idx) => ({
    ...catObj,
    name: cat.name,
    src: cat.catImg,
    href: cat.href,
    type: 'tilesWithoutProducts',
    ...(idx === catData.length - 1 ? { line: undefined } : {}),
    ...(idx === catData.length - 1 ? { spaceAfter: false } : {})
  }))
];

export default new entities.Campaign({
  startId: '48729',
  name: 'Halloween Cashback Reminder',
  date: '30.10.2026',
  issueCardId: '32873',
  lpId: '32873',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: 'https://www.figma.com/design/MewumLZQOE5OX2Z9Y6wSDc/2026.10.30---Newsletter---Halloween-Cashback-Reminder?node-id=10203-1988&t=OFjm988mqt1Eotic-1',
  templates: [
    {
      background: theme.primary,
      color: theme.white,
      template: templates.RegularFridayNslt1Halloween,

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: false,
      shopByCategory: false,
      theme,
      Inside: {
        color: "#FF2F00",
        backgroundColor: '#000000',
        unitBackground: '#FFFFFF',
        labelColor: '#FFFFFF',
        type: "timer",
        showCta: false,
      },
      disableFooterCategories: true,
      timer: timer,
    },
    {
      background: theme.primary,
      color: theme.white,
      template: templates.RegularFridayNslt1Halloween,

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableTopImageTitle: false,
      disableFooterCategories: true,
      Inside: {
        color: "#FF2F00",
        backgroundColor: '#000000',
        unitBackground: '#FFFFFF',
        labelColor: '#FFFFFF',
        type: "timer",
        showCta: false,
      },
      timer: timer,
      disableKlarna: ['SI', 'HR'],
    },
  ],
});
