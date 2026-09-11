import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { StarIcon, StarCheckIcon, StarMinusIcon, StarPlusIcon, CloseIcon } from './Icons/index.jsx';
import './Select.scss';

function normalizeOptions(options) {
  if (!Array.isArray(options)) return [];
  return options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return {
        value: opt.value !== undefined ? opt.value : opt.id,
        label: opt.label !== undefined ? opt.label : opt.text !== undefined ? opt.text : String(opt.value),
        subtitle: opt.subtitle,
        badge: opt.badge,
        disabled: Boolean(opt.disabled),
        isFavorite: Boolean(opt.isFavorite),
        original: opt,
      };
    }
    return {
      value: opt,
      label: String(opt),
      disabled: false,
      isFavorite: false,
      original: opt,
    };
  });
}

// Interactive Star Button Component using React SVG components
function StarButton({ isFavorite, onToggle, justAdded }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={`custom-select-star-btn ${isFavorite ? 'is-starred' : ''}`}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={(e) => {
        e.stopPropagation();
        if (onToggle) onToggle(e);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {justAdded ? (
        <StarCheckIcon size={14} stroke="#10b981" />
      ) : isFavorite ? (
        isHovered ? (
          <StarMinusIcon size={14} stroke="#ef4444" />
        ) : (
          <StarIcon size={14} fill="#f59e0b" stroke="#f59e0b" />
        )
      ) : isHovered ? (
        <StarPlusIcon size={14} stroke="#6366f1" />
      ) : (
        <StarIcon size={14} fill="none" stroke="#64748b" />
      )}
    </button>
  );
}

// Marquee Label Component for smooth swimming left-right scroll on hover
export function MarqueeLabel({ text, className = '' }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [overflowDist, setOverflowDist] = useState(0);

  const measure = useCallback(() => {
    if (containerRef.current && textRef.current) {
      const cw = containerRef.current.clientWidth;
      const sw = textRef.current.scrollWidth;
      if (sw > cw + 2) {
        setIsOverflowing(true);
        setOverflowDist(sw - cw);
      } else {
        setIsOverflowing(false);
        setOverflowDist(0);
      }
    }
  }, []);

  useEffect(() => {
    measure();
    const handleResize = () => measure();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text, measure]);

  // Calculate duration based on distance so reading speed is constant (~25px/s + pause)
  const duration = Math.max(3.5, overflowDist / 25 + 2.5);

  return (
    <span
      ref={containerRef}
      className={`custom-select-marquee-wrap ${isOverflowing ? 'can-marquee' : ''} ${className}`}
      onMouseEnter={measure}
      style={{
        '--marquee-dist': `-${overflowDist + 6}px`,
        '--marquee-duration': `${duration.toFixed(2)}s`,
      }}
    >
      <span ref={textRef} className="custom-select-marquee-text" title={text}>
        {text}
      </span>
    </span>
  );
}

export function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select option',
  disabled = false,
  searchable = undefined, // default: auto if options >= 6
  id,
  name,
  className = '',
  style,
  renderOption,
  renderTrigger,
  ariaLabel,
  zIndex,
  placement = 'bottom', // 'bottom' | 'top' | 'auto'
  enableFavorites = false,
  isFavorite: checkIsFavorite,
  onToggleFavorite,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [effectivePlacement, setEffectivePlacement] = useState(placement);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [justAddedValue, setJustAddedValue] = useState(null);

  const containerRef = useRef(null);
  const searchInputRef = useRef(null);
  const listRef = useRef(null);
  const closeTimerRef = useRef(null);
  const justAddedTimerRef = useRef(null);

  const normalizedOptions = useMemo(() => {
    const opts = normalizeOptions(options);
    if (checkIsFavorite) {
      return opts.map((opt) => ({
        ...opt,
        isFavorite: Boolean(checkIsFavorite(opt)),
      }));
    }
    return opts;
  }, [options, checkIsFavorite]);

  // Determine if search should be active
  const isSearchActive = searchable !== undefined ? searchable : normalizedOptions.length >= 6;

  // Filter options based on search query
  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return normalizedOptions;
    const q = searchQuery.toLowerCase().trim();
    return normalizedOptions.filter((opt) => {
      const labelMatch = opt.label && String(opt.label).toLowerCase().includes(q);
      const subMatch = opt.subtitle && String(opt.subtitle).toLowerCase().includes(q);
      const badgeMatch = opt.badge && String(opt.badge).toLowerCase().includes(q);
      return labelMatch || subMatch || badgeMatch;
    });
  }, [normalizedOptions, searchQuery]);

  // Find currently selected option object
  const selectedOption = useMemo(() => {
    if (value === undefined || value === null || value === '' || value === 'default') {
      return null;
    }
    return normalizedOptions.find((opt) => String(opt.value) === String(value)) || null;
  }, [normalizedOptions, value]);

  // Smooth close with exit animation
  const closeDropdown = useCallback(() => {
    if (!isOpen || isClosing) return;
    setIsClosing(true);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 180);
  }, [isOpen, isClosing]);

  const openDropdown = useCallback(() => {
    if (disabled) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

    // Calculate placement (auto check)
    if (placement === 'auto' && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      if (spaceBelow < 280 && rect.top > 250) {
        setEffectivePlacement('top');
      } else {
        setEffectivePlacement('bottom');
      }
    } else {
      setEffectivePlacement(placement);
    }

    setIsClosing(false);
    setIsOpen(true);
  }, [disabled, placement]);

  const toggleDropdown = useCallback(() => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }, [isOpen, closeDropdown, openDropdown]);

  // Handle click outside to close dropdown smoothly
  useEffect(() => {
    if (!isOpen || isClosing) return;

    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, [isOpen, isClosing, closeDropdown]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && !isClosing) {
      setSearchQuery('');
      setHighlightedIndex(selectedOption ? filteredOptions.findIndex((opt) => opt.value === selectedOption.value) : -1);
      if (isSearchActive && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 40);
      }
    }
  }, [isOpen, isClosing, isSearchActive]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && !isClosing && highlightedIndex >= 0 && listRef.current) {
      const highlightedEl = listRef.current.children[highlightedIndex];
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [highlightedIndex, isOpen, isClosing]);

  const handleSelect = useCallback(
    (option) => {
      if (!option || option.disabled) return;
      closeDropdown();
      if (onChange) {
        onChange(option.value, option);
      }
    },
    [closeDropdown, onChange]
  );

  const handleToggleFav = useCallback(
    (option, e) => {
      const wasFav = option.isFavorite;
      if (!wasFav) {
        // Show star-check icon temporarily
        setJustAddedValue(option.value);
        if (justAddedTimerRef.current) clearTimeout(justAddedTimerRef.current);
        justAddedTimerRef.current = setTimeout(() => {
          setJustAddedValue(null);
        }, 1800);
      } else {
        setJustAddedValue(null);
      }

      if (onToggleFavorite) {
        onToggleFavorite(option, e);
      }
    },
    [onToggleFavorite]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (disabled) return;

      if (!isOpen) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          openDropdown();
        }
        return;
      }

      switch (e.key) {
        case 'Escape':
        case 'Tab':
          e.preventDefault();
          closeDropdown();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev + 1;
            return next >= filteredOptions.length ? 0 : next;
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev - 1;
            return next < 0 ? filteredOptions.length - 1 : next;
          });
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        default:
          break;
      }
    },
    [disabled, isOpen, filteredOptions, highlightedIndex, handleSelect, closeDropdown, openDropdown]
  );

  return (
    <div
      ref={containerRef}
      className={`custom-select-wrapper ${isOpen && !isClosing ? 'is-open' : ''} ${className}`}
      style={{ ...style, ...(zIndex !== undefined ? { zIndex } : {}) }}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input for DOM & backward compatibility */}
      {id && <input type="hidden" id={id} name={name || id} value={value ?? ''} />}

      {/* Trigger Button */}
      <button
        type="button"
        className={`custom-select-trigger ${disabled ? 'disabled' : ''}`}
        onClick={toggleDropdown}
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
                {(() => {
                  const isDate =
                    typeof selectedOption.badge === 'string' &&
                    /^\d{2}\.\d{2}\.\d{4}$/.test(selectedOption.badge.trim());
                  const displayText =
                    isDate && selectedOption.badge
                      ? `${selectedOption.label} - ${selectedOption.badge}`
                      : selectedOption.label;

                  return (
                    <>
                      <MarqueeLabel text={displayText} className="custom-select-option-label" />
                      {selectedOption.badge && !isDate && (
                        <span className="custom-select-option-badge">{selectedOption.badge}</span>
                      )}
                    </>
                  );
                })()}
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

      {/* Dropdown Menu (with placement and animations) */}
      {isOpen && (
        <div
          className={`custom-select-dropdown placement-${effectivePlacement} ${isClosing ? 'is-closing' : ''}`}
          role="listbox"
        >
          {/* Modern Search Box */}
          {isSearchActive && (
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
                  ref={searchInputRef}
                  type="text"
                  className="custom-select-search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setHighlightedIndex(0);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="custom-select-search-clear"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchQuery('');
                      searchInputRef.current?.focus();
                    }}
                    aria-label="Clear search"
                  >
                    <CloseIcon size={12} stroke="#94a3b8" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Options List */}
          <ul ref={listRef} className="custom-select-options-list">
            {filteredOptions.length === 0 ? (
              <li className="custom-select-empty">No options found</li>
            ) : (
              filteredOptions.map((option, idx) => {
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
                    onClick={() => handleSelect(option)}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                  >
                    {renderOption ? (
                      renderOption(option, isSelected)
                    ) : (
                      <>
                        <div className="custom-select-option-main">
                          {/* Interactive Lucide Star Button */}
                          {enableFavorites && (
                            <StarButton
                              isFavorite={option.isFavorite}
                              justAdded={isJustAdded}
                              onToggle={(e) => handleToggleFav(option, e)}
                            />
                          )}

                          <div className="custom-select-option-content">
                            <MarqueeLabel text={option.label} className="custom-select-option-label" />
                            {option.subtitle && (
                              <span className="custom-select-option-subtitle">{option.subtitle}</span>
                            )}
                          </div>
                        </div>

                        {option.badge && (
                          <span
                            className={`custom-select-option-badge ${
                              typeof option.badge === 'string' && /^\d{2}\.\d{2}\.\d{4}$/.test(option.badge.trim())
                                ? 'is-date'
                                : ''
                            }`}
                          >
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
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;

