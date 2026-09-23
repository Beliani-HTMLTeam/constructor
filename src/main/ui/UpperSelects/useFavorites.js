import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export function useFavorites() {
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

	const handleToggleFavoriteCampaign = useCallback(
		(option) => {
			const startId = option.value;
			const isAlreadyFav = favoriteCampaigns.includes(startId);
			const updated = isAlreadyFav
				? favoriteCampaigns.filter((id) => id !== startId)
				: [...favoriteCampaigns, startId];

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

	return {
		favoriteScope,
		favoriteCampaigns,
		handleToggleFavoriteScope,
		handleToggleFavoriteCampaign,
	};
}
