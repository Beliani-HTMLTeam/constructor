// based on campaigns/KamilK/076_2026-11-12-black-week-room-favourites.js - room image + 1 row of 3 products per room, no prices
// this tab only has the Intro title (+ SL / page title / push)
const campaignTranslationsSheet = '2026::Voucher - 18.11.26 - Black Week room by room';

// deal title, deal condition and the footer conditions come from the black week start tab
const startTranslationsSheet = '2026::Voucher - 09.11.26 - Black Week start';

// the 09.11 tab keeps the code inside every card (4 rows: EXTRA / 20% OFF / when you spend / CODE), which
// black-week-extras can't split - the boxes and the codes are taken from the 11.11 tab (same offer)
const dealTranslationsSheet = '2026::Voucher - 11.11.26 - Black Week product categories';

const tableQueries = [
	{
		// THE MORE YOU SPEND, THE MORE YOU SAVE - 1 row
		tableRange: '26',
		name: 'deal_title',
		tableName: startTranslationsSheet,
	},
	{
		// 4 boxes x 5 rows (Extra / 20% / OFF / when you spend / min. €2500) - 20 rows, in order 20, 15, 10, 5
		tableRange: '20:39',
		name: 'deal_img',
		tableName: dealTranslationsSheet,
	},
	{
		// Code: XXX - 4 rows, same order as the boxes
		tableRange: '40:43',
		name: 'deal_codes',
		tableName: dealTranslationsSheet,
	},
	{
		// Limited-time offer. Valid until 29/11/2026 - 1 row
		tableRange: '43',
		name: 'deal_condition',
		tableName: startTranslationsSheet,
	},
	{
		// category names by index: [0] deal block (not shown, empty row), [1] Intro title (START WITH ONE PIECE)
		// rooms [2..7] aren't in the sheet - their names come from the static category titles
		tableRange: '22:23',
		name: 'categories',
	},
	{
		// Conditions Monday / Conditions Regular / Unsubscribe message
		tableRange: '44:46',
		name: "condition",
		tableName: startTranslationsSheet,
	}
];

const links = {
	TopImageTitle_type: 'image',
	TopImageTitle_src: translateImage({ value: '20261118_topImage.png' }),
	TopImageTitle_href: translateLink({ value: 'content/lp26-11-18' }),

	TopImage_src: translateImage({ value: '20261118_shopNow.png' }),
	TopImage_href: "Home Page",
};

const additionalCss = `
.blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:400;}.newsletterTitle {font-size:34px;font-weight:800; line-height: 1.2;}.frenchDaysCategoryCta {font-size: 20px !important;}.newsletterCta{font-size:30px;line-height:1.2;font-weight:700;}.roomName{font-size:30px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:600;}
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
.newsletterHeadingTitle {font-size: 30px; font-weight: 700; line-height: 1.2; text-transform: uppercase;}
@media screen and (max-width:768px){	.newsletterHeadingTitle {font-size: 18px; }.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}.newsletterTitle{font-size:20px;}.roomName{font-size:20px;}.newsletterCta{font-size:18px;}.blackWeekCondition{font-size:20px}.newsletterProductTitle{font-size:12px;} #newsletter .frenchDaysDiscount {
	font-size: 40px !important;
	font-size: clamp(32px, 12.5vw, 35px) !important;
}
#newsletter .frenchDaysCategoryName {
	font-size: 14px !important;
	font-size: clamp(14px, 3.6vw, 20px) !important;
}
#newsletter .frenchDaysCategoryCta {
	font-size: 12px !important;
	font-size: clamp(12px, 3.2vw, 16px) !important;
}}
`;

const additionalCssLp = `
#newsletter .newsletterHeadingTitle {font-size: 30px; font-weight: 700; line-height: 1.2; text-transform: uppercase;}

/* GENERAL */

#newsletter .newsletterTitle {
	font-size: 34px;
	font-weight:800; line-height: 1.2;
}

#newsletter .blackWeekCondition {
	font-size: 25px;
	line-height: 1.2;
	font-family: "Poppins", sans-serif;
	font-weight: 400;
}


/* DEAL BOXES */

#newsletter .newsletterDealTierLabel {
	font-size: 20px;
	line-height: 25px;
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	text-transform: uppercase;
}

#newsletter .newsletterDealTierValue {
	font-size: 75px;
	line-height: 80px;
	font-family: "Poppins", sans-serif;
	font-weight: 700;
}

#newsletter .newsletterDealTierOff {
	font-size: 20px;
	line-height: 20px;
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	display: block;
	padding-bottom: 8px;
}

#newsletter .newsletterDealTierNote {
	font-size: 16px;
	line-height: 18px;
	font-family: "Poppins", sans-serif;
}

#newsletter .newsletterDealCode {
	font-size: 16px;
	line-height: 21px;
	font-family: "Poppins", sans-serif;
	font-weight: 700;
}

#newsletter .newsletterDealCodePrefix {
	text-transform: uppercase;
}


/* ROOMS */

#newsletter .roomName {
	font-size: 30px;
	line-height: 1.2;
	font-family: "Poppins", sans-serif;
	font-weight: 600;
}

#newsletter .newsletterCta {
	font-weight: 700;
}

#newsletter .secondaryLinkMaroon {
	font-size: 30px;
	line-height: 1.2;
	font-family: "Poppins", sans-serif;
	font-weight: 700;
}

#newsletter .frenchDaysCategoryCta {
	font-size: 20px !important;
}


/* MOBILE */

@media screen and (max-width: 768px) {
	#newsletter .newsletterHeadingTitle {font-size: 18px; }

	/* GENERAL */

	#newsletter .newsletterTitle {
		font-size: 20px;
	}

	#newsletter .blackWeekCondition {
		font-size: 20px;
	}

	/* DEAL BOXES */

	#newsletter .newsletterDealTierValue {
		font-size: 48px;
		line-height: 50px;
	}

	#newsletter .newsletterDealCode {
		font-size: 15px;
		line-height: 1;
	}

	#newsletter .newsletterDealCodeLabel {
		flex-basis: 100% !important;
		margin-right: 0 !important;
		text-align: center !important;
	}

	#newsletter .newsletterDealCopyIcon {
		margin-left: 4px !important;
	}

	#newsletter .newsletterDealCopyIcon * {
		margin-left: 0 !important;
		margin-right: 0 !important;
		padding-left: 0 !important;
		padding-right: 0 !important;
	}

	#newsletter .newsletterDealCopyIcon .blackWeekCopyImg,
	#newsletter .newsletterDealCopyIcon img,
	#newsletter .newsletterDealCopyIcon svg {
		width: 15px !important;
		height: 15px !important;
		min-width: 15px !important;
		max-width: 15px !important;
		display: block !important;
	}

	#newsletter .newsletterDealGrid {
		width: 100% !important;
		max-width: 100% !important;
		table-layout: auto !important;
	}

	#newsletter .newsletterDealCell {
		display: block !important;
		width: 100% !important;
		box-sizing: border-box !important;
	}

	#newsletter .newsletterDealGapCol {
		display: block !important;
		width: 100% !important;
		height: 10px !important;
		line-height: 10px !important;
		font-size: 0 !important;
	}

	#newsletter .newsletterDealEmpty {
		display: none !important;
	}

	/* ROOMS */

	#newsletter .roomName {
		font-size: 20px;
	}

	#newsletter .secondaryLinkMaroon {
		font-size: 18px;
	}

	#newsletter .newsletterProductTitle {
		font-size: 12px;
	}

	#newsletter .frenchDaysCategoryName {
		font-size: 14px !important;
		font-size: clamp(14px, 3.6vw, 20px) !important;
	}

	#newsletter .frenchDaysCategoryCta {
		font-size: 12px !important;
		font-size: clamp(12px, 3.2vw, 16px) !important;
	}

	#newsletter .frenchDaysDiscount {
		font-size: 40px !important;
		font-size: clamp(32px, 12.5vw, 35px) !important;
	}
}
`;

const palette = {
	accent: '#FF2F00',
	dark: '#750000',
	text: '#ffffff',
	page: '#000000',
	toastBg: '#ffe0d4',
};

// title -> room image (full width) -> 1 row of 3 products (no prices) -> Shop now
const roomCategory = (row, name, href, products) => ({
	name,
	href,
	type: '3prods',
	background: palette.page,
	color: palette.text,
	container: 'newsletterContainer30px',

	// room image, 20261118_Cat<row>0.jpg
	src: getImageUrl(`20261118_Cat${row}0.jpg`, true),

	paddingTop: 0,
	spaceAfter: 'newsletterBottom80px',

	title: {
		show: true,
		align: 'center',
		// semibold - the intro title uses newsletterHeadingTitle (bold)
		className: 'roomName',
		container: 'newsletterContainer30px',
		spaceAfter: 'newsletterBottom20px',
	},
	paragraph: { spaceAfter: 0 },
	spaceBeforeProducts: 'newsletterBottom20px',

	product: {
		align: 'center',
		prices: false,
		gapBetweenVertical: 'newsletterBottom10px',
		// 1 row only - no space under the products, the gap to Shop now is cta.spaceBefore
		title: { styles: 'text-transform: uppercase;' },
	},

	cta: {
		variant: 'underline',
		phrase: 'Shop now',
		textTransform: 'none',
		color: palette.text,
		align: 'center',
		spaceBefore: 'newsletterBottom60px',
		spaceAfter: 0,
	},

	// ids from the SA list of the issue (SA Details link), images 20261118_Pic<row><1-3>.png
	products: Object.values(products).map((id, i) => ({
		id,
		src: getImageUrl(`20261118_Pic${row}${i + 1}.png`, true),
	})),
});

const categories = [
	{
		// section background - also the text colour of the GET CODES button
		background: '#000000',
		color: '#000000',
		type: 'black-week-extras',
		textColor: '#FFFFFF',
		href: translateLink({ value: 'content/lp26-11-18' }),
		container: 'newsletterContainer30px',

		// newsletter only - one image per box, same order as the tiers in deal_img (20, 15, 10, 5)
		// on the landing page the boxes are rendered as html
		dealImgs: [
			translateImage({ value: '_black_week_extra_20.png' }),
			translateImage({ value: '_black_week_extra_15.png' }),
			translateImage({ value: '_black_week_extra_10.png' }),
			translateImage({ value: '_black_week_extra_5.png' }),
		],
		dealTierLines: 5,
		copyToast: {
			background: palette.toastBg,
			color: '#000000',
		},
		// landing page boxes
		dealBoxColor: '#FFF3E6',
		dealBoxTextColor: '#000000',
		dealValueColor: '#FF2F00',

		// grid - inner width of newsletterContainer30px (2 x 290px images + gap), gap between the boxes
		dealWidth: 590,
		dealGap: 10,

		paddingTop: 0,
		paragraph: { spaceAfter: 'newsletterBottom35px' },
		spaceBeforeDeal: 'newsletterBottom35px',
		spaceAfterDeal: 'newsletterBottom20px',
		// landing page only - space between the boxes and the conditions
		spaceAfterDealLp: 'newsletterBottom35px',
		spaceAfterCodeCta: 'newsletterBottom35px',
		// bottom padding of the deal block - space before the intro title
		spaceAfterConditions: 'newsletterBottom35px',
		spaceAfter: 0,
		dealCodeBreak: ['es', "pt", "it", "uk", "befr", "benl", "fi", "nl", "no", "si"],
		dealValueSpaceAfter: { sk: 8 },
	},
	{
		// START WITH ONE PIECE (Intro title) - title only
		name: 'Start with one piece',
		background: palette.page,
		color: palette.text,
		container: 'newsletterContainer30px',
		paddingTop: 0,
		title: {
			show: true,
			align: 'center',
			className: 'newsletterHeadingTitle',
			styles: 'text-transform: uppercase;',
			container: 'newsletterContainer30px',
		},
		paragraph: { spaceAfter: 0 },
		spaceAfter: 'newsletterBottom35px',
	},
	// product ids from the SA list of the issue (SA Details link)
	roomCategory(0, 'Living Room', 'https://www.beliani.ch/living-room-furniture/', {
		CONZA: 835876,
		SKARO: 842933,
		DINTEL: 78313,
	}),
	roomCategory(1, 'Bedroom', 'https://www.beliani.ch/bedroom-furniture/', {
		CHADENET: 841499,
		OBERON: 837472,
		LANESTER: 633059,
	}),
	roomCategory(2, 'Dining Room', 'https://www.beliani.ch/dining-room-furniture/', {
		SHERIDAN: 728862,
		AVA: 609706,
		SPIKENARD: 585126,
	}),
	roomCategory(3, 'Bathroom', 'https://www.beliani.ch/bathroom-furniture/', {
		TREMONT: 515490,
		ADUANA: 840825,
		NANGAL: 676631,
	}),
	roomCategory(4, 'Home Office', 'https://www.beliani.ch/office-furniture/', {
		TOTOWA: 835813,
		NOVEN: 818114,
		BOCONO: 583644,
	}),
	roomCategory(5, 'Hallway', 'https://www.beliani.ch/hallway/', {
		RIDDLE: 592553,
		SALINS: 498149,
		KEITH: 839071,
	}),
];

export default new entities.Campaign({
	startId: 49825,
	lpId: 33520,
	issueCardId: 545789,
	version: 'new',
	name: 'Black Week start with one piece',
	date: '18.11.2026',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Friday,
			css: types.CSS.NS_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: '#000000',
			color: '#ffffff',

			wrapper: types.WRAPPER,
			optimizeCss: true,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCss,
			footer_theme: 'black',
		},

		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Friday,
			css: types.CSS.LP_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: '#000000',
			color: '#ffffff',

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCssLp,
			footer_theme: 'black',
		}
	]
})
