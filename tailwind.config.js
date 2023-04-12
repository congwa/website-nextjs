/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  important: true,
  mode: "jit",
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    screens: {
      ss: "480px",
      sm: "600px",
      md: "768px",
      lg: "976px",
      xl: "1200px"
    },
    extend: {
      colors: {
        back: "#f1edee",
        glass: "rgba(255,255,255,0.15)"
      },
      colors: {
        gray: colors.gray,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      spacing: {
        auto: 'auto',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        '1/10': '10%',
        '3/20': '15%',
        '3/10': '30%',
        '14/20': '70%',
        '18/20': '90%',
        '8v': '8vh',
        '70v': '70vh',
        '92v': '92vh',
      },
      width: {
        200: '200%',
      },
      inset: {
        18: '4.5rem',
      },
      minHeight: {
        '1/2': '50%',
      },
      maxHeight: {
        '3/4': '75%',
      },
      minWidth: {
        '1/4': '25%',
      }
    },
  },
  plugins: [],
}

