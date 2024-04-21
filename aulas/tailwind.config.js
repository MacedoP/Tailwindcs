/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        brand: '#fccc'
      },
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
        serif: ['Jersey 25','serif']
      },
      // backgroundImage:{
      //   banner: "url('/img/banner.jpg')"
      // }
    },
  },
  plugins: [],
}

