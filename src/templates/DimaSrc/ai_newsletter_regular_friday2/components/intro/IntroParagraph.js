import { IntroCTA } from './IntroCTA';
import { Space } from '../Space';
import { Intro } from '../Intro';

export const IntroParagraph = ({
  intro,
  queries,
  links,
  categories,
  country,
  add_utm,
  getCategoryLink,
  shopNowPhrase,
}) => {
  if (!intro || intro.type !== 'paragraph') return '';

  const {
    text,
    alignment,
    color,
    spaceTop = 'newsletterBottom35px',
    spaceBottom = 'newsletterBottom35px',
    backgroundColor,
    cta,
    additionalSpace,
    tableContainerClass
  } = intro;

  const introText = text || queries.intro || 'Translation not found';

  return `
    ${Intro({
      text: introText,
      paragraphAlign: alignment,
      color: color,
      spaceTop: spaceTop,
      spaceBottom: spaceBottom,
      backgroundColor: backgroundColor,
      tableContainerClass: tableContainerClass
    })}
    ${cta ? IntroCTA({
      cta,
      intro,
      queries,
      links,
      categories,
      country,
      add_utm,
      getCategoryLink,
      shopNowPhrase,
      backgroundColor,
      color,
    }) : ''}
    ${additionalSpace ? Space({ insideTr: true, className: additionalSpace, backgroundColor }) : ''}
  `;
};