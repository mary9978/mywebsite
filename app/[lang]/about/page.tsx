import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience-timeline";
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
  const { locale, about, experience } = await getDictionary();

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

      <div className="border-y border-ink/10 bg-surface/40">
        <ExperienceTimeline section={experience} />
      </div>

      <section className="page-container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={about.skillsEyebrow}
            title={about.skillsTitle}
            description={about.skillsDescription}
          />
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.skills.map((skill, index) => (
            <li
              className="rounded-full border border-ink/15 px-5 py-4 text-center font-bold"
              dir="ltr"
              data-aos="flip-up"
              data-aos-delay={(index % 4) * 100}
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
