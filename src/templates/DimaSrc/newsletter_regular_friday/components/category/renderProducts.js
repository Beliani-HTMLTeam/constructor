import { toast } from 'sonner';

export const renderProducts = async (
  products,
  showPrices,
  showName,
  queries,
  categoryType,
  categoryIndex,
  insideContainer = false,
  color = '#000000'
) => {
  const type = categoryType ? categoryType.toLowerCase() : 'default';

  console.log('renderProducts', type);

  try {
    const module = await import(`../../category/${type}.js`);

    if (type === 'unique') {
      return module.render(products, showPrices, showName, queries, categoryIndex);
    } else if (type === 'grid') {
      return module.render(products, showPrices, showName, queries, insideContainer, color);
    }

    return module.render(products, showPrices, showName, queries);
  } catch (e) {
    console.log('error');
    toast.error(`Category type "${categoryType}" not found. Falling back to default renderer.`);
    console.error(e.message);

    const defaultModule = await import('../../category/default.js');

    return defaultModule.render(products, showPrices, showName, queries);
  }
};
