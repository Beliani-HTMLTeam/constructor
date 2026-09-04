import { Space } from '../components/Space';

export const liquidatorContact = ({
  category,
  buttonText = 'Translation not found',
  buttonHref = 'https://drive.google.com/drive/folders/1DGaAS71aZM1K6m61Uzla0oRp_ntV6wna',
  color = '#000000',
  background = '#f8f8f8',
  phone = '+49 89 20000390',
  email = 'liquidator@beliani.info',
}) => {
  return `
    <tr>
    <td style="color: ${color}; background: ${background};" align="center">
    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 650px;" role="presentation">
      <tr>
      <td>
      <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse: collapse;">
        <tr>
          <!-- LEFT: tall image (spans both rows via rowspan) -->
          <td valign="top" rowspan="2">
           <a href="#"> <img 
              src="${category.interested[0].src.src || category.interested[0].src}"
              alt="Interested" 
              width="100%"
              style="display: block; width: 100%; height: auto;"
            >
            </a>
          </td>
          <!-- TOP RIGHT: image 2 -->
          <td valign="top">
          <a href="tel:${phone}" style="display: block; text-decoration: none;">
            <img 
              src="${category.interested[1].src.src || category.interested[1].src}"
              alt="Interested" 
              width="100%"
              style="display: block; width: 100%; height: auto;"
            >
            </a>
          </td>
        </tr>
        <tr>
          <!-- BOTTOM RIGHT: image 3 -->
          <td valign="top">
          <a href="mailto:${email}" style="display: block; text-decoration: none;">
            <img 
              src="${category.interested[2].src.src || category.interested[2].src}"
              alt="Interested" 
              width="100%"
              style="display: block; width: 100%; height: auto;"
            >
            </a>
          </td>
        </tr>
      </table>
    </td>
      </tr>
      ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
      <tr>
        <td align="center" class="newsletterContainer">
          <a href="${buttonHref}" target="_blank">
            <img 
              src="${category.buttonSrc.src || category.buttonSrc}"
              alt="Interested" 
              style="display: block; max-width: 100%; height: auto;"
              width="100%"
            >
          </a>
        </td>
      </tr>
      ${Space({ insideTr: true, className: 'newsletterBottom80px' })}
    </table>
  </td>
    </tr>`;
};