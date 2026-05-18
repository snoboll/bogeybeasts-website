/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Pulled straight from the Bogeybeasts app ColorScheme
        ink: '#0C150C',
        surface: '#141F14',
        card: '#172417',
        cardborder: '#243024',
        leaf: '#DCEEDC',
        beast: {
          green: '#57F287',
          dark: '#003915',
          container: '#00531F',
          glow: '#7EFFA8',
        },
        gold: '#FFD700',
        golddark: '#3B2F00',
      },
      fontFamily: {
        display: ['"Exo 2"', 'system-ui', 'sans-serif'],
        body: ['"Exo 2"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(87, 242, 135, 0.45)',
        card: '0 12px 32px -12px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        pulseglow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        pulseglow: 'pulseglow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
