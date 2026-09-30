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
			ariaLabel="Select tabs to purge"
			className="purge-fab"
			renderTrigger={() => (
				<>
					<span className="fab-label">Select tabs to purge</span>
					<img src="/icons/database-zap.svg" className="svg-icon" alt="" />
				</>
			)}
			searchable={false}
			placement="top"
			zIndex={15}
		/>
	);
}
