// Campaign generated from form
const campaignTranslationsSheet = '2026::04.09.26 - Home Accessories';

const tableQueries = [
  {
    "tableRange": "16:17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "23",
    "name": "intro"
  },
  {
    "tableRange": "24:27",
    "name": "paragraph"
  },
  {
    "tableRange": "28:29",
    "name": "condition"
  }
];

const links = {
  TopImage_src: translateImage({value: '_advent_gif.gif'}),
  TopImage_src_lp: translateImage({value: '_advent_lp.png'}),
  TopImage_href: translateLink({ value: 'content/advent-calendar' }),
  Banner_1: translateLink({ value: 'content/lp26-08-28' }),
  Banner_1_Image: translateImage({ value: '20260828b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-27' }),
  Banner_2_Image: translateImage({ value: '20260827b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-31' }),
  columnsImage_src: translateImage({ value: '_advent_cols.png' }),
  daily_deals_src: translateImage({ value: '_advent_footer.png' }),
  daily_deals_href: translateLink({ value: 'content/advent-calendar' }),
  Intro_cta_href: translateLink({ value: 'content/advent-calendar' }),
};

const TopImage_data = {
  container: 'newsletterContainer40px',
};

const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: '#F7EAE9',
  type: 'oneLine',
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#F7EAE9",
  alignment: "center",
  type: "paragraph",
  spaceBottom: "newsletterBottom25px",
  container: "newsletterContainer95px",
  cta: {
    spaceAfter: "newsletterBottom40px",
    color: "#FFF4E6",
    backgroundColor: "#750000",
  }
}

export default new entities.Campaign({
  startId: "47412",
  name: "Advent Calendar 2026",
  date: "01.12.2026",
  issueCardId: "524693",
  lpId: "32057",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/0bKX97o0xJZX4Odn2uNF8M/Advent-Calendar?node-id=151-842&t=uuC4s5ZrRnYNHvig-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.AdventCalendar2026, // User should change this
      css: types.CSS.NS_ADVENT_CALENDAR_2026,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F7EAE9",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      TopImage_data: TopImage_data,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.AdventCalendar2026, // User should change this
      css: types.CSS.LP_ADVENT_CALENDAR_2026,
      background: "#F7EAE9",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      TopImage_data: TopImage_data,
    },
  ],
});