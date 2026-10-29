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
    tableRange: '24:37',
    name: 'categoryLinks',
  }, 
  {
    tableRange: "43:44",
    name: "timer"
  }
];

const links = {
  TopImageTitle_type: 'image',
  TopImageTitle_src: translateImage({ value: '20261106_01.png' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-06' }),

  TopImage_src: getImageUrl('20261106_gif.gif', true),
	TopImage_href: translateLink({ value: 'content/lp26-11-06' }),
  Timer_href: translateLink({ value: 'content/lp26-11-02' }),
  Intro_cta_href: "https://www.beliani.ch/last-pieces/"
};

const additionalCss = `
.newsletter3ProductsLeft,
.newsletter3ProductsCenter,
.newsletter3ProductsRight {
  padding-left: 10px !important;
  padding-right: 10px !important;
}

.freebiesContainer--list .newsletterProductTitleFreebie {
  font-size: 18px !important;
}

.newsletterTitleOverride{font-size: 40px; font-family: "Open Sans", sans-serif; line-height: 1.2; font-weight: 600;}
.newsletterProductTitleOverride{font-size: 20px; font-family: "Open Sans", sans-serif; line-height: 1.2; text-transform: uppercase; font-weight: 400;}
.newsletterProductPriceLeft {padding-left: 10px;}
@media screen and (max-width: 768px) {
  .newsletter3ProductsLeft,
  .newsletter3ProductsCenter,
  .newsletter3ProductsRight {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
  .newsletterParagraph {
    font-size: 18px;
}
.newsletterTitleOverride{font-size: 34px;}
.newsletterProductTitleOverride{font-size: 15px; }
.newsletterProductPriceLeft {padding-left: 5px;}
}
`;

const additionalCssLp = `
#newsletter .newsletter3ProductsLeft,
#newsletter .newsletter3ProductsCenter,
#newsletter .newsletter3ProductsRight {
  padding-left: 10px !important;
  padding-right: 10px !important;
}

#newsletter .freebiesContainer--list .newsletterProductTitleFreebie {
  font-size: 18px !important;
}

@media screen and (max-width: 768px) {
  #newsletter .newsletter3ProductsLeft,
  #newsletter .newsletter3ProductsCenter,
  #newsletter .newsletter3ProductsRight {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
  #newsletter .newsletterParagraph {
    font-size: 18px !important;
  }
  #newsletter  .newsletterTitleOverride{font-size: 34px;}
  #newsletter  .newsletterProductTitleOverride{font-size: 15px; }
  #newsletter  .newsletterProductPriceLeft {padding-left: 5px;}
}
.newsletterTitleOverride{font-size: 40px; line-height: 1.2; font-weight: 600;}
.newsletterProductTitleOverride{font-size: 20px; line-height: 1.2; text-transform: uppercase; font-weight: 400;}
#newsletter .newsletterProductPriceLeft {padding-left: 10px;}
`;

const TopImageTitle_data = {
	mainColor: '#750000',
  secondaryColor: '#000000',
	backgroundColor: '#FFCEB5',
	type: 'eol',
  position: 'afterTopImage',
};


const intro_cta_overrides = {
  FI: "Tutustu valikoimaan"
}

const timer = {
	freebies: [
		// ANDIRIN
		{
			id: 257987,
			titlePhrase: 'Decorative Cushions',
			src: getImageUrl('20261106freebie1.png', true),
      exclude: ['no']
		},
		// PADRE
		{
			id: 232377,
			titlePhrase: 'Candle Holder',
			src: getImageUrl('20261106freebie2.png', true),
		},
		// FLORETTA
		{
			id: 367111,
			titlePhrase: 'Neon LED Signs',
			src: getImageUrl('20261106freebie3.png', true),
		},
		// PONTIVY
		{
			id: 232794,
			titlePhrase: 'Decorative Tray',
			src: getImageUrl('20261106freebie4.png', true),
		}
	],
	theme: 'Soft Peach',
	deadline: '2026-11-08',
}

const palette = {
  accent: '#FF2F00',
  dark: '#750000',
  title: '#750000',
  text: '#000000',
  page: '#FFFFFF',
  body: '#FFF5F1',
  box: '#FFFFFF',
  boxBorder: '#FFCCB7',
  price: '#750000',
  newbg:'#FDF8F8',
  buttonCta: "#FFFFFF",
  button: "#FF2F00"
};

const button = {
  show: true,
  align: 'center',
  variant: 'button',
  background: palette.button,
  fontSize: '15px',
  lineHeight: '16px',
  mobileFontSize: '18px',
  mobileLineHeight: '20px',
  fontWeight: '600',
  letterSpacing: '0',
  paddingX: 35,
  paddingY: 14,
  mobilePaddingX: 24,
  mobilePaddingY: 13,
  borderRadius: '4px',
  textTransform: 'none',
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
  spaceAfter: 'newsletterBottom80px',
  name,
  href,
  src: getImageUrl(`20261106Category${number}0.jpg`),
  background: palette.body,

  container: 'newsletterContainer35px',
  insideContainer: true,

  color: palette.text,

  type: 'grid',

  paragraph: { show: false, spaceAfter: 'newsletterBottom35px' },

  title: {
    show: true,
    color: palette.title,
    position: 'beforeImg',
    align: 'left',
    spaceAfter: 'newsletterBottom20px',
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
    spaceBefore: 'newsletterBottom20px',
    spaceAfter: '',
    align: 'center',
  },

  product: {
    align: 'left',

    imageWidth: number == 1 || number == 5 || number == 9 || number == 13 ? 180 : 280,
    spaceClass: 'newsletterBottom15px',

    gapBetweenVertical: 'newsletterBottom10px',
    gapBetweenHorizontal: 10,
    containerInsetPct: 0,
    gapPct: 1,
    hideLastBottomGap: true,
    spaceBetweenVertical: 0,


    prices: {
      lowColor: palette.price,
      highColor: palette.price,
      reserveHighPrice: 17,
    },

    title: { styles: number % 2 === 0 ? 'padding-left: 0 !important;' : '', color: palette.text, className: 'newsletterProductTitleOverride' },
  },

  products: Object.values(products).map((id, i) => ({
    id,
    src: getImageUrl(number == 0 || number == 2 || number == 4 || number == 6 || number == 8 || number == 10 || number == 12 ? `20261106Category${number}0.jpg` : `20261106Category${number}${i + 1}.png`),
  })),
}, overrides);

const categories = [
  productCategory(0, 'Sofas', 'https://www.beliani.ch/bedroom-furniture/beds/', {
    LEIREN: 428030,
  }, {
    type: "default", src: '', paddingTop: 'newsletterBottom80px', product: {name: false, prices: false, gapBetweenVertical: false}, cta: {show: false}, spaceAfter: 0, paragraph: {spaceAfter: 0}, 
  }),
  productCategory(1, 'Sofas', 'https://www.beliani.ch/bedroom-furniture/beds/', {
    EVJA: 232046,
    VINTERBRO: 442853,
    TAMRE: 618747,
  }, {
    type: "3prods", src: '', title: {show: false}
  }),

  productCategory(2, 'Beds', 'https://www.beliani.ch/bedroom-furniture/storage/', {
    GONFARON: 610528,
  }, {
    type: "default", src: '', paddingTop: 0, product: {name: false, prices: false, gapBetweenVertical: false}, cta: {show: false}, spaceAfter: 0, paragraph: {spaceAfter: 0}, 
  }),

  productCategory(3, 'Beds', 'https://www.beliani.ch/bedroom-furniture/storage/', {
    ORBEY1: 615939,
    ZEN: 521610,
    MELLE: 187191,
    ORBEY2: 460226,
  }, {
    type: "grid", src: '', title: {show: false}
  }),

  productCategory(4, 'Armchairs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    AYLO: 590543,
  }, {
    type: "default", src: '', paddingTop: 0, product: {name: false, prices: false, gapBetweenVertical: false}, cta: {show: false}, spaceAfter: 0, paragraph: {spaceAfter: 0}, 
  }),

  productCategory(5, 'Armchairs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    DALBY: 458928,
    APATE: 649516,
    KINNO: 607821,
  },{
    type: "3prods",  src: '', title: {show: false}
  }),

  productCategory(6, 'Tables', 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/', {
    SKYE: 504459,
  }, {
    type: "default", src: '', paddingTop: 0, product: {name: false, prices: false, gapBetweenVertical: false}, cta: {show: false}, spaceAfter: 0, paragraph: {spaceAfter: 0}, 
  }),

  productCategory(7, 'Tables', 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/', {
    EMPORIA: 179197,
    POZZA: 675442,
    LANDER: 556654,
    MERCED: 310487,
  }, {
    type: "grid", src: '', title: {show: false}
  }),

  productCategory(8, 'Chairs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    LUCINDA: 576107
  }, {
    type: "default", src: '', paddingTop: 0, product: {name: false, prices: false, gapBetweenVertical: false}, cta: {show: false}, spaceAfter: 0, paragraph: {spaceAfter: 0}, 
  }),

  productCategory(9, 'Chairs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    KOBUK: 430797,
    LUANA: 407196,
    ARTESIA: 670151,
  },{
    type: "3prods", src: '', title: {show: false}
  }),

  productCategory(10, 'Lighting', 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/', {
    FABILOS: 414717,
  }, {
    type: "default", src: '', paddingTop: 0, product: {name: false, prices: false, gapBetweenVertical: false}, cta: {show: false}, spaceAfter: 0, paragraph: {spaceAfter: 0}, 
  }),

  productCategory(11, 'Lighting', 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/', {
    APAYAO: 581973,
    JAVARI: 399266,
    KABOMPO: 497934,
    KITARE: 681466,
  }, {
    type: "grid", src: '', title: {show: false}
  }),

  productCategory(12, 'Rugs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    TACETTIN: 366197,
  }, {
    type: "default", src: '', paddingTop: 0, product: {name: false, prices: false, gapBetweenVertical: false}, cta: {show: false}, spaceAfter: 0, paragraph: {spaceAfter: 0}, 
  }),


  productCategory(13, 'Rugs', 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/', {
    MUGLA: 351291,
    GERZE: 379010,
    FENER: 376699,
  },{
    type: "3prods", src: '', title: {show: false}
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

      background: '#FFF5F1',
      color: '#000000',

      TopImageTitle_data: TopImageTitle_data,
			// TopImage_data: TopImage_data,

      wrapper: types.WRAPPER,

      intro: {
				container: 'newsletterContainer35px',
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'center',
				type: 'paragraph',
        cta: {
          ...button,
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
      timer: timer,
    },

    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Friday,
      css: types.CSS.LP_FRIDAY,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#FFF5F1',
      color: '#000000',
      
      TopImageTitle_data: TopImageTitle_data,
			// TopImage_data: TopImage_data,
      
      intro: {
				container: 'newsletterContainer35px',
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
          ...button,
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
      timer: timer,
    }
  ]
})