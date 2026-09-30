const campaignTranslationsSheet = '2026::19.10.26 - October Peak Third';

const theme = {
  primary: '#FAF1F0',
  primaryText: '#750000',
  secondary: '#F2E6E6',
  secondaryText: '#FFCCB7',
  ctaText: '#FFF4E6',
  unitBg: '#AC6666',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introText: '#000000',
  insideBg: '#750000',
  toastBg: '#FBF3F0',
  toastText: '#750000',
};

const catData = [
  // Cat 1
  {
    name: 'Living room',
    src: translateImage({ value: '20261019_Cat01.png' }),
    // src: getImageUrl('20261019_Cat01.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
  },
  // Cat 2
  {
    name: 'Bedroom',
    src: translateImage({ value: '20261019_Cat02.png' }),
    // src: getImageUrl('20261019_Cat02.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
  },
  // Cat 3
  {
    name: 'Dining room',
    src: translateImage({ value: '20261019_Cat03.png' }),
    // src: getImageUrl('20261019_Cat03.jpg', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
  },
  // Cat 4
  {
    name: 'Bathroom',
    src: translateImage({ value: '20261019_Cat04.png' }),
    // src: getImageUrl('20261019_Cat04.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/',
  },
  // Cat 5
  {
    name: 'Office',
    src: translateImage({ value: '20261019_Cat05.png' }),
    // src: getImageUrl('20261019_Cat05.jpg', true),
    href: 'https://www.beliani.ch/office-furniture/',
  },
  // Cat 6
  {
    name: 'Hallway',
    src: translateImage({ value: '20261019_Cat06.png' }),
    // src: getImageUrl('20261019_Cat06.jpg', true),
    href: 'https://www.beliani.ch/hallway/',
  },
  // Cat 7
  {
    name: 'Kids room',
    src: translateImage({ value: '20261019_Cat07.png' }),
    // src: getImageUrl('20261019_Cat07.jpg', true),
    href: 'https://www.beliani.ch/children-room/',
  },
];

const tableQueries = [
  {
    name: 'intro',
    tableRange: '24',
  },
  {
    name: 'category_subtitle',
    tableRange: '25:31',
  },
  {
    name: 'condition',
    tableRange: '32:33',
  },
  
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-19' }),
  TopImageTitle_src: translateImage({ value: '20260827_01.png' }),

  TopImage_src: translateImage({ value: '20261019_Gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-19' }),

  Banner_1: translateLink({ value: 'content/lp26-10-08' }),
  Banner_1_Image: translateImage({ value: '20261008b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-09' }),
  Banner_2_Image: translateImage({ value: '20261009b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'twoSameLines',
};

const catObj = {
  type: 'category-banner',
  insideContainer: false,
  title: { show: true, position: 'beforeImg', align: 'center', },
  line: { show: true, src: 'https://pictureserver.net/static/2026/footer/line.jpg' },
  skipLinkTranslation: true,
  background: theme.primary,
  color: theme.black,
  cta: {
    phrase: 'Shop now',
    position: 'afterImg',
    align: 'center',
    color: theme.black,
  },
  options: {
    displayType: "withSubtitle",
    autoFitSubtitleCta: true,

    showTitle: false,
    showSubtitle: false,
    showCta: false,

    titleUpperCase: true,

    titleWeight: 600,

    titleClass: 'categoryPeakName',
  },
}

const categories = [
 ...catData.map((cat, idx) => ({
  ...catObj,
  name: cat.name,
  src: cat.src,
  href: cat.href,
 }))
];

export default new entities.Campaign({
  startId: "48857",
  name: "Monday - October Peak Third",
  date: "19.10.2026",
  issueCardId: "534511",
  lpId: "32959",
  // specialLpIds: {
  //   HR: '31562',
  //   SI: '31563',
  // },
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: "new",
  figmaUrl: "https://www.figma.com/design/pC70LMdl48JU2X9pDox3kk/",
  templates: [
    {
      background: theme.primary,
      color: theme.black,
      template: templates.Monday,

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImageMargin: 'newsletterTop35px',
      tableQueries: tableQueries,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        position: 'afterTopImage',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          spaceAfter: 'newsletterBottomIntro35px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
    },
    {
      background: theme.primary,
      color: theme.black,
      template: templates.Monday,

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImageMargin: 'newsletterTop35px',
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        position: 'afterTopImage',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          spaceAfter: 'newsletterBottomIntro35px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: true,
      // disableSoonEnding: true,
      disableKlarna: ['HR', 'SI'],
    },
  ],
});
