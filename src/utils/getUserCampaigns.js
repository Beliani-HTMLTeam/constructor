const allCampaigns = import.meta.glob('/campaigns/*/*.js', { eager: false });

export function getAvailableScopes() {
  const scopes = new Set();
  for (const path of Object.keys(allCampaigns)) {
    const match = path.match(/^\/campaigns\/([^/]+)\//);
    if (match) {
      scopes.add(match[1]);
    }
  }
  return Array.from(scopes).sort((a, b) => a.localeCompare(b));
}

export async function getUserCampaigns(targetScope) {
  const resolvedScope = targetScope ?? import.meta.env.VITE_SCOPE;
  if (!resolvedScope || resolvedScope === 'default') {
    return [];
  }

  const entries = Object.entries(allCampaigns).filter(([path]) =>
    path.startsWith(`/campaigns/${resolvedScope}/`)
  );

  const modules = await Promise.all(entries.map(([, mod]) => mod()));

  return modules.map((m) => (m.default?.toJSON ? m.default.toJSON() : m.default));
}

