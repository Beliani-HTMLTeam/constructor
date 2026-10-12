const campaignTranslationsSheet = '2026::22.10.26 - Christmas Decoration Sale';

const tableQueries = [
	{
		tableRange: '21',
		name: 'intro',
	},
	{
		tableRange: '22:28',
		name: 'categories',
	},
	{
		tableRange: '29:35',
		name: 'paragraphs',
	},
	{
		tableRange: '14:15',
		name: 'timer',
		tableName: '2026::05.10.26 - October Peak Start',
	},
];

const links = {
	TopImage_src: translateImage({ value: '20261022_Pic.png' }),
	TopImage_href: translateLink({ value: 'content/lp26-10-22' }),

	Banner_1: translateLink({ value: 'content/lp26-10-15' }),
	Banner_1_Image: translateImage({ value: '20261015b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-10-14' }),
	Banner_2_Image: translateImage({ value: '20261014b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-10-23' }),

	Intro_cta_href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/',
};

const palette = {
	page: '#F6E7E6',
	text: '#000000',
	title: '#000000',
	timer: '#FF2F00',
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
		phrase: 'Shop now First',
		spaceBefore: 'newsletterBottom35px',
	},
};

const timer = {
	deadline: '2026-10-25',
};

const Inside = {
	type: 'timer',
	maincolor: palette.timer,
	spaceBefore: 'newsletterBottom35px',
	spaceBeforeBackground: palette.page,
};

const additionalCss = `
	@media screen and (max-width: 768px) {
		#newsletter .newsletterProductTitle {
			font-size: 16px !important;
		}
	}
`;

const productCategory = (number, name, href, products) => ({
	paddingTop: number === 0 ? 35 : 0,
	spaceAfter: 'newsletterBottom80px',

	name,
	href,
	src: getImageUrl(`20261022_Cat${number}0.jpg`, true),
	tdClass: false,

	background: palette.page,
	color: palette.text,

	type: '3prods',

	title: {
		show: true,
		position: 'afterImg',
		align: 'center',
		color: palette.title,
		styles: 'text-transform: uppercase;',
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: 'newsletterBottom20px',
	},

	paragraph: {
		show: true,
		align: 'center',
		spaceAfter: 'newsletterBottom35px',
	},

	cta: {
		variant: 'underline',
		textTransform: 'none',
		fontWeight: '400',
		color: palette.text,
		align: 'center',
	},

	product: {
		prices: false,
		name: true,
		align: 'center',
	},

	products: products.map((id, i) => ({
		id,
		src: getImageUrl(`20261022_Pic${number}${i + 1}.png`, true),
	})),
});

const categories = [
	// FARNHAM, BASSIE, PALOMAR
	productCategory(0, 'Christmas Trees', 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree/', [296290, 416611, 202576]),

	// RODSJON, NILGIRI, INTSIA
	productCategory(1, 'Christmas Decorations', 'https://www.beliani.ch/christmas-shop/christmas-accessories/decorations/', [679110, 573366, 683235]),

	// MUONIO, VELOURA, MAHLATTI
	productCategory(2, 'Christmas LED Decor', 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-outdoor-decor/', [561701, 664147, 296312]),

	// KAMERUN (wreath), NURMES, ARESJON
	productCategory(3, 'Christmas Wreaths', 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-wreaths/', [418670, 212151, 668091]),

	// WHITEHORN, KAMERUN (garland), SUNDO
	productCategory(4, 'Christmas Garlands', 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-garland/', [296411, 418550, 296763]),

	// FERIABLE, TYIN, TWINKLE
	productCategory(5, 'Christmas Tree Decorations', 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree-decorations/', [446995, 674265, 677258]),

	// IGALIKU, SAARLOQ, KULUSUK
	productCategory(6, 'Christmas Lights', 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-lights/', [422270, 422321, 422559]),
];

export default new entities.Campaign({
	startId: 49248,
	lpId: 33195,
	issueCardId: 542175,
	version: 'new',
	name: 'Christmas Decoration Sale',
	date: '22.10.2026',
	figmaUrl: 'https://www.figma.com/design/2wyjzCibTCa3pKH3x8IxUy/Newsletter-Christmas-Decoration-Sale---Thursday-2026.10.22--Copy-?node-id=0-1&t=dHJRwrxHiS4V1WXE-1',
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
