/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f4f0',
          100: '#e8e3d8',
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
          DEFAULT: '#a3582b',
          dark: '#7a3f1d',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
