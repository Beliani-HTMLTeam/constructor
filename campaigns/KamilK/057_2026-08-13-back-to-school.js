// Campaign generated from form
const campaignTranslationsSheet = '2026::13.08.26 - Back to school';

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
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 11.08.26 - Free kids wall decor',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-08-13' }),
	TopImageTitle_src: translateImage({ value: '20260813_01.png' }),

	TopImage_src: getImageUrl('20260813_Gif.gif', true),
	TopImage_href: translateLink({ value: 'content/lp26-08-13' }),

	Banner_1: translateLink({ value: 'content/lp26-08-07' }),
	Banner_1_Image: translateImage({ value: '20260807b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-08-05' }),
	Banner_2_Image: translateImage({ value: '20260805b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-08-11' }),

	Intro_cta_href: "https://www.beliani.ch/office-furniture/",
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#FFE9CC',
	type: 'twoSameLines',
};

const categories = [
	{
		name: 'Desks',
		src: getImageUrl('20260813_Cat00.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/desks/',
		background: '#FFE9CC',
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
			// WILBANKS
			{
				id: 682477,
				src: getImageUrl('20260813_Pic01.png', true),
			},
			// DESTINES 
			{
				id: 444466,
				src: getImageUrl('20260813_Pic02.png', true),
			},
			// THESLAY 
			{
				id: 729165,
				src: getImageUrl('20260813_Pic03.png', true),
			},
			// ALVAR 
			{
				id: 729260,
				src: getImageUrl('20260813_Pic04.png', true),
			},
		],
	},
	{
		name: 'Office Chairs',
		src: getImageUrl('20260813_Cat10.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/office-chairs/',
		background: '#913333',
		color: '#ffffff',
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
			// EATON 
			{
				id: 655662,
				src: getImageUrl('20260813_Pic11.png', true),
			},
			// DELIGHT 
			{
				id: 803047,
				src: getImageUrl('20260813_Pic12.png', true),
			},
			// BELMAR 
			{
				id: 649156,
				src: getImageUrl('20260813_Pic13.png', true),
			},
			// IGNIS
			{
				id: 734893,
				src: getImageUrl('20260813_Pic14.png', true),
			},
		],
	},
	{
		name: 'Storage',
		src: getImageUrl('20260813_Cat20.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/storage-units-and-cabinets/',
		background: '#FFE9CC',
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
			// RAKAIA 
			{
				id: 691414,
				src: getImageUrl('20260813_Pic21.png', true),
			},
			// LERRYN 
			{
				id: 729412,
				src: getImageUrl('20260813_Pic22.png', true),
			},
			// ZEHNA
			{
				id: 424990,
				src: getImageUrl('20260813_Pic23.png', true),
			},
			// ZEHNA 
			{
				id: 686463,
				// id: 704092,
				src: getImageUrl('20260813_Pic24.png', true),
			},
		],
	},
	{
		name: 'Lighting',
		src: getImageUrl('20260813_Cat30.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/office-lamps/',
		background: '#913333',
		color: '#ffffff',
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
			// CANOPUS 
			{
				id: 668569,
				src: getImageUrl('20260813_Pic31.png', true),
			},
			// VELA 
			{
				id: 664262,
				src: getImageUrl('20260813_Pic32.png', true),
			},
			// CYGNUS 
			{
				id: 380833,
				src: getImageUrl('20260813_Pic33.png', true),
			},
			// RIMAVA 
			{
				id: 374723,
				src: getImageUrl('20260813_Pic34.png', true),
			},
		],
	},
];

const timer = {
	freebies: getImageUrl('20260813free.png', true),
	deadline: '2026-08-16',
}

export default new entities.Campaign({
	startId: 46636,
	version: 'new',
	name: 'Back to School',
	date: '13.08.2026',
	issueCardId: 516619,
	lpId: 31662,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/pDoMjQ31ugTvI23yXBKmVc/',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday, // User should change this
			css: types.CSS.NS,
			translationsSpreadsheet: campaignTranslationsSheet,
			background: '#FFE9CC',
			color: '#000000',
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFE9CC', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#FD9000',
				unitBackground: '#FECD8C',
				type: 'timer',
			},
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday, // User should change this
			css: types.CSS.LP,
			background: '#FFE9CC',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFE9CC', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#FD9000',
				unitBackground: '#FECD8C',
				type: 'timer',
			},
		},
	],
});
