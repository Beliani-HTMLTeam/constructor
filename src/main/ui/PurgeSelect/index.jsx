import React from 'react';
import { Select } from '@/main/ui/Select';
import { PURGE_OPTIONS } from './constants.js';
import { usePurgeHandler } from './usePurgeHandler.js';

export function PurgeSelect() {
	const { selectedValue, handlePurgeSelect } = usePurgeHandler();

	return (
		<Select
			id="purge"
			options={PURGE_OPTIONS}
			value={selectedValue}
			onChange={handlePurgeSelect}
			placeholder="Select Purge"
			searchable={false}
			placement="top"
			zIndex={15}
		/>
	);
}
