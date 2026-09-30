import React, { useEffect, useState } from 'react';
import { getState, subscribeState } from '@/main/state/appState.js';
import { PRODUCTS_CHANGED_EVENT, getEntryCount, readProductsIndex } from '@/main/ui/manageProducts/storage.js';

function getSelectedCampaignProductCount() {
  const startId = getState('selectedCampaign')?.startId;
  if (!startId) return 0;
  const entry = readProductsIndex().find((item) => String(item?.campaign_id) === String(startId));
  return entry ? getEntryCount(entry) : 0;
}

export function ProductsBadge() {
  const [count, setCount] = useState(getSelectedCampaignProductCount);

  useEffect(() => {
    const refresh = () => setCount(getSelectedCampaignProductCount());
    const unsubscribe = subscribeState((key) => {
      if (key === 'selectedCampaign') refresh();
    });
    window.addEventListener(PRODUCTS_CHANGED_EVENT, refresh);
    return () => {
      unsubscribe();
      window.removeEventListener(PRODUCTS_CHANGED_EVENT, refresh);
    };
  }, []);

  if (!count) return null;
  return <span className="fab-badge">{count > 999 ? '999+' : count}</span>;
}
