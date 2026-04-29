import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::05.06.26 - Office';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20",
    "name": "intro"
  },
  {
    "tableRange": "21:22",
    "name": "condition"
  },
  {
    "tableRange": "27:28",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-05' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260605_01.png', folder: '20260605', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260605/20260605topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-05' }),
  Banner_1: translateLink({ value: 'content/lp26-05-27' }),
  Banner_1_Image: translateImage({ value: '20260527b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-21' }),
  Banner_2_Image: translateImage({ value: '20260521b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-06-02' }),
  Intro_cta_href:  "https://www.beliani.ch/office-furniture/"
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#913333',
  type: 'standard',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260605/20260605free.png', true),
  background: '#F6E7E6',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/dg2kjnmqj2",
  "CHFR": "https://gen.sendtric.com/countdown/91j56xo4kd",
  "FR": "https://gen.sendtric.com/countdown/q9i1bysrd0",
  "DE": "https://gen.sendtric.com/countdown/70wp3i9nt7",
  "UK": "https://gen.sendtric.com/countdown/rqw8kepzln",
  "AT": "https://gen.sendtric.com/countdown/gprjv1jrvp",
  "ES": "https://gen.sendtric.com/countdown/arp0qkrv8e",
  "PL": "https://gen.sendtric.com/countdown/acky9le939",
  "NL": "https://gen.sendtric.com/countdown/dj70f8hdjv",
  "PT": "https://gen.sendtric.com/countdown/5n86mop592",
  "IT": "https://gen.sendtric.com/countdown/vcwla9q88d",
  "SE": "https://gen.sendtric.com/countdown/aoy4vu9aez",
  "HU": "https://gen.sendtric.com/countdown/orblgkpklo",
  "DK": "https://gen.sendtric.com/countdown/fdhyye1bs8",
  "CZ": "https://gen.sendtric.com/countdown/lpu0nmpi92",
  "FI": "https://gen.sendtric.com/countdown/biwabvk917",
  "NO": "https://gen.sendtric.com/countdown/1ox73foytd",
  "SK": "https://gen.sendtric.com/countdown/986z7xu6bt",
  "BENL": "https://gen.sendtric.com/countdown/0grr7ame5v",
  "BEFR": "https://gen.sendtric.com/countdown/3z7t3uo1k8",
  "RO": "https://gen.sendtric.com/countdown/r32w8uxdme"
  },
};

const categories = [
  {
    name: 'Desks',
    background: '#913333',
    color: '#ffffff',
    src: getImageUrl('20260605/20260605Category10.png', true),
    href: 'https://www.beliani.ch/office-furniture/desks/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 60,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category11.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category12.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category13.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category14.png', true),
      },
    ],
  },
  {
    name: 'Office Chairs',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260605/20260605Category20.png', true),
    href: 'https://www.beliani.ch/office-furniture/office-chairs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category21.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category22.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category23.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category24.png', true),
      },
    ],
  },
  {
    name: 'Storage',
    background: '#913333',
    color: '#ffffff',
    src: getImageUrl('20260605/20260605Category30.png', true),
    href: 'https://www.beliani.ch/office-furniture/storage-units-and-cabinets/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category31.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category32.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category33.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category34.png', true),
      },
    ],
  },
  {
    name: 'Lightning',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260605/20260605Category40.png', true),
    href: 'https://www.beliani.ch/office-furniture/office-lamps/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category41.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category42.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category43.png', true),
      },
      // 
      {
        id: '',
        src: getImageUrl('20260605/20260605Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "43854",
  name: "Office",
  date: "05.06.2026",
  issueCardId: "482627",
  lpId: "30237",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/ckl1bnumOrFvTZGKuPsz2q/Office---Friday-2026.06.05?node-id=0-1&t=v7CRi7kXfDmXlEC0-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#913333",
      color: "#FFFFFF",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260605free.png",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#913333",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: "#913333",
      color: "#FFFFFF",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260605free.png",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#913333",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});