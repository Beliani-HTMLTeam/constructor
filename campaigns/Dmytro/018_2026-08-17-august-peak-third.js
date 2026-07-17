import { SoonEndingBanner } from "@/templates/Thursday/components/SoonEndingBanner";
const campaignTranslationsSheet = '17.08.26 - August Peak Third';

const tableQueries = [
  // {
  //   name: 'offer_date',
  //   tableRange: '21',
  // },
  // {
  //   name: 'intro',
  //   tableRange: '21',
  // },
  {
    tableRange: '17',
    name: 'paragraphs',
  },
  {
    tableRange: '18:19',
    name: 'condition',
  },
];

const links = {
  Banner_1: translateLink({ value: 'content/lp26-08-07' }),
  Banner_1_Image: translateImage({ value: '20260807b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-08-06' }),
  Banner_2_Image: translateImage({ value: '20260806b.png' }),
};

const categories = [
  {
    src: translateImage({ value: '20260817_gif.gif' }),
    href: translateLink({ value: 'content/lp26-08-17' }),
    paddingTop: 0,
    color: '#fff',
    tdClass: '',
    paragraph: {
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    background: '#FF2F00',
    spaceAfter: '0',
    title: {
      show: false
    },
  },

  // main
  {
    name: 'Outdoor Furniture',
    nameOverrides: { fi: 'Ulkokalusteet', nl: 'Tuinmeubels', benl: 'Tuinmeubels', uk: 'Outdoor', ro: 'Exterior', pl: 'Meble ogrodowe' },
    src: translateImage({ value: '20260817_Cat01.png' }),
    href: 'https://www.beliani.ch/outdoor-furniture/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Sofas',
    src: translateImage({ value: '20260817_Cat02.png' }),
    href: 'https://www.beliani.ch/sofas/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Beds',
    src: translateImage({ value: '20260817_Cat03.png' }),
    href: 'https://www.beliani.ch/beds/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Armchairs',
    src: translateImage({ value: '20260817_Cat04.png' }),
    href: 'https://www.beliani.ch/armchairs/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Chairs',
    src: translateImage({ value: '20260817_Cat05.png' }),
    href: 'https://www.beliani.ch/chairs/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Tables',
    src: translateImage({ value: '20260817_Cat06.png' }),
    href: 'https://www.beliani.ch/tables/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Storage',
    nameOverrides: { fi: 'Säilytys', pt: 'Arrumação' },
    src: translateImage({ value: '20260817_Cat07.png' }),
    href: 'https://www.beliani.ch/storage/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Kids',
    nameOverrides: { pt: 'Quarto de crianças', se: 'Barnrum' },
    src: translateImage({ value: '20260817_Cat08.png' }),
    href: 'https://www.beliani.ch/children-room/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Textiles',
    src: translateImage({ value: '20260817_Cat09.png' }),
    href: 'https://www.beliani.ch/textiles/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Lighting',
    nameOverrides: { de: 'Beleuchtung', at: 'Beleuchtung', chde: 'Beleuchtung' },
    src: translateImage({ value: '20260817_Cat10.png' }),
    href: 'https://www.beliani.ch/lighting/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Bathtubs',
    nameOverrides: { hu: 'Kádak és pezsgőfürdők', pt: 'Banheiras e hidromassagem', chde: 'Badwannen' },
    src: translateImage({ value: '20260817_Cat11.png' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Desks',
    nameOverrides: { hu: 'Irodai asztalok' },
    src: translateImage({ value: '20260817_Cat12.png' }),
    href: 'https://www.beliani.ch/desks-eng/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Rugs',
    src: translateImage({ value: '20260817_Cat13.png' }),
    href: 'https://www.beliani.ch/rugs/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
  {
    name: 'Accessories',
    nameOverrides: { hu: 'Kiegészítők' },
    src: translateImage({ value: '20260817_Cat14.png' }),
    href: 'https://www.beliani.ch/home-accessories/',
    background: '#FF2F00',
    color: '#fff',
    type: 'grid',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    line: {
      show: false
    },
    title: {
      show: false,
    },
    paragraph: {
      show: false,
      spaceAfter: '',
    },
  },
];

export default new entities.Campaign({
  startId: '45085',
  name: 'PEAK August third',
  date: '17.08.2026',
  issueCardId: '501874',
  lpId: '30854',
  alarm: {
    isActive: false,
  },
  accent: '#e5ff00',
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/fxr4hBIlBDwZfzmCM4l8GI/Newsletter-Beliani-Birthday-Start---Monday-2026.06.01--Copy-?node-id=0-1&t=KWEIe4G753K8HxiT-1',
  templates: [
    {
      background: '#FF2F00',
      color: '#000',
      template: templates.Monday,
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      conditionOverrides: {
        chde: [
          'Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.',
          'Um unseren Newsletter abzubestellen, klicke einfach auf <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Abbestellen</a>.',
        ],
      },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      white_line: true,
    soonEndingBanner: true,
    },
  {
    background: '#FF2F00',
    color: '#000',
    template: templates.Monday,
    css: types.CSS.LP,
    name: 'Landing',
    type: types.LANDINGPAGE,
    translationsSpreadsheet: campaignTranslationsSheet,
    conditionOverrides: {
      chde: [
        'Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.',
        'Um unseren Newsletter abzubestellen, klicke einfach auf <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Abbestellen</a>.',
      ],
    },
    categories: categories,
    links: links,
    tableQueries: tableQueries,
    white_line: true,
    soonEndingBanner: true,
  },
  ],
});
