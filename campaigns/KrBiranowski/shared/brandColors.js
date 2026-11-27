const generateShades = (hex) => {
  const shades = {};

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  for (let shade = 100; shade >= 5; shade -= 5) {
    const factor = (100 - shade) / 100;

    const newR = Math.round(r + (255 - r) * factor);
    const newG = Math.round(g + (255 - g) * factor);
    const newB = Math.round(b + (255 - b) * factor);

    const toHex = (value) => value.toString(16).padStart(2, '0');

    shades[shade] = `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`.toUpperCase();
  }

  return shades;
};

// Define colors
const cozyBrown =  generateShades('#750000');
const happyRed = generateShades('#FF2F00');
const softPeach = generateShades('#FFCCB7');
const warmYellow = generateShades('#FD9000');
const subtlePeach = generateShades('#F6E7E6');

export const brandColors = {
  cozyBrown,
  happyRed,
  softPeach,
  warmYellow,
  subtlePeach,

  timerCozyBrown: {
    bg: cozyBrown[100],
    unitBg: cozyBrown[60],
    color: '#ffffff',
  },
  timerHappyRed: {
    bg: happyRed[100],
    unitBg: happyRed[50],
    color: '#ffffff',
  },
  timerWarmYellow: {
    bg: warmYellow[100],
    unitBg: warmYellow[50],
    color: '#000000',
  },
  timerSubtlePeach: {
    bg: subtlePeach[100],
    unitBg: cozyBrown[20],
    color: '#000000',
  },
  timerSoftPeach: {
    bg: softPeach[100],
    unitBg: softPeach[50],
    color: '#000000',
  }
};