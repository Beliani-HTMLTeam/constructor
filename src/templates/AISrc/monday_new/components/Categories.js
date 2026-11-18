import { renderCategory } from './Category.js';

export const Categories = async ({
  categories,
  indexOffset = 0,
  theme = {},
  disableHighPrice = false,
  ...options
}) => {
  if (!Array.isArray(categories)) return '';

  const context = {
    ...options,
    theme,
    disableHighPrice,
  };

  let html = '';

  for (const [index, category] of categories.entries()) {
    html += await renderCategory({
      category,
      index: index + indexOffset,
      context,
    });
  }

  return html;
};