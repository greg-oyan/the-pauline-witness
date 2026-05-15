/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f4efe4',
        cream: '#faf6ec',
        rule: '#d6cdb9',
        ink: {
          50: '#f6f3ec',
          100: '#e8e2d5',
          200: '#cdc4b1',
          300: '#a99c80',
          400: '#7d7058',
          500: '#5b513f',
          600: '#42392c',
          700: '#2e2820',
          800: '#1f1b15',
          900: '#13110d',
        },
        accent: {
          DEFAULT: '#9c4221',
          dark: '#7a3318',
          50: '#f7ece4',
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        measure: '65ch',
        cover: '52rem',
      },
      letterSpacing: {
        display: '-0.02em',
        micro: '0.18em',
      },
      fontSize: {
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
