export const renderContent = ({
  topImage,
  intro,
  timer,
  categoriesBeforeIntro,
  categoriesAfterIntro,
  introPosition,
  timerPosition,
}) => {
  const positions = {
    beforeTopImage: {
      intro: introPosition === 'beforeTopImage' ? intro : '',
      timer: timerPosition === 'beforeTopImage' ? timer : '',
    },
    afterTopImage: {
      intro: introPosition === 'afterTopImage' ? intro : '',
      timer: timerPosition === 'afterTopImage' ? timer : '',
    },
    afterFreebies: {
      intro: introPosition === 'afterFreebies' ? intro : '',
      timer: timerPosition === 'afterFreebies' ? timer : '',
    },
  };

  return [
    positions.beforeTopImage.intro,
    positions.beforeTopImage.timer,
    topImage,
    positions.afterTopImage.intro,
    positions.afterTopImage.timer,
    categoriesBeforeIntro,
    positions.afterFreebies.intro,
    positions.afterFreebies.timer,
    categoriesAfterIntro,
  ].join('');
};