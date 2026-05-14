/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Hanji Ivory & Crimson palette (no dark full-page backgrounds)
        hanji: '#F5EFE0',
        'hanji-warm': '#EAE0CC',
        ink: '#14110F',
        'ink-soft': '#2A2620',
        crimson: '#8B1A1A',
        'crimson-deep': '#5C1010',
        smoke: '#6B6358',
        aged: '#EAE0CC',

        // Compatibility aliases (keeps existing Tailwind classes working)
        dalbit: {
          black: '#F5EFE0', // hanji ivory background
          ink: '#14110F', // ink typography / dark surfaces
          panel: '#EAE0CC', // hanji warm surfaces
          line: 'rgba(20, 17, 15, 0.12)', // hairline
          mist: '#6B6358', // smoke body text
          silver: '#14110F', // ink as default text
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif KR"', 'serif'],
        body: ['Inter', '"Pretendard"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        serifKr: ['"Noto Serif KR"', 'serif'],
        sansKr: ['"Pretendard"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        // Keep existing utility name `bg-holo-linear` alive (used in badges),
        // but replace it with a restrained crimson accent.
        'holo-linear': 'linear-gradient(135deg, #8B1A1A 0%, #5C1010 100%)',
      },
    },
  },
  plugins: [],
}
