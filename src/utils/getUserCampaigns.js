const scope = import.meta.env.VITE_SCOPE;

const allCampaigns = import.meta.glob('/campaigns/*/*.js', { eager: false });

const entries = Object.entries(allCampaigns).filter(([path]) =>
  path.includes(`/campaigns/${scope}/`)
);

export async function getUserCampaigns() {
  const modules = await Promise.all(entries.map(([, mod]) => mod()));

  return modules.map((m, i) => {
    const campaign = m.default?.toJSON ? m.default.toJSON() : m.default;
    if (campaign && typeof campaign === 'object') {
      campaign._filename = entries[i][0].split('/').pop();
    }
    return campaign;
  });
}
