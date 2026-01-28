import juice from 'juice/client';

export function inlineCss(html) {
  if (!html) return html;

  try {
    return juice(html, {
			// if we don't remove <style></style> then some paddings will be doubled, how? idk
      removeStyleTags: false,
			preserveMediaQueries: false,
      preserveImportant: false,
    });
  } catch (error) {
    console.warn('inlineCss failed:', error);
    return html;
  }
}
