export function parseCampaignDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null;
  
  const parts = dateStr.split('.');
  
  if (parts.length !== 3) return null;
  
  const [day, month, year] = parts;
  const dt = new Date(`${year}-${month}-${day}`);
  
  if (Number.isNaN(dt.getTime())) return null;
  
  return dt;
}

export function formatMb(value) {
  if (Number.isNaN(value) || !Number.isFinite(value)) return '0.00';
  
  return value.toFixed(3);
}
