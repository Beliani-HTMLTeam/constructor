import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::22.05.26 - Beds';

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
    "tableRange": "19:22",
    "name": "paragraphs"
  },
  {
    "tableRange": "21:22",
    "name": "condition"
  },
  {
    "tableRange": "28:29",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-22' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260522_01.png', folder: '20260522', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260522/20260522topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-22' }),
  Banner_1: translateLink({ value: 'content/lp26-05-15' }),
  Banner_1_Image: translateImage({ value: '20260515b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-14' }),
  Banner_2_Image: translateImage({ value: '20260514b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-05-17' }),
  Intro_cta_href:  "https://www.beliani.ch/bedroom-furniture/beds/"
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'up_to',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260522/20260522free.png', true),
  background: '#FF2F00',
  color: '#ffffff',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/lgtl7g8fgy",
  "CHFR": "https://gen.sendtric.com/countdown/mdf6yy12sx",
  "FR": "https://gen.sendtric.com/countdown/d965veom67",
  "DE": "https://gen.sendtric.com/countdown/xjjiofab1v",
  "UK": "https://gen.sendtric.com/countdown/uoen59olzc",
  "AT": "https://gen.sendtric.com/countdown/c0zjnpo11c",
  "ES": "https://gen.sendtric.com/countdown/rvu3npsb7m",
  "PL": "https://gen.sendtric.com/countdown/8rz79djajs",
  "NL": "https://gen.sendtric.com/countdown/u15iei6825",
  "PT": "https://gen.sendtric.com/countdown/1vdck6bppg",
  "IT": "https://gen.sendtric.com/countdown/unlkopy8jf",
  "SE": "https://gen.sendtric.com/countdown/en7018lgc6",
  "HU": "https://gen.sendtric.com/countdown/c8ibfn2j2g",
  "DK": "https://gen.sendtric.com/countdown/45aknjxgtk",
  "CZ": "https://gen.sendtric.com/countdown/ocwou3sls6",
  "FI": "https://gen.sendtric.com/countdown/1cz1y71bpe",
  "NO": "https://gen.sendtric.com/countdown/p2gbvwp7lb",
  "SK": "https://gen.sendtric.com/countdown/vqryx6vkvg",
  "BENL": "https://gen.sendtric.com/countdown/bjzzkv0zzy",
  "BEFR": "https://gen.sendtric.com/countdown/bkrcky5pvi",
  "RO": "https://gen.sendtric.com/countdown/3tpoi7pnmp"
  },
};

const categories = [
  {
    name: 'Double Beds',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260522/20260522Category10.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/double-beds/',
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
      // ZEN
      {
        id: '521571',
        src: getImageUrl('20260522/20260522Category11.png', true),
      },
      // MIRABEAU
      {
        id: '686994',
        src: getImageUrl('20260522/20260522Category12.png', true),
      },
      // FLAYAT
      {
        id: '337992',
        src: getImageUrl('20260522/20260522Category13.png', true),
      },
      // VILLETTE
      {
        id: '335512',
        src: getImageUrl('20260522/20260522Category14.png', true),
      },
    ],
  },
  {
    name: 'Single Beds',
    background: '#BA8080',
    color: '#000000',
    src: getImageUrl('20260522/20260522Category20.png', true),
    href: 'https://www.beliani.ch/beds/single-beds/',
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
      // FLORAC 
      {
        id: '503715',
        src: getImageUrl('20260522/20260522Category21.png', true),
      },
      // DUKE 
      {
        id: '579060',
        src: getImageUrl('20260522/20260522Category22.png', true),
      },
      // BONNAC 
      {
        id: '467657',
        src: getImageUrl('20260522/20260522Category23.png', true),
      },
      // AMBASSADOR 
      {
        id: '109786',
        src: getImageUrl('20260522/20260522Category24.png', true),
      },
    ],
  },
  {
    name: 'Storage Beds',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260522/20260522Category30.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/storage-beds/',
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
      // ORBEY 
      {
        id: '721172',
        src: getImageUrl('20260522/20260522Category31.png', true),
      },
      // DAUPHIN
      {
        id: '718886',
        src: getImageUrl('20260522/20260522Category32.png', true),
      },
      // LORIENT 
      {
        id: '450874',
        src: getImageUrl('20260522/20260522Category33.png', true),
      },
      // LUBBON 
      {
        id: '186250',
        src: getImageUrl('20260522/20260522Category34.png', true),
      },
    ],
  },
  {
    name: 'Waterbeds',
    background: '#BA8080',
    color: '#000000',
    src: getImageUrl('20260522/20260522Category40.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/waterbeds/',
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
      // VINAY
      {
        id: '417760',
        src: getImageUrl('20260522/20260522Category41.png', true),
      },
      // AVALLON  
      {
        id: '363032',
        src: getImageUrl('20260522/20260522Category42.png', true),
      },
      // NOYERS 
      {
        id: '497061',
        src: getImageUrl('20260522/20260522Category43.png', true),
      },
      // VAUCLUSE 
      {
        id: '610785',
        src: getImageUrl('20260522/20260522Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "43470",
  name: "Beds",
  date: "22.05.2026",
  issueCardId: "479226",
  lpId: "30004",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/Jy76mD1E5UuZ0lG2Mgrl8z/Newsletter-Beds---Friday-2026.05.22?node-id=0-1&t=Vw2JtmfVidYp06q6-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F6E7E6",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        type: "timer",
        image: "20260522free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#F6E7E6",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        type: "timer",
        image: "20260522free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});