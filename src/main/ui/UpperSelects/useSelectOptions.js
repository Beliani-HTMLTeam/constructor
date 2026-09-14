import { useMemo } from 'react';

function parseCampaignDate(dateStr) {
	if (!dateStr) return new Date(0);
	const [day, month, year] = dateStr.split('.');
	return new Date(`${year}-${month}-${day}`);
}

export function useSelectOptions({
	scopes,
	scope,
	campaigns,
	selectedTemplates,
	shops,
	shop,
	favoriteScope,
	favoriteCampaigns,
}) {
	const scopeOptions = useMemo(() => {
		return (scopes || []).map((s) => ({
			value: s,
			label: s,
			isFavorite: s === favoriteScope,
		}));
	}, [scopes, favoriteScope]);

	const campaignOptions = useMemo(() => {
		const validCampaigns = (campaigns || []).filter((c) => !c.isArchive);

		const sorted = [...validCampaigns].sort((a, b) => {
			const isFavA = favoriteCampaigns.includes(a.startId);
			const isFavB = favoriteCampaigns.includes(b.startId);

			if (isFavA && !isFavB) return -1;
			if (!isFavA && isFavB) return 1;

			return parseCampaignDate(b.date) - parseCampaignDate(a.date);
		});

		return sorted.map((c) => ({
			value: c.startId,
			label: c.name,
			badge: c.date,
			isFavorite: favoriteCampaigns.includes(c.startId),
			original: c,
		}));
	}, [campaigns, favoriteCampaigns]);

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

	const shopOptions = useMemo(() => {
		return (shops || []).map((s) => ({
			value: s.shopId,
			label: s.seller,
			badge: s.slug?.toUpperCase(),
			original: s,
		}));
	}, [shops]);

	const languageOptions = useMemo(() => {
		if (!shop || !shop.languages) return [];
		return shop.languages.map(({ language }) => ({
			value: `${language.slug}-${language.name}`,
			label: language.name.charAt(0).toUpperCase() + language.name.slice(1),
			badge: language.slug?.toUpperCase(),
			original: language,
		}));
	}, [shop]);

	return {
		scopeOptions,
		campaignOptions,
		templateOptions,
		shopOptions,
		languageOptions,
	};
}
