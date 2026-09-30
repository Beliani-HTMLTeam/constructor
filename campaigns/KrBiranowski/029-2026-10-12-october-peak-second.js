const campaignTranslationsSheet = '2026::12.10.26 - October Peak Second';

const theme = {
  primary: '#FAF1F0',
  primaryText: '#750000',
  secondary: '#F2E6E6',
  secondaryText: '#FFCCB7',
  ctaText: '#FFF4E6',
  unitBg: '#AC6666',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introText: '#000000',
  insideBg: '#750000',
  toastBg: '#FBF3F0',
  toastText: '#750000',
};

const catData = [
  // Cat 1
  {
    name: 'Sofas',
    src: getImageUrl('20261012_Cat01.png', true),
    href: 'https://www.beliani.ch/sofas/',
  },
  // Cat 2
  {
    name: 'Beds',
    src: getImageUrl('20261012_Cat02.png', true),
    href: 'https://www.beliani.ch/beds/',
  },
  // Cat 3
  {
    name: 'Armchairs',
    src: getImageUrl('20261012_Cat03.png', true),
    href: 'https://www.beliani.ch/armchairs/',
  },
  // Cat 4
  {
    name: 'Tables',
    src: getImageUrl('20261012_Cat04.png', true),
    href: 'https://www.beliani.ch/tables/',
  },
  // Cat 5
  {
    name: 'Chairs',
    src: getImageUrl('20261012_Cat05.png', true),
    href: 'https://www.beliani.ch/chairs/',
  },
  // Cat 6
  {
    name: 'Storage',
    src: getImageUrl('20261012_Cat06.png', true),
    href: 'https://www.beliani.ch/storage/',
  },
  // Cat 7
  {
    name: 'Desks',
    src: getImageUrl('20261012_Cat07.png', true),
    href: 'https://www.beliani.ch/office-furniture/desks/',
  },
  // Cat 8
  {
    name: 'Textiles',
    src: getImageUrl('20261012_Cat08.png', true),
    href: 'https://www.beliani.ch/textiles/',
  },
  // Cat 9
  {
    name: 'Lighting',
    src: getImageUrl('20261012_Cat09.png', true),
    href: 'https://www.beliani.ch/lighting/',
  },
  // Cat 10
  {
    name: 'Bathtubs',
    src: getImageUrl('20261012_Cat10.png', true),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
  },
  // Cat 11
  {
    name: 'Rugs',
    src: getImageUrl('20261012_Cat11.png', true),
    href: 'https://www.beliani.ch/rugs/',
  },
  // Cat 12
  {
    name: 'Accessories',
    src: getImageUrl('20261012_Cat12.png', true),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
  },
];

const tableQueries = [
  {
    name: 'tile_discount',
    tableRange: '12',
  },
  {
    name: 'intro',
    tableRange: '23',
  },
  {
    name: 'shop_by_category_title',
    tableRange: '24',
  },
  {
    name: 'condition',
    tableRange: '25:26',
  },
  
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-12' }),
  TopImageTitle_src: translateImage({ value: '20260827_01.png' }),

  TopImage_src: translateImage({ value: '20261012_Gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-12' }),

  Banner_1: translateLink({ value: 'content/lp26-09-30' }),
  Banner_1_Image: translateImage({ value: '20260930b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-01' }),
  Banner_2_Image: translateImage({ value: '20261001b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'twoSameLines',
};

const categories = [
  {
    skipLinkTranslation: true,
    background: theme.primary,
    rounded: 'top',
    margin: 'newsletterTop35px',
    padding: 'newsletterContainer25px',
    spaceBefore: false,
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    color: theme.black,
    type: 'shop-by-category-peak',
    paddingTop: 0,
    title: {
      show: false,
    },
    options: {
      showName: true,
      showDiscount: true,
      showCta: true,

      discountColor: theme.primaryText,
      ctaColor: theme.primaryText,

      nameWeight: 600,
      discountWeight: 600,
    },
    tiles: catData
  },
];

export default new entities.Campaign({
  startId: "48665",
  name: "Monday - October Peak Second",
  date: "12.10.2026",
  issueCardId: "534509",
  lpId: "32829",
  // specialLpIds: {
  //   HR: '31562',
  //   SI: '31563',
  // },
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: "new",
  figmaUrl: "https://www.figma.com/design/pC70LMdl48JU2X9pDox3kk/",
  templates: [
    {
      background: theme.primary,
      color: theme.black,
      template: templates.Monday,

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImageMargin: 'newsletterTop35px',
      tableQueries: tableQueries,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        position: 'afterTopImage',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          spaceAfter: 'newsletterBottomIntro35px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
    },
    {
      background: theme.primary,
      color: theme.black,
      template: templates.Monday,

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImageMargin: 'newsletterTop35px',
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        position: 'afterTopImage',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          spaceAfter: 'newsletterBottomIntro35px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: true,
      disableSoonEnding: true,
      disableKlarna: ['HR', 'SI'],
    },
  ],
});