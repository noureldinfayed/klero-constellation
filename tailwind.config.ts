import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-0': '#07101d',
        'navy-1': '#0c1a2e',
        'navy-2': '#132742',
        'navy-3': '#1d3558',
        gold: '#c9a961',
        'gold-soft': '#e8d4a0',
        bone: '#efe7d3',
        'ink-muted': '#8ea0bd',
        rule: 'rgba(201,169,97,.2)',
        'rule-strong': 'rgba(201,169,97,.4)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-instrument)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      screens: {
        md: '900px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.2,.7,.3,1)',
      },
    },
  },
  plugins: [],
}

export default config
