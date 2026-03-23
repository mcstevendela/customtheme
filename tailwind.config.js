/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./templates/**/*.{twig,html}",
    "./gutenberg/{blocks,components}/**/*.{js,twig}",
    "./*.php",
    "./static/**/*.html",
  ],
  theme: {
    screens: {
      'xs': '0',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: ['Passion One', 'sans-serif'],
    },
    extend: {
      colors: {
        'yellow': '#F39C12',
        'yellow-border': '#EAE1D1',
        'light-yellow': '#F8F0E5',
        'light-yellow-border': '#E5DADB',
        'blue': '#006FFF',
        'blue20': '#006FFF33',
        'light-blue': '#EFF6FA',
        'black': '#333',
        'black24' : '#1E1F2129',
        'black80': '#1E1F21',
        'gray': '#4E4E4E',
        'gray-dark': '#1C1C1C1F',
        'gray-dark16': '#1C1C1C29',
        'gray-light': '#585858',
        'gray-border': '#DEDEDE',
        'white12': '#FFFFFF1F',
        'red': '#FF0000',
      },
    },
  },
  plugins: [],
}