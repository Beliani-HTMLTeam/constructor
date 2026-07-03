import { TimerScript } from "./TimerScript";
import { TimerStyles } from "./TimerStyles";

export const TimerHtml = ({
  deadline,
  timezone,
  bg = '#000000',
  color = '#ffffff',
  label = '#000000',
  containerId = 'prolo-timer',
  dayLabel = 'days',
  hourLabel = 'h',
  minLabel = 'm',
  secLabel = 's',
  showLoading = false,
}) => {
  const styles = TimerStyles({ bg, color, label, containerId });
  const script = TimerScript({
    deadline,
    timezone,
    containerId,
    dayLabel,
    hourLabel,
    minLabel,
    secLabel,
  });
  
  return `
  ${styles}

      <tr>
        <td id="${containerId}" align="center" style="padding: 10px 0; font-family: 'Poppins', sans-serif; font-size: 16px; color: ${label};">
          ${showLoading ? 'Loading...' : ''}
        </td>
      </tr>

  ${script}
  `;
};