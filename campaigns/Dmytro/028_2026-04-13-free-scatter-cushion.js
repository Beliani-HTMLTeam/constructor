import { customisedMondayRegularNSLT } from "@/templates/DimaSrc/newsletter_customised_monday/template/mondayRegularNslt";
import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 13.04.26 - Free Scatter cushion';

const tableQueries = [
  {
    "tableRange": "22:23",
    "name": "tit"
  },
  {
    "tableRange": "25:28",
    "name": "offerPart"
  },
  {
    "tableRange": "29",
    "name": "codeCTA"
  },
  {
    "tableRange": "30",
    "name": "code"
  },
  {
    "tableRange": "32:33",
    "name": "intro"
  },
  {
    "tableRange": "37:39",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-13' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260413_01.png', folder: '20260413', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260413/20260413topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-04-13' }),
  Banner_1: translateLink({ value: 'content/lp26-04-02' }),
  Banner_1_Image: translateImage({ value: '20260402b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-01' }),
  Banner_2_Image: translateImage({ value: '20260401b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FECD8C',
  type: 'standard',
};

const categories = [
  {
    name: 'Living room',
    background: '#FECD8C',
    color: '#000000',
    src: getImageUrl('20260413/20260413Category10.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    products: [
      // VINLIDEN
      {
        id: '705238',
        src: getImageUrl('20260413/20260413Category11.png', true),
      },
      // LANDER
      {
        id: '711483',
        src: getImageUrl('20260413/20260413Category12.png', true),
      },
      // SKEI
      {
        id: '678878',
        src: getImageUrl('20260413/20260413Category13.png', true),
      },
      // COLLINS
      {
        id: '692572',
        src: getImageUrl('20260413/20260413Category14.png', true),
      },
    ],
  },
  {
    name: 'Dining room',
    background: '#FFD3C2',
    color: '#000000',
    src: getImageUrl('20260413/20260413Category20.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    products: [
      // GISELA
      {
        id: '655321',
        src: getImageUrl('20260413/20260413Category21.png', true),
      },
      // AMERY
      {
        id: '714315',
        src: getImageUrl('20260413/20260413Category22.png', true),
      },
      // GLENWOOD
      {
        id: '639619',
        src: getImageUrl('20260413/20260413Category23.png', true),
      },
      // TAMARIND
      {
        id: '678058',
        src: getImageUrl('20260413/20260413Category24.png', true),
      },
    ],
  },
  {
    name: 'Bedroom',
    background: '#FECD8C',
    color: '#000000',
    src: getImageUrl('20260413/20260413Category30.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    products: [
      // VIVIERS 
      {
        id: '706254',
        src: getImageUrl('20260413/20260413Category31.png', true),
      },
      // DAYDREAM
      {
        id: '570804',
        src: getImageUrl('20260413/20260413Category32.png', true),
      },
      // KYLEA
      {
        id: '711664',
        src: getImageUrl('20260413/20260413Category33.png', true),
      },
      // TOJSAN
      {
        id: '692047',
        src: getImageUrl('20260413/20260413Category34.png', true),
      },
    ],
  },
  {
    name: 'Office',
    background: '#FFD3C2',
    color: '#000000',
    src: getImageUrl('20260413/20260413Category40.png', true),
    href: 'https://www.beliani.ch/office-furniture/',
    products: [
      // RATANA
      {
        id: '702818',
        src: getImageUrl('20260413/20260413Category41.png', true),
      },
      // SOLIS
      {
        id: '711597',
        src: getImageUrl('20260413/20260413Category42.png', true),
      },
      // SPLIT
      {
        id: '707985',
        src: getImageUrl('20260413/20260413Category43.png', true),
      },
      // GLEORA
      {
        id: '702861',
        src: getImageUrl('20260413/20260413Category44.png', true),
      },
    ],
  },
];



const freebies = {
  options: {
    color: '#000000',
    background: '#FFD3C2',
  },
  items: [
    {
      size: {
        row: 1,
        col: 3,
      },
      products: [
        // HELCONIA
        {
          id: '188912',
          src: getImageUrl('20260413/20260413free1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // CARDAK
        {
          id: '257989',
          src: getImageUrl('20260413/20260413free2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // ERINUS
        {
          id: '256838',
          src: getImageUrl('20260413/20260413free3.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
    {
      size: {
        row: 1,
        col: 3,
      },
      products: [
        // DAVALLIA
        {
          id: '290209',
          src:  getImageUrl('20260413/20260413free4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // NEMESIA
        {
          id: '188835',
          src: getImageUrl('20260413/20260413free5.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // CALENDULA
        {
          id: '307539',
          src: getImageUrl('20260413/20260413free6.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: "42061",
  name: "Free Scatter cushion",
  date: "13.04.2026",
  issueCardId: "461311",
  lpId: "29323",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/JXV6w0IVNs6J0JF5hEGDv5/2026.04.13---Free-Scatter-cushion?node-id=0-1&t=IP7Nzx5jeU7WzCi5-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: customisedMondayRegularNSLT, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFD3C2",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      soon_banners: true,
      intro: {
        color: "#000000",
        background: "#FECD8C",
      },
      offerPart: {
        color: "#000000",
        backgroundColor: "#FFD3C2",
        alignment: "center",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
      freebies: freebies
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: customisedMondayRegularNSLT,
      css: types.CSS.LP,
      background: "#FFD3C2",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      soon_banners: true,
      intro: {
        color: "#000000",
        background: "#FECD8C",
      },
      offerPart: {
        color: "#000000",
        backgroundColor: "#FFD3C2",
        alignment: "center",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
      freebies: freebies
    },
  ],
});