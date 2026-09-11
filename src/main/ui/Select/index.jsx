import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { normalizeOptions } from './utils.js';
import { SelectTrigger } from './SelectTrigger.jsx';
import { SelectSearch } from './SelectSearch.jsx';
import { SelectOptionsList } from './SelectOptionsList.jsx';
import './Select.scss';

export function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select option',
  disabled = false,
  searchable = undefined,
  id,
  name,
  className = '',
  style,
  renderOption,
  renderTrigger,
  ariaLabel,
  zIndex,
  placement = 'bottom',
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

  const isSearchActive = searchable !== undefined ? searchable : normalizedOptions.length >= 6;

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

  const selectedOption = useMemo(() => {
    if (value === undefined || value === null || value === '' || value === 'default') {
      return null;
    }
    return normalizedOptions.find((opt) => String(opt.value) === String(value)) || null;
  }, [normalizedOptions, value]);

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

  useEffect(() => {
    if (isOpen && !isClosing) {
      setSearchQuery('');
      setHighlightedIndex(selectedOption ? filteredOptions.findIndex((opt) => opt.value === selectedOption.value) : -1);
      if (isSearchActive && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 40);
      }
    }
  }, [isOpen, isClosing, isSearchActive]);

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
      {id && <input type="hidden" id={id} name={name || id} value={value ?? ''} />}

      <SelectTrigger
        selectedOption={selectedOption}
        placeholder={placeholder}
        isOpen={isOpen}
        disabled={disabled}
        onClick={toggleDropdown}
        ariaLabel={ariaLabel}
        renderTrigger={renderTrigger}
      />

      {isOpen && (
        <div
          className={`custom-select-dropdown placement-${effectivePlacement} ${isClosing ? 'is-closing' : ''}`}
          role="listbox"
        >
          {isSearchActive && (
            <SelectSearch
              inputRef={searchInputRef}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setHighlightedIndex(0);
              }}
              onClear={(e) => {
                e.stopPropagation();
                setSearchQuery('');
                searchInputRef.current?.focus();
              }}
            />
          )}

          <SelectOptionsList
            listRef={listRef}
            options={filteredOptions}
            selectedOption={selectedOption}
            highlightedIndex={highlightedIndex}
            justAddedValue={justAddedValue}
            enableFavorites={enableFavorites}
            onSelect={handleSelect}
            onToggleFavorite={handleToggleFav}
            onHighlight={setHighlightedIndex}
            renderOption={renderOption}
          />
        </div>
      )}
    </div>
  );
}
