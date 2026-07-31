import { Space } from './Space.js';

/**
 * Button-style CTA component — renders a filled button instead of underlined text.
 * Use this for designs that require button CTAs (new design style from Claude Design).
 *
 * Email-safe: uses VML for Outlook, border-based technique for other clients.
 *
 * @param {Object} options
 * @param {string} options.text - Button text (e.g. "Shop now")
 * @param {string} options.href - Button link URL
 * @param {string} [options.bgColor='#000000'] - Button background color
 * @param {string} [options.textColor='#ffffff'] - Button text color
 * @param {string} [options.borderRadius='4'] - Border radius in px
 * @param {string} [options.width='auto'] - Button width ('auto' or px value like '200')
 * @param {string} [options.align='center'] - Alignment: 'left', 'center', 'right'
 * @param {string} [options.fontSize='14'] - Font size in px
 * @param {string} [options.paddingV='12'] - Vertical padding in px
 * @param {string} [options.paddingH='32'] - Horizontal padding in px
 * @param {string} [options.spaceBefore] - Space class before button (e.g. 'newsletterBottom35px')
 * @param {string} [options.spaceAfter] - Space class after button (e.g. 'newsletterBottom35px')
 */
export const ButtonCTA = ({
  text,
  href,
  bgColor = '#000000',
  textColor = '#ffffff',
  borderRadius = '4',
  width = 'auto',
  align = 'center',
  fontSize = '14',
  paddingV = '12',
  paddingH = '32',
  spaceBefore,
  spaceAfter,
}) => {
  const space_1 = spaceBefore ? Space({ className: spaceBefore }) : '';
  const space_2 = spaceAfter ? Space({ className: spaceAfter }) : '';

  const widthAttr = width !== 'auto' ? `width="${width}"` : '';
  const widthStyle = width !== 'auto' ? `width: ${width}px;` : '';

  const buttonInner = `
    <table align="${align}" cellspacing="0" cellpadding="0" border="0" role="presentation">
      <tr>
        <td align="center" ${widthAttr} style="${widthStyle} background-color: ${bgColor}; border-radius: ${borderRadius}px; padding: ${paddingV}px ${paddingH}px; mso-padding-alt: 0;">
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:${parseInt(paddingV) * 2 + parseInt(fontSize) + 6}px;v-text-anchor:middle;${width !== 'auto' ? `width:${width}px;` : ''}" arcsize="${Math.round((parseInt(borderRadius) / ((parseInt(paddingV) * 2 + parseInt(fontSize) + 6))) * 100)}%" strokecolor="${bgColor}" fillcolor="${bgColor}">
            <w:anchorlock/>
            <center style="color:${textColor};font-family:'Open Sans',Arial,sans-serif;font-size:${fontSize}px;font-weight:600;">
              ${text}
            </center>
          </v:roundrect>
          <![endif]-->
          <!--[if !mso]><!-->
          <a href="${href}" target="_blank" style="display: inline-block; color: ${textColor}; text-decoration: none; font-family: 'Open Sans', Arial, sans-serif; font-size: ${fontSize}px; font-weight: 600; line-height: 1.2; letter-spacing: 0.5px;">
            ${text}
          </a>
          <!--<![endif]-->
        </td>
      </tr>
    </table>
  `;

  return space_1 + buttonInner + space_2;
};
