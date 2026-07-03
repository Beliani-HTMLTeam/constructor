export const TimerStyles = ({
  bg = '#000000',
  color = '#ffffff',
  label = '#000000',
  containerId = 'prolo-timer',
}) => {
  return `
<style>
  #${containerId} {
    --timer-bg: ${bg};
    --timer-numbers: ${color};
    --timer-label: ${label};
    max-width: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 3vw, 16px);
    font-family: "Poppins", sans-serif;
    font-size: clamp(14px, 2.5vw, 18px);
  }
  #${containerId} .unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 0;
  }
  #${containerId} .unit .number {
    background: var(--timer-bg);
    color: var(--timer-numbers);
    font-size: clamp(28px, 8vw, 48px);
    font-weight: 700;
    width: 100%;
    aspect-ratio: 4 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    max-width: 100px;
  }
  #${containerId} .unit .label {
    color: var(--timer-label);
    font-size: clamp(11px, 2vw, 14px);
    margin-top: clamp(2px, 1vw, 4px);
  }
</style>
  `;
};