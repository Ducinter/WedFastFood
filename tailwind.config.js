/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['ClashDisplay-Rugular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        tomato:"#E50814",
        marigold:"#ffbe0b",
      }
    },
  },
  plugins: [],
}
