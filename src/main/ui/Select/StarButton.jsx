import React, { useState } from 'react';
import { StarIcon, StarCheckIcon, StarMinusIcon, StarPlusIcon } from './Icons/index.jsx';

export function StarButton({ isFavorite, onToggle, justAdded }) {
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
