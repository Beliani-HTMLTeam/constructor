// Campaign generated from handoff package (handoff/ — Free Lamp / Living room refresh)
const campaignTranslationsSheet = '2026::Voucher - 24.08.26 - Free lamp';

// NOTE on row numbers: the handoff's copy.md documents rows offset by -2 versus the live
// sheet (verified via raw dump, GET /api/local/dynamic/2026/Voucher - 24.08.26 - Free lamp).
// All tableRanges below use the LIVE sheet's row numbers, not copy.md's.
const tableQueries = [
  {
    name: 'offer',
    tableRange: '25:27', // eyebrow "Gift with purchase" / headline "Get a free lamp" / body
  },
  {
    name: 'offer_cta',
    tableRange: '30', // "Get the code"
  },
  {
    name: 'offer_code',
    tableRange: '28', // "Code: freelampUK26" — LP copy-button raw code line
  },
  {
    name: 'offer_date',
    tableRange: '29', // "Valid until [[voucher_available_to_...]]"
  },
  {
    name: 'free_subtitle',
    tableRange: '31', // "Your lamp is chosen in a pop-up after the code is entered at step 3 of checkout."
  },
  {
    name: 'intro',
    tableRange: '32:33', // "Living room refresh" / editorial body
  },
  {
    name: 'catButtons',
    tableRange: '34:37', // Shop sofas / Shop coffee tables / Shop storage / Shop rugs (UK+ES only — other locales fall back to the phrase below)
  },
  {
    name: 'condition',
    tableRange: '39:40', // row 39 duplicates row 38's full voucher conditions text; row 40 is the item-availability note — merges into one footer condition string per instruction
  },
];

const links = {
  // "Get the code" CTA (offer band) reads links.TopImageTitle_href — see deal/offer.ts.
  // No TopImageTitle_src is set, so no title-overlay graphic renders (this design's hero has no text overlay).
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-24' }),

  TopImage_src: getImageUrl('20260824/hero_top-image_20260824.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-24' }),

  Intro_cta_href: 'https://www.beliani.ch/living-room-furniture/',

  // Standard "shop limited-time deals" footer banners
  Banner_1: translateLink({ value: 'content/lp26-08-13' }),
  Banner_1_Image: translateImage({ value: '20260813b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-08-12' }),
  Banner_2_Image: translateImage({ value: '20260812b.png' }),
};

const categories = [
  // Offer band (Cozy Brown) + "Choose from" freebie grid (4 lamps, 2x2)
  {
    type: 'deal',
    background: '#750000',
    color: '#ffffff',
    paddingTop: 0,
    align: 'center',
    offerHeadlineIndex: 1, // row 26 "Get a free lamp" renders as the big/bold H1; row 25 (index 0) becomes the small tracked lead-in label
    offerLabelColor: '#FFCCB7',
    offerDateColor: '#D7A79A',
    // Filled peach pill (NS: link button; LP: click-to-copy button, same visual weight)
    // instead of the legacy underlined text CTA / bare text+icon.
    codeButtonStyle: 'filled',
    codeButtonBackground: '#FFCCB7',
    codeButtonColor: '#3A2A24',
    codeButtonWidth: 230,
    codeButtonHeight: 48,
    // LP: floating corner "copied" notification (ported from KrBiranowski's Monday
    // `copyCodeWeb: true` campaigns) instead of the inline tooltip.
    copyCodeWeb: true,
    freebiesLikeProducts: true, // name/variant/Free label like a normal product card, matching this design
    anotherTableForFreebies: true,
    freebiesBackground: '#FFFFFF',
    paragraph: {
      show: false,
      spaceAfter: 'newsletterBottom0px', // offer.ts already opens its own 35px top spacer — avoid stacking a second one
    },
    product: {
      priceColor: '#750000', // "FREE" label colour
    },
    freebies: [
      [
        { id: '78710', src: getImageUrl('20260824/product_78710.jpg', true), name: 'Senia', description: 'Pendant lamp, white' },
        { id: '192612', src: getImageUrl('20260824/product_192612.jpg', true), name: 'Volga 1', description: 'Wall lamp, copper + black, set of 2' },
      ],
      [
        { id: '78707', src: getImageUrl('20260824/product_78707.jpg', true), name: 'Senia', description: 'Pendant lamp, black' },
        { id: '406012', src: getImageUrl('20260824/product_406012.jpg', true), name: 'Tobins', description: 'Pendant lamp, matt black' },
      ],
    ],
    container: 'newsletterContainer35px',
    spaceAfter: 'newsletterBottom45px',
    line: { show: true }, // divider rule before the editorial section
  },

  // Sofas
  {
    name: 'Sofas',
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
    type: 'grid',
    background: '#FFFFFF',
    color: '#242222',
    paddingTop: 0,
    container: 'newsletterContainer35px',
    tdClass: 'newsletterContainer35px', // lifestyle image licuje z tytułem/gridem (ta sama klasa)
    src: getImageUrl('20260824/lifestyle_sofas_735462.jpg', true),
    title: {
      show: true,
      position: 'beforeImg',
      align: 'left',
      spaceAfter: 'newsletterBottom15px',
    },
    paragraph: {
      show: false,
      spaceAfter: 'newsletterBottom25px', // gap between lifestyle image and product grid
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      priceColor: '#750000',
    },
    products: [
      { id: '506046', src: getImageUrl('20260824/product_506046.jpg', true), name: 'Loen', description: '2 seater sofa, orange velvet' },
      { id: '618213', src: getImageUrl('20260824/product_618213.jpg', true), name: 'Ilbro', description: '2 seater sofa, green bouclé' },
      { id: '567128', src: getImageUrl('20260824/product_567128.jpg', true), name: 'Lofoten', description: 'Corner sofa, left hand, green' },
      { id: '735462', src: getImageUrl('20260824/product_735462.jpg', true), name: 'Hovden', description: '3 seater sofa, brown fabric' },
    ],
    // Filled pill button (bg + radius) — .newsletterCtaCaps is typography-only, so this is raw
    // HTML/CSS per CLAUDE.md's CTA rule. NOTE: static English label — cta object mode has no
    // per-locale catButtons hookup available alongside a custom filled style (see chat notes).
    ctaHtml: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td bgcolor="#750000" align="center" height="46" style="background-color:#750000;border-radius:4px;height:46px;"><a href="https://www.beliani.ch/living-room-furniture/sofas/" style="display:block;padding:14px 20px;font-family:Poppins,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:18px;letter-spacing:0.16em;text-transform:uppercase;color:#FFFFFF;text-decoration:none;font-weight:600;">Shop sofas</a></td></tr></table>`,
    spaceAfter: 'newsletterBottom45px',
  },

  // Coffee tables
  {
    name: 'Coffee Tables',
    href: 'https://www.beliani.ch/tables/coffee-tables/',
    type: 'grid',
    background: '#FBF3F0',
    color: '#242222',
    paddingTop: 45,
    container: 'newsletterContainer35px',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom15px',
    },
    paragraph: {
      show: false,
      spaceAfter: 'newsletterBottom0px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      priceColor: '#750000',
    },
    products: [
      { id: '817694', src: getImageUrl('20260824/product_817694.jpg', true), name: 'Mamawi', description: 'Coffee table, beige' },
      { id: '649974', src: getImageUrl('20260824/product_649974.jpg', true), name: 'Asierio', description: 'Coffee table, travertine effect' },
      { id: '622259', src: getImageUrl('20260824/product_622259.jpg', true), name: 'Easton', description: 'Coffee table, dark brown' },
      { id: '597134', src: getImageUrl('20260824/product_597134.jpg', true), name: 'Leona', description: 'Coffee table, black' },
    ],
    ctaHtml: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td bgcolor="#750000" align="center" height="46" style="background-color:#750000;border-radius:4px;height:46px;"><a href="https://www.beliani.ch/tables/coffee-tables/" style="display:block;padding:14px 20px;font-family:Poppins,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:18px;letter-spacing:0.16em;text-transform:uppercase;color:#FFFFFF;text-decoration:none;font-weight:600;">Shop coffee tables</a></td></tr></table>`,
    spaceAfter: 'newsletterBottom45px',
  },

  // Storage
  {
    name: 'Storage',
    href: 'https://www.beliani.ch/living-room-furniture/storage/',
    type: 'grid',
    background: '#FFFFFF',
    color: '#242222',
    paddingTop: 45,
    container: 'newsletterContainer35px',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom15px',
    },
    paragraph: {
      show: false,
      spaceAfter: 'newsletterBottom0px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      priceColor: '#750000',
    },
    products: [
      { id: '645981', src: getImageUrl('20260824/product_645981.jpg', true), name: 'Kahntah', description: '3 tier bookcase, light brown' },
      { id: '553767', src: getImageUrl('20260824/product_553767.jpg', true), name: 'Selah', description: 'TV stand, light wood' },
      { id: '563169', src: getImageUrl('20260824/product_563169.jpg', true), name: 'Walcott', description: 'Chest of 6 drawers, green' },
      { id: '672749', src: getImageUrl('20260824/product_672749.jpg', true), name: 'Costello', description: 'Sideboard 120 cm, light brown' },
    ],
    ctaHtml: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td bgcolor="#750000" align="center" height="46" style="background-color:#750000;border-radius:4px;height:46px;"><a href="https://www.beliani.ch/living-room-furniture/storage/" style="display:block;padding:14px 20px;font-family:Poppins,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:18px;letter-spacing:0.16em;text-transform:uppercase;color:#FFFFFF;text-decoration:none;font-weight:600;">Shop storage</a></td></tr></table>`,
    spaceAfter: 'newsletterBottom45px',
  },

  // Rugs
  {
    name: 'Rugs',
    href: 'https://www.beliani.ch/living-room-furniture/rugs/',
    type: 'grid',
    background: '#FBF3F0',
    color: '#242222',
    paddingTop: 45,
    container: 'newsletterContainer35px',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom15px',
    },
    paragraph: {
      show: false,
      spaceAfter: 'newsletterBottom0px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      priceColor: '#750000',
    },
    products: [
      { id: '425636', src: getImageUrl('20260824/product_425636.jpg', true), name: 'Dagari', description: 'Wool rug, beige, 200 × 300 cm' },
      { id: '377164', src: getImageUrl('20260824/product_377164.jpg', true), name: 'Matarim', description: 'Cotton rug, beige, 200 × 300 cm' },
      { id: '390287', src: getImageUrl('20260824/product_390287.jpg', true), name: 'Ghukasavan', description: 'Kilim rug, multicolour, 200 × 300 cm' },
      { id: '455185', src: getImageUrl('20260824/product_455185.jpg', true), name: 'Ramzan', description: 'Viscose rug, beige, 200 × 300 cm' },
    ],
    ctaHtml: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td bgcolor="#750000" align="center" height="46" style="background-color:#750000;border-radius:4px;height:46px;"><a href="https://www.beliani.ch/living-room-furniture/rugs/" style="display:block;padding:14px 20px;font-family:Poppins,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:18px;letter-spacing:0.16em;text-transform:uppercase;color:#FFFFFF;text-decoration:none;font-weight:600;">Shop rugs</a></td></tr></table>`,
    spaceAfter: 'newsletterBottom45px',
  },
];

export default new entities.Campaign({
  version: 'new',
  startId: '46833',
  name: 'testowa kampania claude code xxx',
  date: '24.08.2026',
  issueCardId: '000000',
  lpId: '31772',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  templates: [
    {
      background: '#750000',
      color: '#ffffff',
      template: templates.Thursday,
      intro: {
        color: '#242222',
        backgroundColor: '#FFFFFF',
        ctaColor: '#750000',
        alignment: 'center',
        position: 'afterFreebies',
        spaceTop: 'newsletterBottom40px',
        spaceBottom: 'newsletterBottom45px',
        cta: {
          show: true,
          spaceBefore: 'newsletterBottom20px',
        },
      },
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#750000',
      color: '#ffffff',
      template: templates.Thursday,
      intro: {
        color: '#242222',
        backgroundColor: '#FFFFFF',
        ctaColor: '#750000',
        alignment: 'center',
        position: 'afterFreebies',
        spaceTop: 'newsletterBottom40px',
        spaceBottom: 'newsletterBottom45px',
        cta: {
          show: true,
          spaceBefore: 'newsletterBottom20px',
        },
      },
      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
