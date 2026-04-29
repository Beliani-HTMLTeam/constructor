// Campaign generated from form
const campaignTranslationsSheet = 'Voucher - 11.05.26 - Free picnic blanket';

const tableQueries = [
  {
    tableRange: '22:23',
    name: 'TopImageTitle',
  },
  {
    name: 'offer',
    tableRange: '25:27',
  },
  {
    name: 'offer_date',
    tableRange: '29',
  },
  {
    name: 'intro',
    tableRange: '30:31',
  },
  {
    tableRange: '35:36',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-11' }),
  TopImageTitle_src: translateImage({ value: '20260511_01.png' }),

  TopImage_src: getImageUrl('20260511_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-11' }),

  Banner_1: translateLink({ value: 'content/lp26-05-01' }),
  Banner_1_Image: translateImage({ value: '20260501b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-04-30' }),
  Banner_2_Image: translateImage({ value: '20260430b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFD8A6', 
  type: 'standard',
};

const categories = [
  // offer
  {
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#FFD8A6',
    color: '#000000',
    spaceAfter: "newsletterBottom45px",
    products: [
      // MADOX 
      {
        id: '564955',
        src: getImageUrl('20260511_Pic01.png', true),
      },
      // SHERIDAN
      {
        id: '564936',
        src: getImageUrl('20260511_Pic02.png', true),
      },
    ],
  },

  // main
  {
    name: 'Shelving Units and Cabinets',
    src: getImageUrl('20260511_Cat10.png', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-storage/garden-shelving-units-and-cabinets/',
    background: '#FFB6A6', 
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '45',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // XITTA 
      {
        id: '612099', 
        src: getImageUrl('20260511_Pic11.png', true),
      },
      // FIUGGI  
      {
        id: '657482', 
        src: getImageUrl('20260511_Pic12.png', true),
      },
      // VISANO 
      {
        id: '681030', 
        src: getImageUrl('20260511_Pic13.png', true),
      },
      // TEREVILLE 
      {
        id: '693507', 
        src: getImageUrl('20260511_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Sheds and Storage Boxes',
    src: getImageUrl('20260511_Cat20.png', true),
    href: 'https://www.beliani.ch/outdoor-storage/garden-sheds-and-storage-boxes/',
    background: '#FFD8A6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // RECIFE 
      {
        id: '711617',
        src: getImageUrl('20260511_Pic21.png', true),
      },
      // SARANDI
      {
        id: '711636',
        src: getImageUrl('20260511_Pic22.png', true),
      },
      // MILIES 
      {
        id: '660775',
        src: getImageUrl('20260511_Pic23.png', true),
      },
      // PRINOS
      {
        id: '660812',
        src: getImageUrl('20260511_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Greenhouses',
    src: getImageUrl('20260511_Cat30.png', true),
    href: 'https://www.beliani.ch/outdoor-storage/garden-and-balcony-greenhouses/',
    background: '#FFB6A6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // APULIA 
      {
        id: '648511',
        src: getImageUrl('20260511_Pic31.png', true),
      },
      // NOVOLI 
      {
        id: '647197',
        src: getImageUrl('20260511_Pic32.png', true),
      },
      // ARANOVA
      {
        id: '674930',
        src: getImageUrl('20260511_Pic33.png', true),
      },
      // CARFIZZI 
      {
        id: '674778',
        src: getImageUrl('20260511_Pic34.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '43309',
  name: 'MON Free picnic blanket',
  date: '11.05.2026',
  issueCardId: '477136',
  lpId: '29923',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  accent: '#d4f5e9',
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/PPNCfBkisaidawBHimF0wA/Banner-Free-picnic-blanket---Monday-2026.05.11-FINAL--Copy-?node-id=0-1&t=7pxcJjq6tQqILm7K-1',
  templates: [
    {
      background: '#FFD8A6',
      color: '#000000',
      template: templates.Monday, // User should change this
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFB6A6', // unused
        alignment: 'left',
        position: 'afterFreebies',
      },
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#FFD8A6',
      color: '#000000',
      template: templates.Monday, // User should change this
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFB6A6', // unused
        alignment: 'left',
        position: 'afterFreebies',
      },
      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
