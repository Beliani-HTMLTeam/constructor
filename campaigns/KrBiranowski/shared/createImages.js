const defaultRegions = [
  ['scandinavian', ['NO', 'DK', 'SE', 'FI']],
  ['southern', ['ES', 'FR', 'PT', 'IT', 'HR']],
  ['central', ['DE', 'AT', 'CHDE', 'CHFR', 'NL', 'BENL', 'BEFR', 'UK']],
  ['eastern', ['PL', 'HU', 'CZ', 'SK', 'RO', 'SI']],
];

export const createImages = (getImageUrl, date, translateImage = null) => {
  return (
    pattern,
    {
      index,
      regional = false,
      translate = false,
      regions = defaultRegions,
    } = {}
  ) => {
    const filename = pattern
      .replaceAll('{date}', date)
      .replaceAll('{index}', String(index ?? '').padStart(2, '0'));

    const getSrc = (filename) => {
      if (translate && translateImage) {
        return translateImage({ value: filename });
      }

      return getImageUrl(filename, true);
    };

    if (!regional) return getSrc(filename);

    const images = {};

    for (const [region, countries] of regions) {
      const regionalFilename = filename.replace(
        /(\.[^.]+)$/,
        `_${region}$1`
      );

      const regionalSrc = getSrc(regionalFilename);

      for (const country of countries) {
        images[country] = regionalSrc;
      }
    }

    return images;
  };
};
