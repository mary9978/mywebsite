import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icon";
import { PageIntro, SectionHeading } from "@/components/portfolio-ui";
import { Reveal } from "@/components/reveal";
import { localizedPath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const { about } = await getDictionary();
  return about.meta;
}

export default async function AboutPage() {
  const { locale, about } = await getDictionary();

  return (
    <>
      <PageIntro intro={about.intro} />

      <section className="page-container pb-24 md:pb-32">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-inverse text-on-inverse md:grid-cols-2">
            <div className="relative min-h-96 overflow-hidden bg-lime">
              <div
                className="absolute inset-x-0 -bottom-20 mx-auto size-80 rounded-[45%_55%_38%_62%] bg-coral"
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 bottom-16 mx-auto size-44 rounded-full bg-inverse"
                aria-hidden="true"
              />
              <span className="absolute end-6 top-6 rounded-full bg-surface px-4 py-2 text-sm font-black text-ink">
                {about.location}
              </span>
            </div>
            <div className="p-8 md:p-14">
              <p className="text-sm font-black text-lime">{about.storyLabel}</p>
              <h2 className="mt-5 text-3xl font-black leading-relaxed md:text-4xl">{about.storyTitle}</h2>
              <p className="mt-6 leading-9 text-on-inverse/60">{about.storyText}</p>
              <Link
                className="mt-8 inline-flex gap-2 font-black text-lime hover:text-on-inverse"
                href={localizedPath(locale, "/contact")}
              >
                {about.storyCta} <Arrow />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-ink/10 bg-surface/50 py-24">
        <div className="page-container">
          <Reveal>
            <SectionHeading eyebrow={about.experienceEyebrow} title={about.experienceTitle} />
          </Reveal>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {about.experience.map(([date, role, company]) => (
              <article key={date} className="grid gap-3 py-7 md:grid-cols-[1fr_1.5fr_1fr] md:items-center">
                <p className="text-sm font-bold text-ink/45">{date}</p>
                <h3 className="text-xl font-black">{role}</h3>
                <p className="text-ink/60 md:text-end">{company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={about.skillsEyebrow}
            title={about.skillsTitle}
            description={about.skillsDescription}
          />
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.skills.map((skill) => (
            <li
              className="rounded-full border border-ink/15 px-5 py-4 text-center font-bold"
              dir="ltr"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
