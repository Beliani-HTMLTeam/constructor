import React from 'react';
import { useRovingFocus, getRovingTabIndex } from './useRovingFocus.js';
import './PickerControls.scss';

function SegmentedToggleBase({ options, value, onChange }) {
  const handleKeyDown = useRovingFocus();
  const activeIndex = options.findIndex((option) => option.value === value);
  const hasActive = activeIndex !== -1;

  return (
    <div
      className={`segmented-toggle${hasActive ? ' has-value' : ''}`}
      role="group"
      onKeyDown={handleKeyDown}
      style={{ '--count': options.length, '--index': Math.max(activeIndex, 0) }}
    >
      <span className="segmented-toggle__thumb" aria-hidden="true" />
      {options.map((option, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            tabIndex={getRovingTabIndex({ isActive, hasActive, index })}
            className={`segmented-toggle__item${isActive ? ' is-active' : ''}`}
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

export const SegmentedToggle = React.memo(SegmentedToggleBase);
