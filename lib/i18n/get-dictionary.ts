import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Readonly<Record<Locale, () => Promise<Dictionary>>> = {
  fa: () => import("./dictionaries/fa").then((module) => module.fa),
  en: () => import("./dictionaries/en").then((module) => module.en),
};

export async function getDictionary(): Promise<Dictionary> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
}
