import React from 'react';
import { CloseIcon } from './Icons/index.jsx';

export function SelectSearch({ inputRef, value, onChange, onClear }) {
  return (
    <div className="custom-select-search-box">
      <div className="custom-select-search-inner">
        <svg className="custom-select-search-icon" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="custom-select-search-input"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          onClick={(e) => e.stopPropagation()}
        />
        {value && (
          <button type="button" className="custom-select-search-clear" onClick={onClear} aria-label="Clear search">
            <CloseIcon size={12} stroke="#94a3b8" />
          </button>
        )}
      </div>
    </div>
  );
}
