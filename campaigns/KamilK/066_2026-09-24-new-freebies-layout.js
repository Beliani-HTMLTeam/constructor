// Campaign generated from form
// https://docs.google.com/spreadsheets/d/1RcsQspit0B3b3xX1NwZ9RWnUzZrkoVDULu2cnPMZ04U/edit?gid=591949385#gid=591949385
const campaignTranslationsSheet = '2026::new freebies layout - DONT EDIT';

const tableQueries = [
	// {
	// 	tableRange: '16:17',
	// 	name: 'TopImageTitle',
	// },
	{
		tableRange: '20:22',
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
	// TopImageTitle_href: translateLink({ value: 'content/lp26-09-24-tb' }),
	// TopImageTitle_src: translateImage({ value: '20260924_01.png' }),

	TopImage_src: getImageUrl('20260924_Pic.jpg', true),
	TopImage_href: translateLink({ value: 'content/nowe-freebie-test' }),

	Banner_1: translateLink({ value: 'content/lp26-09-17' }),
	Banner_1_Image: translateImage({ value: '20260917b.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-16' }),
	Banner_2_Image: translateImage({ value: '20260916b.png' }),

	Timer_href: translateLink({ value: 'content/nowe-freebie-test' }),

	Intro_cta_href: "https://www.beliani.ch",
};

// const TopImageTitle_data = {
//   color: '#000000',
//   backgroundColor: '#FECD8C',
//   type: 'twoSameLines',
// };

const additionalCss = `
	.newsletterContainer10px {
		padding-left: 10px;
		padding-right: 10px;
	}

	.newsletterContainer40px {
		padding-left: 40px;
		padding-right: 40px;
	}

  .newsletterCtaBtn {
    display: inline-block;
    width: auto;
    text-align: center;
    padding: 0;
    box-sizing: border-box;
  }

  .newsletterCtaLink {
    display: inline-block;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-word;
  }

  @media screen and (max-width: 768px) {
    .newsletterCtaLink {
      width: auto;
      max-width: 100%;
    }

		.newsletterContainer10px {
			padding-left: 4px;
			padding-right: 4px;
		}

		.newsletterContainer40px {
			padding-left: 20px;
			padding-right: 20px;
		}
  }
`;

const additionalCssLp = `
	.newsletterContainer10px {
		padding-left: 10px !important;
		padding-right: 10px !important;
	}

	.newsletterContainer40px {
		padding-left: 40px !important;
		padding-right: 40px !important;
	}

  .newsletterCtaBtn {
    width: auto !important;
    text-align: center;
    padding: 0 !important;
    box-sizing: border-box;
  }

  .newsletterCtaLink {
    display: inline-block;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-word;
  }


  @media screen and (max-width: 768px) {
    .newsletterCtaLink {
      width: auto !important;
      max-width: 100% !important;
    }
			
		.newsletterContainer10px {
			padding-left: 4px !important;
			padding-right: 4px !important;
		}

		.newsletterContainer40px {
			padding-left: 20px !important;
			padding-right: 20px !important;
		}

  }
`;

const categories = [
	{
		name: 'Halloween Accessories',
		src: getImageUrl('20260924_Cat00a.jpg', true),
		href: 'https://www.beliani.co.uk/halloween-accessories/',
		background: '#FECD8C',
		color: '#000000',
		type: 'grid',
		tdClass: 'newsletterContainer10px',
		container: 'newsletterContainer10px',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottom35px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 24,
			mobilePaddingY: 10,
			background: '#750000',
			color: '#ffffff',
			textTransform: 'none',
			phrase: "Shop Halloween Accessories",
		},
		paddingTop: 60,
		spaceBeforeProducts: 'newsletterBottom20px',
		title: {
			color: '#750000',
			position: 'beforeImg',
			show: true,
			align: 'left',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 600;',
			container: 'newsletterContainer',
		},
		paragraph: {
			show: true,
			align: 'left',
			position: 'beforeImg',
			container: 'newsletterContainer',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'left',
			gapBetweenVertical: 'newsletterBottom10px',
			gapBetweenHorizontal: 5,
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// KALAMATA
			{
				id: '364500',
				src: translateImage({ value: '20260924_Pic01A.png' }),
			},
			// SEBES
			{
				id: '330055',
				src: translateImage({ value: '20260924_Pic02A.png' }),
			},
			// FRANKLINIA
			{
				id: '329139',
				src: translateImage({ value: '20260924_Pic03A.png' }),
			},
			// CHALKIDA
			{
				id: '364571',
				src: translateImage({ value: '20260924_Pic04A.png' }),
			},
		],
	},
	{
		name: 'Storage',
		src: getImageUrl('20260924_Cat10a.jpg', true),
		href: 'https://www.beliani.ch/hallway/storage/',
		background: '#FECD8C',
		tdClass: 'newsletterContainer10px',
		color: '#000000',
		type: 'grid',
		container: 'newsletterContainer10px',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottom35px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 24,
			mobilePaddingY: 10,
			background: '#750000',
			color: '#ffffff',
			textTransform: 'none',
			phrase: "Shop Hallway Storage",
		},
		paddingTop: 0,
		spaceBeforeProducts: 'newsletterBottom20px',
		title: {
			color: '#750000',
			position: 'beforeImg',
			show: true,
			align: 'left',
			// spaceBefore: 'newsletterBottom80px',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 600;',
			container: 'newsletterContainer',
		},
		paragraph: {
			show: true,
			align: 'left',
			position: 'beforeImg',
			container: 'newsletterContainer',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'left',
			gapBetweenVertical: 'newsletterBottom10px',
			gapBetweenHorizontal: 5,
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// MONNAIE
			{
				id: '553994',
				src: translateImage({ value: '20260924_Pic11A.png' }),
			},
			// LYNWOOD
			{
				id: '569047',
				src: translateImage({ value: '20260924_Pic12A.png' }),
			},
			// COOMA
			{
				id: '681658',
				src: translateImage({ value: '20260924_Pic13A.png' }),
			},
			// HARDIN
			{
				id: '662471',
				src: translateImage({ value: '20260924_Pic14A.png' }),
			},
		],
	},
	{
		name: 'Lighting',
		src: getImageUrl('20260924_Cat20a.jpg', true),
		href: 'https://www.beliani.ch/lighting/',
		background: '#FECD8C',
		color: '#000000',
		tdClass: 'newsletterContainer10px',
		type: 'grid',
		container: 'newsletterContainer10px',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottom35px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 24,
			mobilePaddingY: 10,
			background: '#750000',
			color: '#ffffff',
			textTransform: 'none',
			phrase: "Shop Lighting",
		},
		paddingTop: 0,
		spaceBeforeProducts: 'newsletterBottom20px',
		title: {
			color: '#750000',
			position: 'beforeImg',
			show: true,
			align: 'left',
			// spaceBefore: 'newsletterBottom80px',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 600;',
			container: 'newsletterContainer',
		},
		paragraph: {
			show: true,
			align: 'left',
			position: 'beforeImg',
			container: 'newsletterContainer',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'left',
			gapBetweenVertical: 'newsletterBottom10px',
			gapBetweenHorizontal: 5,
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// SELB
			{
				id: '638069',
				src: translateImage({ value: '20260924_Pic21A.png' }),
			},
			// BEDAS
			{
				id: '494384',
				src: translateImage({ value: '20260924_Pic22A.png' }),
			},
			// ARWADITO
			{
				id: '444467',
				src: translateImage({ value: '20260924_Pic23A.png' }),
			},
			// OTEROS
			{
				id: '458676',
				src: translateImage({ value: '20260924_Pic24A.png' }),
			},
		],
	},
	{
		name: 'Textiles',
		src: getImageUrl('20260924_Cat30a.jpg', true),
		href: 'https://www.beliani.ch/textiles/',
		background: '#FECD8C',
		color: '#000000',
		tdClass: 'newsletterContainer10px',
		type: 'grid',
		container: 'newsletterContainer10px',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottom35px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 24,
			mobilePaddingY: 10,
			background: '#750000',
			color: '#ffffff',
			textTransform: 'none',
			phrase: "Shop Textiles",
		},
		paddingTop: 0,
		spaceAfter: 'newsletterBottom80px',
		spaceBeforeProducts: 'newsletterBottom20px',
		title: {
			color: '#750000',
			position: 'beforeImg',
			show: true,
			align: 'left',
			// spaceBefore: 'newsletterBottom80px',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 600;',
			container: 'newsletterContainer',
		},
		paragraph: {
			show: true,
			align: 'left',
			position: 'beforeImg',
			container: 'newsletterContainer',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom35px',
		},
		product: {
			align: 'left',
			gapBetweenVertical: 'newsletterBottom10px',
			gapBetweenHorizontal: 5,
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// TATSOI
			{
				id: '459701',
				src: translateImage({ value: '20260924_Pic31A.png' }),
			},
			// CUBUK
			{
				id: '395527',
				src: translateImage({ value: '20260924_Pic32A.png' }),
			},
			// SHASA
			{
				id: '416731',
				src: translateImage({ value: '20260924_Pic33A.png' }),
			},
			// SUMNER
			{
				id: '720460',
				src: translateImage({ value: '20260924_Pic34A.png' }),
			},
		],
	},
];

const timer = {
	freebies: [
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
	deadline: '2026-09-27',
}

export default new entities.Campaign({
	startId: 48405,
	name: 'new freebie layout test',
	date: '24.09.2026',
	issueCardId: 531053,
	lpId: 32664,
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
				color: '#000000', // unused
				backgroundColor: '#FECD8C', // unused
				alignment: 'left',
				type: 'paragraph',
				spaceTop: 'newsletterBottom35px',
				spaceBottom: 'newsletterBottom20px',
				container: 'newsletterContainer40px',
				cta: {
					variant: 'button',
					spaceAfter: 'newsletterBottom35px',
					paddingX: 45,
					paddingY: 16,
					mobilePaddingX: 24,
					mobilePaddingY: 10,
					background: '#750000',
					color: '#ffffff',
					textTransform: 'none',
					tdClass: 'newsletterContainer40px',
				},
			},
			Inside: {
				color: '#ffffff',
				backgroundColor: '#750000',
				unitBackground: '#A86A6A',
				type: 'timer',
				spaceBefore: 'newsletterBottom35px',
			},
			css: types.CSS.NS,
			additionalCss: additionalCss,
			name: 'Newsletter',
			type: types.NEWSLETTER,
			translationsSpreadsheet: campaignTranslationsSheet,
			wrapper: types.WRAPPER,
			// TopImageTitle_data: TopImageTitle_data,
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
				color: '#000000', // unused
				backgroundColor: '#FECD8C', // unused
				alignment: 'left',
				type: 'paragraph',
				spaceTop: 'newsletterBottom35px',
				spaceBottom: 'newsletterBottom20px',
				container: 'newsletterContainer40px',
				cta: {
					variant: 'button',
					spaceAfter: 'newsletterBottom35px',
					paddingX: 45,
					paddingY: 16,
					mobilePaddingX: 24,
					mobilePaddingY: 10,
					background: '#750000',
					color: '#ffffff',
					textTransform: 'none',
					tdClass: 'newsletterContainer40px',
				},
			},
			Inside: {
				color: '#ffffff',
				backgroundColor: '#750000',
				unitBackground: '#A86A6A',
				type: 'timer',
				spaceBefore: 'newsletterBottom35px',
			},
			css: types.CSS.LP,
			additionalCss: additionalCssLp,
			name: 'Landing',
			type: types.LANDINGPAGE,
			translationsSpreadsheet: campaignTranslationsSheet,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			timer: timer,
		},
	],
});
