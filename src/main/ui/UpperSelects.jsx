import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Select } from '@/main/ui/Select/Select.jsx';
import { getState, setState, subscribeState } from '@/main/state/appState.js';
import { selectCampaignHandler, handleSlugChange, handleShopChange } from '@/main/events.jsx';
import { renderTemplate } from '@/main/rendering/templateRenderer.js';
import { getDOMElements, showElements, hideElements } from '@/utils/domUtils.js';
import { initCampaigns } from '@/main/initCampaigns.js';
import { toast } from 'sonner';

export function UpperSelects({ onScopeChange }) {
  // Local state mirrored from appState
  const [scopes, setScopes] = useState(() => getState('scopes') || []);
  const [scope, setScope] = useState(() => getState('scope') || null);
  const [campaigns, setCampaigns] = useState(() => getState('campaigns') || []);
  const [selectedCampaign, setSelectedCampaign] = useState(() => getState('selectedCampaign') || null);
  const [selectedTemplates, setSelectedTemplates] = useState(() => getState('selectedTemplates') || []);
  const [template, setTemplate] = useState(() => getState('template') || null);
  const [shops, setShops] = useState(() => getState('shops') || []);
  const [shop, setShop] = useState(() => getState('shop') || null);
  const [selectedLanguage, setSelectedLanguage] = useState(() => getState('selectedLanguage') || null);

  // Favorites state persisted in localStorage
  const [favoriteScope, setFavoriteScope] = useState(() => {
    try {
      return localStorage.getItem('constructor_favorite_scope') || null;
    } catch {
      return null;
    }
  });

  const [favoriteCampaigns, setFavoriteCampaigns] = useState(() => {
    try {
      const stored = localStorage.getItem('constructor_favorite_campaigns');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Subscribe to appState updates
  useEffect(() => {
    const unsubscribe = subscribeState((key, value) => {
      switch (key) {
        case 'scopes':
          setScopes(value || []);
          break;
        case 'scope':
          setScope(value || null);
          break;
        case 'campaigns':
          setCampaigns(value || []);
          break;
        case 'selectedCampaign':
          setSelectedCampaign(value || null);
          break;
        case 'selectedTemplates':
          setSelectedTemplates(value || []);
          break;
        case 'template':
          setTemplate(value || null);
          break;
        case 'shops':
          setShops(value || []);
          break;
        case 'shop':
          setShop(value || null);
          break;
        case 'selectedLanguage':
          setSelectedLanguage(value || null);
          break;
        default:
          break;
      }
    });

    return unsubscribe;
  }, []);

  // Trigger template render helper
  const render = useCallback(() => {
    renderTemplate(getState, setState);
  }, []);

  // Helper to get action button DOM elements
  const getActionElements = useCallback(() => {
    const { openIssue, openFigma, purgeDynamicSpreadsheet, openCampaign, openLP, copyTemplate, redirectCheck } =
      getDOMElements();

    return {
      openIssue,
      openFigma,
      purgeDynamicSpreadsheet,
      openCampaign,
      openLP,
      copyTemplate,
      redirectCheck,
    };
  }, []);

  // Toggle favorite scope
  const handleToggleFavoriteScope = useCallback(
    (option) => {
      const targetScope = option.value;
      if (favoriteScope === targetScope) {
        localStorage.removeItem('constructor_favorite_scope');
        setFavoriteScope(null);
        toast.info(`Default scope "${targetScope}" removed`);
      } else {
        localStorage.setItem('constructor_favorite_scope', targetScope);
        setFavoriteScope(targetScope);
        toast.success(`Default scope set to "${targetScope}"`);
      }
    },
    [favoriteScope]
  );

  // Toggle favorite campaign
  const handleToggleFavoriteCampaign = useCallback(
    (option) => {
      const startId = option.value;
      const isAlreadyFav = favoriteCampaigns.includes(startId);
      const updated = isAlreadyFav ? favoriteCampaigns.filter((id) => id !== startId) : [...favoriteCampaigns, startId];

      setFavoriteCampaigns(updated);
      try {
        localStorage.setItem('constructor_favorite_campaigns', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save favorite campaigns:', err);
      }

      if (isAlreadyFav) {
        toast.info(`Campaign "${option.label}" removed from favorites`);
      } else {
        toast.success(`Campaign "${option.label}" pinned to top! ★`);
      }
    },
    [favoriteCampaigns]
  );

  // Scope Options
  const scopeOptions = useMemo(() => {
    return (scopes || []).map((s) => ({
      value: s,
      label: s,
      isFavorite: s === favoriteScope,
    }));
  }, [scopes, favoriteScope]);

  // Campaign Options: Starred appear on top, with pure name on left & date badge on right
  const campaignOptions = useMemo(() => {
    const validCampaigns = (campaigns || []).filter((c) => !c.isArchive);

    // Sort: Starred items first, then by date descending
    const sorted = [...validCampaigns].sort((a, b) => {
      const isFavA = favoriteCampaigns.includes(a.startId);
      const isFavB = favoriteCampaigns.includes(b.startId);

      if (isFavA && !isFavB) return -1;
      if (!isFavA && isFavB) return 1;

      const parseDate = (dateStr) => {
        if (!dateStr) return new Date(0);
        const [day, month, year] = dateStr.split('.');
        return new Date(`${year}-${month}-${day}`);
      };

      return parseDate(b.date) - parseDate(a.date);
    });

    return sorted.map((c) => ({
      value: c.startId,
      label: c.name, // Pure campaign name on left
      badge: c.date, // Date on right badge
      isFavorite: favoriteCampaigns.includes(c.startId),
      original: c,
    }));
  }, [campaigns, favoriteCampaigns]);

  // Template Options
  const templateOptions = useMemo(() => {
    return (selectedTemplates || []).map((t) => {
      const val = `${t.type}_${t.name}`;
      const lbl = t.name ? t.name : t.type === 'newsletter' ? 'Newsletter' : 'Landing';
      return {
        value: val,
        label: lbl,
        badge: t.type,
        original: t,
      };
    });
  }, [selectedTemplates]);

  // Shop Options
  const shopOptions = useMemo(() => {
    return (shops || []).map((s) => ({
      value: s.shopId,
      label: s.seller,
      badge: s.slug?.toUpperCase(),
      original: s,
    }));
  }, [shops]);

  // Language Options
  const languageOptions = useMemo(() => {
    if (!shop || !shop.languages) return [];
    return shop.languages.map(({ language }) => ({
      value: `${language.slug}-${language.name}`,
      label: language.name.charAt(0).toUpperCase() + language.name.slice(1),
      badge: language.slug?.toUpperCase(),
      original: language,
    }));
  }, [shop]);

  // 1. Handle Scope Change
  const handleScopeSelect = useCallback(
    async (newScope) => {
      const actionEls = getActionElements();
      hideElements(
        actionEls.openIssue,
        actionEls.openFigma,
        actionEls.purgeDynamicSpreadsheet,
        actionEls.openCampaign,
        actionEls.openLP,
        actionEls.copyTemplate,
        actionEls.redirectCheck
      );

      const root = document.querySelector('#app-content');
      if (root) root.innerHTML = '';

      // Reset state
      setState('selectedCampaign', {});
      setState('selectedTemplates', []);
      setState('template', null);
      setState('shop', null);
      setState('selectedLanguage', null);
      setState('country', '');
      setState('name', '');
      setState('html', '');
      setState('ids', {});

      if (!newScope || newScope === 'default') {
        setState('scope', null);
        setState('campaigns', []);
        if (onScopeChange) {
          await onScopeChange(null);
        }
        return;
      }

      setState('scope', newScope);
      if (onScopeChange) {
        await onScopeChange(newScope);
      }
    },
    [getActionElements, onScopeChange]
  );

  // 2. Handle Campaign Change
  const handleCampaignSelect = useCallback(
    (startId, option) => {
      if (!startId || startId === 'default') return;

      const currentCampaigns = getState('campaigns') || campaigns || [];
      const config = getState('config');

      // Check alarms for upcoming campaigns
      if (option?.original) {
        initCampaigns([option.original], config);
      }

      const mockEvent = { target: { value: startId } };
      const { selectedCampaign: currentSelectedCampaign, templates } = selectCampaignHandler(
        mockEvent,
        currentCampaigns
      );

      const root = document.querySelector('#app-content');
      if (root) root.innerHTML = '';

      // Reset downstream
      setState('template', null);
      setState('shop', null);
      setState('selectedLanguage', null);
      setState('country', '');
      setState('name', '');
      setState('html', '');

      setState('selectedTemplates', templates || []);
      setState('selectedCampaign', currentSelectedCampaign);
      setState('optimizeImg', currentSelectedCampaign.optimizeImg || false);

      const actionEls = getActionElements();
      showElements(actionEls.openIssue, actionEls.openFigma, actionEls.purgeDynamicSpreadsheet);
      hideElements(actionEls.openCampaign, actionEls.openLP, actionEls.copyTemplate, actionEls.redirectCheck);
    },
    [campaigns, getActionElements]
  );

  // 3. Handle Template Change
  const handleTemplateSelect = useCallback(
    (templateKey) => {
      if (!templateKey || templateKey === 'default') return;

      const currentSelectedTemplates = getState('selectedTemplates') || selectedTemplates;
      const foundTemplate = currentSelectedTemplates.find((t) => `${t.type}_${t.name}` === templateKey);

      if (!foundTemplate) return;

      setState('template', foundTemplate);

      const actionEls = getActionElements();
      if (foundTemplate.type === 'banner') {
        hideElements(actionEls.openCampaign);
      } else if (getState('selectedLanguage')) {
        showElements(actionEls.openCampaign);
      }

      render();
    },
    [selectedTemplates, getActionElements, render]
  );

  // 4. Handle Shop Change
  const handleShopSelect = useCallback(
    (shopId) => {
      if (!shopId || shopId === 'default') return;

      const currentShops = getState('shops') || shops;
      const mockEvent = { target: { value: shopId } };
      handleShopChange(mockEvent, currentShops);

      setState('selectedLanguage', null);
      setState('country', '');
      setState('name', '');

      const actionEls = getActionElements();
      showElements(actionEls.copyTemplate);
      hideElements(actionEls.openLP, actionEls.openCampaign, actionEls.redirectCheck);
    },
    [shops, getActionElements]
  );

  // 5. Handle Language Change
  const handleLanguageSelect = useCallback(
    (languageVal) => {
      if (!languageVal || languageVal === 'default') {
        setState('selectedLanguage', null);
        return;
      }

      setState('selectedLanguage', languageVal);
      const mockEvent = { target: { value: languageVal } };
      handleSlugChange(mockEvent);

      const actionEls = getActionElements();
      const currentTemplate = getState('template');
      showElements(actionEls.openLP, actionEls.redirectCheck);

      if (currentTemplate?.type !== 'banner') {
        showElements(actionEls.openCampaign);
      }

      render();
    },
    [getActionElements, render]
  );

  // Visibility states
  const hasScope = Boolean(scope);
  const hasCampaign = Boolean(selectedCampaign && selectedCampaign.startId);
  const hasTemplate = Boolean(template);
  const hasShop = Boolean(shop);

  const currentTemplateKey = template ? `${template.type}_${template.name}` : null;

  return (
    <div className="group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {/* 1. Scope Select with Favorite Star */}
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

      {/* 2. Campaign Select with Starred on Top & Pure Name */}
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

      {/* 3. Template Select */}
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

      {/* 4. Shop Select */}
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

      {/* 5. Language Select */}
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

export default UpperSelects;

