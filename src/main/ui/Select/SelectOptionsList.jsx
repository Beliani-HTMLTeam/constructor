import React from 'react';
import { StarButton } from './StarButton.jsx';
import { MarqueeLabel } from './Marquee.jsx';
import { isDateBadge } from './utils.js';

export function SelectOptionsList({
  listRef,
  options,
  selectedOption,
  highlightedIndex,
  justAddedValue,
  enableFavorites,
  onSelect,
  onToggleFavorite,
  onHighlight,
  renderOption,
}) {
  if (options.length === 0) {
    return (
      <ul ref={listRef} className="custom-select-options-list">
        <li className="custom-select-empty">No options found</li>
      </ul>
    );
  }

  return (
    <ul ref={listRef} className="custom-select-options-list">
      {options.map((option, idx) => {
        const isSelected = selectedOption?.value === option.value;
        const isHighlighted = highlightedIndex === idx;
        const isJustAdded = justAddedValue === option.value;

        return (
          <li
            key={String(option.value)}
            role="option"
            aria-selected={isSelected}
            className={`custom-select-option ${isSelected ? 'is-selected' : ''} ${
              isHighlighted ? 'is-highlighted' : ''
            } ${option.disabled ? 'is-disabled' : ''}`}
            onClick={() => onSelect(option)}
            onMouseEnter={() => onHighlight(idx)}
          >
            {renderOption ? (
              renderOption(option, isSelected)
            ) : (
              <>
                <div className="custom-select-option-main">
                  {enableFavorites && (
                    <StarButton
                      isFavorite={option.isFavorite}
                      justAdded={isJustAdded}
                      onToggle={(e) => onToggleFavorite(option, e)}
                    />
                  )}

                  <div className="custom-select-option-content">
                    <MarqueeLabel text={option.label} className="custom-select-option-label" />
                    {option.subtitle && <span className="custom-select-option-subtitle">{option.subtitle}</span>}
                  </div>
                </div>

                {option.badge && (
                  <span className={`custom-select-option-badge ${isDateBadge(option.badge) ? 'is-date' : ''}`}>
                    {option.badge}
                  </span>
                )}

                {isSelected && (
                  <svg className="custom-select-check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
