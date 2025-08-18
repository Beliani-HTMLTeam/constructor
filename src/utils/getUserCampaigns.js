const scope = import.meta.env.VITE_SCOPE;

const allCampaigns = import.meta.glob("/campaigns/*/*.js", { eager: false });

// filtering campaigns based on the current scope
const entries = Object.entries(allCampaigns).filter(([path]) =>
  path.includes(`/campaigns/${scope}/`),
);

export async function getUserCampaigns() {
  const modules = await Promise.all(entries.map(([, mod]) => mod()));

  return modules.map((m) =>
    m.default?.toJSON ? m.default.toJSON() : m.default,
  );
}
