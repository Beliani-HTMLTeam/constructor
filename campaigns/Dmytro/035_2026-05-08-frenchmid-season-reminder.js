// Campaign generated from form
const campaignTranslationsSheet = '2026::08.05.26 - FrenchMid Season reminder';

const tableQueries = [
  {
    "tableRange": "20:21",
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
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-08' }),
  TopImageTitle_src: translateImage({ value: '20260508_01.png' }),
  TopImage_src: getImageUrl('20260508_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-08' }),
  Banner_1: translateLink({ value: 'content/lp26-05-01' }),
  Banner_1_Image: translateImage({ value: '20260501b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-30' }),
  Banner_2_Image: translateImage({ value: '20260430b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE6DB',
  type: 'twoSameLines',
};

const timer = {
  position: "insideTopImageTitle",
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/x5tnbyrbzx",
    "CHFR": "https://gen.sendtric.com/countdown/h9vfvmtplz",
    "FR": "https://gen.sendtric.com/countdown/lm52pqpq8n",
    "DE": "https://gen.sendtric.com/countdown/odea9oxzc5",
    "UK": "https://gen.sendtric.com/countdown/0mzx0bj5mw",
    "AT": "https://gen.sendtric.com/countdown/w5yalzr873",
    "ES": "https://gen.sendtric.com/countdown/xex78toi7i",
    "PL": "https://gen.sendtric.com/countdown/gbibwu59nh",
    "NL": "https://gen.sendtric.com/countdown/5rt1a5b8td",
    "PT": "https://gen.sendtric.com/countdown/ogsnt819py",
    "IT": "https://gen.sendtric.com/countdown/ebvim6mae6",
    "SE": "https://gen.sendtric.com/countdown/a0jtbn46ga",
    "HU": "https://gen.sendtric.com/countdown/b7idupd41s",
    "DK": "https://gen.sendtric.com/countdown/9tzh5lwaxu",
    "CZ": "https://gen.sendtric.com/countdown/0lsnubjozu",
    "FI": "https://gen.sendtric.com/countdown/aflddrgwz2",
    "NO": "https://gen.sendtric.com/countdown/sb5dvq452u",
    "SK": "https://gen.sendtric.com/countdown/rmll742y6m",
    "BENL": "https://gen.sendtric.com/countdown/lz4r5qwbox",
    "BEFR": "https://gen.sendtric.com/countdown/v0k1cjaau9",
    "RO": "https://gen.sendtric.com/countdown/dyznga2dt8"
  }
};

const categories = [
  // TODO: Add categories here
];

export default new entities.Campaign({
  startId: "42477",
  name: "FrenchMid Season reminder",
  date: "08.05.2026",
  issueCardId: "466278",
  lpId: "29515",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/G0SqrF57nfOpKPILiHygDD/2026.05.08--French-Days-Mid-Season-sale-reminder?node-id=0-1&t=ZMsHcKOUthFAYRdO-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFE6DB",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "center",
        type: "codes",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: "#FFE6DB",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "center",
        type: "codes",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});