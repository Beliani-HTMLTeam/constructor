import React from 'react';
import { Select } from '@/main/ui/Select';
import { SegmentedToggle } from './SegmentedToggle.jsx';
import { SlugGrid } from './SlugGrid.jsx';
import { useUpperSelectsState } from './useUpperSelectsState.js';
import { useFavorites } from './useFavorites.js';
import { useSelectOptions } from './useSelectOptions.js';
import { useUpperSelectsHandlers } from './useUpperSelectsHandlers.js';
import { useRestoreSelection } from './useRestoreSelection.js';
import { getTemplateKey } from '@/utils/selectionParams.js';

export function UpperSelects({ onScopeChange }) {
  const { scopes, scope, campaigns, selectedCampaign, selectedTemplates, template, shops, shop, selectedLanguage } =
    useUpperSelectsState();

  const { favoriteScope, favoriteCampaigns, handleToggleFavoriteScope, handleToggleFavoriteCampaign } = useFavorites();

  const { scopeOptions, campaignOptions, templateOptions, shopOptions, languageOptions } = useSelectOptions({
    scopes,
    scope,
    campaigns,
    selectedTemplates,
    shops,
    shop,
    favoriteScope,
    favoriteCampaigns,
  });

  const {
    handleScopeSelect,
    handleCampaignSelect,
    handleTemplateSelect,
    handleShopSelect,
    handleLanguageSelect,
    restoreSelection,
  } = useUpperSelectsHandlers({
    onScopeChange,
    campaigns,
    selectedTemplates,
    shops,
  });

  useRestoreSelection({
    scope,
    selectedCampaign,
    campaignOptions,
    selectCampaign: handleCampaignSelect,
    restoreSelection,
  });

  const hasScope = Boolean(scope);
  const hasCampaign = Boolean(selectedCampaign && selectedCampaign.startId);
  const hasTemplate = Boolean(template);
  const hasShop = Boolean(shop);
  const currentTemplateKey = template ? getTemplateKey(template) : null;

  return (
    <div className="group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Select
        id="scopes"
        options={scopeOptions}
        value={scope}
        onChange={handleScopeSelect}
        placeholder="Select Scope"
        placement="auto"
        zIndex={50}
        enableFavorites={true}
        onToggleFavorite={handleToggleFavoriteScope}
      />

      {hasScope && (
        <Select
          id="campaigns"
          options={campaignOptions}
          value={selectedCampaign?.startId || null}
          onChange={handleCampaignSelect}
          placeholder="Select Campaign"
          searchable={true}
          placement="auto"
          zIndex={40}
          enableFavorites={true}
          onToggleFavorite={handleToggleFavoriteCampaign}
        />
      )}

      {hasCampaign && templateOptions.length > 0 && (
        <SegmentedToggle options={templateOptions} value={currentTemplateKey} onChange={handleTemplateSelect} />
      )}

      {hasTemplate && (
        <>
          <div className="picker-divider">Shop</div>
          <SlugGrid label="Shop" options={shopOptions} value={shop?.shopId || null} onChange={handleShopSelect} />
        </>
      )}

      {hasShop && languageOptions.length > 0 && (
        <>
          <div className="picker-divider">Language</div>
          <SlugGrid
            label="Language"
            minItemWidth={64}
            options={languageOptions}
            value={selectedLanguage}
            onChange={handleLanguageSelect}
          />
        </>
      )}
    </div>
  );
}
