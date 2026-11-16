// Main spreadsheet
const campaignTranslationsSheet = '2026::Voucher - 16.11.26 -Black Week product main';

// Deal spreadsheets
const dealTranslationsSheets = [
  '2026::Voucher - 09.11.26 - Black Week start',
  '2026::Voucher - 11.11.26 - Black Week product categories',
];

const tableQueries = [
  ...[
    ['deal_title', '26', dealTranslationsSheets[0]],
    ['deal_img', '20:39', dealTranslationsSheets[1]],
    ['deal_codes', '40:43', dealTranslationsSheets[1]],
    ['deal_condition', '43', dealTranslationsSheets[0]],
    ['condition', '44:46', dealTranslationsSheets[0]],
  ].map(([name, tableRange, tableName]) => ({
    name,
    tableRange,
    tableName,
  })),
  { name: 'category_title_11', tableRange: '49' },
  { name: 'category_title_25', tableRange: '50' },
  { name: 'category_title_34', tableRange: '51' },
  { name: 'category_cta', tableRange: '52' },
];

const links = {
  TopImageTitle_type: 'image',
  TopImageTitle_src: translateImage({ value: '20261116_topImage.jpg' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-16' }),

  TopImage_src: translateImage({ value: '20261116_shopNow.jpg' }),
  TopImage_href: 'Home Page',
};

const additionalCss = `
.blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:400;}.newsletterTitle {font-size:34px;font-weight:800;line-height:1.2;}.frenchDaysCategoryCta {font-size: 20px !important;}.newsletterCta{font-size:30px;line-height:1.2;font-weight:700;}.roomTitle{font-size:30px;line-height:1.2;font-weight:700;}
#newsletter .blackWeekCategoryName {
  font-family: "Open Sans", sans-serif;
  font-size: 16px !important;
  font-weight: 600 !important;
}
#newsletter .blackWeekCategoryCta {
  font-family: "Open Sans", sans-serif;
  font-size: 13px !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 20px;
  padding-right: 20px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 30px;
  padding-right: 30px;
}
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}.newsletterTitle{font-size:20px;}.newsletterCta{font-size:18px;}.roomTitle{font-size:18px;}.blackWeekCondition{font-size:18px}.newsletterProductTitle{font-size:12px;}.newsletterProductLowPrice{font-size:12px;}.newsletterProductHighPrice{font-size:10px;} #newsletter .frenchDaysDiscount {
	font-size: 40px !important;
	font-size: clamp(32px, 12.5vw, 35px) !important;
}
#newsletter .frenchDaysCategoryName {
	font-size: 14px !important;
	font-size: clamp(14px, 3.6vw, 20px) !important;
}
#newsletter .frenchDaysCategoryCta {
	font-size: 12px !important;
	font-size: clamp(12px, 3.2vw, 16px) !important;
}
#newsletter .blackWeekCategoryGridContainer {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
#newsletter .blackWeekCategoryGrid {
  width: 100% !important;
  table-layout: fixed !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryGap {
  width: 5px !important;
  min-width: 5px !important;
  max-width: 5px !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryTile {
  width: auto !important;
  min-width: 0 !important;
}
#newsletter .blackWeekCategoryGrid img {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryName {
  font-size: 12px !important;
  line-height: 1.2 !important;
  white-space: normal !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
  -webkit-hyphens: none !important;
  hyphens: none !important;
}
#newsletter .blackWeekCategoryGrid td.blackWeekCategoryName {
  padding-top: 10px !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryCta {
  display: inline-block !important;
  padding: 4px 0 6px !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 10px;
  padding-right: 10px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 10px;
  padding-right: 10px;
}}
`;

const additionalCssLp = `
#newsletter .blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:400;}#newsletter .newsletterTitle {font-size:34px;font-weight:800;line-height:1.2;}#newsletter .frenchDaysCategoryCta {font-size: 20px !important;}#newsletter .newsletterCta{font-weight:700;}#newsletter .secondaryLinkMaroon{font-size:30px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:700;}#newsletter .roomTitle{font-size:30px;line-height:1.2;font-weight:700;}
#newsletter .newsletterDealTierLabel{font-size:20px;line-height:25px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierValue{font-size:75px;line-height:80px;font-family:"Poppins",sans-serif;font-weight:700}#newsletter .newsletterDealTierOff{font-size:20px;line-height:16px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierNote{font-size:16px;line-height:18px;font-family:"Poppins",sans-serif}#newsletter .newsletterDealCode{font-size:16px;line-height:21px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}
#newsletter .blackWeekCategoryName {
  font-family: "Poppins", sans-serif;
  font-size: 16px !important;
  font-weight: 600 !important;
}
#newsletter .blackWeekCategoryCta {
  font-family: "Poppins", sans-serif;
  font-size: 13px !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 20px;
  padding-right: 20px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 30px;
  padding-right: 30px;
}
@media screen and (max-width:768px){
	#newsletter .newsletterDealCopyIcon .blackWeekCopyImg,
	#newsletter .newsletterDealCopyIcon img,
	#newsletter .newsletterDealCopyIcon svg{width:15px!important;height:15px!important;min-width:15px!important;max-width:15px!important;display:block!important}
	#newsletter .newsletterDealCopyIcon{margin-left:4px!important}
	#newsletter .newsletterDealCopyIcon *{margin-left:0!important;margin-right:0!important;padding-left:0!important;padding-right:0!important}
	#newsletter .newsletterDealCode{font-size:15px;line-height:1}
	#newsletter .newsletterDealCodeLabel{flex-basis:100%!important;margin-right:0!important;text-align:center!important}
#newsletter .newsletterTitle{font-size:20px;}#newsletter .secondaryLinkMaroon{font-size:18px;}#newsletter .roomTitle{font-size:18px;}#newsletter .newsletterProductTitle{font-size:12px;}#newsletter .newsletterProductLowPrice{font-size:12px;}#newsletter .newsletterProductHighPrice{font-size:10px;}#newsletter .newsletterDealTierValue{font-size:48px;line-height:50px}#newsletter .newsletterDealGrid{width:100%!important;max-width:100%!important;table-layout:auto!important}#newsletter .newsletterDealCell{display:block!important;width:100%!important;box-sizing:border-box!important}#newsletter .newsletterDealGapCol{display:block!important;width:100%!important;height:10px!important;line-height:10px!important;font-size:0!important}#newsletter .newsletterDealEmpty{display:none!important}#newsletter .blackWeekCondition{font-size:18px} #newsletter .frenchDaysDiscount {
	font-size: 40px !important;
	font-size: clamp(32px, 12.5vw, 35px) !important;
}
#newsletter .frenchDaysCategoryName {
	font-size: 14px !important;
	font-size: clamp(14px, 3.6vw, 20px) !important;
}
#newsletter .frenchDaysCategoryCta {
	font-size: 12px !important;
	font-size: clamp(12px, 3.2vw, 16px) !important;
}
#newsletter .blackWeekCategoryGridContainer {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
#newsletter .blackWeekCategoryGrid {
  width: 100% !important;
  table-layout: fixed !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryGap {
  width: 5px !important;
  min-width: 5px !important;
  max-width: 5px !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryTile {
  width: auto !important;
  min-width: 0 !important;
}
#newsletter .blackWeekCategoryGrid img {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryName {
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.3 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}
#newsletter .blackWeekCategoryGrid td.blackWeekCategoryName {
  padding-top: 10px !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryCta {
  display: inline-block !important;
  padding: 4px 0 6px !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.3 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 10px;
  padding-right: 10px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 10px;
  padding-right: 10px;
}}
`;

const palette = {
  accent: '#FF2F00',
  dark: '#750000',
  text: '#ffffff',
  page: '#000000',
  highPrice: '#8c8c8c',
  toastBg: '#ffe0d4',
};

const date = '20261116'; // Used for image date.
const catTitles = ['Sofas', 'Armchairs', 'Tables', 'Beds', 'Lighting', 'Rugs']; // Category titles

// Category tiles
const catTiles = [
  // Cat 01
  [
    {
      name: 'Corner Sofas',
      href: 'https://www.beliani.ch/sofas/corner-sofas/',
    },
    {
      name: '2 Seater Sofas',
      href: 'https://www.beliani.ch/sofas/2-seater-sofas/',
    },
    {
      name: '3 Seater Sofas',
      href: 'https://www.beliani.ch/sofas/3-seater-sofas/',
    },
    {
      name: 'Sofa Beds',
      href: 'https://www.beliani.ch/sofas/sofa-beds/',
    },
    {
      name: 'Modular Sofas',
      href: 'https://www.beliani.ch/sofas/modular-sofas/',
    },
    {
      name: 'Chaise Lounges',
      href: 'https://www.beliani.ch/sofas/chaise-lounge/',
    },
  ],
  // Cat 02
  [
    {
      name: 'Fabric Armchairs',
      href: 'https://www.beliani.ch/armchairs/fabric-armchairs/',
    },
    {
      name: 'Reclining Armchairs',
      href: 'https://www.beliani.ch/armchairs/reclining-armchairs/',
    },
    {
      name: 'Rocking Chairs',
      href: 'https://www.beliani.ch/armchairs/rocking-chairs/',
    },
    {
      name: 'Leather Armchairs',
      href: 'https://www.beliani.ch/armchairs/leather-armchairs/',
    },
    {
      name: 'Kids Armchairs',
      href: 'https://www.beliani.ch/armchairs/kids-armchairs/',
    },
    {
      name: 'Massage Armchairs',
      href: 'https://www.beliani.ch/armchairs/massage-armchairs/',
    },
  ],
  // Cat 03
  [
    {
      name: 'Coffee Tables',
      href: 'https://www.beliani.ch/tables/coffee-tables/',
    },
    {
      name: 'Dining Tables',
      href: 'https://www.beliani.ch/tables/dining-tables/',
    },
    {
      name: 'Extending Tables',
      href: 'https://www.beliani.ch/tables/extending-tables/',
    },
    {
      name: 'Console Tables',
      href: 'https://www.beliani.ch/tables/console-tables/',
    },
    {
      name: 'Table Sets',
      href: 'https://www.beliani.ch/tables/nest-of-tables/',
    },
    {
      name: 'Side Tables',
      href: 'https://www.beliani.ch/tables/side-tables/',
    },
  ],
  // Cat 04
  [
    {
      name: 'Fabric Beds',
      href: 'https://www.beliani.ch/beds/fabric-beds/',
    },
    {
      name: 'Storage Beds',
      href: 'https://www.beliani.ch/beds/storage-beds/',
    },
    {
      name: 'Wooden Beds',
      href: 'https://www.beliani.ch/beds/wooden-beds/',
    },
    {
      name: 'Kids Beds',
      href: 'https://www.beliani.ch/beds/beds-for-children/',
    },
    {
      name: 'Rattan Beds',
      href: 'https://www.beliani.ch/beds/rattan-beds/',
    },
    {
      name: 'Metal Beds',
      href: 'https://www.beliani.ch/beds/metal-beds/',
    },
  ],
  // Cat 05
  [
    {
      name: 'Table Lamps',
      href: 'https://www.beliani.ch/lighting/table-lamps/',
    },
    {
      name: 'Floor Lamps',
      href: 'https://www.beliani.ch/lighting/floor-lamps/',
    },
    {
      name: 'Wall Lamps',
      href: 'https://www.beliani.ch/lighting/wall-lamps/',
    },
    {
      name: 'Pendant Lights',
      href: 'https://www.beliani.ch/lighting/pendant-lights/',
    },
    {
      name: 'Chandeliers',
      href: 'https://www.beliani.ch/lighting/chandeliers/',
    },
    {
      name: 'Office Lighting',
      href: 'https://www.beliani.ch/lighting/office-lighting-new/',
    },
  ],
  // Cat 06
  [
    {
      name: 'Wool Rugs',
      href: 'https://www.beliani.ch/rugs/wool-rugs/',
    },
    {
      name: 'Modern Rugs',
      href: 'https://www.beliani.ch/rugs/modern-rugs/',
    },
    {
      name: 'Classic Rugs',
      href: 'https://www.beliani.ch/rugs/classic-rugs/',
    },
    {
      name: 'Oriental Rugs',
      href: 'https://www.beliani.ch/rugs/oriental-rugs/',
    },
    {
      name: 'Jute Rugs',
      href: 'https://www.beliani.ch/rugs/jute-rugs/',
    },
    {
      name: 'Bath Mats',
      href: 'https://www.beliani.ch/rugs/bath-mats/',
    },
  ],
];

// Category tiles
const generateTiles = () =>
  catTitles.map((name, idx) => {
    const tiles = catTiles[idx].map((tile, tileIdx) => {
      const number = idx * 6 + tileIdx + 1;
      const imageNumber = String(number).padStart(2, '0');
      const imageName = `${date}_catTile${imageNumber}.jpg`;

      return {
        ...tile,
        titleQuery: [11, 25, 34].includes(number) ? `category_title_${number}` : undefined,
        src: translateImage({ value: `ns${imageName}` }),
      };
    });

    return {
      type: 'rowswith3categories',
      name,
      background: palette.page,
      color: palette.text,

      container: 'newsletterContainerDeal20px',
      containerPadding: 20,
      gridClass: 'blackWeekCategoryGrid',
      tileGap: 10,

      spaceBetweenRows: 'newsletterBottom20px',
      tileNameClass: 'blackWeekCategoryName',
      tileCtaClass: 'blackWeekCategoryCta',
      showTileText: false,

      paddingTop: 0,
      spaceAfter: 'newsletterBottom45px',

      title: {
        show: true,
        align: 'center',
        className: 'newsletterTitle roomTitle',
        styles: 'text-transform: uppercase;',
        container: 'newsletterContainerDeal20px',
        spaceAfter: 'newsletterBottom20px',
      },
      paragraph: { spaceAfter: 0 },
      cta: { show: false },
      categories: [tiles.slice(0, 3), tiles.slice(3, 6)],
    };
  });

const categories = [
  {
    background: '#000000',
    color: '#000000',
    type: 'black-week-extras',
    textColor: '#FFFFFF',
    href: translateLink({ value: 'content/lp26-11-16' }),
    container: 'newsletterContainerDeal30px',

    dealImgs: [
      translateImage({ value: '_black_week_extra_20.png' }),
      translateImage({ value: '_black_week_extra_15.png' }),
      translateImage({ value: '_black_week_extra_10.png' }),
      translateImage({ value: '_black_week_extra_5.png' }),
    ],
    dealTierLines: 5,
    copyToast: {
      background: palette.toastBg,
      color: '#000000',
    },

    dealBoxColor: '#FFF3E6',
    dealBoxTextColor: '#000000',
    dealValueColor: '#FF2F00',

    dealWidth: 590,
    dealGap: 10,

    paddingTop: 0,
    paragraph: { spaceAfter: 'newsletterBottom35px' },
    spaceBeforeDeal: 'newsletterBottom35px',
    spaceAfterDeal: 'newsletterBottom20px',

    spaceAfterDealLp: 'newsletterBottom35px',
    spaceAfterCodeCta: 'newsletterBottom35px',

    spaceAfterConditions: 'newsletterBottom35px',
    spaceAfter: 0,
    dealCodeBreak: ['es', 'pt', 'it', 'uk', 'befr', 'benl', 'fi', 'nl', 'no', 'si'],
  },
  ...generateTiles(),
];

export default new entities.Campaign({
  startId: 49697,
  lpId: 33448,
  issueCardId: 545785,
  version: 'new',
  name: 'Black Week product main and sub',
  date: '16.11.2026',
  figmaUrl: 'https://www.figma.com/design/1oqoYfZf6nZgNbJ15rDv7B/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Friday,
      css: types.CSS.NS_FRIDAY,
      optimizeCss: true,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#000000',
      color: '#ffffff',

      wrapper: types.WRAPPER,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCss,
      footer_theme: 'black',
    },

    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Friday,
      css: types.CSS.LP_FRIDAY,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#000000',
      color: '#ffffff',

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCssLp,
      footer_theme: 'black',
    },
  ],
});
