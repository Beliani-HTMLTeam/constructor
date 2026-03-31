import { toast } from 'sonner';

import { normalizeProducts } from '@/utils/normalizeProducts.js';
import { isQuotaExceededError } from '@/helpers/isQuotaExceededError.js';

import { safeJsonParse } from './json.js';
import {
  compressProductsForStorage,
  estimateUncompressedMb,
  readProductsIndex,
  writeProductsIndex,
} from './storage.js';

export function createSaveHandler({ mode, campaignId, select, textarea, backToList }) {
  return () => {
    const normalizeCampaignId = (value) => String(value ?? '');
    const targetCampaignId = normalizeCampaignId(mode === 'edit' ? campaignId : select.value);
    if (!targetCampaignId || targetCampaignId === 'default') {
      return toast.error('Please select a campaign first!');
    }

    const parsed = safeJsonParse(textarea.value);
    if (!parsed.ok) {
      textarea.classList.add('json-invalid');
      return toast.error('Products parse error. Check JSON and try again.');
    }

    const rawProducts = parsed.value;
    if (!Array.isArray(rawProducts)) {
      textarea.classList.add('json-invalid');
      return toast.error('Products JSON must be an array.');
    }

    const count = rawProducts.length;
    const uncompressedMb = estimateUncompressedMb(rawProducts);

    let normalizedCount;
    try {
      normalizedCount = normalizeProducts(rawProducts).length;
    } catch {
      normalizedCount = undefined;
    }

    const productsIndex = readProductsIndex();
    const existingEntry = productsIndex.find(
      (entry) => normalizeCampaignId(entry?.campaign_id) === targetCampaignId
    );
    if (mode === 'add' && existingEntry) {
      const ok = confirm(`Products for ${targetCampaignId} already exist. Overwrite?`);
      if (!ok) return;
    }

    const storedProductsPayload = compressProductsForStorage(rawProducts);
    const meta = {
      ...(existingEntry?.meta ?? {}),
      count,
      uncompressed_mb: uncompressedMb,
      normalized_count: normalizedCount,
      stored_at: new Date().toISOString(),
    };

    const updatedIndex = existingEntry
      ? productsIndex.map((entry) =>
          normalizeCampaignId(entry?.campaign_id) === targetCampaignId
            ? { ...entry, campaign_id: targetCampaignId, products: storedProductsPayload, meta }
            : entry
        )
      : [...productsIndex, { campaign_id: targetCampaignId, products: storedProductsPayload, meta }];

    try {
      writeProductsIndex(updatedIndex);
      
      toast.success('Products saved.');
      
      backToList();
    } catch (error) {
      if (isQuotaExceededError(error)) {
        toast.error('LocalStorage is full (10MB). Delete something first.');
      
        backToList();
      
        return;
      }
      console.error(error);
      toast.error('Error during saving products. Check console for details.');
    }
  };
}
