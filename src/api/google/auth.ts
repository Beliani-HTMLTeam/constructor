import { JWT } from 'google-auth-library';
import gcredentials from './google-credentials.json';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const xlsxAccount = new JWT({
  email: gcredentials.client_email,
  key: gcredentials.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const STATIC_TRANSLATIONS = new GoogleSpreadsheet('1Y9blxN4paEV05s6AvdWmH5fBELTUvDz3ax5skmgVrsQ', xlsxAccount);

// Dynamic spreadsheets per year
const DYNAMIC_SHEETS: Record<number, GoogleSpreadsheet> = {
  2025: new GoogleSpreadsheet('1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc', xlsxAccount),
  2026: new GoogleSpreadsheet('1RcsQspit0B3b3xX1NwZ9RWnUzZrkoVDULu2cnPMZ04U', xlsxAccount),
};

export async function getStaticTranslations() {
  await STATIC_TRANSLATIONS.loadInfo();
  return STATIC_TRANSLATIONS;
}

export async function getDynamicTranslations(year?: number) {
  const y = year && DYNAMIC_SHEETS[year] ? year : 2025;
  const doc = DYNAMIC_SHEETS[y];

  await doc.loadInfo();

  return doc;
}
