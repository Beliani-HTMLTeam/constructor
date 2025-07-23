import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vanilla from "vite-plugin-vanilla";

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
    // vanilla({
    //   include: "**/*.html",
    //   base: "/",
    // }),
  ],

  // Server configuration
  // By default, Vite uses port 3000, but we use 5500 for compatibility (e.g., with Google redirects)
  server: {
    port: 5500,
  },

  // Tells Vite (build process) how to resolve import paths
  resolve: {
    alias: Object.fromEntries(
      Object.entries(aliasEntries).map(([key, relPath]) => [
        key,
        fileURLToPath(new URL(relPath, import.meta.url)),
      ])
    ),
  },
});
