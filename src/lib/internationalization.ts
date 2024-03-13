import type { AllowedLanguage } from "@/config/language";

// This isn't synchronized with config.ts, be cautious
export interface TextContent {
  en: string;
  es: string;
}

export function translate(
  text: TextContent,
  language: AllowedLanguage,
): string {
  return text[language];
}
