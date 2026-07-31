# Newsletter Constructor — MCP Integration

## Overview

The newsletter constructor includes an **MCP (Model Context Protocol) server** that allows AI assistants like Claude Code and Claude Desktop to create and manage campaign files programmatically.

## Architecture

```
Claude Desktop (design review)  ──┐
                                   ├──► MCP Server (stdio) ──► campaigns/[user]/[name].js
Claude Code (implementation)     ──┘                               │
                                                                   ▼
                                                        bun run dev (constructor UI)
                                                               │
                                                    ┌──────────┼──────────┐
                                                    ▼          ▼          ▼
                                              Newsletter   Landing    Per-shop
                                                HTML        HTML     translations
```

## Setup

### For Claude Code (IDE / Antigravity)

The MCP server is already available in this repository. Claude Code can use it directly via the MCP configuration.

### For Claude Desktop

Add to your Claude Desktop config file:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "newsletter-constructor": {
      "command": "node",
      "args": ["c:/Projects/others/constructor/server/mcp-server.js"],
      "env": {
        "CONSTRUCTOR_PATH": "c:/Projects/others/constructor"
      }
    }
  }
}
```

> **Note**: Adjust paths to match your local setup.

## Available Tools

| Tool | Description |
|------|-------------|
| `list_campaigns` | List campaign files (all users or specific user) |
| `get_campaign` | Read the source code of an existing campaign |
| `list_templates` | Show available templates (Monday, Thursday, etc.) |
| `list_shops` | List all Beliani shops with languages |
| `list_components` | Show available category types and CTA styles |
| `create_campaign` | Create a new campaign .js file |
| `get_example_campaign` | Get a full example campaign for reference |

## Workflow: Design → Campaign

### 1. Designer creates the design (Claude Design)

The graphic designer creates the newsletter layout in Claude Design, specifying:
- Colors, fonts, spacing
- Category images and product photos
- Button/CTA styles
- Overall structure

### 2. HTML team receives the design

The design is passed to the HTML team as a visual reference (screenshot/Figma link).

### 3. Developer uses Claude Code to create the campaign

```
Developer: "Create a Monday newsletter campaign for 28.07.2026 themed 'Summer Living'.
            Use template Monday, background #FFE9CC, categories: Sofas, Tables, Outdoor.
            Products: [568039, 609306, 698563, 609878] for Sofas..."

Claude Code → calls MCP create_campaign → campaigns/KamilK/016_2026-07-28-summer-living.js
```

### 4. Preview and iterate

```bash
# Set scope in .env
VITE_SCOPE=KamilK

# Run constructor
bun run dev
```

Open the constructor UI to preview the newsletter, generate for all shops/languages, and make adjustments.

## Campaign File Structure

Campaign files are JS modules that export a `Campaign` entity. They use **Vite AutoImport** globals:

- `entities` — Campaign, TableQuery, etc.
- `templates` — Monday, Thursday, Friday, etc.
- `types` — CSS types, NEWSLETTER/LANDINGPAGE constants, WRAPPER
- `getImageUrl(filename, true)` — generates image URL with versioning
- `translateImage({ value })` — creates translatable image reference
- `translateLink({ value })` — creates translatable link reference

### Minimal example

```javascript
const campaignTranslationsSheet = '28.07.26 - Summer Living';

const tableQueries = [
  { tableRange: '17:18', name: 'TopImageTitle' },
  { tableRange: '20:24', name: 'paragraphs' },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-28' }),
  TopImageTitle_src: translateImage({ value: '20260728_01.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'standard',
};

const categories = [
  {
    name: 'Sofas',
    src: getImageUrl('20260728_Cat10.png', true),
    href: 'https://www.beliani.ch/sofas/',
    background: '#FFE9CC',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: { show: true, align: 'center', spaceAfter: 'newsletterBottom35px' },
    paragraph: { show: false },
    product: { prices: true, name: true },
    products: [
      { id: '568039', src: getImageUrl('20260728_Pic01.png', true) },
      { id: '609306', src: getImageUrl('20260728_Pic02.png', true) },
      { id: '698563', src: getImageUrl('20260728_Pic03.png', true) },
      { id: '609878', src: getImageUrl('20260728_Pic04.png', true) },
    ],
  },
];

export default new entities.Campaign({
  startId: '99999',
  name: 'Summer Living',
  date: '28.07.2026',
  templates: [
    {
      background: '#FFE9CC',
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
      background: '#FFE9CC',
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
});
```

## New Component: ButtonCTA

For designs that use button-style CTAs instead of text links, use the `ButtonCTA` component:

```javascript
import { ButtonCTA } from '@components/ButtonCTA.js';

ButtonCTA({
  text: 'Shop now',
  href: 'https://www.beliani.ch/sofas/',
  bgColor: '#5C1A1A',    // button background
  textColor: '#ffffff',   // button text color
  borderRadius: '4',      // rounded corners
  paddingV: '12',         // vertical padding
  paddingH: '32',         // horizontal padding
});
```

This renders an email-safe button with VML fallback for Outlook.
