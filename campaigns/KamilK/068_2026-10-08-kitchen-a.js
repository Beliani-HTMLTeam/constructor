const campaignTranslationsSheet = '2026::08.10.26 - Kitchen';

const tableQueries = [
  {
    tableRange: '20',
    name: 'intro',
  },
  {
    tableRange: '21:24',
    name: 'paragraphs',
  },
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: '2026::Voucher - 06.10.26 - Free Bathroom set',
  },
];

const links = {
  TopImage_src: translateImage({ value: '20261008_Pic.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-08' }),

  Banner_2: translateLink({ value: 'content/lp26-09-24' }),
  Banner_2_Image: translateImage({ value: '20260924b.png' }),

  Banner_1: translateLink({ value: 'content/lp26-09-30' }),
  Banner_1_Image: translateImage({ value: '20260930b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-10-06' }),

  Intro_cta_href: 'https://www.beliani.ch/kitchen/',
};

const palette = {
  page: '#FFEBE2',
  title: '#FFCCB7',
  text: '#000000',
  timer: '#750000',
  timerUnit: '#AC6666',
  timerText: '#FFFFFF',
};

const timer = {
  freebies: getImageUrl('20261008free.png', true),
  deadline: '2026-10-11',
};

const Inside = {
  type: 'timer',
  color: palette.timerText,
  backgroundColor: palette.timer,
  unitBackground: palette.timerUnit,
  spaceBefore: 'newsletterBottom35px',
  spaceBeforeBackground: palette.page,
};

const underlineCta = {
  variant: 'underline',
  textTransform: 'none',
  fontWeight: '400',
  color: palette.text,
};

const intro = {
  type: 'paragraph',
  position: 'afterTimer',
  container: 'newsletterContainer',
  alignment: 'left',
  color: palette.text,
  spaceTop: 'newsletterBottom35px',
  cta: {
    ...underlineCta,
    align: 'center',
    phrase: 'Shop now',
    spaceBefore: 'newsletterBottom35px',
    spaceAfter: 'newsletterBottom80px',
  },
};

// images and products are full width - containers only wrap text
const productCategory = (number, name, href, products, overrides = {}) => ({
  paddingTop: 0,
  spaceAfter: 0,

  name,
  href,
  src: getImageUrl(`20261008_Cat${number}0.jpg`, true),

  background: palette.page,
  color: palette.text,

  type: 'grid',
  insideContainer: false,

  title: {
    show: true,
    position: 'beforeImg',
    align: 'left',
    color: palette.text,
    spaceAfter: 'newsletterBottom35px',
  },

  paragraph: {
    show: true,
    position: 'afterImg',
    align: 'left',
    spaceBefore: 'newsletterBottom35px',
    spaceAfter: 'newsletterBottom35px',
  },

  cta: {
    ...underlineCta,
    phrase: 'Shop now',
    spaceBefore: 'newsletterBottom35px',
    spaceAfter: 'newsletterBottom80px',
  },

  product: {
    prices: false,
    name: false,
    gapBetweenHorizontal: false,
    gapBetweenVertical: false,
  },

  products: Object.values(products).map((id, i) => ({
    id,
    src: getImageUrl(`20261008_Pic${number}${i + 1}.png`, true),
  })),

  ...overrides,
});

const categories = [
  productCategory(0, 'Tableware', 'https://www.beliani.ch/kitchen/kitchenware-tableware/', {
    PRODUCT_1: 677960,
    PRODUCT_2: 468108,
    PRODUCT_3: 452729,
    PRODUCT_4: 721323,
  }),

  productCategory(1, 'Kitchen Accessories', 'https://www.beliani.ch/kitchen/kitchen-accessories/', {
    PRODUCT_1: 731048,
    PRODUCT_2: 671684,
    PRODUCT_3: 610759,
    PRODUCT_4: 802423,
  }),

  productCategory(2, 'Kitchen Organisation & Storage', 'https://www.beliani.ch/kitchen/kitchen-organization/', {
    PRODUCT_1: 639677,
    PRODUCT_2: 593529,
    PRODUCT_3: 311095,
    PRODUCT_4: 224105,
  }),

  productCategory(3, 'Kitchen Taps', 'https://www.beliani.ch/kitchen/kitchen-taps/', {
    PRODUCT_1: 624484,
    PRODUCT_2: 824493,
    PRODUCT_3: 816288,
    PRODUCT_4: 624617,
  }),
];

export default new entities.Campaign({
  startId: 48761,
  lpId: 32895,
  issueCardId: 536142,
  version: 'new',
  name: 'Kitchen A',
  date: '08.10.2026',
  figmaUrl: 'https://www.figma.com/design/gSvIoQ2lRDtI1crKJ8Z4FT/2026.10.08---Newsletter-Kitchen--Copy-?node-id=12010-7461',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: palette.page,
      color: palette.text,

      wrapper: types.WRAPPER,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: intro,
      Inside: Inside,
    },

    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday,
      css: types.CSS.LP,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: palette.page,
      color: palette.text,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: intro,
      Inside: Inside,
    },
  ],
});
