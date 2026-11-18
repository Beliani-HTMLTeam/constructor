export const createTemplates = ({
  types,
  theme,
  translationsSpreadsheet,
  categories,
  links,
  tableQueries,
  shared = {},
  newsletter = {},
  landing = {},
}) => {
  const common = {
    theme,
    translationsSpreadsheet,
    categories,
    links,
    tableQueries,
    ...shared,
  };

  return [
    {
      ...common,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      wrapper: types.WRAPPER,
      ...newsletter,
    },
    {
      ...common,
      name: 'Landing',
      type: types.LANDINGPAGE,
      ...landing,
    },
  ];
};
