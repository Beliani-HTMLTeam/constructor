export const getTextWithOverrides = ({ 
  data, 
  dataIndex, 
  defaultText, 
  overrides, 
  country, 
  overrideKey 
}) => {
  // Priority 1: If data array exists and has value at index
  if (data && data[dataIndex]) {
    return data[dataIndex];
  }
  
  // Priority 2: Check for country-specific override
  if (overrides?.[country]?.[overrideKey]) {
    return overrides[country][overrideKey];
  }
  
  // Priority 3: Default text
  return defaultText;
};