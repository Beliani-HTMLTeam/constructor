import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';

const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphAlign = 'center',
  color = '#000000',
}) => {
  if (String(text).trim() === '') {
    text = 'Translation not found';
  }

  return `
    ${Space({ className: spaceTop, insideTr: true })}
            
    <tr><td>${Paragraph({
      text,
      align: paragraphAlign,
      insideTable: true,
      tableContainer: true,
      spanStyle: `color: ${color};`,
    })}</td></tr>
    
    ${Space({ className: spaceBottom, insideTr: true })}
  `;
};

export { Intro };
