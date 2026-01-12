// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 20.01.26 - free mirror';

const tableQueries = [
  {
    tableRange: '21:22',
    name: 'TopImageTitle',
  },
  {
    tableRange: '50:52',
    name: 'condition',
  },
  {
    tableRange: '24:30',
    name: 'offerPart',
  },
  { tableRange: '28', name: 'codeCTA' },
  { tableRange: '29', name: 'code' },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-20' }),
  TopImageTitle_src: translateImage({ value: '20260120_01.png' }),
  TopImage_src: getImageUrl('20260120_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-20' }),
  Banner_1: translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_1_Image: translateImage({ value: '{yyyymmdd}b.png' }),
  Banner_2: translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_2_Image: translateImage({ value: '{yyyymmdd}b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'standard',
};

const timer = {
  freebies: getImageUrl('YYYYMMDD_Free.png', true),
  // ! REMEMBER TO REPLACE THOSE URLS
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/3x5402a5a5',
    CHFR: 'https://gen.sendtric.com/countdown/7d3zl0s986',
    FR: 'https://gen.sendtric.com/countdown/12rdr6dtgo',
    DE: 'https://gen.sendtric.com/countdown/sv2q3k1x3y',
    UK: 'https://gen.sendtric.com/countdown/c4cghowbf1',
    AT: 'https://gen.sendtric.com/countdown/ypa0wk4eup',
    ES: 'https://gen.sendtric.com/countdown/sehb5k3z7z',
    PL: 'https://gen.sendtric.com/countdown/zlnhbu660w',
    NL: 'https://gen.sendtric.com/countdown/mr9bn0q4c8',
    PT: 'https://gen.sendtric.com/countdown/61n8wy3y4m',
    IT: 'https://gen.sendtric.com/countdown/lxloewzogf',
    SE: 'https://gen.sendtric.com/countdown/y2imagqwpt',
    HU: 'https://gen.sendtric.com/countdown/udnrsqd4o8',
    DK: 'https://gen.sendtric.com/countdown/uvfzgmkwr6',
    CZ: 'https://gen.sendtric.com/countdown/ajq5qcnl44',
    FI: 'https://gen.sendtric.com/countdown/hgh6virvh8',
    NO: 'https://gen.sendtric.com/countdown/nfx8ncvozu',
    SK: 'https://gen.sendtric.com/countdown/x8yr4llgxx',
    BENL: 'https://gen.sendtric.com/countdown/442t1ogqur',
    BEFR: 'https://gen.sendtric.com/countdown/kgyur9di1m',
    RO: 'https://gen.sendtric.com/countdown/ke5m9a4zrx',
  },
};

const categories = [
  // TODO: Add categories here
];

export default new entities.Campaign({
  startId: "0001",
  name: "Voucher - 20.01.26 - free mirror",
  date: "20.01.2026",
  issueCardId: "437196",
  lpId: "0001",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/auKA6hhUzq5nT4QgTZjfMn/2026.01.20--free-mirror--Copy-?node-id=0-1&p=f&t=1WV9qcAg09tpMz9Q-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});