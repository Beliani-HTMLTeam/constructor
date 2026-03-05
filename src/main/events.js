import { getIframe } from '@/helpers/getIframe';
import { incrementId } from '@/helpers/incrementId.js';
import { getState, setState } from '@/main/state/appState';
import { appConfig as config } from '@/utils/config';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

function openCampaignHandler(id) {
  const config = getState('config');

  if (!id) return toast.error('No campaign id found! Select campaign.');

  window.open(config.campaign_url + id, '_blank');
}

function openLpHandler(lpLinks, country) {
  if (!lpLinks) return toast.error('No lp links found!');

  if (!lpLinks[country]) return toast.error(`No lp links found for ${country}`);

  window.open(lpLinks[country], '_blank');
}

function openIssueHandler(id) {
  const config = getState('config');

  window.open(config.issue_url + id, '_blank');
}

function figmaCardHandler(url) {
  const config = getState('config');

  window.open(url, '_blank');
}

async function purgeDynamicSpreadsheetData(year, tabName) {
  const url = `${config.external_api_url}dynamic/${year}/${tabName}/force-refresh`;

  try {
    toast(`🔄 Purging dynamic spreadsheet...\nYear: ${year}\nTab: ${tabName}`);

    const headers = {
      Accept: 'application/json',
      skip_zrok_interstitial: 'true',
    };

    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      credentials: 'omit',
    });

    if (response.ok) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(`Successfully purged dynamic spreadsheet!\nYear: ${year}\nTab: ${tabName}`);
    } else {
      toast.error(`Failed to purge (${response.status}):\nYear: ${year}\nTab: ${tabName}`);
    }
  } catch (error) {
    console.error('Purge error: ', error);
    toast.error(`Error during purge:\nYear: ${year}\nTab: ${tabName}\nError: ${error.message}`);
  }
}

async function runRedirectCheck() {
  const shopLinks = Array.from(
    document.querySelectorAll('#app a[href*="https://www.beliani"]')
  ).map((link) => link.href);
  
  const uniqueShopLinks = [...new Set(shopLinks)];
  // const uniqueShopLinks = ['https://www.beliani.ro/mobilier-de-gradina/saloane', 'https://www.beliani.it/arredo-giardino/dondoli-da-giardino', 'https://www.beliani.cz/zahradni-nabytek/zahradni-doplnky/']


  if (uniqueShopLinks.length === 0) {
    return toast.error('No Beliani shop links found in the current view.')
  }

  console.log('Running redirect check for links:', uniqueShopLinks);

  try {
    toast('🔍 Checking redirects...')

    const apiUrl = `${config.api_url}check-redirects`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ urls: uniqueShopLinks }),
    })

    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`);
    }

    const result = await response.json()

    console.log('Redirect check results:', result.data)

    const redirectedCount = Object.values(result.data).filter(r => r.redirected).length
    toast.success(`Checked ${uniqueShopLinks.length} links - ${redirectedCount} redirected.`)

    const redirected = Object.values(result.data).filter(r => r.redirected)
    const total = uniqueShopLinks.length
    const summary = `${redirected.length} of ${total} links redirected`;

    showRedirectResults(result.data);
  }
    catch (error) {
      console.error('Redirect check failed: ', error)
      toast.error(`Redirect check failed: ${error.message}`)
    }
}

function showRedirectResults(results) {
  const redirectedCount = Object.values(results).filter(r => r.redirected).length;
  const redirectedLinks = Object.fromEntries(Object.entries(results).filter(([_, info]) => info.redirected));
  console.log('redirected', redirectedLinks)

  const total = Object.keys(results).length;

  if (redirectedCount === 0) {
    // No redirects → success popup with GIF
    Swal.fire({
      title: 'All links are direct! 🎉',
      html: `
        <p style="font-size: 1.1em; color: #555; margin: 16px 0;">
          Checked <strong>${total}</strong> links — no redirects found.<br>
          Everything looks perfect!
        </p>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnJueGNqd2czbzFhdXQxaHFpMGVzb2cxenRld2JzdXZrcGZoY2Q2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SABpzb2ivrS0g4Hgbb/giphy.gif" 
             alt="Success - no redirects" 
             style="max-width: 320px; border-radius: 12px; margin: 16px auto; display: block;">
      `,
      icon: 'success',                // built-in green check icon
      confirmButtonText: 'Great!',
      confirmButtonColor: '#28a745',
      allowOutsideClick: true,
      allowEscapeKey: true,
      showCloseButton: true,
      customClass: {
        popup: 'no-redirect-popup'    // optional: for extra styling if needed
      }
    });
  } else {
    // At least one redirect → table in custom HTML content
    let tableHtml = `
      <div style="max-height: 60vh; overflow-y: auto; margin: 16px 0; border: 1px solid #ddd; border-radius: 8px;">
        <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
          <thead style="background:#f1f1f1; position: sticky; top: 0;">
            <tr>
              <th style="padding:10px; text-align:left; border-bottom:2px solid #ddd;">Original</th>
              <th style="padding:10px; text-align:left; border-bottom:2px solid #ddd;">Final</th>
              <th style="padding:10px; text-align:center; border-bottom:2px solid #ddd;">Redirected</th>
              <th style="padding:10px; text-align:center; border-bottom:2px solid #ddd;">Status</th>
            </tr>
          </thead>
          <tbody>
    `;

    Object.entries(redirectedLinks).forEach(([original, info]) => {
      const rowBg = 'background:#fff3cd;';
      const finalLink = info.final && info.final !== original 
        ? `<a href="${info.final}" target="_blank" style="color:#28a745; text-decoration:none;">${info.final}</a>` 
        : '—';

      tableHtml += `
        <tr style="${rowBg}">
          <td style="padding:10px; border-bottom:1px solid #eee; word-break:break-all;">
            <a href="${original}" target="_blank" style="color:#0066cc; text-decoration:none;">${original}</a>
          </td>
          <td style="padding:10px; border-bottom:1px solid #eee; word-break:break-all;">
            ${finalLink}
          </td>
          <td style="padding:10px; border-bottom:1px solid #eee; text-align:center; font-weight:bold;">
            Yes
          </td>
          <td style="padding:10px; border-bottom:1px solid #eee; text-align:center;">
            ${info.status || (info.error ? 'Error' : '—')}
          </td>
        </tr>
      `;
    });

    tableHtml += `
          </tbody>
        </table>
      </div>
    `;

    Swal.fire({
      title: 'Redirect Check Results',
      html: `
        <p style="margin: 0 0 16px; color:#666; font-size:0.95em;">
          ${total} links checked • ${redirectedCount} redirected • ${new Date().toLocaleTimeString()}
        </p>
        ${tableHtml}
      `,
      icon: 'info',
      confirmButtonText: 'Close',
      confirmButtonColor: '#6c757d',
      showCloseButton: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      width: '90%',                     // wider for table
      customClass: {
        popup: 'redirect-table-popup'   // optional class for custom styling
      },
      didOpen: () => {
        // Optional: focus on confirm button or add extra behavior
        Swal.getConfirmButton().focus();
      }
    });
  }
}

function selectCampaignHandler(ev, campaigns) {
  const selectedCampaign = campaigns.find((campaign) => campaign.startId === ev.target.value);
  // console.log('selected Campaign', selectedCampaign);

  if (!selectedCampaign) return toast.error(`Campaign startId ${ev.target.value} not found.`);

  // Dla pewności pokaż całą kampanię w konsoli (do debugowania)
  // console.log('selectedCampaign z campaigns:', selectedCampaign);

  // Ustawienie mapy inkrementowanych ID (do "Open campaign")
  setState('ids', incrementId(selectedCampaign.startId, selectedCampaign.version || 'new'));

  // Ustawienie wybranej kampanii z najważniejszymi polami
  setState('selectedCampaign', {
    startId: selectedCampaign.startId,
    name: selectedCampaign.name,
    templates: selectedCampaign.templates,
    lpId: selectedCampaign.lpId,
    specialLpIds: selectedCampaign.specialLpIds,
    date: selectedCampaign.date, // <-- Dodaj, jeśli chcesz
    issueCardId: selectedCampaign.issueCardId, // <-- Dodaj, jeśli chcesz
    figmaUrl: selectedCampaign.figmaUrl, // <-- Dodaj, jeśli chcesz
    version: selectedCampaign.version || 'new',
    // Dodaj tutaj inne pola, których potrzebujesz!
  });

  // Zwróć całą kampanię i listę templatek
  return { selectedCampaign, templates: selectedCampaign.templates };
}

function handleSlugChange(ev) {
  const slugAndName = ev.target.value.split('-');
  setState('country', slugAndName[0]);
  setState('name', slugAndName[1]);
}

function handleShopChange(ev, shops) {
  const shop = shops.find((item) => item.shopId === ev.target.value);
  setState('shop', shop);
}

export {
  handleSlugChange,
  selectCampaignHandler,
  openCampaignHandler,
  openLpHandler,
  handleShopChange,
  openIssueHandler,
  figmaCardHandler,
  purgeDynamicSpreadsheetData,
  runRedirectCheck
};
