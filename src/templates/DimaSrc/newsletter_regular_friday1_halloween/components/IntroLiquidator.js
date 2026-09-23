import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';

const IntroLiquidator = ({
  title = 'Translation not found',
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphAlign = 'center',
  titleColor = '#000000',
  color = '#000000',
  backgroundColor = '#FFFFFF',
  additionalClass = 'newsletterParagraph'
}) => {
  console.log(title, text);
  if (String(title).trim() === '') {
    title = 'Translation not found';
  }

  if (String(text).trim() === '') {
    text = 'Translation not found';
  }

  return `
    ${spaceTop !== "0" ? Space({ className: spaceTop, insideTr: true, backgroundColor: backgroundColor }) : ''}
            
    <tr><td style="background-color: ${backgroundColor};">${Paragraph({
     text: title,
      align: paragraphAlign,
      insideTable: true,
      tableContainer: true,
      spanStyle: `color: ${titleColor};`,
      className: additionalClass 
    })}</td></tr>

    ${Space({ className: spaceBottom, insideTr: true, backgroundColor: backgroundColor })}

    <tr><td style="background-color: ${backgroundColor};">${Paragraph({
      text,
      align: paragraphAlign,
      insideTable: true,
      tableContainer: true,
      spanStyle: `color: ${color};`,
    })}</td></tr>
    
    ${ spaceBottom !== "0" ? Space({ className: spaceBottom, insideTr: true, backgroundColor: backgroundColor }) : '' }
  `;
};

export { IntroLiquidator };
