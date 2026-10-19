import Link from "next/link";
import { Arrow, Icon } from "@/components/icon";
import { localizedPath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function AboutPanel() {
  const { locale, profile } = await getDictionary();

  return (
    <div className="card-shadow overflow-hidden rounded-[2rem] bg-surface lg:mt-16">
      <section aria-labelledby="about-title" className="p-6 md:p-10">
        <h2 id="about-title" className="text-3xl font-black">
          {profile.aboutTitle}
        </h2>
        <span className="mt-4 block h-1 w-14 rounded-full bg-coral" aria-hidden="true" />
        <div className="mt-6 space-y-4 leading-8 text-ink/70">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="button-primary inline-flex" href={localizedPath(locale, "/portfolio")}>
            {profile.ctaPortfolio} <Arrow />
          </Link>
          <Link className="button-secondary inline-flex" href={localizedPath(locale, "/contact")}>
            {profile.ctaContact}
          </Link>
        </div>
      </section>

      <section aria-labelledby="services-title" className="bg-cream/60 p-6 md:p-10">
        <h2 id="services-title" className="text-2xl font-black">
          {profile.servicesTitle}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {profile.services.map((service) => (
            <li
              key={service.title}
              className="group flex gap-4 rounded-3xl bg-surface p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime text-on-accent transition group-hover:bg-inverse group-hover:text-lime">
                <Icon name={service.icon} className="size-6" />
              </span>
              <div>
                <h3 className="font-black">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/60">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
