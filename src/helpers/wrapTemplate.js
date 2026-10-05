const startDate = new Date(2026, 9, 12);

const STYLE_CHUNK_SIZE = 8000;

// splits css into several <style> tags so a single tag stays small for Gmail
export function styleTags(css, chunkSize = STYLE_CHUNK_SIZE) {
  const chunks = [];
  let current = '';
  let depth = 0;
  let start = 0;

  for (let i = 0; i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}' && --depth === 0) {
      const block = css.slice(start, i + 1);
      start = i + 1;
      if (current && current.length + block.length > chunkSize) {
        chunks.push(current);
        current = '';
      }
      current += block;
    }
  }
  current += css.slice(start);
  if (current.trim()) chunks.push(current);

  return chunks.map((chunk) => `<style>${chunk}</style>`).join('');
}

export function wrapTemplate(campaign, data) {
  const document = new DOMParser().parseFromString(campaign, 'text/html');
  document.body.innerHTML = data.html;
  document.head.innerHTML += styleTags(data.style);
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

  console.log("getWrapperForCampaign", campaignDate, isWhiteWrapperCampaign(campaignDate))

  return isWhiteWrapperCampaign(campaignDate) ? wrapper.replaceAll('#ececec', '#ffffff') : wrapper;
}

export function getWrapperCssForCampaign(css, campaignDate) {
  return isWhiteWrapperCampaign(campaignDate) ? css + '\n.newsletterFooterCompanyDetails { background: #FFCCB7 !important; }' : css;
}
