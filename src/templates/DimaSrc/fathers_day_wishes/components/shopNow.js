import { Space } from './Space.js';

export const shopNow = ({ href, cta, textColor, space = '', backgorund = '#FD9000' }) => {
  return `
        
            <tr>
                <td align="center" style="background-color:${backgorund}">
                    ${Space({ className: 'newsletterBottom35px' })}
                </td>
            </tr>
            <tr>
                <td align="center" style="background-color:${backgorund}">
                    <a href="${href}" style="color:${textColor}; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                    </a>
                </td>
            </tr>
            ${
              space != '' && space.length !== 0
                ? `<tr >
                    <td style="background-color:${backgorund}" class="newsletterBottom${space}px"></td>
                 </tr>
                `
                : ''
            }
            
       
    `;
};
