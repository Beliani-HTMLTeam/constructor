// Campaign generated from form
const campaignTranslationsSheet = '2026::02.07.26 - Summer Dining';

const tableQueries = [
	{
		tableRange: '17:18',
		name: 'TopImageTitle',
	},
	{
		tableRange: '15:16',
		tableName: "Voucher - 24.06.26 - Cashback Midsommar",
		name: 'timer',
	},
	{
		tableRange: '20',
		name: 'intro'
	},
	{
		tableRange: '29:30',
		name: 'condition',
	},
	{
		tableRange: '25:28',
		name: 'paragraphs',
	},
	{
		tableRange: '21:24',
		name: 'categories',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-07-02' }),
	TopImageTitle_src: translateImage({ value: '20260702_01.png' }),

	TopImage_src: getImageUrl('20260702topgif.gif', true),
	TopImage_href: translateLink({ value: 'content/lp26-07-02' }),

	Timer_href: translateLink({ value: 'content/lp26-06-24' }),


	Banner_1: translateLink({ value: 'content/lp26-06-25' }),
	Banner_1_Image: translateImage({ value: '20260625b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-06-24' }),
	Banner_2_Image: translateImage({ value: '20260624b.png' }),
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#F6E7E6',
	type: 'twoSameLines',
};

const categories = [
	{
		imageSide: 'left',
		// name: 'Outdoor Dining',
		align: "center",
		background: '#F6E7E6',
		color: '#000000',
		cta: { show: true, spaceBefore: 'newsletterBottom35px' },
		src: getImageUrl('20260702_Cat00.png', true),
		src1: getImageUrl('20260702Category1a.png', true),
		src2: getImageUrl('20260702Category1b.png', true),
		src3: getImageUrl('20260702Category1c.png', true),
		href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
		type: 'unique', // make it by hand (of from old constructor)
		title: {
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			position: 'beforeImg',
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px'
		},
		products: [
			{
				id: 733252,
				src: getImageUrl('20260702Category11.png', true),
			},
			{
				id: 511457,
				src: getImageUrl('20260702Category12.png', true),
			},
			{
				id: 730155,
				src: getImageUrl('20260702Category13.png', true),
			},
		],
	},
	{
		imageSide: 'left',
		name: 'Outdoor Kitchen',
		align: "center",
		background: '#FD9000',
		color: '#000000',
		cta: { show: true, spaceBefore: 'newsletterBottom35px' },
		src: getImageUrl('20260702_Cat10.png', true),
		src1: getImageUrl('20260702Category2a.png', true),
		src2: getImageUrl('20260702Category2b.png', true),
		src3: getImageUrl('20260702Category2c.png', true),
		href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
		type: 'unique', // make it by hand (of from old constructor)
		title: {
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			position: 'beforeImg',
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px'
		},
		products: [
			{
				id: 603545,
				src: getImageUrl('20260702Category21.png', true),
			},
			{
				id: 600799,
				src: getImageUrl('20260702Category22.png', true),
			},
			{
				id: 610682,
				src: getImageUrl('20260702Category23.png', true),
			},
		],
	},
	{
		imageSide: 'left',
		// name: 'Indoor Dining',
		align: "center",
		background: '#F6E7E6',
		color: '#000000',
		cta: { show: true, spaceBefore: 'newsletterBottom35px' },
		src: getImageUrl('20260702_Cat20.png', true),
		src1: getImageUrl('20260702Category3a.png', true),
		src2: getImageUrl('20260702Category3b.png', true),
		src3: getImageUrl('20260702Category3c.png', true),
		href: 'https://www.beliani.ch/dining-room-furniture/',
		type: 'unique', // make it by hand (of from old constructor)
		title: {
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			position: 'beforeImg',
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px'
		},
		products: [
			{
				id: 728956,
				src: getImageUrl('20260702Category31.png', true),
			},
			{
				id: 807009,
				src: getImageUrl('20260702Category32.png', true),
			},
			{
				id: 624238,
				src: getImageUrl('20260702Category33.png', true),
			},
		],
	},
	{
		imageSide: 'left',
		name: 'Tableware',
		align: "center",
		background: '#FD9000',
		color: '#000000',
		cta: { show: true, spaceBefore: 'newsletterBottom35px' },
		src: getImageUrl('20260702_Cat30.png', true),
		src1: getImageUrl('20260702Category4a.png', true),
		src2: getImageUrl('20260702Category4b.png', true),
		src3: getImageUrl('20260702Category4c.png', true),
		href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/',
		type: 'unique', // make it by hand (of from old constructor)
		title: {
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			position: 'beforeImg',
			show: true,
			align: "center",
			spaceAfter: 'newsletterBottom35px'
		},
		products: [
			{
				id: 802607,
				src: getImageUrl('20260702Category41.png', true),
			},
			{
				id: 721952,
				src: getImageUrl('20260702Category42.png', true),
			},
			{
				id: 690859,
				src: getImageUrl('20260702Category43.png', true),
			},
		],
	},
];

const timer = {
	background: '#FD9000',
	color: '#000000',
	image: {
		"UK": "https://gen.sendtric.com/countdown/00zjuwxm36",
		"PL": "https://gen.sendtric.com/countdown/aqwef3jdu2",
		"DE": "https://gen.sendtric.com/countdown/2h7kgqi5cv",
		"AT": "https://gen.sendtric.com/countdown/i3f0eoxrt1",
		"CHDE": "https://gen.sendtric.com/countdown/5mudh0ykxm",
		"NL": "https://gen.sendtric.com/countdown/k6mx5pxz3p",
		"FR": "https://gen.sendtric.com/countdown/615mo20q9z",
		"CHFR": "https://gen.sendtric.com/countdown/bcev6cel7k",
		"ES": "https://gen.sendtric.com/countdown/cp6izrirc3",
		"PT": "https://gen.sendtric.com/countdown/2z906zky30",
		"IT": "https://gen.sendtric.com/countdown/zcjmxn7q0c",
		"DK": "https://gen.sendtric.com/countdown/2wr8br00cr",
		"NO": "https://gen.sendtric.com/countdown/y7opbw5x23",
		"FI": "https://gen.sendtric.com/countdown/uxsbrxked7",
		"SE": "https://gen.sendtric.com/countdown/dqq1mu37ho",
		"CZ": "https://gen.sendtric.com/countdown/gplgkq7tj8",
		"SK": "https://gen.sendtric.com/countdown/sp9ryqsvf9",
		"HU": "https://gen.sendtric.com/countdown/0lc9r40e3i",
		"RO": "https://gen.sendtric.com/countdown/1uwkj5o0sm",
		"BENL": "https://gen.sendtric.com/countdown/iev9bj8fxo",
		"BEFR": "https://gen.sendtric.com/countdown/lnhy66jl6g"
	},
};

export default new entities.Campaign({
	startId: 45311,
	name: 'Summer Dining',
	date: '02.07.2026',
	issueCardId: 496950,
	lpId: 30989,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl:
		'https://www.figma.com/design/JostaqMvvv1s625M5nWQyT/',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday, // User should change this
			css: types.CSS.NS,
			translationsSpreadsheet: campaignTranslationsSheet,
			background: '#F6E7E6',
			color: '#000000',
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			Inside: {
				color: '#000000',
				backgroundColor: '#FD9000',
				type: 'timer',
			},
			intro: {
				color: '#000000', // unused
				backgroundColor: '#F6E7E6', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			links: links,
			tableQueries: tableQueries,
			timer: timer,
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday, // User should change this
			css: types.CSS.LP,
			background: '#F6E7E6',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			Inside: {
				color: '#000000',
				backgroundColor: '#FD9000',
				type: 'timer',
			},
			intro: {
				color: '#000000', // unused
				backgroundColor: '#F6E7E6', // unused
				alignment: 'center',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			links: links,
			tableQueries: tableQueries,
			timer: timer,
		},
	],
});

