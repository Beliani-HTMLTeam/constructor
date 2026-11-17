export const resolveCategories = ({
  categories = [],
  queries = {},
  getProductById,
  getCategoryTitle,
  getCategoryLink,
}) => {
  return Promise.all(
    categories.map(async (category, index) => {
      const products = await Promise.all(
        (category.products ?? []).flat().map(async (product) => {
          try {
            const resolved = await getProductById(
              product.id,
              product.src,
              product.useDescription ? { useDescription: true } : undefined
            );

            if (!resolved || typeof resolved !== 'object') {
              return null;
            }

            return {
              ...product,
              ...resolved,
            };
          } catch (error) {
            console.error(`Failed to resolve product ${product.id}: ${error}`);
            return null;
          }
        })
      );

      const image = category.srcByType?.landing ?? category.src;

      // optional: the category image links to a product (e.g. the tree on the picture) instead of category.href
      let imageHref = '';
      if (category.imageProductId) {
        try {
          const imageProduct = await getProductById(category.imageProductId);
          imageHref = imageProduct?.href ?? '';
        } catch (error) {
          console.error(`Failed to resolve image product ${category.imageProductId}: ${error}`);
        }
      }

      return {
        ...category,
        name: queries.categories?.[index] ?? (category.name ? (getCategoryTitle(category.name) ?? category.name) : ''),
        src: typeof image === 'object' && image !== null ? image.src : image,
        href: typeof category.href === 'string' ? getCategoryLink(category.href) : (category?.href?.href ?? ''),
        imageHref,
        description: category.paragraphText ?? queries.paragraphs?.[index] ?? '',
        products: products.filter(Boolean),
      };
    })
  );
};
