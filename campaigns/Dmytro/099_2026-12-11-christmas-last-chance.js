const campaignTranslationsSheet = '2026::11.12.26 - Christmas Last minute';

const tableQueries = [
  ...[
		["intro", "20", campaignTranslationsSheet],
		["timer", "60:61", '2026::01.12.26 - Advent Calendar']
  ].map(([name, tableRange, tableName]) => ({
    name,
    tableRange,
    tableName,
  }))
]

const lpHref = translateLink({ value: 'content/lp26-12-11' });
 
const links = {
	TopImageSubtitle_href: lpHref,
	TopImageSubtitle_src: translateImage({ value: '20261211_intro_subtitle.png' }),

	TopImageUp_href: lpHref,
	TopImageUp_src: translateImage({ value: '20261211_01.gif' }),
 
	TopImage_src: getImageUrl('20261211_gif.gif', true),
	TopImage_href: lpHref,

	Timer_href: translateLink({ value: 'content/lp26-12-01' }),
	Intro_cta_href: 'https://www.beliani.ch/christmas-shop/',
};

const TopImageSubtitle_data = {
	position: 'afterTopImage',
};

// const TopImageTitle_data = {
// 	  color: '#000000',
// 	  backgroundColor: '#F6E7E6',
// 	  type: 'twoSameLines',
// 		spaceAfter: false,
// 	};

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
	fontWeight: '400',
	letterSpacing: '0',
	paddingX: 45,
	paddingY: 15,
	mobilePaddingX: 30,
	mobilePaddingY: 12,
	textTransform: 'none',
	textDecoration: 'underline'
};

const timer = {
	deadline: '2026-12-13',
	utmContent: 'advent_inside_banner',
};

const timerInside = {
	type: 'timer',
	position: 'beforeCategories',
	color: '#ffffff',
	backgroundColor: '#750000',
	unitBackground: '#AC6666',
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

const intro = {
	type: 'paragraph',
	position: 'beforeTimer',
	// own class - newsletterContainer60px has no mobile rule in thursday.css and is also used by the header
	container: 'newsletterContainer',
	alignment: 'center',
	color: palette.text,
	backgroundColor: palette.page,
	spaceTop: 'newsletterBottom35px',
	cta: {
		...button,
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: 'newsletterBottom35px',
	},
};
 
const categories = [
		{
			name: 'Christmas Trees',
			src: translateImage({ value: '20261211_Category1.png' }),
			href: 'https://www.beliani.ch/christmas-shop/christmas-trees/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 35,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Tree Decorations',
			src: translateImage({ value: '20261211_Category2.png' }),
			href: 'https://www.beliani.ch/christmas-shop/christmas-tree-decoration/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Christmas Tree Collars',
			src: translateImage({ value: '20261211_Category3.png' }),
			href: 'https://www.beliani.ch/christmas-shop/christmas-tree-collar/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Decorations',
			src: translateImage({ value: '20261211_Category4.png' }),
			href: 'https://www.beliani.ch/christmas-shop/decorations-for-christmas/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'LED Decor',
			src: translateImage({ value: '20261211_Category5.png' }),
			href: 'https://www.beliani.ch/christmas-shop/outdoor-christmas-decor/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Wreaths',
			src: translateImage({ value: '20261211_Category6.png' }),
			href: 'https://www.beliani.ch/christmas-shop/christmas-wreath/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Garlands',
			src: translateImage({ value: '20261211_Category7.png' }),
			href: 'https://www.beliani.ch/christmas-shop/christmas-garlands/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Textiles',
			src: translateImage({ value: '20261211_Category8.png' }),
			href: 'https://www.beliani.ch/christmas-shop/textiles-for-christmas/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Lights',
			src: translateImage({ value: '20261211_Category9.png' }),
			href: 'https://www.beliani.ch/christmas-shop/christmas-lighting/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
		{
			name: 'Candle Holders',
			src: translateImage({ value: '20261211_Category10.png' }),
			href: 'https://www.beliani.ch/christmas-shop/candle-holders-for-christmas/',
			background: palette.page,
			color: palette.text,
			type: 'grid',
			cta: false,
			paddingTop: 0,
			spaceAfter: 0,
			line: {
				show: false
			},
			title: {
				show: false,
			},
			paragraph: {
				show: false,
				spaceAfter: '',
			},
		},
];
 
export default new entities.Campaign({
	startId: 50497,
	lpId: 33746,
	issueCardId: 562871,
	version: 'new',
	name: 'Christmas Last Chance',
	date: '11.12.2026',
	figmaUrl: 'https://www.figma.com/design/tlSwr6TZczV1VXqACh3EXM/Newsletter-Christmas-Last-minute---Friday-2026.12.11?node-id=0-1&t=DaGWslejw9sc2Vjq-1',
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
			TopImageSubtitle_data: TopImageSubtitle_data,
			// TopImageTitle_data: TopImageTitle_data,
			intro: intro,

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
			TopImageSubtitle_data: TopImageSubtitle_data,
			// TopImageTitle_data: TopImageTitle_data,
			intro: intro,

		},
	],
});