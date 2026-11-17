const appendUtmContent = (url, utmContent) => {
  if (!url || typeof url !== 'string' || !utmContent) return url;

  const [base, hash] = url.split('#');
  // remove an existing utm_content so it isn't added twice
  const cleaned = base
    .replace(/([?&])utm_content=[^&]*(&|$)/, (_, p1, p2) => (p2 ? p1 : ''))
    .replace(/[?&]$/, '');

  const sep = cleaned.includes('?') ? '&' : '?';
  return `${cleaned}${sep}utm_content=${encodeURIComponent(utmContent)}${hash ? `#${hash}` : ''}`;
};

/**
 * Returns a copy of `links` with utm_content added to Timer_href
 * (newsletter only, when Inside.utmContent is set).
 * The original `links` object is never changed.
 */
const getTimerLinks = ({ links, timer, type }) => {
  if (type !== 'newsletter' || !timer?.utmContent || !links?.Timer_href) return links;

  return {
    ...links,
    Timer_href: appendUtmContent(links.Timer_href, timer.utmContent),
  };
};

export { getTimerLinks, appendUtmContent };