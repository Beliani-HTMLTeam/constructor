const campaignTranslationsSheet = 'Voucher - 26.10.26 - Halloween Cashback';

const data = {
  startNSLTId: '49152',
  startlpId: '33128',
  issueId: '538111',
  figmaUrl: 'https://www.figma.com/design/kD5q7d5Fjipa7nObESa0pM/',
};

const theme = {
  primary: '#F6E7E6',
  primaryText: '#ffffff',
  secondary: '#FFEFD9',
  secondaryText: '#FFCCB7',
  offerBg: '#FFEFD9',
  offerTitleColor: '#750000',
  offerPrg1Color: '#000000',
  offerPrg2Color: '#000000',
  introBg: '#FFE6DB',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  ctaPrimary: '#750000',
  ctaPrimaryText: '#ffffff',
  ctaSecondary: '#F6E7E6',
  ctaSecondaryText: '#000000',
  addColor: '#FBEFEC',
  tileText: '#5B1210',
};

const tableQueries = [
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
      src: translateImage({ value: '20261026_bathroom-fittings.png' }),
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
      src: translateImage({ value: '20261026_hallway-mirrors.png' }),
      href: 'https://www.beliani.ch/hallway/mirrors/'
    },
    {
      name: 'Hallway seating',
      src: translateImage({ value: '20261026_hallway-seating.png' }),
      href: 'https://www.beliani.ch/hallway/hallway-seating/'
    },
    {
      name: 'Shoe Cabinets',
      src: translateImage({ value: '20261026_shoe-cabinets.png' }),
      href: 'https://www.beliani.ch/hallway/storage/shoe-cabinets/'
    },
    {
      name: 'Lighting',
      src: translateImage({ value: '20261026_hallway-lighting.png' }),
      href: 'https://www.beliani.ch/hallway/lighting/'
    },
  ],
]

const links = {
  Intro_cta_href: 'https://www.beliani.ch/sofas/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-26' }),
  TopImageTitle_src: translateImage({ value: '20260909_01.png' }),

  TopImage_src: translateImage({ value: '20261026_Gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-26' }),

  Banner_1: translateLink({ value: 'content/lp26-09-10' }),
  Banner_1_Image: translateImage({ value: '20260910b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-11' }),
  Banner_2_Image: translateImage({ value: '20260911b.png' }),
};

let sheetDate = campaignTranslationsSheet.match(/(\d{1,2})\.(\d{1,2})\.(\d{1,4})/);
let lpLinkDate = links.TopImage_href.href.value.match(/(\d{2})\-(\d{2})\-(\d{2})/);

sheetDate = `${sheetDate[3]}.${sheetDate[2]}.${sheetDate[1]}`;
lpLinkDate = `${lpLinkDate[1]}.${lpLinkDate[2]}.${lpLinkDate[3]}`;

if (sheetDate !== lpLinkDate)
  console.log(`%cHey!\n\nexpected date: ${sheetDate}, got: ${lpLinkDate}`, 'background:#000;font-size:25px;color:#F00;');

const TopImageTitle_data = {
  color: theme.white,
  backgroundColor: theme.primary,
  type: 'standard',
};

const catObj = {
  name: '',
  background: theme.primary,
  color: theme.black,
  type: 'categorytiles',
  tileBgColor: theme.white,
  tileTextColor: theme.tileText,
  displayType: '2col-img', // 4col, 2col-img, 2col
  showTileNames: false, // Disable tile names
  cta: false,
  paddingTop: 0, // Space before the category element
  spaceAfter: 'newsletterBottom80px', // Space after the category element
  tdClass: 'newsletterContainer', // Category container

  title: {
    show: true,
    align: 'center',
    spaceBefore: 'newsletterBottom35px', // Space before the title element
    className: 'newsletterAditionalTitle', // Custom title class
    tdClass: 'newsletterContainer', // Title container
    spaceAfter: 'newsletterBottom0px'
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
    background: theme.primary,
    color: theme.black,
    offerSpaceAfter: 'newsletterBottom40px',
    spaceAfter: 'newsletterBottom45px',
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
      lowPriceColor: theme.tileText,
      highPriceColor: theme.tileText,
      color: theme.black,
    },
  },

  ...catData.map((cat, idx) => ({
    ...catObj,
    ...cat,
    tiles: tilesData[idx],
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
      disableTopImageTitle: true,
      shopByCategory: false,
      optimizeCss: true,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'left',
        position: 'afterFreebies',
        secondaryLink: false,
        disableLine: true,
        spaceTop: 'newsletterBottom35px',
        spaceBottom: 'newsletterBottom45px',
        containerClass: 'newsletterContainer',
        paragraphSpace: 'newsletterBottom35px',
        cta: {
          variant: 'underline',
          align: 'center',
          color: theme.black,
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
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
      intro: {
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'left',
        position: 'afterFreebies',
        secondaryLink: false,
        disableLine: true,
        spaceTop: 'newsletterBottom35px',
        spaceBottom: 'newsletterBottom45px',
        containerClass: 'newsletterContainer',
        paragraphSpace: 'newsletterBottom35px',
        cta: {
          variant: 'underline',
          align: 'center',
          color: theme.black,
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: true,
      disableKlarna: ['HR', 'SI'],
      footerOverride: footerData,
    },
  ],
});
