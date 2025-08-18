import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vanilla from "vite-plugin-vanilla";
import AutoImport from "unplugin-auto-import/vite";

const aliasEntries = {
  "@": "./src",
  "@api": "./src/api",
  "@components": "./src/components",
  "@config": "./src/config",
  "@entities": "./src/entities",
  "@helpers": "./src/helpers",
  "@main": "./src/main",
  "@data": "./src/main/data",
  "@handlers": "./src/main/handlers",
  "@services": "./src/services",
  "@templates": "./src/templates",
  "@utils": "./src/utils",
  "@css": "./src/utils/css",
};

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        {
          "@templates/index.js": ["templates"],
          "@entities/index.js": ["entities"],
          "@utils/types.js": ["types"],
        },
      ],
      include: [/campaigns\/[^/]+\/[^/]+\.js$/],
      dts: "./auto-imports.d.ts",
    }),

    AutoImport({
      imports: [
        {
          "@utils/ImageManager.js": ["getImageUrl"],
        },
      ],
      dts: "./auto-imports.d.ts",
    }),

    vanilla({
      include: "**/*.html",
      base: "/",
    }),
  ],

  define: {
    __SCOPE__: JSON.stringify(process.env.VITE_SCOPE),
  },

  server: {
    port: 5500,
  },

  resolve: {
    alias: Object.fromEntries(
      Object.entries(aliasEntries).map(([key, relPath]) => [
        key,
        fileURLToPath(new URL(relPath, import.meta.url)),
      ]),
    ),
  },
});
