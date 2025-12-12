import { toast } from 'sonner';

export const renderProducts = async (
  products,
  showPrices,
  showName,
  queries,
  categoryType,
  categoryIndex
) => {
  const type = categoryType ? categoryType.toLowerCase() : 'default';

  try {
    const module = await import(`../../category/${type}.js`);

    return module.render(products, showPrices, showName, queries, categoryIndex);
  } catch (e) {
    console.log('error');
    toast.error(`Category type "${categoryType}" not found. Falling back to default renderer.`);
    console.error(e.message);

    const defaultModule = await import('../../category/default.js');

    return defaultModule.render(products, showPrices, showName, queries);
  }
};
