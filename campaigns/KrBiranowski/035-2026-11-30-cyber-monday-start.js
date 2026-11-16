const campaignTranslationsSheet = '2026::Voucher - 30.11.26 - Cyber Monday Start';

const dealTranslationsSheets = [
  '2026::Voucher - 30.11.26 - Cyber Monday Start',
  '2026::Voucher - 04.12.26 - Cyber Monday Reminder',
];

const tableQueries = [
  ...[
		["TopImageTitle", "22:23", dealTranslationsSheets[1]],
    ['deal_1', '25:27', dealTranslationsSheets[0]],
    ['deal_2', '28:30', dealTranslationsSheets[0]],
    ['deal_3', '31:33', dealTranslationsSheets[0]],
    ['deal_condition', '34', dealTranslationsSheets[0]],
    ['deal_date', '35', dealTranslationsSheets[0]],
    ['condition', '37:39', dealTranslationsSheets[0]],
  ].map(([name, tableRange, tableName]) => ({
    name,
    tableRange,
    tableName,
  }))
]

const lpHref = translateLink({ value: 'content/lp26-11-30' });
 
const links = {
	TopImageSubtitle_href: lpHref,
	TopImageSubtitle_src: getImageUrl('20261130_top_01.png', true),
 
	TopImage_src: translateImage({ value: '20261130_Pic.png' }),
	TopImage_href: lpHref,

	Timer_href: lpHref,
};

const TopImageTitle_data = {
	  color: '#020101',
	  backgroundColor: '##FD9000',
	  type: 'twoSameLines',
		spaceAfter: false,
	};

const palette = {
	accent: '#FF2F00',
  light: '#FFFFFF',
	dark: '#750000',
  line: '#000000',
	text: '#000000',
	page: '#FD9000',
	cta: '#FF2F00',
	tilesBg: '#F6E7E6',
	toastBg: '#FFE0D4',
	buttonBg: "#FF2F00"
};

const button = {
	show: true,
	align: 'center',
	variant: 'button',
	background: palette.dark,
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '800',
	letterSpacing: '0',
	paddingX: 38,
	paddingY: 18,
	mobilePaddingX: 24,
	mobilePaddingY: 14,
};
 
const additionalCss = `
.offerTierValue{font-size:64px;line-height:0.9;font-family:"Open Sans",sans-serif;font-weight:800;letter-spacing:-3px}
.offerTierCode{font-size:18px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:800}
.offerTierCodePrefix{text-transform:uppercase}
.cyberMondayCategoryHeading {
  font-size: 56px !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
}

.categoryListName,
.categoryListName a {
  font-size: 30px !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
}

.categoryListCta,
.categoryListCta a {
  font-size: 20px !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
}

@media screen and (max-width:768px){
  .offerTierValue{font-size:44px}
  .cyberMondayCategoryHeading {
    font-size: 30px !important;
  }

  .categoryListName,
  .categoryListName a {
    font-size: 24px !important;
  }

  .categoryListCta,
  .categoryListCta a {
    font-size: 18px !important;
  }
}
`;
 
const additionalCssLp = `
#newsletter .offerTierValue{font-size:64px;line-height:0.9;font-family:"Poppins",sans-serif;font-weight:800;letter-spacing:-3px}
#newsletter .offerTierCode{font-size:18px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:800}
#newsletter .offerTierCodePrefix{text-transform:uppercase}
#newsletter .offerTierCopyIcon *{margin:0!important;padding:0!important}
#newsletter .offerTierCopyIcon img,
#newsletter .offerTierCopyIcon svg,
#newsletter .offerTierCopyIcon .blackWeekCopyImg{width:18px!important;height:18px!important;min-width:18px!important;max-width:18px!important;display:block!important}
#newsletter .offerTierCopyIcon button {
  height: 18px;
  min-height: 0;
  width: 18px;
  padding: 0;
  line-height: 0;
}

#newsletter .cyberMondayCategoryHeading {
  font-size: 56px !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
}

#newsletter .categoryListName,
#newsletter .categoryListName a {
  font-size: 30px !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
}

#newsletter .categoryListCta,
#newsletter .categoryListCta a {
  font-size: 20px !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
}

#newsletter .offerTierCopyIcon img {
  width: 18px;
  height: 18px;
}
@media screen and (max-width:768px){
	#newsletter .offerTierValue{font-size:44px}
  #newsletter .cyberMondayCategoryHeading {
    font-size: 30px !important;
  }

  #newsletter .categoryListName,
  #newsletter .categoryListName a {
    font-size: 24px !important;
  }

  #newsletter .categoryListCta,
  #newsletter .categoryListCta a {
    font-size: 18px !important;
  }
	#newsletter .offerTierCopyIcon{width:15px!important;height:15px!important;flex-basis:15px!important}
	#newsletter .offerTierCopyIcon img,
	#newsletter .offerTierCopyIcon svg,
	#newsletter .offerTierCopyIcon .blackWeekCopyImg{width:15px!important;height:15px!important;min-width:15px!important;max-width:15px!important}
}
`;
 
const categories = [
	{
		type: 'offer_tiers',
		background: palette.page,
		color: palette.text,
		href: lpHref, // "Get codes" link
		paddingTop: 0,
		spaceAfter: 'newsletterBottom80px',
		offerTiers: {
			deals: ['deal_1', 'deal_2', 'deal_3'],
			conditionQuery: 'deal_condition',
			dateQuery: 'deal_date',
			valueColor: palette.text,
			highlightColor: palette.light,
			highlight: [2], // FREE in dark red
			codeColor: palette.light,
			lineColor: palette.line,
      conditionColor: palette.light,
			copyToast: { background: palette.toastBg, color: palette.text },
			cta: { phrase: 'Get codes', background: palette.cta, color: palette.text },
			spacing: { beforeNSLTLastLine: 50, beforeLPLastLine: 30 },
		},
	},
  {
    type: 'rowswith1category',
    displayType: 'stacked',
    background: palette.page,
    color: palette.text,
    container: 'newsletterContainer30px',
    containerPadding: 30,
    paddingTop: 0,
    paragraph: { spaceAfter: 0 },
    spaceBetweenRows: 'newsletterBottom80px',
    showTileText: true,
    tileCta: { phrase: 'Shop now' },
    tileCtaUnderline: true,
    tileStackGap: 8,
    showTileText: true,
    tileTextStack: 'always',
    tileTextAlign: 'center',
    spaceBetweenText: 'newsletterBottom10px',
    heading: {
      text: 'Shop the look',
      align: 'center',
      className: 'cyberMondayCategoryHeading',
      spaceAfter: 'newsletterBottom40px',
    },
    categories: [
      [
        {
          name: 'Sofas',
          href: 'https://www.beliani.ch/sofas/',
          src: getImageUrl('20261130_catTile01.jpg', true),
        },
      ],
      [
        {
          name: 'Beds',
          href: 'https://www.beliani.ch/bedroom-furniture/beds/',
          src: getImageUrl('20261130_catTile02.jpg', true),
        },
      ],
      [
        {
          name: 'Tables',
          href: 'https://www.beliani.ch/living-room-furniture/tables/',
          src: getImageUrl('20261130_catTile03.jpg', true),
        },
      ],
      [
        {
          name: 'Armchairs',
          href: 'https://www.beliani.ch/bedroom-furniture/armchairs/',
          src: getImageUrl('20261130_catTile04.jpg', true),
        },
      ],
      [
        {
          name: 'Dining Chairs',
          href: 'https://www.beliani.ch/chairs/dining-chairs/',
          src: getImageUrl('20261130_catTile05.jpg', true),
        },
      ],
      [
        {
          name: 'Table & Bedside Lamps',
          href: 'https://www.beliani.ch/lighting/table-lamps/',
          src: getImageUrl('20261130_catTile06.jpg', true),
        },
      ],
    ],
  },
];
 
export default new entities.Campaign({
	startId: 50305,
	lpId: 33676,
	issueCardId: 545830,
	version: 'new',
	name: 'Cyber Monday Start',
	date: '30.11.2026',
	figmaUrl: 'https://www.figma.com/design/xCTuEdQ1wz0xBuxNiJX5cK/',
	templates: [
		{
			name: 'Newsletter',
			type: types.NEWSLETTER,
			template: templates.Friday,
			css: types.CSS.NS_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,
 
			background: palette.page,
			color: palette.text,
 
			wrapper: types.WRAPPER,
 
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCss,
			footer_theme: 'peach',
			optimizeCss: true,
      disableTopImageTitle: true,
			TopImageTitle_data: TopImageTitle_data,
		},
 
		{
			name: 'Landing',
			type: types.LANDINGPAGE,
			template: templates.Friday,
			css: types.CSS.LP_FRIDAY,
			translationsSpreadsheet: campaignTranslationsSheet,
 
			background: palette.page,
			color: palette.text,
 
			categories: categories,
			links: links,
			tableQueries: tableQueries,
			additionalCss: additionalCssLp,
			footer_theme: 'peach',
			TopImageTitle_data: TopImageTitle_data,
		},
	],
});