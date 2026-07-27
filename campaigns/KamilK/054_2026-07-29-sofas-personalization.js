// Campaign generated from form
const campaignTranslationsSheet = '2026::29.07.26 - Sofas Personalization';

const tableQueries = [
	// {
	//   tableRange: '17:18',
	//   name: 'TopImageTitle',
	// },
	{
		tableRange: '18',
		name: 'intro',
	},
	// {
	//   tableRange: '25:28',
	//   name: 'paragraphs',
	// },
	// {
	//   tableRange: '21:24',
	//   name: 'categories',
	// },
	// {
	//   tableRange: '23:26',
	//   name: 'categoryLinks',
	// },
	{
		tableRange: '19:20',
		name: 'condition',
	},
	// {
	//   tableRange: '15:16',
	//   name: 'timer',
	//   tableName: '2026::Voucher - 13.07.26 - Free scatter cushion',
	// },
];

const links = {
	// TopImageTitle_href: translateLink({ value: 'content/lp26-07-16' }),
	// TopImageTitle_src: translateImage({ value: '20260729_01.png' }),

	TopImage_src: translateImage({ value: '20260729_Pic.png' }),
	TopImage_href: translateLink({ value: 'content/lp26-07-29' }),

	Banner_1: translateLink({ value: 'content/lp26-07-22' }),
	Banner_1_Image: translateImage({ value: '20260722b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-07-17' }),
	Banner_2_Image: translateImage({ value: '20260717b.png' }),

	// Timer_href: translateLink({ value: 'content/lp26-07-13' }),

	Intro_cta_href: "https://www.beliani.ch/living-room-furniture/sofas/",
};

// const TopImageTitle_data = {
//   color: '#000000',
//   backgroundColor: '#FFEFD9',
//   type: 'twoSameLines',
// };

const categories = [
	{
		name: 'Corner Sofas',
		src: translateImage({ value: '20260729_Cat00.jpg' }),
		href: 'https://www.beliani.ch/sofas/corner-sofas/',
		background: '#FFEFD9',
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
			show: false,
			align: 'left',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
		},
		products: [
			// ARDAL
			{
				id: 560008,
				src: getImageUrl('20260729_Pic01.png', true),
			},
			// UNSTAD
			{
				id: 512943,
				src: getImageUrl('20260729_Pic02.png', true),
			},
			// OSLO
			{
				id: 572113,
				src: getImageUrl('20260729_Pic03.png', true),
			},
			// HOLT
			{
				id: 591196,
				src: getImageUrl('20260729_Pic04.png', true),
			},
		],
	},
	{
		name: 'Chaise Lounges',
		src: translateImage({ value: '20260729_Cat10.jpg' }),
		href: 'https://www.beliani.ch/sofas/chaise-lounge/',
		background: '#FFEFD9',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: false,
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
			// SAVASSE
			{
				id: 646588,
				src: getImageUrl('20260729_Pic11.png', true),
			},
			// VALREAS
			{
				id: 602207,
				src: getImageUrl('20260729_Pic12.png', true),
			},
			// NIMES
			{
				id: 103656,
				src: getImageUrl('20260729_Pic13.png', true),
			},
			// ARTHEZE
			{
				id: 520141,
				src: getImageUrl('20260729_Pic14.png', true),
			},
		],
	},
	{
		name: '3 Seater Sofas',
		src: translateImage({ value: '20260729_Cat20.jpg' }),
		href: 'https://www.beliani.ch/sofas/3-seater-sofas/',
		background: '#FFEFD9',
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
			show: false,
			align: 'left',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
		},
		products: [
			// VELTADA
			{
				id: 680133,
				src: getImageUrl('20260729_Pic21.png', true),
			},
			// ASAA
			{
				id: 440115,
				src: getImageUrl('20260729_Pic22.png', true),
			},
			// EVJA
			{
				id: 232344,
				src: getImageUrl('20260729_Pic23.png', true),
			},
			// MALUNG
			{
				id: 598222,
				// id: 704092,
				src: getImageUrl('20260729_Pic24.png', true),
			},
		],
	},
	{
		name: 'Sofa Beds',
		src: translateImage({ value: '20260729_Cat30.jpg' }),
		href: 'https://www.beliani.ch/sofas/sofa-beds/',
		background: '#FFEFD9',
		color: '#000000',
		type: 'grid',
		cta: true,
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: false,
			align: 'left',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			prices: true,
			name: true,
		},
		products: [
			// VAXHOLM
			{
				id: 678614,
				src: getImageUrl('20260729_Pic31.png', true),
			},
			// BELFAST
			{
				id: 23301,
				src: getImageUrl('20260729_Pic32.png', true),
			},
			// BREKKE
			{
				id: 131329,
				src: getImageUrl('20260729_Pic33.png', true),
			},
			// KALFAFEL
			{
				id: 460458,
				src: getImageUrl('20260729_Pic34.png', true),
			},
		],
	},
];

// const timer = {
// 	freebies: getImageUrl('20260729free.png', true),
// 	image: {
// 		"UK": "https://gen.sendtric.com/countdown/m2rkm0r2wu",
// 		"PL": "https://gen.sendtric.com/countdown/bf335t4sbo",
// 		"DE": "https://gen.sendtric.com/countdown/50izlru0mb",
// 		"AT": "https://gen.sendtric.com/countdown/99heu82v3v",
// 		"CHDE": "https://gen.sendtric.com/countdown/dqvpbxl7ex",
// 		"NL": "https://gen.sendtric.com/countdown/6g8cn9ppgn",
// 		"FR": "https://gen.sendtric.com/countdown/9lcxh3ibn6",
// 		"CHFR": "https://gen.sendtric.com/countdown/a483jlvlwk",
// 		"ES": "https://gen.sendtric.com/countdown/7a1zludhq4",
// 		"PT": "https://gen.sendtric.com/countdown/lwzfaagxy7",
// 		"IT": "https://gen.sendtric.com/countdown/jwzv4m2k9i",
// 		"DK": "https://gen.sendtric.com/countdown/rnldtq6nte",
// 		"NO": "https://gen.sendtric.com/countdown/gsa8m1qtrt",
// 		"FI": "https://gen.sendtric.com/countdown/p16donx24v",
// 		"SE": "https://gen.sendtric.com/countdown/oi3reehrxr",
// 		"CZ": "https://gen.sendtric.com/countdown/oqra78vk7t",
// 		"SK": "https://gen.sendtric.com/countdown/umc4vq17s4",
// 		"HU": "https://gen.sendtric.com/countdown/6v9a5ljgwo",
// 		"RO": "https://gen.sendtric.com/countdown/2nhomy3185",
// 		"BENL": "https://gen.sendtric.com/countdown/nkv2sz1sm1",
// 		"BEFR": "https://gen.sendtric.com/countdown/tolmwwrc5j"
// 	}
// };

export default new entities.Campaign({
	startId: 46328,
	// startId: 46392 < si hr test,
	name: 'Sofas Personalization',
	date: '29.07.2026',
	issueCardId: 508514,
	lpId: 31456,
	// lpId: 31496 < si hr test,
	// version: "new" < si hr test,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/YlvWezPl59TIlRXW8EuLii/',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday, // User should change this
			css: types.CSS.NS,
			translationsSpreadsheet: campaignTranslationsSheet,
			background: '#FFEFD9',
			color: '#000000',
			wrapper: types.WRAPPER,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			// timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFEFD9', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			// Inside: {
			// 	color: '#000000',
			// 	backgroundColor: '#FFCCB7',
			// 	type: 'timer',
			// },
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday, // User should change this
			css: types.CSS.LP,
			background: '#FFEFD9',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			// timer: timer,
			intro: {
				color: '#000000', // unused
				backgroundColor: '#FFEFD9', // unused
				alignment: 'left',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			// Inside: {
			// 	color: '#000000',
			// 	backgroundColor: '#FFCCB7',
			// 	type: 'timer',
			// },
		},
	],
});
