// Campaign generated from form
const campaignTranslationsSheet = '2026::06.08.2026 - Storage and shelving';

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
		tableRange: '25:28',
		name: 'paragraphs',
	},
	{
		tableRange: '21:24',
		name: 'categories',
	},
	// {
	//   tableRange: '23:26',
	//   name: 'categoryLinks',
	// },
	{
		tableRange: '29:30',
		name: 'condition',
	},
	{
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 04.08.26 - Free Mirror',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-08-06' }),
	TopImageTitle_src: translateImage({ value: '20260806_01.png' }),

	TopImage_src: getImageUrl('20260806_Gif.gif', true),
	TopImage_href: translateLink({ value: 'content/lp26-08-06' }),

	Banner_1: translateLink({ value: 'content/lp26-07-23' }),
	Banner_1_Image: translateImage({ value: '20260723b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-07-22' }),
	Banner_2_Image: translateImage({ value: '20260722b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-08-04' }),

	Intro_cta_href: "https://www.beliani.ch/living-room-furniture/storage/",
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#FFF5F1',
	type: 'twoSameLines',
};

const categories = [
	{
		name: 'Sideboards & Chest of Drawers',
		src: getImageUrl('20260806_Cat00.jpg', true),
		href: 'https://www.beliani.ch/living-room-furniture/storage/sideboards/',
		background: '#FFF5F1',
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
			// BRADLEY
			{
				id: 644073,
				src: getImageUrl('20260806_Pic01.png', true),
			},
			// SELAH 
			{
				id: 553747,
				src: getImageUrl('20260806_Pic02.png', true),
			},
			// TIFTON 
			{
				id: 170610,
				src: getImageUrl('20260806_Pic03.png', true),
			},
			// OMBURA
			{
				id: 813656,
				src: getImageUrl('20260806_Pic04.png', true),
			},
		],
	},
	{
		name: 'TV Stands',
		src: getImageUrl('20260806_Cat10.jpg', true),
		href: 'https://www.beliani.ch/living-room-furniture/storage/tv-stands/',
		background: '#F6E7E6',
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
			// SYDNEY 
			{
				id: 161053,
				src: getImageUrl('20260806_Pic11.png', true),
			},
			// TAROON 
			{
				id: 601965,
				src: getImageUrl('20260806_Pic12.png', true),
			},
			// GLADSTONE
			{
				id: 607916,
				src: getImageUrl('20260806_Pic13.png', true),
			},
			// BRADLEY 
			{
				id: 448683,
				src: getImageUrl('20260806_Pic14.png', true),
			},
		],
	},
	{
		name: 'Bookcases & Shelving units',
		src: getImageUrl('20260806_Cat20.jpg', true),
		href: 'https://www.beliani.ch/living-room-furniture/storage/bookcases-and-shelves/',
		background: '#FFF5F1',
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
			// ZEHNA 
			{
				id: 686444,
				src: getImageUrl('20260806_Pic21.png', true),
			},
			// CHATEH
			{
				id: 646021,
				src: getImageUrl('20260806_Pic22.png', true),
			},
			// SALTON 
			{
				id: 562633,
				src: getImageUrl('20260806_Pic23.png', true),
			},
			// BRISBANE
			{
				id: 180714,
				// id: 704092,
				src: getImageUrl('20260806_Pic24.png', true),
			},
		],
	},
	{
		name: 'Display cabinets',
		src: getImageUrl('20260806_Cat30.jpg', true),
		href: 'https://www.beliani.ch/living-room-furniture/storage/display-cabinets/',
		background: '#F6E7E6',
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
			// TINGLEDALE 
			{
				id: 576320,
				src: getImageUrl('20260806_Pic31.png', true),
			},
			// GLENWOOD 
			{
				id: 639619,
				src: getImageUrl('20260806_Pic32.png', true),
			},
			// RUMSON 
			{
				id: 494633,
				src: getImageUrl('20260806_Pic33.png', true),
			},
			// NEWPORT 
			{
				id: 448004,
				src: getImageUrl('20260806_Pic34.png', true),
			},
		],
	},
];

const timer = {
	freebies: getImageUrl('20260806free.png', true),
	deadline: '2026-08-09',
}

export default new entities.Campaign({
	startId: 46602,
	version: 'new',
	name: 'Storage and shelving',
	date: '06.08.2026',
	issueCardId: 511329,
	lpId: 31639,
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
			background: '#FFF5F1',
			color: '#000000',
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				unitBackground: '#E3CCCC',
				type: 'timer',
			},
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday, // User should change this
			css: types.CSS.LP,
			background: '#FFF5F1',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				unitBackground: '#E3CCCC',
				type: 'timer',
			},
		},
	],
});
