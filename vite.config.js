import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import vanilla from 'vite-plugin-vanilla';
import AutoImport from 'unplugin-auto-import/vite';
import { saveCampaignPlugin } from './plugins/save-campaign-plugin.js';

export default defineConfig(({ mode }) => {
  const aliasEntries = {
    '@': './src',
    '@api': './src/api',
    '@components': './src/components',
    '@config': './src/config',
    '@entities': './src/entities',
    '@helpers': './src/helpers',
    '@main': './src/main',
    '@data': './src/main/data',
    '@handlers': './src/main/handlers',
    '@services': './src/services',
    '@templates': './src/templates',
    '@utils': './src/utils',
    '@css': './src/utils/css',
  };

  return {
    plugins: [
      react(),
      saveCampaignPlugin(), // Add our custom plugin first
      AutoImport({
        imports: [
          {
            '@templates/index.js': ['templates'],
            '@entities/index.js': ['entities'],
            '@utils/types.js': ['types'],
            '@helpers/translateImage.js': ['translateImage'],
            '@helpers/translateLink.js': ['translateLink'],
          },
        ],
        include: [/campaigns\/[^/]+\/[^/]+\.js$/],
        dts: './auto-imports.d.ts',
      }),

      AutoImport({
        imports: [
          {
            '@utils/ImageManager.js': ['getImageUrl'],
          },
        ],
        dts: './auto-imports.d.ts',
      }),

      vanilla({
        include: '**/*.html',
        base: '/',
      }),
    ],

    resolve: {
      alias: Object.fromEntries(
        Object.entries(aliasEntries).map(([key, relPath]) => [key, fileURLToPath(new URL(relPath, import.meta.url))])
      ),
    },
  };
});
