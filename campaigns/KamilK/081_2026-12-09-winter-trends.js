const campaignTranslationsSheet = '2026::09.12.26 - Winter Trends';

const timerTranslationsSheet = '2026::01.12.26 - Advent Calendar';

const tableQueries = [
	{ name: 'TopImageTitle', tableRange: '17:18' },
	{ name: 'categoryLinks', tableRange: '19' },
	{ name: 'intro', tableRange: '20' },
	{ name: 'categories', tableRange: '21:24' },
	{ name: 'paragraphs', tableRange: '25:28' },
	{ name: 'timer', tableRange: '52:53', tableName: timerTranslationsSheet },
];

const lpHref = translateLink({ value: 'content/lp26-12-09' });

const links = {
	TopImageTitle_src: translateImage({ value: '20261209_01.png' }),
	TopImageTitle_href: lpHref,

	TopImage_src: getImageUrl('20261209_topImage.gif', true),
	TopImage_href: lpHref,

	Intro_cta_href: lpHref,

	Timer_href: translateLink({ value: 'content/lp26-12-01' }),
};

const palette = {
	page: '#F2E6E6',
	title: '#750000',
	text: '#000000',
	button: '#750000',
	buttonText: '#FFFFFF',
	box: '#FFFFFF',
};

const button = {
	variant: 'button',
	background: palette.button,
	color: palette.buttonText,
	align: 'center',
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '600',
	letterSpacing: '0',
	paddingX: 45,
	paddingY: 13,
	mobilePaddingX: 30,
	mobilePaddingY: 11,
	borderRadius: '3px',
	textTransform: 'none',
};

const container = 'trendsContainer';

const additionalCss = `
.trendsContainer{padding-left:30px;padding-right:30px;}
.trendsProductName{font-size:16px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:500;}
@media screen and (max-width:768px){.trendsContainer{padding-left:15px;padding-right:15px;}.trendsProductName{font-size:12px;}.trendsRowGap{height:6px !important;}}
`;

const additionalCssLp = `
#newsletter .trendsContainer{padding-left:30px;padding-right:30px;}
#newsletter .trendsProductName{font-size:16px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:500;}
#newsletter .newsletterTitleEyebrow{font-size:14px;line-height:1.4;font-weight:500;margin:0 0 6px 0;}
@media screen and (max-width:768px){#newsletter .trendsContainer{padding-left:15px;padding-right:15px;}#newsletter .trendsProductName{font-size:12px;}#newsletter .newsletterTitleEyebrow{font-size:12px;}#newsletter .trendsRowGap{height:6px !important;}}
`;

const TopImageTitle_data = {
	color: palette.title,
	backgroundColor: palette.page,
	type: 'eyebrowLeft',
};

const TopImageTitle_data_lp = {
	...TopImageTitle_data,
	container: container,
};

const TopImage_data = {
	container: container,
};

const intro = {
	type: 'paragraph',
	position: 'afterTopImage',
	container: container,
	alignment: 'left',
	color: palette.text,
	backgroundColor: palette.page,
	spaceTop: 'newsletterBottom35px',
	cta: {
		...button,
		spaceBefore: 'newsletterBottom20px',
		spaceAfter: 'newsletterBottom35px',
	},
};

const introLp = {
	...intro,
	cta: {
		...intro.cta,
		fontFamily: "'Poppins', sans-serif",
	},
};

const timer = {
	deadline: '2026-12-09',
	utmContent: 'advent_inside_banner',
};

const Inside = {
	type: 'timer',
	position: 'beforeCategories',
	color: '#FFFFFF',
	backgroundColor: '#750000',
	unitBackground: '#AC6666',
};

const trendCategory = (number, name, href, products, { first = false } = {}) => ({
	paddingTop: first ? 'newsletterBottom60px' : 0,
	spaceAfter: 'newsletterBottom80px',

	name,
	href,
	src: getImageUrl(`ns20261209_Cat0${number}.${number === 2 ? 'gif' : 'jpg'}`, true),
	tdClass: container,
	container: container,

	background: palette.page,
	color: palette.text,

	type: 'product-rows',
	columns: 3,
	gap: 10,
	rowGapClass: 'trendsRowGap',
	spaceBeforeProducts: 'newsletterBottom35px',

	title: {
		show: true,
		position: 'beforeImg',
		align: 'left',
		color: palette.title,
		spaceAfter: 'newsletterBottom15px',
		styles: 'font-weight: 400;',
	},

	paragraph: {
		show: true,
		position: 'beforeImg',
		align: 'left',
		spaceAfter: 'newsletterBottom35px',
	},

	cta: {
		...button,
		position: 'afterProducts',
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: 0,
	},

	product: {
		name: true,
		prices: false,
		align: 'left',
		background: palette.box,
		insetX: 10,
		spaceTopClass: 'newsletterBottom10px',
		nameGapClass: 'newsletterBottom10px',
		spaceBottomClass: 'newsletterBottom15px',
		title: { color: palette.text, className: 'trendsProductName', styles: 'text-transform: uppercase;' },
	},
	showPrices: false,

	products: products.map(([id, span, label], i) => ({
		id,
		span,
		...(label && { label }),
		src: getImageUrl(`20261209_Pic${number}${i + 1}.png`, true),
	})),
});

const categories = [
	trendCategory(
		1,
		'Warm browns',
		'https://www.beliani.ch/browse-by-colour/brown/',
		[
			[622259, 1],
			[716727, 2],
			[643547, 1],
			[850997, 1],
			[849700, 1],
		],
		{ first: true }
	),

	trendCategory(2, 'Mix & match chairs', 'https://www.beliani.ch/chairs/dining-chairs/', [
		[854995, 1],
		[832053, 1],
		[824766, 1],
		[843632, 1],
		[569865, 1],
		[122970, 1],
	]),

	trendCategory(3, 'Cosy layering', 'https://www.beliani.ch/living-room-furniture/textiles/', [
		[423505, 1],
		[845116, 2],
		[666514, 1],
		[194776, 1],
		[694824, 1],
	]),

	trendCategory(4, 'Statement mirrors', 'https://www.beliani.ch/mirrors/wall-mirrors/', [
		[838154, 1],
		[498401, 1],
		[447951, 1],
		[838216, 1],
		[498258, 1],
		[645012, 1],
	]),
];

export default new entities.Campaign({
	startId: 50561,
	lpId: 33790,
	issueCardId: 557563,
	version: 'new',
	name: 'Winter Trends',
	date: '09.12.2026',
	figmaUrl: 'https://www.figma.com/design/2C8bVloC5VISdRVVI7nR5Q/2026.12.09---Newsletter---Winter-Trends?node-id=10001-8591&t=IfMUPA1XVkzxX5xe-1',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday,
			css: types.CSS.NS_THURSDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: palette.page,
			color: palette.text,

			wrapper: types.WRAPPER,
			optimizeCss: true,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCss,
			timer: timer,
			Inside: Inside,
			TopImageTitle_data: TopImageTitle_data,
			TopImage_data: TopImage_data,
			intro: intro,
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday,
			css: types.CSS.LP_THURSDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: palette.page,
			color: palette.text,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCssLp,
			timer: timer,
			Inside: Inside,
			TopImageTitle_data: TopImageTitle_data_lp,
			TopImage_data: TopImage_data,
			intro: introLp,
		},
	],
});
