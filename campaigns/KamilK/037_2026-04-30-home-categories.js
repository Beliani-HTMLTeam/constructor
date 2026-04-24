// Campaign generated from form
const campaignTranslationsSheet = '2026::30.04.2026 - Home categories';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  // {
  //   tableRange: '25:28',
  //   name: 'paragraphs',
  // },
  // {
  //   tableRange: '21:24',
  //   name: 'categories',
  // },
  {
    tableRange: '21:22',
    name: 'condition',
  },
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: '2026::Voucher - 27.04.26 - Free Garden Chair',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-30' }),
  TopImageTitle_src: translateImage({ value: '20260430_01.png' }),

  TopImage_src: getImageUrl('20260430_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-04-30' }),

  Banner_1: translateLink({ value: 'content/lp26-04-23' }),
  Banner_1_Image: translateImage({ value: '20260423b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-04-22' }),
  Banner_2_Image: translateImage({ value: '20260422b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-04-27' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEFD9',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Living room',
    // src: getImageUrl('20260430_Cat00.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    background: '#FFEFD9',
    color: '#000000',
    type: '4prods-cat',
    cta: true,
    paddingTop: '60',
    insideContainer: false,
    imageSide: 'right',
    title: {
      align: 'center',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      position: 'afterProducts',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      gapBetweenHorizontal: false,
      gapBetweenVertical: false,
      prices: false,
      name: false,
    },
    products: [
      {
        id: 716821,
        src: getImageUrl('20260430_Pic01.png', true),
        categorySrc: getImageUrl('20260430_Cat01.png', true),
      },
      {
        id: 684051,
        src: getImageUrl('20260430_Pic02.png', true),
        categorySrc: getImageUrl('20260430_Cat02.png', true),
      },
      {
        id: 712368,
        src: getImageUrl('20260430_Pic03.png', true),
        categorySrc: getImageUrl('20260430_Cat03.png', true),
      },
      {
        id: 689749,
        src: getImageUrl('20260430_Pic04.png', true),
        categorySrc: getImageUrl('20260430_Cat04.png', true),
      },
    ],
  },
  {
    name: 'Bedroom',
    // src: getImageUrl('20260430_Cat10.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    background: '#F2E6E6',
    color: '#000000',
    type: '4prods-cat',
    cta: true,
    paddingTop: '35',
    imageSide: 'right',
    insideContainer: false,
    title: {
      align: 'center',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      position: 'afterProducts',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      gapBetweenHorizontal: false,
      gapBetweenVertical: false,
      prices: false,
      name: false,
    },
    products: [
      {
        id: 706405,
        src: getImageUrl('20260430_Pic11.png', true),
        categorySrc: getImageUrl('20260430_Cat11.png', true),
      },
      {
        id: 468870,
        src: getImageUrl('20260430_Pic12.png', true),
        categorySrc: getImageUrl('20260430_Cat12.png', true),
      },
      {
        id: 700343,
        src: getImageUrl('20260430_Pic13.png', true),
        categorySrc: getImageUrl('20260430_Cat13.png', true),
      },
      {
        id: 346340,
        src: getImageUrl('20260430_Pic14.png', true),
        categorySrc: getImageUrl('20260430_Cat14.png', true),
      },
    ],
  },
  {
    name: 'Dining room',
    // src: getImageUrl('20260430_Cat20.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    background: '#FFEFD9',
    color: '#000000',
    type: '4prods-cat',
    cta: true,
    paddingTop: '35',
    imageSide: 'right',
    insideContainer: false,
    title: {
      align: 'center',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      position: 'afterProducts',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      gapBetweenHorizontal: false,
      gapBetweenVertical: false,
      prices: false,
      name: false,
    },
    products: [
      {
        id: 667426,
        src: getImageUrl('20260430_Pic21.png', true),
        categorySrc: getImageUrl('20260430_Cat21.png', true),
      },
      {
        id: 609612,
        src: getImageUrl('20260430_Pic22.png', true),
        categorySrc: getImageUrl('20260430_Cat22.png', true),
      },
      {
        id: 574281,
        src: getImageUrl('20260430_Pic23.png', true),
        categorySrc: getImageUrl('20260430_Cat23.png', true),
      },
      {
        id: 423624,
        src: getImageUrl('20260430_Pic24.png', true),
        categorySrc: getImageUrl('20260430_Cat24.png', true),
      },
    ],
  },
  {
    name: 'Bathroom',
    // src: getImageUrl('20260430_Cat30.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/',
    background: '#F2E6E6',
    color: '#000000',
    type: '4prods-cat',
    cta: true,
    paddingTop: '35',
    imageSide: 'right',
    insideContainer: false,
    title: {
      align: 'center',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      position: 'afterProducts',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      gapBetweenHorizontal: false,
      gapBetweenVertical: false,
      prices: false,
      name: false,
    },
    products: [
      {
        id: 84983,
        src: getImageUrl('20260430_Pic31.png', true),
        categorySrc: getImageUrl('20260430_Cat31.png', true),
      },
      {
        id: 417176,
        src: getImageUrl('20260430_Pic32.png', true),
        categorySrc: getImageUrl('20260430_Cat32.png', true),
      },
      {
        id: 669885,
        src: getImageUrl('20260430_Pic33.png', true),
        categorySrc: getImageUrl('20260430_Cat33.png', true),
      },
      {
        id: 694348,
        src: getImageUrl('20260430_Pic34.png', true),
        categorySrc: getImageUrl('20260430_Cat34.png', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20260430free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/jrc9qyrn53',
    CHFR: 'https://gen.sendtric.com/countdown/86s7bxgqa4',
    FR: 'https://gen.sendtric.com/countdown/sek1owlm8l',
    DE: 'https://gen.sendtric.com/countdown/lqf53ma4ce',
    UK: 'https://gen.sendtric.com/countdown/dzmhp9bnwc',
    AT: 'https://gen.sendtric.com/countdown/0jpsjcrqru',
    ES: 'https://gen.sendtric.com/countdown/eiq3ohw6fd',
    PL: 'https://gen.sendtric.com/countdown/rd4pqbn9ay',
    NL: 'https://gen.sendtric.com/countdown/eq09fgf31q',
    PT: 'https://gen.sendtric.com/countdown/xxrodag1p4',
    IT: 'https://gen.sendtric.com/countdown/c8dgdzdpay',
    SE: 'https://gen.sendtric.com/countdown/mtpqe1jp7h',
    HU: 'https://gen.sendtric.com/countdown/b6qmvrcvn5',
    DK: 'https://gen.sendtric.com/countdown/gqnp10f5sq',
    CZ: 'https://gen.sendtric.com/countdown/ep6h0ilvjw',
    FI: 'https://gen.sendtric.com/countdown/bj8cm8ajni',
    NO: 'https://gen.sendtric.com/countdown/rqo28h5sj1',
    SK: 'https://gen.sendtric.com/countdown/56q1cgbtdn',
    BENL: 'https://gen.sendtric.com/countdown/d6kzzqtvje',
    BEFR: 'https://gen.sendtric.com/countdown/lyo5n34oa0',
    RO: 'https://gen.sendtric.com/countdown/c5evudk2fo',
  },
};

export default new entities.Campaign({
  startId: 42605,
  name: 'Home Categories',
  date: '30.04.2026',
  issueCardId: 464352,
  lpId: 29572,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/DePTW9XDetHWncxTCxPwye/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFEFD9',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFEFD9', // unused
        alignment: 'center',
        type: 'paragraph',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#F6E7E6',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FFEFD9',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFEFD9', // unused
        alignment: 'center',
        type: 'paragraph',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#F6E7E6',
        type: 'timer',
      },
    },
  ],
});
