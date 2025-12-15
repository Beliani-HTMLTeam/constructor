import { warmUpStatic } from './src/api/google/fetchTranslations.ts';

const testGTranslations = async () => {
  console.log('Starting testGTranslations...');
  await warmUpStatic();
  console.log('Finished testGTranslations.');
};

export { testGTranslations };

testGTranslations();
