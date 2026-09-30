const campaignTranslationsSheet = '2026::07.10.26 - Living room';

const tableQueries = [
  {
    tableRange: '19:25',
    name: 'paragraphs',
  },
  {
    tableRange: '28:34',
    name: 'categoryLinks',
  }
];

const links = {
  Banner_1: translateLink({ value: 'content/lp26-09-24' }),
  Banner_1_Image: translateImage({ value: '20260924b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-30' }),
  Banner_2_Image: translateImage({ value: '20260930b.png' }),

  Intro_cta_href: "https://www.beliani.ch",
};

const additionalCss = `
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}}
`;

const additionalCssLp = `
#newsletter .campaignEyebrow{font-size:12px;font-family:"Poppins",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
#newsletter .campaignHeadline{font-size:53px;font-family:"Poppins",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){#newsletter .campaignHeadline{font-size:32px!important}#newsletter .campaignInset{width:10px!important}#newsletter .campaignTileLink{padding:10px!important}}
`;

const palette = {
  accent: '#FF2F00',
  dark: '#750000',
  text: '#000000',
  page: '#F2E6E6',
  intro: '#FECD8C',
  box: '#FFFFFF',
  boxBorder: '#FFCCB7',
};

const button = {
  show: true,
  align: 'left',
  variant: 'button',
  background: palette.dark,
  fontSize: '14px',
  lineHeight: '14px',
  fontWeight: '700',
  letterSpacing: '0',
  paddingX: 45,
  paddingY: 16,
  mobilePaddingX: 24,
  mobilePaddingY: 14,
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
  src: getImageUrl(`20261007_Cat${number - 1}0.jpg`),

  background: palette.page,
  color: palette.text,

  type: 'grid',

  paragraph: { show: false, spaceAfter: 0 },

  title: {
    show: true,
    color: palette.dark,
    position: 'beforeImg',
    align: 'left',
    spaceAfter: 'newsletterBottom20px',

    number: {
      show: true,
      text: String(number).padStart(2, '0'),
      color: palette.accent,
      className: 'newsletterTitle',
    },

    paragraph: { show: true, color: palette.text },
  },

  cta: {
    ...button,
    position: 'afterImg',
    color: '#F6E7E6',
    spaceBefore: 'newsletterBottom20px',
    spaceAfter: 'newsletterBottom20px',
  },

  product: {
    align: 'left',

    background: palette.box,
    border: `1px solid ${palette.boxBorder}`,
    imageWidth: 262,
    insetX: 15,
    insetClass: 'campaignInset',
    spaceClass: 'newsletterBottom15px',

    gapBetweenVertical: 'newsletterBottom15px',
    gapBetweenHorizontal: 10,
    hideLastBottomGap: true,

    prices: {
      lowColor: palette.accent,
      layout: 'stacked',
      reserveHighPrice: 17,
    },

    title: { color: palette.dark },
  },

  products: Object.values(products).map((id, i) => ({
    id,
    src: getImageUrl(`20261007_Pic${number - 1}${i + 1}.png`),
  })),
}, overrides);

const categories = [
  // top image
  {
    paddingTop: 0,
    spaceAfter: 0,
    href: translateLink({ value: 'content/lp26-10-07' }),
    src: getImageUrl('20261007_Pic.jpg'),
    background: palette.page,
    title: { show: false },
    paragraph: { show: false, spaceAfter: 0 },
  },

  // intro
  {
    paddingTop: 0,
    spaceAfter: 0,
    // href: translateLink({ value: 'content/lp26-10-07' }), LINK Z CATEGORY_LINKS
    container: 'newsletterContainer',
    color: palette.dark,
    background: palette.intro,

    name: 'NEW MOOD, SAME ROOM',
    title: {
      show: true,
      align: 'left',
      color: palette.accent,
      className: 'campaignEyebrow',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom20px',
    },

    paragraph: {
      show: true,
      align: 'left',
      color: palette.dark,
      className: 'campaignHeadline',
      spaceAfter: 'newsletterBottom20px',
    },

    cta: {
      ...button,
      color: '#FFCCB7',
      phrase: 'Shop now First',
      spaceAfter: 'newsletterBottom35px',
      textTransform: 'uppercase',
      tdClass: 'newsletterContainer',
    },
  },

  // sale banner
  {
    paddingTop: 35,
    spaceAfter: 'newsletterBottom35px',
    background: palette.page,
    src: translateImage({ value: '20261007_InsideGif.gif' }),
    href: translateLink({ value: 'content/lp26-10-05' }),
    title: { show: false },
    paragraph: { show: false, spaceAfter: 0 },
  },

  productCategory(1, 'Sofas', 'https://www.beliani.ch/living-room-furniture/sofas/', {
    MAKSABERG: 838564,
    ILBRO: 618288,
    HABO: 806843,
    AMAL: 840364,
  }),

  productCategory(2, 'Coffee tables', 'https://www.beliani.ch/living-room-furniture/tables/coffee-tables/', {
    MALTBY: 839903,
    NOMA: 802116,
    MAMAWI: 814936,
    GAILLARD: 839881,
  }),

  productCategory(3, 'Armchairs', 'https://www.beliani.ch/living-room-furniture/armchairs/', {
    LOHJA: 811591,
    EVJE: 637672,
    ORTEN: 816764,
    REA: 822347,
  }),

  productCategory(4, 'Rugs', 'https://www.beliani.ch/home-accessories/rugs/', {
    SAKARO: 836062,
    ANKARAE: 835999,
    LUNARA: 839144,
    KORDEA: 839270,
  }, {
    spaceAfter: 'newsletterBottom80px',
  }),

  // "This may also interest you"
  {
    paddingTop: 0,
    spaceAfter: 'newsletterBottom80px',

    name: 'This may also interest you',
    background: palette.page,
    color: palette.dark,

    type: 'categorytiles',
    cta: false,
    paragraph: { show: false, spaceAfter: 0 },

    title: {
      show: true,
      align: 'left',
      color: palette.dark,
      spaceAfter: 'newsletterBottom20px',

      eyebrow: {
        show: true,
        phrase: 'KEEP THE LOOK GOING',
        color: palette.accent,
        className: 'campaignEyebrow',
        spaceAfter: 'newsletterBottom10px',
      },
    },

    tile: {
      background: palette.box,
      imageWidth: 295,
      insetX: 15,
      rowSpace: 'newsletterBottom20px',
      label: {
        color: palette.dark,
        className: 'newsletterProductTitle campaignTileLink',
        styles: 'font-weight: 500;',
        align: 'left',
      },
    },

    tiles: [
      {
        name: 'Lighting',
        src: getImageUrl('20261007_Pic41.png'),
        href: 'https://www.beliani.ch/living-room-furniture/lighting/',
      },
      {
        name: 'TV stands',
        src: getImageUrl('20261007_Pic42.png'),
        href: 'https://www.beliani.ch/living-room-furniture/storage/tv-stands/',
      },
      {
        name: 'Textiles',
        src: getImageUrl('20261007_Pic43.png'),
        href: 'https://www.beliani.ch/living-room-furniture/textiles/',
      },
      {
        name: 'Pouffes',
        src: getImageUrl('20261007_Pic44.png'),
        href: 'https://www.beliani.ch/living-room-furniture/stools/pouffes/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: 48633,
  lpId: 32808,
  issueCardId: 536961,
  version: 'new',
  name: 'Living Room',
  date: '07.10.2026',
  figmaUrl: 'https://www.figma.com/design/Sj9zevDFiTKGHt2v2N1yjq/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#F2E6E6',
      color: '#000000',

      // TopImage_data: TopImage_data,

      wrapper: types.WRAPPER,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCss,
    },

    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday,
      css: types.CSS.LP,
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