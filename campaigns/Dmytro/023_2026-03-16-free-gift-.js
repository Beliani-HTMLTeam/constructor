import { customisedMondayRegularNSLT } from "@/templates/DimaSrc/newsletter_customised_monday/template/mondayRegularNslt";
import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::16.03.26 - Free Gift';

const tableQueries = [
  {
    "tableRange": "22:23",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "25:31",
    "name": "offerPart"
  },
  {
    "tableRange": "29",
    "name": "codeCTA",
  },
  {
    "tableRange": "30",
    "name": "code",
  },
  {
    "tableRange": "33",
    "name": "categories"
  },
  {
    "tableRange": "34:35",
    "name": "paragraphs"
  },
  {
    "tableRange": "36",
    "name": "CTA"
  },
  {
    "tableRange": "40:42",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-16' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260316_01.png', folder: '20260316', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260316/20260316topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-16' }),
  Banner_1: translateLink({ value: 'content/lp26-03-13' }),
  Banner_1_Image: translateImage({ value: '20260313b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-12' }),
  Banner_2_Image: translateImage({ value: '20260312b.png' }),
  code_href: translateLink({ value: 'content/lp26-03-16' }),
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#750000',
  type: 'standard',
};

const freebies = {
  options: {
    color: '#FFFFFF',
    background: '#750000',
    space: 'newsletterBottom80px'
  },
  items: [
    {
      size: {
        row: 1,
        col: 2,
      },
      products: [
        // KABIRWALA
        {
          id: '358090',
          src: getImageUrl('20260316/20260316free1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // MOMBA 
        {
          id: '496680',
          src: getImageUrl('20260316/20260316free2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        }
      ],
    },
    {
      size: {
        row: 1,
        col: 2,
      },
      products: [
        // CALLIPOLIS
        {
          id: '290095',
          src:  getImageUrl('20260316/20260316free3.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        // DENKORO 
        {
          id: '308592',
          src: getImageUrl('20260316/20260316free4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        }
      ],
    },
  ],
};

const categories = [
  {
    name: 'New',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: true,
      spaceAfter: 'newsletterBottom80px',
    },
    line: {
      show: false
    },
    cta: {
      show: false
    },
    paddingTop: 35,
    insideContainer: true,
    products: [
      // LAGARDE
      {
        id: '703988',
        src: getImageUrl('20260316/20260316Product11.png', true),
      },
      // VILLAZ
      {
        id: '705029',
        src: getImageUrl('20260316/20260316Product12.png', true),
      },
      // SHAININ 
      {
        id: '704891',
        src: getImageUrl('20260316/20260316Product13.png', true),
      },
      // SOLETTA
      {
        id: '706253',
        src: getImageUrl('20260316/20260316Product14.png', true),
      },
      // RAFFRA
      {
        id: '702721',
        src: getImageUrl('20260316/20260316Product15.png', true),
      },
      // SANILAC
      {
        id: '706080',
        src: getImageUrl('20260316/20260316Product16.png', true),
      },
    ],
  },
  {
    name: 'New',
    background: '#F6E7E6',
    color: '#000000',
    href: 'https://www.beliani.ch/new/',
    type: 'grid',
    title: {
      show: false
    },
    paragraph: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    insideContainer: true,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    paddingTop: 0,
    products: [
      // NUTMEG
      {
        id: '705831',
        src: getImageUrl('20260316/20260316Product21.png', true),
      },
      // AMALSAN
      {
        id: '691820',
        src: getImageUrl('20260316/20260316Product22.png', true),
      },
      // ALGUA
      {
        id: '701403',
        src: getImageUrl('20260316/20260316Product23.png', true),
      },
      // RONGE
      {
        id: '697979',
        src: getImageUrl('20260316/20260316Product24.png', true),
      },
      // SANGLI
      {
        id: '692216',
        src: getImageUrl('20260316/20260316Product25.png', true),
      },
      // CLUNES 
      {
        id: '692820',
        src: getImageUrl('20260316/20260316Product26.png', true),
      },
    ],
  },
];


export default new entities.Campaign({
  startId: "41421",
  name: "Free Gift  ",
  date: "16.03.2026",
  issueCardId: "456411",
  lpId: "29055",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/ri3Jq9CFOrKtIp9t9okSn0/2025.01.03---New-arrivals-newsletter--Copy-?node-id=0-1&t=S38M9qM41hZTc3ZK-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#750000",
      color: "#ffffff",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      OfferPart: {
        isMonday: true,
        color: "#FFFFFF",
        backgroundColor: "#750000",
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
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#750000",
      color: "#ffffff",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      OfferPart: {
        isMonday: true,
        color: "#FFFFFF",
        backgroundColor: "#750000",
        alignment: "center",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
      freebies: freebies,
    },
  ],
});