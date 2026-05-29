import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-inter)',      'sans-serif'],
        serif:   ['var(--font-playfair)',   'serif'],
        display: ['var(--font-cormorant)',  'serif'],
      },
      colors: {
        ink:        '#080808',
        'ink-2':    '#111111',
        'ink-3':    '#1c1c1c',
        'ink-4':    '#2a2a2a',
        crimson:    '#C41E3A',
        'crimson-d':'#8B0000',
        gold:       '#C9A84C',
        'gold-l':   '#E8D5A3',
        cream:      '#F5F0E8',
        'cream-d':  '#EDE8E0',
        parchment:  '#FAF7F2',
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}

export default config
