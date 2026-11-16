const campaignTranslationsSheet = '2026::05.11.26 - Beds';

const tableQueries = [
	{
		tableRange: '18',
		name: 'TopImageTitle',
	},
	{
		tableRange: '19',
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
	TopImageTitle_src: translateImage({ value: '20261105_01.png' }),
	TopImageTitle_href: 'https://www.beliani.ch/beds/',

	TopImage_src: translateImage({ value: '20261105_Pic.jpg' }),
	TopImage_href: 'https://www.beliani.ch/beds/',
	Intro_cta_href: 'https://www.beliani.ch/beds/',

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
	altButton: '#F6E7E6',
	altButtonText: '#000000',
	box: '#FFFFFF',
};

const TopImageTitle_data = {
	color: palette.text,
	backgroundColor: palette.page,
	type: 'singleLine',
};

const intro = {
	type: 'paragraph',
	position: 'afterTopImageTitle',
	container: 'newsletterContainer40px',
	alignment: 'center',
	color: palette.text,
	backgroundColor: palette.page,
	spaceTop: '',
	spaceBottom: 'newsletterBottom60px',
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

// number 0 = no category image (Pic is the top image), 1-3 = Cat10/Cat20/Cat30 translated per country
const bedsCategory = (number, name, href, products, { alt = false, last = false } = {}) => ({
	paddingTop: number === 0 ? 'newsletterBottom35px' : 0,
	spaceAfter: last ? 'newsletterBottom80px' : 'newsletterBottom45px',

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
		spaceBefore: number > 0 ? 'newsletterBottom45px' : undefined,
		spaceAfter: 'newsletterBottom15px',
		styles: 'font-weight: 400;',
	},

	paragraph: {
		show: true,
		align: 'center',
		container: 'newsletterContainer40px',
		spaceAfter: 'newsletterBottom20px',
	},

	cta: {
		variant: 'button',
		position: 'beforeProducts',
		background: alt ? palette.altButton : palette.button,
		color: alt ? palette.altButtonText : palette.buttonText,
		align: 'center',
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: '700',
		letterSpacing: '0',
		paddingX: 45,
		paddingY: 15,
		mobilePaddingX: 24,
		mobilePaddingY: 11,
		borderRadius: '2px',
		textTransform: 'none',
		spaceAfter: 'newsletterBottom80px',
	},

	product: {
		name: true,
		align: 'center',
		background: palette.box,
		insetX: 0,
		spaceTopClass: '',
		spaceBottomClass: 'newsletterBottom30px',
		nameGapClass: 'newsletterBottom15px',
		hideLastBottomGap: true,
		gapPct: 1.54,
		containerInsetPct: 3.08,
		gapBetweenVertical: 'newsletterBottom25px',
		title: { color: palette.text },
		prices: {
			lowColor: palette.price,
			highColor: palette.price,
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
	bedsCategory(1, 'Wooden Beds', 'https://www.beliani.ch/beds/wooden-beds/', [614171, 447265, 521481, 820350], { alt: true }),

	// KARILA, NASSJO, ASAA, HRISEY
	bedsCategory(2, 'Sofa Beds', 'https://www.beliani.ch/sofas/sofa-beds/', [425806, 640419, 633379, 584445]),

	// DUKE, FITOU, AMBASSADOR, BONNAC
	bedsCategory(3, 'Single Beds', 'https://www.beliani.ch/beds/single-beds/', [657408, 410831, 109786, 467604], { alt: true, last: true }),
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
			translationsSpreadsheet: campaignTranslationsSheet,

			background: palette.page,
			color: palette.text,

			wrapper: types.WRAPPER,
			optimizeCss: true,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			TopImageTitle_data: TopImageTitle_data,
			intro: intro,
			Inside: Inside,
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
			timer: timer,
			TopImageTitle_data: TopImageTitle_data,
			intro: intro,
			Inside: Inside,
		},
	],
});
