import { getState } from '@/main/state/appState';
import { GetCode } from '../../getCode';
import { Paragraph } from '../../Paragraph';
import { Space } from '../../Space';
import FreebiesGenerator from '@/components/FreebiesGenerator';

const NewsletterOfferPart = ({
  isMonday = false,
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
  germanSeparatingLine = false,
  spaceClass = 'newsletterBottom35px',
  isSpaceBetweenAllParts = false,
  spanStyle = '',
}) => {
  const isSeparationLine = germanSeparatingLine && ['CHDE', 'AT', 'DE'].includes(getState('country'))

  const offerPartContent = 
  isMonday ? `
  ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
<tr>
  <td style="color: ${color}; text-align: center;">
  ${Paragraph({ text: data ? data[0] : paragraph1, align: 'center', color})}
  </td>
</tr>
${Space({ insideTr: true, className: 'newsletterBottom35px' })}

<tr>
  <td style="color: ${color}; text-align: center;">
  ${Paragraph({ text: data ? data[1] : paragraph1, align: 'center', color })}
  </td>
</tr>
${Space({ insideTr: true, className: 'newsletterBottom35px' })}

<tr>
  <td >
    ${GetCode({
      color: color,
      code: queries?.codeCTA || 'Code tableQuery not found.',
      link: href,
      type,
    })}
  </td>
</tr>

${Space({ insideTr: true, className: 'newsletterBottom35px' })}

<tr>
  <td style="color: ${color}; text-align: center;">
    ${Paragraph({ text: data ? data[3] : paragraph3, align: 'center', color })}
  </td> 
</tr>

${Space({ insideTr: true, className: 'newsletterBottom35px' })}

<tr>
  <td style="color: ${color}; text-align: center;">
    ${Paragraph({ text: data ? data[6] : paragraph3, align: 'center', color })}
  </td> 
</tr>

${Space({ insideTr: true, className: 'newsletterBottom35px' })}
`
 :`
      ${Space({ insideTr: true, className: spaceClass })}
    <tr>
      <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: data ? data[0] : paragraph1, align: 'center', color })}
      </td>
    </tr>
    ${isSpaceBetweenAllParts ? Space({ insideTr: true, className: spaceClass }) : ''}
  
    <tr>
      <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: data ? data[1] : paragraph1, align: 'center', color })}
      </td>
    </tr>
    ${ isSeparationLine ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}
    ${ isSpaceBetweenAllParts ? Space({ insideTr: true, className: 'newsletterBottom25px' }) : ''}
    <tr>
      <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: data ? data[2] : paragraph2, align: 'center', color })}
      </td>
    </tr>
    ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
  
    <tr>
      <td >
        ${GetCode({
          color: color,
          code: queries?.codeCTA || 'Code tableQuery not found.',
          link: href,
          type,
        })}
      </td>
    </tr>
  
    ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
    
    <tr>
      <td style="color: ${color}; text-align: center;">
        ${Paragraph({ text: data ? data[4] : paragraph3, align: 'center', color, spanStyle })}
      </td> 
    </tr>
  
    ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
  `;

  return offerPartContent
};

const LandingOfferPart = ({
  isMonday = false,
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
  germanSeparatingLine = false,
  spaceClass = 'newsletterBottom35px',
  isSpaceBetweenAllParts = false,
  spanStyle = '',
  copyCodeColor,
  copyCodeLabel = '',
}) => {
  const isSeparationLine = germanSeparatingLine && ['CHDE', 'AT', 'DE'].includes(getState('country'))

  const offerPartContent = 
  isMonday ? `
  <tr>
  <td >
  ${Space({ className: 'newsletterBottom35px' })}
  </td>
</tr>
<tr>
  <td  style="color: ${color}; text-align: center;">
  ${Paragraph({ text: data ? data[0] : paragraph1, align: 'center', color })}
  </td>
</tr>
<tr>
  <td >
    ${Space({ className: 'newsletterBottom35px' })}
  </td>
</tr>

<tr>
  <td style="color: ${color}; text-align: center;">
   ${Paragraph({ text: data ? data[1] : paragraph2, align: 'center', color })}
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
      code: queries?.code || 'Code tableQuery not found.',
      link: href,
      type,
      showCopyCode: true,
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
    ${Paragraph({ text: data ? data[3] : paragraph3, align: 'center', color })}
  </td>
</tr>

<tr>
  <td >
    ${Space({ className: 'newsletterBottom35px' })}
  </td>
</tr>
<tr>
  <td style="color: ${color}; text-align: center;" >
    ${Paragraph({ text: data ? data[6] : paragraph3, align: 'center', color })}
  </td>
</tr>

<tr>
  <td >
    ${Space({ className: 'newsletterBottom35px' })}
  </td>
</tr>
  `
  :
  `
    <tr>
    <td >
    ${Space({ className: spaceClass })}
    </td>
  </tr>
  <tr>
    <td  style="color: ${color}; text-align: center;">
    ${Paragraph({ text: data ? data[0] : paragraph1, align: 'center', color })}
    </td>
  </tr>
  <tr>
    <td >
      ${isSpaceBetweenAllParts ? Space({ className: spaceClass }) : ''}
    </td>
  </tr>
  
  <tr>
    <td style="color: ${color}; text-align: center;">
     ${Paragraph({ text: data ? data[1] : paragraph2, align: 'center', color })}
    </td>
  </tr>
  ${ isSeparationLine ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}
  ${ isSpaceBetweenAllParts ? Space({ insideTr: true, className: 'newsletterBottom25px' }) : ''}
  <tr>
    <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: data ? data[2] : paragraph2, align: 'center', color })}
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
        code: queries?.code || 'Code tableQuery not found.',
        link: href,
        type,
        showCopyCode: true,
        copyCodeColor,
        copyCodeLabel,
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
      ${Paragraph({ text: data ? data[4] : paragraph3, align: 'center', color, spanStyle })}
    </td>
  </tr>
  
  <tr>
    <td >
      ${Space({ className: 'newsletterBottom35px' })}
    </td>
  </tr>
    `;

  return offerPartContent
};
export { NewsletterOfferPart, LandingOfferPart };
