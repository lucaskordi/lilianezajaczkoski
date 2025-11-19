/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#031127',
        navyDark: '#020B19',
        gold: {
          DEFAULT: '#b28947',
          start: '#b28947',
          end: '#e6c980',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #b28947, #e6c980)',
      },
      fontFamily: {
        serif: ['Aureate', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
