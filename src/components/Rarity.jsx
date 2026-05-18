import { rarities } from '../data';

export default function Rarity() {
  return (
    <section id="rarity" className="section-pad py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-beast-green">
            Rarity & catch rates
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your scorecard is the catch rate
          </h2>
          <p className="mt-5 text-leaf/65">
            Five tiers, each with its own encounter weight and catch odds. Score
            a par and Commons are a lock — but a Legendary at par is still a
            coin-flip. Eagle or better? Guaranteed catch, every time.
          </p>
          <p className="mt-4 text-sm text-leaf/45">
            Consecutive par-or-better holes build a streak that quietly raises
            your chance of even meeting a Legendary.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-cardborder bg-card">
          <div className="grid grid-cols-3 gap-4 border-b border-cardborder px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-leaf/45">
            <span>Tier</span>
            <span className="text-center">Encounter weight</span>
            <span className="text-right">Catch % at par</span>
          </div>
          {rarities.map((r) => (
            <div
              key={r.tier}
              className="grid grid-cols-3 items-center gap-4 border-b border-cardborder/60 px-6 py-4 last:border-0"
            >
              <span className="flex items-center gap-2.5 font-display font-bold">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: r.color, boxShadow: `0 0 10px ${r.color}` }}
                />
                {r.tier}
              </span>
              <div className="flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink">
                  <div
                    className="h-full rounded-full"
                    style={{ width: r.weight, backgroundColor: r.color }}
                  />
                </div>
                <span className="w-9 text-right text-sm tabular-nums text-leaf/60">
                  {r.weight}
                </span>
              </div>
              <span
                className="text-right font-display text-lg font-extrabold tabular-nums"
                style={{ color: r.color }}
              >
                {r.par}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
