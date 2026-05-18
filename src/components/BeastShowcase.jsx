import { Link } from 'react-router-dom';
import { beasts, rarityColor } from '../data';

export default function BeastShowcase() {
  return (
    <section id="dex" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cardborder to-transparent" />
      <div className="section-pad">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-beast-green">
              The Bogeydex
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              151 to catch. Here are a few.
            </h2>
          </div>
          <Link
            to="/bogeydex"
            className="inline-flex items-center gap-2 rounded-xl border border-cardborder bg-card px-5 py-2.5 text-sm font-bold text-leaf transition-colors hover:border-beast-green/60"
          >
            View all 151
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {beasts.map((b) => {
            const color = rarityColor[b.rarity];
            return (
              <div
                key={b.id}
                className="group relative overflow-hidden rounded-2xl border border-cardborder bg-card p-5 transition-all hover:-translate-y-1 hover:border-beast-green/40"
              >
                <span className="absolute right-3 top-3 font-display text-xs font-bold text-leaf/30">
                  #{b.id}
                </span>
                <div className="relative flex justify-center">
                  <div
                    className="absolute h-24 w-24 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                    style={{ backgroundColor: color }}
                  />
                  <img
                    src={`/beasts/${b.id}.webp`}
                    alt={b.name}
                    loading="lazy"
                    className="relative h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 text-center font-display font-bold">
                  {b.name}
                </p>
                <p className="text-center text-xs text-leaf/50">{b.type}</p>
                <div className="mt-3 flex justify-center">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                    style={{ color, backgroundColor: `${color}1F` }}
                  >
                    {b.rarity}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
