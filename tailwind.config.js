/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'code': ['Source Code Pro', 'sans-serif']
      },
    },
  },
  plugins: [require('tailwindcss-font-inter'), require('flowbite/plugin')],
  corePlugins: {
    preflight: false,
  },
  darkMode: "class"
}