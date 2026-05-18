import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { href: '/#how', label: 'How it works' },
  { href: '/#rarity', label: 'Rarity' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cardborder bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="section-pad flex h-16 items-center justify-between">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src="/icon-512.png"
            alt=""
            className="h-9 w-9 rounded-lg ring-1 ring-cardborder"
          />
          <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
            Bogey<span className="text-beast-green">beasts</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-leaf/70 transition-colors hover:text-beast-green"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/bogeydex"
            className="whitespace-nowrap rounded-xl border border-cardborder bg-card px-3.5 py-2 text-xs font-bold text-leaf transition-colors hover:border-beast-green/60 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Bogeydex
          </Link>
          <a
            href="/#get"
            className="whitespace-nowrap rounded-xl bg-beast-green px-3.5 py-2 text-xs font-bold text-beast-dark transition-transform hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
