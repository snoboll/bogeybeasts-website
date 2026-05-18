import { useMemo, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { allBeasts, rarities, rarityColor } from '../data';

const rarityTiers = ['All', ...rarities.map((r) => r.tier)];

export default function Bogeydex() {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allBeasts.filter((b) => {
      const matchesTier = tier === 'All' || b.rarity === tier;
      const matchesQuery =
        !q || b.name.toLowerCase().includes(q) || b.id.includes(q);
      return matchesTier && matchesQuery;
    });
  }, [query, tier]);

  return (
    <>
      <Nav />
      <main className="section-pad pb-24 pt-28">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-beast-green">
          The Bogeydex
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          All 151 Bogeybeasts
        </h1>
        <p className="mt-4 max-w-xl text-leaf/65">
          Every first-gen Bogeybeast, from the most common fairway critter to
          the rarest Legendary. Search by name or filter by rarity tier.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or number…"
            className="w-full rounded-xl border border-cardborder bg-card px-4 py-3 text-sm text-leaf placeholder:text-leaf/35 focus:border-beast-green/60 focus:outline-none sm:max-w-xs"
          />
          <div className="flex flex-wrap gap-2">
            {rarityTiers.map((t) => {
              const active = t === tier;
              const color = rarityColor[t];
              return (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                    active
                      ? 'border-transparent bg-beast-green text-beast-dark'
                      : 'border-cardborder bg-card text-leaf/65 hover:border-beast-green/50'
                  }`}
                  style={active && color ? { backgroundColor: color, color: '#0C150C' } : undefined}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-sm text-leaf/45">
          {filtered.length} of {allBeasts.length} Bogeybeasts
        </p>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center font-display text-lg text-leaf/50">
            No Bogeybeasts match your search.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {filtered.map((b) => {
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
        )}
      </main>
      <Footer />
    </>
  );
}
