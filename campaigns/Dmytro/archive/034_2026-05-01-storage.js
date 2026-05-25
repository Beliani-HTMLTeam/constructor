import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::01.05.26 - Storage';

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
    "tableRange": "22:23",
    "name": "condition"
  },
  {
    "tableRange": "29:30",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-01' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260501_01.png', folder: '20260501', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260501/20260501topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-01' }),
  Banner_1: translateLink({ value: 'content/lp26-04-23' }),
  Banner_1_Image: translateImage({ value: '20260423b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-22' }),
  Banner_2_Image: translateImage({ value: '20260422b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-04-27' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FD9000',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260501/20260501free.png', true),
  background: '#F6E7E6',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/7hjc9co07f",
  "CHFR": "https://gen.sendtric.com/countdown/x670olfj2f",
  "FR": "https://gen.sendtric.com/countdown/2vnzo6mlno",
  "DE": "https://gen.sendtric.com/countdown/f028cx8ca9",
  "UK": "https://gen.sendtric.com/countdown/8n5s211ybu",
  "AT": "https://gen.sendtric.com/countdown/0lj2f339eg",
  "ES": "https://gen.sendtric.com/countdown/ds7g3n93x5",
  "PL": "https://gen.sendtric.com/countdown/8poqv9eow8",
  "NL": "https://gen.sendtric.com/countdown/q493e4xlq7",
  "PT": "https://gen.sendtric.com/countdown/ovnpb6004b",
  "IT": "https://gen.sendtric.com/countdown/j5uwpj7qqb",
  "SE": "https://gen.sendtric.com/countdown/0j267crte4",
  "HU": "https://gen.sendtric.com/countdown/e94njoefzf",
  "DK": "https://gen.sendtric.com/countdown/zeaqoidrnq",
  "CZ": "https://gen.sendtric.com/countdown/x0479on4pt",
  "FI": "https://gen.sendtric.com/countdown/okwmy0le29",
  "NO": "https://gen.sendtric.com/countdown/syym2ofqmz",
  "SK": "https://gen.sendtric.com/countdown/3b9nmwjl3i",
  "BENL": "https://gen.sendtric.com/countdown/srcbc21ejh",
  "BEFR": "https://gen.sendtric.com/countdown/f5la1ody39",
  "RO": "https://gen.sendtric.com/countdown/1ld6t5b1nf"
  }
};

const categories = [
  {
    name: 'Sideboards',
    background: '#FD9000',
    color: '#000000',
    src: getImageUrl('20260501/20260501Category10.png', true),
    href: 'https://www.beliani.ch/storage/sideboards/',
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
      // CLUNES
      {
        id: '692706',
        src: getImageUrl('20260501/20260501Category11.png', true),
      },
      // KEITH
      {
        id: '692046',
        src: getImageUrl('20260501/20260501Category12.png', true),
      },
      // LEDUC
      {
        id: '675501',
        src: getImageUrl('20260501/20260501Category13.png', true),
      },
      // PAGET
      {
        id: '574205',
        src: getImageUrl('20260501/20260501Category14.png', true),
      },
    ],
  },
  {
    name: 'TV stands',
    background: '#750000',
    color: '#ffffff',
    src: getImageUrl('20260501/20260501Category20.png', true),
    href: 'https://www.beliani.ch/storage/tv-stands/',
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
      // GLADSTONE
      {
        id: '607954',
        src: getImageUrl('20260501/20260501Category21.png', true),
      },
      // LANCELIN
      {
        id: '714182',
        src: getImageUrl('20260501/20260501Category22.png', true),
      },
      // PASCO
      {
        id: '673577',
        src: getImageUrl('20260501/20260501Category23.png', true),
      },
      // GLASTONBURY
      {
        id: '607574',
        src: getImageUrl('20260501/20260501Category24.png', true),
      },
    ],
  },
  {
    name: 'Bookcases & shelving units',
    background: '#FD9000',
    color: '#000000',
    src: getImageUrl('20260501/20260501Category30.png', true),
    href: 'https://www.beliani.ch/storage/bookcases-and-shelves/',
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
      // FONTAS
      {
        id: '645962',
        src: getImageUrl('20260501/20260501Category31.png', true),
      },
      // ZEHNA
      {
        id: '677752',
        src: getImageUrl('20260501/20260501Category32.png', true),
      },
      // ALMA
      {
        id: '584465',
        src: getImageUrl('20260501/20260501Category33.png', true),
      },
      // TIFTON
      {
        id: '170647',
        src: getImageUrl('20260501/20260501Category34.png', true),
      },
    ],
  },
  {
    name: 'Garden storage',
    background: '#750000',
    color: '#ffffff',
    src: getImageUrl('20260501/20260501Category40.png', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-storage/',
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
      // FIUGGI
      {
        id: '657502',
        src: getImageUrl('20260501/20260501Category41.png', true),
      },
      // XITTA
      {
        id: '611704',
        src: getImageUrl('20260501/20260501Category42.png', true),
      },
      // MEDELLIN
      {
        id: '711539',
        src: getImageUrl('20260501/20260501Category43.png', true),
      },
      // MILIES
      {
        id: '660775',
        src: getImageUrl('20260501/20260501Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "42381",
  name: "Storage",
  date: "01.05.2026",
  issueCardId: "464983",
  lpId: "29477",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/nHohkJxGNAisI8P7eXEmrx/2026.05.01---Newsletter---Storage?node-id=11001-3875&t=J2QZWhsgsvEOwHlB-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FD9000",
      color: "#000000",
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
        image: "20260501free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FD9000",
      color: "#000000",
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
        image: "20260501free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});