export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-grid absolute inset-0" />
      <span className="hero-glow absolute -top-32 start-[-10%] size-[26rem] rounded-full bg-lime/45 dark:bg-lime/15" />
      <span className="hero-glow hero-glow-delayed absolute -end-24 top-1/4 size-[22rem] rounded-full bg-coral/30 dark:bg-coral/15" />
      <span className="hero-glow absolute bottom-0 start-1/3 size-[20rem] rounded-full bg-sky/40 dark:bg-sky/10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-cream" />
    </div>
  );
}
