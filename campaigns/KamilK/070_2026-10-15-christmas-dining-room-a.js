const campaignTranslationsSheet = '2026::15.10.26 -  Christmas Prep Styles';

const tableQueries = [
	{
		tableRange: '21',
		name: 'intro',
	},
	{
		tableRange: '22:25',
		name: 'categories',
	},
	{
		tableRange: '26:29',
		name: 'paragraphs',
	},
	{
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 13.10.26 - Free Bean Bag',
	},
];

const links = {
	TopImage_src: translateImage({ value: '20261015_Gif.gif' }),
	TopImage_href: translateLink({ value: 'content/lp26-10-15' }),

	Banner_1: translateLink({ value: 'content/lp26-10-08' }),
	Banner_1_Image: translateImage({ value: '20261008b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-10-07' }),
	Banner_2_Image: translateImage({ value: '20261007b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-10-13' }),

	Intro_cta_href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/',
};

const palette = {
	page: '#F6E7E6',
	altPage: '#F6E7E6',
	text: '#000000',
	title: '#000000',
	timer: '#FD9000',
};

const intro = {
	type: 'paragraph',
	container: 'newsletterContainer',
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
	},
};

const timer = {
	freebies: getImageUrl('20261015free.png', true),
	deadline: '2026-10-18',
};

const Inside = {
	type: 'timer',
	maincolor: palette.timer,
	spaceBefore: 'newsletterBottom35px',
	spaceBeforeBackground: palette.page,
};

const additionalCss = `
	#newsletter .newsletterTitle {
		font-size: 45px;
		font-weight: 600;
	}

	.newsletterContainerProducts60 {
		padding-left: 60px !important;
		padding-right: 60px !important;
	}

	@media screen and (max-width: 768px) {
		#newsletter .newsletterTitle {
			font-size: 25px;
		}

		.newsletterContainerProducts60 {
			padding-left: 30px !important;
			padding-right: 30px !important;
		}
	}
`;

const styleCategory = (number, name, href, background, products, overrides = {}) => ({
	paddingTop: number === 0 ? 35 : 0,
	spaceAfter: 'newsletterBottom80px',
	container: 'newsletterContainerProducts60',

	name,
	href,
	src: getImageUrl(`20261015_Cat${number}0.jpg`, true),
	tdClass: false,

	background,
	color: palette.text,

	type: 'grid',

	title: {
		show: true,
		position: 'afterImg',
		align: 'center',
		color: palette.title,
		container: 'newsletterContainer',
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: 'newsletterBottom20px',
	},

	paragraph: {
		show: true,
		container: 'newsletterContainer',
		align: 'center',
		spaceAfter: 'newsletterBottom35px',
	},

	line: {
		show: false,
		insideContainer: true,
	},

	cta: true,

	product: {
		prices: true,
		name: true,
		align: 'center',
		gapBetweenHorizontal: 20,
	},

	products: Object.values(products).map((id, i) => ({
		id,
		src: getImageUrl(`20261015_Pic${number}${i + 1}.png`, true),
	})),

	...overrides,
});

const categories = [
	styleCategory(0, 'Traditional', 'https://www.beliani.ch/christmas-shop/christmas-by-style/traditional-christmas/', palette.page, {
		PRODUCT_1: 719897,
		PRODUCT_2: 452445,
		PRODUCT_3: 677979,
		PRODUCT_4: 675064,
	}),

	styleCategory(1, 'Rustic', 'https://www.beliani.ch/christmas-shop/christmas-by-style/rustic-christmas/', palette.altPage, {
		PRODUCT_1: 666915,
		PRODUCT_2: 664802,
		PRODUCT_3: 468905,
		PRODUCT_4: 642481,
	}),

	styleCategory(2, 'Scandinavian', 'https://www.beliani.ch/christmas-shop/christmas-by-style/scandinavian-christmas/', palette.page, {
		PRODUCT_1: 644786,
		PRODUCT_2: 515774,
		PRODUCT_3: 668816,
		PRODUCT_4: 694154,
	}),

	styleCategory(3, 'Glamour', 'https://www.beliani.ch/christmas-shop/christmas-by-style/glamour-christmas/', palette.altPage, {
		PRODUCT_1: 609992,
		PRODUCT_2: 593938,
		PRODUCT_3: 585186,
		PRODUCT_4: 468832,
	}),
];

export default new entities.Campaign({
	startId: 48921,
	lpId: 33005,
	issueCardId: 538788,
	version: 'new',
	name: 'Christmas Dining Room A',
	date: '15.10.2026',
	figmaUrl: 'https://www.figma.com/design/mUyg2VXm2YrcHi5JZhU2Ao/2026.10.15?node-id=0-1&t=j8gjLnzSBjaPi8gn-1',
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

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: intro,
			Inside: Inside,
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

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: intro,
			Inside: Inside,
		},
	],
});
