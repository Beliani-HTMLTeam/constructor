// Campaign generated from form
const campaignTranslationsSheet = '2026::10.09.26 - Earthy Tones Palette';

const tableQueries = [
	// {
	// 	tableRange: '17:18',
	// 	name: 'TopImageTitle',
	// },
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
		tableName: '2026::Voucher - 07.09.26 - Free Outdoor lamp',
	},
];

const links = {
	// TopImageTitle_href: translateLink({ value: 'content/lp26-09-10' }),
	// TopImageTitle_src: translateImage({ value: '20260910_01.png' }),

	TopImage_src: translateImage({ value: '20260910_Gif.gif' }),
	TopImage_href: translateLink({ value: 'content/lp26-09-10' }),

	Banner_1: translateLink({ value: 'content/lp26-09-04-ta' }),
	Banner_1_Image: translateImage({ value: '20260904b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-03' }),
	Banner_2_Image: translateImage({ value: '20260903b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-09-07' }),

	Intro_cta_href: "https://www.beliani.ch/trends/earthy-tones/",
};

// const TopImageTitle_data = {
// 	color: '#000000',
// 	backgroundColor: '#F2E6E6',
// 	type: 'twoSameLines',
// };

const categories = [
	{
		name: 'Sofas',
		src: getImageUrl('20260910_Cat00.jpg', true),
		href: 'https://www.beliani.ch/living-room-furniture/sofas/',
		background: '#F2E6E6',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: '60',
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
			// ETTRUM
			{
				id: 829282,
				src: getImageUrl('20260910_Pic01.png', true),
			},
			// OSBY
			{
				id: 518552,
				src: getImageUrl('20260910_Pic02.png', true),
			},
			// KOGE
			{
				id: 818584,
				src: getImageUrl('20260910_Pic03.png', true),
			},
			// ARTHEZE 
			{
				id: 520065,
				src: getImageUrl('20260910_Pic04.png', true),
			},
		],
	},
	{
		name: 'Armchairs',
		src: getImageUrl('20260910_Cat10.jpg', true),
		href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
		background: '#FFF9F2',
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
			// SKARA
			{
				id: 822452,
				src: getImageUrl('20260910_Pic11.png', true),
			},
			// RATTVIK
			{
				id: 725743,
				src: getImageUrl('20260910_Pic12.png', true),
			},
			// LOHJA
			{
				id: 811613,
				src: getImageUrl('20260910_Pic13.png', true),
			},
			// SKEI 
			{
				id: 678878,
				src: getImageUrl('20260910_Pic14.png', true),
			},
		],
	},
	{
		name: 'Beds',
		src: getImageUrl('20260910_Cat20.jpg', true),
		href: 'https://www.beliani.ch/bedroom-furniture/beds/',
		background: '#F2E6E6',
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
			//  VAUVERT
			{
				id: 820394,
				src: getImageUrl('20260910_Pic21.png', true),
			},
			// VINAY
			{
				id: 416811,
				src: getImageUrl('20260910_Pic22.png', true),
			},
			// ZEN
			{
				id: 810710,
				src: getImageUrl('20260910_Pic23.png', true),
			},
			// BAYEL
			{
				id: 713875,
				// id: 704092,
				src: getImageUrl('20260910_Pic24.png', true),
			},
		],
	},
	{
		name: 'Accessories',
		src: getImageUrl('20260910_Cat30.jpg', true),
		href: 'https://www.beliani.ch/home-accessories/',
		background: '#FFF9F2',
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
			// CATALPA
			{
				id: 358007,
				src: getImageUrl('20260910_Pic31.png', true),
			},
			// DELVIN
			{
				id: 733706,
				src: getImageUrl('20260910_Pic32.png', true),
			},
			// KOZANI
			{
				id: 363119,
				src: getImageUrl('20260910_Pic33.png', true),
			},
			// SILOPI
			{
				id: 353733,
				src: getImageUrl('20260910_Pic34.png', true),
			},
		],
	},
];

const timer = {
	freebies: getImageUrl('20260910free.png', true),
	deadline: '2026-09-13',
}

export default new entities.Campaign({
	startId: 47604,
	version: 'new',
	name: 'Earthy Tones Palette',
	date: '10.09.2026',
	issueCardId: 526056,
	lpId: 32211,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/5VbSsi3Nil4TxhlbrDL4OQ/',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday, // User should change this
			css: types.CSS.NS,
			translationsSpreadsheet: campaignTranslationsSheet,
			background: '#F2E6E6',
			color: '#000000',
			wrapper: types.WRAPPER,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#F2E6E6', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#FFCCB7',
				unitBackground: '#FFE6DB',
				type: 'timer',
			},
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday, // User should change this
			css: types.CSS.LP,
			background: '#F2E6E6',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#F2E6E6', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#FFCCB7',
				unitBackground: '#FFE6DB',
				type: 'timer',
			},
		},
	],
});
