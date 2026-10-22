// Campaign generated from form
const campaignTranslationsSheet = '2026::Advent_calendar_popups';
const T = campaignTranslationsSheet;

const tableQueries = [
  { tableRange: '16:17', name: 'TopImageTitle' },
  { tableRange: '23',    name: 'intro' },
  { tableRange: '24:27', name: 'paragraph' },
  { tableRange: '28:29', name: 'condition' },

  // ===== Shared popup texts =====
  { tableRange: '2', name: 'SeeConditions', tableName: T },
  { tableRange: '3', name: 'UpTo',          tableName: T }, // "Up to 50% OFF"
  { tableRange: '4', name: 'OnlyToday',     tableName: T },

  // ===== Popups (one block per day) =====
  { tableRange: '5:6',   name: 'Popup1',  tableName: T }, // Title, Description
  { tableRange: '7:11',  name: 'Popup2',  tableName: T }, // Subtitle, Title, Description, Code, Voucher
  { tableRange: '12',    name: 'Popup3',  tableName: T }, // Title
  { tableRange: '13:16', name: 'Popup4',  tableName: T }, // Title, Description, Voucher, Code
  { tableRange: '17:20', name: 'Popup5',  tableName: T }, // Title, Description, Code, Voucher
  { tableRange: '21:24', name: 'Popup6',  tableName: T },
  { tableRange: '25',    name: 'Popup7',  tableName: T },
  { tableRange: '26:29', name: 'Popup8',  tableName: T }, // Title, Description, Voucher, Code
  { tableRange: '30:33', name: 'Popup9',  tableName: T },
  { tableRange: '34:37', name: 'Popup10', tableName: T },
  { tableRange: '38',    name: 'Popup11', tableName: T },
  { tableRange: '39',    name: 'Popup12', tableName: T },
  { tableRange: '40',    name: 'Popup13', tableName: T },
  { tableRange: '41:44', name: 'Popup14', tableName: T },
  { tableRange: '45:48', name: 'Popup15', tableName: T },
  { tableRange: '49:61', name: 'Popup16', tableName: T }, // Title, 3× Desc desktop, 3× Desc mobile, 3× Code, 3× Voucher
  { tableRange: '62',    name: 'Popup17', tableName: T },
  { tableRange: '63:66', name: 'Popup18', tableName: T },
  { tableRange: '67:70', name: 'Popup19', tableName: T },
  { tableRange: '71:74', name: 'Popup20', tableName: T },
  { tableRange: '75:78', name: 'Popup21', tableName: T },
  { tableRange: '79:82', name: 'Popup22', tableName: T },
  { tableRange: '83:86', name: 'Popup23', tableName: T },
  { tableRange: '87',    name: 'Popup24', tableName: T },

  // ===== Conditions =====
  { tableRange: '89',  name: 'Regular Conditions', tableName: T },
  { tableRange: '90',  name: 'Conditions2',  tableName: T },
  { tableRange: '91',  name: 'Conditions4',  tableName: T },
  { tableRange: '92',  name: 'Conditions5',  tableName: T },
  { tableRange: '93',  name: 'Conditions6',  tableName: T },
  { tableRange: '94',  name: 'Conditions8',  tableName: T },
  { tableRange: '95',  name: 'Conditions9',  tableName: T },
  { tableRange: '96',  name: 'Conditions10', tableName: T },
  { tableRange: '97',  name: 'Conditions14', tableName: T },
  { tableRange: '98',  name: 'Conditions15', tableName: T },
  { tableRange: '99',  name: 'Conditions16', tableName: T },
  { tableRange: '100', name: 'Conditions18', tableName: T },
  { tableRange: '101', name: 'Conditions19', tableName: T },
  { tableRange: '102', name: 'Conditions20', tableName: T },
  { tableRange: '103', name: 'Conditions21', tableName: T },
  { tableRange: '104', name: 'Conditions22', tableName: T }, // not checked – the export stopped at row 103
  { tableRange: '105', name: 'Conditions23', tableName: T }, // not checked – the export stopped at row 103
];

const links = {
  TopImage_src: getImageUrl('uk_advent_img.png'),
  TopImage_src_lp: translateImage({value: '_advent_lp.png'}),
  TopImage_href: translateLink({ value: 'content/advent-calendar' }),
  Banner_1: translateLink({ value: 'content/lp26-08-28' }),
  Banner_1_Image: translateImage({ value: '20260828b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-27' }),
  Banner_2_Image: translateImage({ value: '20260827b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-31' }),
  columnsImage_src: translateImage({ value: '_advent_cols.png' }),
  columnsImage_href: translateLink({ value: 'content/advent-calendar' }),
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
  spaceTop: "newsletterBottom20px",
  spaceBottom: "newsletterBottom25px",
  container: "newsletterContainer40px",
  cta: {
    spaceAfter: "newsletterBottom35px",
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