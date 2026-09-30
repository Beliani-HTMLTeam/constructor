const TIMER_COLOR_PRESETS = {
  '#750000': { color: '#FFFFFF', unitBackground: '#AC6666' },
  '#FF2F00': { color: '#FFFFFF', unitBackground: '#FF9780' },
  '#FD9000': { color: '#000000', unitBackground: '#FECD8C' },
  '#F6E7E6': { color: '#000000', unitBackground: '#E3CCCC' },
  '#FFCCB7': { color: '#000000', unitBackground: '#FFE6DB' },
};

const resolveTimerColors = (maincolor) => {
  if (!maincolor) return null;

  const preset = TIMER_COLOR_PRESETS[maincolor.toUpperCase()];
  if (!preset) return null;

  return { backgroundColor: maincolor, ...preset };
};

export { TIMER_COLOR_PRESETS, resolveTimerColors };
