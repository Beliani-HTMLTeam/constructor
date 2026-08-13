import { Space } from "./Space";

const AI_CTA = ({
  href,
  text,
  color = '#000000',
  background,
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  ctaBackgroundColor = '#FFFFFF',
}) => {
return `<tr>
<td
  bgcolor="${background}"
  class="newsletterContainer"
  style="
    background-color:${background};
  "
>
  <table
    cellspacing="0"
    cellpadding="0"
    border="0"
    role="presentation"
    align="${align}"
  >
    <tr>
      <td align="${align}" style="text-align:${align};">                
        <a
        class="newsletterCtaButton"
          href="${href}"
          style="
          text-align:${align};
          background-color:${ctaBackgroundColor};
          border-color:${ctaBackgroundColor};
          color:${color};
          
          "
        >${text}</a>
      </td>
    </tr>
  </table>
</td>
</tr>`
};

export { AI_CTA };
