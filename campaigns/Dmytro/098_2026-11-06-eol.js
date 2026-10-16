const campaignTranslationsSheet = '2026::06.11.26 - EOL';

const tableQueries = [
  {
    tableRange: "16:17",
    name: "TopImageTitle"
  },
  {
    tableRange: "19",
    name: "intro"
  },
  {
    tableRange: "20:23",
    name: "timer_freebies"
  },
  {
    tableRange: '24:30',
    name: 'categoryLinks',
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-06' }),

  TopImage_src: translateImage({ value: '20261106_gif.gif' }),
	TopImage_href: translateLink({ value: 'content/lp26-11-06' }),
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

const TopImageTitle_data = {
	mainColor: '#750000',
  secondaryColor: '#000000',
	backgroundColor: '#FFCEB5',
	type: 'eolTitle',
  renderType: 'text',
};

const TopImage_data = {
	container: "newsletterContainer"
}

const intro_cta_overrides = {
}

const timer = {
	freebies: [
		// TORNIO
		{
			id: 229265,
			titlePhrase: 'Candle Holders',
			src: getImageUrl('20261001_free01.png', true),
		},
		// CANDELARIA
		{
			id: 251828,
			titlePhrase: 'Wreath',
			src: getImageUrl('20261001_free02.png', true),
		},
		// OURENSE
		{
			id: 336136,
			titlePhrase: 'Garland',
			src: getImageUrl('20261001_free03.png', true),
		},
		// CUPCAKE
		{
			id: 571807,
			titlePhrase: 'Scatter cushion',
			src: getImageUrl('20261001_free04.png', true),
		},
		// PUDDING
		{
			id: 571845,
			titlePhrase: 'Scatter cushion',
			src: getImageUrl('20261001_free05.png', true),
		},
	],
	theme: 'Subtle Peach',
	deadline: '2026-11-08',
}

const palette = {
  accent: '#FF2F00',
  dark: '#750000',
  text: '#000000',
  page: '#FFFFFF',
  body: '#FFF5F1',
  box: '#FFFFFF',
  boxBorder: '#FFCCB7',
  price: '#750000',
  newbg:'#FDF8F8',
  buttonCta: "#FFFFFF"
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
  src: getImageUrl(`20261106Category${number}0.jpg`),
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

    paragraph: { show: false, color: palette.text, spaceBefore: 'newsletterBottom30px' },
  },

  cta: {
    ...button,
    position: 'afterProducts',
    color: '#FFFFFF',
    spaceBefore: 'newsletterBottom30px',
    spaceAfter: 'newsletterBottom30px',
    align: 'center',
  },

  product: {
    align: 'left',

    imageWidth: number % 2 == 0 ? 280 : 180,
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
    src: getImageUrl(`20261106Category${number}${i + 1}.png`),
  })),
}, overrides);

const categories = [
  productCategory(1, 'Sofas', 'https://www.beliani.ch/bedroom-furniture/beds/', {
    EVJA: 232046,
    VINTERBRO: 442853,
    TAMRE: 618747,
  }),

  productCategory(2, 'Beds', 'https://www.beliani.ch/bedroom-furniture/storage/', {
    ORBEY: 615939,
    ZEN: 521610,
    MELLE: 187191,
    ORBEY: 460226,
  }),

  productCategory(3, 'Armchairs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    DALBY: 458928,
    APATE: 649516,
    KINNO: 607821,
  }),

  productCategory(4, 'Tables', 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/', {
    ORBEY: 615939,
    POZZA: 675442,
    LANDER: 556654,
    MERCED: 310487,
  }),

  productCategory(5, 'Chairs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    KOBUK: 430797,
    LUANA: 407196,
    ARTESIA: 670151,
  }),

  productCategory(6, 'Lighting', 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/', {
    APAYAO: 581973,
    JAVARI: 399266,
    KABOMPO: 497934,
    KITARE: 681466,
  }),

  productCategory(7, 'Rugs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    MUGLA: 351291,
    GERZE: 379010,
    FENER: 376699,
  })
];


export default new entities.Campaign({
  startId: 49633,
  lpId: 33403,
  issueCardId: 545399,
  version: 'new',
  name: 'EOL',
  date: '06.11.2026',
  figmaUrl: 'https://www.figma.com/design/7bNNTXMixnke0OEPy72Csk/2026.11.06---Newsletter---EOL?node-id=10002-5178&t=hYoHjzNrXLfE04Jv-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Friday,
      css: types.CSS.NS_FRIDAY,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#F2E6E6',
      color: '#000000',

      TopImageTitle_data: TopImageTitle_data,
			TopImage_data: TopImage_data,

      wrapper: types.WRAPPER,

      intro: {
				container: 'newsletterContainer',
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
					phrase: 'Shop now',
					show: true,
					spaceAfter: 'newsletterBottom35px',
          overrides: intro_cta_overrides,
				}
			},
			Inside: {
				type: 'timer',
			},

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
      css: types.CSS.LP_FRIDAY,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#F2E6E6',
      color: '#000000',
      
      TopImageTitle_data: TopImageTitle_data,
			TopImage_data: TopImage_data,
      
      intro: {
				container: 'newsletterContainer',
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
					phrase: 'Shop now',
					show: true,
					spaceAfter: 'newsletterBottom35px',
					overrides: intro_cta_overrides,
				}
			},
			Inside: {
				type: 'timer',
			},

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCssLp,
    }
  ]
})