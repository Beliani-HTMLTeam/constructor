const THEMES = {
  'Cozy Brown & White': {
    backgroundColor: '#6D0000',
    color: '#ffffff',
    unitBackground: '#A86A6A',
    freebiesTextColor: '#000000',
    freebiesBackground: '#ffffff',
    freebiesLineColor: '#ECE7E0',
    freebiesFreeColor: '#750000',
  },
  'Cozy Brown': {
    backgroundColor: '#6D0000',
    color: '#ffffff',
    unitBackground: '#A86A6A',
    freebiesTextColor: '#000000',
    freebiesBackground: '#D6B3B3',
    freebiesLineColor: '#ECE7E0',
    freebiesFreeColor: '#750000',
  },
  'Happy Red': {
    backgroundColor: '#000000',
    color: '#FF2F00',
    unitBackground: '#FAF1F0',
    freebiesTextColor: '#000000',
    freebiesBackground: '#FFC1B3',
    freebiesLineColor: '#ECE7E0',
    freebiesFreeColor: '#750000',
  },
  'Warm Yellow': {
    backgroundColor: '#FD9000',
    color: '#000000',
    unitBackground: '#FECD8C',
    freebiesTextColor: '#000000',
    freebiesBackground: '#FECD8C',
    freebiesLineColor: '#ECE7E0',
    freebiesFreeColor: '#750000',
  },
  'Subtle Peach': {
    backgroundColor: '#F6E7E6',
    color: '#000000',
    unitBackground: '#E3CCCC',
    freebiesTextColor: '#000000',
    freebiesBackground: '#F8F2F2',
    freebiesLineColor: '#E3CCCC',
    freebiesFreeColor: '#750000',
  },
  'Soft Peach': {
    backgroundColor: '#FFCCB7',
    color: '#000000',
    unitBackground: '#FFE6DB',
    freebiesTextColor: '#000000',
    freebiesBackground: '#FFE6DB',
    freebiesLineColor: '#E3CCCC',
    freebiesFreeColor: '#750000',
  },
};

const resolveTimerTheme = (name) => (THEMES[name] ? { name, ...THEMES[name] } : null);

export { THEMES, resolveTimerTheme };
