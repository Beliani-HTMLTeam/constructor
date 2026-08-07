export const BulletproofButton = ({
  href,
  text,
  background = '#750000',
  color = '#FFFFFF',
  align = 'center',
  radius = 4,
  fontSize = 14,
  fontWeight = 600,
  lineHeight = 1.2,
  paddingX = 20,
  paddingY = 11,
}) => `
  <table
    cellspacing="0"
    cellpadding="0"
    border="0"
    role="presentation"
    align="${align}"
  >
    <tr>
      <td
        align="${align}"
        style="text-align:${align};"
      >
        <a
          href="${href}"
          target="_blank"
          style="
            display:inline-block;
            background-color:${background};
            border-style:solid;
            border-color:${background};
            border-top-width:${paddingY}px;
            border-bottom-width:${paddingY}px;
            border-left-width:${paddingX}px;
            border-right-width:${paddingX}px;
            border-radius:${radius}px;
            color:${color};
            font-family:Arial, sans-serif;
            font-size:${fontSize}px;
            line-height:${lineHeight};
            font-weight:${fontWeight};
            text-align:center;
            text-decoration:none;
            white-space:nowrap;
            mso-line-height-rule:exactly;
            -webkit-text-size-adjust:none;
          "
        >${text}</a>
      </td>
    </tr>
  </table>
`;