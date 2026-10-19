import { Icon } from "@/components/icon";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";

export async function ProfileCard() {
  const { profile } = await getDictionary();

  return (
    <aside
      aria-labelledby="profile-name"
      className="card-shadow relative mt-16 rounded-[2rem] bg-surface lg:sticky lg:top-28"
    >
      <div className="px-6 pb-6 text-center">
        <div
          className="mx-auto -mt-16 grid size-32 rotate-3 place-items-center rounded-[2rem] bg-inverse text-4xl font-black text-lime shadow-xl"
          aria-hidden="true"
        >
          <span className="-rotate-3">{profile.initials}</span>
        </div>
        <h1 id="profile-name" className="mt-6 text-3xl font-black">
          {profile.name}
        </h1>
        <p className="mx-auto mt-3 w-fit rounded-full bg-lime px-4 py-1.5 text-sm font-bold text-on-accent">
          {profile.role}
        </p>
        <ul className="mt-5 flex justify-center gap-2" aria-label={profile.socialLabel}>
          {profile.socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="grid size-10 place-items-center rounded-full text-ink/60 hover:bg-ink hover:text-cream"
              >
                <Icon name={link.icon} className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-b-[2rem] border-t border-ink/10 bg-cream/60 p-6">
        <dl className="space-y-4">
          {profile.contactItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <dt className="grid size-9 shrink-0 place-items-center rounded-xl bg-surface text-ink/60">
                <Icon name={item.icon} className="size-[18px]" />
                <span className="sr-only">{item.label}</span>
              </dt>
              <dd className="min-w-0 truncate text-sm font-bold" dir={item.ltr ? "ltr" : undefined}>
                {item.href ? (
                  <a className="hover:text-coral" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <a href={site.resume} download className="button-primary mt-6 flex w-full shadow-lg">
          <Icon name="download" />
          {profile.resume}
        </a>
      </div>
    </aside>
  );
}
