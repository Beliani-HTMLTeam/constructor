// Campaign generated from form
const campaignTranslationsSheet = '2026::01.10.26 - Autumn Dining Room';

const tableQueries = [
	{
		tableRange: '16:17',
		name: 'TopImageTitle',
	},
	{
		tableRange: '19',
		name: 'intro',
	},
	{
		tableRange: '20:23',
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
	// {
	// 	tableRange: '25:26',
	// 	name: 'condition',
	// },
	{
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 28.09.26 - Christmas shop is open',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-10-01' }),
	TopImageTitle_src: translateImage({ value: '20261001_01.png' }),

	TopImage_src: getImageUrl('20261001_Gif.gif', true),
	TopImage_href: translateLink({ value: 'content/lp26-10-01' }),

	Banner_1: translateLink({ value: 'content/lp26-09-24' }),
	Banner_1_Image: translateImage({ value: '20260924b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-23' }),
	Banner_2_Image: translateImage({ value: '20260923b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-09-28' }),

	Intro_cta_href: "https://www.beliani.pl/dining-room-furniture/",
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#FFF5F1',
	type: 'twoSameLines',
};

const TopImage_data = {
	container: "newsletterContainer"
}

const categories = [
	{
		name: 'Dining Tables',
		src: getImageUrl('20261001_Cat00.jpg', true),
		href: 'https://www.beliani.pl/dining-room-furniture/tables/',
		background: '#FFF5F1',
		color: '#000000',
		type: 'grid',
		tdClass: 'newsletterContainer',
		cta: true,
		paddingTop: '60',
		line: {
			show: false,
			insideContainer: true,
		},
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
			align: 'center',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
			align: 'center',
		},
		products: [
			// MERE
			{
				id: 609878,
				src: getImageUrl('20261001_Pic01.png', true),
			},
			// YARRA
			{
				id: 643547,
				src: getImageUrl('20261001_Pic02.png', true),
			},
			// SHERIDAN
			{
				id: 398740,
				src: getImageUrl('20261001_Pic03.png', true),
			},
			// SALVADOR
			{
				id: 200753,
				src: getImageUrl('20261001_Pic04.png', true),
			},
		],
	},
	{
		name: 'Chairs',
		src: getImageUrl('20261001_Cat10.jpg', true),
		href: 'https://www.beliani.pl/dining-room-furniture/chairs/',
		background: '#F6E7E6',
		color: '#000000',
		type: 'grid',
		tdClass: 'newsletterContainer',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
			align: 'center',
		},
		paragraph: {
			show: true,
			align: 'center',
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
			align: 'center',
		},
		products: [
			// AVA
			{
				id: 674950,
				src: getImageUrl('20261001_Pic11.png', true),
			},
			// JODAR
			{
				id: 569827,
				src: getImageUrl('20261001_Pic12.png', true),
			},
			// LYNN
			{
				id: 92127,
				src: getImageUrl('20261001_Pic13.png', true),
			},
			// ELAINE
			{
				id: 579726,
				src: getImageUrl('20261001_Pic14.png', true),
			},
		],
	},
	{
		name: 'Pendant lights',
		src: getImageUrl('20261001_Cat20.jpg', true),
		href: 'https://www.beliani.ch/lighting/pendant-lights/',
		background: '#FFF5F1',
		color: '#000000',
		type: 'grid',
		tdClass: 'newsletterContainer',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
			align: 'center',
		},
		line: {
			show: false,
			insideContainer: true,
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
			align: 'center',
		},
		products: [
			// NJORO
			{
				id: 681541,
				src: getImageUrl('20261001_Pic21.png', true),
			},
			// KHUTTI
			{
				id: 525941,
				src: getImageUrl('20261001_Pic22.png', true),
			},
			// MASCOTA
			{
				id: 642615,
				src: getImageUrl('20261001_Pic23.png', true),
			},
			// WOKIRO
			{
				id: 663748,
				// id: 704092,
				src: getImageUrl('20261001_Pic24.png', true),
			},
		],
	},
	{
		name: 'Tableware',
		src: getImageUrl('20261001_Cat30.jpg', true),
		href: 'https://www.beliani.pl/dining-room-furniture/kitchenware-tableware/',
		background: '#F6E7E6',
		color: '#000000',
		type: 'grid',
		tdClass: 'newsletterContainer',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
			align: 'center',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
			align: 'center',
		},
		products: [
			// HOPS
			{
				id: 721495,
				src: getImageUrl('20261001_Pic31.png', true),
			},
			// MARJORAM
			{
				id: 678018,
				src: getImageUrl('20261001_Pic32.png', true),
			},
			// TOCHIGI 
			{
				id: 672006,
				src: getImageUrl('20261001_Pic33.png', true),
			},
			// RIGATONI 
			{
				id: 452784,
				src: getImageUrl('20261001_Pic34.png', true),
			},
		],
	},
];

const timer = {
	freebies: getImageUrl('20261001free.png', true),
	deadline: '2026-10-04',
}

export default new entities.Campaign({
	startId: 48533,
	version: 'new',
	name: 'Autumn Dining Room',
	date: '01.10.2026',
	issueCardId: 534128,
	lpId: 32754,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/1cHW22ieu355WbuYVKWLNe/Newsletter-Autumn-Dining-Room---Thursday-2026.10.01--Copy-?node-id=8348-6596&t=iDrB1QlhmHjPB79q-1',
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
			TopImage_data: TopImage_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				container: 'newsletterContainer',
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
					phrase: 'Shop now First',
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				unitBackground: '#FFF5F1',
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
			TopImage_data: TopImage_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				container: 'newsletterContainer',
				color: '#000000', // unused
				backgroundColor: '#FFF5F1', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
					phrase: 'Shop now First',
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				unitBackground: '#FFF5F1',
				type: 'timer',
			},
		},
	],
});
