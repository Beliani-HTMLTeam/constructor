import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";

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
  color: '#fff',
  backgroundColor: '#FF2F00',
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
  {
    name: 'Outdoor',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat1.png', true),
    },
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
  },
  {
    name: 'Sofas',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat2.png', true),
    },
    href: 'https://www.beliani.ch/sofas/',
  },
  {
    name: 'Beds',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat3.png', true),
    },
    href: 'https://www.beliani.ch/beds/',
  },
  {
    name: 'Armchairs',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat4.png', true),
    },
    href: 'https://www.beliani.ch/armchairs/',
  },
  {
    name: 'Chairs',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat5.png', true),
    },
    href: 'https://www.beliani.ch/chairs/',
  },
  {
    name: 'Tables',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat6.png', true),
    },
    href: 'https://www.beliani.ch/tables/',
  },
  {
    name: 'Storage',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat7.png', true),
    },
    href: 'https://www.beliani.ch/storage/',
  },
  {
    name: 'Textiles',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat8.png', true),
    },
    href: 'https://www.beliani.ch/textiles/',
  },
  {
    name: 'Lightning',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat9.png', true),
    },
    href: 'https://www.beliani.ch/lighting/',
  },
  {
    name: 'Bathtubs',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat10.png', true),
    },
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
  },
  {
    name: 'Desks',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat11.png', true),
    },
    href: 'https://www.beliani.ch/office-furniture/desks-eng/',
  },
  {
    name: 'Rugs',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat12.png', true),
    },
    href: 'https://www.beliani.ch/rugs/',
  },
  {
    name: 'Accessories',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260302Cat13.png', true),
    },
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
  },
];


export default new entities.Campaign({
  startId: "40941",
  name: "02.03.26 - March Peak Start",
  date: "02.03.2026",
  issueCardId: "446471",
  lpId: "28767",
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
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FF2F00",
      color: "#fff",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      // timer: timer,
      full_img_width: false,
      white_line: true,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.LP,
      background: "#FF2F00",
      color: "#fff",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      // timer: timer,
      full_img_width: false,
      white_line: true,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
      soon_banners: false,
    },
  ],
});