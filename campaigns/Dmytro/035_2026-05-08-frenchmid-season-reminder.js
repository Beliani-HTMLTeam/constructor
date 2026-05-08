import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 08.05.26 - FrenchMid Season reminder';

const tableQueries = [
  {
    "tableRange": "20:21",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "23:32",
    "name": "offerPart"
  },
  {
    "tableRange": "35:37",
    "name": "condition"
  },
  {
    "tableRange": "29",
    "name": "codeCTA",
  },
  {
    "tableRange": "30:32",
    "name": "codes",
  }
];

const links = {
  code_href: translateLink({ value: 'content/lp26-05-08' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-08' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260508_01.png', folder: '20260508', placeholderPosition: '47' }),
  TopImage_src:  DimasTranslateImage({ value: '_topgif.gif', folder: '20260508', placeholderPosition: '47' }),
  TopImage_href: translateLink({ value: 'content/lp26-05-08' }),
  Banner_1: translateLink({ value: 'content/lp26-05-01' }),
  Banner_1_Image: translateImage({ value: '20260501b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-30' }),
  Banner_2_Image: translateImage({ value: '20260430b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-05-08' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE6DB',
  type: 'twoSameSemiBoldLines',
};

const timer = {
  position: "insideTopImageTitle",
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/x4j8ugz0q7",
    "CHFR": "https://gen.sendtric.com/countdown/xygtxgghw4",
    "FR": "https://gen.sendtric.com/countdown/nm4wqjaq1n",
    "DE": "https://gen.sendtric.com/countdown/h7qyt7zcd5",
    "UK": "https://gen.sendtric.com/countdown/id6za2mziy",
    "AT": "https://gen.sendtric.com/countdown/d1h0cx3b7j",
    "ES": "https://gen.sendtric.com/countdown/k6r9s7lhvz",
    "PL": "https://gen.sendtric.com/countdown/u6asmdbg6i",
    "NL": "https://gen.sendtric.com/countdown/3g55btq0nq",
    "PT": "https://gen.sendtric.com/countdown/rp9zs6hgd5",
    "IT": "https://gen.sendtric.com/countdown/xx692kz6bj",
    "SE": "https://gen.sendtric.com/countdown/6kaljz5azb",
    "HU": "https://gen.sendtric.com/countdown/6emdx24qed",
    "DK": "https://gen.sendtric.com/countdown/v88x0vvntw",
    "CZ": "https://gen.sendtric.com/countdown/hpordzskqd",
    "FI": "https://gen.sendtric.com/countdown/pdo83j5u6e",
    "NO": "https://gen.sendtric.com/countdown/jb6110w6rg",
    "SK": "https://gen.sendtric.com/countdown/qlq9r14l9r",
    "BENL": "https://gen.sendtric.com/countdown/n2eyh5xsrr",
    "BEFR": "https://gen.sendtric.com/countdown/n9j7ygm044",
    "RO": "https://gen.sendtric.com/countdown/p0ezb7s0uq"
  }
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_outdoor.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_sofas.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_beds.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_armchairs.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_chairs.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_tables.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_storage.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_kids.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_textiles.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_lighting.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_bathtubs.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_desks.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_rugs.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_accessories.png', folder: '20260508', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "42477",
  name: "FrenchMid Season reminder",
  date: "08.05.2026",
  issueCardId: "466278",
  lpId: "29515",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/G0SqrF57nfOpKPILiHygDD/2026.05.08--French-Days-Mid-Season-sale-reminder?node-id=0-1&t=ZMsHcKOUthFAYRdO-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFE6DB",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "fullWidthTiles",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        type: "timer",
        isWithTitles: false,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "center",
        type: "codes",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFE6DB",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "fullWidthTiles",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        type: "timer",
        isWithTitles: false,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "center",
        type: "codes",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});