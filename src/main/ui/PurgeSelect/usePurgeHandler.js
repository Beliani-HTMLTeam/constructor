import { useState, useCallback } from 'react';
import { executePurge } from './purgeService.jsx';

export function usePurgeHandler() {
	const [selectedValue, setSelectedValue] = useState(null);

	const handlePurgeSelect = useCallback(async (tabName) => {
		if (!tabName || tabName === 'default') return;

		try {
			await executePurge(tabName);
		} catch (error) {
			console.error('Purge error: ', error);
		} finally {
			setSelectedValue(null);
		}
	}, []);

	return {
		selectedValue,
		handlePurgeSelect,
	};
}
