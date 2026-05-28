import en from './en';

export const locales = { en } as const;
export type Locale = keyof typeof locales;
export type TranslationKey = string;

export const defaultLocale: Locale = 'en';

export function useTranslation(locale: Locale = defaultLocale) {
  const t = locales[locale] || locales.en;

  function translate(key: string, replacements?: Record<string, string | number>): string {
    const parts = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = t;
    for (const part of parts) {
      if (result && typeof result === 'object') {
        result = result[part];
      } else {
        return key;
      }
    }

    let text = typeof result === 'string' ? result : key;

    if (replacements) {
      for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }

    return text;
  }

  return { t: translate };
}