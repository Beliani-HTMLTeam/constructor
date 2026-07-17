// Campaign generated from form
const campaignTranslationsSheet = '2026::30.07.2026 - Friendship Day';

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
		tableRange: '20:21',
		name: 'condition',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-07-30' }),
	TopImageTitle_src: translateImage({ value: '20260730_01.png' }),

	TopImage_src: getImageUrl('20260730_Pic.jpg', true),
	TopImage_href: translateLink({ value: 'content/lp26-07-30' }),

	Banner_1: translateLink({ value: 'content/lp26-07-23' }),
	Banner_1_Image: translateImage({ value: '20260723b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-07-22' }),
	Banner_2_Image: translateImage({ value: '20260722b.png' }),

	Intro_cta_href: "https://beliani.ch/"
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#F9EFEE',
	type: 'twoSameLines',
};

const categories = [

	{
		name: 'Outdoor',
		href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture',
		src: getImageUrl('20260730_Cat00.jpg', true),
		paddingTop: '45',
		type: 'small-tiles',
		background: '#F9EFEE',
		color: '#000000',
		spaceAfter: 'newsletterBottom45px',

		cta: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},

		title: {
			show: true,
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},

		line: {
			insideContainer: true,
			show: true,
		},

		tiles: {
			padding: 10,
			background: '9f4d4d',
			text: 'ffffff',
			dimensions: '295x80',
			items: [
				{
					name: 'Lounge sets', // uzywane jako Alt, getCategoryTitle(name)
					href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/looks/', // link do kategorii -> getCategoryLink(href)
					// src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
				},
				{
					name: 'Dining sets',
					href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-dining-sets/',
				},
				{
					name: 'Outdoor Kitchen',
					href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/outdoor-kitchen/',
				},
				{
					name: 'Garden Accessories',
					href: 'https://www.beliani.ch/garden-furniture/garden-accessories/',
				},
			],
		},
	},

	{
		name: 'Living Room',
		href: 'https://www.beliani.ch/living-room-furniture',
		src: getImageUrl('20260730_Cat10.jpg', true),
		paddingTop: '45',
		type: 'small-tiles',
		background: '#F9EFEE',
		color: '#000000',
		spaceAfter: 'newsletterBottom45px',

		cta: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},

		title: {
			show: true,
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},

		line: {
			insideContainer: true,
			show: true,
		},

		tiles: {
			padding: 10,
			background: '9f4d4d',
			text: 'ffffff',
			dimensions: '295x80',
			items: [
				{
					name: 'Sofas', // uzywane jako Alt, getCategoryTitle(name)
					href: 'https://www.beliani.ch/living-room-furniture/sofas/', // link do kategorii -> getCategoryLink(href)
					// src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
				},
				{
					name: 'Armchairs',
					href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
				},
				{
					name: 'TV Stands',
					href: 'https://www.beliani.ch/storage/tv-stands/',
				},
				{
					name: 'Coffee tables',
					href: 'https://www.beliani.ch/tables/coffee-tables/',
				},
			],
		},
	},

	{
		name: 'Bedroom',
		href: 'https://www.beliani.ch/bedroom-furniture',
		src: getImageUrl('20260730_Cat20.jpg', true),
		paddingTop: '45',
		type: 'small-tiles',
		background: '#F9EFEE',
		color: '#000000',
		spaceAfter: 'newsletterBottom80px',

		cta: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},

		title: {
			show: true,
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},

		line: {
			insideContainer: true,
			show: true,
		},

		tiles: {
			padding: 10,
			background: '9f4d4d',
			text: 'ffffff',
			dimensions: '295x80',
			items: [
				{
					name: 'Beds', // uzywane jako Alt, getCategoryTitle(name)
					href: 'https://www.beliani.ch/bedroom-furniture/beds/', // link do kategorii -> getCategoryLink(href)
					// src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
				},
				{
					name: 'Mattresses',
					href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
				},
				{
					name: 'Sideboards',
					href: 'https://www.beliani.ch/bedroom-furniture/storage/sideboards/',
				},
				{
					name: 'Textiles',
					href: 'https://www.beliani.ch/bedroom-furniture/textiles/',
				},
			],
		},
	},

	{
		name: 'Dining Room',
		href: 'https://www.beliani.ch/dining-room-furniture',
		src: getImageUrl('20260730_Cat30.jpg', true),
		paddingTop: '45',
		type: 'small-tiles',
		background: '#F9EFEE',
		color: '#000000',
		spaceAfter: 'newsletterBottom80px',

		cta: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},

		title: {
			show: true,
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},

		line: {
			show: true,
			insideContainer: true,
		},

		tiles: {
			padding: 10,
			background: '9f4d4d',
			text: 'ffffff',
			dimensions: '295x80',
			items: [
				{
					name: 'Tables', // uzywane jako Alt, getCategoryTitle(name)
					href: 'https://www.beliani.ch/dining-room-furniture/tables/', // link do kategorii -> getCategoryLink(href)
					// src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
				},
				{
					name: 'Chairs',
					href: 'https://www.beliani.ch/dining-room-furniture/chairs/',
				},
				{
					name: 'Tableware',
					href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/',
				},
				{
					name: 'Lighting',
					href: 'https://www.beliani.ch/dining-room-furniture/lighting/',
				},
			],
		},
	},

	{
		name: 'Bathroom',
		href: 'https://www.beliani.ch/bathroom-furniture',
		src: getImageUrl('20260730_Cat40.jpg', true),
		paddingTop: '45',
		type: 'small-tiles',
		background: '#F9EFEE',
		color: '#000000',
		spaceAfter: 'newsletterBottom80px',

		cta: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},

		title: {
			show: true,
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},

		line: {
			insideContainer: true,
			show: true,
		},

		tiles: {
			padding: 10,
			background: '9f4d4d',
			text: 'ffffff',
			dimensions: '295x80',
			items: [
				{
					name: 'Baths', // uzywane jako Alt, getCategoryTitle(name)
					href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/', // link do kategorii -> getCategoryLink(href)
					// src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
				},
				{
					name: 'Basins and Accessories',
					href: 'https://www.beliani.ch/bathroom-furniture/basins/',
				},
				{
					name: 'Mirrors',
					href: 'https://www.beliani.ch/bathroom-furniture/mirrors/',
				},
				{
					name: 'Storage',
					href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
				},
			],
		},
	},

	{
		name: "Kids Room",
		href: 'https://www.beliani.ch/children-room',
		src: getImageUrl('20260730_Cat50.jpg', true),
		paddingTop: '45',
		type: 'small-tiles',
		background: '#F9EFEE',
		color: '#000000',
		spaceAfter: 'newsletterBottom80px',

		cta: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},

		title: {
			show: true,
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},

		// line: {
		// 	show: true,
		// },

		tiles: {
			padding: 10,
			background: '9f4d4d',
			text: 'ffffff',
			dimensions: '295x80',
			items: [
				{
					name: 'Beds', // uzywane jako Alt, getCategoryTitle(name)
					href: 'https://www.beliani.ch/children-room/kids-beds/', // link do kategorii -> getCategoryLink(href)
					// src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
				},
				{
					name: 'Kids Chairs and tables',
					href: 'https://www.beliani.ch/children-room/kids-chairs/',
				},
				{
					name: 'Storage',
					href: 'https://www.beliani.ch/children-room/kids-storage/',
				},
				{
					name: 'Kids Decor',
					href: 'https://www.beliani.ch/children-room/kids-decor/',
				},
			],
		},
	},
];

export default new entities.Campaign({
	startId: '46392',
	name: 'Friendship Day',
	date: '30.07.2026',
	issueCardId: '509119',
	lpId: '31496',
	alarm: {
		isActive: false,
	},
	version: 'new',
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/WQCDdCHZVPJLKcMH6emyKc/',
	templates: [
		{
			background: '#F9EFEE',
			color: '#000000',
			template: templates.Thursday, // User should change this

			intro: {
				color: '#000000', // unused
				backgroundColor: '#F9EFEE', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			css: types.CSS.NS,
			name: 'Newsletter',
			type: types.NEWSLETTER,
			translationsSpreadsheet: campaignTranslationsSheet,
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
		},
		{
			background: '#F9EFEE',
			color: '#000000',
			template: templates.Thursday, // User should change this

			intro: {
				color: '#000000', // unused
				backgroundColor: '#F9EFEE', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			css: types.CSS.LP,
			name: 'Landing',
			type: types.LANDINGPAGE,
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
		},
	],
});
