// Campaign generated from form
const campaignTranslationsSheet = '2026::17.09.26 - Lighting';

const tableQueries = [
	{
		tableRange: '17',
		name: 'TopImageTitle',
	},
	{
		tableRange: '19',
		name: 'intro',
	},
	{
		tableRange: '20:27',
		name: 'categories',
	},
	{
		tableRange: '28:34',
		name: 'paragraphs',
	},
	{
		tableRange: '35:36',
		name: 'condition',
	},
	{
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 14.09.26 - Free Vase - Tables',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-09-17' }),
	TopImageTitle_src: translateImage({ value: '20260917_01.png' }),

	TopImage_src: getImageUrl('20260917_Gif.gif', true),
	TopImage_href: translateLink({ value: 'content/lp26-09-17' }),

	Timer_href: translateLink({ value: 'content/lp26-09-14' }),

	Intro_cta_href: "https://www.beliani.ch/lighting/",

	Banner_1: translateLink({ value: 'content/lp26-09-11' }),
	Banner_1_Image: translateImage({ value: '20260911b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-10' }),
	Banner_2_Image: translateImage({ value: '20260910b.png' }),
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#FEC273',
	type: 'singleLine',
};

const categories = [
	// PENDANT LAMPS
	{
		name: 'Pendant Lamps',
		href: 'https://www.beliani.ch/lighting/pendant-lights/',
		background: '#FEC273',
		color: '#000000',
		type: '1big-3vertical',
		gapBetweenHorizontal: false,
		imageSide: 'right', // Wymuszamy obrazek z prawej
		cta: false,
		paddingTop: '60',
		spaceAfter: 0,
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: false,
			prices: true,
			name: true,
		},
		products: [
			{
				src: getImageUrl('20260917_Pic00.gif', true),
				name: 'BELESSA', // Wpisz tu ID lub nazwę by pobrało cenę
				id: 664204,
			},
			{ src: getImageUrl('20260917_Pic01.png', true), id: 664204 },
			{ src: getImageUrl('20260917_Pic02.png', true), id: 664204 },
			{ src: getImageUrl('20260917_Pic03.png', true), id: 664204 },
		],
	},
	{
		name: 'Pendant Lamps',
		href: 'https://www.beliani.ch/lighting/pendant-lights/',
		background: '#FEC273', // Tło pod sekcją z produktami
		color: '#000000',
		type: '3prods',
		cta: {
			variant: 'text',
		},
		paddingTop: '0',
		spaceAfter: 'newsletterBottom80px',
		title: {
			show: false,
		},
		paragraph: {
			show: false,
		},
		product: {
			align: 'center',
			prices: true,
			name: true,
		},
		products: [
			{ id: 398081, src: getImageUrl('20260917_Pic04.png', true) }, // MANDAI
			{ id: 458981, src: getImageUrl('20260917_Pic05.png', true) }, // MASCOTA
			{ id: 494667, src: getImageUrl('20260917_Pic06.png', true) }, // BIRAU
		],
	},

	// FLOOR LAMPS
	{
		name: 'Floor Lamps',
		href: 'https://www.beliani.ch/lighting/floor-lamps/',
		background: '#FCF7F6',
		color: '#000000',
		type: '1big-3vertical',
		gapBetweenHorizontal: false,
		imageSide: 'right',
		cta: false,
		paddingTop: '60',
		spaceAfter: 0,
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: false,
			prices: true,
			name: true,
		},
		products: [
			{
				src: getImageUrl('20260917_Pic10.gif', true),
				name: 'ILALA',
				id: 664623,
			},
			{
				src: getImageUrl('20260917_Pic11.png', true),
				id: 664623
			},
			{
				src: getImageUrl('20260917_Pic12.png', true),
				id: 664623
			},
			{
				src: getImageUrl('20260917_Pic13.png', true),
				id: 664623
			},
		],
	},
	{
		name: 'Floor Lamps',
		href: 'https://www.beliani.ch/lighting/floor-lamps/',
		background: '#FCF7F6',
		color: '#000000',
		type: '3prods',
		cta: {
			variant: 'text',
		},
		paddingTop: '0',
		spaceAfter: 'newsletterBottom80px',
		title: {
			show: false,
		},
		paragraph: {
			show: false,
		},
		product: {
			align: 'center',
			prices: true,
			name: true,
		},
		products: [
			{ id: 642576, src: getImageUrl('20260917_Pic14.png', true) },
			{ id: 597039, src: getImageUrl('20260917_Pic15.png', true) },
			{ id: 638204, src: getImageUrl('20260917_Pic16.png', true) },
		],
	},

	// TABLE LAMPS
	{
		name: 'Table & Bedside Lamps',
		href: 'https://www.beliani.ch/lighting/table-lamps/',
		background: '#FEC273',
		color: '#000000',
		type: '1big-3vertical',
		gapBetweenHorizontal: false,
		imageSide: 'right',
		cta: false,
		paddingTop: '60',
		spaceAfter: 0,
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: false,
			prices: true,
			name: true,
		},
		products: [
			{
				src: getImageUrl('20260917_Pic20.gif', true),
				name: 'SOBRAMATI',
				id: 620067,
			},
			{
				src: getImageUrl('20260917_Pic21.png', true),
				id: 620067
			},
			{
				src: getImageUrl('20260917_Pic22.png', true),
				id: 620067
			},
			{
				src: getImageUrl('20260917_Pic23.png', true),
				id: 620067
			},
		],
	},
	{
		name: 'Table & Bedside Lamps',
		href: 'https://www.beliani.ch/lighting/table-lamps/',
		background: '#FEC273',
		color: '#000000',
		type: '3prods',
		cta: {
			variant: 'text',
		},
		paddingTop: '0',
		spaceAfter: 'newsletterBottom80px',
		title: {
			show: false,
		},
		paragraph: {
			show: false,
		},
		product: {
			align: 'center',
			prices: true,
			name: true,
		},
		products: [
			{ id: 318594, src: getImageUrl('20260917_Pic24.png', true) }, // FERGUS
			{ id: 675195, src: getImageUrl('20260917_Pic25.png', true) }, // LOKY
			{ id: 583644, src: getImageUrl('20260917_Pic26.png', true) }, // BOCONO
		],
	},

	// WALL LAMPS
	{
		name: 'Wall Lamps',
		href: 'https://www.beliani.ch/lighting/wall-lamps/',
		background: '#FCF7F6',
		color: '#000000',
		type: '1big-3vertical',
		gapBetweenHorizontal: false,
		imageSide: 'right',
		cta: false,
		paddingTop: '60',
		spaceAfter: 0,
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'left',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: false,
			prices: true,
			name: true,
		},
		products: [
			{
				src: getImageUrl('20260917_Pic30.gif', true),
				name: 'ANADYR',
				id: 565507,
			},
			{
				src: getImageUrl('20260917_Pic31.png', true),
				id: 565507
			},
			{
				src: getImageUrl('20260917_Pic32.png', true),
				id: 565507
			},
			{
				src: getImageUrl('20260917_Pic33.png', true),
				id: 565507
			},
		],
	},
	{
		name: 'Wall Lamps',
		href: 'https://www.beliani.ch/lighting/wall-lamps/',
		background: '#FCF7F6',
		color: '#000000',
		type: '3prods',
		cta: {
			variant: 'text',
		},
		paddingTop: '0',
		spaceAfter: 'newsletterBottom80px',
		title: {
			show: false,
		},
		paragraph: {
			show: false,
		},
		product: {
			align: 'center',
			prices: true,
			name: true,
		},
		products: [
			{ id: 447915, src: getImageUrl('20260917_Pic34.png', true) }, // SHINFA
			{ id: 623515, src: getImageUrl('20260917_Pic35.png', true) }, // VARDI
			{ id: 406241, src: getImageUrl('20260917_Pic36.png', true) }, // YANGO
		],
	},
];

const timer = {
	freebies: getImageUrl('20260917free.png', true),
	deadline: '2026-09-17',
}

export default new entities.Campaign({
	startId: 47765,
	version: 'new',
	name: 'Lighting',
	date: '17.09.2026',
	issueCardId: 527627,
	lpId: 32316,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/3CYXHfshdrQaT2RmlNpwYt/2026.09.17---Newsletter-Lighting--Copy-?node-id=10018-667&t=YuhXWcJwzqLLnqu6-1',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday,
			css: types.CSS.NS,
			translationsSpreadsheet: campaignTranslationsSheet,
			background: '#FEC273',
			color: '#000000',
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000',
				backgroundColor: '#FEC273',
				alignment: 'left',
				type: 'paragraph',
				spaceBottom: 'newsletterBottom20px',
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
			template: templates.Thursday,
			css: types.CSS.LP,
			background: '#FEC273',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000',
				backgroundColor: '#FEC273',
				alignment: 'left',
				type: 'paragraph',
				spaceBottom: 'newsletterBottom20px',
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
