const startDate = new Date(2026, 9, 12);

export function wrapTemplate(campaign, data) {
  const document = new DOMParser().parseFromString(campaign, 'text/html');
  document.body.innerHTML = data.html;
  document.head.innerHTML += '<style>' + data.style + '</style>';
  const doctype = new XMLSerializer().serializeToString(document.doctype);
  return doctype + document.documentElement.outerHTML;
}

export function isWhiteWrapperCampaign(campaignDate) {
  if (typeof campaignDate !== 'string') return false;

  const [day, month, year] = campaignDate.split('.').map(Number);
  if (!day || !month || !year) return false;

  return new Date(year, month - 1, day) >= startDate;
}

export function getWrapperForCampaign(wrapper, campaignDate) {
  if (!wrapper) return wrapper;

  return isWhiteWrapperCampaign(campaignDate) ? wrapper.replaceAll('#ececec', '#ffffff') : wrapper;
}

export function getWrapperCssForCampaign(css, campaignDate) {
  return isWhiteWrapperCampaign(campaignDate) ? css + '\n.newsletterFooterCompanyDetails { background: #ffffff !important; }' : css;
}
