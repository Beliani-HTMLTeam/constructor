const campaignTranslationsSheet = '2026::Voucher - 23.09.26 - French days Autumn Deal';

const theme = {
  primary: '#F6E7E6',
  primaryText: '#ffffff',
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
  offerBg: '#F6E7E6',
  dealBg: '#F6E7E6',
  freebieColor: '#FFEBE2',
  offerTitleColor: '#750000',
  offerPrg1Color: '#000000',
  offerPrg2Color: '#000000',
};

const catData = [
  // Cat 1
  {
    name: 'Sofas',
    href: 'https://www.beliani.ch/sofas/',
    catImg: getImageUrl('20260923_Cat01.png', true),
  },
  // Cat 2
  {
    name: 'Beds',
    href: 'https://www.beliani.ch/beds/',
    catImg: getImageUrl('20260923_Cat02.png', true),
  },
  // Cat 3
  {
    name: 'Armchairs',
    href: 'https://www.beliani.ch/armchairs/',
    catImg: getImageUrl('20260923_Cat03.png', true),
  },
  // Cat 4
  {
    name: 'Tables',
    href: 'https://www.beliani.ch/tables/',
    catImg: getImageUrl('20260923_Cat04.png', true),
  },
  // Cat 5
  {
    name: 'Chairs',
    href: 'https://www.beliani.ch/chairs/',
    catImg: getImageUrl('20260923_Cat05.png', true),
  },
  // Cat 6
  {
    name: 'Storage',
    href: 'https://www.beliani.ch/storage/',
    catImg: getImageUrl('20260923_Cat06.png', true),
  },
  // Cat 7
  {
    name: 'Desks',
    href: 'https://www.beliani.ch/office-furniture/desks-eng/',
    catImg: getImageUrl('20260923_Cat07.png', true),
  },
  // Cat 8
  {
    name: 'Kids',
    href: 'https://www.beliani.ch/children-room/',
    catImg: getImageUrl('20260923_Cat08.png', true),
  },
  // Cat 9
  {
    name: 'Lighting',
    href: 'https://www.beliani.ch/lighting/',
    catImg: getImageUrl('20260923_Cat09.png', true),
  },
  // Cat 10
  {
    name: 'Bathtubs',
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    catImg: getImageUrl('20260923_Cat10.png', true),
  },
  // Cat 11
  {
    name: 'Rugs',
    href: 'https://www.beliani.ch/rugs/',
    catImg: getImageUrl('20260923_Cat11.png', true),
  },
  // Cat 12
  {
    name: 'Accessories',
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    catImg: getImageUrl('20260923_Cat12.png', true),
  },
];

// Spreadsheet rows are inclusive. Each offer info range supplies label, discount, detail.
const tableQueries = [
  { name: 'offer', tableRange: '25:27' },
  { name: 'offer_info_part_1', tableRange: '28:30' },
  { name: 'offer_info_part_2', tableRange: '31:33' },
  { name: 'offer_info_part_3', tableRange: '34:36' },
  { name: 'offer_code_2_items', tableRange: '37' },
  { name: 'offer_code_3_items', tableRange: '38' },
  { name: 'offer_code_4_items', tableRange: '39' },
  { name: 'offer_subtitle', tableRange: '40' },
  { name: 'offer_date', tableRange: '41' },
  { name: 'condition', tableRange: '57:59' },
  { name: 'shop_by_category_title', tableRange: '43' },
  { name: 'shop_by_category_titles', tableRange: '44:55' },
];

const links = {
  // Intro_cta_href: 'https://www.beliani.ch/bathroom-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-23' }),
  TopImageTitle_src: translateImage({ value: '20260923_01.png' }),

  TopImage_src: translateImage({ value: '20260923_topImage.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-09-23' }),

  Banner_1: translateLink({ value: 'content/lp26-09-11' }),
  Banner_1_Image: translateImage({ value: '20260911b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-16' }),
  Banner_2_Image: translateImage({ value: '20260916b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'standard',
};

const categories = [
  {
    type: 'deal',
    rowOrder: {
      default: ['row1', 'row2', 'row3'],
      'fr,chfr,befr': ['row1', 'row3', 'row2'],
      'se': {
        row1: ['row1', 'row2', 'row3'],
        row2: ['row1', 'row2', 'row3'],
        row3: ['row1', 'row3', 'row2']
      }
    },
    spaceAfter: 0,
    background: theme.primary,
    products: [],
    title: { show: false },
  },
  {
    type: 'shop-by-category',
    paddingTop: '0',
    spaceAfter: 0,
    background: theme.primary,
    title: { show: false },
    tiles: catData.map((cat) => ({ name: cat.name, src: cat.catImg, href: cat.href })),
  },
];

export default new entities.Campaign({
  startId: '48501',
  name: 'Wednesday - French days/Autumn Deal',
  date: '23.09.2026',
  issueCardId: '531000',
  lpId: '32732',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: 'https://www.figma.com/design/ivTLBnr4YDgyVtciBVAMzZ/',
  templates: [
    {
      background: theme.primary,
      color: theme.black,
      template: templates.FrenchDaysNew,

      css: types.CSS.NS_FRENCH_DAYS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
      intro: false,
      // sdisableFooterCategories: true,
    },
    {
      background: theme.primary,
      color: theme.black,
      template: templates.FrenchDaysNew,

      css: types.CSS.LP_FRENCH_DAYS,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableTopImageTitle: true,
      intro: false,
      disableKlarna: ['SI', 'HR'],
    },
  ],
});
