export const adjustTableRangeToCountry = (query, column) => {
  if (!query || !query.tableRange) return query;
  if (query.tableColumns === false) return query;

  const range = String(query.tableRange).trim();

  // if letters are present assume already adjusted
  if (/[A-Za-z]/.test(range)) return query;

  // insert column before every numeric token (handles "14", "14:17", "01:02", etc.)
  // regex /\d+/g matches any digit
  const tableRange = range.replace(/\d+/g, (n) => `${column}${n}`);

  return { ...query, tableRange };
};
