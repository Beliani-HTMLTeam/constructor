import { Intro } from '../Intro.js';
import { IntroCTA } from './IntroCTA';
import { Space } from '../Space';
import { templates as TopImageTitleTemplates } from '../utils/topImageTitle/templates.js';
import { Paragraph } from '../Paragraph.js';
import { TopImageTitle } from '../TopImageTitle.js';

export const IntroTiT = ({
  type,
  intro,
  queries,
  links,
  categories,
  country,
  add_utm,
  getCategoryLink,
  shopNowPhrase,
}) => {
  if (!intro || intro.type !== 'withTopImageTitle') return '';
  
  const {
    container,
    text,
    alignment,
    color,
    spaceTop = 'newsletterBottom35px',
    spaceBottom = 'newsletterBottom35px',
    backgroundColor,
    cta,
    additionalSpace,
    topImageTitle,
  } = intro;
  
  const templates = TopImageTitleTemplates({ color, title1: queries.TopImageTitle[0] || '', title2: queries.TopImageTitle[1] || '', title3: queries.TopImageTitle[2] || '' });

  const introText = text || queries.intro || 'Translation not found';
  TopImageTitle
  return `
  ${TopImageTitle({
    href: links.TopImageTitle_href,
    src: links.TopImageTitle_src,
    title1: queries.TopImageTitle[0] || '',
    title2: queries.TopImageTitle[1] || '',
    title3: queries.TopImageTitle[2] || '',
    color,
    type: topImageTitle || 'twoSameLines',
    renderType: type,
    backgroundColor,
  })}
  <tr><td style="background-color: ${backgroundColor};" class="newsletterContainer">${Paragraph({
    text:  queries.intro || 'Translation not found',
    align: 'center',
    insideTable: true,
    tableContainer: false,
    spanStyle: `color: ${color};`,
  })}</td></tr>
  ${Space({ insideTr: true, className: "newsletterBottom35px", backgroundColor })}
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