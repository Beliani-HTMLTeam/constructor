import React from 'react';
import { appConfig as config } from '@/utils/config.js';
import { toast } from 'sonner';

export async function executePurge(tabName) {
  const prettierTabName = tabName.replace(/_/g, ' ');
  const url = `${config.external_api_url}static/${tabName}/force-refresh`;

  const headers = {
    Accept: 'application/json',
    skip_zrok_interstitial: 'true',
  };

  const purgePromise = fetch(url, {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    credentials: 'omit',
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to purge (${response.status})`);
    }
    return response;
  });

  toast.promise(purgePromise, {
    loading: (
      <div data-content="">
        <div data-title="">Purging static spreadsheet...</div>
        <div data-description="">{prettierTabName}</div>
      </div>
    ),
    success: () => ({
      message: 'Successfully purged static spreadsheet!',
      description: prettierTabName,
    }),
    error: (err) => ({
      message: 'Error during purge',
      description: `${prettierTabName}, error: ${err.message}`,
    }),
  });

  return purgePromise;
}

