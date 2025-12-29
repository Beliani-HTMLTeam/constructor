export const swapImage = ({ format, src }) => {
  try {
    // images might be versioned eg. ?ver=2137 to prevent CF caching
    const [base, query] = src.split('?', 2);

    // we don't want to touch gifss
    if (/\.gif$/i.test(base)) return src;

    const replaced = base.replace(/\.[a-zA-Z0-9]+$/, format);

    return query ? `${replaced}?${query}` : replaced;
  } catch (error) {
    throw new Error(error);
  }
};
