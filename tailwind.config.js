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
          DEFAULT: '#957152',
          start: '#957152',
          end: '#e0ba9b',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #957152, #e0ba9b)',
      },
      fontFamily: {
        serif: ['Aureate', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
