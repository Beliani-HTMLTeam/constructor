// Campaign generated from form
const campaignTranslationsSheet = '2026::24.09.26 - Preparing for Cozy Season ';

const tableQueries = [
	{
		tableRange: '17:18',
		name: 'TopImageTitle',
	},
	{
		tableRange: '22',
		name: 'intro',
	},
	{
		tableRange: '23:26',
		name: 'paragraphs',
	},
	{
		tableRange: '31:32',
		name: 'condition',
	},
	{
		name: "timer",
		tableRange: "15:16",
		tableName: "Voucher - 21.09.26 - Sofas Free mirror"
	}
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-09-24-tb' }),
	TopImageTitle_src: translateImage({ value: '20260924_01.png' }),

	TopImage_src: getImageUrl('20260924_Pic.jpg', true),
	TopImage_href: translateLink({ value: 'content/lp26-09-24-tb' }),

	Banner_1: translateLink({ value: 'content/lp26-09-17' }),
	Banner_1_Image: translateImage({ value: '20260917b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-16' }),
	Banner_2_Image: translateImage({ value: '20260916b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-09-21' }),
	
  Intro_cta_href: "https://www.beliani.ch",
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#FECD8C',
	type: 'standard',
};

const categories = [
	{
		name: 'Halloween Accessories',
		src: getImageUrl('20260924_Cat00b.jpg', true),
		href: 'https://www.beliani.co.uk/halloween-accessories/',
		background: '#FECD8C',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: 0,
		title: {
			show: true,
			spaceBefore: 'newsletterBottom60px',
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		products: [
			// KALAMATA
			{
				id: '364500',
				src: getImageUrl('20260924_Pic01b.png', true),
			},
			// SEBES
			{
				id: '330055',
				src: getImageUrl('20260924_Pic02b.png', true),
			},
			// FRANKLINIA
			{
				id: '329139',
				src: getImageUrl('20260924_Pic03b.png', true),
			},
			// CHALKIDA
			{
				id: '364571',
				src: getImageUrl('20260924_Pic04b.png', true),
			},
		],
	},
	{
		name: 'Storage',
		src: getImageUrl('20260924_Cat10b.jpg', true),
		href: 'https://www.beliani.ch/hallway/storage/',
		background: '#FECD8C',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: 0,
		title: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		products: [
			// MONNAIE
			{
				id: '553994',
				src: getImageUrl('20260924_Pic11b.png', true),
			},
			// LYNWOOD
			{
				id: '569047',
				src: getImageUrl('20260924_Pic12b.png', true),
			},
			// COOMA
			{
				id: '681658',
				src: getImageUrl('20260924_Pic13b.png', true),
			},
			// HARDIN
			{
				id: '662471',
				src: getImageUrl('20260924_Pic14b.png', true),
			},
		],
	},
	{
		name: 'Lighting',
		src: getImageUrl('20260924_Cat20b.jpg', true),
		href: 'https://www.beliani.ch/lighting/',
		background: '#FECD8C',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: 0,
		title: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		products: [
			// SELB
			{
				id: '638069',
				src: getImageUrl('20260924_Pic21b.png', true),
			},
			// BEDAS
			{
				id: '494384',
				src: getImageUrl('20260924_Pic22b.png', true),
			},
			// ARWADITO
			{
				id: '444467',
				src: getImageUrl('20260924_Pic23b.png', true),
			},
			// OTEROS
			{
				id: '458676',
				src: getImageUrl('20260924_Pic24b.png', true),
			},
		],
	},
	{
		name: 'Textiles',
		src: getImageUrl('20260924_Cat30b.jpg', true),
		href: 'https://www.beliani.ch/textiles/',
		background: '#FECD8C',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: 0,
		title: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		products: [
			// TATSOI
			{
				id: '459701',
				src: getImageUrl('20260924_Pic31b.png', true),
			},
			// CUBUK
			{
				id: '395527',
				src: getImageUrl('20260924_Pic32b.png', true),
			},
			// SHASA
			{
				id: '416731',
				src: getImageUrl('20260924_Pic33b.png', true),
			},
			// SUMNER
			{
				id: '720460',
				src: getImageUrl('20260924_Pic34b.png', true),
			},
		],
	},
];

const timer = {
	freebies: getImageUrl('20260924free.png', true),
	deadline: '2026-09-27',
}

export default new entities.Campaign({
	startId: 48245,
	name: 'Preparing for Cozy Season GROUP B',
	date: '24.09.2026',
	issueCardId: 531053,
	lpId: 32574,
	version: 'new',
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/EBbffegSF12qt5jgL2SQPI/',
	templates: [
		{
			background: '#FECD8C',
			color: '#000000',
			template: templates.Thursday, // User should change this

			intro: {
				color: '#000000',
				backgroundColor: '#FECD8C',
				alignment: 'left',
				type: 'paragraph',
				spaceBottom: 'newsletterBottom20px',
				cta: {
					show: true,
					align: 'center',
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				unitBackground: '#E3CCCC',
				type: 'timer',
				// spaceBefore: 'newsletterBottom35px',
			},
			css: types.CSS.NS,
			// additionalCss: additionalCss,
			name: 'Newsletter',
			type: types.NEWSLETTER,
			translationsSpreadsheet: campaignTranslationsSheet,
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			timer: timer,
			links: links,
			tableQueries: tableQueries,
		},
		{
			background: '#FECD8C',
			color: '#000000',
			template: templates.Thursday, // User should change this

			intro: {
				color: '#000000',
				backgroundColor: '#FECD8C',
				alignment: 'left',
				type: 'paragraph',
				spaceBottom: 'newsletterBottom20px',
				cta: {
					align: 'center',
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				unitBackground: '#E3CCCC',
				type: 'timer',
				// spaceBefore: 'newsletterBottom35px',
			},
			css: types.CSS.LP,
			// additionalCss: additionalCssLp,
			name: 'Landing',
			type: types.LANDINGPAGE,
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
		},
	],
});
