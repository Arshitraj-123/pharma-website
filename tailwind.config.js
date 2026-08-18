/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#F5F1EA',
        'ivory-alt': '#E9E4DC',
        'ink': '#171515',
        'scientific-green': '#183C35',
        'sage': '#71867D',
        'burgundy': '#6E1830',
        'rose': '#B98591',
        'metallic': '#B9B2A8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
