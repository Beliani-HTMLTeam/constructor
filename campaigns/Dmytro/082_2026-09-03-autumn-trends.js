// Campaign generated from form
const campaignTranslationsSheet = '2026::03.09.26 - Autumn Trends';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20",
    "name": "intro"
  }, 
  {
    "tableRange": "21:24",
    "name": "categories"
  },
  {
    "tableRange": "25:28",
    "name": "paragraphs"
  },
  {
    "tableRange": "29:32",
    "name": "CTA"
  },
  {
    "tableRange": "33:34",
    "name": "condition"
  },
  {
    "tableRange": "15:16",
    "name": "2026::Voucher - 31.08.26 - Free gift"
  }
];

const links = {
  TopImageTitle_src: translateImage({ value: '20260903_01.png' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-03' }),
  TopImage_src: getImageUrl('20260903_gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-03' }),
  Banner_1: translateLink({ value: 'content/lp26-08-28' }),
  Banner_1_Image: translateImage({ value: '20260828b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-27' }),
  Banner_2_Image: translateImage({ value: '20260827b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-31' }),
  Intro_cta_href: 'https://www.beliani.ch/trends/'
};

const TopImage_data = {
  container: 'newsletterContainer55px',
}


const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F9EFEE',
  type: 'twoSameLines',
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#F9EFEE",
  alignment: "center",
  type: "paragraph",
}


const timer = {
  position: 'outsideTopImageTitle',
  deadline: '2026-09-06',
  freebies: getImageUrl('20260904free.png', true)
}

const categories = [
  {
		name: 'Spiced Tones',
		src: getImageUrl('20260903Category10.jpg', true),
		href: 'https://www.beliani.ch/trends/70s-revival/',
		background: '#F9EFEE',
		color: '#000000',
		type: 'grid',
    container: 'newsletterContainer55px',
		cta: {
			spaceBefore: 'newsletterBottom25px',
			phrase: 'Shop Spiced Tones',
		},
		paddingTop: '60',
		line: {
			show: true,
			insideContainer: true,
		},
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
			align: 'center',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom40px',
		},
		gapBetweenHorizontal: 5,
		product: {
			gapBetweenVertical: 'newsletterBottom10px',
			prices: false,
			name: false,
		},
		products: [
      // VANVEY
			{
				id: 647596,
				src: getImageUrl('20260903Category11.png', true),
			},
			// WOODEND
			{
				id: 824855,
				src: getImageUrl('20260903Category12.png', true),
			},
			// KISA
			{
				id: 516366,
				src: getImageUrl('20260903Category13.png', true),
			},
			// COLINA
			{
				id: 421836,
				src: getImageUrl('20260903Category14.png', true),
			}
		],
	},
	{
		name: 'Wood Everywhere',
		src: getImageUrl('20260903Category20.jpg', true),
		href: 'https://www.beliani.ch/trends/woodcore/',
		background: '#F9EFEE',
		color: '#000000',
		type: 'grid',
    container: 'newsletterContainer55px',
		cta: {
			spaceBefore: 'newsletterBottom25px',
			phrase: 'Shop Wood Everywhere',
		},
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',			
			align: 'center',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom40px',
		},
		line: {
			show: true,
			insideContainer: true,
		},
		gapBetweenHorizontal: 5,
		product: {
			gapBetweenVertical: 'newsletterBottom10px',
			prices: false,
			name: false,
		},
		products: [
			// KISA
			{
				id: 644786,
				src: getImageUrl('20260903Category21.png', true),
			},
			// GORRE 
			{
				id: 681985,
				src: getImageUrl('20260903Category22.png', true),
			},
			// MIDDLETOWN
			{
				id: 368803,
				src: getImageUrl('20260903Category23.png', true),
			},
			// WENLOCK 
			{
				id: 645088,
				src: getImageUrl('20260903Category24.png', true),
			},
		],
	},
	{
		name: 'Soft Touch',
		src: getImageUrl('20260903Category30.jpg', true),
		href: 'https://www.beliani.ch/trends/sensory-minimalism/',
		background: '#F9EFEE',
		color: '#000000',
		type: 'grid',
		cta: {
			spaceBefore: 'newsletterBottom25px',
			phrase: 'Shop Soft Touch',
		},
    container: 'newsletterContainer55px',
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
			align: 'center',
		},
		line: {
			show: true,
			insideContainer: true,
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom40px',
		},
		gapBetweenHorizontal: 5,
		product: {
			gapBetweenVertical: 'newsletterBottom10px',
			prices: false,
			name: false,
		},
		products: [
			// SALLA 
			{
				id: 716880,
				src: getImageUrl('20260903Category31.png', true),
			},
			// DAY 
			{
				id: 720157,
				src: getImageUrl('20260903Category32.png', true),
			},
			// CHAGYL
			{
				id: 502761,
				src: getImageUrl('20260903Category33.png', true),
			},
			// VANTIRA
			{
				id: 821124,
				src: getImageUrl('20260903Category34.png', true),
			},
		],
	},
	{
		name: 'Romantic Bloom',
		src: getImageUrl( '20260903Category40.jpg', true),
		href: 'https://www.beliani.ch/meet-beliani/colourful-charm/',
		background: '#F9EFEE',
		color: '#000000',
		type: 'grid',
		cta: {
			spaceBefore: 'newsletterBottom25px',
			phrase: 'Shop Romantic Bloom',
		},
    container: 'newsletterContainer55px',
		paddingTop: '35',
		title: {
			show: true,
			spaceAfter: 'newsletterBottom35px',
			align: 'center',
		},
		paragraph: {
			show: true,
			align: 'center',
			spaceBefore: 'newsletterBottom35px',
			spaceAfter: 'newsletterBottom40px',
		},
		gapBetweenHorizontal: 5,
		product: {
			gapBetweenVertical: 'newsletterBottom10px',
			prices: false,
			name: false,
		},
		products: [
			// HOVDEN
			{
				id: 735538,
				src: getImageUrl('20260903Category41.png', true),
			},
			// CHESTERFIELD 
			{
				id: 214073,
				src: getImageUrl('20260903Category42.png', true),
			},
			// LUNO
			{
				id: 735577,
				src: getImageUrl('20260903Category43.png', true),
			},
			// RAMIS 
			{
				id: 355655,
				src: getImageUrl('20260903Category44.png', true),
			},
		],
	},
];

export default new entities.Campaign({
  startId: "47284",
  name: "Autumn Trends 2026",
  date: "03.09.2026",
  issueCardId: "524693",
  lpId: "31972",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/iGDds4Dsgffot529a83GWj/Newsletter-Autumn-Trends-2026---Thursday-2026.09.03?node-id=10001-5178&t=bzJMBhebQniVpZYe-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F9EFEE",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: 'timer',
      },
      
			intro: {
				color: '#000000', 
				backgroundColor: '#F9EFEE', 
				alignment: 'center',
				type: 'paragraph',
        container: 'newsletterContainer55px',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
      links: links,
      tableQueries: tableQueries,
      TopImage_data: TopImage_data,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: "#F9EFEE",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      categories: categories,
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: 'timer',
      },
      intro: {
				color: '#000000', 
				backgroundColor: '#F9EFEE', 
				alignment: 'center',
        container: 'newsletterContainer55px',
				type: 'paragraph',
				cta: {
					show: true,
					spaceAfter: 'newsletterBottom35px',
				}
			},
      links: links,
      tableQueries: tableQueries,
      TopImage_data: TopImage_data,
    },
  ],
});