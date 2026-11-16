const campaignTranslationsSheet = '2026::Voucher - 04.12.26 - Cyber Monday Reminder';

const dealTranslationsSheets = [
  'Voucher - 30.11.26 - Cyber Monday Start',
  '2026::Voucher - 04.12.26 - Cyber Monday Reminder',
];

const tableQueries = [
  ...[
		["TopImageTitle", "22:23", dealTranslationsSheets[1]],
    ['deal_1', '25:27', dealTranslationsSheets[0]],
    ['deal_2', '28:30', dealTranslationsSheets[0]],
    ['deal_3', '31:33', dealTranslationsSheets[0]],
    ['deal_condition', '34', dealTranslationsSheets[0]],
    ['deal_date', '35', dealTranslationsSheets[0]],
    ['condition', '37:39', dealTranslationsSheets[0]],
  ].map(([name, tableRange, tableName]) => ({
    name,
    tableRange,
    tableName,
  }))
]

const lpHref = translateLink({ value: 'content/lp26-12-04' });
 
const links = {
	TopImageSubtitle_href: lpHref,
	TopImageSubtitle_src: getImageUrl('20261204_top_01.png', true),

	TopImageTitle_href: lpHref,
	TopImageTitle_src: translateImage({ value: '20261204_01.png' }),
 
	TopImage_src: translateImage({ value: '20261204_Pic.png' }),
	TopImage_href: lpHref,

	Timer_href: lpHref,
};

const TopImageTitle_data = {
	  color: '#000000',
	  backgroundColor: '#F6E7E6',
	  type: 'twoSameLines',
		spaceAfter: false,
	};

const palette = {
	accent: '#FF2F00',
	dark: '#750000',
	text: '#000000',
	page: '#F6E7E6',
	cta: '#FF8C00',
	tilesBg: '#F6E7E6',
	toastBg: '#FFE0D4',
	buttonBg: "#FD9000"
};

const button = {
	show: true,
	align: 'center',
	variant: 'button',
	background: palette.dark,
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '800',
	letterSpacing: '0',
	paddingX: 38,
	paddingY: 18,
	mobilePaddingX: 24,
	mobilePaddingY: 14,
};

const timer = {
	deadline: '2026-12-06',
};

const timerInside = {
	type: 'timer',
	position: 'afterTiT',
	color: '#000000',
	backgroundColor: '#F6E7E6',
	unitBackground: '#ffffff',
	showCta: false,
	showTitles: false,
	spaceTop: 'newsletterBottom35px',
	spaceBottom: 'newsletterBottom20px',
	container: 'newsletterContainer60px',
};
 
const additionalCss = `
.offerTierValue{font-size:64px;line-height:0.9;font-family:"Open Sans",sans-serif;font-weight:800;letter-spacing:-3px}
.offerTierCode{font-size:18px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:800}
.offerTierCodePrefix{text-transform:uppercase}
@media screen and (max-width:768px){.offerTierValue{font-size:44px}}
`;
 
const additionalCssLp = `
#newsletter .offerTierValue{font-size:64px;line-height:0.9;font-family:"Poppins",sans-serif;font-weight:800;letter-spacing:-3px}
#newsletter .offerTierCode{font-size:18px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:800}
#newsletter .offerTierCodePrefix{text-transform:uppercase}
#newsletter .offerTierCopyIcon *{margin:0!important;padding:0!important}
#newsletter .offerTierCopyIcon img,
#newsletter .offerTierCopyIcon svg,
#newsletter .offerTierCopyIcon .blackWeekCopyImg{width:18px!important;height:18px!important;min-width:18px!important;max-width:18px!important;display:block!important}
#newsletter .offerTierCopyIcon button {
  height: 18px;
  min-height: 0;
  width: 18px;
  padding: 0;
  line-height: 0;
}

#newsletter .offerTierCopyIcon img {
  width: 18px;
  height: 18px;
}
@media screen and (max-width:768px){
	#newsletter .offerTierValue{font-size:44px}
	#newsletter .offerTierCopyIcon{width:15px!important;height:15px!important;flex-basis:15px!important}
	#newsletter .offerTierCopyIcon img,
	#newsletter .offerTierCopyIcon svg,
	#newsletter .offerTierCopyIcon .blackWeekCopyImg{width:15px!important;height:15px!important;min-width:15px!important;max-width:15px!important}
}
`;
 
const categories = [
	{
		type: 'offer_tiers',
		background: palette.page,
		color: palette.text,
		href: lpHref, // "Get codes" link
		paddingTop: 0,
		spaceAfter: 'newsletterBottom80px',
		offerTiers: {
			deals: ['deal_1', 'deal_2', 'deal_3'],
			conditionQuery: 'deal_condition',
			dateQuery: 'deal_date',
			valueColor: palette.text,
			highlightColor: palette.dark,
			highlight: [2], // FREE in dark red
			codeColor: palette.dark,
			lineColor: palette.dark,
			copyToast: { background: palette.toastBg, color: palette.text },
			cta: { phrase: 'Get codes', background: palette.cta, color: palette.text },
			spacing: { beforeNSLTLastLine: 50, beforeLPLastLine: 30 },
		},
	},
	{
		type: 'small-tiles',
		href: 'https://beliani.ch',
		paddingTop: '0',
		background: palette.tilesBg,
		color: palette.text,
		paragraph: {
			position: 'afterProducts',
			spaceAfter: 'newsletterBottom35px',
		},
		spaceAfter: 'newsletterBottom80px',
		cta: {
			phrase: 'Shop all categories',
			color: palette.text,
			 background: palette.tilesBg,
			variant: 'underline',
			textTransform: 'none',
			fontSize: '20px',
	lineHeight: '24px',
		},
		tiles: {
			background: '750000',
			text: 'ffffff',
			rounded: true,
			borderRadius: '6px',
			items: [
				{
					name: 'Outdoor', // uzywane jako Alt, getCategoryTitle(name)
					href: 'https://www.beliani.ch/garden-furniture', // link do kategorii -> getCategoryLink(href)
					// src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
				},
				{ name: 'Sofas', href: 'https://www.beliani.ch/sofas' },
				{ name: 'Beds', href: 'https://www.beliani.ch/beds' },
				{ name: 'Armchairs', href: 'https://www.beliani.ch/armchairs' },
				{ name: 'Chairs', href: 'https://www.beliani.ch/chairs' },
				{ name: 'Tables', href: 'https://www.beliani.ch/tables' },
				{ name: 'Storage', href: 'https://www.beliani.ch/storage' },
				{ name: 'Kids Room', href: 'https://www.beliani.ch/children-room' },
				{ name: 'Textiles', href: 'https://www.beliani.ch/textiles' },
				{ name: 'Lighting', href: 'https://www.beliani.ch/lighting' },
				{ name: 'Bathtubs', href: 'https://www.beliani.ch/bathtubs-hot-tubs' },
				{ name: 'Desks', href: 'https://www.beliani.ch/office-furniture/desks' },
				{ name: 'Rugs', href: 'https://www.beliani.ch/rugs' },
				{ name: 'Accessories', href: 'https://www.beliani.ch/home-accessories/accessories-decor' },
			],
		},
	},
];
 
export default new entities.Campaign({
	startId: 49953,
	lpId: 33545,
	issueCardId: 546087,
	version: 'new',
	name: 'Cyber Monday Reminder',
	date: '04.12.2026',
	figmaUrl: 'https://www.figma.com/design/Tov2fNyhyALyU0s5aa4N78/Newsletter-Cyber-Monday-reminder---Friday-2026.12.04?node-id=0-1&t=bMMqhw5L6LpPl3fc-1',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Friday,
			css: types.CSS.NS_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,
 
			background: palette.page,
			color: palette.text,
 
			wrapper: types.WRAPPER,

			Inside: timerInside,
			timer: timer,
 
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCss,
			footer_theme: 'peach',
			optimizeCss: true,
			TopImageTitle_data: TopImageTitle_data,
		},
 
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Friday,
			css: types.CSS.LP_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,
 
			background: palette.page,
			color: palette.text,

			Inside: timerInside,
			timer: timer,
 
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCssLp,
			footer_theme: 'peach',
			TopImageTitle_data: TopImageTitle_data,
		},
	],
});