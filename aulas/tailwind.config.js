/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors:{
        brand: {
          100: '#c542f5',
          200: '#9e35c4',
          300: '#6d2487',
          400: '#331040',
        }
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        jersey: ['Jersey 25','serif']
      },
      // backgroundImage:{
      //   banner: "url('/img/banner.jpg')"
      // }
    },
  },
  plugins: [],
}

