const campaignTranslationsSheet = '2026::04.11.26 - Christmas Get the look';

const theme = {
  primary: '#FFFFFF',
  primaryText: '#FFFFFF',
  black: '#000000',
  ctaPrimary: '#750000',
  ctaPrimaryText: '#FFFFFF',
};

const tableQueries = [
  { name: 'categories', tableRange: '28:32' },
  { name: 'tiles', tableRange: '28:32' },
  { name: 'shop_header', tableRange: '20' },
  { name: 'paragraphs', tableRange: '33:37' },
  { name: 'intro', tableRange: '21:22' },
  { name: 'condition', tableRange: '38:39' },
];

const links = {
  nsIntro: translateLink({ value: 'content/lp26-11-04' }),
  Intro_cta_href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-04' }),
  TopImageTitle_src: translateImage({ value: '20260923_01.png' }),

  TopImage_src: translateImage({ value: '20261104_topImage.jpg' }),
  TopImage_href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/traditional-christmas',

  ShopNow_src: translateImage({ value: '20261109_shopNow.jpg' }),
  ShopNow_href: 'https://www.beliani.ch/',

  Banner_1: translateLink({ value: 'content/lp26-10-29' }),
  Banner_1_Image: translateImage({ value: '20261029b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-30' }),
  Banner_2_Image: translateImage({ value: '20261030b.png' }),
};

const props = {
  images: {
    topCats: [
      {
        src: 'lp20261104_topCat01.jpg',
        translate: true,
      },
      {
        src: 'lp20261104_topCat02.jpg',
        translate: true,
      },
      {
        src: 'lp20261104_topCat03.jpg',
        translate: true,
      },
      {
        src: 'lp20261104_topCat04.jpg',
        translate: true,
      },
      {
        src: 'lp20261104_topCat05.jpg',
        translate: true,
      },
    ],
    cats: [
      {
        src: 'lp20261104_catImg01.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catImg02.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catImg03.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catImg04.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catImg05.jpg',
        translate: false,
      },
    ],
    catsns: [
      {
        src: 'ns20261104_cat01.jpg',
        translate: true,
      },
      {
        src: 'ns20261104_cat02.jpg',
        translate: true,
      },
      {
        src: '20261104_Cat03.jpg',
        translate: true,
      },
      {
        src: 'ns20261104_Cat04.jpg',
        translate: true,
      },
      {
        src: 'ns20261104_Cat05.jpg',
        translate: true,
      },
    ],
    catColors: [
      {
        src: 'lp20261104_catColors01.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catColors02.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catColors03.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catColors04.jpg',
        translate: false,
      },
      {
        src: 'lp20261104_catColors05.jpg',
        translate: false,
      },
    ],
  },
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'standard',
};

const products = [
  [
    { id: '418670', src: getImageUrl('lp20261104_Prod01.jpg') },
    { id: '664683', src: getImageUrl('lp20261104_Prod02.jpg') },
    { id: '676510', src: getImageUrl('lp20261104_Prod03.jpg') },
    { id: '664147', src: getImageUrl('lp20261104_Prod04.jpg') },
    { id: '656759', src: getImageUrl('lp20261104_Prod05.jpg') },
    { id: '664109', src: getImageUrl('lp20261104_Prod06.jpg') },
    { id: '212151', src: getImageUrl('lp20261104_Prod07.jpg') },
    { id: '664185', src: getImageUrl('lp20261104_Prod08.jpg') },
  ],
  [
    { id: '676860', src: getImageUrl('lp20261104_Prod09.jpg') },
    { id: '672540', src: getImageUrl('lp20261104_Prod10.jpg') },
    { id: '663863', src: getImageUrl('lp20261104_Prod11.jpg') },
    { id: '671355', src: getImageUrl('lp20261104_Prod12.jpg') },
    { id: '561701', src: getImageUrl('lp20261104_Prod13.jpg') },
    { id: '671469', src: getImageUrl('lp20261104_Prod14.jpg') },
    { id: '672521', src: getImageUrl('lp20261104_Prod15.jpg') },
    { id: '672370', src: getImageUrl('lp20261104_Prod16.jpg') },
  ],
  [
    { id: '664722', src: getImageUrl('lp20261104_Prod17.jpg') },
    { id: '666175', src: getImageUrl('lp20261104_Prod18.jpg') },
    { id: '446887', src: getImageUrl('lp20261104_Prod19.jpg') },
    { id: '652857', src: getImageUrl('lp20261104_Prod20.jpg') },
    { id: '671412', src: getImageUrl('lp20261104_Prod21.jpg') },
    { id: '681888', src: getImageUrl('lp20261104_Prod22.jpg') },
    { id: '663995', src: getImageUrl('lp20261104_Prod23.jpg') },
    { id: '683235', src: getImageUrl('lp20261104_Prod24.jpg') },
  ],
  [
    { id: '652915', src: getImageUrl('lp20261104_Prod25.jpg') },
    { id: '664032', src: getImageUrl('lp20261104_Prod26.jpg') },
    { id: '664743', src: getImageUrl('lp20261104_Prod27.jpg') },
    { id: '668091', src: getImageUrl('lp20261104_Prod28.jpg') },
    { id: '842577', src: getImageUrl('lp20261104_Prod29.jpg') },
    { id: '674265', src: getImageUrl('lp20261104_Prod30.jpg') },
    { id: '674738', src: getImageUrl('lp20261104_Prod31.jpg') },
    { id: '677181', src: getImageUrl('lp20261104_Prod32.jpg') },
  ],
  [
    { id: '679154', src: getImageUrl('lp20261104_Prod33.jpg') },
    { id: '662014', src: getImageUrl('lp20261104_Prod34.jpg') },
    { id: '577367', src: getImageUrl('lp20261104_Prod35.jpg') },
    { id: '673995', src: getImageUrl('lp20261104_Prod36.jpg') },
    { id: '674015', src: getImageUrl('lp20261104_Prod37.jpg') },
    { id: '845178', src: getImageUrl('lp20261104_Prod38.jpg') },
    { id: '679111', src: getImageUrl('lp20261104_Prod39.jpg') },
    { id: '296290', src: getImageUrl('lp20261104_Prod40.jpg') },
  ],
];

const categories = [
  {
    name: 'Traditional',
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/traditional-christmas/',
    src: getImageUrl(props.images.cats[0].src),
    products: products[0],
  },
  {
    name: 'Scandinavian',
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/scandinavian-christmas/',
    src: getImageUrl(props.images.cats[1].src),
    products: products[1],
  },
  {
    name: 'Rustic',
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/rustic-christmas/',
    src: getImageUrl(props.images.cats[2].src),
    products: products[2],
  },
  {
    name: 'Glamour',
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/glamour-christmas/',
    src: getImageUrl(props.images.cats[3].src),
    products: products[3],
  },
  {
    name: 'Fun modern',
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/modern-christmas/',
    src: getImageUrl(props.images.cats[4].src),
    products: products[4],
  },
];

const categoriesNs = [
  {
    name: '',
    // src: getImageUrl('20260311_Cat30.jpg', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: '#FFFFFF',
    color: '#000000',
    type: 'categorytiles',
    displayType: '2col-img',
    cta: false,
    background: theme.addColor,
    spaceAfter: 'newsletterBottom35px',
    tileBgColor: theme.white,
    tileTextColor: theme.titleText,
    paddingTop: 5,
    showTileNames: true,
    tdClass: false,
    title: {
      show: false,
    },
    paragraph: {
      show: false,
    },
    tile: {
      spaceBetweenTiles: 'newsletterContainer5px',
      bottomTileSpace: 'newsletterBottom5px',
    },
    tiles: [
      {
        name: 'Scandinavian',
        src: translateImage({ value: 'ns20261104_Cat01.jpg' }),
        href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/scandinavian-christmas/',
      },
      {
        name: 'Rustic',
        src: translateImage({ value: 'ns20261104_Cat02.jpg' }),
        href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/rustic-christmas/',
      },
      {
        name: 'Glamour',
        src: translateImage({ value: 'ns20261104_Cat03.jpg' }),
        href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/glamour-christmas/',
      },
      {
        name: 'Fun modern',
        src: translateImage({ value: 'ns20261104_Cat04.jpg' }),
        href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/modern-christmas/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '49729',
  name: 'Wednesday - Christmas Get the look',
  date: '04.11.2026',
  issueCardId: '544267',
  lpId: '33474',
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
      template: templates.ChristmasLook,

      css: types.CSS.NS_AI_NEW,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categoriesNs,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: true,
      shopByCategory: false,
      optimizeCss: true,
      theme,
      intro: {
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        spaceTop: false,
        spaceBottom: 'newsletterBottom80px',
        paragraphSpace: 'newsletterBottom35px',
        position: 'afterCategories',
        secondaryLink: false,
        cta: {
          variant: 'cream',
          color: theme.ctaPrimaryText,
          bg: theme.ctaPrimary,
          borderColor: theme.ctaPrimary,
          borderWidth: '15px 45px',
          phrase: 'Discover more',
          textOverrides: {
            fi: 'Lue lisää',
          },
        },
        disableLine: true,
        containerClass: 'newsletterContainer',
        options: {
          align: 'center',

          headerColor: theme.secondaryText,
          headerWeight: 600,

          titleColor: theme.titleText,
          titleWeight: 700,
        },
      },
      // disableFooterCategories: true,
      disableSoonEnding: true,
    },
    {
      background: theme.primary,
      color: theme.black,
      template: templates.ChristmasLook,
      skipCss: true,
      name: 'Landing',
      type: types.LANDINGPAGE,
      props: props,
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
      disableSoonEnding: true,
    },
  ],
});
