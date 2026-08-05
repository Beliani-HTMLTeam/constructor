// Campaign generated from form
const campaignTranslationsSheet = '2026::20.08.26 - Prepare outdoor for colder nights';

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
		tableRange: '21:24',
		name: 'paragraphs',
	},
	// {
	// 	tableRange: '21:24',
	// 	name: 'categories',
	// },
	// {
	//   tableRange: '23:26',
	//   name: 'categoryLinks',
	// },
	{
		tableRange: '25:26',
		name: 'condition',
	},
	{
		tableRange: '13:14',
		name: 'timer',
		tableName: '2026::03.08.26 - August Peak Start',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-08-20' }),
	TopImageTitle_src: translateImage({ value: '20260820_01.png' }),

	TopImage_src: getImageUrl('20260820_Pic.jpg', true),
	TopImage_href: translateLink({ value: 'content/lp26-08-20' }),

	Banner_1: translateLink({ value: 'content/lp26-08-13' }),
	Banner_1_Image: translateImage({ value: '20260813b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-08-12' }),
	Banner_2_Image: translateImage({ value: '20260812b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-08-21' }),

	Intro_cta_href: "https://www.beliani.ch/garden-furniture/",
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#FFD9C9',
	type: 'twoSameLines',
};

const categories = [
	{
		name: 'Fire pits',
		src: getImageUrl('20260820_Cat00.jpg', true),
		href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
		background: '#FFD9C9',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: '35',
		line: {
			show: false,
			insideContainer: true,
		},
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
		},
		products: [
			// KELUD
			{
				id: 85075,
				src: getImageUrl('20260820_Pic01.png', true),
			},
			// SHIGA
			{
				id: 86997,
				src: getImageUrl('20260820_Pic02.png', true),
			},
			// TANARA
			{
				id: 197909,
				src: getImageUrl('20260820_Pic03.png', true),
			},
			// HEKLA
			{
				id: 584867,
				src: getImageUrl('20260820_Pic04.png', true),
			},
		],
	},
	{
		name: 'Patio heaters',
		src: getImageUrl('20260820_Cat10.jpg', true),
		href: 'https://www.beliani.ch/garden-accessories/patio-heaters/',
		background: '#FFD9C9',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		line: {
			show: false,
			insideContainer: true,
		},
		product: {
			prices: true,
			name: true,
		},
		products: [
			// ASKJA
			{
				id: 300801,
				src: getImageUrl('20260820_Pic11.png', true),
			},
			// SANGAY
			{
				id: 300799,
				src: getImageUrl('20260820_Pic12.png', true),
			},
			// LLAIMA
			{
				id: 600561,
				src: getImageUrl('20260820_Pic13.png', true),
			},
			// STROMBOLI
			{
				id: 29418,
				src: getImageUrl('20260820_Pic14.png', true),
			},
		],
	},
	{
		name: 'Outdoor lighting',
		src: getImageUrl('20260820_Cat20.jpg', true),
		href: 'https://www.beliani.ch/garden-furniture/garden-lighting/',
		background: '#FFD9C9',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		line: {
			show: false,
			insideContainer: true,
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
		},
		products: [
			// AWUNA
			{
				id: 500615,
				src: getImageUrl('20260820_Pic21.png', true),
			},
			// HEZIR
			{
				id: 619872,
				src: getImageUrl('20260820_Pic22.png', true),
			},
			// BESOS
			{
				id: 561075,
				src: getImageUrl('20260820_Pic23.png', true),
			},
			// LIZANDRO
			{
				id: 559208,
				// id: 704092,
				src: getImageUrl('20260820_Pic24.png', true),
			},
		],
	},
	{
		name: 'Blankets',
		src: getImageUrl('20260820_Cat30.jpg', true),
		href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
		background: '#FFD9C9',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
		},
		products: [
			// CHAGYL 
			{
				id: 503210,
				src: getImageUrl('20260820_Pic31.png', true),
			},
			// NAIKHU
			{
				id: 338398,
				src: getImageUrl('20260820_Pic32.png', true),
			},
			// YUVALI
			{
				id: 395580,
				src: getImageUrl('20260820_Pic33.png', true),
			},
			// CHAAB 
			{
				id: 211877,
				src: getImageUrl('20260820_Pic34.png', true),
			},
		],
	},
];

const timer = {
	// freebies: getImageUrl('20260806free.png', true),
	deadline: '2026-08-23',
}

export default new entities.Campaign({
	startId: 46929,
	version: 'new',
	name: 'Prepare outdoor for colder nights',
	date: '20.08.2026',
	issueCardId: 519001,
	lpId: 31838,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/YJr2dzIyKMTZryTvMybFO7/',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday, // User should change this
			css: types.CSS.NS,
			translationsSpreadsheet: campaignTranslationsSheet,
			background: '#FFD9C9',
			color: '#000000',
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFD9C9', // unused
				alignment: 'left',
				type: 'paragraph',
				position: 'afterTimer',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				spaceBefore: 'newsletterBottom35px',
				color: '#ffffff',
				backgroundColor: '#FF2F00',
				unitBackground: '#FF9780',
				type: 'timer',
			},
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday, // User should change this
			css: types.CSS.LP,
			background: '#FFD9C9',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFD9C9', // unused
				alignment: 'left',
				type: 'paragraph',
				position: 'afterTimer',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				spaceBefore: 'newsletterBottom35px',
				color: '#ffffff',
				backgroundColor: '#FF2F00',
				unitBackground: '#FF9780',
				type: 'timer',
			},
		},
	],
});
