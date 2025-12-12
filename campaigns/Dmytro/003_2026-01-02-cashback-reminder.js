// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 02.01.26 - Cashback reminder';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20:25',
    name: 'offerPart',
  },
  { tableRange: '26:27', name: 'codeCTA' },
  {
    tableRange: '44:46',
    name: 'condition',
  },
  {
    tableRange: '29:40',
    name: 'categories',
  },
];

const links = {
  code_href: translateLink({ value: 'content/lp26-01-02' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-02' }),
  TopImageTitle_src: translateImage({ value: '20260102_01.png' }),
  TopImage_src: getImageUrl('20260102topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-02' }),
  Banner_1: translateLink({ value: 'content/lp25-12-26' }),
  Banner_1_Image: translateImage({ value: '20251226b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-25' }),
  Banner_2_Image: translateImage({ value: '20251225b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'standard',
};

const categories = [
  {
    name: 'Sofas',
    src: getImageUrl('chde_cat_1__20260102.png', true),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: getImageUrl('chde_cat_1__20260102.png', true),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids',
    src: getImageUrl('chde_cat_1__20260102.png', true),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: getImageUrl('chde_cat_1__20260102.png', true),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: getImageUrl('chde_cat_2__20260102.png', true),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

const timer = {
  position: 'insideTopImageTitle',
  background: '#750000',
  color: '#FFFFFF',
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/8gbi7fdx7k',
    CHFR: 'https://gen.sendtric.com/countdown/4a1j092fqs',
    FR: 'https://gen.sendtric.com/countdown/kfkbyo017r',
    DE: 'https://gen.sendtric.com/countdown/i48er7irpo',
    UK: 'https://gen.sendtric.com/countdown/pg552x3t0z',
    AT: 'https://gen.sendtric.com/countdown/1wvbpjmbo1',
    ES: 'https://gen.sendtric.com/countdown/j6alm79qi7',
    PL: 'https://gen.sendtric.com/countdown/qxvykw50zh',
    NL: 'https://gen.sendtric.com/countdown/a9w79bugal',
    PT: 'https://gen.sendtric.com/countdown/jugpb68e3o',
    IT: 'https://gen.sendtric.com/countdown/bcxievq0c7',
    SE: 'https://gen.sendtric.com/countdown/4tarkcwert',
    HU: 'https://gen.sendtric.com/countdown/a1j7a6ouxs',
    DK: 'https://gen.sendtric.com/countdown/5lgoecwe3f',
    CZ: 'https://gen.sendtric.com/countdown/hpz6z60zpk',
    FI: 'https://gen.sendtric.com/countdown/3mn3tegrx5',
    NO: 'https://gen.sendtric.com/countdown/aseje14nwy',
    SK: 'https://gen.sendtric.com/countdown/9be3o6r3gg',
    BENL: 'https://gen.sendtric.com/countdown/85xqf02elj',
    BEFR: 'https://gen.sendtric.com/countdown/3mwt7yjgsa',
    RO: 'https://gen.sendtric.com/countdown/fo9fpqsrw3',
  },
  isCtaVisible: false,
};

export default new entities.Campaign({
  startId: '39435',
  name: 'Cashback reminder',
  date: '02.01.2026',
  issueCardId: '427169',
  lpId: '28020',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/srvP9sIWFuhjUOYyCAd1D8/2026.01.02---Newsletter---Boxing-Day-Newsletter--Cashback-?node-id=11001-3902&t=lnPfbHRKR2PNk1mC-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#750000',
      color: '#FFFFFF',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: '#FFFFFF',
        backgroundColor: '#750000',
        type: 'timer',
        isWithTitles: false,
      },
      OfferPart: {
        color: '#FFFFFF',
        backgroundColor: '#750000',
        alignment: 'center',
        type: 'code',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: '#750000',
      color: '#FFFFFF',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: '#FFFFFF',
        backgroundColor: '#750000',
        type: 'timer',
        isWithTitles: false,
      },
      OfferPart: {
        color: '#FFFFFF',
        backgroundColor: '#750000',
        alignment: 'center',
        type: 'code',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
  ],
});

