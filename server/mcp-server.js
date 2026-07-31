import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

// ─── Constants ───────────────────────────────────────────────────────────────
const CONSTRUCTOR_ROOT = process.env.CONSTRUCTOR_PATH || path.resolve(import.meta.dirname, '..');
const CAMPAIGNS_DIR = path.join(CONSTRUCTOR_ROOT, 'campaigns');

// ─── Available templates ─────────────────────────────────────────────────────
const AVAILABLE_TEMPLATES = {
  Monday: {
    description: 'Standard Monday newsletter — categories with products, TopImageTitle, intro section, "soon ending" banners',
    import: 'templates.Monday',
    supportedTypes: ['grid', 'deal', 'categorytiles', 'small-tiles', 'image', 'OnlyImage'],
  },
  Thursday: {
    description: 'Thursday newsletter — similar to Monday but supports timer, Inside element, TopImage_data',
    import: 'templates.Thursday',
    supportedTypes: ['grid', 'deal', 'categorytiles', 'small-tiles', 'image', 'OnlyImage'],
  },
  Friday: {
    description: 'Friday newsletter',
    import: 'templates.Friday',
    supportedTypes: ['grid', 'image'],
  },
  Blackweek: {
    description: 'Black Week special newsletter template',
    import: 'templates.Blackweek',
    supportedTypes: ['blackweek_toprated', 'grid'],
  },
  RegularFridayNslt1: {
    description: 'Regular Friday newsletter variant 1',
    import: 'templates.RegularFridayNslt1',
    supportedTypes: ['grid', 'image'],
  },
};

// ─── Available category types ────────────────────────────────────────────────
const CATEGORY_TYPES = {
  grid: 'Standard category with image + 4 products in 2x2 grid + CTA. Most commonly used.',
  deal: 'Freebie/deal section with promo code. Uses freebies array instead of products.',
  categorytiles: '"This may also interest you" section with small tiles (name + image + link). No products.',
  'small-tiles': 'Small tiles with custom dimensions.',
  monday: 'Legacy Monday-style category (title left, image, 4 products, CTA).',
  wednesday: 'Wednesday-style (image on top, title, description, 4 products, CTA).',
  mondaywithparagraph: 'Monday style but with centered title and description paragraph.',
  image: 'Just an image with link, no products.',
  OnlyImage: 'Only image with link in a container, no products.',
  'image&cta': 'Image with link + CTA text below.',
  no_products: 'Category with title, image and CTA but no products.',
  standard: 'Standard category with left-aligned title, image, CTA, and line separator.',
  one_freebie: 'Single freebie product display.',
  image_with_2_product: 'Image header + 2 products below.',
};

// ─── Available shops (summary) ───────────────────────────────────────────────
const SHOPS_SUMMARY = [
  { slug: 'CHDE', origin: 'beliani.ch', languages: ['CHDE', 'CHIT', 'CHFR'] },
  { slug: 'UK', origin: 'beliani.co.uk', languages: ['UK'] },
  { slug: 'DE', origin: 'beliani.de', languages: ['DE'] },
  { slug: 'FR', origin: 'beliani.fr', languages: ['FR'] },
  { slug: 'AT', origin: 'beliani.at', languages: ['AT'] },
  { slug: 'ES', origin: 'beliani.es', languages: ['ES'] },
  { slug: 'PL', origin: 'beliani.pl', languages: ['PL'] },
  { slug: 'NL', origin: 'beliani.nl', languages: ['NL'] },
  { slug: 'PT', origin: 'beliani.pt', languages: ['PT'] },
  { slug: 'IT', origin: 'beliani.it', languages: ['IT'] },
  { slug: 'SE', origin: 'beliani.se', languages: ['SE'] },
  { slug: 'HU', origin: 'beliani.hu', languages: ['HU'] },
  { slug: 'DK', origin: 'beliani.dk', languages: ['DK'] },
  { slug: 'CZ', origin: 'beliani.cz', languages: ['CZ', 'SK'] },
  { slug: 'FI', origin: 'beliani.fi', languages: ['FI'] },
  { slug: 'NO', origin: 'beliani.no', languages: ['NO'] },
  { slug: 'SK', origin: 'beliani.sk', languages: ['SK', 'CZ', 'HU'] },
  { slug: 'BE', origin: 'beliani.be', languages: ['BENL', 'BEFR'] },
  { slug: 'RO', origin: 'beliani.ro', languages: ['RO'] },
  { slug: 'SI', origin: 'beliani.si', languages: ['SI'] },
  { slug: 'HR', origin: 'beliani.hr', languages: ['HR'] },
];

// ─── Available CTA styles ────────────────────────────────────────────────────
const CTA_STYLES = {
  text: 'Standard underlined text CTA (component: CTA). Used in most existing newsletters.',
  button: 'Button-style CTA with background color (component: ButtonCTA). New design style with filled buttons.',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function listCampaignUsers() {
  try {
    return fs.readdirSync(CAMPAIGNS_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
      .map((d) => d.name);
  } catch {
    return [];
  }
}

function listUserCampaigns(user) {
  const userDir = path.join(CAMPAIGNS_DIR, user);
  if (!fs.existsSync(userDir)) return [];

  return fs.readdirSync(userDir, { withFileTypes: true })
    .filter((f) => f.isFile() && f.name.endsWith('.js') && !f.name.startsWith('.'))
    .map((f) => f.name);
}

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9_\-\.]/g, '-');
}

/**
 * Generates the campaign JS file content based on provided parameters.
 * The output is a valid campaign file with Vite AutoImport globals.
 */
function generateCampaignFile({
  translationsSheet,
  tableQueries,
  links,
  topImageTitleData,
  intro,
  categories,
  startId,
  name,
  date,
  issueCardId,
  lpId,
  figmaUrl,
  templateName,
  backgroundColor,
  textColor,
  isArchive,
  conditionOverrides,
  disableSoonEnding,
}) {
  const template = AVAILABLE_TEMPLATES[templateName];
  if (!template) {
    throw new Error(`Unknown template: ${templateName}. Available: ${Object.keys(AVAILABLE_TEMPLATES).join(', ')}`);
  }

  // Build tableQueries section
  const tqLines = (tableQueries || [])
    .map((tq) => `  { tableRange: '${tq.tableRange}', name: '${tq.name}'${tq.fallback ? `, fallback: ${tq.fallback}` : ''} },`)
    .join('\n');

  // Build links section
  const linkLines = Object.entries(links || {})
    .map(([key, value]) => {
      if (typeof value === 'string') {
        // Direct URL or getImageUrl call
        return `  ${key}: ${value},`;
      }
      if (value.type === 'translateLink') {
        return `  ${key}: translateLink({ value: '${value.value}' }),`;
      }
      if (value.type === 'translateImage') {
        return `  ${key}: translateImage({ value: '${value.value}' }),`;
      }
      if (value.type === 'imageUrl') {
        return `  ${key}: getImageUrl('${value.value}', true),`;
      }
      return `  ${key}: '${value}',`;
    })
    .join('\n');

  // Build TopImageTitle_data
  const titDataLines = topImageTitleData
    ? `\nconst TopImageTitle_data = ${JSON.stringify(topImageTitleData, null, 2)};`
    : '';

  // Build intro
  const introLines = intro
    ? `\nconst intro = ${JSON.stringify(intro, null, 2)};`
    : '';

  // Build categories
  const catLines = buildCategoriesString(categories || []);

  // Build condition overrides
  const condLines = conditionOverrides
    ? `\nconst conditionOverrides = ${JSON.stringify(conditionOverrides, null, 2)};`
    : '';

  // Build the templates array entry
  const templateEntries = buildTemplateEntries({
    templateName,
    backgroundColor,
    textColor,
    translationsSheet,
    hasTopImageTitleData: !!topImageTitleData,
    hasIntro: !!intro,
    hasConditionOverrides: !!conditionOverrides,
    disableSoonEnding,
  });

  return `const campaignTranslationsSheet = '${translationsSheet || ''}';

const tableQueries = [
${tqLines}
];

const links = {
${linkLines}
};
${titDataLines}
${introLines}
${condLines}

const categories = ${catLines};

export default new entities.Campaign({
  startId: '${startId}',
  name: '${name}',
  date: '${date}',
  issueCardId: '${issueCardId || ''}',
  lpId: '${lpId || ''}',
  alarm: { isActive: false },
  isArchive: ${isArchive || false},
  optimizeImg: true,
  figmaUrl: '${figmaUrl || ''}',
  templates: [
${templateEntries}
  ],
});
`;
}

function buildCategoriesString(categories) {
  if (!categories || categories.length === 0) return '[]';

  const items = categories.map((cat) => {
    const lines = [];
    lines.push('  {');

    if (cat.name) lines.push(`    name: '${cat.name}',`);
    if (cat.nameOverrides) lines.push(`    nameOverrides: ${JSON.stringify(cat.nameOverrides)},`);

    if (cat.src) {
      if (cat.src.startsWith('getImageUrl') || cat.src.startsWith('translateImage')) {
        lines.push(`    src: ${cat.src},`);
      } else {
        lines.push(`    src: getImageUrl('${cat.src}', true),`);
      }
    }

    if (cat.href) {
      if (cat.href.startsWith('translateLink') || cat.href.startsWith('http')) {
        lines.push(`    href: '${cat.href}',`);
      } else {
        lines.push(`    href: '${cat.href}',`);
      }
    }

    if (cat.background) lines.push(`    background: '${cat.background}',`);
    if (cat.color) lines.push(`    color: '${cat.color}',`);
    if (cat.type) lines.push(`    type: '${cat.type}',`);

    if (cat.cta !== undefined) {
      if (typeof cat.cta === 'object') {
        lines.push(`    cta: ${JSON.stringify(cat.cta)},`);
      } else {
        lines.push(`    cta: ${cat.cta},`);
      }
    }

    if (cat.paddingTop !== undefined) lines.push(`    paddingTop: ${cat.paddingTop},`);
    if (cat.spaceAfter) lines.push(`    spaceAfter: '${cat.spaceAfter}',`);

    if (cat.title) lines.push(`    title: ${JSON.stringify(cat.title)},`);
    if (cat.paragraph) lines.push(`    paragraph: ${JSON.stringify(cat.paragraph)},`);
    if (cat.product) lines.push(`    product: ${JSON.stringify(cat.product)},`);

    // Products
    if (cat.products && cat.products.length > 0) {
      lines.push('    products: [');
      cat.products.forEach((p) => {
        const srcExpr = p.src.startsWith('getImageUrl') ? p.src : `getImageUrl('${p.src}', true)`;
        lines.push(`      { id: '${p.id}', src: ${srcExpr} },`);
      });
      lines.push('    ],');
    }

    // Tiles (for categorytiles type)
    if (cat.tiles && cat.tiles.length > 0) {
      lines.push('    tiles: [');
      cat.tiles.forEach((t) => {
        const srcExpr = t.src.startsWith('getImageUrl') ? t.src : `getImageUrl('${t.src}', true)`;
        lines.push(`      { name: '${t.name}', src: ${srcExpr}, href: '${t.href}' },`);
      });
      lines.push('    ],');
    }

    // Freebies (for deal type)
    if (cat.freebies && cat.freebies.length > 0) {
      lines.push('    freebies: [');
      cat.freebies.forEach((group) => {
        lines.push('      [');
        group.forEach((f) => {
          const srcExpr = f.src.startsWith('getImageUrl') ? f.src : `getImageUrl('${f.src}', true)`;
          lines.push(`        { id: '${f.id}', src: ${srcExpr} },`);
        });
        lines.push('      ],');
      });
      lines.push('    ],');
    }

    lines.push('  }');
    return lines.join('\n');
  });

  return `[\n${items.join(',\n')},\n]`;
}

function buildTemplateEntries({
  templateName,
  backgroundColor,
  textColor,
  translationsSheet,
  hasTopImageTitleData,
  hasIntro,
  hasConditionOverrides,
  disableSoonEnding,
}) {
  const template = AVAILABLE_TEMPLATES[templateName];

  const commonProps = (type, cssType, templateType) => {
    const lines = [];
    lines.push(`      background: '${backgroundColor || '#FFFFFF'}',`);
    lines.push(`      color: '${textColor || '#000000'}',`);
    lines.push(`      template: ${template.import},`);
    lines.push('');
    lines.push(`      css: types.CSS.${cssType},`);
    lines.push(`      name: '${type}',`);
    lines.push(`      type: types.${templateType},`);
    lines.push(`      translationsSpreadsheet: campaignTranslationsSheet,`);
    if (templateType === 'NEWSLETTER') {
      lines.push('      wrapper: types.WRAPPER,');
    }
    if (hasTopImageTitleData) lines.push('      TopImageTitle_data,');
    if (hasIntro) lines.push('      intro,');
    if (hasConditionOverrides) lines.push('      conditionOverrides,');
    if (disableSoonEnding) lines.push(`      disableSoonEnding: ${JSON.stringify(disableSoonEnding)},`);
    lines.push('      categories,');
    lines.push('      links,');
    lines.push('      tableQueries,');
    return lines.join('\n');
  };

  return `    {
${commonProps('Newsletter', 'NS', 'NEWSLETTER')}
    },
    {
${commonProps('Landing', 'LP', 'LANDINGPAGE')}
    },`;
}

// ─── MCP Server ──────────────────────────────────────────────────────────────

const server = new McpServer({
  name: 'newsletter-constructor',
  version: '1.0.0',
  description: 'MCP server for Beliani newsletter constructor — create, list, and inspect campaign files',
});

// ── Tool: list_campaigns ─────────────────────────────────────────────────────

server.tool(
  'list_campaigns',
  `List campaign files for a given user. If no user is specified, lists all users.
Returns campaign filenames within campaigns/[user]/ directory.`,
  { user: z.string().optional().describe('Campaign user/author folder name (e.g. "Jakub", "KamilK"). If omitted, lists all users.') },
  async ({ user }) => {
    if (!user) {
      const users = listCampaignUsers();
      return {
        content: [
          {
            type: 'text',
            text: `Available campaign users:\n${users.map((u) => `- ${u}`).join('\n')}\n\nUse list_campaigns with a specific user to see their campaigns.`,
          },
        ],
      };
    }

    const campaigns = listUserCampaigns(user);
    if (campaigns.length === 0) {
      return {
        content: [{ type: 'text', text: `No campaigns found for user "${user}". Directory may not exist.` }],
      };
    }

    return {
      content: [
        {
          type: 'text',
          text: `Campaigns for ${user} (${campaigns.length}):\n${campaigns.map((c) => `- ${c}`).join('\n')}`,
        },
      ],
    };
  },
);

// ── Tool: get_campaign ───────────────────────────────────────────────────────

server.tool(
  'get_campaign',
  `Read the content of an existing campaign file. Returns the JS source code.`,
  {
    user: z.string().describe('Campaign user/author folder name'),
    filename: z.string().describe('Campaign filename (e.g. "013_2026-06-17-dining-furniture.js")'),
  },
  async ({ user, filename }) => {
    const filePath = path.join(CAMPAIGNS_DIR, user, filename);
    if (!fs.existsSync(filePath)) {
      return { content: [{ type: 'text', text: `Campaign file not found: ${filePath}` }] };
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      content: [
        { type: 'text', text: `File: campaigns/${user}/${filename}\n\n\`\`\`javascript\n${content}\n\`\`\`` },
      ],
    };
  },
);

// ── Tool: list_templates ─────────────────────────────────────────────────────

server.tool(
  'list_templates',
  `List all available newsletter/landing page templates with their descriptions and supported category types.`,
  {},
  async () => {
    const lines = Object.entries(AVAILABLE_TEMPLATES).map(
      ([name, info]) =>
        `## ${name}\n- **Import**: \`${info.import}\`\n- **Description**: ${info.description}\n- **Supported category types**: ${info.supportedTypes.join(', ')}`,
    );

    return {
      content: [{ type: 'text', text: `# Available Templates\n\n${lines.join('\n\n')}` }],
    };
  },
);

// ── Tool: list_shops ─────────────────────────────────────────────────────────

server.tool(
  'list_shops',
  `List all Beliani shops with their slugs, domains, and available languages.`,
  {},
  async () => {
    const lines = SHOPS_SUMMARY.map(
      (s) => `- **${s.slug}** (${s.origin}): languages [${s.languages.join(', ')}]`,
    );

    return {
      content: [{ type: 'text', text: `# Beliani Shops\n\n${lines.join('\n')}` }],
    };
  },
);

// ── Tool: list_components ────────────────────────────────────────────────────

server.tool(
  'list_components',
  `List available category types and CTA styles for building newsletter campaigns.`,
  {},
  async () => {
    const catLines = Object.entries(CATEGORY_TYPES).map(
      ([type, desc]) => `- **${type}**: ${desc}`,
    );

    const ctaLines = Object.entries(CTA_STYLES).map(
      ([style, desc]) => `- **${style}**: ${desc}`,
    );

    return {
      content: [
        {
          type: 'text',
          text: `# Category Types\n\n${catLines.join('\n')}\n\n# CTA Styles\n\n${ctaLines.join('\n')}`,
        },
      ],
    };
  },
);

// ── Tool: create_campaign ────────────────────────────────────────────────────

server.tool(
  'create_campaign',
  `Create a new newsletter campaign file in campaigns/[user]/[filename].js.

This generates a valid campaign JS file that works with the constructor's Vite AutoImport system.
The file will use globals: entities, templates, types, getImageUrl, translateImage, translateLink.

IMPORTANT: After creating the campaign file, run the constructor frontend (bun run dev with VITE_SCOPE=[user])
to preview and generate the newsletter HTML for all shops and languages.

Example category structure for type "grid":
{
  "name": "Sofas",
  "src": "20260617_Cat10.png",
  "href": "https://www.beliani.ch/living-room-furniture/sofas/",
  "background": "#FFE9CC",
  "color": "#000000",
  "type": "grid",
  "cta": true,
  "paddingTop": 0,
  "title": { "show": true, "position": "afterImg", "align": "center", "spaceBefore": "newsletterBottom35px", "spaceAfter": "newsletterBottom35px" },
  "paragraph": { "show": true, "align": "center", "spaceAfter": "newsletterBottom35px" },
  "product": { "align": "center", "prices": true, "name": true },
  "products": [
    { "id": "568039", "src": "20260617_Pic01.png" },
    { "id": "609306", "src": "20260617_Pic02.png" },
    { "id": "698563", "src": "20260617_Pic03.png" },
    { "id": "609878", "src": "20260617_Pic04.png" }
  ]
}`,
  {
    user: z.string().describe('User/author folder name (e.g. "Jakub", "KamilK")'),
    filename: z.string().describe('Campaign filename (e.g. "015_2026-07-28-summer-sale.js"). Must end with .js'),
    startId: z.string().describe('Campaign start ID from prologistics (e.g. "44593")'),
    name: z.string().describe('Campaign display name (e.g. "WED Dining Furniture")'),
    date: z.string().describe('Campaign date in DD.MM.YYYY format (e.g. "17.06.2026")'),
    templateName: z.enum(['Monday', 'Thursday', 'Friday', 'Blackweek', 'RegularFridayNslt1']).describe('Template to use'),
    backgroundColor: z.string().describe('Newsletter background color hex (e.g. "#FFE9CC")'),
    textColor: z.string().default('#000000').describe('Text color hex (e.g. "#000000")'),
    translationsSheet: z.string().describe('Google Sheets tab name for translations (e.g. "17.06.26 - Dining Room")'),
    tableQueries: z.array(z.object({
      tableRange: z.string().describe('Row range in sheet (e.g. "17:18" or "20:24")'),
      name: z.string().describe('Query name (e.g. "TopImageTitle", "paragraphs", "condition")'),
    })).describe('Translation table queries to fetch from Google Sheets'),
    links: z.record(z.string(), z.object({
      type: z.enum(['translateLink', 'translateImage', 'imageUrl', 'raw']).describe('Link type'),
      value: z.string().describe('Link value — path for translateLink, filename for images, or raw URL'),
    })).describe('Campaign links (TopImageTitle_href, TopImageTitle_src, Banner_1, etc.)'),
    topImageTitleData: z.object({
      color: z.string().optional(),
      backgroundColor: z.string().optional(),
      type: z.enum(['standard', 'twoSameLines', 'twoLines']).optional(),
    }).optional().describe('TopImageTitle banner configuration'),
    intro: z.object({
      alignment: z.string().optional(),
      position: z.enum(['afterTopImage', 'afterFreebies']).optional(),
      color: z.string().optional(),
      backgroundColor: z.string().optional(),
    }).optional().describe('Intro section configuration'),
    categories: z.array(z.record(z.string(), z.any())).describe('Array of category objects. See tool description for structure.'),
    issueCardId: z.string().optional().describe('Issue card ID'),
    lpId: z.string().optional().describe('Landing page ID'),
    figmaUrl: z.string().optional().describe('Figma design URL for reference'),
    isArchive: z.boolean().optional().describe('Whether campaign is archived'),
    conditionOverrides: z.record(z.string(), z.string()).optional().describe('Per-country condition text overrides'),
    disableSoonEnding: z.array(z.string()).optional().describe('Country slugs to disable "soon ending" banners for'),
    overwrite: z.boolean().default(false).describe('Whether to overwrite existing file'),
  },
  async (params) => {
    const { user, filename, overwrite, ...campaignParams } = params;

    // Validate filename
    if (!filename.endsWith('.js')) {
      return { content: [{ type: 'text', text: 'Error: filename must end with .js' }] };
    }

    // Ensure user directory exists
    const userDir = path.join(CAMPAIGNS_DIR, user);
    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir, { recursive: true });
    }

    const filePath = path.join(userDir, filename);

    // Check if file exists
    if (fs.existsSync(filePath) && !overwrite) {
      return {
        content: [
          {
            type: 'text',
            text: `Error: File already exists: campaigns/${user}/${filename}\nSet overwrite=true to replace it.`,
          },
        ],
      };
    }

    try {
      const content = generateCampaignFile(campaignParams);
      fs.writeFileSync(filePath, content, 'utf-8');

      return {
        content: [
          {
            type: 'text',
            text: `✅ Campaign created successfully!\n\nFile: campaigns/${user}/${filename}\nTemplate: ${campaignParams.templateName}\nDate: ${campaignParams.date}\n\nNext steps:\n1. Set VITE_SCOPE=${user} in .env\n2. Run: bun run dev\n3. Preview the campaign in the constructor UI\n4. Generate newsletters for all shops and languages`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error creating campaign: ${error.message}` }],
      };
    }
  },
);

// ── Tool: get_example_campaign ───────────────────────────────────────────────

server.tool(
  'get_example_campaign',
  `Get a full example campaign file as a reference. Useful for understanding the campaign file structure before creating a new one.`,
  {
    type: z.enum(['monday_grid', 'monday_freebie', 'placeholder']).default('monday_grid').describe('Example type to retrieve'),
  },
  async ({ type }) => {
    const examples = {
      monday_grid: `// Example: Monday campaign with grid categories (Dining Furniture)
const campaignTranslationsSheet = '17.06.26 - Dining Room';

const tableQueries = [
  { tableRange: '17:18', name: 'TopImageTitle' },
  { tableRange: '20:24', name: 'paragraphs' },
  { tableRange: '26:27', name: 'condition' },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-17' }),
  TopImageTitle_src: translateImage({ value: '20260617_01.png' }),

  Banner_1: translateLink({ value: 'content/lp26-06-04' }),
  Banner_1_Image: translateImage({ value: '20260604b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-03' }),
  Banner_2_Image: translateImage({ value: '20260603b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260617_Cat10.png', true),
    href: 'https://www.beliani.ch/tables/dining-tables/',
    background: '#FFE9CC',
    color: '#000000',
    paddingTop: 0,
    title: { show: false },
    paragraph: { show: false },
    spaceAfter: 'newsletterBottom35px',
  },
  {
    name: 'Dining Tables',
    src: translateImage({ value: '20260617_pic.gif' }),
    href: translateLink({ value: 'content/lp26-06-01' }),
    background: '#FFE9CC',
    color: '#000000',
    type: 'grid',
    cta: { href: 'https://www.beliani.ch/tables/dining-tables/' },
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: { show: true, align: 'center', spaceAfter: 'newsletterBottom35px' },
    product: { align: 'center', prices: true, name: true },
    products: [
      { id: '568039', src: getImageUrl('20260617_Pic01.png', true) },
      { id: '609306', src: getImageUrl('20260617_Pic02.png', true) },
      { id: '698563', src: getImageUrl('20260617_Pic03.png', true) },
      { id: '609878', src: getImageUrl('20260617_Pic04.png', true) },
    ],
  },
  {
    name: 'This may also interest you',
    background: '#FFFFFF',
    color: '#000000',
    type: 'categorytiles',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    title: {
      className: 'newsletterAditionalTitle',
      align: 'center',
      show: true,
      spaceBefore: 'newsletterBottom40px',
    },
    paragraph: { show: false },
    product: { align: 'center' },
    tiles: [
      { name: 'Kitchen Knives', src: getImageUrl('20260617_Pic41.png', true), href: 'https://www.beliani.ch/kitchen-knives/' },
      { name: 'Pans and pots', src: getImageUrl('20260617_Pic42.png', true), href: 'https://www.beliani.ch/pots-and-pans/' },
    ],
  },
];

export default new entities.Campaign({
  startId: '44593',
  name: 'WED Dining Furniture',
  date: '17.06.2026',
  issueCardId: '492459',
  lpId: '30586',
  alarm: { isActive: false },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/...',
  templates: [
    {
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data,
      categories,
      links,
      tableQueries,
    },
    {
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data,
      categories,
      links,
      tableQueries,
    },
  ],
});`,

      monday_freebie: `// Example: Monday campaign with freebie/deal section
const campaignTranslationsSheet = '2026::TEST - freebie';

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '22:23' },
  { name: 'offer', tableRange: '25:27' },
  { name: 'offer_date', tableRange: '29' },
  { name: 'intro', tableRange: '30:31' },
  { name: 'code', tableRange: '27' },
  { name: 'condition', tableRange: '34' },
  { name: 'paragraphs', tableRange: '33' },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-01' }),
  TopImageTitle_src: getImageUrl('20260601_01.png', true),
  code_href: translateLink({ value: 'content/lp26-06-01' }),
  Banner_1: translateLink({ value: 'content/lp26-05-27' }),
  Banner_1_Image: getImageUrl('20260527b.png', true),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCBBF',
  type: 'standard',
};

const intro = {
  alignment: 'left',
  position: 'afterFreebies',
  color: '#000000',
  backgroundColor: '#fecd8c',
};

const categories = [
  {
    type: 'deal',
    copyCode: true,
    copyCodeWeb: true,
    background: '#FFCBBF',
    color: '#000000',
    paddingTop: '0',
    spaceAfter: 'newsletterBottom45px',
    paragraph: { spaceAfter: '' },
    freebies: [
      [
        { id: '324994', src: getImageUrl('20260601_Pic01.png', true) },
        { id: '314370', src: getImageUrl('20260601_Pic02.png', true) },
        { id: '314370', src: getImageUrl('20260601_Pic03.png', true) },
      ],
    ],
  },
  {
    name: 'Sofas',
    src: getImageUrl('20260601_Cat10.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
    background: '#fecd8c',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '45',
    title: { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph: { show: false },
    product: { prices: true, name: true },
    products: [
      { id: '700038', src: getImageUrl('20260601_Pic11.png', true) },
      { id: '502654', src: getImageUrl('20260601_Pic12.png', true) },
      { id: '621129', src: getImageUrl('20260601_Pic13.png', true) },
      { id: '525622', src: getImageUrl('20260601_Pic14.png', true) },
    ],
  },
];

export default new entities.Campaign({
  startId: '43982',
  name: 'MON Summer Freebie',
  date: '01.06.2026',
  issueCardId: '427849',
  lpId: '30298',
  alarm: { isActive: false },
  isArchive: false,
  optimizeImg: true,
  templates: [
    {
      background: '#FFCBBF',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data,
      intro,
      categories,
      links,
      tableQueries,
    },
    {
      background: '#FFCBBF',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      copyCode: { code: 'SUMMER2026' },
      TopImageTitle_data,
      intro,
      categories,
      links,
      tableQueries,
    },
  ],
});`,

      placeholder: `// See campaigns/Jakub/999_placeholder_monday_template.js for a full placeholder example with fallback data`,
    };

    return {
      content: [
        {
          type: 'text',
          text: `# Example Campaign: ${type}\n\n\`\`\`javascript\n${examples[type]}\n\`\`\``,
        },
      ],
    };
  },
);

// ─── Start server ────────────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Newsletter Constructor MCP server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
