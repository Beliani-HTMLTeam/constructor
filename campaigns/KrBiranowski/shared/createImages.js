const defaultRegions = [
  ['scandinavian', ['NO', 'DK', 'SE', 'FI']],
  ['southern', ['ES', 'FR', 'PT', 'IT', 'HR']],
  ['central', ['DE', 'AT', 'CHDE', 'CHFR', 'NL', 'BENL', 'BEFR', 'UK']],
  ['eastern', ['PL', 'HU', 'CZ', 'SK', 'RO', 'SI']],
];

export const createImages = (getImageUrl, date) => {
  return (pattern, { index, regional = false, regions = defaultRegions } = {}) => {
    const filename = pattern.replaceAll('{date}', date).replaceAll('{index}', String(index ?? '').padStart(2, '0'));

    const src = getImageUrl(filename, true);

    if (!regional) return src;

    const images = {};

    for (const [region, countries] of regions) {
      const regionalFilename = filename.replace(/(\.[^.]+)$/, `_${region}$1`);
      const regionalSrc = getImageUrl(regionalFilename, true);
  
      for (const country of countries) {
        images[country] = regionalSrc;
      }
    }

    return images;
  };
};
