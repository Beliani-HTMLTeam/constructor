import { Space } from './Space.js';

export const shopNow = ({ href, cta, textColor, space = '', background = '#FD9000' }) => {
  return `
    ${Space({ insideTr: true, className: 'newsletterBottom35px', backgroundColor: background })}
    <tr>
        <td align="center" style="background-color:${background}">
            <a href="${href}" style="color:${textColor}; text-decoration: underline;">
                <span class="newsletterCta">${cta}</span>
            </a>
        </td>
    </tr>
    ${
      space != '' && space.length !== 0
        ? Space({ insideTr: true, className: `newsletterBottom${space}px`, backgroundColor: background })
        : ''
    }
  `;
};
