export enum AllowedLanguage {
  EN = "en",
  ES = "es",
}

export const allowedLanguages: readonly [
  AllowedLanguage,
  ...AllowedLanguage[],
] = Object.values(AllowedLanguage) as any as readonly [
  AllowedLanguage,
  ...AllowedLanguage[],
];

export const defaultLanguage: AllowedLanguage = AllowedLanguage.EN;
