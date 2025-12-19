import { Paragraph, Space } from '@/components';
import { GetCode } from './DimaSrc/newsletter_regular_friday/components/getCode';

export function PeakOfferPartCode({ color, data, getPhrase, queries, paragraph1, paragraph2, paragraph3, href, type }) {
  console.log('data', data, data ? 'true' : 'false');
  console.log('paragraphs', paragraph1, paragraph2, paragraph3);
  // what should be here
  const newsletter = `
    <tr>
      <td style="color: ${color}">
        ${Paragraph(data ? data[0] : paragraph1 || 'Missing Offer - part 1', 'center', `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[1] : paragraph2, 'center', `color: ${color}`)}
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
          code: queries?.codeCTA || 'Code tableQuery not found.',
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
      <td >
        ${Paragraph(data ? data[3] : paragraph3, 'center', `color: ${color}`)}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(getPhrase('Choose from:'), 'center', `color: ${color}`)}
      </td>
    </tr>
  `;
  const landing = `
    <tr>
      <td >
        ${Paragraph(data ? data[0] : paragraph1, 'center')}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[1] : paragraph2, 'center')}
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
          code: queries?.code || 'Code tableQuery not found.',
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
      <td >
        ${Paragraph(data ? data[3] : paragraph3, 'center')}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: 'newsletterBottom35px' })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(getPhrase('Choose from:'), 'center')}
      </td>
    </tr>
  `;

  //   const newsletter = `
  //   <tr>
  //     <td style="color: ${color}">
  //       ${Paragraph(paragraph1 || 'Missing Offer - part 1', 'center', `color: ${color}`)}
  //     </td>
  //   </tr>
  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Paragraph(paragraph2, 'center', `color: ${color}`)}
  //     </td>
  //   </tr>
  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${GetCode({
  //         color: color,
  //         code: ['Get code', 'Code: xxx'],
  //         link: href,
  //         type,
  //       })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Paragraph(paragraph3, 'center', `color: ${color}`)}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Paragraph(getPhrase('Choose from:'), 'center', `color: ${color}`)}
  //     </td>
  //   </tr>
  // `;
  //   const landing = `
  //   <tr>
  //     <td >
  //       ${Paragraph(paragraph1, 'center')}
  //     </td>
  //   </tr>
  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Paragraph(paragraph2, 'center')}
  //     </td>
  //   </tr>
  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${GetCode({
  //         color: color,
  //         code: ['Get code', 'Code: xxx'],
  //         link: href,
  //         type,
  //       })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Paragraph(paragraph3, 'center')}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Space({ className: 'newsletterBottom35px' })}
  //     </td>
  //   </tr>

  //   <tr>
  //     <td >
  //       ${Paragraph(getPhrase('Choose from:'), 'center')}
  //     </td>
  //   </tr>
  // `;
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${type === 'newsletter' ? newsletter : landing}
  </table>
  `;
}
