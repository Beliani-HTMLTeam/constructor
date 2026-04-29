import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::19.06.26 - Beliani Birthday Reminder';

const tableQueries = [
  {
    "tableRange": "18:19",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "21",
    "name": "intro"
  },

  {
    "tableRange": "22:23",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-19' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260619_01.png', folder: '20260619', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260619/20260619topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-19' }),
  Banner_1: translateLink({ value: 'content/lp26-06-12' }),
  Banner_1_Image: translateImage({ value: '20260612b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-06-11' }),
  Banner_2_Image: translateImage({ value: '20260611b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-06-19' }),
  Intro_cta_href: translateLink({ value: ' ' }),
  ShopCTA: translateLink({ value: ' ' })
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#FF2F00',
  type: 'twoSameLines',
};

const timer = {
  position: 'insideTopImageTitle',
  background: '#FF2F00',
  color: '#000000',
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/e65ghyryf6",
    "CHFR": "https://gen.sendtric.com/countdown/1k1ovy0l06",
    "FR": "https://gen.sendtric.com/countdown/9eo50u715q",
    "DE": "https://gen.sendtric.com/countdown/kse2w2f7nv",
    "UK": "https://gen.sendtric.com/countdown/falr7bdesb",
    "AT": "https://gen.sendtric.com/countdown/wd813wdnqe",
    "ES": "https://gen.sendtric.com/countdown/2y7todcxkl",
    "PL": "https://gen.sendtric.com/countdown/1r3c1k3bbm",
    "NL": "https://gen.sendtric.com/countdown/98mrau0l43",
    "PT": "https://gen.sendtric.com/countdown/nbhvetb3h6",
    "IT": "https://gen.sendtric.com/countdown/rofdxvpa5x",
    "SE": "https://gen.sendtric.com/countdown/r47y1kano7",
    "HU": "https://gen.sendtric.com/countdown/eakiqs6fke",
    "DK": "https://gen.sendtric.com/countdown/gp4v5v61d1",
    "CZ": "https://gen.sendtric.com/countdown/zzkewca7gm",
    "FI": "https://gen.sendtric.com/countdown/3bzk0ll3cy",
    "NO": "https://gen.sendtric.com/countdown/drxr04fvz9",
    "SK": "https://gen.sendtric.com/countdown/6pub3i9ozs",
    "BENL": "https://gen.sendtric.com/countdown/91dvf0sw2u",
    "BEFR": "https://gen.sendtric.com/countdown/qniq04glmx",
    "RO": "https://gen.sendtric.com/countdown/k0lumsvgkj"
  },
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_outdoor.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
    },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_sofas.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_beds.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_armchairs.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_chairs.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_tables.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_storage.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_kids.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_textiles.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_lighting.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_bathtubs.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_desks.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_rugs.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_accessories.png', folder: 'category_tiles/750000/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "43790",
  name: "Beliani Birthday Reminder",
  date: "19.06.2026",
  issueCardId: "482739",
  lpId: "30199",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/Yq6gSzJ1okvXeSkw85imhT/Newsletter-Beliani-Birthday-Reminder---Friday-2026.06.19?node-id=0-1&t=TVDHhJ5syue8tKw8-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FF2F00",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FF2F00",
        type: "timer",
        image: "20260619free.png",
        isWithTitles: false,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FF2F00",
        alignment: "center",
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
      background: "#FF2F00",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FF2F00",
        type: "timer",
        image: "20260619free.png",
        isWithTitles: false,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FF2F00",
        alignment: "center",
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