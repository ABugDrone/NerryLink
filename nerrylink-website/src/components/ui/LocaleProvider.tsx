'use client';

import { createContext, useContext, PropsWithChildren } from 'react';
import type { Locale } from '@/lib/locales/i18n';
import { useTranslation as useI18nHook, defaultLocale } from '@/lib/locales/i18n';

interface LocaleContextValue {
  locale: Locale;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  t: (key: string, replacements?: Record<string, string | number>) => {
    const { t: translate } = useI18nHook(defaultLocale);
    return translate(key, replacements);
  },
});

export function LocaleProvider({ children, locale = defaultLocale }: PropsWithChildren<{ locale?: Locale }>) {
  const { t } = useI18nHook(locale);

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useT() {
  return useContext(LocaleContext);
}