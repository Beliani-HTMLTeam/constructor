const campaignTranslationsSheet = '2026::07.10.26 - Living room';

const tableQueries = [
  {
    tableRange: '19:25',
    name: 'paragraphs',
  },
  {
    tableRange: '28:34',
    name: 'categoryLinks',
  },
  {
		tableRange: '15:16',
		name: 'timer',
		tableName: '2026::Voucher - 06.10.26 - Free Bathroom set',
	},
];

const links = {
  TopImage_src: translateImage({ value: '20261008_Pic.png' }),
	TopImage_href: translateLink({ value: 'content/lp26-10-08-tb' }),

  Banner_1: translateLink({ value: 'content/lp26-09-24' }),
  Banner_1_Image: translateImage({ value: '20260924b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-30' }),
  Banner_2_Image: translateImage({ value: '20260930b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-10-06' }),

  Intro_cta_href: "https://www.beliani.ch",
};

const additionalCss = `
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}}
`;

const additionalCssLp = `
#newsletter .campaignEyebrow{font-size:12px;font-family:"Poppins",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
#newsletter .campaignHeadline{font-size:53px;font-family:"Poppins",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){#newsletter .campaignHeadline{font-size:32px!important}#newsletter .campaignInset{width:10px!important}#newsletter .campaignTileLink{padding:10px!important}}
`;

const palette = {
  accent: '#FF2F00',
  dark: '#750000',
  text: '#000000',
  page: '#F2E6E6',
  intro: '#FECD8C',
  box: '#FFFFFF',
  boxBorder: '#FFCCB7',
};

const button = {
  show: true,
  align: 'left',
  variant: 'button',
  background: palette.dark,
  fontSize: '14px',
  lineHeight: '14px',
  fontWeight: '700',
  letterSpacing: '0',
  paddingX: 45,
  paddingY: 16,
  mobilePaddingX: 24,
  mobilePaddingY: 14,
};

const categories = [
	{
		background: '#FF2F00',
		color: '#000000',
		type: 'deal_new',
		textColor: '#FFFFFF',
		href: translateLink({ value: 'content/lp26-11-11' }),
		copyToast: {
			background: '#750000',
			color: '#FFFFFF',
		},
		// newsletter only - on the landing page the deal is rendered as text
		dealImg: translateImage({ value: '_20261002_deal.png' }),
		// french shops put the discount after the description
		rowOrder: {
			default: ['row1', 'row2', 'row3'],
			'fr,chfr,befr': ['row1', 'row3', 'row2'],
		},
		paddingTop: 0,
		// top padding of the deal block - space before the deal header
		paragraph: { spaceAfter: 'newsletterBottom40px' },
		spaceAfterHeader: 'newsletterBottom20px',
		spaceAfterTitle: 'newsletterBottom20px',
		spaceBeforeDeal: 'newsletterBottom35px',
		spaceAfterDeal: 'newsletterBottom35px',
		spaceAfterCodeCta: 'newsletterBottom20px',
		// bottom padding of the deal block
		spaceAfterConditions: 'newsletterBottom40px',
		dealTitle: { styles: 'font-size: 34px; font-weight: 700;' },
		spaceAfter: 0,
	},
	{
		background: '#F6E7E6',
		color: '#000000',
		type: 'rowswith3categories',
		paddingTop: 0,
		showTileText: true,
		tileNameColor: '#750000',
		tileCtaColor: '#000000',
		spaceBetweenRows: 'newsletterBottom35px',
		spaceAfter: 'newsletterBottom60px',
		heading: {
			phrase: 'Shop by category',
			align: 'center',
			spaceAfter: 'newsletterBottom35px',
		},
		categories:
			[
				[
					{
						name: "Sofas",
						href: 'https://www.beliani.ch/sofas/',
						src: getImageUrl('20261002_Sofas.png', true),
					},
					{
						name: "Beds",
						href: 'https://www.beliani.ch/beds/',
						src: getImageUrl('20261002_Beds.png', true),
					},
					{
						name: "Armchairs",
						href: 'https://www.beliani.ch/armchairs/',
						src: getImageUrl('20261002_Armchairs.png', true),
					},

				],
				[
					{
						name: "Tables",
						href: 'https://www.beliani.ch/tables/',
						src: getImageUrl('20261002_Tables.png', true),
					},
					{
						name: "Chairs",
						href: 'https://www.beliani.ch/chairs/',
						src: getImageUrl('20261002_Chairs.png', true),
					},
					{
						name: "Storage",
						href: 'https://www.beliani.ch/storage/',
						src: getImageUrl('20261002_Storage.png', true),
					},
				],
				[
					{
						name: "Desks",
						href: 'https://www.beliani.ch/desks/',
						src: getImageUrl('20261002_Desks.png', true),
					},
					{
						name: "Kids",
						href: 'https://www.beliani.ch/children-room/',
						src: getImageUrl('20261002_Kids.png', true),
					},
					{
						name: "Lighting",
						href: 'https://www.beliani.ch/lighting/',
						src: getImageUrl('20261002_Lighting.png', true),
					},
				],
				[
					{
						name: "Bathtubs",
						href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
						src: getImageUrl('20261002_Bathtubs.png', true),
					},
					{
						name: "Rugs",
						href: 'https://www.beliani.ch/rugs/',
						src: getImageUrl('20261002_Rugs.png', true),
					},
					{
						name: "Accessories",
						href: 'https://www.beliani.ch/accessories-decor/',
						src: getImageUrl('20261002_Accessories.png', true),
					},
				],
			]
	},
];

export default new entities.Campaign({
  startId: 49184,
  lpId: 33149,
  issueCardId: 545778,
  version: 'new',
  name: 'Black Week Products',
  date: '11.11.2026',
  figmaUrl: 'https://www.figma.com/design/ogPlLDdBauWF2k9pC2xvTX/2026.11.11---Black-Week-product-categories?node-id=13249-712&t=W3EO2Eswp9yNWkTx-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Friday,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#000000',
      color: '#ffffff',

      // TopImage_data: TopImage_data,

      wrapper: types.WRAPPER,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCss,
    },

    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Friday,
      css: types.CSS.LP,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#000000',
      color: '#ffffff',

      // TopImage_data: TopImage_data,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCssLp,
    }
  ]
})