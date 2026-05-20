function accentForTheme(hex, dark) {
  if (!dark) return hex;
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (l > 0.5 ? 2 - max - min : max + min);
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d % 6) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  if (h < 0) h += 1;
  return `hsl(${Math.round(h * 360)},${Math.round(s * 60)}%,25%)`;
}

export function initCampaigns(campaigns, config) {
  const now = new Date();
  const campaigns_nodes = [];
  const campaigns_to_alarm = [];
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';

  for (const campaign of campaigns) {
    if (campaign.isArchive) {
      continue;
    }

    if ('date' in campaign) {
      const date = new Date(campaign.date);
      const difference = date - now;
      if (difference > 0) {
        const diffDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        if (diffDays <= (config?.alarm_days || 7) && campaign.alarm.isActive) {
          campaigns_to_alarm.push(campaign);
        }
      }
    }

    const option = document.createElement('option');
    option.value = campaign.startId;
    option.textContent = campaign.name + ' - ' + campaign.date;
    if (campaign.accent) {
      option.dataset.accent = campaign.accent;
      option.style.backgroundColor = accentForTheme(campaign.accent, dark);
      option.style.color = dark ? 'rgba(220,220,220,0.9)' : '';
    }
    campaigns_nodes.push(option);
  }

  for (const campaign of campaigns_to_alarm) {
    alert(campaign.alarm.description + ' ' + campaign.name + ' ' + campaign.date);
  }

  return campaigns_nodes;
}
