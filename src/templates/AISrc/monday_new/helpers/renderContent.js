export const renderContent = ({
  topImage,
  intro,
  timer,
  categoriesBeforeIntro,
  categoriesAfterIntro,
  introPosition,
  timerPosition,
}) => {
  const afterFreebies = introPosition === 'afterFreebies';
  const afterIntro = timerPosition === 'afterIntro';

  const introWithTimer = `${intro}${afterIntro ? timer : ''}`;

  return [
    topImage,
    afterIntro ? '' : timer,
    afterFreebies ? '' : introWithTimer,
    categoriesBeforeIntro,
    afterFreebies ? introWithTimer : '',
    categoriesAfterIntro,
  ].join('');
};
