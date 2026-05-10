/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dalbit: {
          black: '#050507',
          ink: '#0B0B10',
          panel: '#111118',
          line: '#1F1F2A',
          mist: '#9098B5',
          silver: '#D8DEEA',
          // Holographic accent stops
          pink: '#FF6EC7',
          violet: '#B084FF',
          cyan: '#66E1FF',
          mint: '#6EFFC7',
          gold: '#FFE066',
          peach: '#FFB088',
        },
      },
      fontFamily: {
        display: ['"Alfa Slab One"', 'serif'],
        slab: ['"Roboto Slab"', 'serif'],
        body: ['"Roboto Slab"', 'serif'],
      },
      backgroundImage: {
        'holo-linear':
          'linear-gradient(135deg, #FF6EC7 0%, #B084FF 22%, #66E1FF 42%, #6EFFC7 62%, #FFE066 82%, #FFB088 100%)',
        'holo-conic':
          'conic-gradient(from 200deg at 50% 50%, #FF6EC7, #B084FF, #66E1FF, #6EFFC7, #FFE066, #FFB088, #FF6EC7)',
        'holo-soft':
          'radial-gradient(circle at 30% 20%, rgba(255,110,199,0.18), transparent 40%), radial-gradient(circle at 70% 70%, rgba(102,225,255,0.18), transparent 45%), radial-gradient(circle at 50% 90%, rgba(110,255,199,0.12), transparent 50%)',
      },
      animation: {
        shimmer: 'shimmer 8s linear infinite',
        'shimmer-slow': 'shimmer 16s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}
