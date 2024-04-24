/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors:{
        'blue-main': '#4DABBF',
      },
      fontFamily:{
        "Open-san": ["Open Sans", "sans-serif"],
        "Roboto": ["Roboto", "sans-serif"],
        "Nunito": ["Nunito", "sans-serif"]
      },
      // backgroundImage:{
      //   banner: "url('/img/banner.jpg')"
      // }
    },
  },
  plugins: [],
}

