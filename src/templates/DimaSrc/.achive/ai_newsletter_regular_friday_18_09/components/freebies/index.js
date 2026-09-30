import { FreebiesProcessor } from './FreebiesProcessor';
import { FreebiesRenderer } from './FreebiesRenderer';

export const FreebiesWrapper = async ({
  freebies,
  background,
  color,
  getProductById,
  selectCampaign,
  country,
}) => {
  if (!freebies) return '';

  // Process freebies (fetch product data, apply overrides)
  const processedFreebies = await FreebiesProcessor({
    freebies,
    getProductById,
    country,
  });

  // Render freebies
  return FreebiesRenderer({
    freebies: processedFreebies,
    background,
    color,
  });
};

export { FreebiesProcessor } from './FreebiesProcessor';
export { FreebiesRenderer } from './FreebiesRenderer';
export { FreebiesSection } from './FreebiesSection';
export { FreebiesItem } from './FreebiesItem';