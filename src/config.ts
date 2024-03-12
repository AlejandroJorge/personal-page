export type AllowedLanguage = "en" | "es";

export const allowedLanguages: readonly [
  AllowedLanguage,
  ...AllowedLanguage[],
] = ["en", "es"] as const;

export const defaultLanguage: AllowedLanguage = "en";
