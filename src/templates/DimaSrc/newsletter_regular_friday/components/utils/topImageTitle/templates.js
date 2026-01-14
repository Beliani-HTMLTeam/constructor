import { includesKeywords } from '../../../utils/basic';

export const templates = ({ color, title1, title2 }) => ({
  up_to: `
      <h4 style="color:${color};" class="${
    includesKeywords(title1) ? 'newsletterTitleH1' : 'newsletterTitleH2'
  }">${title1}</h4>
      <h5 style="color:${color};" class="${includesKeywords(title2) ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${
    title2 ?? ''
  }</h5>
    `,
  up_to_bigger: `
      <h4 style="color:${color};" class="${
    includesKeywords(title1) ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'
  }">${title1}</h4>
      <h5 style="color:${color};" class="${
    includesKeywords(title2) ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'
  }">${title2 ?? ''}</h5>
    `,
  line2bigger: `
      <h4 style="color:${color};" class="${
    includesKeywords(title1) ? 'newsletterTitleH2BoldBigger' : 'newsletterTitleH1Bold'
  }">${title1}</h4>
      <h4 style="color:${color};" class="${
    includesKeywords(title2) ? 'newsletterTitleH2BoldBigger' : 'newsletterTitleH1Bold'
  }">${title2}</h4>
    `,
  standard: `
      <h5 style="color:${color};" class="newsletterTitleH1">${title1}</h5>
      <h4 style="color:${color};" class="newsletterTitleH2">${title2}</h4>
    `,
  twoSameLines: `
      <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
      <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h4>
    `,
  twoSameSemiBoldLines: `
    <h4 style="color:${color}; font-weight: 600;" class="newsletterTitleH1">${title1}</h4>
    <h4 style="color:${color}; font-weight: 600;" class="newsletterTitleH1">${title2}</h4>
  `,
  singleLine: `
      <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
    `,
  halloween: `
      <h4 style="color:${color};" class="${
    String(title1).toLowerCase().includes('halloween') ? 'newsletterTitleH1' : 'newsletterTitleH2'
  }">${title1}</h4>
      <h4 style="color:${color};" class="${
    String(title2).toLowerCase().includes('halloween') ? 'newsletterTitleH1' : 'newsletterTitleH2'
  }">${title2}</h4>
    `,
});
