const campaignTranslationsSheet = '2026::Voucher - 27.11.26 - Black Week reminder';

const theme = {
  primary: '#000000',
  primaryText: '#FFFFFF',
  cardBg: '#FFF4E6',
  cardCtaBg: '#FF2F00',
  cardCtaText: '#FFFFFF',
  cardText: '#0A0A0A',
  cardDiscount: '#FF2F00',
  cardCode: '#FF2F00',
};

let cardData = [
  {
    name: 'card_1',
    tableRange: '27:30',
  },
  {
    name: 'card_2',
    tableRange: '31:34',
  },
  {
    name: 'card_3',
    tableRange: '35:38',
  },
  {
    name: 'card_4',
    tableRange: '39:42',
  },
]

const tableQueries = [
  { name: "TopImageTitle", tableRange: '22:24'},
  { name: 'card_title', tableRange: '26' },
  { name: 'offer_date', tableRange: '43' },
  { name: 'condition', tableRange: '44:46' },
  ...cardData,
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-27' }),
  TopImageTitle_src: translateImage({ value: '20261127_01.png' }),

  TopImage_src: translateImage({ value: '20261127_topImage.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-11-27' }),

  ShopNow_src: translateImage({ value: '20261127_shopNow.png' }),
  ShopNow_href: 'https://www.beliani.ch/',
  Timer_href: translateLink({ value: 'content/lp26-11-27' })
};

const TopImageTitle_data = {
  color: theme.primaryText,
  backgroundColor: theme.primary,
  type: 'three_lines',
};

const timer = {
  theme: 'Happy Red',
	deadline: '2026-11-29',
};

const timerInside = {
	type: 'timer',
	position: 'top',
	color: '#FF2F00',
	backgroundColor: '#000000',
	unitBackground: '#FAF1F0',
	showCta: false,
	spaceTop: 0,
	spaceBottom: 'newsletterBottom20px',
	container: 'newsletterContainer60px',
  labelColor: '#ffffff',
};

const categories = [
  {
    type: 'offer-cards',
    paddingTop: '0',
    spaceAfter: 0,
    background: theme.primary,
    title: { show: false },
    ctaHref: translateLink({ value: 'content/lp26-11-09' }),
    cta: {
      show: false,
      textOverrides: {
        fi: 'Ostoksille'
      }
    },
    tdClass: `newsletterContainer`,
  },
];

export default new entities.Campaign({
  startId: '49601',
  name: 'Black Week Reminder',
  date: '27.11.2026',
  issueCardId: '545784',
  lpId: '33382',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: 'https://www.figma.com/design/3Eb5LZjdtdRzOA8QRyKfqe/2026.11.27---Black-Week-reminder?node-id=16002-1753&t=ZVH9BStbXA697IJv-1',
  templates: [
    {
      background: theme.primary,
      color: theme.black,
      footer_theme: 'black',
      template: templates.BlackWeekFirst,

      Inside: timerInside,
			timer: timer,
      css: types.CSS.NS_BLACK_WEEK2,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: false,
      shopByCategory: false,
      theme,
      intro: false,
      // disableFooterCategories: true,
      disableSoonEnding: true,
      optimizeCss: true,
    },
    {
      background: theme.primary,
      color: theme.black,
      footer_theme: 'black',
      template: templates.BlackWeekFirst,

      Inside: timerInside,
			timer: timer,
      css: types.CSS.LP_BLACK_WEEK2,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableTopImageTitle: false,
      intro: false,
      disableKlarna: ['SI', 'HR'],
      disableSoonEnding: true,
    },
  ],
});
