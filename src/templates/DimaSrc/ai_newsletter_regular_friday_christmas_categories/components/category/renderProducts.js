import { toast } from 'sonner';

export const renderProducts = async (
  { products,
    showPrices,
    priceColor,
    showName,
    queries,
    categoryType,
    categoryIndex,
    insideContainer = false,
    background,
    color = '#000000',
    ctaText,
  }
) => {
  const type = categoryType ? categoryType.toLowerCase() : 'default';

  console.log('renderProducts', type);

  console.log("ctaText", ctaText)

  try {
    const module = await import(`../../category/${type}.js`);

    if (type === 'unique') {
      return module.render(products, showPrices, showName, queries, categoryIndex);
    } else if (type === 'grid') {
      return module.render(products, showPrices, showName, queries, insideContainer, color, background, priceColor, ctaText);
    } else if (type === 'grid4tiles') {
      return module.render(products, false, false, queries, insideContainer, color, background);
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
