// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 02.10.26 - French Days Reminder';

const tableQueries = [
	{
		tableRange: '15:16',
		name: 'timer',
	},
	{
		tableRange: '40',
		name: 'deal_header',
	},
	{
		tableRange: '41',
		name: 'deal_title',
	},
	{
		tableRange: '42',
		name: 'deal_paragraph',
	},
	{
		tableRange: '23:31',
		name: 'deal_img',
		// format:
		// 2 items
		// −25%
		// on the cheapest
		// 3 items
		// −50%
		// on the cheapest
		// 4 items
		// FREE
		// on the cheapest
	},
	{
		tableRange: '37:39',
		name: 'deal_codes',
		// format: Code: 25DE		Code: 25AT		Code: 25CH
	},
	{
		tableRange: '32:33',
		name: 'deal_condition',
	},
	{
		tableRange: '57:59',
		name: 'condition',
	},
];

const links = {
	// TopImageTitle_href: translateLink({ value: 'content/lp26-09-16-ta' }),
	// TopImageTitle_src: translateImage({ value: '20260916_01.png' }),

	TopImage_src: translateImage({ value: '20261002_Pic.png' }),
	TopImage_href: translateLink({ value: 'content/lp26-10-02' }),

	Banner_1: translateLink({ value: 'content/lp26-09-25' }),
	Banner_1_Image: translateImage({ value: '20260925b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-24' }),
	Banner_2_Image: translateImage({ value: '20260924b.png' }),

	Intro_cta_href: translateLink({ value: 'content/lp26-10-02' }),

	Timer_href: translateLink({ value: 'content/lp26-10-02' }),
};

// const TopImageTitle_data = {
//   color: '#000000',
//   backgroundColor: '#F6E7E6',
//   type: 'twoSameLines',
// };

const additionalCss = `
  .newsletterCtaBtn {
    display: inline-block;
    width: auto;
    text-align: center;
    padding: 0;
    box-sizing: border-box;
  }

  .newsletterCtaLink {
    display: inline-block;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-word;
  }

  .newsletterBottomAlways20px {
    padding-bottom: 20px;
  }

  .newsletterSubtitleTimer {
    font-size: 45px;
    line-height: 1.2;
    font-weight: 500;
  }

  .newsletterDealTierLabel {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 400;
  }

  .newsletterDealTierValue {
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
  }

  .newsletterDealTierNote {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 400;
  }

  .newsletterDealCode {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
    /* compensates for the copy icon so the code stays optically centered */
    padding-left: 20px;
  }

  .newsletterDealMobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .newsletterCtaLink {
      width: auto;
      max-width: 100%;
    }

    .newsletterSubtitleTimer {
      font-size: 25px !important;
    }

    .newsletterCategoryTile {
      width: 32% !important;
    }

    .newsletterCategoryGap {
      width: 2% !important;
    }

    .newsletterDealDesktop {
      display: none;
    }

    .newsletterDealMobile {
      display: table-row !important;
    }

    .newsletterDealTierLabel,
    .newsletterDealTierNote {
      font-size: 14px;
    }

    .newsletterDealTierValue {
      font-size: 40px;
    }

    .newsletterDealCode {
      font-size: 20px;
    }
  }
`;

const additionalCssLp = `
  .newsletterCtaBtn {
    width: auto !important;
    text-align: center;
    padding: 0 !important;
    box-sizing: border-box;
  }

  .newsletterCtaLink {
    display: inline-block;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-word;
  }

  .newsletterBottomAlways20px {
    padding-bottom: 20px !important;
  }

  .newsletterSubtitleTimer {
    font-size: 45px !important;
    line-height: 1.2 !important;
    font-weight: 500 !important;
  }

  .newsletterDealTierLabel {
    font-size: 15px !important;
    line-height: 1.2 !important;
    font-weight: 400 !important;
  }

  .newsletterDealTierValue {
    font-size: 48px !important;
    line-height: 1.2 !important;
    font-weight: 700 !important;
  }

  .newsletterDealTierNote {
    font-size: 15px !important;
    line-height: 1.2 !important;
    font-weight: 400 !important;
  }

  .newsletterDealCode {
    font-size: 20px !important;
    line-height: 1.2 !important;
    font-weight: 600 !important;
    /* compensates for the copy icon so the code stays optically centered */
    padding-left: 20px !important;
  }

  .newsletterDealMobile {
    display: none !important;
  }

  @media screen and (max-width: 768px) {
    .newsletterCtaLink {
      width: auto !important;
      max-width: 100% !important;
    }

    /* the landing css sets this with an id selector, so it has to be matched */
    #newsletter .newsletterSubtitleTimer {
      font-size: 25px !important;
    }

    .newsletterCategoryTile {
      width: 32% !important;
    }

    .newsletterCategoryGap {
      width: 2% !important;
    }

    .newsletterDealDesktop {
      display: none !important;
    }

    .newsletterDealMobile {
      display: table-row !important;
    }

    .newsletterDealTierLabel,
    .newsletterDealTierNote {
      font-size: 14px !important;
    }

    .newsletterDealTierValue {
      font-size: 40px !important;
    }

    .newsletterDealCode {
      font-size: 20px !important;
    }
  }
`;

const timer = {
	deadline: '2026-10-04',
};

const timerInside = {
	type: 'timer',
	position: 'top',
	color: '#ffffff',
	backgroundColor: '#FF2F00',
	unitBackground: '#FF9780',
	showCta: false,
	spaceTop: 'newsletterBottom35px',
	spaceBottom: 'newsletterBottom20px',
	container: 'newsletterContainer60px',
};

const categories = [
	{
		background: '#FF2F00',
		color: '#000000',
		type: 'deal_new',
		textColor: '#FFFFFF',
		href: translateLink({ value: 'content/lp26-10-02' }),
		// newsletter only - on the landing page the deal is rendered as text
		dealImg: translateImage({ value: '_20261002_deal.png' }),
		// french shops put the discount after the description
		rowOrder: {
			default: ['row1', 'row2', 'row3'],
			'fr,chfr,befr': ['row1', 'row3', 'row2'],
		},
		paddingTop: 0,
		// top padding of the deal block - space before the deal header
		paragraph: { spaceAfter: 'newsletterBottom40px' },
		spaceAfterHeader: 'newsletterBottom20px',
		spaceAfterTitle: 'newsletterBottom20px',
		spaceBeforeDeal: 'newsletterBottom35px',
		spaceAfterDeal: 'newsletterBottom35px',
		spaceAfterCodeCta: 'newsletterBottom20px',
		// bottom padding of the deal block
		spaceAfterConditions: 'newsletterBottom40px',
		dealTitle: { styles: 'font-size: 34px; font-weight: 700;' },
		spaceAfter: 0,
	},
	{
		background: '#F6E7E6',
		color: '#000000',
		type: 'rowswith3categories',
		paddingTop: 0,
		// the tile images already contain the category name and the cta
		showTileText: false,
		spaceBetweenRows: 'newsletterBottom35px',
		// 35px between the deal category and this one
		paragraph: { spaceAfter: 'newsletterBottom35px' },
		spaceAfter: 'newsletterBottom60px',
		heading: {
			phrase: 'Shop by category',
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},
		categories:
			[
				[
					{
						name: "Sofas",
						href: 'https://www.beliani.ch/sofas/',
						src: translateImage({ value: '_20261002_Sofas.png' }),
					},
					{
						name: "Beds",
						href: 'https://www.beliani.ch/beds/',
						src: translateImage({ value: '_20261002_Beds.png' }),
					},
					{
						name: "Armchairs",
						href: 'https://www.beliani.ch/armchairs/',
						src: translateImage({ value: '_20261002_Armchairs.png' }),
					},

				],
				[
					{
						name: "Tables",
						href: 'https://www.beliani.ch/tables/',
						src: translateImage({ value: '_20261002_Tables.png' }),
					},
					{
						name: "Chairs",
						href: 'https://www.beliani.ch/chairs/',
						src: translateImage({ value: '_20261002_Chairs.png' }),
					},
					{
						name: "Storage",
						href: 'https://www.beliani.ch/storage/',
						src: translateImage({ value: '_20261002_Storage.png' }),
					},
				],
				[
					{
						name: "Desks",
						href: 'https://www.beliani.ch/desks/',
						src: translateImage({ value: '_20261002_Desks.png' }),
					},
					{
						name: "Kids",
						href: 'https://www.beliani.ch/children-room/',
						src: translateImage({ value: '_20261002_Kids.png' }),
					},
					{
						name: "Lighting",
						href: 'https://www.beliani.ch/lighting/',
						src: translateImage({ value: '_20261002_Lighting.png' }),
					},
				],
				[
					{
						name: "Bathtubs",
						href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
						src: translateImage({ value: '_20261002_Bathtubs.png' }),
					},
					{
						name: "Rugs",
						href: 'https://www.beliani.ch/rugs/',
						src: translateImage({ value: '_20261002_Rugs.png' }),
					},
					{
						name: "Accessories",
						href: 'https://www.beliani.ch/accessories-decor/',
						src: translateImage({ value: '_20261002_Accessories.png' }),
					},
				],
			]
	},
];

export default new entities.Campaign({
	startId: 48309,
	name: 'Autumn Deal Reminder',
	date: '02.10.2026',
	issueCardId: 535636,
	lpId: 32620,
	version: 'new',
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/5UX5QIAgZenNidoZO8l6qp/',
	templates: [
		{
			background: '#F6E7E6',
			color: '#000000',
			template: templates.Thursday, // User should change this

			Inside: timerInside,
			timer: timer,
			css: types.CSS.NS,
			additionalCss: additionalCss,
			name: 'Newsletter',
			type: types.NEWSLETTER,
			translationsSpreadsheet: campaignTranslationsSheet,
			wrapper: types.WRAPPER,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
		},
		{
			background: '#F6E7E6',
			color: '#000000',
			template: templates.Thursday, // User should change this

			Inside: timerInside,
			timer: timer,
			css: types.CSS.LP,
			additionalCss: additionalCssLp,
			name: 'Landing',
			type: types.LANDINGPAGE,
			translationsSpreadsheet: campaignTranslationsSheet,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
		},
	],
});
