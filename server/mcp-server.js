import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

// ─── Constants ───────────────────────────────────────────────────────────────
const CONSTRUCTOR_ROOT = process.env.CONSTRUCTOR_PATH || path.resolve(import.meta.dirname, '..');
const CAMPAIGNS_DIR = path.join(CONSTRUCTOR_ROOT, 'campaigns');
const PREVIEWS_DIR = path.join(CONSTRUCTOR_ROOT, 'previews');
const DEV_SERVER_PORT = process.env.CONSTRUCTOR_DEV_PORT || 5500;

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
  image: 'Graphical button CTA as an image (e.g. cta: { src: "path/to/image.png", href: "https://..." }).',
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

/** Splits `arr` into consecutive chunks of `size` items each (last chunk may be shorter). */
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9_\-\.]/g, '-');
}

/**
 * Finds a campaign file on disk by basename (any user folder), for
 * `capture_campaign_preview`'s localStorage product injection.
 */
function findCampaignFilePath(campaignParam) {
  const key = campaignParam.replace(/\.[^.]+$/, '').toLowerCase();

  for (const user of listCampaignUsers()) {
    const userDir = path.join(CAMPAIGNS_DIR, user);
    const match = fs.readdirSync(userDir, { withFileTypes: true })
      .find((f) => f.isFile() && f.name.endsWith('.js') && f.name.replace(/\.js$/, '').toLowerCase() === key);

    if (match) return path.join(userDir, match.name);
  }

  return null;
}

/** Extracts `startId: '...'` from a generated campaign file's source. */
function extractStartId(campaignFileContent) {
  const match = campaignFileContent.match(/startId:\s*['"]([^'"]+)['"]/);
  return match ? match[1] : null;
}

/** Best-effort product-detail-page slug from an absolute shop URL (path minus leading slash and `.html`). */
function extractSlugFromShopUrl(shopUrl) {
  try {
    return new URL(shopUrl).pathname.replace(/^\//, '').replace(/\.html$/, '');
  } catch {
    return '';
  }
}

/**
 * `src/entities/Product.js`'s `sellerToslug` map — the `saved_params.username` string that
 * resolves to each shop slug's `country` field (which `getProductById` filters seeded
 * products by). Keep in sync with that file.
 */
const SHOP_SLUG_TO_SELLER_USERNAME = {
  chde: 'Beliani',
  uk: 'Beliani UK',
  de: 'Beliani DE',
  fr: 'Beliani FR',
  at: 'Beliani AT',
  es: 'Beliani SP',
  pl: 'Beliani PL',
  nl: 'Beliani NL',
  pt: 'Beliani PT',
  it: 'Beliani IT',
  se: 'Beliani SE',
  hu: 'Beliani HU',
  dk: 'Beliani DK',
  cz: 'Beliani CZ',
  fi: 'Beliani FI',
  no: 'Beliani NO',
  sk: 'Beliani SK',
  be: 'Beliani BE',
  ro: 'Beliani RO',
  hr: 'Beliani HR',
  si: 'Beliani SI',
};

/**
 * Builds the raw "SA export" shaped entries `getProductById` (src/main/handlers/handlers.js,
 * via src/utils/normalizeProducts.js + src/entities/Product.js) expects in the
 * `localStorage['products']` index — same shape a human would paste into the "Manage
 * Products" editor.
 *
 * `saved_params.username` must match the seller string `sellerToslug` (src/entities/Product.js)
 * maps to the *target* shop's slug — get this wrong and every seeded product resolves to the
 * wrong `country` and `getProductById` reports "Product not found" for all of them, even
 * though the products index isn't actually empty. Resolved from the tool's own `shop` param
 * via {@link SHOP_SLUG_TO_SELLER_USERNAME}, falling back to the CH/master seller.
 *
 * `ShopSAAlias` is populated under every language key `Product.js`'s `languageToSlug` knows
 * (not just german/italian/french) with the same slug, since a single test product only has
 * one real slug and which alias key `getProductById` reads depends on the target market.
 */
function buildRawProductEntries(products, shopSlug) {
  const username = SHOP_SLUG_TO_SELLER_USERNAME[String(shopSlug ?? '').toLowerCase()] ?? 'Beliani';
  const aliasLanguages = [
    'german', 'germanDE', 'italian', 'french', 'english', 'polish', 'portugal', 'spanish',
    'Hungarian', 'finnish', 'czech', 'slovak', 'danish', 'swedish', 'norsk', 'dutch', 'croatian', 'slovene',
  ];

  return products.map((p) => {
    const slug = extractSlugFromShopUrl(p.shopUrl);
    return {
      id: p.id,
      article_name: p.name,
      saved_params: {
        username,
        ShopPrice: p.price ?? '0.00',
        ShopHPrice: p.price ?? '0.00',
      },
      ShopSAAlias: Object.fromEntries(aliasLanguages.map((lang) => [lang, { value: slug }])),
    };
  });
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

/**
 * Warns (rather than silently generating a broken/empty href) when a category can't
 * resolve a real link at render time: a CTA with no href of its own and no category
 * `href` to fall back to, or a category with no `href` at all despite having a CTA/products
 * that would want one. Doesn't fail generation — the frontend already falls back to an
 * empty string instead of the literal text "undefined" (see safeValue in
 * src/templates/Thursday/helpers/safePhrase.ts) — this just surfaces the gap early so it
 * can be fixed in the campaign file instead of discovered as a dead link in preview.
 */
function validateCategoriesForMissingLinks(categories) {
  const warnings = [];

  (categories || []).forEach((cat, i) => {
    const label = cat.name || `category[${i}]`;
    const hasCta = cat.cta !== undefined && cat.cta !== false;
    const ctaHasOwnHref = typeof cat.cta === 'object' && cat.cta !== null && !!cat.cta.href;

    if (hasCta && !ctaHasOwnHref && !cat.href) {
      warnings.push(`"${label}": has a cta but no cta.href and no category href — CTA link will be empty at render time.`);
    }
  });

  return warnings;
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
      } else if (cat.src.startsWith('http')) {
        lines.push(`    src: '${cat.src}',`);
      } else {
        lines.push(`    src: getImageUrl('${cat.src}', true),`);
      }
    }

    if (cat.href) {
      lines.push(`    href: '${cat.href}',`);
    }

    if (cat.background) lines.push(`    background: '${cat.background}',`);
    if (cat.color) lines.push(`    color: '${cat.color}',`);
    if (cat.type) lines.push(`    type: '${cat.type}',`);

    if (cat.cta !== undefined) {
      if (typeof cat.cta === 'object' && cat.cta !== null) {
        const ctaProps = Object.entries(cat.cta).map(([key, val]) => {
          if (key === 'src' && typeof val === 'string') {
            const isHttp = val.startsWith('http');
            const isFunc = val.startsWith('getImageUrl') || val.startsWith('translateImage');
            const srcExpr = isHttp ? `'${val}'` : (isFunc ? val : `getImageUrl('${val}', true)`);
            return `${key}: ${srcExpr}`;
          } else if (typeof val === 'string') {
            const isFunc = val.startsWith('translateLink') || val.startsWith('getCategoryLink') || val.startsWith('getImageUrl') || val.startsWith('translateImage') || val.startsWith('getPhrase');
            return isFunc ? `${key}: ${val}` : `${key}: '${val}'`;
          } else if (typeof val === 'object' && val !== null) {
            return `${key}: ${JSON.stringify(val)}`;
          } else {
            return `${key}: ${val}`;
          }
        });
        lines.push(`    cta: { ${ctaProps.join(', ')} },`);
      } else {
        lines.push(`    cta: ${cat.cta},`);
      }
    }

    if (cat.paddingTop !== undefined) lines.push(`    paddingTop: ${cat.paddingTop},`);
    if (cat.spaceAfter) lines.push(`    spaceAfter: '${cat.spaceAfter}',`);

    if (cat.title) lines.push(`    title: ${JSON.stringify(cat.title)},`);
    if (cat.paragraph) lines.push(`    paragraph: ${JSON.stringify(cat.paragraph)},`);
    if (cat.product) lines.push(`    product: ${JSON.stringify(cat.product)},`);

    // Products — for `type: 'deal'`, the Thursday component's freebie grid expects `freebies`
    // pre-grouped into rows (`ProductEntry[][]`); a flat `products` list is chunked into rows
    // of `freebiesPerRow` (default 2) here instead of being emitted as `products`, so the
    // generated file matches the shape the design/handoff expects rather than relying on
    // deal/grid.ts's own flat-array auto-chunking fallback.
    const isDealWithFlatProducts = cat.type === 'deal' && cat.products && cat.products.length > 0 && !cat.freebies;

    if (cat.products && cat.products.length > 0 && !isDealWithFlatProducts) {
      lines.push('    products: [');
      cat.products.forEach((p) => {
        const isHttp = p.src.startsWith('http');
        const isFunc = p.src.startsWith('getImageUrl') || p.src.startsWith('translateImage');
        const srcExpr = isHttp ? `'${p.src}'` : (isFunc ? p.src : `getImageUrl('${p.src}', true)`);
        // description is author-supplied only (see ProductEntry in src/types/thursday.ts) —
        // it's not part of the live getProductById enrichment, so it always survives merging.
        const descriptionField = p.description ? `, description: '${p.description}'` : '';
        lines.push(`      { id: '${p.id}', src: ${srcExpr}${descriptionField} },`);
      });
      lines.push('    ],');
    }

    // Tiles (for categorytiles type)
    if (cat.tiles && cat.tiles.length > 0) {
      lines.push('    tiles: [');
      cat.tiles.forEach((t) => {
        const isHttp = t.src.startsWith('http');
        const isFunc = t.src.startsWith('getImageUrl') || t.src.startsWith('translateImage');
        const srcExpr = isHttp ? `'${t.src}'` : (isFunc ? t.src : `getImageUrl('${t.src}', true)`);
        lines.push(`      { name: '${t.name}', src: ${srcExpr}, href: '${t.href}' },`);
      });
      lines.push('    ],');
    }

    // Freebies (for deal type) — explicit pre-grouped `cat.freebies`, or `cat.products`
    // auto-chunked into rows of `freebiesPerRow` (default 2) above.
    const freebieGroups = cat.freebies && cat.freebies.length > 0
      ? cat.freebies
      : isDealWithFlatProducts
        ? chunkArray(cat.products, cat.freebiesPerRow || 2)
        : null;

    if (freebieGroups && freebieGroups.length > 0) {
      lines.push('    freebies: [');
      freebieGroups.forEach((group) => {
        lines.push('      [');
        group.forEach((f) => {
          const isHttp = f.src.startsWith('http');
          const isFunc = f.src.startsWith('getImageUrl') || f.src.startsWith('translateImage');
          const srcExpr = isHttp ? `'${f.src}'` : (isFunc ? f.src : `getImageUrl('${f.src}', true)`);
          const descriptionField = f.description ? `, description: '${f.description}'` : '';
          lines.push(`        { id: '${f.id}', src: ${srcExpr}${descriptionField} },`);
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

      const linkWarnings = validateCategoriesForMissingLinks(campaignParams.categories);
      const warningsBlock = linkWarnings.length
        ? `\n\n⚠️ Link warnings:\n${linkWarnings.map((w) => `- ${w}`).join('\n')}`
        : '';

      return {
        content: [
          {
            type: 'text',
            text: `✅ Campaign created successfully!\n\nFile: campaigns/${user}/${filename}\nTemplate: ${campaignParams.templateName}\nDate: ${campaignParams.date}${warningsBlock}\n\nNext steps:\n1. Set VITE_SCOPE=${user} in .env\n2. Run: bun run dev\n3. Preview the campaign in the constructor UI\n4. Generate newsletters for all shops and languages`,
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
      monday_grid: `// Example placeholder...`,
      monday_freebie: `// Example placeholder...`,
      placeholder: `// Example placeholder...`,
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

// ── Tool: capture_campaign_preview ───────────────────────────────────────────

server.tool(
  'capture_campaign_preview',
  `Capture a full-page screenshot of a campaign as rendered by the local constructor dev server.

Requires the dev server to already be running (bun run dev, or vite --port ${DEV_SERVER_PORT}) with the
campaign's user set as VITE_SCOPE — this tool does not start the dev server itself.

Deep-links straight to the rendered campaign via ?campaign=&template=&shop=&lang= query params
(see src/main/urlParams.js), so no manual dropdown interaction is needed. Optionally seeds
localStorage with product data first (see the \`products\` param) so the render doesn't show
"Product not found" placeholders. Saves the screenshot to previews/[shop]_[campaign].png
(relative to the repo root) and returns that path.`,
  {
    campaign: z.string().describe('Campaign filename (with or without .js extension) — matched against the source filename, e.g. "058_2026-08-24-free-lamp-test"'),
    template: z.string().default('Newsletter').describe('Template name as shown in the Select Template dropdown, e.g. "Newsletter" or "Landing"'),
    shop: z.string().describe('Shop slug as configured in src/config/shops.js, e.g. "CHDE"'),
    lang: z.string().describe('Language name as shown in the Select Language dropdown, e.g. "German"'),
    port: z.number().optional().describe(`Dev server port, defaults to ${DEV_SERVER_PORT}`),
    products: z.array(z.object({
      id: z.union([z.string(), z.number()]).describe('SA product number, matches the campaign category\'s product id'),
      name: z.string().describe('Product display name'),
      price: z.union([z.string(), z.number()]).optional().describe('Price shown for the product (omit for freebies)'),
      shopUrl: z.string().describe('Absolute product page URL, e.g. "https://www.beliani.ch/some-product.html" — the slug is extracted from it'),
    })).optional().describe('Product data to seed into localStorage before rendering, so getProductById resolves real names/prices/links instead of "Product not found" (currently only wired for the CHDE/CHIT/CHFR "Beliani" seller — see buildRawProductEntries).'),
  },
  async ({ campaign, template, shop, lang, port, products }) => {
    const resolvedPort = port || DEV_SERVER_PORT;
    const url = `http://localhost:${resolvedPort}/?${new URLSearchParams({ campaign, template, shop, lang }).toString()}`;

    if (!fs.existsSync(PREVIEWS_DIR)) {
      fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
    }

    const campaignSlug = sanitizeFilename(campaign.replace(/\.[^.]+$/, ''));
    const outputPath = path.join(PREVIEWS_DIR, `${sanitizeFilename(shop)}_${campaignSlug}.png`);

    let campaignStartId = null;
    if (products?.length) {
      const campaignFilePath = findCampaignFilePath(campaign);
      if (!campaignFilePath) {
        return { content: [{ type: 'text', text: `Error: could not find a campaign file matching "${campaign}" to resolve its startId for localStorage seeding.` }] };
      }
      campaignStartId = extractStartId(fs.readFileSync(campaignFilePath, 'utf-8'));
      if (!campaignStartId) {
        return { content: [{ type: 'text', text: `Error: could not read startId from ${campaignFilePath}.` }] };
      }
    }

    let browser;
    try {
      browser = await chromium.launch({ headless: true });
      const page = await browser.newPage({ viewport: { width: 650, height: 1200 } });

      // The app uses window.confirm() to gate rendering when it detects an "undefined"
      // value (see src/main/rendering/templateRenderer.js). A human clicks OK; headless
      // Chromium auto-dismisses with no handler, which cancels the render. Auto-accept so
      // this tool behaves like a human driving the UI, not like a stuck dialog.
      page.on('dialog', (dialog) => dialog.accept());

      // Surfaced in the tool's response text below — lets us see *why* something rendered
      // as "Translation not found"/"Product not found" (missing static translations, failed
      // sheet fetches, etc.) without needing a separate manual browser session to debug.
      const consoleIssues = [];
      page.on('console', (msg) => {
        const type = msg.type();
        if (type === 'warning' || type === 'error') {
          consoleIssues.push(`[${type}] ${msg.text()}`);
        }
      });
      page.on('pageerror', (err) => consoleIssues.push(`[pageerror] ${err.message}`));

      if (campaignStartId) {
        // Must run before goto() — templateRenderer.js reads localStorage['products'] at
        // render time (src/main/ui/manageProducts/storage.js), same key a human would
        // populate via the "Manage Products" editor.
        await page.addInitScript(
          ({ campaignId, entries }) => {
            window.localStorage.setItem(
              'products',
              JSON.stringify([{ campaign_id: String(campaignId), products: entries, meta: {} }])
            );
          },
          { campaignId: campaignStartId, entries: buildRawProductEntries(products, shop) }
        );
      }

      await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });

      // Static translations (category_titles/category_links/templates/header/footer) load
      // sequentially with a 1s stagger between each sheet (src/api/translations.js) plus a
      // minimum 1s toast delay — on a cold cache that's several seconds, well past
      // `networkidle`. Worse, `urlParams.js` fires the campaign/template/shop/language
      // dropdown `change` events (and therefore the actual render) synchronously during page
      // load, *before* that async cascade resolves — so simply waiting longer afterwards
      // doesn't help, the broken render already happened. Wait for the app's own readiness
      // flag (set in src/api/translations.js once staticTranslations is populated), then
      // re-fire the language change to force a fresh render with translations available.
      const staticTranslationsReady = await page
        .waitForFunction(() => window.__staticTranslationsReady === true, { timeout: 20_000 })
        .then(() => true)
        .catch(() => false);

      if (staticTranslationsReady) {
        // The first render pass (before translations were ready) already logged its own
        // "not loaded"/"Missing value" warnings above — clear them so the issues block below
        // reflects only the retried, final render instead of conflating both passes.
        consoleIssues.length = 0;
        await page.evaluate(() => {
          document.querySelector('#languages')?.dispatchEvent(new Event('change', { bubbles: true }));
        });
        await page.waitForTimeout(2000);
      } else {
        // Static translations never signaled ready (e.g. the local API proxy — `bun run dev`'s
        // `server/api-server.js`, port from API_PORT in .env — isn't running). Fall back to a
        // fixed wait so the screenshot still gets taken, just possibly with translation gaps.
        await page.waitForTimeout(9000);
      }

      // Strip the constructor's own chrome (side panel, toasts) before screenshotting.
      await page.evaluate(() => {
        const style = document.createElement('style');
        style.textContent = `
          [data-sonner-toaster], .toast, [role="alert"] { display: none !important; }
          #panel, .hamburger-menu { display: none !important; }
          body, html, .container, #app, #app-content {
            height: auto !important;
            overflow: visible !important;
            position: static !important;
          }
        `;
        document.head.appendChild(style);
      });

      // Screenshot only the rendered newsletter element (its own bounding box, any height)
      // rather than the whole page — sidesteps 100vh clipping without needing to unwrap
      // #app-content from the surrounding admin panel layout.
      const newsletterHandle = (await page.$('#newsletter')) ?? (await page.$('#app-content'));
      if (newsletterHandle) {
        await newsletterHandle.screenshot({ path: outputPath });
      } else {
        await page.screenshot({ path: outputPath, fullPage: true });
      }

      const uniqueIssues = [...new Set(consoleIssues)];
      const issuesBlock = uniqueIssues.length
        ? `\n\n⚠️ Console warnings/errors (${uniqueIssues.length} unique):\n${uniqueIssues.slice(0, 30).map((w) => `- ${w}`).join('\n')}`
        : '';

      // A human declining the app's own "render with undefined value?" confirm() would
      // cancel rendering entirely (see src/main/rendering/templateRenderer.js) — this tool
      // auto-accepts that dialog so the screenshot still gets taken, which can silently mask
      // a real literal "undefined" leak in the HTML. Surface it explicitly instead.
      const undefinedSnippets = await page.evaluate(() => {
        const root = document.querySelector('#newsletter') ?? document.querySelector('#app-content');
        const html = root?.innerHTML ?? '';
        const matches = [];
        const re = /.{0,40}undefined.{0,40}/g;
        let m;
        while ((m = re.exec(html)) && matches.length < 10) matches.push(m[0]);
        return matches;
      });
      // Temporary diagnostic: check whether the intro/lede section (Intro.ts) rendered any
      // text at all, and where in the DOM order it landed relative to the first category.
      const introDebug = await page.evaluate(() => {
        const root = document.querySelector('#newsletter') ?? document.querySelector('#app-content');
        const html = root?.innerHTML ?? '';
        const offerIdx = html.indexOf('Offer Part 1');
        const chooseIdx = html.indexOf('Choose from:');
        const lineIdx = html.indexOf('line.jpg');
        return {
          hasLivingRoom: html.includes('Living room'),
          hasTranslationNotFound: (html.match(/Translation not found/g) || []).length,
          hasIntroTitleClass: html.includes('newsletterIntroTitle'),
          hasShopNow: html.includes('Shop now') || html.includes('newsletterCta'),
          firstOfferIndex: offerIdx,
          introTitleIndex: html.indexOf('newsletterIntroTitle'),
          lineCount: (html.match(/line\.jpg/g) || []).length,
          aroundLine: lineIdx > -1 ? html.slice(Math.max(0, lineIdx - 250), lineIdx + 50) : 'NOT FOUND',
          aroundChooseFrom: chooseIdx > -1 ? html.slice(Math.max(0, chooseIdx - 600), chooseIdx + 200) : 'NOT FOUND',
        };
      });
      const introDebugBlock = `\n\n🔎 Intro debug: ${JSON.stringify(introDebug)}`;

      const undefinedBlock = undefinedSnippets.length
        ? `\n\n🚨 Literal "undefined" found in rendered HTML (${undefinedSnippets.length} snippet(s)):\n${undefinedSnippets.map((s) => `- …${s}…`).join('\n')}`
        : '';

      return {
        content: [
          {
            type: 'text',
            text: `✅ Screenshot saved to previews/${path.basename(outputPath)}\n\nURL: ${url}${issuesBlock}${undefinedBlock}${introDebugBlock}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error capturing preview: ${error.message}\n\nURL attempted: ${url}` }],
      };
    } finally {
      await browser?.close();
    }
  },
);

// ── Tool: get_available_campaigns ────────────────────────────────────────────

const SHEETS_API_BASE = 'https://tj31c889tzsk.share.zrok.io/api/sheets';

server.tool(
  'get_available_campaigns',
  `List cached translation-sheet tabs available for a given year. Queries the sheets API
so campaign generation can validate the translationsSheet param against what actually exists.`,
  { year: z.union([z.string(), z.number()]).describe('Year to look up, e.g. 2026') },
  async ({ year }) => {
    try {
      const res = await fetch(`${SHEETS_API_BASE}/misc/getCachedTabs/${year}`);
      if (!res.ok) {
        return { content: [{ type: 'text', text: `Error: sheets API returned ${res.status} ${res.statusText}` }] };
      }
      const data = await res.json();
      const tabs = data.tabs || [];
      return {
        content: [{ type: 'text', text: `Available tabs for ${year} (${tabs.length}):\n${tabs.map((t) => `- ${t}`).join('\n')}` }],
      };
    } catch (error) {
      return { content: [{ type: 'text', text: `Error fetching cached tabs: ${error.message}` }] };
    }
  },
);

// ── Tool: get_translation_keys ───────────────────────────────────────────────

server.tool(
  'get_translation_keys',
  `List available translation keys for a dataset (category_titles, category_links, templates,
header, footer). Use to validate phrase/category-title keys before referencing them in a campaign
(getPhrase, getCategoryLink, translateLink, etc.) instead of guessing.`,
  { dataset: z.enum(['category_titles', 'category_links', 'templates', 'header', 'footer']).describe('Translation dataset to query') },
  async ({ dataset }) => {
    try {
      const res = await fetch(`${SHEETS_API_BASE}/static/${dataset}/keys`);
      if (!res.ok) {
        return { content: [{ type: 'text', text: `Error: sheets API returned ${res.status} ${res.statusText}` }] };
      }
      const json = await res.json();
      const keys = json.data || [];
      return {
        content: [{ type: 'text', text: `Translation keys for "${dataset}" (${keys.length}):\n${keys.map((k) => `- ${k}`).join('\n')}` }],
      };
    } catch (error) {
      return { content: [{ type: 'text', text: `Error fetching translation keys: ${error.message}` }] };
    }
  },
);

// ── Tool: get_translation_languages ──────────────────────────────────────────

server.tool(
  'get_translation_languages',
  `List available languages for a translation dataset (category_titles, category_links, templates,
header, footer). Use to confirm a shop/lang combination has translations before generating a campaign.`,
  { dataset: z.enum(['category_titles', 'category_links', 'templates', 'header', 'footer']).describe('Translation dataset to query') },
  async ({ dataset }) => {
    try {
      const res = await fetch(`${SHEETS_API_BASE}/static/${dataset}/lang`);
      if (!res.ok) {
        return { content: [{ type: 'text', text: `Error: sheets API returned ${res.status} ${res.statusText}` }] };
      }
      const json = await res.json();
      const languages = json.data || [];
      return {
        content: [{ type: 'text', text: `Languages for "${dataset}" (${languages.length}):\n${languages.map((l) => `- ${l}`).join('\n')}` }],
      };
    } catch (error) {
      return { content: [{ type: 'text', text: `Error fetching translation languages: ${error.message}` }] };
    }
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
