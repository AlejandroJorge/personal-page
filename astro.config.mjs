import { defineConfig } from "astro/config";
import { allowedLanguages, defaultLanguage } from "./src/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: allowedLanguages,
    defaultLocale: defaultLanguage,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
    fallback: {
      es: "en",
    },
  },
});
