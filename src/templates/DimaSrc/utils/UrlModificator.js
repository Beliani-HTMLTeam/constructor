export const CampaignWrapper = (url, campaign_folder = '') => {
  console.log('Wrapping URL:', url, 'with folder:', campaign_folder);
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/');

  const insertIndex = pathParts.length - 1;
  pathParts.splice(insertIndex, 0, campaign_folder);
  urlObj.pathname = pathParts.join('/');

  return urlObj.toString();
};
