import { Space } from '../../newsletter_26122025/components/Space.js';
import { Paragraph } from '../../newsletter_26122025/components/Paragraph.js';

const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphAlign = 'center',
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
    })}</td></tr>
    
    ${Space({ className: spaceBottom, insideTr: true })}
  `;
};

export { Intro };
