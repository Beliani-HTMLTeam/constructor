import { getState } from '@/main/state/appState';
import { GetCode } from '../../getCode';
import { Paragraph } from '../../Paragraph';
import { Space } from '../../Space';
import FreebiesGenerator from '@/components/FreebiesGenerator';

const NewsletterOfferPart = ({
  country,
  color,
  data,
  getPhrase,
  queries,
  paragraph1 = 'Default paragraph 1',
  paragraph2 = 'Default paragraph 2',
  paragraph3 = 'Default paragraph 3',
  href,
  type,
  backgroundColor,
  germanSeparatingLine = false,
  spaceClass = 'newsletterBottom35px',
  isSpaceBetweenAllParts = false,
  spanStyle = '',
  overrides = {},
}) => {
  const isSeparationLine = germanSeparatingLine && ['CHDE', 'AT', 'DE'].includes(getState('country'))

  const getText = (dataIndex, defaultText, overrideKey) => {
    if (overrides?.[country]?.[overrideKey]) return overrides[country][overrideKey];
    if (data && data[dataIndex]) return data[dataIndex];
    return defaultText;
  };

  const offerPartContent = 
  `
      ${Space({ insideTr: true, className: spaceClass })}
    <tr>
      <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: getText(0, paragraph1, 'offerPart1'), align: 'center', color })}
      </td>
    </tr>
    ${isSpaceBetweenAllParts ? Space({ insideTr: true, className: spaceClass }) : ''}
  
    <tr>
      <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: data ? data[1] : paragraph1, align: 'center', color })}
      </td>
    </tr>
    ${ isSeparationLine ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}
    ${ isSpaceBetweenAllParts ? Space({ insideTr: true, className: spaceClass }) : ''}
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
  country,
  color,
  data,
  getPhrase,
  queries,
  href,
  type,
  paragraph1 = 'Default paragraph 1',
  paragraph2 = 'Default paragraph 2',
  paragraph3 = 'Default paragraph 3',
  backgroundColor,
  germanSeparatingLine = false,
  spaceClass = 'newsletterBottom35px',
  isSpaceBetweenAllParts = false,
  spanStyle = '',
  copyCodeColor,
  copyCodeLabel = '',
  overrides = {},
}) => {
  const isSeparationLine = germanSeparatingLine && ['CHDE', 'AT', 'DE'].includes(getState('country'))

  const getText = (dataIndex, defaultText, overrideKey) => {
    if (overrides?.[country]?.[overrideKey]) return overrides[country][overrideKey];
    if (data && data[dataIndex]) return data[dataIndex];
    return defaultText;
  };

  const offerPartContent = 
  `
    <tr>
    <td >
    ${Space({ className: spaceClass })}
    </td>
  </tr>
  <tr>
    <td  style="color: ${color}; text-align: center;">
    ${Paragraph({ text: getText(0, paragraph1, 'offerPart1'), align: 'center', color })}
    </td>
  </tr>
  <tr>
    <td >
      ${isSpaceBetweenAllParts ? Space({ className: spaceClass }) : ''}
    </td>
  </tr>
  
  <tr>
    <td style="color: ${color}; text-align: center;">
     ${Paragraph({ text: getText(1, paragraph2, 'offerPart2'), align: 'center', color })}
    </td>
  </tr>
  ${ isSeparationLine ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}
  ${ isSpaceBetweenAllParts ? Space({ insideTr: true, className: spaceClass }) : ''}
  <tr>
    <td style="color: ${color}; text-align: center;">
      ${Paragraph({ text: getText(2, paragraph2, 'offerPart3'), align: 'center', color })}
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
