// NSLT on templates.Thursday (timer + image rows), LP on templates.ChristmasLook (same LP as Krzysztof's
// campaigns/KrBiranowski/031-2026-11-04-christmas-get-the-look.js, the brief asks for the same look).
//
// The categories are in a different order on the NSLT and on the LP. ChristmasLook takes the LP title/paragraph
// by index, so the sheet rows (Title 1-5 / Paragraph 1-5) are in the LP order:
//   0 Nordic Hygge, 1 Timeless Red & Gold, 2 Frosted Wonderland, 3 Champagne Glow, 4 Candy Pop
// NSLT tiles: Frosted Wonderland / Timeless Red & Gold + Nordic Hygge / Candy Pop + Champagne Glow
// (names are in the tile images, the sheet titles are only the alt texts - titleIndex = LP index).
const campaignTranslationsSheet = '2026::03.12.26 - Christmas Trees and Decorations';

// inside banner timer from the Cyber Monday issue (545830) - T-1 / T-2 rows
const timerTranslationsSheet = '2026::Voucher - 30.11.26 - Cyber Monday Start';

// one list for the NSLT and the LP - the queries are cached per campaign + country (translationCache),
// not per template, so whichever template is rendered first fills the cache for both
const tableQueries = [
	// LP header (BELIANI CHRISTMAS SHOP)
	{ name: 'shop_header', tableRange: '20' },
	// Intro Title / Intro
	{ name: 'intro', tableRange: '21:22' },
	// Title 1-5 (LP order) - LP titles
	{ name: 'categories', tableRange: '23:27' },
	// same rows - alt texts of the NSLT tiles (image-rows)
	{ name: 'titles', tableRange: '23:27' },
	// Paragraph 1-5 (LP order)
	{ name: 'paragraphs', tableRange: '28:32' },
	// Conditions Regular / Unsubscribe message
	{ name: 'condition', tableRange: '33:34' },
	// inside banner timer T-1 / T-2
	{ name: 'timer', tableRange: '15:16', tableName: timerTranslationsSheet },
];

const lpHref = translateLink({ value: 'content/lp26-12-03' });

const links = {
	TopImage_src: translateImage({ value: '20261203_topImage.png' }),
	TopImage_href: lpHref,

	Intro_cta_href: lpHref,

	// Cyber Monday LP (issue 545830)
	Timer_href: translateLink({ value: 'content/lp26-11-30' }),
};

const palette = {
	page: '#FFF4E6',
	text: '#000000',
	button: '#750000',
	buttonText: '#FFFFFF',
};

// See more - 170 x 50 px, 20px text
const button = {
	variant: 'button',
	background: palette.button,
	color: palette.buttonText,
	align: 'center',
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '600',
	letterSpacing: '0',
	paddingX: 40,
	paddingY: 13,
	mobilePaddingX: 30,
	mobilePaddingY: 11,
	borderRadius: '2px',
	textTransform: 'none',
	phrase: 'See more',
};

// no deadline -> Sunday of the campaign week, 2026-12-06T23:59:00 in the market's time zone (QA, issue 552241;
// the 30.11 sheet also says the offer is valid until 06.12)
const timer = {};

const Inside = {
	type: 'timer',
	theme: 'Warm Yellow',
	spaceBefore: 'newsletterBottom30px',
	spaceBeforeBackground: palette.page,
};

// top image -> timer -> intro (Get the look + See more) -> tiles -> See more
const intro = {
	type: 'paragraph',
	position: 'afterTimer',
	container: 'newsletterContainer60px',
	alignment: 'center',
	color: palette.text,
	backgroundColor: palette.page,
	spaceTop: 'newsletterBottom35px',
	cta: {
		...button,
		spaceBefore: 'newsletterBottom10px',
		spaceAfter: 'newsletterBottom80px',
	},
};

const categoriesNs = [
	{
		type: 'image-rows',
		href: lpHref,
		background: palette.page,
		color: palette.text,
		paddingTop: 0,
		paragraph: { spaceAfter: 0 },
		spaceAfter: 'newsletterBottom80px',
		gap: 4,
		// tile images ns20261203_Cat01-05 in the NSLT order, names are in the images (translated)
		// exported without the gaps (650 / 438 + 208 / 208 + 438 x 358) - the 4px gaps are html cells
		tiles: [
			[{ src: translateImage({ value: 'ns20261203_Cat01.png' }), width: 650, titleIndex: 2 }],
			[
				{ src: translateImage({ value: 'ns20261203_Cat02.png' }), width: 438, titleIndex: 1 },
				{ src: translateImage({ value: 'ns20261203_Cat03.png' }), width: 208, titleIndex: 0 },
			],
			[
				{ src: translateImage({ value: 'ns20261203_Cat04.png' }), width: 208, titleIndex: 4 },
				{ src: translateImage({ value: 'ns20261203_Cat05.png' }), width: 438, titleIndex: 3 },
			],
		],
		cta: {
			...button,
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 0,
		},
	},
];

const additionalCss = `
.newsletterIntroTitle{font-size:28px;font-weight:700;line-height:1.2;font-family:"Open Sans",sans-serif;}
@media screen and (max-width:768px){.newsletterIntroTitle{font-size:22px;}}
`;

// ---------- LP (ChristmasLook) ----------

const lpImages = (prefix, translate, ext = 'png') =>
	[1, 2, 3, 4, 5].map((n) => ({ src: `${prefix}${String(n).padStart(2, '0')}.${ext}`, translate }));

const props = {
	images: {
		// hero with "Your tree, your way / Pick the look you love" (translated), full width (lp20261203_topImage, 1822 x 720)
		hero: { src: 'lp20261203_topImage.png', translate: true },
		// one image per style (tree + close-up, 1822 x 928), LP order
		cats: lpImages('lp20261203_CatImg', false),
		// colour dots under the paragraph
		catColors: lpImages('lp20261203_catColors', false),
	},
};

// 8 products per style, ids from the SA list (SA Details link of issue 552241)
// images lp20261203_Prod<style 0-4><1-8>.png (01-08 Nordic, 11-18 Timeless, 21-28 Frosted, 31-38 Champagne, 41-48 Candy)
const lpProducts = (style, ids) =>
	ids.map((id, i) => ({ id: String(id), src: getImageUrl(`lp20261203_Prod${style}${i + 1}.png`) }));

// The brief links every "Shop now" to the Christmas shop. Justyna (06.11): "category images should link to trees on
// the pictures" - imageProductId = the tree on the category image (link per shop from the products).
const categories = [
	{
		name: 'Nordic Hygge',
		href: 'https://www.beliani.ch/christmas-shop/',
		// tree: JACINTO
		imageProductId: 202594,
		// ALTAELVA, AMBRE, IVRESSE (not in products.json), VALKAMA (inactive on SE), VUOTSO, PITEA, LAITON, MOTTI white
		products: lpProducts(0, [671432, 446905, 664722, 848081, 657273, 843143, 446887, 340697]),
	},
	{
		name: 'Timeless Red & Gold',
		href: 'https://www.beliani.ch/christmas-shop/',
		// tree: PALOMAR 210 cm
		imageProductId: 296157,
		// FLICKER, HUMPPLIA, KINNARI, VELKUA, WAPTA, TWINKLE, MOTTI red, FERIABLE
		products: lpProducts(1, [677354, 846816, 847552, 848079, 335252, 677258, 340565, 656323]),
	},
	{
		name: 'Frosted Wonderland',
		href: 'https://www.beliani.ch/christmas-shop/',
		// tree: BASSIE
		imageProductId: 202634,
		// LISALMI, FIRVANA, PIELINEN, MOTTI white, TINNSJA, HALLANGEN, ICEDROP, HEINOLA
		products: lpProducts(2, [846396, 676509, 674719, 340697, 674871, 651886, 677542, 846522]),
	},
	{
		name: 'Champagne Glow',
		href: 'https://www.beliani.ch/christmas-shop/',
		// tree: PALOMAR 180 cm
		imageProductId: 202576,
		// HANKO, ITALLA, LAPUA, WINTERLIGHT, BLING, TYIN, HOVILA, TOFTE
		products: lpProducts(3, [846438, 845367, 657159, 677523, 677391, 674265, 336379, 652480]),
	},
	{
		name: 'Candy Pop',
		href: 'https://www.beliani.ch/christmas-shop/',
		// tree: FARNHAM
		imageProductId: 296254,
		// TROSAAN, GJENDE, RENSJON, WINTERFALL, ASNEN, VANERN, CAPELLA, IMATRA
		products: lpProducts(4, [679152, 674662, 668206, 851609, 674587, 674015, 428988, 657102]),
	},
];

export default new entities.Campaign({
	startId: 50337,
	lpId: 33697,
	issueCardId: 552241,
	version: 'new',
	name: 'Christmas Trees and Decorations',
	date: '03.12.2026',
	figmaUrl: 'https://www.figma.com/design/LeHjE8jUVvXcGhEx174Gwm/Christmas-Trees-and-Decorations---Thursday-2026.12.03?node-id=0-1',
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

			categories: categoriesNs,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCss,
			timer: timer,
			Inside: Inside,
			intro: intro,
		},
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.ChristmasLook,
			skipCss: true,
			translationsSpreadsheet: campaignTranslationsSheet,

			background: '#FFFFFF',
			color: palette.text,

			props: props,
			categories: categories,
			// no links on the LP - ChristmasLook also builds the NSLT parts for the LP and runs getCategoryLink on
			// TopImage_href / Intro_cta_href, which are LP (content/...) links here -> "Nie znaleziono headera" toasts
			links: {},
			tableQueries: tableQueries,
			disableTopImageTitle: true,
			intro: false,
			disableSoonEnding: true,
		},
	],
});
