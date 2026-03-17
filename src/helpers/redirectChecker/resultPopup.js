import { foundRedirectsSwal } from "./redirectCheckerLoaders";

export const showMultiShopRedirectPopup = (redirects, totalChecked) => {
  // Group redirects by shop slug
  const byShop = {};
  redirects.forEach((r) => {
    const slug = r.shop || 'unknown';
    if (!byShop[slug]) byShop[slug] = [];
    byShop[slug].push(r);
  });

  // Sort shops alphabetically (optional but nicer)
  const sortedShops = Object.keys(byShop).sort();

  let tableHtml = `
    <div style="max-height: 40vh; overflow-y: auto; margin: 16px 0; 
                border: 2px solid #dc3545; border-radius: 10px; 
                background: #fff5f5; font-family: Poppins, sans-serif;">
      <table style="width:100%; border-collapse: collapse; font-size: 0.98em;">
        <thead style="background: #dc3545; color: white; position: sticky; top: 0; z-index: 10;">
          <tr>
            <th style="width:50%; padding:12px 10px; text-align:center; border-bottom:2px solid #c82333;">
              ORIGINAL LINK
            </th>
            <th style="width:50%; padding:12px 10px; text-align:center; border-bottom:2px solid #c82333;">
              FINAL DESTINATION
            </th>
          </tr>
        </thead>
        <tbody>
  `;

  sortedShops.forEach((shopSlug) => {
    const items = byShop[shopSlug];

    // ── Shop separator row ───────────────────────────────
    tableHtml += `
      <tr style="background: #bd2130; color: white;">
        <td colspan="2" style="padding: 14px 10px; font-weight: bold; font-size: 1.1em; text-align: center;">
          ${shopSlug.toUpperCase()} — ${items.length} redirect${items.length !== 1 ? 's' : ''}
        </td>
      </tr>
    `;

    // ── Redirect rows for this shop ──────────────────────
    items.forEach((info) => {
      const original = info.original || info.baseOriginal || '—';
      const final = info.final || '—';

      const rowBg =
        info.final && info.final.includes('?')
          ? 'background:#f8d7da;' // slightly stronger red if suspicious
          : 'background:#fff5f5;';

      const finalStyle =
        final !== original && final !== '—'
          ? `color:#bd2130; font-weight:600; text-decoration: underline wavy #bd2130; text-underline-offset: 3px;`
          : `color:#6c757d; font-style:italic;`;

      tableHtml += `
        <tr style="${rowBg}">
          <td style="padding:12px 10px; border-bottom:1px solid #f5c6cb; word-break:break-all;">
            <a href="${original}" target="_blank" style="color:#004085; text-decoration:none; font-weight:500;">
              ${original}
            </a>
          </td>
          <td style="padding:12px 10px; border-bottom:1px solid #f5c6cb; word-break:break-all; ${finalStyle}">
            <a href="${final}" target="_blank" style="${finalStyle}">
              ${final}
            </a>
          </td>
        </tr>
      `;
    });
  });

  tableHtml += `
        </tbody>
      </table>
    </div>
  `;

  // ── Main Swal popup ──────────────────────────────────────
  const redirectedCount = redirects.length;

  foundRedirectsSwal({
    redirectedCount,
    totalChecked,
    tableHtml,
  })
}