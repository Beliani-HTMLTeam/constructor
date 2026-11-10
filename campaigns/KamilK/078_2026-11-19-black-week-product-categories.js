// based on campaigns/KamilK/077_2026-11-18-black-week-start-with-one-piece.js (deal block) +
// campaigns/Dmytro/095_2026-11-11-black-week-products.js (Shop by category grid)
// difference to 11.11: category name and CTA are stacked (name in line 1, "Shop ›" in line 2)
// this tab only has the SL / page title / push + the tile CTA ("Shop ›", row 23)
const campaignTranslationsSheet = '2026::Voucher - 19.11.26 - Black Week product categories';

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
		// Shop › - CTA under every category tile, 1 row
		tableRange: '23',
		name: 'tile_cta',
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
	TopImageTitle_src: translateImage({ value: '20261119_topImage.png' }),
	TopImageTitle_href: translateLink({ value: 'content/lp26-11-19' }),

	TopImage_src: translateImage({ value: '20261119_shopNow.png' }),
	TopImage_href: "Home Page",
};

const additionalCss = `
.blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:400;}.newsletterTitle {font-size:34px;font-weight:800; line-height: 1.2;}.frenchDaysCategoryCta {font-size: 20px !important;line-height:1.25;font-weight:600;}
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){
.categoryTileInRowName,.categoryTileInRowCta{display:block!important;width:100%!important;box-sizing:border-box!important;padding:0!important;text-align:left!important}
.categoryTileInRowCta{padding-top:6px!important}
.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}.newsletterTitle{font-size:20px;}.blackWeekCondition{font-size:20px} #newsletter .frenchDaysDiscount {
	font-size: 40px !important;
	font-size: clamp(32px, 12.5vw, 35px) !important;
}
#newsletter .frenchDaysCategoryName {
	font-size: 14px !important;
	font-size: clamp(14px, 3.6vw, 20px) !important;
}
#newsletter .frenchDaysCategoryCta {
	font-size: 14px !important;
	font-size: clamp(14px, 3.6vw, 20px) !important;
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


/* CATEGORY TILES */

/* CTA (Shop ›) - same style as the category name: 20px semibold */
#newsletter .frenchDaysCategoryCta {
	font-size: 20px !important;
	line-height: 1.25;
	font-weight: 600;
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

	/* CATEGORY TILES */

	#newsletter .categoryTileInRowName,
	#newsletter .categoryTileInRowCta {
		display: block !important;
		width: 100% !important;
		box-sizing: border-box !important;
		padding: 0 !important;
		text-align: left !important;
	}

	#newsletter .categoryTileInRowCta {
		padding-top: 6px !important;
	}

	#newsletter .frenchDaysCategoryName {
		font-size: 14px !important;
		font-size: clamp(14px, 3.6vw, 20px) !important;
	}

	/* same size as .frenchDaysCategoryName */
	#newsletter .frenchDaysCategoryCta {
		font-size: 14px !important;
		font-size: clamp(14px, 3.6vw, 20px) !important;
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

// category tile, image 20261119_Category<n>.png (n = 1..12, order of the grid)
// png, not jpg - small images with a lot of detail
const tile = (n, name, href, extra = {}) => ({
	name,
	href,
	src: getImageUrl(`20261119_Category${n}.png`, true),
	...extra,
});

const categories = [
	{
		// section background - also the text colour of the GET CODES button
		background: '#000000',
		color: '#000000',
		type: 'black-week-extras',
		textColor: '#FFFFFF',
		href: translateLink({ value: 'content/lp26-11-19' }),

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
		// bottom padding of the deal block - 0, the category block below already adds 35px before SHOP BY CATEGORY
		spaceAfterConditions: 0,
		spaceAfter: 0,
		dealCodeBreak: ['es', "pt", "it", "uk", "befr", "benl", "fi", "nl", "no", "si"],
		dealValueSpaceAfter: { sk: 8 },
	},
	{
		// SHOP BY CATEGORY - 6 rows x 2 tiles, name + "Shop ›" stacked under every image
		background: palette.page,
		color: palette.text,
		type: 'rowswith2categories',
		paddingTop: 0,
		showTileText: true,
		tileNameColor: palette.text,
		tileCtaColor: palette.text,
		// CTA text from the 19.11 tab (Shop ›)
		tileCta: { query: 'tile_cta' },
		// Shop › without underline
		tileCtaDecoration: 'none',
		// name left, CTA in the line below (always - not only when they don't fit in one line)
		tileTextLayout: 'inRow',
		tileTextStack: 'always',
		// spacing as on 11.11 (Dmytro 095)
		spaceBetweenRows: 'newsletterBottom40px',
		spaceAfter: 'newsletterBottom60px',
		container: 'newsletterContainer30px',
		containerPadding: 30,
		tileImageSize: { width: 288, height: 216 },
		tileGap: 15,
		heading: {
			phrase: 'Shop by category',
			align: 'center',
			spaceAfter: 'newsletterBottom20px',
			styles: 'text-transform: uppercase; font-weight: 700;'
		},
		categories: [
			[
				tile(1, 'Sofas', 'https://www.beliani.ch/sofas/'),
				tile(2, 'Beds', 'https://www.beliani.ch/beds/'),
			],
			[
				tile(3, 'Armchairs', 'https://www.beliani.ch/armchairs/'),
				tile(4, 'Chairs', 'https://www.beliani.ch/chairs/'),
			],
			[
				tile(5, 'Tables', 'https://www.beliani.ch/tables/'),
				tile(6, 'Storage', 'https://www.beliani.ch/storage/'),
			],
			[
				tile(7, 'Textiles', 'https://www.beliani.ch/textiles/'),
				tile(8, 'Lighting', 'https://www.beliani.ch/lighting/'),
			],
			[
				// static "Baths" = "Bath & Hot Tubs" (too long for the tile), "Bathtubs" as on 11.11
				tile(9, 'Bathtubs','https://www.beliani.ch/bathtubs-hot-tubs/'),
				tile(10, 'Desks', 'https://www.beliani.ch/office-furniture/desks-eng/'),
			],
			[
				tile(11, 'Rugs', 'https://www.beliani.ch/rugs/'),
				tile(12, 'Accessories', 'https://www.beliani.ch/accessories-decor/', {
					overrides: {
						DACH: "Wohnaccessoires",
						FI: "Sisustustarvikkeet"
					},
				}),
			],
		],
	},
];

export default new entities.Campaign({
	startId: 50017,
	lpId: 33567,
	issueCardId: 545790,
	version: 'new',
	name: 'Black Week product categories',
	date: '19.11.2026',
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
