// Campaign generated from form
const campaignTranslationsSheet = '2026::26.06.26 - Garden Accessories';

const tableQueries = [
  {
    "tableRange": "15:16",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
  },
  {
    "tableRange": "19:22",
    "name": "paragraphs"
  },
  {
    "tableRange": "23:24",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-26' }),
  TopImageTitle_src: translateImage({ value: '20260626_01.png' }),
  TopImage_src: getImageUrl('20260626_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-26' }),
  Banner_1: translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_1_Image: translateImage({ value: '{yyyymmdd}b.png' }),
  Banner_2: translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_2_Image: translateImage({ value: '{yyyymmdd}b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
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
  startId: "44689",
  name: "Garden Accessories",
  date: "26.06.2026",
  issueCardId: "495693",
  lpId: "30624",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/MqBuGNaD0NSPC10PIAzMlD/Newsletter-Garden-Accessories---Friday-2026.06.26?node-id=0-1&t=lzZtYk2EfJG25SD8-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F6E7E6",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260626free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: "#F6E7E6",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260626free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});