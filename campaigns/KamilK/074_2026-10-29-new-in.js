const campaignTranslationsSheet = '2026::29.10.26 - New in';

const tableQueries = [
	{
		tableRange: '17:18',
		name: 'TopImageTitle',
	},
	{
		tableRange: '20',
		name: 'intro',
	},
	{
		tableRange: '21:27',
		name: 'categories',
	},
	{
		tableRange: '28:34',
		name: 'paragraphs',
	},
	{
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 26.10.26 - Halloween Cashback',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-10-29' }),
	TopImageTitle_src: translateImage({ value: '20261029_01.png' }),

	TopImage_src: getImageUrl('20261029_Gif.gif', true),
	TopImage_href: 'https://www.beliani.ch/new/',

	Timer_href: translateLink({ value: 'content/lp26-10-26' }),

	Intro_cta_href: 'https://www.beliani.ch/new/',
};

const palette = {
	page: '#FCF7F6',
	text: '#000000',
	title: '#000000',
};

const TopImageTitle_data = {
	color: palette.text,
	backgroundColor: palette.page,
	type: 'standard',
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
	deadline: '2026-11-01',
};

const Inside = {
	type: 'timer',
	theme: 'Cozy Brown',
	spaceBefore: 'newsletterBottom35px',
	spaceBeforeBackground: palette.page,
};

const additionalCss = `
	#newsletter .newsletterContainer {
		padding-left: 15px;
		padding-right: 15px;
	}

	@media screen and (max-width: 768px) {
		#newsletter .newsletterProductTitle {
			font-size: 16px !important;
		}
	}
`;

// px values from Figma: 15px walls, 10px between products, big 410x530, small 200x260 images
const layout = { gap: 10, padding: 15, bigWidth: 410, bigHeight: 530, smallWidth: 200, smallHeight: 260 };

const cta = {
	variant: 'underline',
	textTransform: 'none',
	fontWeight: '400',
	color: palette.text,
	align: 'center',
};

const product = {
	prices: false,
	name: false,
	align: 'center',
};

const bigWithTwo = (number, name, href, imageSide, [first, second]) => ({
	paddingTop: number === 0 ? 60 : 0,
	spaceAfter: 0,

	name,
	href,
	type: '1big-2vertical',
	imageSide,
	layout,
	cta: false,

	background: palette.page,
	color: palette.text,

	title: {
		show: true,
		align: 'center',
		color: palette.title,
		spaceAfter: 'newsletterBottom35px',
	},

	paragraph: {
		show: true,
		align: 'center',
		spaceBefore: '0',
		spaceAfter: 'newsletterBottom35px',
	},

	product,

	products: [
		{ id: first, src: getImageUrl(`20261029_Cat${number}0.jpg`, true), useCategoryLink: true },
		{ id: first, src: getImageUrl(`20261029_Pic${number}1.png`, true) },
		{ id: second, src: getImageUrl(`20261029_Pic${number}2.png`, true) },
	],
});

const threeProducts = (number, name, href, ids, imageSide) => ({
	paddingTop: 0,
	spaceAfter: 'newsletterBottom80px',

	name,
	href,
	type: '3prods',
	imageSide,
	layout,

	background: palette.page,
	color: palette.text,

	title: { show: false },
	paragraph: { show: false, spaceAfter: 0 },

	cta: { ...cta, spaceBefore: 'newsletterBottom35px' },

	product,

	products: ids.map((id, i) => ({
		id,
		src: getImageUrl(`20261029_Pic${number}${i + 3}.png`, true),
	})),
});

// TODO: category links are not in the issue - all point to /new/ for now
const NEW_URL = 'https://www.beliani.ch/new/';

const categories = [
	bigWithTwo(0, 'Living Room', NEW_URL, 'right', [839461, 603218]),
	threeProducts(0, 'Living Room', NEW_URL, [839838, 840196, 831271], 'right'),

	bigWithTwo(1, 'Bedroom', NEW_URL, 'left', [845116, 820394]),
	threeProducts(1, 'Bedroom', NEW_URL, [816764, 817019, 828018], 'left'),

	bigWithTwo(2, 'Dining Room', NEW_URL, 'right', [844653, 833872]),
	threeProducts(2, 'Dining Room', NEW_URL, [677998, 817632, 843653], 'right'),

	bigWithTwo(3, 'Christmas Decorations', NEW_URL, 'left', [842746, 842577]),
	threeProducts(3, 'Christmas Decorations', NEW_URL, [842703, 665831, 845073], 'left'),
];

export default new entities.Campaign({
	startId: 49537,
	lpId: 33338,
	issueCardId: 543282,
	version: 'new',
	name: 'New in',
	date: '29.10.2026',
	figmaUrl: 'https://www.figma.com/design/WTmKe3csZkD0lYaUdhQvao/2026.10.29---Newsletter---New-in?node-id=0-1&t=HjasIZHWEvufShbS-1',
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

			TopImageTitle_data: TopImageTitle_data,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: intro,
			Inside: Inside,
		},
	],
});
