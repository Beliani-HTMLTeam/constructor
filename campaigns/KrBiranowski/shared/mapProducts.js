export const mapProducts = (image, groups, pattern = '{date}_Prod{index}.png') => {
  let count = 0;
  return groups.map((ids) =>
    ids.map((id) => ({
      id,
      src: image(pattern, { index: ++count }),
    }))
  );
};
