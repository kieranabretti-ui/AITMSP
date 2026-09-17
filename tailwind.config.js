/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        ink: '#1B2220',
        'ink-soft': '#2A3330',
        paper: '#F4F1E9',
        'paper-dim': '#ECE7D9',
        petrol: {
          DEFAULT: '#2C5A52',
          dark: '#1F433D',
          light: '#3E7A6F',
        },
        brass: {
          DEFAULT: '#C08A34',
          // Darkened from #9C6E27 — that value failed WCAG AA (3.98:1) as
          // small text on paper; #75521C clears 4.5:1 on paper and paper-dim.
          dark: '#75521C',
          light: '#D9AC63',
        },
        stone: '#DBD3C2',
        'stone-dark': '#C7BCA3',
        slate: '#5B615C',
      },
      fontFamily: {
        display: ['"Zilla Slab"', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      letterSpacing: {
        tightish: '-0.01em',
        wideish: '0.04em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(27, 34, 32, 0.06), 0 8px 24px -12px rgba(27, 34, 32, 0.18)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
