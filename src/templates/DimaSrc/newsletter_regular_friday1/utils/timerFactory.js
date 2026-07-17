import { TIMER_DEFAULTS } from "./timerConfig";

export const createTimer = ({
  deadline = TIMER_DEFAULTS.deadline,
  freebies = null,
  background = TIMER_DEFAULTS.background,
  color = TIMER_DEFAULTS.textColor,
  timerBg = TIMER_DEFAULTS.bg,
  timerColor = TIMER_DEFAULTS.color,
  timerLabel = TIMER_DEFAULTS.label,
  isCtaVisible = true,
  isWithTitles = true,
  position = 'outsideTopImageTitle',
  overrides = {},
}) => {
  return {
    position,
    freebies,
    isCtaVisible,
    isWithTitles,
    background,
    color,
    timerBg,
    timerColor,
    timerLabel,
    deadline,
    overrides,
  };
};