import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icon";
import { PageIntro, ProjectCard } from "@/components/portfolio-ui";
import { Reveal } from "@/components/reveal";
import { localizedPath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const { portfolio } = await getDictionary();
  return portfolio.meta;
}

export default async function PortfolioPage() {
  const { locale, portfolio, common, projects } = await getDictionary();

  return (
    <>
      <PageIntro intro={portfolio.intro} />

      <section className="page-container pb-24 md:pb-32">
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal className={index % 2 ? "md:mt-20" : ""} delay={(index % 2) * 150} key={project.url}>
              <ProjectCard project={project} viewSiteLabel={common.viewSite} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-coral py-20 text-on-accent">
        <div
          className="page-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          data-aos="zoom-in"
        >
          <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">{portfolio.ctaTitle}</h2>
          <Link
            className="inline-flex min-h-13 shrink-0 items-center gap-3 rounded-full bg-on-accent px-6 font-black text-coral"
            href={localizedPath(locale, "/contact")}
          >
            {portfolio.ctaButton} <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
