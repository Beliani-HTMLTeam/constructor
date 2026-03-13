import { customisedMondayRegularNSLT } from "@/templates/DimaSrc/newsletter_customised_monday/template/mondayRegularNslt";
import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::30.03.26 - Free Gift';

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
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-30' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260330_01.png', folder: '20260330', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260330/20260330topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-30' }),
  Banner_1: translateLink({ value: 'content/lp26-03-27' }),
  Banner_1_Image: translateImage({ value: '20260327b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-26' }),
  Banner_2_Image: translateImage({ value: '20260326b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FDA633',
  type: 'standard',
};

const categories = [
  {
    name: 'Dining tables',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260330/20260330Category10.png', true),
    href: 'https://www.beliani.ch/tables/dining-tables/',
    products: [
      // BERRIGAN
      {
        id: '698411',
        src: getImageUrl('20260330/20260330Category11.png', true),
      },
      // COOPER
      {
        id: '679609',
        src: getImageUrl('20260330/20260330Category12.png', true),
      },
      // GISELA
      {
        id: '655321',
        src: getImageUrl('20260330/20260330Category13.png', true),
      },
      // MOLDEN
      {
        id: '212699',
        src: getImageUrl('20260330/20260330Category14.png', true),
      },
    ],
  },
  {
    name: 'Dining chairs',
    background: '#FDA633',
    color: '#000000',
    src: getImageUrl('20260330/20260330Category20.png', true),
    href: 'https://www.beliani.ch/chairs/dining-chairs/',
    products: [
      // ELLIE
      {
        id: '706922',
        src: getImageUrl('20260330/20260330Category21.png', true),
      },
      // TIRANO
      {
        id: '701116',
        src: getImageUrl('20260330/20260330Category22.png', true),
      },
      // ADELANTO
      {
        id: '695264',
        src: getImageUrl('20260330/20260330Category23.png', true),
      },
      // CASEY
      {
        id: '424032',
        src: getImageUrl('20260330/20260330Category24.png', true),
      },
    ],
  },
  {
    name: 'Kitchen trolleys',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260330/20260330Category30.png', true),
    href: 'https://www.beliani.ch/storage/kitchen-trolleys/',
    products: [
      // GENOA
      {
        id: '683043',
        src: getImageUrl('20260330/20260330Category31.png', true),
      },
      // GABBS
      {
        id: '306079',
        src: getImageUrl('20260330/20260330Category32.png', true),
      },
      // MARCOLA
      {
        id: '311077',
        src: getImageUrl('20260330/20260330Category33.png', true),
      },
      // IVERA
      {
        id: '250945',
        src: getImageUrl('20260330/20260330Category34.png', true),
      },
    ],
  },
  {
    name: 'Kitchenware',
    background: '#FDA633',
    color: '#000000',
    src: getImageUrl('20260330/20260330Category40.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/',
    products: [
      // NUTMEG
      {
        id: '705851',
        src: getImageUrl('20260330/20260330Category41.png', true),
      },
      // BAVETTE
      {
        id: '691013',
        src: getImageUrl('20260330/20260330Category42.png', true),
      },
      // BONHEUR
      {
        id: '658034',
        src: getImageUrl('20260330/20260330Category43.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('20260330/20260330Category44.png', true),
      },
    ],
  },
];

const freebies = {
  options: {
    color: '#000000',
    background: '#FDA633',
  },
  items: [
    {
      size: {
        row: 1,
        col: 2,
      },
      products: [
        // KOUIGN
        {
          id: '598789',
          src: getImageUrl('20260330/20260330free1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // LAJARES
        {
          id: '251838',
          src: getImageUrl('20260330/20260330free2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
    {
      size: {
        row: 1,
        col: 2,
      },
      products: [
        // FLORETTA
        {
          id: '367111',
          src:  getImageUrl('20260330/20260330free3.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // PADRE
        {
          id: '232377',
          src: getImageUrl('20260330/20260330free4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};


export default new entities.Campaign({
  startId: "41933",
  name: "Free Gift",
  date: "30.03.2026",
  issueCardId: "459822",
  lpId: "29247",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/7Flz2tJLUeZWE35hFeuCFx/Newsletter-Free-Gift-2026.03.30?node-id=0-1&t=op0XUOQUxhoH3HaV-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: customisedMondayRegularNSLT, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FDA633",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: "#000000",
        background: "#F6E7E6",
      },
      offerPart: {
        color: "#000000",
        backgroundColor: "#FDA633",
        alignment: "center",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
      freebies: freebies,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: customisedMondayRegularNSLT, // User should change this
      css: types.CSS.LP,
      background: "#FDA633",
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
        background: "#F6E7E6",
      },
      offerPart: {
        color: "#000000",
        backgroundColor: "#FDA633",
        alignment: "center",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
      freebies: freebies
    },
  ],
});