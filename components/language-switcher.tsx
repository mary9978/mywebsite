"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  readonly target: Locale;
  readonly label: string;
  readonly ariaLabel: string;
}

export function LanguageSwitcher({ target, label, ariaLabel }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");
  const href = rest ? `/${target}/${rest}` : `/${target}`;

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      className="inline-flex h-11 items-center rounded-full border border-ink/20 px-4 text-sm font-bold hover:bg-ink hover:text-cream"
    >
      {label}
    </Link>
  );
}
