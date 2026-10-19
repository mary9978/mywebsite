import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { AosInit } from "@/components/aos-init";
import { SiteShell } from "@/components/site-shell";
import { localeDirection, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";
import { themeScript } from "@/lib/theme";
import "aos/dist/aos.css";
import "../globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, meta, shell } = await getDictionary();
  return {
    metadataBase: new URL(site.url),
    title: { default: meta.title, template: `%s | ${shell.brand}` },
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fa: "/fa", en: "/en" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale } = await getDictionary();

  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      className={`${vazirmatn.variable} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
        <AosInit />
      </body>
    </html>
  );
}
