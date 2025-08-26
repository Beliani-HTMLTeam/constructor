export const pairToggles = () => {
  const pairs = [
    { toggleId: "specialLPToggle", targetId: "specialLPIds" },
    { toggleId: "alarmEnabled", targetId: "alarmDescription" },
  ];

  pairs.forEach(({ toggleId, targetId }) => {
    const toggle = document.getElementById(toggleId);
    const target = document.getElementById(targetId);
    if (!toggle || !target) return;

    const sync = () => {
      try {
        target.disabled = !toggle.checked;
      } catch (e) {}
    };

    // initial state
    sync();

    toggle.addEventListener("change", sync);
  });
};
