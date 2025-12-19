import { mondayRegularNslt } from '@/templates/AlexSrc/template/mondayRegularNslt';

const campaignTranslationsSheet = '2026::12.01.26 - January Peak Start';

const tableQueries = [
  {
    tableRange: '18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '19',
    name: 'intro',
  },
  {
    tableRange: '32',
    name: 'cta',
  },
  {
    tableRange: '20:31',
    name: 'categories',
  },
  {
    tableRange: '36:37',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-12' }),
  TopImageTitle_src: translateImage({ value: '20260112_01.png' }),
  TopImage_src: translateImage({ value: '20260112_gif.gif' }),
  Banner_1: translateLink({ value: 'content/lp25-12-18' }),
  Banner_1_Image: translateImage({ value: '20251218b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-09' }),
  Banner_2_Image: translateImage({ value: '20251209b.png' }),
};

const TopImageTitle_data = {
  color: '#fff',
  backgroundColor: '#FF2F00',
  type: 'sin',
};

const categories = [
  {
    name: 'Sofas',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260112Cat1.png', true),
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
      value: getImageUrl('20260112Cat2.png', true),
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
      value: getImageUrl('20260112Cat3.png', true),
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
      value: getImageUrl('20260112Cat4.png', true),
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
      value: getImageUrl('20260112Cat5.png', true),
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
      value: getImageUrl('20260112Cat6.png', true),
    },
    href: 'https://www.beliani.ch/storage/',
  },
  {
    name: 'Kids',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260112Cat7.png', true),
    },
    href: 'https://www.beliani.ch/children-room/',
  },
  {
    name: 'Textiles',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260112Cat8.png', true),
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
      value: getImageUrl('20260112Cat9.png', true),
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
      value: getImageUrl('20260112Cat10.png', true),
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
      value: getImageUrl('20260112Cat11.png', true),
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
      value: getImageUrl('20260112Cat12.png', true),
    },
    href: 'https://www.beliani.ch/rugs/',
  },
];

export default new entities.Campaign({
  startId: '39178',
  name: 'January peak start',
  date: '01.12.2026',
  issueCardId: '427078',
  lpId: '27904',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/g8eV3FPLQ2dcogr3rcOETq/2026.12.01---First-newsletter-January-Peak-Start--Copy-?node-id=0-1&p=f&t=uvnNveO4HE2uu5ia-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: mondayRegularNslt,
      full_img_width: false,
      white_line: true,
      under_intro_line: false,
      soon_banners: true,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FF2F00',
      color: '#fff',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: mondayRegularNslt,
      full_img_width: false,
      white_line: true,
      under_intro_line: false,
      soon_banners: false,
      css: types.CSS.LP,
      background: '#FF2F00',
      color: '#fff',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

