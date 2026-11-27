export const getCampaignInfo = (date) => {
  const dateObj = new Date(
    Number(date.substring(0, 4)),
    Number(date.substring(4, 6)) - 1,
    Number(date.substring(6, 8))
  );

  return {
    name: dateObj.toLocaleDateString('en-Us', { weekday: 'long' }),
    date: dateObj.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    dateString: date,
  };
};
