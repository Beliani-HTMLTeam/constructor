export const FreebiesProcessor = async ({
  freebies,
  getProductById,
  country,
}) => {
  if (!freebies) return null;

  const processFreebieItems = async (items) => {
    if (!Array.isArray(items)) return items;
    
    return await Promise.all(
      items.map(async (item) => {
        // If item has an id, fetch product data
        if (item.id) {
          const productData = await getProductById(item.id, item.src);
          
          // Check if there's an hrefOverride for the current country
          const href = item.hrefOverride?.[country]
            ? item.hrefOverride[country]
            : productData?.href || item.href;

          return {
            ...productData,
            ...item,
            href,
            hrefOverride: item.hrefOverride,
          };
        }
        return item;
      })
    );
  };

  const processedFreebies = {
    options: freebies.options || {},
    items: await processFreebieItems(freebies.items || []),
    items2: await processFreebieItems(freebies.items2 || []),
  };

  return processedFreebies;
};