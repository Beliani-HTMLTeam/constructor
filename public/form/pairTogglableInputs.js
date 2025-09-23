export const pairToggles = () => {
  const pairs = [
    { toggleId: 'specialLPToggle', targetId: 'specialLPIds' },
    { toggleId: 'alarmEnabled', targetId: 'alarmDescription' },
    {
      toggleId: 'insideEnabled',
      targetId: [
        'insideBackground',
        'insideColor',
        'insideType',
        'insideImage',
        'insideTranslateImage',
      ],
    },
    {
      toggleId: 'introEnabled',
      targetId: ['introBackground', 'introColor', 'introType', 'introAlignment'],
    },
    {
      toggleId: 'offerPartEnabled',
      targetId: ['offerPartBackground', 'offerPartColor', 'offerPartType', 'offerPartAlignment'],
    },
  ];

  pairs.forEach(({ toggleId, targetId }) => {
    const toggle = document.getElementById(toggleId);
    const targets = Array.isArray(targetId)
      ? targetId.map((id) => document.getElementById(id))
      : [document.getElementById(targetId)];
    if (!toggle || !targets) return;

    const sync = () => {
      try {
        targets.forEach((target) => (target.disabled = !toggle.checked));
      } catch (e) {}
    };

    // initial state
    sync();

    toggle.addEventListener('change', sync);
  });
};
