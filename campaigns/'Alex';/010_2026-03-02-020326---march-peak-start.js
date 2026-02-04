// Campaign generated from form
const campaignTranslationsSheet = '2026::02.03.26 - March Peak Start';

const tableQueries = [
  {
    tableRange: '23',
    name: 'TopImageTitle',
  },
  {
    tableRange: '25',
    name: 'intro',
  },
  {
    tableRange: '39',
    name: 'cta',
  },
  {
    tableRange: '26:38',
    name: 'categories',
  },
  {
    tableRange: '43:44',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-02' }),
  TopImageTitle_src: translateImage({ value: '20260302_01.png' }),
  TopImage_src: translateImage({ value: '20260302_gif.gif' }),
  Banner_1: translateLink({ value: 'content/lp26-02-12' }),
  Banner_1_Image: translateImage({ value: '20260212b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-05' }),
  Banner_2_Image: translateImage({ value: '20260205b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'sin',
};

// const timer = {
//   freebies: getImageUrl('YYYYMMDD_Free.png', true),
//   // ! REMEMBER TO REPLACE THOSE URLS
//   image: {
//     CHDE: 'https://gen.sendtric.com/countdown/3x5402a5a5',
//     CHFR: 'https://gen.sendtric.com/countdown/7d3zl0s986',
//     FR: 'https://gen.sendtric.com/countdown/12rdr6dtgo',
//     DE: 'https://gen.sendtric.com/countdown/sv2q3k1x3y',
//     UK: 'https://gen.sendtric.com/countdown/c4cghowbf1',
//     AT: 'https://gen.sendtric.com/countdown/ypa0wk4eup',
//     ES: 'https://gen.sendtric.com/countdown/sehb5k3z7z',
//     PL: 'https://gen.sendtric.com/countdown/zlnhbu660w',
//     NL: 'https://gen.sendtric.com/countdown/mr9bn0q4c8',
//     PT: 'https://gen.sendtric.com/countdown/61n8wy3y4m',
//     IT: 'https://gen.sendtric.com/countdown/lxloewzogf',
//     SE: 'https://gen.sendtric.com/countdown/y2imagqwpt',
//     HU: 'https://gen.sendtric.com/countdown/udnrsqd4o8',
//     DK: 'https://gen.sendtric.com/countdown/uvfzgmkwr6',
//     CZ: 'https://gen.sendtric.com/countdown/ajq5qcnl44',
//     FI: 'https://gen.sendtric.com/countdown/hgh6virvh8',
//     NO: 'https://gen.sendtric.com/countdown/nfx8ncvozu',
//     SK: 'https://gen.sendtric.com/countdown/x8yr4llgxx',
//     BENL: 'https://gen.sendtric.com/countdown/442t1ogqur',
//     BEFR: 'https://gen.sendtric.com/countdown/kgyur9di1m',
//     RO: 'https://gen.sendtric.com/countdown/ke5m9a4zrx',
//   },
// };

const categories = [
  // TODO: Add categories here
];

export default new entities.Campaign({
  startId: "00001",
  name: "02.03.26 - March Peak Start",
  date: "02.03.2026",
  issueCardId: "446471",
  lpId: "0001",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/UoCPi4AhQ178fgzKnWASf6/2026.03---March-Peak--Copy-?node-id=8001-3604&p=f&t=wbBrUOPzxhtX0xOp-0",
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
      // timer: timer,
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
      // timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
      soon_banners: true,
    },
  ],
});