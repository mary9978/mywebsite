import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "@/components/icon";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { localizedPath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";

interface SiteShellProps {
  readonly children: ReactNode;
}

export async function SiteShell({ children }: SiteShellProps) {
  const { locale, shell } = await getDictionary();
  const otherLocale = locale === "fa" ? "en" : "fa";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-ink px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        {shell.skip}
      </a>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
        <div className="page-container flex h-20 items-center justify-between gap-3">
          <Link
            href={localizedPath(locale)}
            className="group flex items-center gap-3 rounded-full"
            aria-label={shell.homeLabel}
          >
            <span
              className="grid size-10 place-items-center rounded-full bg-inverse text-lg font-black text-lime transition-transform group-hover:-rotate-6"
              aria-hidden="true"
            >
              {shell.brand.charAt(0)}
            </span>
            <span className="hidden text-lg font-black tracking-tight sm:inline">
              {shell.brand}
            </span>
          </Link>

          <nav aria-label={shell.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {shell.nav.map((item) => (
                <li key={item.path}>
                  <Link className="nav-link" href={localizedPath(locale, item.path)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher
              target={otherLocale}
              label={shell.languageName}
              ariaLabel={shell.switchLanguage}
            />
            <ThemeToggle label={shell.themeToggle} />
            <Link
              className="button-primary hidden lg:inline-flex"
              href={localizedPath(locale, "/contact")}
            >
              {shell.cta} <Arrow />
            </Link>

            <details className="mobile-menu relative lg:hidden">
              <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-ink/20 [&::-webkit-details-marker]:hidden">
                <span className="sr-only">{shell.openMenu}</span>
                <span aria-hidden="true" className="text-xl">
                  ☰
                </span>
              </summary>
              <nav
                aria-label={shell.mobileNav}
                className="absolute end-0 top-14 w-64 rounded-3xl border border-ink/10 bg-surface p-3 shadow-2xl"
              >
                <ul className="space-y-1">
                  {shell.nav.map((item) => (
                    <li key={item.path}>
                      <Link
                        className="block rounded-2xl px-4 py-3 font-bold hover:bg-ink hover:text-cream"
                        href={localizedPath(locale, item.path)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="bg-inverse text-on-inverse">
        <div className="page-container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]" data-aos="fade-up">
          <div>
            <p className="mb-4 text-3xl font-black">
              {shell.footerTitle} <span className="text-lime">{shell.footerHighlight}</span>
            </p>
            <p className="max-w-md leading-8 text-on-inverse/60">{shell.footerText}</p>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold text-lime">{shell.quickLinks}</p>
            <ul className="space-y-3 text-on-inverse/70">
              {shell.nav.slice(1).map((item) => (
                <li key={item.path}>
                  <Link className="hover:text-on-inverse" href={localizedPath(locale, item.path)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold text-lime">{shell.contact}</p>
            <a className="block text-on-inverse/70 hover:text-on-inverse" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mt-8 text-sm text-on-inverse/40">{shell.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
