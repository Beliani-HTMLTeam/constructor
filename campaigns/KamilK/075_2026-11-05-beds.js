const campaignTranslationsSheet = '2026::05.11.26 - Beds';

const tableQueries = [
	{
		tableRange: '18:19',
		name: 'intro',
	},
	{
		tableRange: '20:23',
		name: 'categories',
	},
	{
		tableRange: '24:27',
		name: 'paragraphs',
	},
	{
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 02.11.26 - Gatherings - Free gift',
	},
];

const links = {
	TopImage_src: translateImage({ value: '20261105_Pic.jpg' }),
	TopImage_href: 'https://www.beliani.ch/beds/',

	Timer_href: translateLink({ value: 'content/lp26-11-02' }),
};

const palette = {
	page: '#FFF4E6',
	alt: '#750000',
	text: '#000000',
	altText: '#FFFFFF',
	price: '#750000',
	altPrice: '#FFFFFF',
	button: '#5B1210',
	buttonText: '#FFFFFF',
};

const intro = {
	type: 'paragraph',
	position: 'beforeTopImage',
	container: 'newsletterContainer',
	alignment: 'center',
	color: palette.text,
	backgroundColor: palette.page,
	spaceTop: 'newsletterBottom35px',
	spaceBottom: 'newsletterBottom35px',
	title: { styles: 'white-space: pre-line;' },
};

const timer = {
	deadline: '2026-11-08',
	theme: 'Soft Peach',
	freebies: [
		// ANDIRIN
		{
			id: 257987,
			titlePhrase: 'Decorative Cushions',
			src: getImageUrl('20261105free1.png', true),
		},
		// PADRE
		{
			id: 232377,
			titlePhrase: 'Candle Holder',
			src: getImageUrl('20261105free2.png', true),
		},
		// FLORETTA
		{
			id: 367111,
			titlePhrase: 'Neon LED Signs',
			src: getImageUrl('20261105free3.png', true),
		},
		// PONTIVY
		{
			id: 232794,
			titlePhrase: 'Decorative Tray',
			src: getImageUrl('20261105free4.png', true),
		},
	],
};

const Inside = {
	type: 'timer',
	theme: 'Soft Peach',
	spaceBefore: 'newsletterBottom35px',
	spaceBeforeBackground: palette.page,
};

const additionalCss = `
	@media screen and (max-width: 768px) {
		#newsletter .newsletterProductTitle {
			font-size: 14px !important;
		}
	}
`;

// number 0 = no category image (Pic is the top image), 1-3 = Cat10/Cat20/Cat30 translated per country
const bedsCategory = (number, name, href, products, { alt = false } = {}) => ({
	paddingTop: number === 0 ? 'newsletterBottom80px' : 0,
	spaceAfter: 'newsletterBottom80px',

	name,
	href,
	...(number > 0 && { src: translateImage({ value: `20261105_Cat${number}0.jpg` }) }),
	container: 'newsletterContainer',

	background: alt ? palette.alt : palette.page,
	color: alt ? palette.altText : palette.text,

	type: 'grid',

	title: {
		show: true,
		position: number > 0 ? 'afterImg' : 'beforeImg',
		align: 'center',
		color: alt ? palette.altText : palette.text,
		spaceBefore: number > 0 ? 'newsletterBottom35px' : undefined,
		spaceAfter: 'newsletterBottom20px',
	},

	paragraph: {
		show: true,
		align: 'center',
		spaceAfter: 'newsletterBottom35px',
	},

	cta: {
		variant: 'button',
		position: 'beforeProducts',
		background: palette.button,
		color: palette.buttonText,
		align: 'center',
		fontSize: '15px',
		lineHeight: '16px',
		fontWeight: '600',
		letterSpacing: '0',
		paddingX: 35,
		paddingY: 14,
		mobilePaddingX: 24,
		mobilePaddingY: 13,
		borderRadius: '4px',
		textTransform: '',
		spaceAfter: 'newsletterBottom35px',
	},

	product: {
		name: true,
		align: 'center',
		gapBetweenHorizontal: 10,
		gapBetweenVertical: 'newsletterBottom10px',
		prices: {
			lowColor: alt ? palette.altPrice : palette.price,
			highColor: alt ? palette.altPrice : palette.price,
		},
	},

	products: products.map((id, i) => ({
		id,
		src: getImageUrl(`20261105_Pic${number}${i + 1}.png`, true),
	})),
});

const categories = [
	// SOULISSE, CHALLANS, SAUVIAN, BAJONNA
	bedsCategory(0, 'Fabric Beds', 'https://www.beliani.ch/beds/fabric-beds/', [630418, 670265, 661327, 603483]),

	// WIZERNES, BOISSET, ZEN, FLAVIGNAC
	bedsCategory(1, 'Wooden Beds', 'https://www.beliani.ch/beds/wooden-beds/', [614171, 447265, 521481, 820350]),

	// KARILA, NASSJO, ASAA, HRISEY
	bedsCategory(2, 'Sofa Beds', 'https://www.beliani.ch/sofas/sofa-beds/', [425806, 640419, 633379, 584445]),

	// DUKE, FITOU, AMBASSADOR, BONNAC
	bedsCategory(3, 'Single Beds', 'https://www.beliani.ch/beds/single-beds/', [657408, 410831, 109786, 467604], { alt: true }),
];

export default new entities.Campaign({
	startId: 49665,
	lpId: 33424,
	issueCardId: 544551,
	version: 'new',
	name: 'Beds',
	date: '05.11.2026',
	figmaUrl: 'https://www.figma.com/design/LtzArgkk7jAeVIgXC9BDLz/Beds---Thursday-2026.11.05--Copy-?node-id=10001-5282&t=TNvferhMmgA5Ua5H-1',
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
