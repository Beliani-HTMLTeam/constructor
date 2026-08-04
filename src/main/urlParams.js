/**
 * Optional headless-preview support: when the URL carries `?campaign=&template=&shop=&lang=`,
 * drive the existing campaign/template/shop/language <select> elements and their real
 * `change` listeners programmatically, so a script (or the `capture_campaign_preview` MCP
 * tool) can deep-link straight to a rendered campaign without clicking through the UI.
 *
 * Deliberately reuses the exact same DOM elements + `change` event dispatch the manual
 * flow uses (src/main/ui/selectSetup.js) rather than calling internal handlers directly,
 * so behavior can't drift from clicking through the dropdowns by hand.
 *
 * No-op (and no console noise) when the URL has no `campaign` param, so normal manual
 * usage of the app is completely unaffected.
 */

function fireChange(select) {
  select.dispatchEvent(new Event('change', { bubbles: true }));
}

function findOptionValue(select, predicate) {
  const option = Array.from(select.options).find(predicate);
  return option?.value;
}

export function applyUrlParamsFromLocation(elements, campaigns, shops) {
  const params = new URLSearchParams(window.location.search);
  const campaignParam = params.get('campaign');

  if (!campaignParam) return;

  const templateParam = params.get('template');
  const shopParam = params.get('shop');
  const langParam = params.get('lang');

  const campaignKey = campaignParam.replace(/\.[^.]+$/, '').toLowerCase();
  const matchedCampaign = campaigns.find(
    (c) =>
      c._sourceFileName?.toLowerCase() === campaignKey ||
      String(c.startId) === campaignParam ||
      c.name?.toLowerCase() === campaignParam.toLowerCase()
  );

  if (!matchedCampaign) {
    console.error(`[urlParams] No campaign matching "${campaignParam}" found for this VITE_SCOPE.`);
    return;
  }

  elements.selectCampaigns.value = String(matchedCampaign.startId);
  fireChange(elements.selectCampaigns);

  if (templateParam) {
    const templateValue = findOptionValue(
      elements.selectTemplates,
      (opt) => opt.value !== 'default' && opt.textContent.toLowerCase() === templateParam.toLowerCase()
    );

    if (!templateValue) {
      console.error(`[urlParams] No template matching "${templateParam}" found for campaign "${matchedCampaign.name}".`);
      return;
    }

    elements.selectTemplates.value = templateValue;
    fireChange(elements.selectTemplates);
  }

  if (shopParam) {
    const shop = shops.find((s) => s.slug?.toLowerCase() === shopParam.toLowerCase());

    if (!shop) {
      console.error(`[urlParams] No shop matching "${shopParam}" found.`);
      return;
    }

    elements.selectShop.value = shop.shopId;
    fireChange(elements.selectShop);
  }

  if (langParam) {
    const languageValue = findOptionValue(
      elements.selectLanguage,
      (opt) => opt.value !== 'default' && opt.value.split('-')[1]?.toLowerCase() === langParam.toLowerCase()
    );

    if (!languageValue) {
      console.error(`[urlParams] No language matching "${langParam}" found for shop "${shopParam}".`);
      return;
    }

    elements.selectLanguage.value = languageValue;
    fireChange(elements.selectLanguage);
  }
}
