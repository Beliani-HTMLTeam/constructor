const CTA = ({
  href,
  text,
  color = '#000000',
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  bg = '',
  variant = 'underline',
  bgColor = '#FF2D00',
  textColor = '#FFFFFF',
  className = 'newsletterCta',
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  if (variant === 'underline') {
    html = `<a style="color: ${color}; text-decoration: underline;" href="${href}"><span class="${className}">${text}</span></a>`;
  } else {
    html = `
      <!--[if mso]>
      <table cellspacing="0" cellpadding="0" border="0" align="${align}" style="margin: 0 auto;">
        <tr>
          <td align="center" bgcolor="${bgColor}" style="background-color: ${bgColor};">
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="0%" stroke="f" fillcolor="${bgColor}">
              <w:anchorlock/>
              <center style="color:${textColor};font-family:'Open Sans',Arial,sans-serif;font-size:16px;font-weight:600;letter-spacing:1.5px;">${text}</center>
            </v:roundrect>
          </td>
        </tr>
      </table>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="${href}" target="_blank" style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; font-weight: 600; color: ${textColor} !important; background-color: ${bgColor}; text-decoration: none; display: inline-block; padding: 15px 45px; letter-spacing: 1.5px; white-space: nowrap;">
        <span class="${className}" style="color: ${textColor} !important;">${text}</span>
      </a>
      <!--<![endif]-->
    `;
  }

  let style = '';
  if (bg) {
    style += `background-color: ${bg};`;
  }

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} ${style ? `style="${style}"` : ''} align="${align}">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error('Cannot have both insideTr and insideTable set to true - its handled automatically.');
    }
    html = `<table ${tableAttributes}><tr><td ${tableContainer ? ' class="newsletterContainer"' : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { CTA };