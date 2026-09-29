import { useEffect, useRef } from 'react';
import { initialUrlParams, enableUrlSync } from '@/utils/urlState.js';
import { readLastCampaign } from './lastCampaign.js';

export function useRestoreSelection({ scope, selectedCampaign, campaignOptions, selectCampaign, restoreSelection }) {
  const hasRestoredRef = useRef(false);

  useEffect(() => {
    if (hasRestoredRef.current) return;
    hasRestoredRef.current = true;

    const findCampaignOption = (startId) => campaignOptions.find((option) => String(option.value) === String(startId));

    async function restore() {
      if (!scope || selectedCampaign?.startId) return;

      if (initialUrlParams.campaign) {
        const campaignOption = findCampaignOption(initialUrlParams.campaign);
        if (!campaignOption) return;

        await restoreSelection({
          campaignOption,
          templateParam: initialUrlParams.template,
          shopSlug: initialUrlParams.shop,
          languageParam: initialUrlParams.lang,
        });
        return;
      }

      const lastCampaign = readLastCampaign();
      const campaignOption = lastCampaign?.scope === scope ? findCampaignOption(lastCampaign.startId) : null;
      if (campaignOption) selectCampaign(campaignOption.value, campaignOption);
    }

    restore()
      .catch((error) => console.error('Failed to restore selection', error))
      .finally(enableUrlSync);
  }, []);
}
