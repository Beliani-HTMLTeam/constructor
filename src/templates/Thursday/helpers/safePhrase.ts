/**
 * Wraps a `getPhrase()`/`getCategoryTitle()` lookup so a missing translation key never
 * reaches the rendered HTML as the literal string `"undefined"` (e.g. `<a>undefined</a>`,
 * `href="undefined"`). `getPhrase` already surfaces a toast when a key is missing (see
 * `src/main/handlers/handlers.js`) — this additionally logs a single-line, greppable
 * console warning and substitutes a visible fallback so the render stays legible.
 */
export function safePhrase(lookup: (key: string) => string | undefined, key: string, fallback: string): string {
  const value = lookup(key);

  if (value === undefined || value === null || value === '') {
    console.warn(`[Thursday] Missing translation for phrase key "${key}" — using fallback "${fallback}"`);
    return fallback;
  }

  return value;
}

/** Same as {@link safePhrase}, but for plain values (hrefs, etc.) that may resolve to `undefined`. */
export function safeValue<T>(value: T | undefined | null, fallback: T, label: string): T {
  if (value === undefined || value === null || value === '') {
    console.warn(`[Thursday] Missing value for "${label}" — using fallback "${String(fallback)}"`);
    return fallback;
  }

  return value;
}
