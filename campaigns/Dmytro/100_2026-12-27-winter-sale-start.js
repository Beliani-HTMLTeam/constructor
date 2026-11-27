const campaignTranslationsSheet = '2026::27.12.26 - Winter Sale Start';

const tableQueries = [
  ...[
		["intro", "18", campaignTranslationsSheet],
  ].map(([name, tableRange, tableName]) => ({
    name,
    tableRange,
    tableName,
  }))
]

const lpHref = translateLink({ value: 'content/lp26-12-27' });
 
const links = {
	TopImage_src: translateImage({value: '20261227_gif_short.gif'}),
	TopImage_href: lpHref,

	TopImage_src_landing: translateImage({value: '20261227_video.mp4'}),

	Intro_cta_href: 'https://www.beliani.ch/',
};

const palette = {
	accent: '#FF2F00',
	dark: '#750000',
	text: '#750000',
	page: '#F6E7E6',
	cta: '#FF8C00',
	buttonColor:"#F6E7E6",
	tilesBg: '#F6E7E6',
	toastBg: '#FFE0D4',
	buttonBg: "#FD9000"
};

const button = {
	show: true,
	align: 'center',
	variant: 'button',
	background: palette.dark,
	color: palette.buttonColor,
	fontSize: '20px',
	lineHeight: '20px',
	fontWeight: '500',
	letterSpacing: '0',
	paddingX: 45,
	paddingY: 15,
	mobilePaddingX: 30,
	mobilePaddingY: 12,
	textTransform: 'none',
	textDecoration: 'none'
};

const additionalCss = `
.newsletterBottom45px {
		padding-bottom: 45px;}

@media screen and (max-width: 768px) {
	.newsletterBottom45px {
		padding-bottom: 30px;}
}
`;
 
const additionalCssLp = `
#newsletter .newsletterBottom45px {
		padding-bottom: 45px;}

@media screen and (max-width: 768px) {
	#newsletter .newsletterBottom45px {
		padding-bottom: 30px;}
}
`;

const intro = {
	type: 'paragraph',
	position: 'afterTopImage',
	// own class - newsletterContainer60px has no mobile rule in thursday.css and is also used by the header
	container: 'newsletterContainer',
	alignment: 'center',
	color: palette.text,
	backgroundColor: palette.page,
	spaceTop: 'newsletterBottom45px',
	cta: {
		...button,
		spaceBefore: 'newsletterBottom35px',
		spaceAfter: '0',
	},
};
 
const categories = [
	{
		background: palette.page,
		color: palette.text,
		type: 'rowswith2categories',
		paddingTop: 0,
		showTileText: true,
		tileNameColor: palette.text,
		tileCtaColor: palette.text,
		spaceBetweenRows: 'newsletterBottom45px',
		spaceAfter: 'newsletterBottom60px',
		container: 'newsletterContainer30px',
		containerPadding: 30,
		tileImageSize: {width: 287, height: 215},
		tileGap: 16,
		// 'stacked' | 'inRow' | 'button' (name centered + filled button underneath)
		tileTextLayout: 'button',
		tileButton: {
			background: palette.dark,
			color: palette.buttonColor,
			borderRadius: '4px',
			paddingTop: 10,
			paddingBottom: 10,
			lineHeight: '20px',
		},
		heading: {
			phrase: 'Shop by category',
			align: 'center',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 700;'
		},
		categories:
			[
				[
					{
						name: "Sofas",
						href: 'https://www.beliani.ch/sofas/',
						src: getImageUrl('20261227_Cat01.png', true),
					},
					{
						name: "Beds",
						href: 'https://www.beliani.ch/beds/',
						src: getImageUrl('20261227_Cat02.png', true),
					},
				],
				[{
					name: "Armchairs",
					href: 'https://www.beliani.ch/armchairs/',
					src: getImageUrl('20261227_Cat03.png', true),
				},
				{
					name: "Chairs",
					href: 'https://www.beliani.ch/chairs/',
					src: getImageUrl('20261227_Cat04.png', true),
				},
				],
				[
					{
						name: "Tables",
						href: 'https://www.beliani.ch/tables/',
						src: getImageUrl('20261227_Cat05.png', true),
					},
					{
						name: "Storage",
						href: 'https://www.beliani.ch/storage/',
						src: getImageUrl('20261227_Cat06.png', true),
					},
				],
				[
					{
						name: "Textiles",
						href: 'https://www.beliani.ch/textiles/',
						src: getImageUrl('20261227_Cat07.png', true),
					},
					{
						name: "Lighting",
						href: 'https://www.beliani.ch/lighting/',
						src: getImageUrl('20261227_Cat08.png', true),
					},
				],
				[
					{
						name: "Bathtubs",
						href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
						src: getImageUrl('20261227_Cat09.png', true),
					},
					{
						name: "Desks",
						href: 'https://www.beliani.ch/office-furniture/desks-eng/',
						src: getImageUrl('20261227_Cat10.png', true),
					}
				],
				[{
					name: "Rugs",
					href: 'https://www.beliani.ch/rugs/',
					src: getImageUrl('20261227_Cat11.png', true),
				},
				{
					name: "Accessories",
					overrides: {
						DACH: "Wohnaccessoires",
						FI: "Sisustustarvikkeet"
					},
					href: 'https://www.beliani.ch/accessories-decor/',
					src: getImageUrl('20261227_Cat12.png', true),
				},]
			]
	},
];
 
export default new entities.Campaign({
	startId: 50689,
	lpId: 33875,
	issueCardId: 568202,
	version: 'new',
	name: 'Winter Sale Start',
	date: '27.12.2026',
	figmaUrl: 'https://www.figma.com/design/HTDyOEdoFOtCmzrOB06JTR/Winter-Sale-Start---Sunday-2026.12.27?node-id=10002-8601&t=XURBao5HPKXc0rB4-1',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Friday,
			css: types.CSS.NS_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,
 
			background: palette.page,
			color: palette.text,
 
			wrapper: types.WRAPPER,

			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCss,
			footer_theme: 'peach',
			optimizeCss: true,
			intro: intro,

		},
 
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Friday,
			css: types.CSS.LP_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,
 
			background: palette.page,
			color: palette.text,
 
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCssLp,
			footer_theme: 'peach',
			intro: intro,

		},
	],
});