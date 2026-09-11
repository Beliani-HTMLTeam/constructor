import React, { useState, useCallback } from 'react';
import { Select } from '@/main/ui/Select/Select.jsx';
import { appConfig as config } from '@/utils/config.js';
import { toast } from 'sonner';

const PURGE_OPTIONS = [
  { value: 'header', label: 'Purge Header' },
  { value: 'footer', label: 'Purge Footer' },
  { value: 'templates', label: 'Purge Templates' },
  { value: 'category_links', label: 'Purge Category Links' },
  { value: 'category_titles', label: 'Purge Category Titles' },
];

export function PurgeSelect() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handlePurgeSelect = useCallback(async (tabName) => {
    if (!tabName || tabName === 'default') return;

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

    try {
      await purgePromise;
    } catch (error) {
      console.error('Purge error: ', error);
    } finally {
      // Always reset back to unselected placeholder
      setSelectedValue(null);
    }
  }, []);

  return (
    <Select
      id="purge"
      options={PURGE_OPTIONS}
      value={selectedValue}
      onChange={handlePurgeSelect}
      placeholder="Select Purge"
      searchable={false}
      placement="top"
      zIndex={15}
    />
  );
}

export default PurgeSelect;

