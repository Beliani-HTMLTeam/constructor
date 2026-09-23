import { useState, useEffect } from 'react';
import { getState, subscribeState } from '@/main/state/appState.js';

export function useUpperSelectsState() {
	const [scopes, setScopes] = useState(() => getState('scopes') || []);
	const [scope, setScope] = useState(() => getState('scope') || null);
	const [campaigns, setCampaigns] = useState(() => getState('campaigns') || []);
	const [selectedCampaign, setSelectedCampaign] = useState(() => getState('selectedCampaign') || null);
	const [selectedTemplates, setSelectedTemplates] = useState(() => getState('selectedTemplates') || []);
	const [template, setTemplate] = useState(() => getState('template') || null);
	const [shops, setShops] = useState(() => getState('shops') || []);
	const [shop, setShop] = useState(() => getState('shop') || null);
	const [selectedLanguage, setSelectedLanguage] = useState(() => getState('selectedLanguage') || null);

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

	return {
		scopes,
		scope,
		campaigns,
		selectedCampaign,
		selectedTemplates,
		template,
		shops,
		shop,
		selectedLanguage,
	};
}
