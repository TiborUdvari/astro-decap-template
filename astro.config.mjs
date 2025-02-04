// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://example.com",
  devToolbar: {
    enabled: false,
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  integrations: [preact()],
});

