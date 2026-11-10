// based on campaigns/KamilK/077_2026-11-18-black-week-start-with-one-piece.js - room image + 1 row of 3 products per room,
// with prices (as in campaigns/KamilK/076_2026-11-12-black-week-room-favourites.js)
// this tab only has the SL / page title / push - no intro title
const campaignTranslationsSheet = '2026::Voucher - 26.11.26 - Black Week room by room';

// intro title (ROOM BY ROOM) comes from the 13.11 room by room tab (Dmytro 096 / 097)
const introTranslationsSheet = '2026::Voucher - 13.11.26 - Black Week room by room';

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
		// category names by index: [0] deal block (not shown, empty row), [1] Intro title (Room by room, all reduced)
		// rooms [2..7] aren't in the sheet - their names come from the static category titles
		tableRange: '22:23',
		name: 'categories',
		tableName: introTranslationsSheet,
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
	TopImageTitle_src: translateImage({ value: '20261126_topImage.png' }),
	TopImageTitle_href: translateLink({ value: 'content/lp26-11-26' }),

	TopImage_src: translateImage({ value: '20261126_shopNow.png' }),
	TopImage_href: "Home Page",
};

const additionalCss = `
.blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:400;}.newsletterTitle {font-size:34px;font-weight:800; line-height: 1.2;}.frenchDaysCategoryCta {font-size: 20px !important;}.newsletterCta{font-size:30px;line-height:1.2;font-weight:600;}.roomName{font-size:30px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:600;}
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){	.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}.newsletterTitle{font-size:20px;}.roomName{font-size:20px;}.newsletterCta{font-size:18px;}.blackWeekCondition{font-size:20px}.newsletterProductTitle{font-size:12px;}.newsletterProductLowPrice{font-size:12px;}.newsletterProductHighPrice{font-size:10px;} #newsletter .frenchDaysDiscount {
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

/* Shop now under every room - 30px semibold, as in the newsletter */
#newsletter .newsletterCta {
	font-size: 30px;
	line-height: 1.2;
	font-weight: 600;
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

	#newsletter .newsletterCta {
		font-size: 18px;
	}

	#newsletter .secondaryLinkMaroon {
		font-size: 18px;
	}

	#newsletter .newsletterProductTitle {
		font-size: 12px;
	}

	#newsletter .newsletterProductLowPrice {
		font-size: 12px;
	}

	#newsletter .newsletterProductHighPrice {
		font-size: 10px;
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
	highPrice: '#8c8c8c',
	toastBg: '#ffe0d4',
};

// title -> room image (full width) -> 1 row of 3 products (with prices) -> Shop now
const roomCategory = (row, name, href, products) => ({
	name,
	href,
	type: '3prods',
	background: palette.page,
	color: palette.text,
	container: 'newsletterContainer30px',

	// room image, 20261126_Cat<row>0.jpg
	src: getImageUrl(`20261126_Cat${row}0.jpg`, true),

	paddingTop: 0,
	spaceAfter: 'newsletterBottom80px',

	title: {
		show: true,
		align: 'center',
		// semibold - the intro title uses newsletterTitle (bold)
		className: 'roomName',
		container: 'newsletterContainer30px',
		spaceAfter: 'newsletterBottom20px',
	},
	paragraph: { spaceAfter: 0 },
	spaceBeforeProducts: 'newsletterBottom20px',

	product: {
		align: 'center',
		gapBetweenVertical: 'newsletterBottom10px',
		// 1 row only - no space under the products, the gap to Shop now is cta.spaceBefore
		title: { styles: 'text-transform: uppercase;' },
		prices: { highColor: palette.highPrice },
	},

	cta: {
		variant: 'underline',
		phrase: 'Shop now',
		textTransform: 'none',
		color: palette.text,
		align: 'center',
		spaceBefore: 'newsletterBottom20px',
		spaceAfter: 0,
	},

	// ids from the SA list of the issue (SA Details link), images 20261126_Pic<row><1-3>.png
	products: Object.values(products).map((id, i) => ({
		id,
		src: getImageUrl(`20261126_Pic${row}${i + 1}.png`, true),
	})),
});

const categories = [
	{
		// section background - also the text colour of the GET CODES button
		background: '#000000',
		color: '#000000',
		type: 'black-week-extras',
		textColor: '#FFFFFF',
		href: translateLink({ value: 'content/lp26-11-26' }),

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

		// grid - same as Dmytro 095-097 (default newsletterContainer), gap between the boxes
		dealWidth: 560,
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
		// ROOM BY ROOM (Intro title) - title only
		name: 'Room by room',
		background: palette.page,
		color: palette.text,
		container: 'newsletterContainer30px',
		paddingTop: 0,
		title: {
			show: true,
			align: 'center',
			// same style as SHOP BY CATEGORY (Dmytro 095) - same size as the deal title, also on mobile
			className: 'newsletterTitle',
			styles: 'text-transform: uppercase; font-weight: 700;',
			container: 'newsletterContainer30px',
		},
		paragraph: { spaceAfter: 0 },
		spaceAfter: 'newsletterBottom35px',
	},
	// product ids from the SA list of the issue (SA Details link)
	roomCategory(0, 'Living Room', 'https://www.beliani.ch/living-room-furniture/', {
		SIMLA: 337023,
		AMLI: 731276,
		BONDI: 682708,
	}),
	roomCategory(1, 'Bedroom', 'https://www.beliani.ch/bedroom-furniture/', {
		MASSOGNES: 683653,
		MITHA: 455095,
		COVENTRY: 570189,
	}),
	roomCategory(2, 'Dining Room', 'https://www.beliani.ch/dining-room-furniture/', {
		LUMAN: 806107,
		EAGAN: 620066,
		// LOURENS in the design - the SA list has pendant lamp OKER
		OKER: 689712,
	}),
	roomCategory(3, 'Bathroom', 'https://www.beliani.ch/bathroom-furniture/', {
		TARUMIR: 834904,
		ARVERT: 645127,
		SALINAS: 637823,
	}),
	roomCategory(4, 'Home Office', 'https://www.beliani.ch/office-furniture/', {
		ELURA: 818980,
		GEDDES: 807766,
		MUNDAKA: 78785,
	}),
	roomCategory(5, 'Hallway', 'https://www.beliani.ch/hallway/', {
		OSBY: 518552,
		OUVEA: 154135,
		RONGE: 697960,
	}),
];

export default new entities.Campaign({
	startId: 50113,
	lpId: 33610,
	issueCardId: 545791,
	version: 'new',
	name: 'Black Week room by room',
	date: '26.11.2026',
	figmaUrl: 'https://www.figma.com/design/YzRdHOnc9chtnhlM8cJRru/2026.11.26---Newsletter-Black-Week-room-favourites--Copy-?node-id=16002-1753',
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
