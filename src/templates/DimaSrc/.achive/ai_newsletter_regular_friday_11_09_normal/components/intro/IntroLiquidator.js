import { IntroLiquidator as IntroLiquidatorComponent } from '../IntroLiquidator';

export const IntroLiquidator = ({
  intro,
  queries,
}) => {
  if (!intro || intro.type !== 'liquidator') return '';

  const {
    title,
    text,
    alignment,
    titleColor,
    color,
    spaceTop = 'newsletterBottom35px',
    spaceBottom = 'newsletterBottom35px',
    backgroundColor,
    additionalClass = null,
  } = intro;

  const introTitle = title || queries.introTitle || 'Translation not found';
  const introText = text || queries.introParagraph || 'Translation not found';

  return IntroLiquidatorComponent({
    title: introTitle,
    text: introText,
    paragraphAlign: alignment,
    titleColor: titleColor,
    color: color,
    spaceTop: spaceTop,
    spaceBottom: spaceBottom,
    backgroundColor: backgroundColor,
    additionalClass: additionalClass,
  });
};