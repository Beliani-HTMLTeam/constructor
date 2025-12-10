import { GetCode } from '@/components';
import { Paragraph } from '../../Paragraph';
import { Space } from '../../Space';

const NewsletterOfferPart = ({
  color,
  data,
  getPhrase,
  queries,
  paragraph1,
  paragraph2,
  paragraph3,
  href,
  type,
  backgroundColor,
}) => {
  console.log('paragraphs in newsletter: ', paragraph1, paragraph2, paragraph3);
  console.log('data', data ? data[0] : paragraph1 || 'Missing Offer - part 1');
  return `
    <tr>
      <td >
      ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>
    <tr>
      <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: data ? data[0] : paragraph1, align: 'center' })}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>
  
    <tr>
      <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: data ? data[2] : paragraph2, align: 'center' })}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>
  
    <tr>
      <td >
        ${GetCode({
          color: color,
          // code: queries?.codeCTA || 'Code tableQuery not found.',
          code: 'Get code',
          link: href,
          type,
        })}
      </td>
    </tr>
  
    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>
    
    <tr>
      <td style="color: ${color}; text-align: center;">
        ${Paragraph({ text: data ? data[3] : paragraph3, align: 'center' })}
      </td> 
    </tr>
  
    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>
  `;
};

const LandingOfferPart = ({
  color,
  data,
  getPhrase,
  queries,
  paragraph1,
  paragraph2,
  paragraph3,
  href,
  type,
  backgroundColor,
}) => {
  console.log('paragraphs in newsletter: ', paragraph1, paragraph2, paragraph3);
  console.log('data in lp', data ? data[0] : paragraph1 || 'Missing Offer - part 1');
  return `
    <tr>
    <td >
    ${Space({ className: 'newsletterBottom35px' })}
    </td>
  </tr>
  <tr>
    <td  style="color: ${color}; text-align: center;">
    ${Paragraph({ text: data ? data[0] : paragraph1, align: 'center' })}
    </td>
  </tr>
  <tr>
    <td >
      ${Space({ className: 'newsletterBottom35px' })}
    </td>
  </tr>
  
  <tr>
    <td style="color: ${color}; text-align: center;">
     ${Paragraph({ text: data ? data[1] : paragraph2, align: 'center' })}
    </td>
  </tr>
  <tr>
    <td style="color: ${color}; text-align: center;">
      ${Space({ className: 'newsletterBottom35px' })}
    </td>
  </tr>
  
  <tr>
    <td >
      ${GetCode({
        color: color,
        // code: queries?.codeCTA || 'Code tableQuery not found.',
        code: 'xxx',
        link: href,
        type,
      })}
    </td>
  </tr>
  
  <tr>
    <td >
      ${Space({ className: 'newsletterBottom35px' })}
    </td>
  </tr>
  
  <tr>
    <td style="color: ${color}; text-align: center;" >
      ${Paragraph({ text: data ? data[3] : paragraph3, align: 'center' })}
    </td>
  </tr>
  
  <tr>
    <td >
      ${Space({ className: 'newsletterBottom35px' })}
    </td>
  </tr>
    `;
};
export { NewsletterOfferPart, LandingOfferPart };
