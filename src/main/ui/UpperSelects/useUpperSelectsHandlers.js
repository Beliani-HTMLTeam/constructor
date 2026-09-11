import { useCallback } from 'react';
import { getState, setState } from '@/main/state/appState.js';
import { selectCampaignHandler, handleSlugChange, handleShopChange } from '@/main/events.jsx';
import { renderTemplate } from '@/main/rendering/templateRenderer.js';
import { getDOMElements, showElements, hideElements } from '@/utils/domUtils.js';
import { initCampaigns } from '@/main/initCampaigns.js';

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
			redirectCheck,
		} = getDOMElements();

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

			const root = document.querySelector('#app-content');
			if (root) root.innerHTML = '';

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

	const handleTemplateSelect = useCallback(
		(templateKey) => {
			if (!templateKey || templateKey === 'default') return;

			const currentSelectedTemplates = getState('selectedTemplates') || selectedTemplates;
			const foundTemplate = currentSelectedTemplates.find(
				(t) => `${t.type}_${t.name}` === templateKey
			);

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

	return {
		handleScopeSelect,
		handleCampaignSelect,
		handleTemplateSelect,
		handleShopSelect,
		handleLanguageSelect,
	};
}
