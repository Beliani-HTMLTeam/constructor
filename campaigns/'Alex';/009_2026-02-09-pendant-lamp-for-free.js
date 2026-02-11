import { mondayRegularNslt } from '@/templates/AlexSrc/template/mondayRegularNslt';

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 09.02.2026 - Free lamps';

const tableQueries = [
  {
    tableRange: '20:21',
    name: 'tit',
  },
  {
    tableRange: '23:27',
    name: 'offerPart',
  },
  {
    tableRange: '29',
    name: 'code',
  },
  {
    tableRange: '27',
    name: 'codeCTA',
  },
  {
    tableRange: '32:33',
    name: 'intro',
  },
  {
    tableRange: '34:37',
    name: 'categories',
  },
  {
    tableRange: '42:44',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-09' }),
  TopImageTitle_src: translateImage({ value: '20260209_01.png' }),
  TopImage_src: getImageUrl('20260209_gif.gif', true),
  Banner_1: translateLink({ value: 'content/lp26-01-29' }),
  Banner_1_Image: translateImage({ value: '20260129b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-23' }),
  Banner_2_Image: translateImage({ value: '20260123b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FECD8C',
  type: 'standard',
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
    name: 'Corner sofas',
    background: '#FF9780',
    color: '#000000',
    src: getImageUrl('20260209Category1.png', true),
    href: 'https://www.beliani.ch/sofas/corner-sofas/',
    products: [
      {
        id: '566003',
        src: getImageUrl('20260209Category11.png', true),
      },
      {
        id: '403961',
        src: getImageUrl('20260209Category12.png', true),
      },
      {
        id: '589016',
        src: getImageUrl('20260209Category13.png', true),
      },
      {
        id: '414282',
        src: getImageUrl('20260209Category14.png', true),
      },
    ],
  },
  {
    name: 'Fabric sofas',
    background: '#FECD8C',
    color: '#000',
    src: getImageUrl('20260209Category2.png', true),
    href: 'https://www.beliani.ch/sofas/fabric-sofas/',
    products: [
      {
        id: '689120',
        src: getImageUrl('20260209Category21.png', true),
      },
      {
        id: '675751',
        src: getImageUrl('20260209Category22.png', true),
      },
      {
        id: '658740',
        src: getImageUrl('20260209Category23.png', true),
      },
      {
        id: '601885',
        src: getImageUrl('20260209Category24.png', true),
      },
    ],
  },
  {
    name: 'Sofa beds',
    background: '#FF9780',
    color: '#000',
    src: getImageUrl('20260209Category3.png', true),
    href: 'https://www.beliani.ch/sofas/sofa-beds/',
    products: [
      {
        id: '682859',
        src: getImageUrl('20260209Category31.png', true),
      },
      {
        id: '496340',
        src: getImageUrl('20260209Category32.png', true),
      },
      {
        id: '561282',
        src: getImageUrl('20260209Category33.png', true),
      },
      {
        id: '100973',
        src: getImageUrl('20260209Category34.png', true),
      },
    ],
  },
  {
    name: 'Chaise lounges',
    background: '#FECD8C',
    color: '#000',
    src: getImageUrl('20260209Category4.png', true),
    href: 'https://www.beliani.ch/sofas/chaise-lounge/',
    products: [
      {
        id: '694464',
        src: getImageUrl('20260209Category41.png', true),
      },
      {
        id: '690558',
        src: getImageUrl('20260209Category42.png', true),
      },
      {
        id: '680802',
        src: getImageUrl('20260209Category43.png', true),
      },
      {
        id: '637464',
        src: getImageUrl('20260209Category44.png', true),
      },
    ],
  },
];

const freebies = {
  options: {
    color: '#000000',
    background: '#FECD8C',
  },
  items: [
    {
      size: {
        row: 1,
        col: 3,
      },
      products: [
        {
          id: '69610',
          src: getImageUrl('20260209Freebie1.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '586998',
          src: getImageUrl('20260209Freebie2.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '78707',
          src: getImageUrl('20260209Freebie3.png', true),
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
        {
          id: '64143',
          src: getImageUrl('20260209Freebie4.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '104315',
          src: getImageUrl('20260209Freebie5.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
        {
          id: '69517',
          src: getImageUrl('20260209Freebie6.png', true),
          style: 'padding-right: 6px; padding-left: 6px;',
        },
      ],
    },
  ],
};

export default new entities.Campaign({
  startId: '40652',
  name: 'Pendant lamp for free',
  date: '09.02.2026',
  issueCardId: '443281',
  lpId: '28634',
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/EEKMnOdPA9w59mRN65Mmqu/2026.02.09---Free-lamps--Copy-?node-id=0-1&p=f&t=5UMPuP67psnKGKWW-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FECD8C',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      freebies: freebies,
      intro: {
        background: '#FF9780',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FECD8C',
      },
      // timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.LP,
      background: '#FECD8C',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      freebies: freebies,
      intro: {
        background: '#FF9780',
        color: '#000000',
      },
      offerPart: {
        type: 'code',
        color: '#000',
        background: '#FECD8C',
      },
      // timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
      soon_banners: true,
    },
  ],
});

