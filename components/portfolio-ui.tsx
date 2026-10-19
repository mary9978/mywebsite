import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icon";
import type { PageIntroText, Post, Project } from "@/lib/i18n/types";

interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly id?: string;
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[1fr_1.4fr] md:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="section-title">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl leading-8 text-ink/60 md:justify-self-end">{description}</p>
      ) : null}
    </div>
  );
}

interface ProjectCardProps {
  readonly project: Project;
  readonly viewSiteLabel: string;
}

export function ProjectCard({ project, viewSiteLabel }: ProjectCardProps) {
  return (
    <article className="group relative">
      <div className={`project-visual project-visual-${project.accent}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
        ) : (
          <span
            className="absolute inset-0 grid place-items-center text-7xl font-black text-on-accent/80"
            aria-hidden="true"
          >
            {project.title}
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-5 pt-5">
        <div>
          <p className="mb-2 text-sm font-bold text-ink/50">
            {project.category} · {project.year}
          </p>
          <h3 className="text-2xl font-black">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:rounded-[2rem]"
            >
              {project.title}
              <span className="sr-only"> — {viewSiteLabel}</span>
            </a>
          </h3>
          <p className="mt-3 max-w-lg leading-7 text-ink/60">{project.description}</p>
        </div>
        <span
          className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/20 transition group-hover:bg-ink group-hover:text-cream"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </article>
  );
}

interface PostCardProps {
  readonly post: Post;
  readonly href: string;
  readonly readMoreLabel: string;
  readonly readArticleLabel: string;
  readonly featured?: boolean;
}

export function PostCard({ post, href, readMoreLabel, readArticleLabel, featured = false }: PostCardProps) {
  return (
    <article
      className={`group rounded-[2rem] border border-ink/10 p-6 transition hover:-translate-y-1 hover:border-ink/30 ${
        featured ? "bg-inverse text-on-inverse md:col-span-2 md:p-9" : "bg-surface/60"
      }`}
    >
      <div className="mb-14 flex items-center justify-between gap-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            featured ? "bg-lime text-on-accent" : "bg-ink/5"
          }`}
        >
          {post.tag}
        </span>
        <span className={featured ? "text-on-inverse/50" : "text-ink/45"}>{post.readTime}</span>
      </div>
      <h3 className="max-w-2xl text-2xl font-black leading-relaxed md:text-3xl">{post.title}</h3>
      <p className={`mt-4 max-w-2xl leading-8 ${featured ? "text-on-inverse/60" : "text-ink/60"}`}>
        {post.excerpt}
      </p>
      <div className="mt-8 flex items-center justify-between">
        <time className={featured ? "text-on-inverse/45" : "text-ink/45"}>{post.date}</time>
        <Link href={href} aria-label={`${readArticleLabel}: ${post.title}`} className="font-bold">
          {readMoreLabel} <Arrow />
        </Link>
      </div>
    </article>
  );
}

interface PageIntroProps {
  readonly intro: PageIntroText;
}

export function PageIntro({ intro }: PageIntroProps) {
  return (
    <section className="page-container py-16 md:py-24">
      <p className="eyebrow" data-aos="fade-down">
        {intro.eyebrow}
      </p>
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
        <h1 className="page-title" data-aos="fade-up">
          {intro.title}
        </h1>
        <div data-aos="fade-up" data-aos-delay="200">
          {intro.count ? <p className="mb-3 text-sm font-black text-coral">{intro.count}</p> : null}
          <p className="max-w-lg text-lg leading-9 text-ink/60">{intro.description}</p>
        </div>
      </div>
    </section>
  );
}
