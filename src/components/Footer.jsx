import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cardborder">
      <div className="section-pad flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img
            src="/icon-512.png"
            alt=""
            className="h-8 w-8 rounded-lg ring-1 ring-cardborder"
          />
          <span className="font-display font-extrabold">
            Bogey<span className="text-beast-green">beasts</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-leaf/60">
          <a href="/#how" className="hover:text-beast-green">How it works</a>
          <Link to="/bogeydex" className="hover:text-beast-green">Bogeydex</Link>
          <a
            href="mailto:info@rootpi.xyz"
            className="hover:text-beast-green"
          >
            Support
          </a>
        </nav>

        <p className="text-xs text-leaf/40">
          © {year} Rootpie Studios HB
        </p>
      </div>
    </footer>
  );
}
