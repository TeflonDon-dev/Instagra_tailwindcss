/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

