export default function Battle() {
  return (
    <section id="battle" className="section-pad py-24">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-beast-green">
          Battle
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Your scorecard is your weapon
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-7">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-red-400">
            PvP Battle
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold">
            Take your team head-to-head
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-leaf/65">
            Build a team of 3 Bogeybeasts and challenge another golfer. Each
            hole, the lower score attacks — knock out their whole team to win.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-7">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
            Leader Challenge
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold">
            Challenge course leaders
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-leaf/65">
            Every course has a Course Leader defending it. Beat them under the
            same battle rules and you claim the course as its new leader.
          </p>
        </div>
      </div>
    </section>
  );
}
