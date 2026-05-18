import { steps } from '../data';

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad py-24">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-beast-green">
          How it works
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Four steps from tee to catch
        </h2>
      </div>

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="group relative overflow-hidden rounded-2xl border border-cardborder bg-card p-6 transition-colors hover:border-beast-green/50"
          >
            <span className="font-display text-5xl font-extrabold text-beast-green/15 transition-colors group-hover:text-beast-green/30">
              {s.n}
            </span>
            <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-leaf/65">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
