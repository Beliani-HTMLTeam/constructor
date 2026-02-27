import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";
import { PeakFreebieNslt } from "@/templates/PeakFreebieNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 20.01.26 - free mirror';

const tableQueries = [
  {
    "tableRange": "21:22",
    "name": "TopImageTitle"
  },
  {
    tableRange: '50:51',
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
  code_href: translateLink({ value: 'content/lp26-01-20' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-20' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260120_01.png', folder: '20260120', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260120/20260120topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-20' }),
  Banner_1: translateLink({ value: 'content/lp26-01-12' }),
  Banner_1_Image: translateImage({ value: '20260112b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-09' }),
  Banner_2_Image: translateImage({ value: '20260109b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'standard',
};

const categories = [
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260120.png' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260120.png' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260120.png' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260120.png' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260120.png' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260120.png' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_cat_8__20260120.png' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260120.png' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260120.png' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260120.png' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260120.png' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260120.png' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

const freebies = {
  options: {
    background: '#FFCCB7',
    color: '#000000',
  },
  items: [
    new entities.FreebieItem({
      row: 1,
      col: 3,
      products: [
        {
          id: '630762',
          src: getImageUrl('20260120/20260120free1.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '325032',
          src: getImageUrl('20260120/20260120free2.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '166010',
          src: getImageUrl('20260120/20260120free3.png', true),
          style: 'padding: 0 5px',
        },
      ],
    }),
    new entities.FreebieItem({
      row: 1,
      col: 3,
      products: [
        {
          id: '131577',
          src: getImageUrl('20260120/20260120free4.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '314234',
          src: getImageUrl('20260120/20260120free5.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '631275',
          src: getImageUrl('20260120/20260120free6.png', true),
          style: 'padding: 0 5px',
        },
      ],
    }),
  ],
};


export default new entities.Campaign({
  startId: "40204",
  name: "Voucher - 20.01.26 - free mirror",
  date: "20.01.2026",
  issueCardId: "437196",
  lpId: "28402",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/aWoMxylFSZ9NkBdrHrERhN/2026.01.20--free-mirror?node-id=0-1&t=3i6Wy4qESopgwCoH-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: PeakFreebieNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      folder: "20260120",
      offerPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "code",
      },
      freebies: freebies,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: PeakFreebieNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      folder: "20260120",
      offerPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "code",
      },
      freebies: freebies,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});