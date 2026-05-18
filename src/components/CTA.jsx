import { Icon } from './Icons';

export default function CTA() {
  return (
    <section id="get" className="section-pad py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-beast-green/25 bg-surface px-8 py-16 text-center sm:px-16">
        <div className="dotgrid absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-beast-green/20 blur-[120px]" />

        <div className="relative">
          <img
            src="/hickory.webp"
            alt=""
            className="mx-auto h-44 w-44 object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.5)]"
          />
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Give every hole a reason to care.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-leaf/65">
            Whether you’re a casual weekend golfer or chasing that elusive
            Legendary — Bogeybeasts is free to play. Start your Bogeydex today.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-beast-green px-8 py-4 font-display text-base font-bold text-beast-dark shadow-glow transition-transform hover:scale-105"
            >
              <Icon name="apple" className="h-5 w-5" />
              Download on the App Store
            </a>
          </div>
          <p className="mt-4 text-xs text-leaf/40">
            iOS 15+ · Internet connection required for sign-in and cloud sync
          </p>
        </div>
      </div>
    </section>
  );
}
