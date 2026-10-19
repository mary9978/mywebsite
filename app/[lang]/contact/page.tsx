import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/portfolio-ui";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { contact } = await getDictionary();
  return contact.meta;
}

export default async function ContactPage() {
  const { contact } = await getDictionary();

  return (
    <>
      <PageIntro intro={contact.intro} />

      <section className="page-container grid gap-12 pb-24 md:grid-cols-[0.8fr_1.2fr] md:pb-32">
        <Reveal>
          <aside className="rounded-[2rem] bg-inverse p-8 text-on-inverse md:sticky md:top-28">
            <p className="text-sm font-black text-lime">{contact.channels}</p>
            <a className="mt-8 block break-all text-2xl font-black hover:text-lime" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a
              className="mt-3 block text-lg text-on-inverse/60 hover:text-on-inverse"
              href={site.phoneHref}
              dir="ltr"
            >
              {site.phone}
            </a>
            <dl className="mt-14 space-y-6 border-t border-on-inverse/10 pt-8">
              {contact.details.map(([term, detail]) => (
                <div key={term}>
                  <dt className="text-sm text-on-inverse/40">{term}</dt>
                  <dd className="mt-1 font-bold">{detail}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
        <Reveal>
          <div className="rounded-[2rem] border border-ink/10 bg-surface/60 p-6 md:p-9">
            <h2 className="mb-8 text-2xl font-black">{contact.form.title}</h2>
            <ContactForm text={contact.form} />
          </div>
        </Reveal>
      </section>
    </>
  );
}
