/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }),
    },
    fontFamily: {
      custom1: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@gradin/tailwindcss-skeleton-screen'),
  ],
}
