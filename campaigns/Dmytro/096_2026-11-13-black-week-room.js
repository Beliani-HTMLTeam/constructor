const campaignTranslationsSheet = '2026::Voucher - 13.11.26 - Black Week room by room';

const tableQueries = [
	{
		// THE MORE YOU SPEND, THE MORE YOU SAVE - 1 row
		tableRange: '48',
		name: 'deal_title',
	},
	{
		// 4 boxes x 4 rows (EXTRA / 20% / OFF / when you spend min. €2500) - 16 rows, in order 20, 15, 10, 5
		tableRange: '23:42',
		name: 'deal_img',
	},
	{
		// CODE: XXX - 4 rows, same order as the boxes
		tableRange: '43:46',
		name: 'deal_codes',
	},
	{
		// Limited-time offer. Valid until 29/11/2026 - 1 row
		tableRange: '47',
		name: 'deal_condition',
	},
	{
		tableRange: '49',
		name: "category_title"
	},
	{
		tableRange: '50:52',
		name: "condition"
	}
];

const links = {
	TopImageTitle_type: 'image',
	TopImageTitle_src: translateImage({ value: '20261113_topImage.png' }),
	TopImageTitle_href: translateLink({ value: 'content/lp26-11-13' }),

	TopImage_src: translateImage({ value: '20261113_shopNow.png' }),
	TopImage_href: "Home Page",

	Banner_1: translateLink({ value: 'content/lp26-11-06' }),
	Banner_1_Image: translateImage({ value: '20261106b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-11-05' }),
	Banner_2_Image: translateImage({ value: '20261105b.png' }),
};

const additionalCss = `
.categoryListName{font-size:30px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:700}.categoryListCta{font-size:30px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:700}
.blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:400;}.newsletterTitle {font-size:34px;font-weight:700;}.frenchDaysCategoryCta {font-size: 20px !important;}
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){.categoryListName{font-size:18px;}.categoryListCta{font-size:18px;}.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}.newsletterTitle{font-size:26px;}.blackWeekCondition{font-size:18px} #newsletter .frenchDaysDiscount {
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
#newsletter .categoryListName{font-size:30px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:700}#newsletter .categoryListCta{font-size:30px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:700}
#newsletter .blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:400;}#newsletter .newsletterTitle {font-size:34px;font-weight:700;}#newsletter .frenchDaysCategoryCta {font-size: 20px !important;}
#newsletter .newsletterDealTierLabel{font-size:20px;line-height:25px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierValue{font-size:75px;line-height:80px;font-family:"Poppins",sans-serif;font-weight:700}#newsletter .newsletterDealTierOff{font-size:20px;line-height:16px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierNote{font-size:20px;line-height:18px;font-family:"Poppins",sans-serif}#newsletter .newsletterDealCode{font-size:20px;line-height:25px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}
@media screen and (max-width:768px){#newsletter .categoryListName{font-size:18px;}#newsletter .categoryListCta{font-size:18px;}#newsletter .newsletterTitle{font-size:26px;}#newsletter .newsletterDealTierValue{font-size:48px;line-height:50px}#newsletter .newsletterDealGrid{width:100%!important;max-width:100%!important;table-layout:auto!important}#newsletter .newsletterDealCell{display:block!important;width:100%!important;box-sizing:border-box!important}#newsletter .newsletterDealGapCol{display:block!important;width:100%!important;height:10px!important;line-height:10px!important;font-size:0!important}#newsletter .newsletterDealEmpty{display:none!important}#newsletter .blackWeekCondition{font-size:18px} #newsletter .frenchDaysDiscount {
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
	text: '#000000',
	page: '#F2E6E6',
	intro: '#FECD8C',
	box: '#FFFFFF',
	boxBorder: '#FFCCB7',
	toastBg: '#ffe0d4',
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
			background: palette.toastBg,
			color: '#000000',
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
		spaceBeforeDeal: 'newsletterBottom35px',
		spaceAfterDeal: 'newsletterBottom20px',
		spaceAfterCodeCta: 'newsletterBottom35px',
		// bottom padding of the deal block
		spaceAfterConditions: 0,
		spaceAfter: 0,
	},
	{
		background: '#000000',
		color: '#ffffff',
		type: 'rowswith1category',
		paddingTop: 0,
		showTileText: true,
		tileNameColor: '#ffffff',
		tileCtaColor: '#ffffff',
		spaceBetweenRows: 'newsletterBottom80px',
		spaceAfter: 'newsletterBottom80px',
		container: 'newsletterContainer30px',
		tileCtaUnderline: true,
		containerPadding: 30,
		tileGap: 15,
		tileTextLayout: 'inRow',
		heading: {
			phrase: 'Room by room, all reduced',
			align: 'center',
			spaceAfter: 'newsletterBottom20px',
			styles: 'text-transform: uppercase; font-weight: 700;'
		},
		categories:
			[
				{
					name: "Living Room",
					href: 'https://www.beliani.ch/living-room-furniture/',
					src: getImageUrl('20261113Category1.png', true),
				},
				{
					name: "Bedroom",
					href: 'https://www.beliani.ch/bedroom-furniture/',
					src: getImageUrl('20261113Category2.png', true),
				},
				{
					name: "Dining Room",
					href: 'https://www.beliani.ch/dining-room-furniture/',
					src: getImageUrl('20261113Category3.png', true),
				},
				{
					name: "Bathroom",
					href: 'https://www.beliani.ch/bathroom-furniture/',
					src: getImageUrl('20261113Category4.png', true),
				},
				{
					name: "Kitchen",
					href: 'https://www.beliani.ch/kitchen/',
					src: getImageUrl('20261113Category5.png', true),
				},
				{
					name: "Home Office",
					href: 'https://www.beliani.ch/office-furniture/',
					src: getImageUrl('20261113Category6.png', true),
				},
				{
					name: "Kids Room",
					href: 'https://www.beliani.ch/children-room/',
					src: getImageUrl('20261113Category7.png', true),
				},
			]
	},
];

export default new entities.Campaign({
	startId: 49441,
	lpId: 33288,
	issueCardId: 545782,
	version: 'new',
	name: 'Black Week Room by Room',
	date: '13.11.2026',
	figmaUrl: 'https://www.figma.com/design/Al0C6jLpUWQ4oQC339bE5s/2026.11.13---Black-Week-room-by-room?node-id=13249-712&t=GIiIGIXV62r8SjnR-1',
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