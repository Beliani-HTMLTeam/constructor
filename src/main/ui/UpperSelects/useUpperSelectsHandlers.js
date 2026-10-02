import { useCallback } from 'react';
import { getState, setState } from '@/main/state/appState.js';
import { selectCampaignHandler, handleSlugChange, handleShopChange } from '@/main/events.jsx';
import { renderTemplate } from '@/main/rendering/templateRenderer.js';
import { getDOMElements, showElements, hideElements } from '@/utils/domUtils.js';
import { initCampaigns } from '@/main/initCampaigns.js';
import { staticTranslations } from '@/api';
import { getTemplateKey, getLanguageValue, paramToTemplate, paramToLanguage } from '@/utils/selectionParams.js';
import { saveLastCampaign } from './lastCampaign.js';

// keep the previously chosen template when the new campaign has it, otherwise prefer Newsletter
function pickTemplate(templates, previousTemplate) {
	const sameType = templates.filter((template) => template.type === previousTemplate?.type);

	return (
		sameType.find((template) => template.name === previousTemplate.name) ??
		sameType[0] ??
		templates.find((template) => template.type === 'newsletter') ??
		templates[0] ??
		null
	);
}

export function useUpperSelectsHandlers({ onScopeChange, campaigns, selectedTemplates, shops }) {
	const render = useCallback(() => {
		renderTemplate(getState, setState);
	}, []);

	const getActionElements = useCallback(() => {
		const {
			openIssue,
			openFigma,
			purgeDynamicSpreadsheet,
			openCampaign,
			openLP,
			copyTemplate,
			downloadEml,
			redirectCheck,
		} = getDOMElements();

		return {
			openIssue,
			openFigma,
			purgeDynamicSpreadsheet,
			openCampaign,
			openLP,
			copyTemplate,
			downloadEml,
			redirectCheck,
		};
	}, []);

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
				actionEls.downloadEml,
				actionEls.redirectCheck
			);

			const root = document.querySelector('#app-content');
			if (root) root.innerHTML = '';

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

	const handleCampaignSelect = useCallback(
		(startId, option) => {
			if (!startId || startId === 'default') return;

			const currentCampaigns = getState('campaigns') || campaigns || [];
			const config = getState('config');

			if (option?.original) {
				initCampaigns([option.original], config);
			}

			const mockEvent = { target: { value: startId } };
			const { selectedCampaign: currentSelectedCampaign, templates } = selectCampaignHandler(
				mockEvent,
				currentCampaigns
			);

			saveLastCampaign(getState('scope'), startId);

			const root = document.querySelector('#app-content');
			if (root) root.innerHTML = '';

			const availableTemplates = templates ?? [];
			const previousShop = getState('shop');

			setState('template', pickTemplate(availableTemplates, getState('template')));
			setState('shop', previousShop ?? null);
			setState('selectedLanguage', null);
			setState('country', '');
			setState('name', '');
			setState('html', '');

			setState('selectedTemplates', availableTemplates);
			setState('selectedCampaign', currentSelectedCampaign);
			setState('optimizeImg', currentSelectedCampaign.optimizeImg || false);

			const actionEls = getActionElements();
			showElements(actionEls.openIssue, actionEls.openFigma, actionEls.purgeDynamicSpreadsheet);
			hideElements(actionEls.openCampaign, actionEls.openLP, actionEls.redirectCheck);
			if (previousShop) {
				showElements(actionEls.copyTemplate);
			} else {
				hideElements(actionEls.copyTemplate);
			}
		},
		[campaigns, getActionElements]
	);

	const handleTemplateSelect = useCallback(
		(templateKey) => {
			if (!templateKey || templateKey === 'default') return;
			const currentTemplate = getState('template');
			if (currentTemplate && getTemplateKey(currentTemplate) === templateKey) return;

			const currentSelectedTemplates = getState('selectedTemplates') || selectedTemplates;
			const foundTemplate = currentSelectedTemplates.find((template) => getTemplateKey(template) === templateKey);

			if (!foundTemplate) return;

			setState('template', foundTemplate);

			const actionEls = getActionElements();
			if (foundTemplate.type === 'banner') {
				hideElements(actionEls.openCampaign);
			} else if (getState('selectedLanguage')) {
				showElements(actionEls.openCampaign);
			}

			if (foundTemplate?.type !== 'landing') {
				showElements(actionEls.downloadEml);
			} else {
				hideElements(actionEls.downloadEml);
			}

			render();
		},
		[selectedTemplates, getActionElements, render]
	);

	const applyLanguage = useCallback(
		(languageVal) => {
			setState('selectedLanguage', languageVal);
			const mockEvent = { target: { value: languageVal } };
			handleSlugChange(mockEvent);

			const actionEls = getActionElements();
			const currentTemplate = getState('template');
			showElements(actionEls.openLP, actionEls.redirectCheck);

			if (currentTemplate?.type !== 'banner') {
				showElements(actionEls.openCampaign);
			}
		},
		[getActionElements]
	);

	const handleLanguageSelect = useCallback(
		(languageVal) => {
			if (!languageVal || languageVal === 'default') {
				setState('selectedLanguage', null);
				return;
			}

			applyLanguage(languageVal);
			render();
		},
		[applyLanguage, render]
	);

	const applyShop = useCallback(
		(shopId) => {
			const currentShops = getState('shops') || shops;
			const currentTemplate = getState('template');
			const mockEvent = { target: { value: shopId } };
			handleShopChange(mockEvent, currentShops);

			setState('selectedLanguage', null);
			setState('country', '');
			setState('name', '');

			const actionEls = getActionElements();
			showElements(actionEls.copyTemplate);

			if (currentTemplate?.type !== 'landing') {
				showElements(actionEls.downloadEml);
			} else {
				hideElements(actionEls.downloadEml);
			}

			hideElements(actionEls.openLP, actionEls.openCampaign, actionEls.redirectCheck);
		},
		[shops, getActionElements]
	);

	const handleShopSelect = useCallback(
		(shopId) => {
			if (!shopId || shopId === 'default') return;
			if (getState('shop')?.shopId === shopId) return;

			applyShop(shopId);

			const firstLanguage = getState('shop')?.languages?.[0]?.language;
			if (firstLanguage) handleLanguageSelect(getLanguageValue(firstLanguage));
		},
		[applyShop, handleLanguageSelect]
	);

	// applies everything to state first and renders once, after static translations are ready
	const restoreSelection = useCallback(
		async ({ campaignOption, templateParam, shopSlug, languageParam }) => {
			handleCampaignSelect(campaignOption.value, campaignOption);

			const template = paramToTemplate(templateParam, getState('selectedTemplates') ?? []);
			if (template) setState('template', template);

			const shop = (getState('shops') || shops).find((item) => item.slug === shopSlug);
			if (!shop) return;
			applyShop(shop.shopId);

			const languageValue = paramToLanguage(languageParam, shop);
			if (!languageValue) return;
			applyLanguage(languageValue);

			await staticTranslations.whenReady();
			render();
		},
		[handleCampaignSelect, applyShop, applyLanguage, render, shops]
	);

	return {
		handleScopeSelect,
		handleCampaignSelect,
		handleTemplateSelect,
		handleShopSelect,
		handleLanguageSelect,
		restoreSelection,
	};
}
