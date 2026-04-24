export class Campaign {
  startId;
  lpId;
  specialLpIds;
  name;
  date;
  alarm;
  issueCardId;
  templates;
  optimizeImg;
  isArchive;
  products;
  figmaUrl;
  version;
  full_img_width;
  white_line;
  under_intro_line;
  soon_banners;
  constructor({
    date,
    data,
    issueCardId,
    name,
    alarm,
    products,
    isArchive,
    optimizeImg,
    startId,
    lpId,
    specialLpIds = null,
    templates,
    figmaUrl,
    full_img_width,
    white_line,
    under_intro_line,
    soon_banners,
    version = 'new',
  }) {
    if (!Array.isArray(templates)) {
      throw new Error('templates property should be array');
    }
    if (!name) {
      throw new Error('name property should be defined for campaign');
    }
    if (!date) {
      throw new Error('date property should be defined for campaign');
    }
    if (!startId) {
      throw new Error('startId property should be defined for campaign');
    }
    // for (const template of templates) {
    //   if (template instanceof NewsletterTemplate) {
    //     continue;
    //   } else {
    //     console.log(template, " Is not instance of NewsletterTemplate");
    //     throw new Error(
    //       "Please, use NewsletterTemplate to define template in app.js. More details in console."
    //     );
    //   }
    // }
    this.date = date;
    this.issueCardId = issueCardId || null;
    this.name = name;
    this.startId = startId;
    this.lpId = lpId || null;
    this.specialLpIds = specialLpIds || null;
    this.templates = templates;
    this.alarm = {
      isActive: alarm?.isActive || false,
      description: alarm?.description || 'Remember about: ',
    };
    this.data = data || null;
    this.optimizeImg = optimizeImg || true;
    this.isArchive = isArchive || false;
    this.products = products || null;
    this.figmaUrl = figmaUrl || null;
    this.version = version || 'new';
    this.full_img_width = full_img_width || false;
    this.white_line = white_line || false;
    this.under_intro_line = under_intro_line || false;
    this.soon_banners = soon_banners || false;
  }
}
