// Lightweight inline SVG icons — stroke inherits currentColor.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Icon = ({ name, className = '' }) => {
  const paths = {
    flag: (
      <>
        <path d="M5 21V4" />
        <path d="M5 4c4-2 8 2 12 0v9c-4 2-8-2-12 0" />
      </>
    ),
    terrain: (
      <>
        <path d="M3 19l5-8 4 5 3-4 6 7H3z" />
        <circle cx="8" cy="6" r="2" />
      </>
    ),
    streak: (
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    ),
    dex: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M4 9h16" />
        <circle cx="8" cy="6" r="1" />
      </>
    ),
    battle: (
      <>
        <path d="M14.5 4l5.5 5.5-9 9L5.5 13z" />
        <path d="M3 21l3.5-3.5M17 3l4 4M16 8l-2-2" />
      </>
    ),
    cloud: (
      <>
        <path d="M6 18a4 4 0 010-8 6 6 0 0111.5-1.5A4 4 0 0118 18z" />
        <path d="M12 13v5M9.5 15.5L12 18l2.5-2.5" />
      </>
    ),
    apple: (
      <path
        d="M16.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9-.8 0-2.1-.9-3.4-.9-1.8 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.2-2.6.6-.9.9-1.4 1.4-2.4-3.6-1.4-4.5-6.4-1-7.4zM14 5.4c.7-.9 1.2-2.1 1.1-3.4-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.4z"
        fill="currentColor"
        stroke="none"
      />
    ),
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
  };
  return (
    <svg {...base} className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};
