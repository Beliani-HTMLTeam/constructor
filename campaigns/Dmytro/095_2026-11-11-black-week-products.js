const campaignTranslationsSheet = '2026::Voucher - 11.11.26 - Black Week product categories';

const tableQueries = [
	{
		// THE MORE YOU SPEND, THE MORE YOU SAVE - 1 row
		tableRange: '45',
		name: 'deal_title',
	},
	{
		// 4 boxes x 4 rows (EXTRA / 20% / OFF / when you spend min. €2500) - 16 rows, in order 20, 15, 10, 5
		tableRange: '20:39',
		name: 'deal_img',
	},
	{
		// CODE: XXX - 4 rows, same order as the boxes
		tableRange: '40:43',
		name: 'deal_codes',
	},
	{
		// Limited-time offer. Valid until 29/11/2026 - 1 row
		tableRange: '44',
		name: 'deal_condition',
	},
];

const links = {
	TopImage_src: translateImage({ value: '20261008_Pic.png' }),
	TopImage_href: translateLink({ value: 'content/lp26-10-08-tb' }),

	Banner_1: translateLink({ value: 'content/lp26-09-24' }),
	Banner_1_Image: translateImage({ value: '20260924b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-30' }),
	Banner_2_Image: translateImage({ value: '20260930b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-10-06' }),

	Intro_cta_href: "https://www.beliani.ch",
};

const additionalCss = `
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}}
`;

const additionalCssLp = `
#newsletter .newsletterDealTierLabel{font-size:12px;line-height:16px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierValue{font-size:48px;line-height:50px;font-family:"Poppins",sans-serif;font-weight:700}#newsletter .newsletterDealTierOff{font-size:12px;line-height:16px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierNote{font-size:14px;line-height:18px;font-family:"Poppins",sans-serif}#newsletter .newsletterDealCode{font-size:13px;line-height:16px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}
@media screen and (max-width:768px){#newsletter .newsletterDealGrid{width:100%!important;max-width:100%!important;table-layout:auto!important}#newsletter .newsletterDealCell{display:block!important;width:100%!important;box-sizing:border-box!important}#newsletter .newsletterDealGapCol{display:block!important;width:100%!important;height:10px!important;line-height:10px!important;font-size:0!important}#newsletter .newsletterDealEmpty{display:none!important}}
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

const categories = [
	{
		// section background - also the text colour of the GET CODES button
		background: '#000000',
		color: '#000000',
		type: 'black-week-extras',
		textColor: '#FFFFFF',
		href: translateLink({ value: 'content/lp26-11-11' }),

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
			background: '#750000',
			color: '#FFFFFF',
		},
		// landing page boxes
		dealBoxColor: '#FFF3E6',
		dealBoxTextColor: '#000000',
		dealValueColor: '#FF2F00',

		// grid - inner width of newsletterContainer, gap between the boxes
		dealWidth: 560,
		dealGap: 10,

		paddingTop: 0,
		paragraph: { spaceAfter: 'newsletterBottom40px' },
		spaceBeforeDeal: 'newsletterBottom20px',
		spaceAfterDeal: 'newsletterBottom20px',
		spaceAfterCodeCta: 'newsletterBottom20px',
		// bottom padding of the deal block
		spaceAfterConditions: 0,
		dealTitle: { styles: 'font-size: 34px; font-weight: 700;' },
		spaceAfter: 0,
	},
	{
		background: '#000000',
		color: '#ffffff',
		type: 'rowswith2categories',
		paddingTop: 0,
		showTileText: true,
		tileNameColor: '#ffffff',
		tileCtaColor: '#ffffff',
		spaceBetweenRows: 'newsletterBottom40px',
		spaceAfter: 'newsletterBottom60px',
		container: 'newsletterContainer30px',
		containerPadding: 30,
		tileGap: 15,
		tileTextLayout: 'inRow',
		heading: {
			phrase: 'Shop by category',
			align: 'center',
			spaceAfter: 'newsletterBottom20px',
			styles: 'text-transform: uppercase; font-weight: 700;'
		},
		categories:
			[
				[
					{
						name: "Sofas",
						href: 'https://www.beliani.ch/sofas/',
						src: getImageUrl('20261111Category1.png', true),
					},
					{
						name: "Beds",
						href: 'https://www.beliani.ch/beds/',
						src: getImageUrl('20261111Category2.png', true),
					},
				],
				[{
					name: "Armchairs",
					href: 'https://www.beliani.ch/armchairs/',
					src: getImageUrl('20261111Category3.png', true),
				},
				{
					name: "Chairs",
					href: 'https://www.beliani.ch/chairs/',
					src: getImageUrl('20261111Category4.png', true),
				},
				],
				[
					{
						name: "Tables",
						href: 'https://www.beliani.ch/tables/',
						src: getImageUrl('20261111Category5.png', true),
					},
					{
						name: "Storage",
						href: 'https://www.beliani.ch/storage/',
						src: getImageUrl('20261111Category6.png', true),
					},
				],
				[
					{
						name: "Textiles",
						href: 'https://www.beliani.ch/textiles/',
						src: getImageUrl('20261111Category7.png', true),
					},
					{
						name: "Lighting",
						href: 'https://www.beliani.ch/lighting/',
						src: getImageUrl('20261111Category8.png', true),
					},
				],
				[
					{
						name: "Baths",
						href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
						src: getImageUrl('20261111Category9.png', true),
					},
					{
						name: "Desks",
						href: 'https://www.beliani.ch/office-furniture/desks-eng/',
						src: getImageUrl('20261111Category10.png', true),
					}
				],
				[{
					name: "Rugs",
					href: 'https://www.beliani.ch/rugs/',
					src: getImageUrl('20261111Category11.png', true),
				},
				{
					name: "Accessories",
					href: 'https://www.beliani.ch/accessories-decor/',
					src: getImageUrl('20261111Category12.png', true),
				},]
			]
	},
];

export default new entities.Campaign({
	startId: 49184,
	lpId: 33149,
	issueCardId: 545778,
	version: 'new',
	name: 'Black Week Products',
	date: '11.11.2026',
	figmaUrl: 'https://www.figma.com/design/ogPlLDdBauWF2k9pC2xvTX/2026.11.11---Black-Week-product-categories?node-id=13249-712&t=W3EO2Eswp9yNWkTx-1',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Friday,
			css: types.CSS.NS_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: '#000000',
			color: '#ffffff',

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
			template: templates.Friday,
			css: types.CSS.LP_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: '#000000',
			color: '#ffffff',

			// TopImage_data: TopImage_data,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCssLp,
		}
	]
})