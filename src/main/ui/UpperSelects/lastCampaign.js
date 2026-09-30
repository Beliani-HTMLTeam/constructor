const STORAGE_KEY = 'constructor_last_campaign';

export function saveLastCampaign(scope, startId) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ scope, startId }));
  } catch {
    // storage unavailable, the campaign just won't be restored
  }
}

export function readLastCampaign() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}
