import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';

const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphAlign = 'center',
  paragraphColor = '#000000',
}) => {
  if (String(text).trim() === '') {
    text = 'Translation not found';
  }

  return `
    ${Space({ className: spaceTop, insideTr: true })}
            
    <tr><td>${Paragraph({
      text,
      align: paragraphAlign,
      color: paragraphColor,
      insideTable: true,
      tableContainer: true,
    })}</td></tr>
    
    ${Space({ className: spaceBottom, insideTr: true })}
  `;
};

export { Intro };
