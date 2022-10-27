/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2b2b2b',
        'secondary': '#FFA500',
        'pink': '#FFB6C1',
        'purple': '#CBC3E3',
        'yellow': '#FDFD96',
        'blue': '#ABD7EB',
        'green': '#BFE3B4',
      },
    },
  },
  plugins: [],
}
