import React from 'react';
import { Select } from '@/main/ui/Select';
import { useUpperSelectsState } from './useUpperSelectsState.js';
import { useFavorites } from './useFavorites.js';
import { useSelectOptions } from './useSelectOptions.js';
import { useUpperSelectsHandlers } from './useUpperSelectsHandlers.js';

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

  const { handleScopeSelect, handleCampaignSelect, handleTemplateSelect, handleShopSelect, handleLanguageSelect } =
    useUpperSelectsHandlers({
      onScopeChange,
      campaigns,
      selectedTemplates,
      shops,
    });

  const hasScope = Boolean(scope);
  const hasCampaign = Boolean(selectedCampaign && selectedCampaign.startId);
  const hasTemplate = Boolean(template);
  const hasShop = Boolean(shop);
  const currentTemplateKey = template ? `${template.type}_${template.name}` : null;

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
        <Select
          id="templates"
          options={templateOptions}
          value={currentTemplateKey}
          onChange={handleTemplateSelect}
          placeholder="Select Template"
          placement="auto"
          zIndex={30}
        />
      )}

      {hasTemplate && (
        <Select
          id="shops"
          options={shopOptions}
          value={shop?.shopId || null}
          onChange={handleShopSelect}
          placeholder="Select shop"
          searchable={true}
          placement="auto"
          zIndex={20}
        />
      )}

      {hasShop && languageOptions.length > 0 && (
        <Select
          id="languages"
          options={languageOptions}
          value={selectedLanguage}
          onChange={handleLanguageSelect}
          placeholder="Select Language"
          placement="auto"
          zIndex={10}
        />
      )}
    </div>
  );
}
