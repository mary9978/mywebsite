import type { Metadata } from "next";
import { PageIntro, PostCard } from "@/components/portfolio-ui";
import { Reveal } from "@/components/reveal";
import { localizedPath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const { blog } = await getDictionary();
  return blog.meta;
}

export default async function BlogPage() {
  const { locale, blog, common, posts } = await getDictionary();

  return (
    <>
      <PageIntro intro={blog.intro} />

      <section className="page-container pb-24 md:pb-32">
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <Reveal key={post.title}>
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
      </section>

      <section className="border-t border-ink/10 bg-surface/50 py-20">
        <div className="page-container grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">{blog.newsletterEyebrow}</p>
            <h2 className="text-3xl font-black md:text-5xl">{blog.newsletterTitle}</h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" aria-label={blog.newsletterForm}>
            <label className="sr-only" htmlFor="newsletter-email">
              {blog.emailLabel}
            </label>
            <input
              className="field min-h-14 min-w-0 flex-1 rounded-full"
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={blog.emailPlaceholder}
              required
            />
            <button className="button-primary inline-flex" type="submit">
              {blog.subscribe}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
