import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vanilla from "vite-plugin-vanilla";
import AutoImport from "unplugin-auto-import/vite";

const aliasEntries = {
  "@": "./",
  "@api": "./api",
  "@components": "./components",
  "@config": "./config",
  "@entities": "./entities",
  "@helpers": "./helpers",
  "@main": "./main",
  "@data": "./main/data",
  "@handlers": "./main/handlers",
  "@services": "./services",
  "@templates": "./templates",
  "@utils": "./utils",
  "@css": "./utils/css",
};

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        {
          "@utils/ImageManager.js": ["getImageUrl"],
          "@templates/index.js": ["templates"],
          "@entities/index.js": ["entities"],
          "@utils/types.js": [["default", "types"]],
        },
      ],
      include: [
        /campaigns\/[^/]+\/[^/]+\.js$/, // matches campaigns/KamilO/somefile.js
      ],
      dts: "./auto-imports.d.ts", // Optional: generates TypeScript types
    }),

    // vanilla({
    //   include: "**/*.html",
    //   base: "/",
    // }),
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
      ])
    ),
  },
});
