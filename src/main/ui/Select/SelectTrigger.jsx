import React from 'react';
import { StarIcon } from './Icons/index.jsx';
import { MarqueeLabel } from './Marquee.jsx';
import { formatTriggerText, isDateBadge } from './utils.js';

export function SelectTrigger({ selectedOption, placeholder, isOpen, disabled, onClick, ariaLabel, renderTrigger }) {
  return (
    <button
      type="button"
      className={`custom-select-trigger ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-label={ariaLabel || placeholder}
    >
      {renderTrigger ? (
        renderTrigger(selectedOption, placeholder)
      ) : (
        <span className="custom-select-value">
          {selectedOption ? (
            <>
              {selectedOption.isFavorite && (
                <span className="custom-select-trigger-star" title="Favorite">
                  <StarIcon size={13} fill="#f59e0b" stroke="#f59e0b" />
                </span>
              )}
              <MarqueeLabel text={formatTriggerText(selectedOption)} className="custom-select-option-label" />
              {selectedOption.badge && !isDateBadge(selectedOption.badge) && (
                <span className="custom-select-option-badge">{selectedOption.badge}</span>
              )}
            </>
          ) : (
            <span className="custom-select-placeholder">{placeholder}</span>
          )}
        </span>
      )}

      <span className="custom-select-arrow" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
}
