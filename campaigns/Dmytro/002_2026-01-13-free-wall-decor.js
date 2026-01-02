import { mondayRegularNslt } from '@/templates/AlexSrc/template/mondayRegularNslt';
import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';
import { PeakFreebieNslt } from '@/templates/PeakFreebieNslt';

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 13.01.26 - Free Wall Decor';

const tableQueries = [
  {
    tableRange: '22:23',
    name: 'TopImageTitle',
  },
  {
    tableRange: '52:54',
    name: 'condition',
  },
  {
    tableRange: '25:32',
    name: 'offerPart',
  },
  { tableRange: '29', name: 'codeCTA' },
  { tableRange: '31', name: 'code' },
];

const links = {
  code_href: translateLink({ value: 'content/lp26-01-13' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-13' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260113_01.png', folder: '20260113', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260113/20260113topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-13' }),
  Banner_1: translateLink({ value: 'content/lp25-12-23' }),
  Banner_1_Image: translateImage({ value: '20251223b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-09' }),
  Banner_2_Image: translateImage({ value: '20251209b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FD9000',
  type: 'standard',
};

const categories = [
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260113.png' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260113.png' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260113.png' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260113.png' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260113.png' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260113.png' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids',
    src: DimasTranslateImage({ value: '_cat_8__20260113.png' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260113.png' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260113.png' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260113.png' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260113.png' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: translateImage({ value: '_cat_13__20260113.png' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

const freebies = {
  options: {
    background: '#FD9000',
    color: '#000000',
  },
  items: [
    new entities.FreebieItem({
      row: 1,
      col: 2,
      products: [
        {
          id: '358302',
          src: getImageUrl('20260113/20260113free1.png', true),
          style: 'padding-right: 5px; padding-left: 103px;',
        },
        {
          id: '373375',
          src: getImageUrl('20260113/20260113free2.png', true),
          style: 'padding-right: 103px; padding-left: 5px;',
        },
      ],
    }),
    new entities.FreebieItem({
      row: 1,
      col: 2,
      products: [
        {
          id: '358267',
          src: getImageUrl('20260113/20260113free3.png', true),
          style: 'padding-right: 5px; padding-left: 103px;',
        },
        {
          id: '353281',
          src: getImageUrl('20260113/20260113free4.png', true),
          style: 'padding-right: 103px; padding-left: 5px;',
        },
      ],
    }),
  ],
};

export default new entities.Campaign({
  startId: '39564',
  name: 'Free Wall Decor',
  date: '13.01.2026',
  issueCardId: '434285',
  lpId: '28078',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  // docelowo
  optimizeImg: true,
  // optimizeImg: false,
  figmaUrl:
    'figma.com/design/nz4mr68AmIWmn11QpYuOFp/2026.01.13---Newsletter-Free-wall-decor--Copy-?m=auto&fuid=1328681953229888224',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: PeakFreebieNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FD9000',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      offerPart: {
        color: '#000000',
        backgroundColor: '#FD9000',
        alignment: '',
        type: 'code',
      },
      freebies: freebies,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: PeakFreebieNslt, // User should change this
      css: types.CSS.LP,
      background: '#FD9000',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      offerPart: {
        color: '#000000',
        backgroundColor: '#FD9000',
        alignment: '',
        type: 'code',
      },
      freebies: freebies,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
