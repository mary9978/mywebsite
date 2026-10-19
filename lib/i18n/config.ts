export const locales = ["fa", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeDirection: Readonly<Record<Locale, "rtl" | "ltr">> = {
  fa: "rtl",
  en: "ltr",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizedPath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}
