/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#f4efe4', 2: '#ebe4d4', 3: '#e3dcc8' },
        vellum: '#faf6ec',
        ink: { DEFAULT: '#1b1612', 2: '#3d342b', 3: '#6b5e51', 4: '#9a8c7c' },
        rule: { DEFAULT: '#cdc2ad', strong: '#a8987d' },
        oxblood: { DEFAULT: '#6d1f1a', 2: '#8a2a22' },
        umber: '#5a4327',
        indigo: '#1f3a55',
        verdigris: '#4a6b54',
        coral: { DEFAULT: '#e8a89c' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"EB Garamond"', 'Georgia', 'serif'],
        text: ['Spectral', '"Iowan Old Style"', 'Georgia', 'serif'],
        serif: ['Spectral', '"Iowan Old Style"', 'Georgia', 'serif'],
        sans: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['132px', { lineHeight: '0.92', letterSpacing: '-0.015em' }],
        'display-l': ['84px', { lineHeight: '0.94', letterSpacing: '-0.01em' }],
        'display-m': ['56px', { lineHeight: '1.00', letterSpacing: '-0.005em' }],
        'display-s': ['36px', { lineHeight: '1.10' }],
        tag: ['10.5px', { lineHeight: '1.40', letterSpacing: '0.12em' }],
        chip: ['11px', { lineHeight: '1.30', letterSpacing: '0.02em' }],
        body: ['17px', { lineHeight: '1.55' }],
      },
      maxWidth: {
        measure: '65ch',
        cover: '76rem',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '2px',
        sm: '2px',
      },
      transitionDuration: {
        150: '150ms',
        320: '320ms',
        420: '420ms',
      },
    },
  },
  plugins: [],
}
