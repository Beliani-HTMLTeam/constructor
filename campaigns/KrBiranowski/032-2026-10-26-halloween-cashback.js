const campaignTranslationsSheet = '2026::Voucher - 26.10.26 - Halloween Cashback';

const data = {
  startNSLTId: '49152',
  startlpId: '33128',
  issueId: '538111',
  figmaUrl: 'https://www.figma.com/design/kD5q7d5Fjipa7nObESa0pM/',
};

const theme = {
  primary: '#750000',
  primaryText: '#ffffff',
  secondary: '#750000',
  secondaryText: '#FFCCB7',
  offerBg: '#750000',
  offerTitleColor: '#750000',
  offerPrg1Color: '#ffffff',
  offerPrg2Color: '#ffffff',
  introBg: '#FFE6DB',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  ctaPrimary: '#FFCCB7',
  ctaPrimaryText: '#750000',
  ctaSecondary: '#F6E7E6',
  ctaSecondaryText: '#000000',
  addColor: '#FBEFEC',
  tileText: '#5B1210',
};

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '22',
  },
  {
    name: 'offer',
    tableRange: '25:26',
  },
  {
    name: 'offer_date',
    tableRange: '28',
  },
  {
    name: 'offer_subtitle',
    tableRange: '29',
  },
  {
    name: 'offer_code',
    tableRange: '30',
  },
  {
    name: 'condition',
    tableRange: '34:36',
  },
];

const catData = [
  {
    name: 'Living Room',
    href: 'https://www.beliani.ch/living-room-furniture/',
    src: getImageUrl('20261026_Cat01.jpg', true),
  },
  {
    name: 'Bedroom',
    href: 'https://www.beliani.ch/bedroom-furniture/',
    src: getImageUrl('20261026_Cat02.jpg', true),
  },
  {
    name: 'Dining Room',
    href: 'https://www.beliani.ch/dining-room-furniture/',
    src: getImageUrl('20261026_Cat03.jpg', true),
  },
  {
    name: 'Bathroom',
    href: 'https://www.beliani.ch/bathroom-furniture/',
    src: getImageUrl('20261026_Cat04.jpg', true),
  },
  {
    name: 'Hallway',
    href: 'https://www.beliani.ch/hallway/',
    src: getImageUrl('20261026_Cat05.jpg', true),
  },
];

const tilesData = [
  [
    {
      name: 'Sofas',
      src: translateImage({ value: '20261026_sofas.png' }),
      href: 'https://www.beliani.ch/living-room-furniture/sofas/'
    },
    {
      name: 'Armchairs',
      src: translateImage({ value: '20261026_armchairs.png' }),
      href: 'https://www.beliani.ch/living-room-furniture/armchairs/'
    },
    {
      name: 'Coffee Tables',
      src: translateImage({ value: '20261026_coffee-tables.png' }),
      href: 'https://www.beliani.ch/tables/coffee-tables/'
    },
    {
      name: 'Lighting',
      src: translateImage({ value: '20261026_lighting.png' }),
      href: 'https://www.beliani.ch/living-room-furniture/lighting/'
    },
  ],
  [
    {
      name: 'Beds',
      src: translateImage({ value: '20261026_beds.png' }),
      href: 'https://www.beliani.ch/bedroom-furniture/beds/'
    },
    {
      name: 'Mattresses',
      src: translateImage({ value: '20261026_mattresses.png' }),
      href: 'https://www.beliani.ch/bedroom-furniture/mattresses/'
    },
    {
      name: 'Storage',
      src: translateImage({ value: '20261026_storage.png' }),
      href: 'https://www.beliani.ch/bedroom-furniture/storage/'
    },
    {
      name: 'Textiles',
      src: translateImage({ value: '20261026_textiles.png' }),
      href: 'https://www.beliani.ch/bedroom-furniture/textiles/'
    },
  ],
  [
    {
      name: 'Tables',
      src: translateImage({ value: '20261026_tables.png' }),
      href: 'https://www.beliani.ch/dining-room-furniture/tables/'
    },
    {
      name: 'Chairs',
      src: translateImage({ value: '20261026_chairs.png' }),
      href: 'https://www.beliani.ch/dining-room-furniture/chairs/'
    },
    {
      name: 'Kitchenware',
      src: translateImage({ value: '20261026_kitchenware.png' }),
      href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/'
    },
    {
      name: 'Kitchen Trolleys',
      src: translateImage({ value: '20261026_kitchen-trolleys.png' }),
      href: 'https://www.beliani.ch/storage/kitchen-trolleys/'
    },
  ],
  [
    {
      name: 'Bathtubs',
      src: translateImage({ value: '20261026_bathtubs.png' }),
      href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/'
    },
    {
      name: 'Showers',
      src: translateImage({ value: '20261026_showers.png' }),
      href: 'https://www.beliani.ch/bathroom-furniture/showers/'
    },
    {
      name: 'Bathroom Fittings',
      src: translateImage({ value: '20261026_fittings.png' }),
      href: 'https://www.beliani.ch/bathroom-furniture/bathroom-fittings/'
    },
    {
      name: 'Mirrors',
      src: translateImage({ value: '20261026_mirrors.png' }),
      href: 'https://www.beliani.ch/bathroom-furniture/mirrors/'
    },
  ],
  [
    {
      name: 'Mirrors',
      src: translateImage({ value: '20261026_mirrors.png' }),
      href: 'https://www.beliani.ch/hallway/mirrors/'
    },
    {
      name: 'Hallway seating',
      src: translateImage({ value: '20261026_seating.png' }),
      href: 'https://www.beliani.ch/hallway/hallway-seating/'
    },
    {
      name: 'Shoe Cabinets',
      src: translateImage({ value: '20261026_shoe-cabinets.png' }),
      href: 'https://www.beliani.ch/hallway/storage/shoe-cabinets/'
    },
    {
      name: 'Lighting',
      src: translateImage({ value: '20261026_lighting.png' }),
      href: 'https://www.beliani.ch/hallway/lighting/'
    },
  ],
]

const links = {
  Intro_cta_href: 'https://www.beliani.ch/sofas/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-26' }),
  TopImageTitle_src: translateImage({ value: '20261026_01.png' }),

  TopImage_src: translateImage({ value: '20261026_topImage.jpg' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-26' }),

  Banner_1: translateLink({ value: 'content/lp26-10-14' }),
  Banner_1_Image: translateImage({ value: '20261014b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-21' }),
  Banner_2_Image: translateImage({ value: '20261021b.png' }),
};

let sheetDate = campaignTranslationsSheet.match(/(\d{1,2})\.(\d{1,2})\.(\d{1,4})/);
let lpLinkDate = links.TopImage_href.href.value.match(/(\d{2})\-(\d{2})\-(\d{2})/);

sheetDate = `${sheetDate[3]}.${sheetDate[2]}.${sheetDate[1]}`;
lpLinkDate = `${lpLinkDate[1]}.${lpLinkDate[2]}.${lpLinkDate[3]}`;

if (sheetDate !== lpLinkDate)
  console.log(`%cHey!\n\nexpected date: ${sheetDate}, got: ${lpLinkDate}`, 'background:#000;font-size:25px;color:#F00;');

const TopImageTitle_data = {
  color: theme.white,
  backgroundColor: theme.black,
  type: 'singleLineBold',
  className: 'newsletterTitleBold',
};

const catObj = {
  background: theme.primary,
  color: theme.white,
  type: 'categorytiles',
  tileBgColor: theme.white,
  tileTextColor: theme.tileText,
  displayType: '2col-img', // 4col, 2col-img, 2col
  showTileNames: false, // Disable tile names
  line: {
    show: true,
    insideContainer: 'newsletterContainer',
    src: 'https://pictureserver.net/static/2026/footer/white_line.jpg'
  },
  cta: {
    show: true,
    spaceAfter: 'newsletterBottom35px',
    variant: 'underline',
    phrase: 'Shop all categories',
  },
  paddingTop: 0, // Space before the category element
  spaceAfter: 'newsletterBottom80px', // Space after the category element
  tdClass: 'newsletterContainer', // Category container

  title: {
    show: true,
    align: 'center',
    spaceBefore: 'newsletterBottom40px', // Space before the title element
    className: 'newsletterAditionalTitle', // Custom title class
    tdClass: 'newsletterContainer', // Title container
    spaceAfter: 'newsletterBottom35px',
  },

  paragraph: {
    show: false,
    align: 'center',
    spaceBefore: 'newsletterBottom35px', // Space before the paragraph element
    spaceAfter: 'newsletterBottom35px', // Space after the paragraph element
  },
  product: {
    align: 'center',
  },

  tile: {
    bottomTileSpace: 'newsletterBottom20px',
  }
}

const categories = [
  // offer
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    displayType: 'offerWithSubtitle',
    background: theme.primary,
    color: theme.white,
    offerSpaceAfter: 'newsletterBottom40px',
    spaceAfter: 'newsletterBottom40px',
    spaceColor: theme.primary,
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: 'newsletterBottom15px',
      spaceBefore: 'newsletterBottom15px',
      tdClass: 'newsletterContainer40px',
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      letterSpacing: '2px',
      transform: 'uppercase',
    },
    freebiesSize: 'large',
    freebies: [],
    product: {
      freebieSize: 16,
      descSize: 15,
      freebieBold: 'bold',
      align: 'center',
      priceLowSize: 16,
      priceHighSize: 15,
      lowPriceColor: theme.white,
      highPriceColor: theme.white,
      color: theme.white,
    },
  },

  ...catData.map((cat, idx) => ({
    ...catObj,
    ...cat,
    tiles: tilesData[idx],
    ...(idx === catData.length - 1 ? { line: undefined} : {}),
  }))
];

const footerData = {
  // deliverySrc: 'Delivery src NEW',
  assemblySrc: 'Assembly src NEW',
  assemblyHref: 'Assembly href NEW',
};

export default new entities.Campaign({
  startId: data.startNSLTId,
  name: 'Monday - Halloween Cashback',
  date: '26.10.2026',
  issueCardId: data.issueId,
  lpId: data.startlpId,
  // specialLpIds: {
  //   HR: '31562',
  //   SI: '31563',
  // },
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: data.figmaUrl,
  templates: [
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayNew,

      css: types.CSS.NS_AI_NEW,
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
      optimizeCss: true,
      theme,
      footerOverride: footerData,
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayNew,

      css: types.CSS.LP_AI_NEW,
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
      disableKlarna: ['HR', 'SI'],
      footerOverride: footerData,
      disableSoonEnding: true,
    },
  ],
});
