import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        akami: '#B91C1C',
        'akami-dark': '#7f1212',
        gold: '#c9a84c',
        'gold-light': '#e8d5a3',
        'dark-bg': '#0f0f0f',
        'dark-surface': '#1a1a1a',
        'dark-border': '#2a2a2a',
        cream: '#faf8f5',
      },
    },
  },
  plugins: [],
}

export default config
