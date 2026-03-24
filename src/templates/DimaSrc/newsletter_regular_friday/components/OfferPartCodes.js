import { GetCode } from './getCode.js';
import { Paragraph } from './Paragraph.js';
import { Space } from './Space.js';

// Helper do renderowania pojedynczego bloku (paragraf + odstęp)
function renderBlock({ content, spaceAfter, isTitle, color }) {
  console.log('renderBlock', content)
  // Jeśli nie ma treści, nie renderuj nic
  if (!content) return '';

  //   paragraph, align = 'left', style, type = 'standard'

  // Lokalna wersja użycia w stylu klasycznym (bez polegania na hybrydowym wywołaniu funkcji)
  const paragraphHtml = Paragraph(
   { text: content,
    align: 'center',
    insideTr: true,
    color} );

  const spaceHtml = Space({ className: `newsletterBottom${spaceAfter}` });

  return `
    ${paragraphHtml}
    <tr>
      <td>${spaceHtml}</td>
    </tr>
  `;
}

// Zoptymalizowany komponent
export function OfferPartCodes({ color, data, data2, queries, href, type }) {
  // console.log('OFFER PART --- ');
  console.log('data1: ', data);
  console.log('data2: ', data2);
  console.log("QUERIES: ", queries);

  // Tworzymy jedną, wspólną tablicę z danymi, aby uniknąć skomplikowanej logiki warunkowej
  // console.log(data, data2);
  const paragraphs = data || [];
  const codes = data2 || [];

  // Definiujemy strukturę jako tablicę konfiguracji
  const layoutConfig = [
    { content: paragraphs[0], spaceAfter: type === 'newsletter' ? '20px' : '20px' },
    { type: 'code', content: codes[0], spaceAfter: '35px', for: 'landing' },
    { content: paragraphs[1], spaceAfter: type === 'newsletter' ? '20px' : '20px' },
    { type: 'code', content: codes[1], spaceAfter: '35px', for: 'landing' },
    { content: paragraphs[2], spaceAfter: type === 'newsletter' ? '20px' : '20px' },
    { type: 'code', content: codes[2], spaceAfter: '35px', for: 'landing' },
  ];

  // console.log(layoutConfig);

  const contentHtml = layoutConfig
    .filter((block) => !block.for || block.for === type) // Filtruj bloki przeznaczone tylko dla danego typu
    .map((block) => {
      // Renderowanie specjalnych bloków
      if (block.type === 'code') {
        return renderBlock({ ...block, content: block.content, color });
      }
      // Renderowanie domyślnych bloków
      return renderBlock({ ...block, color });
    })
    .join('');

  // Specjalna sekcja CTA tylko dla newslettera
  const newsletterCta = `
    <tr>
      <td>
        ${GetCode({
          color: color,
          code: queries['codeCTA'] || 'Code tableQuery not found.',
          link: href,
          type,
        })}
      </td>
    </tr>
    <tr>
      <td>${Space({ className: 'newsletterBottom20px' })}</td>
    </tr>
  `;

  // console.log("CTA: ", newsletterCta);

  const finalParagraph = renderBlock({
    content: paragraphs[3],
    spaceAfter: '0px', // Bez dodatkowego odstępu na końcu
    color,
  });

  return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
      ${contentHtml}
      ${type === 'newsletter' ? newsletterCta : ''}
      ${finalParagraph}
      ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
    </table>
  `;
}
