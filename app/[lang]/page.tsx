import Link from "next/link";
import { AboutPanel } from "@/components/about-panel";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { PostCard, ProjectCard, SectionHeading } from "@/components/portfolio-ui";
import { ProfileCard } from "@/components/profile-card";
import { Reveal } from "@/components/reveal";
import { localizedPath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Home() {
  const { locale, home, common, experience, projects, posts } = await getDictionary();

  return (
    <>
      <section className="relative isolate overflow-hidden py-12 md:py-16">
        <HeroBackdrop />
        <span className="hero-shape absolute -end-10 top-10 size-40 bg-coral/80" aria-hidden="true" />
        <span className="hero-shape absolute -end-6 top-64 size-28 bg-lime" aria-hidden="true" />
        <div className="page-container relative grid items-start gap-8 lg:grid-cols-[20rem_1fr]">
          <ProfileCard />
          <AboutPanel />
        </div>
      </section>

      <ExperienceTimeline section={experience} />

      <section className="page-container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={home.projectsEyebrow}
            title={home.projectsTitle}
            description={home.projectsDescription}
          />
        </Reveal>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.url} delay={(index % 2) * 150}>
              <ProjectCard project={project} viewSiteLabel={common.viewSite} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link className="button-secondary inline-flex" href={localizedPath(locale, "/portfolio")}>
            {home.viewAll}
          </Link>
        </div>
      </section>

      <section className="bg-surface/50 py-24 md:py-32">
        <div className="page-container">
          <Reveal>
            <SectionHeading eyebrow={home.blogEyebrow} title={home.blogTitle} />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {posts.slice(0, 2).map((post, index) => (
              <Reveal key={post.title} delay={index * 150}>
                <PostCard
                  post={post}
                  href={localizedPath(locale, "/blog")}
                  readMoreLabel={common.readMore}
                  readArticleLabel={common.readArticle}
                  featured={index === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
