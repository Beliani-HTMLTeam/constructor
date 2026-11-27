const campaignTranslationsSheet = '2026::👨‍🦯 pantone test';

const tableQueries = [
	{ name: 'intro', tableRange: '21' },
	{ name: 'categories', tableRange: '22:23' },
];

const DATE = '20261210';

const lpHref = translateLink({ value: 'content/lp26-12-10' });

const links = {
	TopImage_src: translateImage({ value: `${DATE}_01.png` }),
	TopImage_src_1: translateImage({ value: `${DATE}_01_mobile.png` }),
	TopImage_src_2: getImageUrl(`${DATE}_topImage.jpg`, true),
	TopImage_href: lpHref,

	Intro_cta_href: lpHref,
};

const TopImage_data = {
	tdClasses: {
		TopImage_src: 'pantoneDesktop',
		TopImage_src_1: 'pantoneMobile',
	},
};

const additionalCss = `
.pantoneMobile{display:none;mso-hide:all;max-height:0;overflow:hidden;font-size:0;line-height:0;}
@media screen and (max-width:768px){.pantoneDesktop{display:none !important;}.pantoneMobile{display:table-cell !important;max-height:none !important;overflow:visible !important;}}
`;

const additionalCssLp = `
#newsletter .pantoneMobile{display:none;}
@media screen and (max-width:768px){#newsletter .pantoneDesktop{display:none !important;}#newsletter .pantoneMobile{display:table-cell !important;}}
`;

const palette = {
	page: '#F2E6E6',
	text: '#000000',
	accent: '#572731',
	accentText: '#FFFFFF',
	outroButton: '#FFFFFF',
	outroButtonText: '#000000',
};

const introButton = {
	variant: 'button',
	background: palette.accent,
	color: palette.accentText,
	align: 'center',
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '700',
	letterSpacing: '0',
	paddingX: 25,
	paddingY: 11,
	mobilePaddingX: 22,
	mobilePaddingY: 10,
	borderRadius: '23px',
	textTransform: 'none',
};

const intro = {
	type: 'paragraph',
	position: 'afterTopImage',
	container: 'newsletterContainer55px',
	alignment: 'center',
	color: palette.text,
	backgroundColor: palette.page,
	spaceTop: 'newsletterBottom35px',
	cta: {
		...introButton,
		spaceBefore: 'newsletterBottom20px',
		spaceAfter: 'newsletterBottom35px',
	},
};

const introLp = {
	...intro,
	cta: {
		...intro.cta,
		fontFamily: "'Poppins', sans-serif",
	},
};

const lineSrc = getImageUrl(`${DATE}_line.png`, true);

const productCategory = (number, name, href, phrase, ids, { last = false } = {}) => ({
	paddingTop: 0,
	spaceAfter: last ? 'newsletterBottom10px' : 'newsletterBottom15px',

	name,
	href,
	src: lineSrc,
	tdClass: 'newsletterContainer40px',
	container: 'newsletterContainer40px',

	background: palette.page,
	color: palette.text,

	type: 'grid',

	title: {
		show: true,
		position: 'afterImg',
		align: 'left',
		color: palette.text,
		spaceBefore: 'newsletterBottom30px',
	},

	paragraph: {
		spaceAfter: 'newsletterBottom30px',
	},

	cta: {
		variant: 'underline',
		phrase,
		position: 'afterProducts',
		align: 'left',
		color: palette.text,
		textTransform: 'none',
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: 'newsletterBottom80px',
	},

	product: {
		name: true,
		align: 'left',
		background: palette.page,
		insetX: 0,
		containerInsetPct: 6.15,
		gapPct: 1.85,
		spaceTopClass: '',
		spaceBottomClass: '',
		nameGapClass: 'newsletterBottom10px',
		gapBetweenVertical: 'newsletterBottom20px',
		hideLastBottomGap: true,
		title: { color: palette.text, styles: 'text-transform: uppercase;' },
		prices: {
			lowColor: palette.text,
			highColor: palette.text,
		},
	},

	products: ids.map((id, i) => ({
		id,
		...(id ? {} : { href }),
		src: getImageUrl(`${DATE}_Pic${number}${i + 1}.png`, true),
	})),
});

const outroHref = 'https://www.beliani.ch/living-room-furniture/';

const outroDome = (src, tdClass) => ({
	paddingTop: 0,
	spaceAfter: 0,

	href: outroHref,
	src,
	tdClass,

	background: palette.accent,
	color: palette.accentText,

	paragraph: {
		spaceAfter: 0,
	},
});

const outroDesktop = outroDome(translateImage({ value: `${DATE}_02.png` }), 'pantoneDesktop');

const outroMobile = {
	...outroDome(translateImage({ value: `${DATE}_02_mobile.png` }), 'pantoneMobile'),

	cta: {
		variant: 'button',
		phrase: 'Shop the color',
		position: 'afterImg',
		background: palette.outroButton,
		color: palette.outroButtonText,
		align: 'center',
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: '400',
		letterSpacing: '0',
		paddingX: 30,
		paddingY: 16,
		mobilePaddingX: 24,
		mobilePaddingY: 12,
		borderRadius: '0',
		textTransform: 'none',
		textDecoration: 'underline',
		spaceBefore: 'newsletterBottom15px',
		spaceAfter: 'newsletterBottom60px',
	},
};

const categories = [
	productCategory(1, 'Furniture', 'https://www.beliani.ch/living-room-furniture/', 'Shop furniture', [
		716727, 622259, 643547, 854995, 843632, 569865,
	]),

	productCategory(2, 'Decor', 'https://www.beliani.ch/home-accessories/', 'Shop decor', [
		194776, 845116, 694824, 666514, 849700, 850997,
	], { last: true }),

	outroDesktop,
	outroMobile,
];

export default new entities.Campaign({
	startId: 50657,
	lpId: 33854,
	issueCardId: 550760,
	version: 'new',
	name: 'Pantone',
	date: '10.12.2026',
	figmaUrl: '',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Thursday,
			css: types.CSS.NS_THURSDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: palette.page,
			color: palette.text,

			wrapper: types.WRAPPER,
			optimizeCss: true,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			TopImage_data: TopImage_data,
			intro: intro,
			additionalCss: additionalCss,
		},

		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Thursday,
			css: types.CSS.LP_THURSDAY,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: palette.page,
			color: palette.text,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			TopImage_data: TopImage_data,
			intro: introLp,
			additionalCss: additionalCssLp,
		},
	],
});
