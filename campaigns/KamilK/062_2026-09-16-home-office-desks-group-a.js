// Campaign generated from form
const campaignTranslationsSheet = '2026::16.09.26 - Home office desks';

const tableQueries = [
	{
		tableRange: '16:17',
		name: 'TopImageTitle',
	},
	{
		tableRange: '19:21',
		name: 'intro',
	},
	{
		tableRange: '22:25',
		name: 'paragraphs',
	},
	{
		tableRange: '26:27',
		name: 'condition',
	},
];

const links = {
	// TopImageTitle_href: translateLink({ value: 'content/lp26-09-16-ta' }),
	// TopImageTitle_src: translateImage({ value: '20260916_01.png' }),

	// TopImage_src: getImageUrl('20260916_Top.png', true),
	// TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

	Banner_1: translateLink({ value: 'content/lp26-09-09' }),
	Banner_1_Image: translateImage({ value: '20260909a.png' }),

	Banner_2: translateLink({ value: 'content/lp26-09-04' }),
	Banner_2_Image: translateImage({ value: '20260904a.png' }),

	intro_href: translateLink({ value: 'content/lp26-09-16' }),
};

// const TopImageTitle_data = {
//   color: '#000000',
//   backgroundColor: '#F6E7E6',
//   type: 'twoSameLines',
// };

const additionalCss = `
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

  .newsletterBottomAlways20px {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    .newsletterCtaLink {
      width: auto;
      max-width: 100%;
    }

    .newsletterContainer60px {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

const categories = [
	{
		name: 'Home Office Desks',
		src: getImageUrl('20260916_Cat00a.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/desks/home-office-desks/',
		background: '#F6E7E6',
		color: '#000000',
		type: 'grid',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottomAlways20px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 10,
			mobilePaddingY: 14,
			background: '#750000',
			color: '#ffffff',
		},
		paddingTop: 0,
		title: {
			position: 'afterImg',
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 400;',
		},
		paragraph: {
			show: true,
			align: 'center',
			container: 'newsletterContainer60px',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom60px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: 'newsletterBottom20px',
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// ELURA 
			{
				id: '818238',
				src: translateImage({ value: '20260916_Pic01a.png' }),
			},
			// LEXTON 
			{
				id: '824640',
				src: translateImage({ value: '20260916_Pic02a.png' }),
			},
			// BROXTON 
			{
				id: '97824',
				src: translateImage({ value: '20260916_Pic03a.png' }),
			},
			// NOVEN 
			{
				id: '818114',
				src: translateImage({ value: '20260916_Pic04a.png' }),
			},
		],
	},
	{
		name: 'Adjustable Desks',
		src: getImageUrl('20260916_Cat10a.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/desks/adjustable-desks/',
		background: '#750000',
		color: '#ffffff',
		type: 'grid',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottomAlways20px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 10,
			mobilePaddingY: 14,
			background: '#F6E7E6',
			color: '#000000',
		},
		paddingTop: 0,
		title: {
			position: 'afterImg',
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 400;',
		},
		paragraph: {
			show: true,
			align: 'center',
			container: 'newsletterContainer60px',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom60px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: 'newsletterBottom20px',
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// PENLY 
			{
				id: '682689',
				src: translateImage({ value: '20260916_Pic11a.png' }),
			},
			// LUCAMA 
			{
				id: '682234',
				src: translateImage({ value: '20260916_Pic12a.png' }),
			},
			// WILBANKS 
			{
				id: '682520',
				src: translateImage({ value: '20260916_Pic13a.png' }),
			},
			// DESTINES 
			{
				id: '443781',
				src: translateImage({ value: '20260916_Pic14a.png' }),
			},
		],
	},
	{
		name: 'Kids Desks',
		src: getImageUrl('20260916_Cat20a.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/desks/desks-for-kids/',
		background: '#F6E7E6',
		color: '#000000',
		type: 'grid',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottomAlways20px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 10,
			mobilePaddingY: 14,
			background: '#750000',
			color: '#ffffff',
		},
		paddingTop: 0,
		title: {
			position: 'afterImg',
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 400;',
		},
		paragraph: {
			show: true,
			align: 'center',
			container: 'newsletterContainer60px',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom60px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: 'newsletterBottom20px',
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// BUXTON
			{
				id: '710969',
				src: translateImage({ value: '20260916_Pic21a.png' }),
			},
			// JOHNSON
			{
				id: '234488',
				src: translateImage({ value: '20260916_Pic22a.png' }),
			},
			// THESLAY
			{
				id: '729165',
				src: translateImage({ value: '20260916_Pic23a.png' }),
			},
			// OCATE 
			{
				id: '712864',
				src: translateImage({ value: '20260916_Pic24a.png' }),
			},
		],
	},
	{
		name: 'Foldable Desks',
		src: getImageUrl('20260916_Cat30a.jpg', true),
		href: 'https://www.beliani.ch/office-furniture/desks/foldable-home-office-desks/',
		background: '#750000',
		color: '#ffffff',
		type: 'grid',
		cta: {
			variant: 'button',
			spaceBefore: 'newsletterBottomAlways20px',
			paddingX: 45,
			paddingY: 16,
			mobilePaddingX: 10,
			mobilePaddingY: 14,
			background: '#F6E7E6',
			color: '#000000',
		},
		paddingTop: 0,
		spaceAfter: 'newsletterBottom40px',
		title: {
			position: 'afterImg',
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom20px',
			styles: 'font-weight: 400;',
		},
		paragraph: {
			show: true,
			align: 'center',
			container: 'newsletterContainer60px',
			// spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom60px',
		},
		product: {
			align: 'center',
			gapBetweenVertical: 'newsletterBottom20px',
			prices: false,
			name: false,
			hideLastBottomGap: true,
		},
		products: [
			// CAVI black legs white desk
			{
				id: '509092',
				src: translateImage({ value: '20260916_Pic31a.png' }),
			},
			// CAVI white legs
			{
				id: '509038',
				src: translateImage({ value: '20260916_Pic32a.png' }),
			},
			// BENDI 
			{
				id: '684377',
				src: translateImage({ value: '20260916_Pic33a.png' }),
			},
			// CAVI black legs short
			{
				id: '684337',
				src: translateImage({ value: '20260916_Pic34a.png' }),
			},
		],
	},
	{
		name: 'This may also interest you',
		// src: getImageUrl('20260916_Cat30.png', true),
		// href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
		background: '#FFFFFF',
		color: '#000000',
		type: 'categorytiles',
		cta: false,
		paddingTop: 0,
		spaceAfter: 'newsletterBottom60px',
		title: {
			className: 'newsletterAditionalTitle',
			align: 'center',
			show: true,
			spaceBefore: 'newsletterBottom40px',
			spaceAfter: 'newsletterBottom35px',
			styles: 'font-weight: 400;',
			// spaceAfter: 'newsletterBottom35px',
		},
		paragraph: {
			show: false,
			align: 'center',
			container: 'newsletterContainer60px',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 0,
		},
		product: {
			align: 'center',
		},
		showTileNames: false,
		tiles: [
			{
				name: 'Office Chairs',
				src: translateImage({ value: '20260916/tiles/_office-chairs.png', placeholderPosition: 53 }),
				href: 'https://www.beliani.ch/office-furniture/office-chairs/',
			},
			{
				name: 'Storage',
				src: translateImage({ value: '20260916/tiles/_storage.png', placeholderPosition: 53 }),
				href: 'https://www.beliani.ch/office-furniture/storage-units-and-cabinets/',
			},
			{
				name: 'Office Lighting',
				src: translateImage({ value: '20260916/tiles/_office-lighting.png', placeholderPosition: 53 }),
				href: 'https://www.beliani.ch/office-furniture/office-lighting/',
			},
			{
				name: 'Screens & Room dividers',
				src: translateImage({ value: '20260916/tiles/_screen-&-room-divider.png', placeholderPosition: 53 }),
				href: 'https://www.beliani.ch/office-furniture/office-desk-dividers/',
			},
		],
	},
];

export default new entities.Campaign({
	startId: 47701,
	name: 'Home Office Desks GROUP A',
	date: '16.09.2026',
	issueCardId: 526898,
	lpId: 32274,
	version: 'new',
	alarm: {
		isActive: false,
	},
	isArchive: false,
	optimizeImg: true,
	figmaUrl: 'https://www.figma.com/design/p9aA65hbpxkshV8iqkpLrh/',
	templates: [
		{
			background: '#F6E7E6',
			color: '#000000',
			template: templates.Thursday, // User should change this

			intro: {
				href: 'intro_href',
				color: '#000000', // unused
				backgroundColor: '#F6E7E6', // unused
				alignment: 'center',
				type: 'paragraph',
				spaceTop: 'newsletterBottom60px',
				spaceBottom: 'newsletterBottom60px',
				container: 'newsletterContainer60px',
				title: {
					styles: "font-weight: 400;"
				},
				paragraph: {
					styles: "line-height: 1.44;"
				}
			},
			css: types.CSS.NS,
			additionalCss: additionalCss,
			name: 'Newsletter',
			type: types.NEWSLETTER,
			translationsSpreadsheet: campaignTranslationsSheet,
			wrapper: types.WRAPPER,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
		},
		{
			background: '#F6E7E6',
			color: '#000000',
			template: templates.Thursday, // User should change this

			intro: {
				href: 'intro_href',
				color: '#000000', // unused
				backgroundColor: '#F6E7E6', // unused
				alignment: 'center',
				type: 'paragraph',
				spaceTop: 'newsletterBottom60px',
				spaceBottom: 'newsletterBottom60px',
				container: 'newsletterContainer60px',
				title: {
					styles: "font-weight: 400;"
				},
				paragraph: {
					styles: "line-height: 1.44;"
				}
			},
			css: types.CSS.LP,
			additionalCss: additionalCss,
			name: 'Landing',
			type: types.LANDINGPAGE,
			translationsSpreadsheet: campaignTranslationsSheet,
			// TopImageTitle_data: TopImageTitle_data,
			categories: categories,
			links: links,
			tableQueries: tableQueries,
		},
	],
});
