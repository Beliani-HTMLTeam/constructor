import { customisedMondayRegularNSLT } from "@/templates/DimaSrc/newsletter_customised_monday/template/mondayRegularNslt";
import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 09.03.26 - Free outdoor rugs';

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
    "tableRange": "33:34",
    "name": "intro"
  },
  {
    "tableRange": "35:38",
    "name": "categories"
  },
  {
    "tableRange": "39:42",
    "name": "filters"
  },
  {
    "tableRange": "47:49",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-09' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260309_01.png', folder: '20260309', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260309/20260309topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-09' }),
  Banner_1: translateLink({ value: 'content/lp26-02-27' }),
  Banner_1_Image: translateImage({ value: '20260227b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-02' }),
  Banner_2_Image: translateImage({ value: '20260302b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'standard',
};

const categories = [
  {
    name: 'Fabric',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260309/20260309Category10.png', true),
    products: [
      // LEFFE
      {
        id: '702608',
        src: getImageUrl('20260309/20260309Category11.png', true),
      },
      // SORRIVOLI
      {
        id: '574032',
        src: getImageUrl('20260309/20260309Category12.png', true),
      },
      // BATTIFOLLO
      {
        id: '524462',
        src: getImageUrl('20260309/20260309Category13.png', true),
      },
      // AREZZO
      {
        id: '397351',
        src: getImageUrl('20260309/20260309Category14.png', true),
      },
    ],
  },
  {
    name: 'Metal',
    background: '#750000',
    color: '#ffffff',
    src: getImageUrl('20260309/20260309Category20.png', true),
    products: [
      // PONTE
      {
        id: '659942',
        src: getImageUrl('20260309/20260309Category21.png', true),
      },
      // ONETA
      {
        id: '684644',
        src: getImageUrl('20260309/20260309Category22.png', true),
      },
      // RASIGLIA
      {
        id: '573785',
        src: getImageUrl('20260309/20260309Category23.png', true),
      },
      // MESSINA
      {
        id: '519588',
        src: getImageUrl('20260309/20260309Category24.png', true),
      },
    ],
  },
  {
    name: 'Rattan',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260309/20260309Category30.png', true),
    products: [
      // VALLETRI
      {
        id: '599380',
        src: getImageUrl('20260309/20260309Category31.png', true),
      },
      // VARALLO
      {
        id: '584100',
        src: getImageUrl('20260309/20260309Category32.png', true),
      },
      // LIVADEIA
      {
        id: '506983',
        src: getImageUrl('20260309/20260309Category33.png', true),
      },
      // MARATEA
      {
        id: '414418',
        src: getImageUrl('20260309/20260309Category34.png', true),
      },
    ],
  },
  {
    name: 'Wood',
    background: '#750000',
    color: '#ffffff',
    src: getImageUrl('20260309/20260309Category40.png', true),
    products: [
      // FRAZZANO
      {
        id: '524065',
        src: getImageUrl('20260309/20260309Category41.png', true),
      },
      // CAVEZZO
      {
        id: '524218',
        src: getImageUrl('20260309/20260309Category42.png', true),
      },
      // MYKONOS
      {
        id: '413709',
        src: getImageUrl('20260309/20260309Category43.png', true),
      },
      // CERRETO
      {
        id: '462277',
        src: getImageUrl('20260309/20260309Category44.png', true),
      },
    ],
  },
];

const freebies = {
  options: {
    color: '#FFFFFF',
    background: '#750000',
  },
  items: [
    {
      size: {
        row: 1,
        col: 3,
      },
      products: [
        // BALOTRA
        {
          id: '228567',
          src: getImageUrl('20260309/20260309free1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // BIDAR
        {
          id: '97582',
          src: getImageUrl('20260309/20260309free2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // BELLARY
        {
          id: '97591',
          src: getImageUrl('20260309/20260309free3.png', true),
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
        // HALDIA
        {
          id: '97588',
          src:  getImageUrl('20260309/20260309free4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // NAGPUR
        {
          id: '186196',
          src: getImageUrl('20260309/20260309free5.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // ALWAR
        {
          id: '97568',
          src: getImageUrl('20260309/20260309free6.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: "41389",
  name: "Free outdoor rugs",
  date: "09.03.2026",
  issueCardId: "452421",
  lpId: "29036",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/ZuprCkQRk94vIraXlRmWw1/2026.03.09---Newsletter---Free-outdoor-rugs?node-id=0-1&t=lAIFeyIlG9ZqzFEK-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: customisedMondayRegularNSLT, 
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#750000",
      color: "#FFFFFF",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: "#000000",
        background: "#FFCCB7",
      },
      offerPart: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        alignment: "center",
        type: "code",
      },
      soon_banners: true,
      links: links,
      tableQueries: tableQueries,
      freebies: freebies,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: customisedMondayRegularNSLT, // User should change this
      css: types.CSS.LP,
      background: "#750000",
      color: "#FFFFFF",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: "#000000",
        background: "#FFCCB7",
      },
      offerPart: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        alignment: "center",
        type: "code",
      },
      soon_banners: true,
      links: links,
      tableQueries: tableQueries,
      freebies: freebies,
    },
  ],
});