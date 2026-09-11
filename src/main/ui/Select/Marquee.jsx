import React, { useRef, useState, useEffect, useCallback } from 'react';

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
