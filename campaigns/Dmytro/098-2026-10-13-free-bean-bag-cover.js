const campaignTranslationsSheet = '2026::Voucher - 13.10.26 - Free Bean Bag';

const theme = {
  primary: '#FFD6C5',
  primaryText: '#750000',
  secondary: '#FFEFD9',
  secondaryText: '#000000',
  offerTitleColor: '#750000',
  offerPrg1Color: '#000000',
  offerPrg2Color: '#000000',
  offerBg: '#FFEFD9',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  dealBg: '#FFD6C5',
  freebieColor: '#FFD6C5',
  ctaSecondary: '#F6E7E6',
  ctaSecondaryText: '#000000',
  ctaPrimary: '#750000',
  ctaPrimaryText: '#FFFFFF',
  tileText: '#5B1210',
};

const prodData = [
  [
    [
      { id: '316914', src: getImageUrl('20261013freebie_1.gif', true), bottom: getImageUrl('20261013freebie1_color.png', true), useDescription: true },
      { id: '316914', src: getImageUrl('20261013freebie_2.gif', true), bottom: getImageUrl('20261013freebie2_color.png', true), useDescription: true },
    ],
  ]
];

const tableQueries = [
  {
    name: 'offer',
    tableRange: '23:26',
  },
  {
    name: 'offer_date',
    tableRange: '27',
  },
  {
    name: 'offer_code',
    tableRange: '28',
  },
  {
    name: 'freebies_additional',
    tableRange: '29',
  },
  {
    name: 'condition',
    tableRange: '30:32',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-13' }),
  TopImageTitle_src: translateImage({ value: '20261013_01.png' }),

  TopImage_src: getImageUrl('20261013_gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-10-13' }),

  Banner_1: translateLink({ value: 'content/lp26-09-30' }),
  Banner_1_Image: translateImage({ value: '20260930b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-01' }),
  Banner_2_Image: translateImage({ value: '20261001b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'standard',
};

const categories = [
  // offer
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#FFEFD9',
    color: theme.black,
    offerPrg2Color: theme.black,
    spaceAfter: 'newsletterBottom10px',
    offerSpaceAfter: 'newsletterBottom40px',
    cta: {
      variant: 'cream',
      color: theme.white,
      bg: theme.ctaPrimary,
      spaceBefore: 'newsletterBottom25px',
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
    },
    freebiesSize: 'large',
    combineOfferParts: true,
    freebies: prodData[0],
    product: {
      freebieSize: 16,
      descSize: 15,
      align: 'center',
      priceLowSize: 16,
      priceHighSize: 15,
      lowPriceColor: theme.tileText,
      highPriceColor: theme.tileText,
      color: theme.black,
      prodTitleClass: 'newsletterProductTitleSmall',
      prodDescClass: 'newsletterProductDescSmall',
      prodLowPriceClass: 'newsletterProductLowPriceSmall',
      prodHighPriceClass: 'newsletterProductHigPriceSmall'
    }
  },

  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://beliani.ch',
    paddingTop: '0',
    type: 'small-tiles',
    background: '#FFD6C5',
    color: '#000000',
    paragraph: {
      position: 'afterProducts',
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom80px',
    cta: {
      variant: "underline",
      phrase: 'Shop all categories',
    },
    tiles: {
      background: '750000',
      text: 'ffffff',
      items: [
        {
          name: 'Outdoor', // uzywane jako Alt, getCategoryTitle(name)
          href: 'https://www.beliani.ch/garden-furniture', // link do kategorii -> getCategoryLink(href)
          // src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
        },
        {
          name: 'Sofas',
          href: 'https://www.beliani.ch/sofas',
        },
        {
          name: 'Beds',
          href: 'https://www.beliani.ch/beds',
        },
        {
          name: 'Armchairs',
          href: 'https://www.beliani.ch/armchairs',
        },
        {
          name: 'Chairs',
          href: 'https://www.beliani.ch/chairs',
        },
        {
          name: 'Tables',
          href: 'https://www.beliani.ch/tables',
        },
        {
          name: 'Storage',
          href: 'https://www.beliani.ch/storage',
        },
        {
          name: 'Kids',
          href: 'https://www.beliani.ch/children-room',
        },
        {
          name: 'Textiles',
          href: 'https://www.beliani.ch/textiles',
        },
        {
          name: 'Lighting',
          href: 'https://www.beliani.ch/lighting',
        },
        {
          name: 'Bathtubs',
          href: 'https://www.beliani.ch/bathtubs-hot-tubs',
        },
        {
          name: 'Desks',
          href: 'https://www.beliani.ch/office-furniture/desks',
        },
        {
          name: 'Rugs',
          href: 'https://www.beliani.ch/rugs',
        },
        {
          name: 'Accessories',
          href: 'https://www.beliani.ch/home-accessories/accessories-decor',
        },
      ],
    },
  },
];

export default new entities.Campaign({
  startId: '48825',
  name: 'Free Bean Bag Cover',
  date: '13.10.2026',
  issueCardId: '538963',
  lpId: '32938',
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
  figmaUrl: 'https://www.figma.com/design/4y1G4ZhMBPZpsvfa6QePwi/Newsletter-Free-Bean-Bag-Cover---Tuesday-2026.10.13?node-id=0-1&t=rwFbyJbNguK8qGd4-1',
  templates: [
    {
      background: theme.primary,
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
      theme,
    },
    {
      background: theme.primary,
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
      disableTopImageTitle: true,
    },
  ],
});
