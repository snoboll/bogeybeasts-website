import { Icon } from './Icons';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* layered background glow + dot grid */}
      <div className="dotgrid absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-beast-green/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="section-pad relative grid items-center gap-12 pb-20 pt-12 sm:pb-28 sm:pt-20 lg:grid-cols-2">
        <div>
          <span className="pill text-beast-green">
            <Icon name="target" className="h-4 w-4" />
            Golf × monster catching
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Every hole hides a{' '}
            <span className="text-beast-green drop-shadow-[0_0_24px_rgba(87,242,135,0.45)]">
              Bogeybeast
            </span>
            .
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-leaf/70">
            Every par-or-better is a Bogeybeast in the bag. Sink the putt,
            make the catch, fill the Bogeydex — one round at a time.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#get"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-beast-green px-7 py-4 font-display text-base font-bold text-beast-dark shadow-glow transition-transform hover:scale-105"
            >
              <Icon name="apple" className="h-5 w-5" />
              Download for iOS
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-2xl border border-cardborder bg-card px-7 py-4 font-display text-base font-semibold text-leaf transition-colors hover:border-beast-green/60"
            >
              See how it works
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 flex gap-8">
            {[
              ['151', 'Bogeybeasts'],
              ['217', 'Real courses'],
              ['5', 'Rarity tiers'],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl font-extrabold text-beast-green">
                  {n}
                </dt>
                <dd className="text-sm text-leaf/55">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* hero art: mascot Rongclub + framed encounter card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-beast-green/10 blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-cardborder bg-card p-6 shadow-card">
            <div className="flex items-center justify-between">
              <span className="pill border-[#26A69A]/40 text-[#26A69A]">
                Uncommon
              </span>
              <span className="text-sm font-semibold text-leaf/55">
                Hole 18 · Par 4
              </span>
            </div>

            <div className="relative mt-2 flex items-center justify-center">
              <div className="absolute h-44 w-44 animate-pulseglow rounded-full bg-beast-green/20 blur-2xl" />
              <img
                src="/beasts/049.webp"
                alt="Rongclub, the Bogeybeasts mascot"
                className="relative h-56 w-56 object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]"
              />
            </div>

            <div className="mt-2 text-center">
              <p className="font-display text-2xl font-extrabold">Rongclub</p>
              <p className="text-sm text-leaf/55">Electric · Ground</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
