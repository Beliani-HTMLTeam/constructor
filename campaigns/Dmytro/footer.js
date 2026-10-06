const campaignTranslationsSheet = '2026::21.10.26 - Bedroom';

const tableQueries = [
  {
    tableRange: "17:18",
    name: "TopImageTitle"
  },
  {
    tableRange: '20:25',
    name: 'paragraphs',
  }
];

const links = {
  Banner_1: translateLink({ value: 'content/lp26-10-14' }),
  Banner_1_Image: translateImage({ value: '20261014b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-09' }),
  Banner_2_Image: translateImage({ value: '20261009b.png' }),
};

const additionalCss = `
.newsletterTitleOverride{font-size: 28px; font-family: "Open Sans", sans-serif; line-height: 1.2; text-transform: uppercase; font-weight: 400;}
.newsletterProductTitleOverride{font-size: 15px; font-family: "Open Sans", sans-serif; line-height: 1.2; text-transform: uppercase; font-weight: 700; padding-left: 10px;}
.newsletterProductPriceLeft {padding-left: 10px;}
@media screen and (max-width: 768px) {
.newsletterTitleOverride{font-size: 20px;}
.newsletterProductTitleOverride{font-size: 13px; padding-left: 5px;}
.newsletterProductPriceLeft {padding-left: 5px;}
}
`;

const additionalCssLp = `
#newsletter .newsletterTitleOverride{font-size: 28px; font-family: "Open Sans", sans-serif; line-height: 1.2; text-transform: uppercase; font-weight: 400;}
#newsletter .newsletterProductTitleOverride{font-size: 15px; font-family: "Open Sans", sans-serif; line-height: 1.2; text-transform: uppercase; font-weight: 700; padding-left: 10px;}
#newsletter .newsletterProductPriceLeft {padding-left: 10px;}
@media screen and (max-width: 768px) {
#newsletter  .newsletterTitleOverride{font-size: 20px;}
#newsletter  .newsletterProductTitleOverride{font-size: 13px; padding-left: 5px;}
#newsletter  .newsletterProductPriceLeft {padding-left: 5px;}
}
`;

const palette = {
  accent: '#FF2F00',
  dark: '#750000',
  text: '#000000',
  page: '#FFFFFF',
  body: '#F6E7E6',
  box: '#FFFFFF',
  boxBorder: '#FFCCB7',
  price: '#750000',
  newbg:'#FDF8F8'
};

const button = {
  show: true,
  align: 'left',
  variant: 'button',
  background: palette.dark,
  fontSize: '15px',
  lineHeight: '16px',
  fontWeight: '700',
  letterSpacing: '0',
  paddingX: 45,
  paddingY: 15,
  mobilePaddingX: 24,
  mobilePaddingY: 14,
  borderRadius: '0px',
};

const merge = (base, patch = {}) =>
  Object.entries(patch).reduce(
    (out, [key, value]) => ({
      ...out,
      [key]: value && typeof value === 'object' && !Array.isArray(value) ? merge(out[key] ?? {}, value) : value,
    }),
    { ...base }
  );

const productCategory = (number, name, href, products, overrides) => merge({
  paddingTop: 0,
  spaceAfter: 'newsletterBottom35px',
  name,
  href,
  src: getImageUrl(`20261021_Cat0${number}_A.jpg`),
  background: palette.newbg,

  color: palette.text,

  type: 'grid',

  paragraph: { show: false, spaceAfter: 0 },

  title: {
    show: true,
    color: palette.text,
    position: 'afterImg',
    align: 'center',
    spaceAfter: 0,
    className: 'newsletterTitleOverride',

    number: {
      show: false,
      color: palette.accent,
      className: 'newsletterTitle',
    },

    paragraph: { show: true, color: palette.text, spaceBefore: 'newsletterBottom30px' },
  },

  cta: {
    ...button,
    position: 'afterImg',
    color: '#FFFFFF',
    spaceBefore: 'newsletterBottom30px',
    spaceAfter: 'newsletterBottom30px',
    align: 'center',
  },

  product: {
    align: 'left',

    imageWidth: number % 2 == 0 ? 310 : 319,
    spaceClass: 'newsletterBottom15px',

    gapBetweenVertical: 'newsletterBottom10px',
    gapBetweenHorizontal: 5,
    containerInsetPct: 0,
    gapPct: 1,
    hideLastBottomGap: true,
    spaceBetweenVertical: 'newsletterBottom35px',

    outlineFilledPadding: number % 2 === 0 ? 20 : null,
    productsBg:palette.newbg,

    prices: {
      lowColor: palette.price,
      highColor: palette.price,
      reserveHighPrice: 17,
      className: number % 2 !== 0 ? 'newsletterProductPriceLeft' : '',
    },

    title: { styles: number % 2 === 0 ? 'padding-left: 0 !important;' : '', color: palette.text, className: 'newsletterProductTitleOverride' },
  },

  products: Object.values(products).map((id, i) => ({
    id,
    src: getImageUrl(`20261021_Cat${number}${i + 1}_A.png`),
  })),
}, overrides);

const categories = [
  // top image
  {
    paddingTop: 0,
    spaceAfter: 0,
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    src: translateImage({ value: '20261021_Cat10_A.png' }),
    background:  palette.newbg,
    title: { show: false },
    paragraph: { show: false, spaceAfter: 0 },
  },

  // sale banner
  {
    paddingTop: 0,
    spaceAfter: 'newsletterBottom35px',
    background:  palette.newbg,
    src: translateImage({ value: '20261007_InsideGif.gif' }),
    href: translateLink({ value: 'content/lp26-10-05' }),
    title: { show: false },
    paragraph: { show: false, spaceAfter: 0 },
  },

  productCategory(1, 'Beds', 'https://www.beliani.ch/bedroom-furniture/beds/', {
    BOUSSICOURT: 461458,
    MONTLAUR: 588168,
    SAUVIAN: 661137,
    AYETTE: 335418,
  }, {src: '', container: '', spaceAfter: 'newsletterBottom80px', product: {spaceBetweenVertical: 'newsletterBottom50px'}}),

  productCategory(2, 'Storage', 'https://www.beliani.ch/bedroom-furniture/storage/', {
    GLASTONBURY: 607763,
    FEDRY: 360934,
    NIVO: 525110,
    KEITH: 571256,
  }, { container: 'newsletterContainer10px', spaceAfter: 'newsletterBottom80px',title: {spaceBefore: 'newsletterBottom35px'}}),

  productCategory(3, 'Bedside Tables', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    DORRIGO: 839313,
    GLASTONBURY: 607518,
    BLYTHE: 600881,
    SALTON: 562694,
  }, {container: '', spaceAfter: 'newsletterBottom80px', title: {spaceBefore: 'newsletterBottom35px'}, product: {spaceBetweenVertical: 'newsletterBottom50px'}}),

  productCategory(4, 'Table & Bedside Lamps', 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/', {
    LUCHETTI: 358668,
    ARWADITO: 444648,
    BETWA: 620010,
    SIGI: 723347,
  }, {
    container: 'newsletterContainer10px',
    spaceAfter: 'newsletterBottom10px',
    title: {spaceBefore: 'newsletterBottom35px'}
  }),

  // "This may also interest you"
  {
    paddingTop: 80,
    spaceAfter: 'newsletterBottom80px',

    name: 'This may also interest you',
    background: palette.page,
    color: palette.dark,

    type: 'categorytiles',
    cta: false,
    paragraph: { show: false, spaceAfter: 0 },

    showTileNames: false,

    title: {
      show: true,
      align: 'center',
      color: palette.text,
      spaceAfter: 'newsletterBottom35px',
      className: 'newsletterTitleOverride',

      eyebrow: {
        show: false,
        phrase: 'This may also interest you',
        color: palette.accent,
        className: 'campaignEyebrow',
        spaceAfter: 'newsletterBottom10px',
      },
    },

    tile: {
      background: palette.box,
      imageWidth: 295,
      insetX: 15,
      rowSpace: 'newsletterBottom70px',
      label: {
       
        color: palette.dark,
        className: 'newsletterProductTitle campaignTileLink',
        styles: 'font-weight: 500;',
        align: 'left',
      },
    },

    tiles: [
      {
        name: 'Mattresses',
        src: translateImage({ value: '20261021_Add01_A.png' }),
        href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
      },
      {
        name: 'Mirrors',
        src: translateImage({ value: '20261021_Add02_A.png' }),
        href: 'https://www.beliani.ch/bedroom-furniture/mirrors/',
      },
      {
        name: 'Rugs',
        src: translateImage({ value: '20261021_Add03_A.png' }),
        href: 'https://www.beliani.ch/bedroom-furniture/rugs/',
      },
      {
        name: 'Ottomans',
        src: translateImage({ value: '20261021_Add04_A.png' }),
        href: 'https://www.beliani.ch/bedroom-furniture/stools/ottomans/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: 49280,
  lpId: 33216,
  issueCardId: 541930,
  version: 'new',
  name: 'Footer',
  date: '21.10.2026',
  figmaUrl: 'https://www.figma.com/design/LWw6hT2yHM8s6K98Yi26vH/Bedroom---Wednesday-2026.10.21?node-id=0-1&t=h0WKSnuNASUVcOB5-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Friday,
      css: types.CSS.NS_FOOTER,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#F2E6E6',
      color: '#000000',

      // TopImage_data: TopImage_data,

      wrapper: types.WRAPPER,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCss,
      optimizeCss: true,
    },

    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Friday,
      css: types.CSS.LP_FOOTER,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#F2E6E6',
      color: '#000000',

      // TopImage_data: TopImage_data,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCssLp,
    }
  ]
})