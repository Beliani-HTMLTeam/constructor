/**
 * Captures a full-page screenshot of the local Konstruktor dev server, for visual
 * comparison against a designer's `preview/*.png` handoff file.
 *
 * Usage:
 *   bun scripts/capture-preview.ts [URL] [OUTPUT]
 *   bun scripts/capture-preview.ts --url=http://localhost:5500 --output=local_preview.png
 *
 * Defaults: URL = http://localhost:5500 (this repo's `vite --port 5500`), OUTPUT = local_preview.png
 *
 * Note: the constructor UI has no deep-link by default — campaign/template/shop/language
 * are plain <select> dropdowns wired to `change` listeners (src/main/ui/selectSetup.js).
 * As of this session, `src/main/urlParams.js` adds optional `?campaign=&template=&shop=&lang=`
 * query-param support that drives those same selects programmatically — pass a URL with
 * those params to land directly on a rendered campaign instead of the blank default view.
 * See also the `capture_campaign_preview` MCP tool, which wraps exactly that.
 */

import { chromium } from 'playwright';

interface CliArgs {
  url: string;
  output: string;
}

function parseArgs(argv: string[]): CliArgs {
  const positional: string[] = [];
  const flags: Record<string, string> = {};

  for (const arg of argv) {
    const flagMatch = arg.match(/^--([^=]+)=(.*)$/);
    if (flagMatch) {
      flags[flagMatch[1]] = flagMatch[2];
    } else {
      positional.push(arg);
    }
  }

  return {
    url: flags.url ?? positional[0] ?? 'http://localhost:5500',
    output: flags.output ?? positional[1] ?? 'local_preview.png',
  };
}

async function capturePreview({ url, output }: CliArgs): Promise<void> {
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({
      viewport: { width: 800, height: 1200 },
    });

    // Auto-accept native confirm()/alert() dialogs — a human clicking through the UI
    // would just click OK; headless Chromium otherwise auto-dismisses with no handler,
    // which (for this app specifically) cancels rendering on any "undefined" value.
    page.on('dialog', (dialog) => dialog.accept());

    console.log(`Navigating to ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });

    // Extra settle time for the constructor's own render pipeline (async translation
    // fetches, image loads) that `networkidle` alone doesn't guarantee has painted.
    await page.waitForTimeout(2000);

    // Strip the constructor's own chrome (side panel, toasts) and unwrap #app-content
    // from its fixed/scrolling containers so fullPage screenshot captures the newsletter
    // HTML's true height instead of clipping at the viewport (100vh). No-op on pages
    // without this app's DOM structure.
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

      const appContent = document.getElementById('app-content');
      if (appContent) {
        document.body.innerHTML = '';
        document.body.appendChild(appContent);
      }
    });

    await page.screenshot({ path: output, fullPage: true });
    console.log(`Saved screenshot to ${output}`);
  } finally {
    await browser.close();
  }
}

const args = parseArgs(process.argv.slice(2));

capturePreview(args)
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('capture-preview failed:', err);
    process.exit(1);
  });
