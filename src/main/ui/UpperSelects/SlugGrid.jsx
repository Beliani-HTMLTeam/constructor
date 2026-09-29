import React from 'react';
import { useRovingFocus, getRovingTabIndex } from './useRovingFocus.js';
import './PickerControls.scss';

function SlugGridBase({ options, value, onChange, minItemWidth = 40, label }) {
  const handleKeyDown = useRovingFocus();
  const hasActive = options.some((option) => option.value === value);

  return (
    <div
      className="slug-grid"
      role="group"
      aria-label={label}
      onKeyDown={handleKeyDown}
      style={{ '--min-item': `${minItemWidth}px` }}
    >
      {options.map((option, index) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            tabIndex={getRovingTabIndex({ isActive, hasActive, index })}
            title={option.title}
            className={`slug-grid__item${isActive ? ' is-active' : ''}`}
            onClick={() => {
              if (!isActive) onChange(option.value, option);
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export const SlugGrid = React.memo(SlugGridBase);
