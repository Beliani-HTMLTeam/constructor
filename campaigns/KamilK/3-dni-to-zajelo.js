const campaignTranslationsSheet = '2026::Voucher - 24.08.26 - Free lamp';

// Ranges verified against the live "2026::Voucher - 24.08.26 - Free lamp" tab. Note the
// range is 1-based on the spreadsheet including its header row, so tableRange N reads
// sheet row N (extractRangeFromSheet in src/api/fetchTranslations.js slices at N-2).
const tableQueries = [
  { tableRange: '22:23', name: 'TopImageTitle' },   // "Get a free lamp" / "choose from 4 options"
  { tableRange: '25:27', name: 'offer' },           // Offer title / part 1 / part 2
  { tableRange: '29', name: 'offer_date' },         // "The offer is valid until [[...]]"
  { tableRange: '30', name: 'offer_cta' },          // "Get the code"
  { tableRange: '31', name: 'free_subtitle' },      // "Your lamp is chosen in a pop-up ..."
  { tableRange: '32:33', name: 'intro' },           // "Living room refresh" + body copy
  { tableRange: '34:37', name: 'catButtons' },      // "Shop sofas" / "Shop coffee tables" / ...
  { tableRange: '40', name: 'condition' },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-24' }),
  TopImage_src: getImageUrl('20260824_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-24' }),
};

// "Living room refresh" editorial section — copy comes from the `intro` tableQuery above.
// Sits after the freebies/deal block (per design), on its own white field since the
// newsletter body background is maroon.
const intro = {
  position: 'afterFreebies',
  alignment: 'center',
  color: '#242222',
  backgroundColor: '#ffffff',
  ctaColor: '#750000',
  spaceTop: 'newsletterBottom45px',
  spaceBottom: 'newsletterBottom20px',
  cta: { show: true, spaceAfter: 'newsletterBottom45px' },
};




const categories = [
  {
    background: '#750000',
    color: '#ffffff',
    type: 'deal',
    paddingTop: 0,
    spaceAfter: 'newsletterBottom80px',
    paragraph: {"spaceAfter":""},
    align: 'center',
    container: 'newsletterContainer35px',
    anotherTableForFreebies: true,
    freebiesBackground: '#ffffff',
    freebiesLikeProducts: true,
    offerHeadlineIndex: 1, // sheet layout is [Offer title, Offer part 1 (headline), Offer part 2]
    // Design handoff colours for the maroon offer field — the copy is not pure white.
    offerLabelColor: '#FFCCB7',
    offerDateColor: '#D7A79A',
    product: { priceColor: '#750000' },
    // Divider between the freebies grid and the "Living room refresh" intro below it — both
    // render on white, so without it the two blocks run together with no visual break.
    line: { show: true, insideContainer: true },
    freebies: [
      [
        { id: '78710', src: 'https://pictureserver.net/pic_storage/pic/7b/8a/undef_src_sa_picid_694634_x_1000_type_whitesh_image.jpg', description: 'Pendant lamp, white' },
        { id: '192612', src: 'https://pictureserver.net/pic_storage/pic/5a/d1/undef_src_sa_picid_768609_x_1000_type_whitesh_image.jpg', description: 'Wall lamp, copper + black, set of 2' },
      ],
      [
        { id: '78707', src: 'https://pictureserver.net/pic_storage/pic/82/d3/undef_src_sa_picid_694642_x_1000_type_whitesh_image.jpg', description: 'Pendant lamp, black' },
        { id: '406012', src: 'https://pictureserver.net/pic_storage/pic/10/33/undef_src_sa_picid_873274_x_1000_type_whitesh_image.jpg', description: 'Pendant lamp, matt black' },
      ],
    ],
  },
  {
    name: 'Sofas',
    src: 'https://pictureserver.net/pic_storage/pic/8d/59/undef_src_sa_picid_1072531_x_1000_type_color_image.jpg',
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
    background: '#FFFFFF',
    color: '#242222',
    type: 'grid',
    cta: { phrase: 'Shop sofas', ctaTextIndex: 0 },
    paddingTop: 35,
    title: {"show":true,"spaceAfter":"newsletterBottom35px"},
    paragraph: {"show":false},
    container: 'newsletterContainer35px',
    product: { prices: true, name: true, align: 'left', priceColor: '#750000' },
    products: [
      { id: '506046', src: 'https://pictureserver.net/pic_storage/pic/3d/b2/undef_src_sa_picid_919722_x_1000_type_whitesh_image.jpg', description: '2 seater sofa, orange velvet' },
      { id: '618213', src: 'https://pictureserver.net/pic_storage/pic/1d/18/undef_src_sa_picid_984835_x_1000_type_whitesh_image.jpg', description: '2 seater sofa, green bouclé' },
      { id: '567128', src: 'https://pictureserver.net/pic_storage/pic/13/6d/undef_src_sa_picid_943527_x_1000_type_whitesh_image.jpg', description: 'Corner sofa, left hand, green' },
      { id: '735462', src: 'https://pictureserver.net/pic_storage/pic/1d/00/undef_src_sa_picid_1072531_x_1000_type_whitesh_image.jpg', description: '3 seater sofa, brown fabric' },
    ],
  },
  {
    name: 'Coffee tables',
    href: 'https://www.beliani.ch/tables/coffee-tables/',
    background: '#FBF3F0',
    color: '#242222',
    type: 'grid',
    cta: { phrase: 'Shop coffee tables', ctaTextIndex: 1 },
    paddingTop: 35,
    title: {"show":true,"spaceAfter":"newsletterBottom35px"},
    paragraph: {"show":false},
    container: 'newsletterContainer35px',
    product: { prices: true, name: true, align: 'left', priceColor: '#750000' },
    products: [
      { id: '817694', src: 'https://pictureserver.net/pic_storage/pic/5c/a4/undef_src_sa_picid_1090634_x_1000_type_whitesh_image.jpg', description: 'Coffee table, beige' },
      { id: '649974', src: 'https://pictureserver.net/pic_storage/pic/6a/5f/undef_src_sa_picid_1007439_x_1000_type_whitesh_image.jpg', description: 'Coffee table, travertine effect' },
      { id: '622259', src: 'https://pictureserver.net/pic_storage/pic/c0/9b/undef_src_sa_picid_986991_x_1000_type_whitesh_image.jpg', description: 'Coffee table, dark brown' },
      { id: '597134', src: 'https://pictureserver.net/pic_storage/pic/3c/f6/undef_src_sa_picid_965739_x_1000_type_whitesh_image.jpg', description: 'Coffee table, black' },
    ],
  },
  {
    name: 'Storage',
    href: 'https://www.beliani.ch/living-room-furniture/storage/',
    background: '#FFFFFF',
    color: '#242222',
    type: 'grid',
    cta: { phrase: 'Shop storage', ctaTextIndex: 2 },
    paddingTop: 35,
    title: {"show":true,"spaceAfter":"newsletterBottom35px"},
    paragraph: {"show":false},
    container: 'newsletterContainer35px',
    product: { prices: true, name: true, align: 'left', priceColor: '#750000' },
    products: [
      { id: '645981', src: 'https://pictureserver.net/pic_storage/pic/b7/b7/undef_src_sa_picid_1003825_x_1000_type_whitesh_image.jpg', description: '3 tier bookcase, light brown' },
      { id: '553767', src: 'https://pictureserver.net/pic_storage/pic/22/a8/undef_src_sa_picid_935728_x_1000_type_whitesh_image.jpg', description: 'TV stand, light wood' },
      { id: '563169', src: 'https://pictureserver.net/pic_storage/pic/f3/64/undef_src_sa_picid_941694_x_1000_type_whitesh_image.jpg', description: 'Chest of 6 drawers, green' },
      { id: '672749', src: 'https://pictureserver.net/pic_storage/pic/d3/25/undef_src_sa_picid_1022788_x_1000_type_whitesh_image.jpg', description: 'Sideboard 120 cm, light brown' },
    ],
  },
  {
    name: 'Rugs',
    href: 'https://www.beliani.ch/living-room-furniture/rugs/',
    background: '#FBF3F0',
    color: '#242222',
    type: 'grid',
    cta: { phrase: 'Shop rugs', ctaTextIndex: 3 },
    paddingTop: 35,
    title: {"show":true,"spaceAfter":"newsletterBottom35px"},
    paragraph: {"show":false},
    container: 'newsletterContainer35px',
    product: { prices: true, name: true, align: 'left', priceColor: '#750000' },
    products: [
      { id: '425636', src: 'https://pictureserver.net/pic_storage/pic/46/ab/undef_src_sa_picid_885765_x_1000_type_whitesh_image.jpg', description: 'Wool rug, beige, 200 × 300 cm' },
      { id: '377164', src: 'https://pictureserver.net/pic_storage/pic/2f/94/undef_src_sa_picid_852489_x_1000_type_whitesh_image.jpg', description: 'Cotton rug, beige, 200 × 300 cm' },
      { id: '390287', src: 'https://pictureserver.net/pic_storage/pic/25/7d/undef_src_sa_picid_859072_x_1000_type_whitesh_image.jpg', description: 'Kilim rug, multicolour, 200 × 300 cm' },
      { id: '455185', src: 'https://pictureserver.net/pic_storage/pic/b2/8a/undef_src_sa_picid_904164_x_1000_type_whitesh_image.jpg', description: 'Viscose rug, beige, 200 × 300 cm' },
    ],
  },
];

export default new entities.Campaign({
  startId: '46833',
  name: 'testowa kampania claude code',
  date: '24.08.2026',
  issueCardId: '000000',
  lpId: '31772',
  alarm: { isActive: false },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: '',
  templates: [
    {
      background: '#750000',
      color: '#ffffff',
      template: templates.Thursday,

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      intro,
      categories,
      links,
      tableQueries,
    },
    {
      background: '#750000',
      color: '#ffffff',
      template: templates.Thursday,

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      intro,
      categories,
      links,
      tableQueries,
    },
  ],
});
