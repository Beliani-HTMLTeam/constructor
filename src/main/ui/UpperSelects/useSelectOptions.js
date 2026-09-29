import { useMemo } from 'react';
import { getTemplateKey, getLanguageValue } from '@/utils/selectionParams.js';

function parseCampaignDate(dateStr) {
	if (!dateStr) return new Date(0);
	const [day, month, year] = dateStr.split('.');
	return new Date(`${year}-${month}-${day}`);
}

const getShopLabel = (shop) => (shop.slug.length > 2 ? shop.slug.slice(0, 2) : shop.slug);

const getLanguageLabel = (language) => (/mattress/i.test(language.name) ? `${language.slug} Matt.` : language.slug);

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
			const val = getTemplateKey(t);
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
			label: getShopLabel(s),
			title: s.seller,
			original: s,
		}));
	}, [shops]);

	const languageOptions = useMemo(() => {
		if (!shop || !shop.languages) return [];
		return shop.languages.map(({ language }) => ({
			value: getLanguageValue(language),
			label: getLanguageLabel(language),
			title: language.name,
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
