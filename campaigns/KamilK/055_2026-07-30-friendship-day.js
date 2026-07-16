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

		tiles: {
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
