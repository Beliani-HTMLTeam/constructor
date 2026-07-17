export const CategoriesProcessor = async ({
  categories,
  categories_type,
  country,
  getProductById,
  add_utm,
}) => {
  return await Promise.all(
    categories.map(async (category) => {
      const shouldProcessProducts = 
        category.type !== 'tilesWithoutProducts' &&
        category.type !== 'grid4tiles' &&
        category.type !== 'liquidatorConditions' &&
        category.view !== 'newsletterOnly' &&
        categories_type !== 'liquidator';

      if (!shouldProcessProducts) {
        return { ...category };
      }

      return {
        ...category,
        products: await Promise.all(
          category.products.map(async (p) => {
            const productData = await getProductById(p.id, p.src);
            
            const href = p.hrefOverride?.[country]
              ? add_utm(p.hrefOverride[country])
              : productData?.href || p.href;

            return {
              ...productData,
              ...p,
              href,
              hrefOverride: p.hrefOverride,
            };
          })
        ),
      };
    })
  );
};