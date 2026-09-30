import { useCallback } from 'react';

const NEXT_KEYS = ['ArrowRight', 'ArrowDown'];
const PREVIOUS_KEYS = ['ArrowLeft', 'ArrowUp'];

// only one button of a group is a tab stop: the active one, or the first when nothing is active
export const getRovingTabIndex = ({ isActive, hasActive, index }) => (isActive || (!hasActive && index === 0) ? 0 : -1);

// arrows, Home and End move focus inside a button group; Enter and Space select as usual
export function useRovingFocus() {
  return useCallback((event) => {
    const buttons = Array.from(event.currentTarget.querySelectorAll('button'));
    const currentIndex = buttons.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex;
    if (NEXT_KEYS.includes(event.key)) nextIndex = (currentIndex + 1) % buttons.length;
    else if (PREVIOUS_KEYS.includes(event.key)) nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = buttons.length - 1;
    else return;

    event.preventDefault();
    buttons[nextIndex].focus();
  }, []);
}
