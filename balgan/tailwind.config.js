/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dalbit: {
          red: '#A41818',
          'red-deep': '#7B1313',
          cream: '#F5E6C8',
          'cream-soft': '#F8EDD3',
          navy: '#1B2A4E',
          'navy-soft': '#243456',
          coral: '#D27A78',
        },
      },
      fontFamily: {
        display: ['"Alfa Slab One"', 'serif'],
        slab: ['"Roboto Slab"', 'serif'],
        body: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
}
