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
  console.log(categoryType, type);

  try {
    const module = await import(`../../category/${type}.js`);
    console.log('module', module);

    return module.render(products, showPrices, showName, queries, categoryIndex);
  } catch (e) {
    console.log('error');
    toast.error(`Category type "${categoryType}" not found. Falling back to default renderer.`);
    console.error(e.message);

    const defaultModule = await import('../../category/default.js');

    return defaultModule.render(products, showPrices, showName, queries);
  }
};
