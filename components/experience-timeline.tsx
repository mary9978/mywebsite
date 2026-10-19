import { SectionHeading } from "@/components/portfolio-ui";
import { Reveal } from "@/components/reveal";
import type { Experience, ExperienceSection } from "@/lib/i18n/types";

interface ExperienceTimelineProps {
  readonly section: ExperienceSection;
}

export function ExperienceTimeline({ section }: ExperienceTimelineProps) {
  return (
    <section aria-labelledby="experience-title" className="page-container py-24 md:py-32">
      <Reveal>
        <SectionHeading
          id="experience-title"
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
      </Reveal>

      {section.items.length === 0 ? (
        <p className="rounded-[2rem] border border-dashed border-ink/20 p-10 text-center text-ink/60">
          {section.emptyText}
        </p>
      ) : (
        <ol className="relative space-y-6 border-s-2 border-ink/10 ps-8 md:ps-10">
          {section.items.map((item) => (
            <ExperienceItem
              key={`${item.company}-${item.period}`}
              item={item}
              currentLabel={section.currentLabel}
            />
          ))}
        </ol>
      )}
    </section>
  );
}

interface ExperienceItemProps {
  readonly item: Experience;
  readonly currentLabel: string;
}

function ExperienceItem({ item, currentLabel }: ExperienceItemProps) {
  return (
    <li className="relative">
      <span
        className={`absolute -start-[calc(2rem+7px)] top-8 size-3 rounded-full ring-4 ring-cream md:-start-[calc(2.5rem+7px)] ${
          item.current ? "bg-coral" : "bg-ink/30"
        }`}
        aria-hidden="true"
      />
      <Reveal>
        <article className="card-shadow rounded-[2rem] bg-surface p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-black md:text-2xl">{item.role}</h3>
              <p className="mt-1 font-bold text-ink/60">
                {item.company}
                {item.location ? <span className="font-normal"> · {item.location}</span> : null}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {item.current ? (
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-black text-on-accent">
                  {currentLabel}
                </span>
              ) : null}
              <p className="rounded-full bg-ink/5 px-3 py-1 text-sm font-bold text-ink/70">
                {item.period}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-3xl leading-8 text-ink/70">{item.description}</p>
          {item.stack.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2" dir="ltr">
              {item.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs font-bold text-ink/70"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      </Reveal>
    </li>
  );
}
