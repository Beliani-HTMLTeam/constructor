import { getImageUrl } from '../../src/utils/ImageManager.js';
import { translateImage } from '../../src/helpers/translateImage.js';
import { translateLink } from '../../src/helpers/translateLink.js';
// import { templates, types, entities } from '../../src/components/index.js';

const campaignTranslationsSheet = '2026::23.07.26 - Mirrors';

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
	{
		tableRange: '24:25',
		name: 'condition',
	},
	{
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 20.07.26 - Free Gift',
	},
];

const links = {
	TopImageTitle_href: translateLink({ value: 'content/lp26-07-23' }),
	TopImageTitle_src: translateImage({ value: '20260723_01.png' }),

	TopImage_src: getImageUrl('20260723_Gif.gif', true),
	TopImage_href: translateLink({ value: 'content/lp26-07-23' }),

	Banner_1: translateLink({ value: 'content/lp26-07-16' }),
	Banner_1_Image: translateImage({ value: '20260716b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-07-15' }),
	Banner_2_Image: translateImage({ value: '20260715b.png' }),

	Timer_href: translateLink({ value: 'content/lp26-07-20' }),

	Intro_cta_href: "https://www.beliani.ch/mirrors/",
};

const TopImageTitle_data = {
	color: '#000000',
	backgroundColor: '#FFF2ED',
	type: 'twoSameLines',
	container: 'newsletterContainer55px',
};

const TopImage_data = {
	container: 'newsletterContainer55px',
};

const categories = [
	{
		name: 'Wall mirrors',
		src: getImageUrl('20260723_Cat00.jpg', true),
		href: 'https://www.beliani.ch/mirrors/wall-mirrors/',
		background: '#FFF2ED',
		color: '#000000',
		type: 'grid',
		cta: {
			spaceBefore: 'newsletterBottom25px',
		},
		alignToSide: true,
		paddingTop: '60',
		container: 'newsletterContainer55px',
		tdClass: 'newsletterContainer55px',
		line: {
			show: true,
			insideContainer: true,
		},
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		gapBetweenHorizontal: 5,
		product: {
			prices: false,
			name: false,
			gapBetweenVertical: 'newsletterBottom10px',
		},
		products: [
			{
				id: 325539,
				src: getImageUrl('20260723_Pic01.png', true),
			},
			{
				id: 368855,
				src: getImageUrl('20260723_Pic02.png', true),
			},
			{
				id: 498149,
				src: getImageUrl('20260723_Pic03.png', true),
			},
			{
				id: 609079,
				src: getImageUrl('20260723_Pic04.png', true),
			},
		],
	},
	{
		name: 'Standing mirrors',
		src: getImageUrl('20260723_Cat10.jpg', true),
		href: 'https://www.beliani.ch/mirrors/standing-mirrors/',
		background: '#FFF2ED',
		color: '#000000',
		type: 'grid',
		cta: {
			spaceBefore: 'newsletterBottom25px',
		},
		alignToSide: true,
		paddingTop: '35',
		container: 'newsletterContainer55px',
		tdClass: 'newsletterContainer55px',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		line: {
			show: true,
			insideContainer: true,
		},
		gapBetweenHorizontal: 5,
		product: {
			prices: false,
			name: false,
			gapBetweenVertical: 'newsletterBottom10px',
		},
		products: [
			{
				id: 552976,
				src: getImageUrl('20260723_Pic11.png', true),
			},
			{
				id: 360086,
				src: getImageUrl('20260723_Pic12.png', true),
			},
			{
				id: 330286,
				src: getImageUrl('20260723_Pic13.png', true),
			},
			{
				id: 558373,
				src: getImageUrl('20260723_Pic14.png', true),
			},
		],
	},
	{
		name: 'Bathroom mirrors',
		src: getImageUrl('20260723_Cat20.jpg', true),
		href: 'https://www.beliani.ch/mirrors/bath-mirrors/',
		background: '#FFF2ED',
		color: '#000000',
		type: 'grid',
		cta: {
			spaceBefore: 'newsletterBottom25px',
		},
		alignToSide: true,
		paddingTop: '35',
		container: 'newsletterContainer55px',
		tdClass: 'newsletterContainer55px',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		line: {
			show: true,
			insideContainer: true,
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		gapBetweenHorizontal: 5,
		product: {
			prices: false,
			name: false,
			gapBetweenVertical: 'newsletterBottom10px',
		},
		products: [
			{
				id: 360194,
				src: getImageUrl('20260723_Pic21.png', true),
			},
			{
				id: 203165,
				src: getImageUrl('20260723_Pic22.png', true),
			},
			{
				id: 147962,
				src: getImageUrl('20260723_Pic23.png', true),
			},
			{
				id: 161422,
				src: getImageUrl('20260723_Pic24.png', true),
			},
		],
	},
	{
		name: 'Makeup mirrors',
		src: getImageUrl('20260723_Cat30.jpg', true),
		href: 'https://www.beliani.ch/mirrors/makeup-mirrors/',
		background: '#FFF2ED',
		color: '#000000',
		type: 'grid',
		cta: {
			spaceBefore: 'newsletterBottom25px',
		},
		alignToSide: true,
		paddingTop: '35',
		container: 'newsletterContainer55px',
		tdClass: 'newsletterContainer55px',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		gapBetweenHorizontal: 5,
		product: {
			prices: false,
			name: false,
			gapBetweenVertical: 'newsletterBottom10px',
		},
		products: [
			{
				id: 368380,
				src: getImageUrl('20260723_Pic31.png', true),
			},
			{
				id: 161412,
				src: getImageUrl('20260723_Pic32.png', true),
			},
			{
				id: 257914,
				src: getImageUrl('20260723_Pic33.png', true),
			},
			{
				id: 368097,
				src: getImageUrl('20260723_Pic34.png', true),
			},
		],
	},
];

const timer = {
	freebies: translateImage({ value: '20260723free.png' }),
	image: {
		"UK": "https://gen.sendtric.com/countdown/d5fj0j06iw",
		"PL": "https://gen.sendtric.com/countdown/9ld4nd5jug",
		"DE": "https://gen.sendtric.com/countdown/wc2zpnix04",
		"AT": "https://gen.sendtric.com/countdown/okbj2r4lrh",
		"CHDE": "https://gen.sendtric.com/countdown/gc3fwdueha",
		"NL": "https://gen.sendtric.com/countdown/2lpmge1j30",
		"FR": "https://gen.sendtric.com/countdown/jvg7z5o66l",
		"CHFR": "https://gen.sendtric.com/countdown/2412gwx0pt",
		"ES": "https://gen.sendtric.com/countdown/r2awj3xc2y",
		"PT": "https://gen.sendtric.com/countdown/hn1ae9hqww",
		"IT": "https://gen.sendtric.com/countdown/61j0yf6n7x",
		"DK": "https://gen.sendtric.com/countdown/247d7nf3dy",
		"NO": "https://gen.sendtric.com/countdown/ij977mj640",
		"FI": "https://gen.sendtric.com/countdown/n3r0w1ur0f",
		"SE": "https://gen.sendtric.com/countdown/jhnww47l4y",
		"CZ": "https://gen.sendtric.com/countdown/71v88wpmr2",
		"SK": "https://gen.sendtric.com/countdown/sv9lv8ddul",
		"HU": "https://gen.sendtric.com/countdown/kq6r9z47fj",
		"RO": "https://gen.sendtric.com/countdown/b56v7h7h8k",
		"BENL": "https://gen.sendtric.com/countdown/leppn75pm6",
		"BEFR": "https://gen.sendtric.com/countdown/qw893flhm0"
	}
};

export default new entities.Campaign({
	startId: 46007,
	name: 'Mirrors',
	date: '23.07.2026',
	issueCardId: 505689,
	lpId: 31338,
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/3AA8U4cTylcPpmWh4iv7NH/',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday,
			css: types.CSS.NS,
			translationsSpreadsheet: campaignTranslationsSheet,
			background: '#FFF2ED',
			color: '#000000',
			wrapper: types.WRAPPER,
			TopImageTitle_data: TopImageTitle_data,
			TopImage_data: TopImage_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000',
				backgroundColor: '#FFF2ED',
				alignment: 'center',
				type: 'paragraph',
				container: 'newsletterContainer55px',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				type: 'timer',
			},
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday,
			css: types.CSS.LP,
			background: '#FFF2ED',
			color: '#000000',
			translationsSpreadsheet: campaignTranslationsSheet,
			TopImageTitle_data: TopImageTitle_data,
			TopImage_data: TopImage_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
			intro: {
				color: '#000000',
				backgroundColor: '#FFF2ED',
				alignment: 'center',
				type: 'paragraph',
				container: 'newsletterContainer55px',

				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
			Inside: {
				color: '#000000',
				backgroundColor: '#F6E7E6',
				type: 'timer',
			},
		},
	],
});
