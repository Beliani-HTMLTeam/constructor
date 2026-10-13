const campaignTranslationsSheet = '2026::28.10.26 - Christmas Gift Guide';

const tableQueries = [
	{
		tableRange: '16:17',
		name: 'TopImageTitle',
	},
	{
		tableRange: '19',
		name: 'intro',
	},
	{
		tableRange: '20:25',
		name: 'categories',
	},
	{
		tableRange: '26:31',
		name: 'paragraphs',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-10-28' }),
	TopImageTitle_src: translateImage({ value: '20261028_01.png' }),

	Banner_1: translateLink({ value: 'content/lp26-10-21' }),
	Banner_1_Image: translateImage({ value: '20261021b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-10-16' }),
	Banner_2_Image: translateImage({ value: '20261016b.png' }),

	Intro_cta_href: 'https://www.beliani.ch/gift-guide/',
};

const palette = {
	page: '#FFF2ED',
	text: '#000000',
	title: '#000000',
};

const TopImageTitle_data = {
	color: palette.text,
	backgroundColor: palette.page,
	type: 'twoSameLines',
};

const intro = {
	type: 'paragraph',
	position: 'afterFirstCategory',
	container: 'newsletterContainer55px',
	alignment: 'center',
	color: palette.text,
	spaceTop: 'newsletterBottom35px',
	cta: {
		variant: 'underline',
		textTransform: 'none',
		fontWeight: '400',
		color: palette.text,
		align: 'center',
		phrase: 'Shop now',
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: 'newsletterBottom35px',
	},
};

const cta = {
	variant: 'underline',
	textTransform: 'none',
	fontWeight: '400',
	color: palette.text,
	align: 'center',
	spaceBefore: 'newsletterBottom25px',
};

const additionalCss = `
	#newsletter .giftBudgetLabel {
		font-size: 16px;
		line-height: 1.2;
	}

	@media screen and (max-width: 768px) {
		#newsletter .giftBudgetLabel {
			font-size: 12px;
		}
	}
`;

const giftCategory = (number, name, href, overrides = {}) => ({
	paddingTop: 35,
	spaceAfter: 'newsletterBottom80px',

	name,
	href,
	src: getImageUrl(`20261028_Cat${number}0.jpg`, true),
	container: 'newsletterContainer55px',
	tdClass: 'newsletterContainer55px',

	background: palette.page,
	color: palette.text,

	type: 'grid',

	title: {
		show: true,
		position: 'beforeImg',
		align: 'center',
		color: palette.title,
		spaceAfter: 'newsletterBottom20px',
	},

	paragraph: {
		show: true,
		position: 'afterImg',
		align: 'center',
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: 'newsletterBottom40px',
	},

	line: {
		show: true,
		insideContainer: true,
	},

	cta,

	product: {
		prices: false,
		name: false,
		align: 'center',
		gapBetweenHorizontal: 5,
		gapBetweenVertical: 'newsletterBottom10px',
	},

	...overrides,
});

const gridProducts = (number, ids) =>
	ids.map((id, i) => ({
		id,
		src: getImageUrl(`20261028_Pic${number}${i + 1}.png`, true),
	}));

const categories = [
	{
		src: getImageUrl('20261028_Pic.png'),
		href: 'https://www.beliani.ch/gift-guide/gift-guide-homebody/',
		container: 'newsletterContainer55px',
		tdClass: 'newsletterContainer55px',
		background: palette.page,
		color: palette.text,
		paddingTop: 0,
		spaceAfter: '0',
		title: { show: false },
		paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
	},

	giftCategory(0, 'For Homebody', 'https://www.beliani.ch/gift-guide/gift-guide-homebody/', {
		products: [
			{ id: 431144, src: getImageUrl('20261028_Pic01.png', true) },
			{ id: 408896, src: getImageUrl('20261028_Pic02.png', true) },
			{ id: 582920, src: getImageUrl('20261028_Pic03.png', true) },
			{ id: 501986, src: getImageUrl('20261028_Pic04.png', true) },
			{ id: 697177, src: getImageUrl('20261028_Pic05.png', true) },
			{ id: 189169, src: getImageUrl('20261028_Pic06.png', true) },
		],
	}),

	giftCategory(1, 'For Host', 'https://www.beliani.ch/gift-guide/gift-guide-host/', {
		products: gridProducts(1, [731218, 802607, 642481, 468056, 804056, 585586]),

		src: getImageUrl(`20261028_Cat10.png`, true),
	}),

	giftCategory(2, 'For Design Lover', 'https://www.beliani.ch/gift-guide/for-design-lover/', {
		products: gridProducts(2, [732224, 733650, 728633, 583186, 600818, 345674]),
	}),

	giftCategory(3, 'For Pet Lover', 'https://www.beliani.ch/gift-guide/for-pet-lovers/', {
		products: gridProducts(3, [323050, 727606, 266956, 554351, 364230, 309024]),
	}),

	giftCategory(4, 'Budget Friendly', 'https://www.beliani.ch/gift-guide/gifts-under-50-fr/', {
		type: '3labeled',
		product: undefined,
		label: { className: 'newsletterProductTitle giftBudgetLabel' },
		tiles: [
			{
				src: getImageUrl('20261028_Cat41.png', true),
				href: 'https://www.beliani.ch/gift-guide/gifts-under-50-fr/',
				name: 'Under 50 francs',
			},
			{
				src: getImageUrl('20261028_Cat42.png', true),
				href: 'https://www.beliani.ch/gift-guide/gifts-under-150-fr/',
				name: 'Under 150 francs',
			},
			{
				src: getImageUrl('20261028_Cat43.png', true),
				href: 'https://www.beliani.ch/gift-guide/gifts-under-250-fr/',
				name: 'Under 250 francs',
			},
		],
	}),

	giftCategory(5, 'Gift Card', 'https://www.beliani.ch/gift-cards/', {
		product: undefined,
		line: { show: false },
		paragraph: {
			show: true,
			position: 'afterImg',
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: '0',
		},
		cta: { ...cta, spaceBefore: 'newsletterBottom35px' },
	}),
];

export default new entities.Campaign({
	startId: 49505,
	lpId: 33313,
	issueCardId: 542819,
	version: 'new',
	name: 'Christmas Gift Guide',
	date: '28.10.2026',
	figmaUrl: 'https://www.figma.com/design/UcexZ8tdUCuj78yMY73jaV/Newsletter-Christmas-Gift-Guide---Wednesday-2026.10.28?node-id=0-1&t=MvoJ2bpejaY1rcga-1',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday,
			css: types.CSS.NS_THURSDAY,
			additionalCss: additionalCss,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: palette.page,
			color: palette.text,

			wrapper: types.WRAPPER,
			optimizeCss: true,

			TopImageTitle_data: TopImageTitle_data,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			intro: intro,
		},

		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday,
			css: types.CSS.LP_THURSDAY,
			additionalCss: additionalCss,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: palette.page,
			color: palette.text,

			TopImageTitle_data: TopImageTitle_data,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			intro: intro,
		},
	],
});
