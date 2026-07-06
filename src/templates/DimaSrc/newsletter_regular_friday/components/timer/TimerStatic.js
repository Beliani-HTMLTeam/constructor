import { TimerStyles } from "./TimerStyles.js";

export const TimerStatic = ({
  bg = '#000000',
  color = '#ffffff',
  label = '#000000',
  containerId = 'prolo-timer-static',
  dayLabel = 'days',
  hourLabel = 'h',
  minLabel = 'm',
  secLabel = 's',
}) => {
  // Static timer values (you can make these dynamic if needed)
  const days = '07';
  const hours = '12';
  const minutes = '35';
  const seconds = '51';
  
  // Get the styles
  const styles = TimerStyles({ bg, color, label, containerId });
  
  return `
${styles}
<tr>
  <td align="center" style="padding: 10px 0;">
    <div id="${containerId}" style="display: flex; align-items: center; justify-content: center; gap: clamp(8px, 3vw, 16px); max-width: 400px; margin: 0 auto; padding: 10px 0; font-family: 'Poppins', sans-serif; font-size: clamp(14px, 2.5vw, 18px);">
      <div class="unit">
        <div class="number">${days}</div>
        <div class="label">${dayLabel}</div>
      </div>
      <div class="unit">
        <div class="number">${hours}</div>
        <div class="label">${hourLabel}</div>
      </div>
      <div class="unit">
        <div class="number">${minutes}</div>
        <div class="label">${minLabel}</div>
      </div>
      <div class="unit">
        <div class="number">${seconds}</div>
        <div class="label">${secLabel}</div>
      </div>
    </div>
  </td>
</tr>
  `;
};