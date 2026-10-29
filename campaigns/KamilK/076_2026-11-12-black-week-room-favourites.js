// based on campaigns/Dmytro/096_2026-11-13-black-week-room.js - room tiles replaced with 3prods (2 rows x 3) per room
const campaignTranslationsSheet = '2026::Voucher - 12.11.26 - Black Week room favourites';

// this tab has no offer / code / conditions rows - the black week vouchers are shared, taken from the 13.11 tab
const dealTranslationsSheet = '2026::Voucher - 13.11.26 - Black Week room by room';

const tableQueries = [
	{
		// THE MORE YOU SPEND, THE MORE YOU SAVE - 1 row
		tableRange: '48',
		name: 'deal_title',
		tableName: dealTranslationsSheet,
	},
	{
		// 4 boxes x 4 rows (EXTRA / 20% / OFF / when you spend min. €2500) - 16 rows, in order 20, 15, 10, 5
		tableRange: '23:42',
		name: 'deal_img',
		tableName: dealTranslationsSheet,
	},
	{
		// CODE: XXX - 4 rows, same order as the boxes
		tableRange: '43:46',
		name: 'deal_codes',
		tableName: dealTranslationsSheet,
	},
	{
		// Limited-time offer. Valid until 29/11/2026 - 1 row
		tableRange: '47',
		name: 'deal_condition',
		tableName: dealTranslationsSheet,
	},
	{
		// category names by index: [0] deal block (not shown, empty row), [1] Intro title, [2..7] Title 1-6 (Living Room ... Kids Room Favourites)
		tableRange: '21:28',
		name: 'categories',
	},
	{
		tableRange: '50:52',
		name: "condition",
		tableName: dealTranslationsSheet,
	}
];

const links = {
	TopImageTitle_type: 'image',
	TopImageTitle_src: translateImage({ value: '20261112_topImage.png' }),
	TopImageTitle_href: translateLink({ value: 'content/lp26-11-12' }),

	TopImage_src: translateImage({ value: '20261112_shopNow.png' }),
	TopImage_href: "Home Page",
};

const additionalCss = `
.blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:400;}.newsletterTitle {font-size:34px;font-weight:700;}.frenchDaysCategoryCta {font-size: 20px !important;}.newsletterCta{font-size:30px;line-height:1.2;font-weight:700;}.roomTitle{font-size:30px;line-height:1.2;font-weight:700;}
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}.newsletterTitle{font-size:20px;}.newsletterCta{font-size:18px;}.roomTitle{font-size:18px;}.blackWeekCondition{font-size:18px}.newsletterProductTitle{font-size:12px;}.newsletterProductLowPrice{font-size:12px;}.newsletterProductHighPrice{font-size:10px;} #newsletter .frenchDaysDiscount {
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
#newsletter .blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:400;}#newsletter .newsletterTitle {font-size:34px;font-weight:700;}#newsletter .frenchDaysCategoryCta {font-size: 20px !important;}#newsletter .newsletterCta{font-weight:700;}#newsletter .secondaryLinkMaroon{font-size:30px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:700;}#newsletter .roomTitle{font-size:30px;line-height:1.2;font-weight:700;}
#newsletter .newsletterDealTierLabel{font-size:20px;line-height:25px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierValue{font-size:75px;line-height:80px;font-family:"Poppins",sans-serif;font-weight:700}#newsletter .newsletterDealTierOff{font-size:20px;line-height:16px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierNote{font-size:16px;line-height:18px;font-family:"Poppins",sans-serif}#newsletter .newsletterDealCode{font-size:16px;line-height:21px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}
@media screen and (max-width:768px){
	#newsletter .newsletterDealCopyIcon .blackWeekCopyImg,
	#newsletter .newsletterDealCopyIcon img,
	#newsletter .newsletterDealCopyIcon svg{width:15px!important;height:15px!important;min-width:15px!important;max-width:15px!important;display:block!important}
	#newsletter .newsletterDealCopyIcon{margin-left:4px!important}
	#newsletter .newsletterDealCopyIcon *{margin-left:0!important;margin-right:0!important;padding-left:0!important;padding-right:0!important}
	#newsletter .newsletterDealCode{font-size:15px;line-height:1}
	#newsletter .newsletterDealCodeLabel{flex-basis:100%!important;margin-right:0!important;text-align:center!important}
#newsletter .newsletterTitle{font-size:20px;}#newsletter .secondaryLinkMaroon{font-size:18px;}#newsletter .roomTitle{font-size:18px;}#newsletter .newsletterProductTitle{font-size:12px;}#newsletter .newsletterProductLowPrice{font-size:12px;}#newsletter .newsletterProductHighPrice{font-size:10px;}#newsletter .newsletterDealTierValue{font-size:48px;line-height:50px}#newsletter .newsletterDealGrid{width:100%!important;max-width:100%!important;table-layout:auto!important}#newsletter .newsletterDealCell{display:block!important;width:100%!important;box-sizing:border-box!important}#newsletter .newsletterDealGapCol{display:block!important;width:100%!important;height:10px!important;line-height:10px!important;font-size:0!important}#newsletter .newsletterDealEmpty{display:none!important}#newsletter .blackWeekCondition{font-size:18px} #newsletter .frenchDaysDiscount {
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

const palette = {
	accent: '#FF2F00',
	dark: '#750000',
	text: '#ffffff',
	page: '#000000',
	highPrice: '#8c8c8c',
	toastBg: '#ffe0d4',
};

const roomCategory = (row, name, href, products) => ({
	name,
	href,
	type: '3prods',
	background: palette.page,
	color: palette.text,
	container: 'newsletterContainer30px',

	paddingTop: 0,
	spaceAfter: 'newsletterBottom80px',

	title: {
		show: true,
		align: 'center',
		className: 'newsletterTitle roomTitle',
		styles: 'text-transform: uppercase;',
		container: 'newsletterContainer30px',
		spaceAfter: 'newsletterBottom20px',
	},
	paragraph: { spaceAfter: 0 },

	product: {
		align: 'center',
		gapBetweenVertical: 'newsletterBottom10px',
		spaceBetweenVertical: 'newsletterBottom25px',
		title: { styles: 'text-transform: uppercase;' },
		prices: { highColor: palette.highPrice },
	},

	cta: {
		variant: 'underline',
		phrase: 'Shop now',
		textTransform: 'none',
		color: palette.text,
		align: 'center',
		spaceBefore: 0,
		spaceAfter: 0,
	},

	// ids from the SA list of the issue (SA Details link), images 20261112_Pic<row><1-6>.png
	products: Object.values(products).map((id, i) => ({
		id,
		src: getImageUrl(`20261112_Pic${row}${i + 1}.png`, true),
	})),
});

const categories = [
	{
		// section background - also the text colour of the GET CODES button
		background: '#000000',
		color: '#000000',
		type: 'black-week-extras',
		textColor: '#FFFFFF',
		href: translateLink({ value: 'content/lp26-11-12' }),
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
	},
	{
		// THE BEST OF EVERY ROOM, ALL REDUCED (Intro title) - title only
		name: 'Room by room, all reduced',
		background: palette.page,
		color: palette.text,
		container: 'newsletterContainer30px',
		paddingTop: 0,
		title: {
			show: true,
			align: 'center',
			className: 'newsletterTitle roomTitle',
			styles: 'text-transform: uppercase;',
			container: 'newsletterContainer30px',
		},
		paragraph: { spaceAfter: 0 },
		spaceAfter: 'newsletterBottom35px',
	},
	roomCategory(0, 'Living Room', 'https://www.beliani.ch/living-room-furniture/', {
		LOEN: 505993,
		CORELLA: 649554,
		AGGER: 816702,
		ONDLE: 826047,
		// swapped from HARTZ
		RAMZAN: 455185,
		SANYA: 723151,
	}),
	roomCategory(1, 'Bedroom', 'https://www.beliani.ch/bedroom-furniture/', {
		SOULISSE: 834547,
		WALGETT: 806360,
		TOUTLI: 502508,
		LITTLETON: 813044,
		BELLEME: 813088,
		LUNAS: 823230,
	}),
	roomCategory(2, 'Dining Room', 'https://www.beliani.ch/dining-room-furniture/', {
		MYSTIC: 827557,
		ASBURY: 824384,
		TINGLEDALE: 812186,
		MOORE: 719897,
		LAKEVILLE: 831292,
		NUTMEG: 705851,
	}),
	roomCategory(3, 'Bathroom', 'https://www.beliani.ch/bathroom-furniture/', {
		HAWES: 687956,
		TELA: 567868,
		HOPI: 509203,
		MANCEY: 818009,
		ATAI: 604733,
		BERBICE: 656190,
	}),
	roomCategory(4, 'Home Office', 'https://www.beliani.ch/office-furniture/', {
		BOLSENA: 224300,
		PLIORA: 811828,
		VAIGAI: 500903,
		TITAN: 816850,
		SENDRA: 818835,
		NEWPORT: 829157,
	}),
	roomCategory(5, 'Kids Room', 'https://www.beliani.ch/children-room/', {
		ANET: 412611,
		PRIDDY: 823147,
		PENOLA: 817331,
		TILBA: 816827,
		PARSON: 821293,
		JUNO: 812791,
	}),
];

export default new entities.Campaign({
	startId: 49761,
	lpId: 33497,
	issueCardId: 545788,
	version: 'new',
	name: 'Black Week room favourites',
	date: '12.11.2026',
	figmaUrl: 'https://www.figma.com/design/cZVzFLB3Y5n6qYw8hXNVzN/2026.11.12---Black-Week-room-favourites?node-id=13249-712',
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
