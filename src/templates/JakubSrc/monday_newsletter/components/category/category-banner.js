// Category data is already translated by CategoriesHandler.
export const render = ({ category, href, ctaHref, getPhrase }) => {
  const background = category.background ?? '#FAF1F0';
  const color = category.color ?? '#000000';
  const ctaColor = category.cta?.color ?? color;
  const title = category.name ?? '';
  const ctaText = category.ctaText ?? category.cta?.text ?? getPhrase(category.cta?.phrase ?? 'Shop now');
  return `<tr><td bgcolor="${background}" style="background-color:${background};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;font-family:Arial,sans-serif;">
      ${category.src ? `<tr><td colspan="2" style="font-size:0;line-height:0;mso-line-height-rule:exactly;">
        <a href="${href}" style="display:block;text-decoration:none;"><img src="${category.src}" alt="${title}" width="650" border="0" style="display:block;width:100%;max-width:650px;height:auto;border:0;background-color:${background};-ms-interpolation-mode:bicubic;"></a>
      </td></tr>` : ''}
      <tr>
        <td width="70%" valign="top" class="categoryBannerTitle" style="width:70%;padding:20px 12px 56px 24px;font-size:24px;font-size:clamp(14px, 3.6vw, 24px);line-height:1.25;font-weight:600;text-transform:uppercase;overflow-wrap:anywhere;color:${color};">${title}</td>
        <td width="30%" align="right" valign="top" class="categoryBannerCtaCell" style="width:30%;padding:20px 24px 56px 0;line-height:1.25;">
          ${category.cta === false ? '' : `<a class="categoryBannerCta" href="${ctaHref}" style="font-size:18px;font-size:clamp(12px, 3vw, 18px);line-height:1.25;overflow-wrap:anywhere;text-decoration:underline;color:${ctaColor};">${ctaText}</a>`}
        </td>
      </tr>
    </table>
  </td></tr>`;
};
